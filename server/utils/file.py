import os

from config import UPLOAD_FOLDER
from mimetypes import guess_extension

class ProfilePhoto:
  def __init__(self, file, user_id):
    self.file = file
    self.user_id = user_id
  
  def file_rename(self):
    ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/gif']
    mime_type = self.file.mimetype
    
    if not mime_type in ALLOWED_MIME_TYPES:
      raise ValueError('O formato do arquivo de imagem deve ser .jpeg, .png ou .gif')
    ext = guess_extension(mime_type)
    return f"photo-userId_{self.user_id}{ext}"

  def save_file(self):
    filename = self.file_rename()
    self.file.save(os.path.join(UPLOAD_FOLDER, filename))
    
    return filename
