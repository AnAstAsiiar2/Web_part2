class Selad{
    constructor(code, address){
        this.code = code;
        this.address = address;
        this.product_list = [];

        if (typeof code === 'undefined')    { this.code = "Невідомий склад"; }
        if (typeof address === 'undefined') { this.address = "Невідома адреса"; }
    }
}

//список складів
let global_Selads_list = new Array();

//пошук складу
function find_Selad(code, address){
    for (let selad of global_Selads_list) {

        if (code === selad.code && address === selad.address) 
        { return selad; }
    }
    return -1;
}

//додавання складу
function add_Selad(code, address){
    let selad = new Selad(code, address);
    global_Selads_list.push(selad);

    return selad;
}

//видалення складу
function remove_Selad(code, address){
    for (let id = 0; id < global_Selads_list.length; id++) {

        let selad = global_Selads_list[id];

        if (selad.code === code && selad.address === address) 
        { global_Selads_list.splice(id, 1); return 1; }

    }
    return -1;
}

//редагування складу
function edit_Selad(code, address, new_code, new_address){
    for (let id = 0; id < global_Selads_list.length; id++) {

        let selad = global_Selads_list[id];

        if (selad.code === code && selad.address === address) 
        { 
            global_Selads_list[id].code = new_code; 
            global_Selads_list[id].address = new_address;
            return 1; 
        }
    }
    return -1;
}

//отримати список складів
function get_Selad_list(){
    console.log("\n" + "Список всіх складів:");

    for (let id = 0; id < global_Selads_list.length; id++) {

        let sel = global_Selads_list[id];
        console.log(`Код складу: ${sel.code}, адреса складу: ${sel.address}`);

    }

    console.log();
    
    return global_Selads_list;
}

//exports
exports.find_Selad = find_Selad;
exports.add_Selad = add_Selad;
exports.edit_Selad = edit_Selad;
exports.remove_Selad = remove_Selad;
exports.get_Selad_list = get_Selad_list;