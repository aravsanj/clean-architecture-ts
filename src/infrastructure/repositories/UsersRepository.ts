import { IUserRepository } from "../../application/interfaces/IUserRepository";
import { User } from "../../domain/entities/User";

// This is our user repository

// If you're confused what a repository is, basically it is like a interface (Or more accurately an abstract class here!).
// I am just defining the methods for data access / retrieval so it can be kept independent of storage mechanism.

// Here I am just storing the user in an array, but of course it can be your actual database.

// Notice that I am importing the User entity class from the domain layer.

// Since we pass down instance of userRepo to createUser (app layer) and createUser to createUserController (pres layer). 
// That way type checking will be enforced through out (check main.ts)

export class UserRepository implements IUserRepository {
  private readonly _users: User[] = [];

  public async save(user: User): Promise<boolean> {
    this._users.push(user);
    return true;
  }
}
