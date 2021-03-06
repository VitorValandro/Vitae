# Esse é um middleware para verificar se o usuário está logado ou não.
# A função é um decorator aplicado à todos os recursos que precisam estar
# protegidos por autenticação.

from functools import wraps
from models.User import User
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
      print(data)
      current_user = User.query.filter_by(username = data["user"]).one()
      return resource(user_authenticated=current_user, *args, **kwargs)
    except Exception as e:
      print('Error 2: ', str(e))
      return make_response(jsonify({"error": "Token inválido ou expirado"}), 401)
  return login_decorator