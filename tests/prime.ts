export const isPrime = (prime: number): boolean => {
    if (prime === 1) {
        return false;
    }
    else if(prime === 2) {
        return true;
    } else {
        for(var x = 2; x < prime; x++) {
    if (prime % x === 0) {
        return false;
    }}
        return true;
    }
  };
