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
  def post(self, user_id, info_table, info_id, user_authenticated):
    # info_id == 0 é para criar novo registro

    # Pega o Model da informação correspondente
    Model, simple_schema, many_schema = INFO_MODELS[info_table]
    data = request.get_json()

    if not user_id == user_authenticated.id == data["user_id"]:
      '''
        Garante que o usuário existe
        Garante que o usuário está alterando as próprias informações, e não de outro user_id
      '''
      return make_response(jsonify({"error": "Usuário inexistente ou sem permissão para alterar estes dados."}), 401)
    
    new_info = Model(**data) # Cria um novo objeto instanciado de o db.Model com as informações da requisição

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

  @auth.auth_required
  def put(self, user_id, info_table, info_id, user_authenticated):
    # Pega o Model da informação correspondente
    Model, simple_schema, many_schema = INFO_MODELS[info_table]
    data = request.get_json()

    if not user_id == user_authenticated.id:
      return make_response(jsonify({"error": "Usuário sem permissão para alterar estes dados."}), 401)

    try:
      info_instance = Model.query.get(info_id)
      # Altera os valores do BD para os valores da requisição
      for key, value in data.items():
        setattr(info_instance, key, value)
    except:
      return make_response(jsonify({"error": "Usuário não encontrado no banco de dados."}), 400)

    try:
      # Limpa e formata os dados conforme a implementação do Model
      simple_schema.sanitize_data(info_instance)
    except ValueError as err:
      return make_response(jsonify({"error": str(err)}), 400)

    try:
      # Salva as informações no banco de dados
      db.session.commit()
      JSONresponse = simple_schema.dump(info_instance)
      return make_response(jsonify(JSONresponse), 201)
    except Exception as e:
      print(str(e))
      return make_response(jsonify({"error": "Ocorreu um erro ao atualizar os dados."}), 500)
  
  #@auth.auth_required
  def delete(self, user_id, user_authenticated):
    pass