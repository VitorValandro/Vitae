from flask import Flask, jsonify, request, make_response
from flask.json import JSONDecoder
from flask_restful import Resource, reqparse
import bcrypt

from database import db
from models.User import User, user_schema, users_schema

parser = reqparse.RequestParser()
parser.add_argument('username', type=str)
parser.add_argument('email', type=str)
parser.add_argument('phone', type=str)
parser.add_argument('password', type=str)

class UserRoute(Resource):
  def get(self):  
    response = User.query.with_entities(User.username).all()
    JSONresponse = users_schema.dump(response)
    return make_response(jsonify(JSONresponse), 201)
  
  def post(self):
    request.get_json()
    args = parser.parse_args()
    username = str(args['username'])
    email = str(args["email"])
    phone = str(args["phone"])
    plain_password = str(args["password"]).encode("utf-8")
    
    if username is None or plain_password is None or email is None:
      return make_response(jsonify({"error":"Todas as informações devem ser preenchidas"}), 400)

    if User.query.filter_by(username = username).first() is not None:
      return make_response(jsonify({"error":"Já existe um usuário com esse nome"}), 400)
    
    if User.query.filter_by(email = email).first() is not None:
      return make_response(jsonify({"error":"Já existe um usuário com esse email"}), 400)

    password = str(bcrypt.hashpw(plain_password, bcrypt.gensalt()))
    new_user = User(username, email, phone, password)

    try:
      db.session.add(new_user)
      db.session.commit()
      JSONresponse = user_schema.dump(new_user)
      return make_response(jsonify(JSONresponse), 201)
    except:
      return make_response(jsonify({"error":"Não foi possível registrar o usuário. Tente novamente mais tarde."}), 500)