import { User } from "../../domain/entities/User";

export interface IUserRepository {
  save(user: User): Promise<boolean>;
}
