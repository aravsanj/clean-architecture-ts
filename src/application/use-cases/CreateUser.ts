import { User } from "../../domain/entities/User";
import { IUseCase } from "../../shared/IUseCase";
import { IUserRepository } from "../../domain/interfaces/IUserRepository";

// This is the application level logic. CreateUser class as the name suggests creates a new user.

// We call it a "use case".

// And it is important to understand that we are getting UserRepository as a dependency here.

// We are creating instance of the User entity and passing it down using repo's save method. All of that happens inside the execute method.

// This way infra layer, application layer, and domain layer remains separate.

// Now we pass instance of CreateUser down to the controller (check main.ts).

// I am using ICreateUserDTO to enforce a contract to the type of object execute method is allowed to update.

// For more context, checkout IUseCase interface, which is pretty much self-explanatory.

interface ICreateUserDTO {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface ICreateUserResult {
  userId: string;
}

export class CreateUser implements IUseCase<ICreateUserDTO, ICreateUserResult> {
  public constructor(private readonly _userRepo: IUserRepository) {}

  public async execute(input: ICreateUserDTO): Promise<ICreateUserResult> {
    const user = new User(
      input.name,
      input.username,
      input.email,
      input.password
    );

    const result = await this._userRepo.save(user);

    if (!result) {
      throw new Error("User couldn't be saved");
    }

    return {
      userId: user.id,
    };
  }
}
