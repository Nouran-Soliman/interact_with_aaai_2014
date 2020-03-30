import json

with open('AAAI-14.json') as f:
  data = json.load(f)

for rec in data:
    rec['authors'] = rec['authors'].replace('and', ',')
    rec['groups'] = rec['groups'].replace('\n', ';')
    rec['topics'] = rec['topics'].replace('\n', ';')
    rec['keywords'] = rec['keywords'].replace('\n', ';')

with open('AAAI-14.json', 'w') as json_file:
  json.dump(data, json_file)


with open('AAAI-14.json') as f:
  data = json.load(f)

#print(data[0])


