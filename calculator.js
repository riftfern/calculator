const add = function(a,b){
  return a + b;
}

const subtract = function(a,b){
  return a - b;
}

const multiply = function(a,b){
  return a * b;
}

const divide = function(a,b){
  return a / b;
}



let operate = function(a,b,oper){
  if(oper === '+'){
   return add(a,b);
  }else if(oper === '-'){
    return subtract(a,b);
  }else if(oper === '*'){
    return multiply(a,b);
  }else if(oper === '/'){
    return divide(a,b);
  }
}

operate(3,9,'*');