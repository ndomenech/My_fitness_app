
export class Activities {
    activity: string;
    whatDid: string;
    calories: number;
}

export class ProfileInfo{
    goalWeight: number;
    goalCalories: number;
    currentWeight: number;
    currentCalories: number;
}

export class User {
    id: number;
    name: string = "Moshe Plotkin";
    activities: Activities[] = [];
    profileInfo: ProfileInfo;

}

export class Room {
    Users: User[] = [new User(), new User()];
    quotes: Activities[] = [];
}
