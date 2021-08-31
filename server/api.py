from flask import Flask
from flask_restful import Api

from database import db, config_database_path
from models.User import User
from resources.User import UserRoute

app = Flask(__name__)

config_database_path(app)
db.app = app
db.init_app(app)
db.create_all()

api = Api(app)
api.add_resource(UserRoute, '/user')

if __name__ == '__main__':
  app.run(debug=True)