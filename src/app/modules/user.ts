export class User {
    id: number;
    name: string = 'Null Buddy';

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

    
}

export class Members{
    members: User[] = [new User(), new User() ];
    activities: ActivityList[] = [];
    meals: MealList[]= [];
}


