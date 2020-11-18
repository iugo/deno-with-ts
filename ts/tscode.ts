import { User } from "./type";

export function getUser(name: string, opt?: any): User {
  if (opt?.id === "1") {
    return { name: "Joe", age: 0 };
  }
  return { name, age: 0 };
}
