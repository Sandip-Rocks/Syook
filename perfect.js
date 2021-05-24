//1) Am I Perfect?

const perfect = (num) => {
  let i,
    sum = 0;
  for (i = 1; i < num; i++) {
    if (num % i == 0) sum = sum + i;
  }
  if (sum == num) return "Perfect";
  else if (sum > num) return "Abundant";
  else if (sum < num) return "Deficient";
};

const result = perfect(6);
console.log(result);
