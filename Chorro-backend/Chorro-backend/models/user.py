from freenit.models.sql.user import User as BaseUser


class User(BaseUser):
    class Meta:
        table_name = 'users'
