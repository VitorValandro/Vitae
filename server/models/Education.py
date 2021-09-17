from models import ma
from models import db
from utils.date import date_converter
from utils.null import verifyIsNull

class Education(db.Model):
  def __init__(self, name, institution, start_date, end_date, workload, grade, user_id):
    self.name = name
    self.institution = institution
    self.workload = workload
    self.grade = grade
    self.start_date = start_date
    self.end_date = end_date
    self.user_id = user_id

  # Definição das colunas
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(200), nullable=False)
  institution = db.Column(db.String(200), nullable=False)
  workload = db.Column(db.Integer, nullable=True)
  grade = db.Column(db.String(20), nullable=True)
  start_date = db.Column(db.Date, nullable=False)
  end_date = db.Column(db.Date, nullable=False)

  user_id = db.Column(db.Integer, db.ForeignKey(
      'user.id', ondelete="CASCADE"), nullable=False)

# Marshmallow schema para converter o objeto User em JSON
class EducationSchema(ma.Schema):
  def sanitize_data(self, instance: Education):
    date_converter(instance)
    verifyIsNull([instance.name, instance.institution])

  class Meta:
    fields = ('id', 'name', 'institution', 'workload',
              'grade', 'start_date', 'end_date', 'user_id')


# Esquema para usuário individual
education_schema = EducationSchema()
# Esquema para retorno de múltiplos usuários (-> array)
education_many_schema = EducationSchema(many=True)
