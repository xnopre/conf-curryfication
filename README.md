Ce dépôt contient le code source de ma présentation sur la Curryfication
lors des Human Talks Grenoble du 12/12/2023.

Le petit diaporama est [disponible en ligne](https://drive.google.com/file/d/1bzp0Enl_7RrYNNsT2LPky14OKdM9v0uF/view?usp=sharing).

# Procédure

- `npm i` pour installer les dépendances
- `npm run test` pour exécuter les tests

# Explications

Tout le code source est à base de tests unitaires qui ont été complétés et implémentés au
fil de la démo :
- [sample1.test.ts](src%2Fsample1.test.ts) : exemple classique sur une méthode `add(a,b)` qui devient `add(a)(b)`
- [sample2.test.ts](src%2Fsample2.test.ts) :
  - Exemple d'une méthode `isAgeOver(age, user)` qui devient `isAgeOver(age)(user)`
  - Exemple de création d'une méthode partielle `isMajor(user)` qui est un raccourci de `isAgeOver(18)`
  - Exemple d'utilisation de `isMajor` dans un `filter` sur une liste de `users`
- [sample3.test.ts](src%2Fsample3.test.ts) :
  - Ces tests manipulent des `Asset` (correspondant à des fichiers et leurs noms) 
  - Le 1er test montre l'existence d'une méthode `getAllAssets()` qui permet de récupérer une liste d'assets
  - Le 2e test montre l'existence d'une méthode `getPermissions(user, asset)`
  - Le 3e test a nécessité la création de la fonction `serializeName` pour un exemple simple
  - Le 4e et dernier test a nécessité la création d'une méthode `serializeAll` qui doit sérialiser
des assets mais qui a besoin d'un `user` pour ajouter les permissions à chaque asset 