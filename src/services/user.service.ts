import bcrypt from "bcrypt";

import { User } from "../entities/User";

const userService = {
  async createUser(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    const user = new User();
    const hashedPass = await bcrypt.hash(password, 10);

    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = hashedPass;

    return user.save();
  },

  async getUserByEmail(email: string) {
    return User.findOneBy({ email });
  },

  async countUsers() {
    return await User.count();
  },
};

export default userService;
