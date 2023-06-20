class ProductManager{
    constructor(){
        this.products = [],
        this.idProduct = 1
    }

    getProducts() {
        return this.products;
    };

    addProduct(title,description,price,thumbnail,code,stock){
        //chequeo que los campos no esten vacios
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("Completar todos los campos obligatorios!");
            return;
        }else if(title =="" || description =="" || price =="" || thumbnail =="" || code =="" || stock =="" ){ 
            console.log("Completar toods los campos obligatorios!")
            return;
        }
        // Validamos que el campo "code" no se este repitiendo
        if (this.products.some((product) => product.code === code)) {
            console.error(`El producto con el código ${code} ya existe`);
            return;
        }
        
        // Producto con ID incrementado
        const newProduct = {
            id: this.idProduct,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
        this.idProduct++;

        console.log("Se agrego el producto: ", newProduct);
    };
    

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (product) {
            return product;
        } else {
            console.error(`No se ha prodido encontrar el producto : "${id}"`);
        };
    };
    
};

//ejemplos

const manager = new ProductManager();

manager.addProduct("Prod 1", "Description 1", 100, "img1.jpg", "001", 1000);
manager.addProduct("Prod 2", "Description 2", 250, "img2.jpg", "002", 700);
manager.addProduct("Prod 3", "Description 3", 300, "img3.jpg", "003", 200);
manager.addProduct(50, "img3.jpg", "004", 100);


console.log(manager.getProductById(1));
console.log(manager.getProductById(2));
console.log(manager.getProductById(3));
console.log(manager.getProductById(4));