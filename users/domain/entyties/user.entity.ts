import type { UserCreatedAt } from './userCreatedAt.value';
import type { UserEmailValue } from './userEmail.value';
import { UserIdValue } from './userId.value';
import type { UserName } from './userName.value';
export interface Options {
    id: UserIdValue
    name: UserName
    email: UserEmailValue
    createdAt: UserCreatedAt
}
export class Users {
    public id: UserIdValue
    public name: UserName
    public email: UserEmailValue
    public createdAt: UserCreatedAt
    constructor (options: Options) {
        this.id = options.id
        this.name = options.name
        this.email = options.email
        this.createdAt = options.createdAt
    }
}