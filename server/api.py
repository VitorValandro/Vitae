from flask import Flask
from flask.json import jsonify
from flask_restful import Api

from database import db, config_database_path
from models.User import User
from models.Education import Education

from resources.User import UserRoute
from resources.UserAuth import UserAuth
from resources.Info import Info

app = Flask(__name__)

config_database_path(app)
db.app = app
db.init_app(app)
db.create_all()

api = Api(app)
api.add_resource(UserRoute, '/user/<int:user_id>')
api.add_resource(UserAuth, '/user/auth')

api.add_resource(Info, '/user/<int:user_id>/info/<string:info_table>/<int:info_id>')

if __name__ == '__main__':
  app.run(debug=True)
