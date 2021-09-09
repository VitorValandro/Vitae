from models import ma
from models import db
from utils.date_converter import date_converter

class Projects(db.Model):
  def __init__(self, name, description, nature, situation, link, start_date, end_date, user_id, members):
    self.name = name
    self.nature = nature
    self.situation = situation
    self.description = description
    self.link = link
    self.members = members
    self.start_date = start_date
    self.end_date = end_date
    self.user_id = user_id

  # Definição das colunas
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(64), nullable=False)
  nature = db.Column(db.String(32), nullable=False)
  situation = db.Column(db.String(64), nullable=False)
  description = db.Column(db.String(300), nullable=True)
  link = db.Column(db.String(128), nullable=True)
  members = db.Column(db.String(300), nullable=False)
  start_date = db.Column(db.Date, nullable=False)
  end_date = db.Column(db.Date, nullable=False)

  user_id = db.Column(db.Integer, db.ForeignKey(
      'user.id', ondelete="CASCADE"), nullable=False)

# Marshmallow schema para converter o objeto User em JSON
class ProjectsSchema(ma.Schema):
  def sanitize_data(self, instance: Projects):
    date_converter(instance)

  class Meta:
    fields = ('id', 'name', 'nature', 'situation',
              'description', 'link', 'members', 'start_date', 'end_date', 'user_id')

# Esquema para usuário individual
projects_schema = ProjectsSchema()
# Esquema para retorno de múltiplos usuários (-> array)
projects_many_schema = ProjectsSchema(many=True)
