import { User } from "./User";

export interface Role {
    roleId: number // primary key
    role: string // not null, unique
}