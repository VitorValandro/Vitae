from flask import Flask, jsonify, request, make_response
from flask.json import JSONDecoder
from flask_restful import Resource
import bcrypt
import jwt
import datetime

from resources.User import user_exists
from config import API_TOKEN

class UserAuth(Resource):
  def post(self):
    auth = request.get_json()
    
    if not auth or not auth["username"] or not auth["password"]:
      return make_response(jsonify(
        {
          "error":"Não foi possível autenticar usuário",
          "WWW-Authenticate": "Basic auth='Login required'"
        }), 401)
    
    user = user_exists(auth["username"])
    if not user:
      return make_response(jsonify({"error":"Usuário não encontrado"}), 401)

    if user and user.password == bcrypt.hashpw(auth["password"].encode("utf-8"), user.password.encode("utf-8")).decode():
      try:
        token = jwt.encode(
          {
            "user": auth["username"], 
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24)
          }, API_TOKEN)
        return make_response(jsonify({"token":token, "user": auth["username"], "user_id": user.id}), 201)
      except Exception as e:
        print(str(e))
        return make_response(jsonify({"error":"Não foi possível autenticar usuário"}), 500)
    
    return make_response(jsonify(
        {
          "error":"Usuário ou senha incorretos",
          "WWW-Authenticate": "Basic auth='Login required'"
        }), 401)
