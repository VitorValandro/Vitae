import os
from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

from database import create_database
from resources.User import User

app = Flask(__name__)

api = Api(app)
db = create_database(app)

api.add_resource(User, '/user')

if __name__ == '__main__':
  app.run(debug=True)