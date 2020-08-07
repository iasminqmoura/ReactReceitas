import { Recipe, Ingredient, IngredientAmount, FoodType, Measurement } from '../models/food';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
});

let id: number = 0;

export const FoodTypes: FoodType[] = [
    {
        id: id++,
        name: 'All',
        imageUrl: 'https://cdn1.iconfinder.com/data/icons/kitchen-tools-35/64/tray-plate-dish-dinner-512.png'
    }, {
        id: id++,
        name: 'Daily',
        imageUrl: 'https://static.thenounproject.com/png/1422991-200.png'
    }, {
        id: id++,
        name: 'Italian',
        imageUrl: 'https://static.thenounproject.com/png/30194-200.png'
    }, {
        id: id++,
        name: 'Asian',
        imageUrl: 'https://cdn0.iconfinder.com/data/icons/elasto-fast-food/26/06-FOOD-READY_chinese-food-box-512.png'
    }, {
        id: id++,
        name: 'Brazilian',
        imageUrl: 'https://cdn.onlinewebfonts.com/svg/img_436356.png'
    }, {
        id: id++,
        name: 'Japanese',
        imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/japanese-food-819250.png'
    }, {
        id: id++,
        name: 'Mexican',
        imageUrl: 'https://www.shareicon.net/data/512x512/2016/11/25/856568_food_512x512.png'
    }
];

export const Ingredients: FoodType[] = [
    {
        id: id++,
        name: 'All-porpouse flour',
        imageUrl: 'https://static.thenounproject.com/png/42344-200.png'
    }, {
        id: id++,
        name: 'Eggs',
        imageUrl: 'https://cdn3.iconfinder.com/data/icons/food-6-6/48/279-512.png'
    }, {
        id: id++,
        name: 'Milk or buttermilk',
        imageUrl: 'https://image.flaticon.com/icons/png/512/112/112431.png'
    }, {
        id: id++,
        name: 'Fresh blueberries',
        imageUrl: 'https://cdn4.iconfinder.com/data/icons/nature-s-path/70/Colour_Blueberries-512.png'
    }, {
        id: id++,
        name: 'Berries',
        imageUrl: 'https://image.flaticon.com/icons/png/512/621/621717.png'
    }, {
        id: id++,
        name: 'Fermento',
        imageUrl: 'https://static.thenounproject.com/png/1406829-200.png'
    }, {
        id: id++,
        name: 'Cenela',
        imageUrl: 'https://static.thenounproject.com/png/1406829-200.png'
    }, {
        id: id++,
        name: 'Oleo',
        imageUrl: 'https://image.flaticon.com/icons/png/512/114/114945.png'
    }, {
        id: id++,
        name: 'Chocolate',
        imageUrl: 'https://static.thenounproject.com/png/60280-200.png'
    }, {
        id: id++,
        name: 'Pimenta',
        imageUrl: 'https://static.thenounproject.com/png/1406829-200.png'
    }, {
        id: id++,
        name: 'Sal',
        imageUrl: 'https://static.thenounproject.com/png/1406829-200.png'
    }, {
        id: id++,
        name: 'Paprica',
        imageUrl: 'https://static.thenounproject.com/png/1406829-200.png'
    }, {
        id: id++,
        name: 'Cebola',
        imageUrl: 'https://static.thenounproject.com/png/26154-200.png'
    }, {
        id: id++,
        name: 'Ervas',
        imageUrl: 'https://cdn4.iconfinder.com/data/icons/colorful-nature/100/23-10-512.png'
    }, {
        id: id++,
        name: 'Margarina',
        imageUrl: 'https://static.thenounproject.com/png/537744-200.png'
    }
];

