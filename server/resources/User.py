from flask import Flask, jsonify, request
from flask_restful import Resource, reqparse

from database import db
from models.User import User

parser = reqparse.RequestParser()
parser.add_argument('username', type=str)
parser.add_argument('email', type=str)

class UserRoute(Resource):
  def get(self):
    response = User.query.all()
    return jsonify(response)
  
  def post(self):
    request.get_json()
    args = parser.parse_args()
    username = str(args['username'])
    email = str(args["email"])

    new_user = User(username, email)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(username=username, email=email)