from database import db
from dataclasses import dataclass

@dataclass
class User(db.Model):
  def __init__(self, username, email):
    self.username = username
    self.email = email
  
  # Definição de tipos pro parser @dataclass
  id: int
  username: str
  email: str

  # Definição das colunas
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(80), unique=True, nullable=False)
  email = db.Column(db.String(120), unique=True, nullable=False)