module.exports = function getZerosCount(number, base) {
  // My implementation
  let counter = 0;
  let divisor = 0;
  let factors = [];
  let factor_counters = [];
  let dupe = 0;
  let temp = 0;
  let n = 1;
  /*if (base == -10) {
    divisor = 5;
    temp = divisor;
    while (Math.floor(number/temp) > 0) {
      // console.log("counter>>>" + counter + "...divisor>>>" + divisor + "...n>>>" + n);
      counter += Math.floor(number/temp);
      temp = Math.pow(divisor, ++n);
    }
  } else {*/
    // divisor = 2;
    // n = number;
    // while (n > 2) {
    //   if (n % divisor == 0) {
    //     factors.push(divisor);
    //     n /= divisor;
    //   } else divisor++;
    // }
    for (let i = 2; i <= base; i++) {
      // console.log(dupe);
      while ((base % i) === 0) {
        factors.push(i);
        // if (i === factors[factors.length - 1]) dupe++;
        base /= i;
      }
    }

    console.log("base_factors>>>" + factors);
    // console.log("factor_1>>>" + factors[0]);
    for (let k = 0; k < factors.length; k++) {
      if (factors[k] !== factors[k - 1]) dupe = 1;
      else dupe++;
      /*while (factors[k] !== factors[k + 1]) {
        dupe++;
        k++;
        console.log("..." + dupe);
        // continue;
      }*/
      counter = 0;
      divisor = factors[k];
      temp = divisor;
      n = 1;
      while (Math.floor(number/temp) > 0) {
        // console.log("counter>>>" + counter + "...divisor>>>" + divisor + "...n>>>" + n);
        counter += Math.floor(number/temp);
        temp = Math.pow(divisor, ++n);
      }
      console.log(">>>" + dupe);
      factor_counters.push(Math.floor(counter / dupe)); // counter);   // нужно counter здесь делить на степень
    }
    /*for (let k in factors){
      divisor = k;
      temp = divisor;
      n = 1;
      while (Math.floor(number/temp) > 0) {
        console.log("counter>>>" + counter + "...divisor>>>" + divisor + "...n>>>" + n);
        counter += Math.floor(number/temp);
        temp = Math.pow(divisor, ++n);
      }
      factor_counters.push(counter);
    }*/
    console.log(factor_counters);
    /*divisor = base;
    temp = divisor;
    n = 1;
    while (Math.floor(number/temp) > 0) {
      // console.log("counter>>>" + counter + "...divisor>>>" + divisor + "...n>>>" + n);
      counter += Math.floor(number/temp);
      temp = Math.pow(divisor, ++n);
    }*/
  // }
  // console.log("after: counter>>>" + counter + "...divisor>>>" + divisor + "...n>>>" + n);
  // return counter;
  return Math.min(...factor_counters);
}