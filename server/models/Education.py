from models import ma
from models import db

import datetime

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

  user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
  user = db.relationship('User', backref=db.backref('education', lazy=True))

# Marshmallow schema para converter o objeto User em JSON
class EducationSchema(ma.Schema):
  def sanitize_data(self, instance:Education):
    # IMPLEMENTAR CONTROLE DE EXCEÇÃO
    start_date = instance.start_date
    end_date = instance.end_date
    try:
      instance.start_date = datetime.date(int(start_date[0:4]), int(start_date[4:6]), int(start_date[6:8]))
      instance.end_date = datetime.date(int(end_date[0:4]), int(end_date[4:6]), int(end_date[6:8]))
    except:
      raise ValueError('O valor de start_date e end_date deve ser YYYYMMDD')

  class Meta:
    fields = ('id', 'name', 'institution', 'workload', 'grade', 'start_date', 'end_date', 'user_id')

# Esquema para usuário individual
education_schema = EducationSchema() 
# Esquema para retorno de múltiplos usuários (-> array)
education_many_schema = EducationSchema(many=True)