from flask_marshmallow import Marshmallow

from database import db

ma = Marshmallow()

class UserModel(db.Model):
  def __init__(self, username, email, phone, password):
    self.username = username
    self.email = email
    self.phone = phone
    self.password = password

  # Definição das colunas
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(80), unique=True, nullable=False)
  email = db.Column(db.String(120), unique=True, nullable=False)
  phone = db.Column(db.String(18), nullable=True)
  password = db.Column(db.String(128), nullable=False)

  # Marshmallow schema para converter o objeto User em JSON
class UserModelSchema(ma.Schema):
  class Meta:
    fields = ('id', 'username', 'email', 'phone')

# Esquema para usuário individual
user_schema = UserModelSchema() 
# Esquema para retorno de múltiplos usuários (-> array)
users_schema = UserModelSchema(many=True)