from flask import Flask, jsonify, request, make_response
from flask.json import JSONDecoder
from flask_restful import Resource

from database import db
from models.Education import Education, education_schema, education_many_schema
from utils import auth

# Dicionário que armazena as implementações dos Models
INFO_MODELS = {
  "education": [Education, education_schema, education_many_schema]
}

class Info(Resource):
  '''
    Classe polimórfica que implementa um resource genérico usado 
    para todas as informações de um Usuário
  '''
  def get(self, user_id):
    pass
  
  @auth.auth_required
  def post(self, user_id, info_table, user_authenticated):
    data = request.get_json()

    if not user_id == user_authenticated.id == data["user_id"]:
      '''
        Garante que o usuário existe
        Garante que o usuário está alterando as próprias informações, e não de outro user_id
      '''
      return make_response(jsonify({"error": "Usuário sem permissão para alterar estes dados."}), 401)
    
    Model, simple_schema, many_schema = INFO_MODELS[info_table] # Pega o Model da informação correspondente
    new_info = Model(**data) # Instancia o db.Model

    try:
      # Limpa e formata os dados conforme a implementação do Model
      simple_schema.sanitize_data(new_info)
    except ValueError as err:
      return make_response(jsonify({"error": str(err)}), 400)

    try:
      # Registra a informação no banco de dados
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
