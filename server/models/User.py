from models import ma
from models import db

from models.Education import EducationSchema
from models.Professional import ProfessionalSchema

class User(db.Model):
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
  
  education = db.relationship("Education", cascade="all, delete")
  professional = db.relationship("Professional", cascade="all, delete")

# Marshmallow schema para converter o objeto User em JSON
class UserSchema(ma.Schema):
  education = ma.Nested(EducationSchema, many=True)
  professional = ma.Nested(ProfessionalSchema, many=True)

  class Meta:
    fields = ('id', 'username', 'email', 'phone', 'education', 'professional')

# Esquema para usuário individual
user_schema = UserSchema() 
# Esquema para retorno de múltiplos usuários (-> array)
users_schema = UserSchema(many=True)
