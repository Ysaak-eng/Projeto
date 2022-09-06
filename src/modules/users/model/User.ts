import { v4 as uuidV4 } from "uuid";

class User {
  static find() {
    throw new Error("Method not implemented.");
  }
  id: string;
  name: string;
  admin: string;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
