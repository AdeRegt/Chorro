from freenit.api import register_endpoints


def create_api(app):
	#
	# The framework has a prebuild login-logout system.
	# PRE-Registered systems:
	#	auth/login
	#	auth/logout
	#	auth/refresh
	#	auth/register
	#	auth/register/token
	#	auth/reset/request
	#	auth/reset
	#	profile
	#	roles
	#	roles/id
	#	roles/id/user
	#	roles/id/user/id
	#	users
	#	users/id
	#	authentication/login

	# Import blueprints
	#	EXAMPLE:
	#		from .example import blueprint as example 
	#			.example is pythonfile in active folder ( ./example.py )
	from .child import blueprint as child
	
	# Adding blueprints to endpoint
	register_endpoints(app, '/api/v0', [
		#	EXAMPLE:
		#		example,
		child,
	])
