import { faker } from "@faker-js/faker";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Categoria from "App/Models/Categoria";
import Produto from "App/Models/Produto";

export default class CategoriaProdutoSeeder extends BaseSeeder {
  public async run() {
    
      let categoria = await Categoria.create({
        nome: 'Frutas',
        descricao: 'Frutas frescas e novas',
        posicao: 1,
        estabelecimento_id: 1,
      });

      await Produto.createMany([
        {
          nome: 'Banana',
          imagem: "https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg",
          descricao: 'Banana Prata',
          preco: 2.00,
          categoria_id: categoria.id,
          posicao: 1,
          unidade: "UN",
        },
        {
          nome: 'Maca',
          imagem: "https://hortifruti.com.br/media/catalog/product/1/0/100173-maca-gala-importada-unidade.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
          descricao: 'Macas frescas',
          preco: 4.00,
          categoria_id: categoria.id,
          posicao: 2,
          unidade: "UN",
        },
        {
          nome: 'Uva',
          imagem: "https://www.peterpaiva.com.br/wp-content/uploads/2014/11/uvas-ROJAS.jpg",
          descricao: 'Uvas frescas',
          preco: 3.00,
          categoria_id: categoria.id,
          posicao: 3,
          unidade: "UN",
        },
      ]);

      let categoria1 = await Categoria.create({
        nome: 'Carnes',
        descricao: 'Carnes do melhores animais',
        posicao: 1,
        estabelecimento_id: 1,
      });

      await Produto.createMany([
        {
          nome: 'Picanha',
          imagem: "https://swiftbr.vteximg.com.br/arquivos/ids/183295-768-768/picanha-ouro-swift-615458_1.jpg?v=637919400325570000",
          descricao: 'Pedaco mais nobre do boi',
          preco: 79.90,
          categoria_id: categoria1.id,
          posicao: 1,
          unidade: "KG",
        },
        {
          nome: 'Costela',
          imagem: "https://cdn.emporio481.com.br/wp-content/uploads/2018/10/costela-4-ossos_carne-1-1024x683.jpg",
          descricao: 'Costelas do boi de hoje',
          preco: 41.90,
          categoria_id: categoria1.id,
          posicao: 2,
          unidade: "KG",
        },
        {
          nome: 'Frango',
          imagem: "https://receitinhas.com.br/wp-content/uploads/2017/09/frango-assado-oriental.jpg",
          descricao: 'Frango sem recheio',
          preco: 25.00,
          categoria_id: categoria1.id,
          posicao: 3,
          unidade: "UN",
        },
      ]);

      let categoria2 = await Categoria.create({
        nome: 'Chopp',
        descricao: 'Diversidade de Chopps na regiao',
        posicao: 1,
        estabelecimento_id: 3,
      });

      await Produto.createMany([
        {
          nome: 'Chopp Artesanal',
          imagem: "https://choppfacil.com.br/wp-content/uploads/2022/05/homechopp-e1653240835515-1970x1478.jpg",
          descricao: 'Chopp produzido pela casa',
          preco: 8.00,
          categoria_id: categoria2.id,
          posicao: 1,
          unidade: "UN",
        },
        {
          nome: 'Chopp Brahma',
          imagem: "https://images.tcdn.com.br/img/img_prod/841126/copo_chopp_brahma_350ml_11013_2_0e79eb54d38c250d12013837f07ec787.png",
          descricao: 'Brahma melhor da regiao',
          preco: 7.00,
          categoria_id: categoria2.id,
          posicao: 2,
          unidade: "UN",
        },
        {
          nome: 'Chopp de Uva',
          imagem: "https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/5e6fb5ca-3980-4e5d-8b4a-5e8aac1e0dfe/5e6fb5ca-8b9c-4258-b5d5-5e8aac1e0dfe.jpg",
          descricao: 'Chopp feito de uvas frescas',
          preco: 10.00,
          categoria_id: categoria2.id,
          posicao: 3,
          unidade: "UN",
        },
      ])
    
  }
}
