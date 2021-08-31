import os
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def config_database_path(application):
  path = os.path.dirname(os.path.realpath(__file__))
  db_path = os.path.join(path, './db.sqlite')

  application.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path