import datetime

def date_converter(instance):
  start_date = instance.start_date
  end_date = instance.end_date

  if len(start_date) != 8 or len(end_date) != 8:
    raise ValueError('O valor de start_date e end_date deve ser YYYYMMDD')

  try:
    start_date = datetime.date(
        int(start_date[0:4]), int(start_date[4:6]), int(start_date[6:8]))
    end_date = datetime.date(
        int(end_date[0:4]), int(end_date[4:6]), int(end_date[6:8]))
  except:
    raise ValueError('O valor de start_date e end_date deve ser YYYYMMDD')

  for date in [start_date, end_date]:
    if date.year <= 1900 or date.year >= 2100:
      raise ValueError('O valor das datas deve ser entre 1901 e 2099')

  instance.start_date = start_date
  instance.end_date = end_date