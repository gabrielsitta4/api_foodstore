import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Cliente from "App/Models/Cliente";
import User from "App/Models/User";

export default class ClienteSeeder extends BaseSeeder {
  public async run() {
    const user = await User.create({
      email: "cliente@email.com",
      password: "12345678",
      tipo: "clientes",
    });
    await Cliente.create({
      nome: "Cliente",
      telefone: "114599999999",
      userId: user.id,
    });
  }
}
