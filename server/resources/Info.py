from flask import Flask, jsonify, request, make_response
from flask.json import JSONDecoder
from flask_restful import Resource
import bcrypt

from database import db
from models.Education import Education, education_schema, education_many_schema
from utils import auth

INFO_MODELS = {
  "education": [Education, education_schema, education_many_schema]
}

class Info(Resource):
  def get(self, user_id):
    pass
  
  def post(self, user_id, info_table):
    Model, simple_schema, many_schema = INFO_MODELS[info_table]

    data = request.get_json()
    new_info = Model(**data)
    simple_schema.sanitize_data(new_info)

    try:
      db.session.add(new_info)
      db.session.commit()
      JSONresponse = simple_schema.dump(new_info)
      return make_response(jsonify(JSONresponse), 201)
    except Exception as e:
      print(str(e))
      return make_response(jsonify({"error":"Não foi possível registrar a informação. Tente novamente mais tarde."}), 500)

  #@auth.auth_required
  def put(self, user_id, user_authenticated):
    pass
  
  #@auth.auth_required
  def delete(self, user_id, user_authenticated):
    pass

def user_exists(name):
  try:
    return User.query.filter_by(username = name).one()
  except:
    None