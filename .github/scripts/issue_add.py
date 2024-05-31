import os
import re
import requests

# Obtener el token de GitHub desde las variables de entorno
GITHUB_TOKEN = os.getenv('GH_TOKEN')
REPO_OWNER = 'Hernan2803'
REPO_NAME = 'vina-don-erasmo-page'

# El tag específico que estamos buscando
TAG = 'add element'

# Definir la URL de la API de GitHub para buscar issues
url = f'https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues'

# Configurar la cabecera de autenticación
headers = {
    'Authorization': f'token {GITHUB_TOKEN}',
    'Accept': 'application/vnd.github.v3+json'
}

# Hacer una solicitud GET a la API de GitHub para obtener issues abiertas
response = requests.get(url, headers=headers)
issues = response.json()

# Regex para encontrar URLs de imágenes en el cuerpo de la issue
img_url_pattern = re.compile(r'(https://user-images.githubusercontent.com/[^ ]+)')

# Filtrar las issues por el tag específico
for issue in issues:
    if 'pull_request' in issue:
        # Ignorar los pull requests
        continue
    labels = [label['name'] for label in issue['labels']]
    if TAG in labels:
        print(f"Issue encontrada: #{issue['number']} - {issue['title']}")
        print(f"Descripción: {issue['body']}")

        # Encontrar todas las URLs de imágenes en el cuerpo de la issue
        img_urls = img_url_pattern.findall(issue['body'])
        for img_url in img_urls:
            print(f"Descargando imagen: {img_url}")
            img_data = requests.get(img_url).content
            img_name = img_url.split('/')[-1]
            with open(img_name, 'wb') as handler:
                handler.write(img_data)
            print(f"Imagen guardada como {img_name}")

        break
else:
    print(f"No se encontró ninguna issue con el tag '{TAG}'")
