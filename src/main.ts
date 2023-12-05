import { CreateUser } from "./application/use-cases/CreateUser";
import { UserRepository } from "./infrastructure/repositories/UsersRepository";
import { Server } from "./presentation/Server";
import { CreateUserController } from "./presentation/controllers/CreateUserController";

// This is the starting point of the application. The goal of the main() is to simply start the server.

// Notice how I am creating userRepo and passing it as a dependency to createUser?
// That's basically dependency injection at play. 
// This makes the CreateUser (application layer) independent of UserRepository (infrastructure layer).

// CreateUser doesn't know which underlying storage mechanism is being used.
// That makes it easier to swap (let's say) one database with another

// The same principles apply between createUserController (presentation layer) and createUser (application layer)

// If you inspect the CreateUser class, you can see that I am creating instance of User entity.
// Then passing it down to the save() method of userRepo

// This way entities (domain layer) remain separate from rest of the application. 

// So we can basically see 4 layers: Domain Layer, Application Layer, Presentation Layer, Infrastructure Layer

// Communication only happens in order Infrastructure Layer > Presentation Layer > Application Layer > Domain Layer

// You can visualize them as concentric circles where communication is only allowed from outer layer to inner layer

export async function main(): Promise<void> {

  const userRepo = new UserRepository();
  const createUser = new CreateUser(userRepo);
  const createUserController = new CreateUserController(createUser);

  await Server.run(3000, createUserController);
}

main();