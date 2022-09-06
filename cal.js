const calCulator = {
  add: function(a, b){
    return(a + b);
  },
  
  minus: function(a, b){
    return(a - b);
  },
  
  div: function(a, b){
    return(a / b);
  },
  
  square: function(a, b){
    return(a ** b);
  },
}

const plusResult = calCulator.add(5, 5);

console.log(plusResult);

calCulator.minus(5, 5);
calCulator.div(5, 5);
calCulator.square(5, 5);