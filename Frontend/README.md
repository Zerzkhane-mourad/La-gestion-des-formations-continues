 1. On créer docker file

    FROM node:16
    WORKDIR /app
    COPY package.json .
    RUN npm install
    COPY . .
    EXPOSE 3000
    CMD ["npm","start"]

 2. On Entrer dans le dossier du serveur ou se trouver Dockerfile et on  creer cette image et nommez-la livraison-marhaba-frontend-docker:test avec la commande

 - docker build -t livraison-marhaba-frontend-docker:test .

 3. On Exécutez un container basé sur image livraison-marhaba-frontend-docker:test, on nommez livraison-marhaba-fontend  on utiliser avec le network livraison-marhaba avec la commande :

 - docker container run -d --name livraison-marhaba-fontend -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-net -p 3000:3000 livraison-marhaba-frontend-docker:test