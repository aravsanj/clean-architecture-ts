import { User } from "../../domain/entities/User";
import { IUseCase } from "../../shared/IUseCase";
import { IUserRepository } from "../interfaces/IUserRepository";

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
