// Welcome to domain layer.
// This is the user entity. For the sake of convenience, we are keeping it simple.

import { randomUUID } from "crypto";

type UserParams = {
  name: string;
  username: string;
  email: string;
  password: string;
  id?: string;
};

export class User {
  name: string;
  username: string;
  email: string;
  password: string;
  id: string;

  public constructor({
    name,
    username,
    email,
    password,
    id = randomUUID(),
  }: UserParams) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.id = id;
  }
}
