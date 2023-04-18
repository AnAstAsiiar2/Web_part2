class Market{
    constructor(name, address){
        this.name = name;
        this.address = address;
        this.product_list = [];
        this.selad_list = [];
        if (typeof name === 'undefined')    { this.name = "Невідомий магазин"; }
        if (typeof address === 'undefined') { this.address = "Невідома адреса"; }
    }
}
//список всіх магазинів
let global_Markets_list = new Array();

//пошук магазину
function find_Market(name, address){
    for (let market of global_Markets_list) {

        if (name === market.name &&
            address === market.address) { return market; }

    }
    return -1;
}

//додавання магазину
function add_Market(name, address){
    let market = new Market(name, address);
    global_Markets_list.push(market);

    return market;
}

//видалення магазину
function remove_Market(name, address){
    for (let id = 0; id < global_Markets_list.length; id++) {

        let market = global_Markets_list[id];

        if (market.name === name && market.address === address) 
        { global_Markets_list.splice(id, 1); return 1; }

    }
    return -1;
}

//редагування магазину
function edit_Market(name, address, new_name, new_address){
    for (let id = 0; id < global_Markets_list.length; id++) {

        let market = global_Markets_list[id];

        if (market.name === name && market.address === address) 
        { 
            market.name = new_name; 
            market.address = new_address;
            return 1; 
        }

    }
    return -1;
}

//отримати список магазинів
function get_Markets_List(){
    console.log("\n" + "Список всіх магазинів:");

    for (let id = 0; id < global_Markets_list.length; id++) {

        let mark = global_Markets_list[id];
        console.log(`Назва магазину: ${mark.name}, адреса магазину: ${mark.address}`);

    }

    console.log();
    
    return global_Markets_list;
}

//exports
exports.find_Market = find_Market;
exports.add_Market = add_Market;
exports.remove_Market = remove_Market;
exports.edit_Market = edit_Market;
exports.get_Markets_List = get_Markets_List;