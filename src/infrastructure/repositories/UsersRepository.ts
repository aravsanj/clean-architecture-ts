import { IUserRepository } from "../../application/interfaces/IUserRepository";
import { User } from "../../domain/entities/User";

export class UserRepository implements IUserRepository {
  private readonly _users: User[] = [];

  public async save(user: User): Promise<boolean> {
    this._users.push(user);
    return true;
  }
}
