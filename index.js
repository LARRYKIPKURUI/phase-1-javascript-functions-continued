
//function 1
function saturdayFun(activity = 'roller-skate') {
   return `This Saturday, I want to ${activity}!`;
}


saturdayFun(); 
saturdayFun("bathe my dog")

// function 2
const mondayWork = function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

// console.log(mondayWork()); 
// console.log(mondayWork("work from home"));

mondayWork(); 
mondayWork("work from home");

function wrapAdjective(symbol) {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    };
}

// Test function
let result1 = wrapAdjective('*');
console.log(result1("a hard worker")); 

let result2 = wrapAdjective('||');
console.log(result2("a dedicated programmer")); 





























