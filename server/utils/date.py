import datetime

def date_converter(instance):
  start_date = instance.start_date
  end_date = instance.end_date

  if len(start_date) != 10 or len(end_date) != 10:
    raise ValueError('O valor das datas de início e fim deve ser YYYY-MM-DD')
    
  try:
    start_date = datetime.date(
        int(start_date[0:4]), int(start_date[5:7]), int(start_date[8:10]))
    
    end_date = datetime.date(
        int(end_date[0:4]), int(end_date[5:7]), int(end_date[8:10]))
  except Exception as e:
    print(str(e))
    raise ValueError('O valor das datas de início e fim deve ser YYYY-MM-DD')

  for date in [start_date, end_date]:
    if date.year <= 1900 or date.year >= 2100:
      raise ValueError('O valor das datas deve ser entre 1901 e 2099')

  instance.start_date = start_date
  instance.end_date = end_date

def check_published_year(instance):
  year = instance.date_year
  if len(year) != 4:
    raise ValueError('O valor do ano de publicação deve ser YYYY')

  if int(year) <= 1900 or int(year) >= 2100:
    raise ValueError('O valor das datas deve ser entre 1901 e 2099')
