module.exports = function getZerosCount(number, base) {
  // My implementation
  let counter = 0;
  let divisor = 0;
  let primes = [];
  let factor_counters = [];
  let dupe = 0;
  let temp = 0;
  let n = 1;
    for (let i = 2; i <= base; i++) {                 // find base primes
      while ((base % i) === 0) {
        primes.push(i);
        base /= i;
      }
    }
    for (let k = 0; k < primes.length; k++) {         // for each prime
      if (primes[k] !== primes[k - 1]) dupe = 1;      // meanwhile count duplicates of these primes
      else dupe++;
      counter = 0;
      divisor = primes[k];
      temp = divisor;
      n = 1;
      while (Math.floor(number/temp) > 0) {           // count trailing zeros
        counter += Math.floor(number/temp);
        temp = Math.pow(divisor, ++n);
      }
      factor_counters.push(Math.floor(counter / dupe));
    }
  return Math.min(...factor_counters);                // and return least of them
}
