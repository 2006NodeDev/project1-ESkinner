export class User {
    //copy-pasted from README
    userId: number // primary key
    username: string // not null, unique
    password: string // not null
    firstName: string // not null
    lastName: string // not null
    email: string // not null
    picturePath: string // not null
  }