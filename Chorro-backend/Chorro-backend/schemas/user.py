from freenit.schemas.user import BaseUserSchema
from marshmallow import fields


class UserSchema(BaseUserSchema):
    pass
    parent = fields.Integer(description='Parent')