export interface Recipe {
    id: number;

    name: string;
    nameComplement?: string;
    description: string;
    imageUrl: string;

    calories: number;
    carbo: number;
    protein: number;
    fat: number;

    ingredients: IngredientAmount[];
    types: FoodType[];
}

export interface Ingredient {
    id: number;

    name: string;
    imageUrl: string;
}

export interface IngredientAmount {
    id: number;

    ingredient: Ingredient;
    amount: number;
    measurement: Measurement;
}

export interface FoodType {
    id: number;

    name: string;
    imageUrl: string;
}

export interface Measurement {
    id: number;

    name: string;
}
