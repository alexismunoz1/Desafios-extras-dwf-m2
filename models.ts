import * as jsonfile from "jsonfile";

class Product {
 id: number;
 name: string;
}

class ProductCollection {
 getAll() {
  return jsonfile.readFile("./products.json").then((products) => {
   return products;
  });
 }

 getById(id: number) {
  return this.getAll().then((products) => {
   return products.find(e => e.id == id);
  });
 }
}

export { Product, ProductCollection };