export const Measurements: Measurement[] = [
    {
        id: id++,
        name: 'table spoon'
    }, {
        id: id++,
        name: 'tea spoon'
    }, {
        id: id++,
        name: 'ounce'
    }, {
        id: id++,
        name: 'cup'
    }, {
        id: id++,
        name: 'pint'
    }, {
        id: id++,
        name: 'quart'
    }, {
        id: id++,
        name: 'milliliter'
    }, {
        id: id++,
        name: 'liter'
    }, {
        id: id++,
        name: 'g'
    }, {
        id: id++,
        name: 'kg'
    }, {
        id: id++,
        name: 'btl'
    }
];

export function rnd<T>(array: Array<T>): T {
    return array[Math.floor(Math.random() * array.length)];
}

export function rndVal(mult: number = 10) {
    return Math.floor(Math.random() * mult * 2) * 0.5;
}

function rndRecipe(): Recipe {
    const recipeImages: string[] = [
        'https://deltaco.com/files/menu/item/machocomboburrito.png?v=3.91',
        'https://lh3.googleusercontent.com/proxy/fvLYJ9o9RKgMNtJJx5NyVliiKrU1jCfUXulGYoho04ukl811onjSnSiM3A7PRq7oR3mEG-51DcyeUJzPyNPQYVhXH635N7k5JsBl2JQ4x_AC_0PAYNwqLMO2ZOJu2wBF9pOiX29Dns96u6HNn-1qa72c',
        'https://5.imimg.com/data5/LK/KU/HS/SELLER-36763517/black-forest-cake-500x500.png',
        'https://www.pngmart.com/files/8/Grilled-Food-PNG-Transparent-Image.png',
        'https://www.pngarts.com/files/3/Healthy-Food-PNG-Transparent-Image.png',
        'https://lh3.googleusercontent.com/proxy/2nQPUHlEmfRpHhBs8IKrtrsryVdeUluYfU9eNznusj7i4pCMBG_UX9pP92FUKl7bCw0Zz_XguxW8lSsebVbHNucOjPyquwo_QYDz0IPFucDO5XMqzA1XiPPuZ3oYGAq-OSZP'
    ];

    return {
        id: id++,
        name: lorem.generateWords(1),
        nameComplement: lorem.generateWords(2),
        description: lorem.generateSentences(1),
        calories: rndVal(400),
        carbo: rndVal(100),
        protein: rndVal(100),
        fat: rndVal(100),
        imageUrl: rnd(recipeImages),
        ingredients: rndIngredients(),
        types: rndTypes()
    }
}

function rndIngredients(): IngredientAmount[] {
    let result: IngredientAmount[] = [];
    let amount = Math.ceil(Math.random() * 6) + 2;
    for(let i = 0; i < amount; i++)
        result.push({
            id: id++,
            ingredient: rnd(Ingredients),
            measurement: rnd(Measurements),
            amount: rndVal()
        });
    return result;
}

function rndTypes(): FoodType[] {
    let result: FoodType[] = [ FoodTypes[0] ];
    let amount = Math.ceil(Math.random() * 3);
    for(let i = 0; i < amount; i++)
        result.push(rnd(FoodTypes));
    return result;
}

export const Recipes: Recipe[] = [
    {
        id: id++,
        name: 'Pancakes',
        nameComplement: 'with blueberries',
        description: 'This recipe doesn\'t require much thought early in the morning, and tastes great!',
        calories: 420,
        carbo: 33.5,
        protein: 6.8,
        fat: 9.6,
        imageUrl: 'https://www.pngkit.com/png/full/16-165867_buttermilk-pancakes-whipped-topping-and-sweet-ihop-blueberry.png',
        ingredients: [
            {
                id: id++,
                ingredient: Ingredients[0],
                measurement: Measurements[3],
                amount: 2
            }, {
                id: id++,
                ingredient: Ingredients[1],
                measurement: Measurements[10],
                amount: 1
            }, {
                id: id++,
                ingredient: Ingredients[2],
                measurement: Measurements[8],
                amount: 100
            }
        ],
        types: rndTypes()
    },
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe(),
    rndRecipe()
];
