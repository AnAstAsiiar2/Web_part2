class Selad_Products{
    constructor(name, code, selad){
        this.name = name;
        this.code = code;
        this.selad = selad;
        if (typeof code === 'undefined')    { this.code = "Невідомий код"; }
        if (typeof name === 'undefined') { this.name = "Невідома назва"; }
    }
}

//знаходження продукту на складі
function find_selProduct(name, code, selad){
        for(let id = 0; id < selad.product_list.length; id++){
            let selProduct = selad.product_list[id];
            if(name === selProduct.name && code === selProduct.code){return selProduct}
        }
        return -1;
}

//додавання продукту
function add_productTO_selad(name, code, selad){
    let selProduct = new Selad_Products(name, code, selad);
    selad.product_list.push(selProduct);
    return selProduct;
}

//видалення продукту
function delete_product_fromSELAD(name, code, selad){
    let selProduct = find_selProduct(name, code, selad);
    if(selProduct === -1){
        return -1;
    }
    let id = selad.product_list.indexOf(selProduct);
    selad.product_list.splice(id, 1);
    return 1;
}

//редагувати продукт
function edit_selad_product(name, code, selad, new_name, new_code){
    let selProduct = find_selProduct(name, code, selad);
    if(selProduct === -1){return -1;}
    let id = selad.product_list.indexOf(selProduct);
    selad.product_list[id].name = new_name;
    selad.product_list[id].code = new_code;
    return 1;
}
function get_selProd_list(selad){
    console.log("\n" + 'Cписок всіх продуктів у складі', selad.code, ':');
    for(let id = 0; id < selad.product_list.length; id++){
        let product = selad.product_list[id];
        console.log("\t Продукт:", product.name, "\t Код продукту:", product.code);
    }
    console.log();
    return selad.product_list;
}

//exports
exports.find_selProduct = find_selProduct;
exports.add_productTO_selad = add_productTO_selad;
exports.delete_product_fromSELAD = delete_product_fromSELAD;
exports.edit_selad_product = edit_selad_product;
exports.get_selProd_list = get_selProd_list;