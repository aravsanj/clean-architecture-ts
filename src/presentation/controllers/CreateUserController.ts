import { Request, Response } from "express";
import {
  CreateUser,
  ICreateUserResult,
} from "../../application/use-cases/CreateUser";



// Here We take CreateUser use-case (from app layer) as a dependency.

// The handle method here is the one that get called when req is received at the endpoint.

// Then we call the execute method with data coming from api endpoint.

// We have also brought about concept of DTOs. I am using the result interface from the use case to implement the DTO class.

// Then I am type-checking the response by creating its instance using data from the result. 


export class CreatedUserDTO implements ICreateUserResult {
  public readonly userId: string;

  public constructor(id: string) {
    this.userId = id;
  }
}

export class CreateUserController {
  public constructor(private readonly _useCase: CreateUser) {}

  public async handle(req: Request, res: Response): Promise<void> {
    const result = await this._useCase.execute({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const response: CreatedUserDTO = new CreatedUserDTO(result.userId);

    res.status(201).json(response);
  }
}
