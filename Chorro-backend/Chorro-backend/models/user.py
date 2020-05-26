from freenit.models.sql.user import User as BaseUser
import peewee as pw

class User(BaseUser):
    parent = pw.IntegerField(null=True,db_column="parent")
    name = pw.TextField(null=True,db_column="name")
    class Meta:
        table_name = 'users'