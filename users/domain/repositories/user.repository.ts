import type { CreateUserDto } from "../dtos";
import type { UserEmailValue, Users } from "../entyties";

export interface UserRepository {
    create(createuserdto:CreateUserDto): Promise<void>
    getUsers(): Promise<Users[]>
    getUserByEmail(email:UserEmailValue): Promise<Users | null>
    updatedUser(user: Users): Promise<void>
    deleteUser(email: UserEmailValue): Promise<void>
}