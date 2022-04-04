const moment = require('moment');

function addNums(a=0,b=0){
    let numA = Number(a);
    let numB = Number(b);   
    if(isNaN(numA) || isNaN(numB)){
        return 'please pass in numbers';
    }
    console.log(moment());
    return numA+numB;
}
addNums();
//is addnums a function/exists
//console.log('is function?',typeof addNums === 'function');
// adding two stringified nums
//console.log('can calc sum of string nums', 10 ===addNums('5','5'));
//incorrect param types
//console.log('returns error message if param types are incorrect', 'please pass in numbers' ===addNums(['a'],{name:'func'}))
//if one param is input
//no params input
//Default params

module.exports=addNums;