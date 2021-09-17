def verifyIsNull(properties):
  for prop in properties:
    if not prop or prop == '':
      raise ValueError("Todos os valores obrigatórios devem ser informados.")
  return False