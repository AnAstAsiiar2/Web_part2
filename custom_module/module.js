const Market = require("./Market");
const Product   = require("./Product");
const Selad_Products = require("./Selad_Products");
const selad = require("./selad");

exports.find_Market = Market.find_Market;
exports.add_Market = Market.add_Market;
exports.remove_Market = Market.remove_Market;
exports.edit_Market = Market.edit_Market;
exports.get_Markets_List = Market.get_Markets_List;


exports.find_Product = Product.Find_product;
exports.add_Product = Product.add_product;
exports.remove_Product = Product.delete_product;
exports.edit_Product = Product.edit_product;
exports.get_products_list = Product.get_products_list;


exports.find_Selad = selad.find_Selad;
exports.add_Selad = selad.add_Selad;
exports.edit_Selad = selad.edit_Selad;
exports.remove_Selad = selad.remove_Selad;
exports.get_Selad_list = selad.get_Selad_list;


exports.find_Product_in_selad = Selad_Products.find_selProduct;
exports.add_product_to_selad = Selad_Products.add_productTO_selad;
exports.delete_product_fromSELAD = Selad_Products.delete_product_fromSELAD;
exports.edit_selad_product = Selad_Products.edit_selad_product;
exports.product_in_selad_list = Selad_Products.get_selProd_list;