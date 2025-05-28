import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  static findProductsBelow(price: number) {
  const filtered = products.filter(p => p.price < price);
  return filtered.map(p => new Product(p.name, p.price)); // Creamos instancias de Product
}


  id: number;
  name: string;
  price: number;
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    for (const products of newProducts){
      this.products.push(products)
    }
    // esto no funciona:
    this.products.concat(newProducts);

    // pista: push no suma muchos items (agrega de a uno)
  }

  findAffordableProducts(price: number) {
    return Product.findProductsBelow(price); // Llama al método estático
  }
}

export { User, Product };
