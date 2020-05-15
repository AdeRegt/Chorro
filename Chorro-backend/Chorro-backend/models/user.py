from freenit.models.sql.user import User as BaseUser
from peewee import IntegerField

class User(BaseUser):
    class Meta:
        table_name = 'users'
    parent = IntegerField(null=True)