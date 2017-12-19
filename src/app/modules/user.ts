export class User {
    id: number;
    name: string = null;

}

export class ActivityList {
    exercise: string;
    WhatDid: string;
    calories: number;
}

export class MealList{
    meal: string;
    WhatHad: string;
    calories: number;
}

export class Lists{
    activities: ActivityList[] = [];
    meals: MealList[]= [];
}
