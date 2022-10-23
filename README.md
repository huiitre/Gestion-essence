# Tools

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Installation du projet cordova (fait sur master lors du merge de dev pour la 1.0.0)
```console
cordova create src-cordova fr.huiitre.tools Tools.huiitre.fr
```
```console
cd src-cordova
```
```console
cordova platform add android
```
**Retour à la racine du projet vue puis on lance le run vuejs + cordova android**
```console
cd ../
runperso
```
ou
```console
yarn build
cordova run android
```

### Versioning
Avant chaque passage de version, il faut faire deux choses : 
1. Modifier la version dans le fichier **.env**
2. Modifier la version dans le fichier **config.xml** situé dans *src-cordova*

## Notes de versions
### 1.0 - 20/10/2022
- Mise en place de l'application en version MVP
- Ajout du module **Gestion Essence**
  - Création d'une transaction
  - Suppression d'une ou de plusieurs transactions à la fois
  - Affichage du véhicle en brut
  - Affichage de la consommation moyenne à toutes les transactions
  - Bouton de rechargement dynamique
  - Rechargement dynamique en scrollant au plus bas de la fenêtre

### 1.1 date de déploiement à venir
- Ajout de la page **Configuration**
  - Affichage de la version courante de l'app
  - Affichage du nom de l'utilisateur
  - Affichage de l'url de l'api utilisé pendant la session
- Choix de l'url api à utiliser lors de la connexion, ainsi que du protocol HTTP à utiliser