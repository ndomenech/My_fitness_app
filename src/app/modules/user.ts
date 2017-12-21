
export class Activities {
    activity: string;
    whatDid: string;
    calories: number;
}

export class User {
    id: number;
    name: string = "Moshe Plotkin";
    activities: Activities[] = [];
    
    
}

export class Room {
    Users: User[] = [new User(), new User()];
    quotes: Activities[] = [];
}
