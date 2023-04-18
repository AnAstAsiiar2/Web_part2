let str = "fghjh bhasdr kasrht acvecx erfdcv";
let acronym = str.split(/\s/).reduce((response,word)=> response+=word.slice(0,1)+"\t",'')

console.log(acronym);