let massive = ['a', 'c', 's', 'a', 'f','b', 'f', 'c', 'c', 'b', 'd'];
let kickOutDuplicate = (arr) =>{let newmassive = [...new Set(massive)]; return newmassive;}
console.log(massive.join(),"--", kickOutDuplicate(massive).join());
