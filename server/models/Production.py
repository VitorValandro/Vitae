from models import ma
from models import db
from utils.date import check_published_year
from utils.null import verifyIsNull

class Production(db.Model):
  def __init__(self, name, nature, type, date_year, published_on, description, user_id):
    self.name = name
    self.nature = nature
    self.type = type
    self.published_on = published_on
    self.description = description
    self.date_year = date_year
    self.user_id = user_id

  # Definição das colunas
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(128), nullable=False)
  nature = db.Column(db.String(32), nullable=False)
  type = db.Column(db.String(32), nullable=False)
  published_on = db.Column(db.String(128), nullable=True)
  description = db.Column(db.String(128), nullable=True)
  date_year = db.Column(db.String(4), nullable=False)

  user_id = db.Column(db.Integer, db.ForeignKey(
      'user.id', ondelete="CASCADE"), nullable=False)

# Marshmallow schema para converter o objeto User em JSON
class ProductionSchema(ma.Schema):
  def sanitize_data(self, instance: Production):
    check_published_year(instance)
    verifyIsNull([instance.name, instance.nature, instance.published_on])

  class Meta:
    fields = ('id', 'name', 'nature', 'type',
              'description', 'published_on', 'date_year', 'user_id')

# Esquema para usuário individual
production_schema = ProductionSchema()
# Esquema para retorno de múltiplos usuários (-> array)
production_many_schema = ProductionSchema(many=True)
