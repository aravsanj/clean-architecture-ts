import { CreateUser } from "./application/use-cases/CreateUser";
import { UserRepository } from "./infrastructure/repositories/UsersRepository";
import { Server } from "./presentation/Server";
import { CreateUserController } from "./presentation/controllers/CreateUserController";

export async function main(): Promise<void> {

  const userRepo = new UserRepository();
  const createUser = new CreateUser(userRepo);
  const createUserController = new CreateUserController(createUser);

  await Server.run(3000, createUserController);
}

main();