# Esse é um middleware para verificar se o usuário está logado ou não.
# A função é um decorator aplicado à todos os recursos que precisam estar
# protegidos por autenticação.

from functools import wraps
from models.User import UserModel
from flask import request, jsonify, make_response
import jwt

from config import API_TOKEN

def auth_required(resource):
  @wraps(resource) # assegura que os metadados da função resource permaneçam
  def login_decorator(*args, **kwargs): # mantém os argumentos da função resource

    header = request.headers.get("Authorization")
    token = ''
    if header:
      token = header.split(" ")[1]

    if not token:
      return make_response(jsonify({"error": "Nenhum token foi fornecido"}), 401)
    
    try:
      data = jwt.decode(token, API_TOKEN, algorithms=["HS256"])
      current_user = UserModel.query.filter_by(username = data["user"]).one()
      print("ALO", current_user)
      return resource(current_user, *args, **kwargs)
    except:
      return make_response(jsonify({"error": "Token inválido ou expirado"}), 401)
  return login_decorator