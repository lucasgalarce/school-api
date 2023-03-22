import app from "./app";
import { PORT } from "./config";
import { AppDataSource } from "./db";
import userService from "./services/user.service";

async function main() {
  try {
    await AppDataSource.initialize();
    const isFirstUser = await userService.countUsers();
    if (!isFirstUser)
      await userService.createUser("super", "admin", "admin@test.com", "123");
    app.listen(PORT);
    console.log("Server on port", PORT);
  } catch (error) {
    console.error(error);
  }
}

main();
