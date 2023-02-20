class ProductManager {
    static id = 1


    constructor () {
        this.products = [];

    }
    
    addProduct(title, description, price, thumbnail, code, stock ) {
        
        const product = ({
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ProductManager.id
        })
            
        if (this.products !=  undefined){
            
            const chekCode = this.products.find(e => e.code === product.code)
            
            console.log(product.code)
            console.log(chekCode)
            if (chekCode != undefined) {
                 console.log('error, se a colocado el mismo codigo en un producto distinto')
             } else if ( (!product.title ) || (!product.description) || (!product.price ) || (!product.thumbnail ) || (!product.code ) || (!product.stock ) ) {
                  console.log('todos los campos son obligatorios ')
             } else {
                this.products.push(product)
                ProductManager.id++ 
            }
            
        } else {
            if ((product.title = undefined) || (product.description = undefined) || (product.price = undefined) || (product.thumbnail = undefined) || (product.code = undefined) || (product.stock = undefined) ) {
                console.log('todos los campos son obligatorios')
                 
             } else {
                this.products.push(product)
                ProductManager.id++ 
            }    
        }        
                

    }
    getProducts() {
        console.log(this.products)
    }
    getProductsById(id) {
        const productId = this.products.find(e => e.id == id)
        if(productId != undefined){
            console.log("productId")
            console.log(productId)
        } else {
            console.log("not found")
        }
    }
}
   
 


const products = new ProductManager();

products.addProduct("Siempre Listo", "Pasapañuelos", "$500", "imgRoutes", 1855, 10)
products.addProduct("Manada", "Pasapañuelos", "$800", "imgRouts", 1856, 9)

products.getProducts();
products.getProductsById(2);


