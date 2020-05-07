from flask import current_app
from flask_smorest import Blueprint, abort
from flask.views import MethodView


from marshmallow import fields
from freenit.schemas.base import BaseSchema
from flask_jwt_extended import get_jwt_identity

#
# This is the class with the child functions.
# This will be: addChild,deleteChild,putChild
# Also there will be a test if the current user is a parent
# This is because a child is not allowed to get parent views
#

blueprint = Blueprint('child', 'child')

class AddChildSchema(BaseSchema):
    childname = fields.Str(required=True, description='childname')

#
# This item will add a child
# A child is add when the person who tries to do this is a parent
# And when the name of the child does not exists yet

# expects:
# IN:
#	childname		- name of the child
@blueprint.route('/add', endpoint='add')
class ChildAPI(MethodView):
	@blueprint.arguments(AddChildSchema)
	def post(self,args):
	    		
	 		# getting all fields
			childname = args.get('childname', None)
		    	
		    	# checking all fields
			if childname is None:
		    		abort(403, message='Argument childname is not defined while this is a required field')
		    	
		    	# checking if we are allowed to do this?
			User = current_app.user_datastore.user_model
			try:
				parent = User.get(id=get_jwt_identity(),parent=None)
			except User.DoesNotExist:
		    		abort(403, message='This action is not allowed with current rights')
		    	
		    	# checking if there is a child like this already
			try:
				child = User.get(name=childname,parent=get_jwt_identity())
				abort(403, message='This child does already exist')
			except User.DoesNotExist:
		    		child = User()
		    		child.save()
		    		
			# declare victory
			answer = jsonify({
				'success':True
			})
			return answer
    	
