import { User } from "./tstype";

export function getUser(name: string): User {
  return { name, age: 0 };
}
