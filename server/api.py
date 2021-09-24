from flask import Flask
from flask.json import jsonify
from flask_restful import Api
from flask_cors import CORS

from database import db, config_database_path
from config import CLIENT_ORIGIN
from models.User import User
from models.Education import Education
from models.Professional import Professional
from models.Projects import Projects
from models.Production import Production

from resources.User import UserRoute, UserList, PhotoUpload
from resources.UserAuth import UserAuth
from resources.Info import Info

app = Flask(__name__)
CORS(app, resources={"/*": {"origins":CLIENT_ORIGIN}})

config_database_path(app)
db.app = app
db.init_app(app)
db.create_all()

api = Api(app)
api.add_resource(UserRoute, '/user/<int:user_id>')
api.add_resource(PhotoUpload, '/user/<int:user_id>/upload')
api.add_resource(UserList, '/users/')
api.add_resource(UserAuth, '/user/auth')

api.add_resource(Info, '/user/<int:user_id>/info/<string:info_table>/<int:info_id>')

if __name__ == '__main__':
  app.run(debug=True)
