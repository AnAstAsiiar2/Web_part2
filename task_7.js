
const mod = require('custom_module');

// Додавання магазинів
let m1 = mod.add_Market("market_1", "Test address 1");
let m2 = mod.add_Market("market_2", "Test address 2");
let m3 = mod.add_Market("market_3", "Test address 3");

// Список магазинів
mod.get_Markets_List();

// Видалення магазинів
console.log("Видалення магазину market_2");
mod.remove_Market("market_2", "Test address 2");

// Список магазинів
mod.get_Markets_List();
// Зміна магазинів
console.log("Зміна магазину: market_3");
mod.edit_Market("market_3", "Test address 3", "New market name", "New address");

// Список магазинів
mod.get_Markets_List();

// Пошук магазинів
let mark1 = mod.find_Market("market_1", "Test address 1");
console.log(`Пошук магазину market_1: ${mark1 !== -1 ? "знайдено" : "не знайдено"}`);
let mark2 = mod.find_Market("market_7", "Test address 7");
console.log(`Пошук магазину market_7: ${mark2 !== -1 ? "знайдено" : "не знайдено"}`);

/////////////////////////////////////////////////////

//додавання продуктів
let p1 = mod.add_Product("product_1", 1234, m1);
let p2 = mod.add_Product("product_2", 1345, m1);
let p3 = mod.add_Product("product_3", 2345, m1);

//список продуктів в магазині
mod.get_products_list(m1);

// Видалення продукту
console.log("Видалення продукту product_2");
mod.remove_Product("product_2",1345, m1);

//список продуктів в магазині
mod.get_products_list(m1);

// Зміна магазинів
console.log("Зміна продукту: product_3");
mod.edit_Product("product_3", 2345, m1, "New product name", "New product code");

//список продуктів в магазині
mod.get_products_list(m1);

//пошук продуктів
let prod1 = mod.find_Product("product_1", 1234, m1);
console.log(`Пошук продукту product_1: ${prod1 !== -1  ? "знайдено" : "не знайдено"}`);
let prod2 = mod.find_Product("product_5", 6759, m1);
console.log(`Пошук продукту product_5: ${prod2 !== -1  ? "знайдено" : "не знайдено"}`);

//////////////////////////////////////////////////////////////////////////////

//додавання складів
let s1 = mod.add_Selad(10, "adress1");
let s2 = mod.add_Selad(11, "adress2");
let s3 = mod.add_Selad(12, "adress3");

//список складів
mod.get_Selad_list();

//видалення складу
console.log("Видалення складу selad_2");
mod.remove_Selad(11, "adress2");

//список складів
mod.get_Selad_list();

//зміна складів
console.log("Зміна складу selad_3");
mod.edit_Selad(12, "adress3", "new code", "new adress");

//список складів
mod.get_Selad_list();

//пошук складів
let sel1 = mod.find_Selad(10, "adress1");
console.log(`Пошук складу selad_1 ${sel1 !== -1 ? "знайдено": "не знайдено"}`);
let sel2 = mod.find_Selad(17, "adress5");
console.log(`Пошук складу selad_5 ${sel2 !== -1 ? "знайдено": "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////
//товари на складі

//додавання товарів на склад
let prodSel1 = mod.add_product_to_selad("selprod1", 1234, s1);
let prodSel2 = mod.add_product_to_selad("selprod2", 2345, s1);
let prodSel3 = mod.add_product_to_selad("selprod3", 3456, s1);

mod.product_in_selad_list(s1);

//видалення продуктів зі складу
console.log("Видалення продукту зі складу selprod2");
mod.delete_product_fromSELAD("selprod2", 2345, s1);

mod.product_in_selad_list(s1);

//зміна продукту
console.log("Зміна продукту selprod3");
mod.edit_selad_product("selprod3", 3456, s1, "New selprod", "New code");

mod.product_in_selad_list(s1);

//пошук продукту на складі
let selprod1 = mod.find_Product_in_selad("selprod1", 1234, s1);
console.log(`Пошук продукту selprod1 на складі ${selprod1 !== -1 ? "Знайдено" : "Не знайдено"}`);
let selprod2 = mod.find_Product_in_selad("selprod6", 5768 , s1);
console.log(`Пошук продукту selprod6 на складі ${selprod2 !== -1 ? "Знайдено" : "Не знайдено"}`);
