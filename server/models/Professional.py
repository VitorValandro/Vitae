from models import ma
from models import db
from utils.date import date_converter

class Professional(db.Model):
  def __init__(self, role, company, workload, description, start_date, end_date, user_id):
    self.role = role
    self.company = company
    self.workload = workload
    self.description = description
    self.start_date = start_date
    self.end_date = end_date
    self.user_id = user_id

  # Definição das colunas
  id = db.Column(db.Integer, primary_key=True)
  role = db.Column(db.String(64), nullable=False)
  company = db.Column(db.String(200), nullable=False)
  workload = db.Column(db.Integer, nullable=True)
  description = db.Column(db.String(300), nullable=True)
  start_date = db.Column(db.Date, nullable=False)
  end_date = db.Column(db.Date, nullable=False)

  user_id = db.Column(db.Integer, db.ForeignKey(
      'user.id', ondelete="CASCADE"), nullable=False)

# Marshmallow schema para converter o objeto User em JSON
class ProfessionalSchema(ma.Schema):
  def sanitize_data(self, instance: Professional):
    date_converter(instance)

  class Meta:
    fields = ('id', 'role', 'company', 'workload',
              'description', 'start_date', 'end_date', 'user_id')

# Esquema para usuário individual
professional_schema = ProfessionalSchema()
# Esquema para retorno de múltiplos usuários (-> array)
professional_many_schema = ProfessionalSchema(many=True)
