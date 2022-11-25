
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Cidade from "App/Models/Cidade";
import CidadesEstabelecimento from "App/Models/CidadesEstabelecimento";
import Estabelecimento from "App/Models/Estabelecimento";
import Estado from "App/Models/Estado";
import User from "App/Models/User";

export default class EstabelecimentoSeeder extends BaseSeeder {
  public async run() {
    const user = await User.create({
      email: "gabriel@email.com",
      password: "12345678",
      tipo: "estabelecimentos",
    });

    await Estabelecimento.create({
      nome: "GabrielsFood",
      logo: "https://almanake.net/wp-content/uploads/2022/08/a-historica-do-mc-donalds-scaled.jpg",
      online: true,
      bloqueado: false,
      userId: user.id,
    });

    const user1 = await User.create({
      email: "amoz@email.com",
      password: "12345678",
      tipo: "estabelecimentos",
    });

    await Estabelecimento.create({
      nome: "Amoz Pizzaria",
      logo: "https://almanake.net/wp-content/uploads/2022/08/a-historica-do-mc-donalds-scaled.jpg",
      online: true,
      bloqueado: false,
      userId: user1.id,
    });

    const user2 = await User.create({
      email: "leonardo@email.com",
      password: "12345678",
      tipo: "estabelecimentos",
    });


    await Estabelecimento.create({
      nome: "Leonardo Chop",
      logo: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/07/02/2d538d67-7546-44a6-b322-fccd43f7bbeb.png",
      online: true,
      bloqueado: false,
      userId: user2.id,
    });


    await Estado.createMany([
      {
        nome: "Parana",
        uf: "PR",
      }
    ]);

    await Cidade.createMany([
      {
        nome: "Medianeira",
        estado_id: 1,
      },
      {
        nome: "Cascavel",
        estado_id: 1,
      },
    ]);


    await CidadesEstabelecimento.create({
        cidade_id: 1,
        estabelecimento_id: 1,
        custo_entrega: 10,
    });

    await CidadesEstabelecimento.create({
        cidade_id: 2,
        estabelecimento_id: 2,
        custo_entrega: 15,
    });

    await CidadesEstabelecimento.create({
      cidade_id: 1,
      estabelecimento_id: 3,
      custo_entrega: 15,
  });

  }
}
