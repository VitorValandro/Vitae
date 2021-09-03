from flask import Flask, jsonify, request, make_response
from flask.json import JSONDecoder
from flask_restful import Resource, reqparse
import bcrypt
import jwt
import datetime

from database import db
from config import API_TOKEN
from models.User import UserModel, user_schema, users_schema
from utils import auth

parser = reqparse.RequestParser()
parser.add_argument('username', type=str)
parser.add_argument('email', type=str)
parser.add_argument('phone', type=str)
parser.add_argument('password', type=str)

class User(Resource):
  def get(self, user_id):  
    response = UserModel.query.with_entities(UserModel.username).all()
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

    if user_exists(username):
      return make_response(jsonify({"error":"Já existe um usuário com esse nome"}), 400)
    
    if UserModel.query.filter_by(email = email).first() is not None:
      return make_response(jsonify({"error":"Já existe um usuário com esse email"}), 400)

    password = str(bcrypt.hashpw(plain_password, bcrypt.gensalt()).decode('utf-8'))
    new_user = UserModel(username, email, phone, password)

    try:
      db.session.add(new_user)
      db.session.commit()
      JSONresponse = user_schema.dump(new_user)
      return make_response(jsonify(JSONresponse), 201)
    except Exception as e:
      print(str(e))
      return make_response(jsonify({"error":"Não foi possível registrar o usuário. Tente novamente mais tarde."}), 500)

  @auth.auth_required
  def put(self, user_id, user_authenticated):
    request.get_json()
    data = parser.parse_args()

    if not user_id == str(user_authenticated.id):
      return make_response(jsonify({"error":"Usuário sem permissão para atualizar os dados desse usuário."}), 401)
    
    try:
      user = UserModel.query.get(user_id)
      user.username = str(data["username"])
      user.email = str(data["email"])
      user.phone = str(data["phone"])
      db.session.commit()
      JSONresponse = user_schema.dump(user)
      return make_response(jsonify(JSONresponse), 201)
    except:
      return make_response(jsonify({"error":"Ocorreu um erro ao atualizar os dados."}), 500)

class UserAuth(Resource):
  def post(self):
    auth = request.authorization
    if not auth or not auth.username or not auth.password:
      return make_response(jsonify(
        {
          "error":"Não foi possível autenticar usuário",
          "WWW-Authenticate": "Basic auth='Login required'"
        }), 401)
    
    user = user_exists(auth.username)
    if not user:
      return make_response(jsonify({"error":"Usuário não encontrado"}), 401)

    if user and user.password == bcrypt.hashpw(auth.password.encode("utf-8"), user.password.encode("utf-8")).decode():
      try:
        token = jwt.encode(
          {
            "user": auth.username, 
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24)
          }, API_TOKEN)
        return make_response(jsonify({"token":token}), 201)
      except Exception as e:
        print(str(e))
        return make_response(jsonify({"error":"Não foi possível autenticar usuário"}), 500)
    
    return make_response(jsonify(
        {
          "error":"Usuário ou senha incorretos",
          "WWW-Authenticate": "Basic auth='Login required'"
        }), 401)

def user_exists(name):
  try:
    return UserModel.query.filter_by(username = name).one()
  except:
    None