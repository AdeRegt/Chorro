from flask_smorest import Blueprint, abort
from freenit.api.methodviews import ProtectedMethodView
from datetime import datetime, timedelta
from email.mime.text import MIMEText
from flask import current_app, jsonify, request
from marshmallow import fields
from freenit.schemas.base import BaseSchema
from flask_jwt_extended import get_jwt_identity, create_access_token
from flask_security.utils import hash_password
import string
import random

#
# This is the class with the child functions.
# This will be: addChild,deleteChild,putChild
# Also there will be a test if the current user is a parent
# This is because a child is not allowed to get parent views
#

blueprint = Blueprint('child', 'child')

class AddChildSchema(BaseSchema):
    childname = fields.Str(required=True, description='childname')
    childemail = fields.Str(required=True, description='childemail')

#
# This item will add a child
# A child is add when the person who tries to do this is a parent
# And when the name of the child does not exists yet

# expects:
# IN:
#	childname		- name of the child
@blueprint.route('/add', endpoint='add')
class ChildAPI(ProtectedMethodView):
	@blueprint.arguments(AddChildSchema)
	def post(self,args):
	    		
	 		# getting all fields
			childname = args.get('childname', None)
			email = args.get('childemail', None)
		    	
		    # checking all fields
			if childname is None:
		    		abort(403, message='Argument childname is not defined while this is a required field')
			# checking email
			if email is None:
		    		abort(403, message='Argument childemail is not defined while this is a required field')
		    	
		    # checking if we are allowed to do this?
			User = current_app.user_datastore.user_model
			idt = get_jwt_identity()
			try:
				parent = User.get(id=idt,parent=None)
			except User.DoesNotExist:
		    		abort(403, message='This action is not allowed with current rights')
		    	
			# random hash
			rnd = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(30))

		    # checking if there is a child like this already
			try:
				child = User.get(name=childname,parent=idt)
				abort(403, message='This child does already exist')
			except User.DoesNotExist:
				child = User()
			
			child.parent = idt
			child.name = childname
			child.email = email
			child.active = True
			child.password = hash_password(rnd)
			child.save()

			expires = timedelta(
				hours=current_app.config['PASSWORD_RESET_EXPIRY'],
			)
			identity = {
				'id': child.id,
				'reset': True,
			}
			host = request.headers.get('Origin', request.url_root)
			resetToken = create_access_token(identity, expires_delta=expires)
			url = f'{host}/reset/{resetToken}'
			msg = MIMEText(url, 'plain', 'utf-8')
			msg['From'] = 'office@example.com'
			subjects = current_app.config['SUBJECTS']
			subject = subjects['prefix'] + subjects['register']
			msg['Subject'] = subject
			msg['To'] = child.email
			current_app.sendmail(msg)

			# declare victory
			answer = jsonify({
				'success':True
			})
			return answer
    	
