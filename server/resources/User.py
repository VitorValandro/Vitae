from flask import Flask, jsonify, request, make_response
from flask.json import JSONDecoder
from flask_restful import Resource
from sqlalchemy.orm import joinedload
import bcrypt

from database import db
from models.User import User, user_schema, users_schema
from utils import auth

class UserRoute(Resource):
  def get(self, user_id):
    try:
      print(user_id)
      user = User.query.filter(User.id==user_id).options(joinedload('education')).first()
      print(user)
      JSONresponse = user_schema.dump(user)
      return make_response(jsonify(JSONresponse), 201)
    except Exception as e:
      print(str(e))
      return make_response(jsonify({"error":"Ocorreu um erro ao consultar os dados."}), 500)
  
  def post(self, user_id):
    # user_id == 0 é para criar novo registro
    data = request.get_json()

    plain_password = data["password"].encode("utf-8")
    
    if data["username"] is None or plain_password is None or data["email"] is None:
      return make_response(jsonify({"error":"Todas as informações devem ser preenchidas"}), 400)

    if user_exists(data["username"]):
      return make_response(jsonify({"error":"Já existe um usuário com esse nome"}), 400)
    
    if User.query.filter_by(email = data["email"]).first() is not None:
      return make_response(jsonify({"error":"Já existe um usuário com esse email"}), 400)

    password = str(bcrypt.hashpw(plain_password, bcrypt.gensalt()).decode('utf-8'))
    new_user = User(data["username"], data["email"], data["phone"], password)

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
    data = request.get_json()
 
    if not user_id == user_authenticated.id:
      return make_response(jsonify({"error":"Usuário sem permissão para atualizar os dados desse usuário."}), 401)
    
    if user_exists(data["username"]):
      return make_response(jsonify({"error":"Já existe um usuário com esse nome"}), 400)
    
    if User.query.filter_by(email = data["email"]).first() is not None:
      return make_response(jsonify({"error":"Já existe um usuário com esse email"}), 400)
    
    try:
      user = User.query.get(user_id)
      user.username = data["username"]
      user.email = data["email"]
      user.phone = data["phone"]
      db.session.commit()
      JSONresponse = user_schema.dump(user)
      return make_response(jsonify(JSONresponse), 201)
    except Exception as e:
      print(str(e))
      return make_response(jsonify({"error":"Ocorreu um erro ao atualizar os dados."}), 500)
  
  @auth.auth_required
  def delete(self, user_id, user_authenticated):
    if not user_id == user_authenticated.id:
      return make_response(jsonify({"error":"Usuário sem permissão para deletar os dados desse usuário."}), 401)
    
    try:
      user = User.query.get(user_id)
      db.session.delete(user)
      db.session.commit()
      return make_response(jsonify({"message":"Usuário deletado com sucesso"}), 201)
    except:
      return make_response(jsonify({"error":"Ocorreu um erro ao atualizar os dados."}), 500)

class UserList(Resource):
  def get(self):
    try:
      users = User.query.with_entities(User.username).all()
      JSONresponse = users_schema.dump(users)
      return make_response(jsonify(JSONresponse), 201)
    except:
      return make_response(jsonify({"error": "Ocorreu um erro ao consultar os dados."}), 500)

def user_exists(name):
  try:
    return User.query.filter_by(username = name).one()
  except:
    None