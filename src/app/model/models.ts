export class Contact {
    id: number;
    name: string;
    dob: Date;
    telephone: string;
    city: string;
}

export class ReducedUser {
    id: number;
    user: string;
    password: string;
    role: string;
}

export class User extends ReducedUser {
    repeatPassword : string;
}
