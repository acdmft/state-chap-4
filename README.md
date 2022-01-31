## Reprenez l'exercice Elsy du Jour 1 !

## 06 - State

Dans `App.js` :

- Effacez les `p` qu'il y a avant l'appel au `Box` Water
- Vérifiez que vous avez bien un constructeur
- Créez le state avec les clés et valeurs suivantes :
    - water : `0`
    - heart : `120`
    - temperature : `-10`
    - steps  : `3000`

## 07 - Slider 

Pour changer les valeurs, on aura besoin d’un slider. Vous l'avez sûrement remarqué, la case "Water" n'en a pas ! Dans `Box.js` :

- Ajoutez dans le render une condition permettant d'afficher un élément si `Box.js` ne représente pas la case Water (cherchez dans la doc officielle de React)
- Dans cette condition, ajoutez un `input` de type `range` (cherchez des infos sur MDN si besoin)
- Cet input utilisera les attributs `min`, `max`, `value` et `onChange` (pour l'action) avec des valeurs données par les props (qu'on enverra depuis App dans la prochaine étape)

## 08 - Methods & Props

Dans `App.js` :

- Créez la méthode `onHeartChange` qui reçoit un paramètre `e` (Correspondant à l’événement)
    - La méthode change le state de `this.state.heart` avec la valeur `value` de `e` (piste: faites pas `e.value`)
    - N'oubliez pas de bind la méthode !
- Envoyez les props suivantes au composant `Box` correspondant à `Heart` :
    - `min` avec la valeur `heartMin`
    - `max` avec la valeur `heartMax`
    - `onChange` avec la reference de `onHeartChange`
    - Modifiez l'envoie de `value` pour passer le state `heart`, à la place de la valeur par défaut qui était `120`

Revenez à `Box` et utilisez les nouvelles props dans votre input range.

Vérifiez que vous pouvez manipuler votre slider et que celui-ci suit les mouvements de votre curseur. Le chiffre change ? Faites la même chose pour les boîtes de `steps` et `temperature` !

## 09 - Water

Dans `App.js` :

- Créez une méthode `calculateWater` qui va recalculer l'eau à boire et updater le state `water` quand les autres states changent.

Toutes les interactions sont en places, il faut maintenant créer la formule pour savoir combien de litres d’eau vous allez boire par jour.

Voici l’énoncé :

- Quelque soit les éléments externes, vous devez boire au minimum 1,5 litre d’eau par jour
- Si la température est supérieure à 20 degrés Celsius, chaque degré au dessus aura un facteur de 0,02 litres en plus
- Si les battements de coeurs sont au dessus de 120, chaque battement au dessus aura un facteur de 0,0008 litres en plus
- Si le nombre de pas est supérieur à 10 000, chaque pas au dessus aura un facteur de 0,00002 litres en plus

⭐ Bonus 1

Dans Box, rajoutez une autre condition dans le render pour que le input range ait un attribut step de 1000 si c'est le box steps. Testez-le et vérifiez que juste celui de steps ait changé.

⭐⭐ Bonus 2

Rendez votre page un peu plus fun en ajoutant au moins une animation et un dégradé !