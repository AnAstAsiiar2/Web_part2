class Product{
    constructor(name, code){
        this.name = name;
        this.code = code;

        if(typeof name === 'undefined'){
            this.name = "Невідомий продукт";
        }
    } 
}
let product_list = new Array();

function get_products_list(market){
    console.log("\n" + 'Cписок всіх продуктів у магазині', market.name, ':');
    for(let id = 0; id < market.product_list.length; id++){
        let product = market.product_list[id];
        console.log("\t Продукт:", product.name, "\t Код продукту:", product.code);
    }
    console.log();
    return market.product_list;
}

function Find_product(name, code, market){
    for(let id = 0; id < market.product_list.length; id++){
        let product = market.product_list[id];
        if(name === product.name && code === product.code){return product}
    }
    return -1;
}
function add_product(name, code, market){
    let product = new Product(name, code);
    market.product_list.push(product);
    return product;
}
function delete_product(name, code, market){
    let product = Find_product(name, code, market);
    if(product === -1){
        return -1;
    }
    let id = market.product_list.indexOf(product);
    market.product_list.splice(id, 1);
    return 1;
}
function edit_product(name, code, market, new_name, new_code){
    let product = Find_product(name, code, market);
    if(product === -1){return -1;}
    let id = market.product_list.indexOf(product);
    market.product_list[id].name = new_name;
    market.product_list[id].code = new_code;
    return 1;
}

//exports
exports.Find_product = Find_product;
exports.add_product = add_product;
exports.delete_product = delete_product;
exports.edit_product = edit_product;
exports.get_products_list = get_products_list;