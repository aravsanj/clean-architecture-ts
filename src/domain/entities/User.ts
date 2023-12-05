// Welcome to domain layer.
// This is the user entity. For the sake of convenience, we are keeping it simple.  

import { randomUUID } from "crypto";

export class User {
  public constructor(
    public readonly name: string,
    public readonly username: string,
    public readonly email: string,
    public readonly password: string,
    public readonly id: string = randomUUID()
  ) {}
}
