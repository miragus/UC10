const multiply = (a: number, b: number): number => {
    return a * b;
  };
  
  multiply('1', 2);
  //=> ⚠️ COMPILER ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.