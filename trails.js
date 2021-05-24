// 3) How many trails to 1?

const trails = (x) => {
    let c=0;
  while (x != 1) {
    if (x % 2 == 0) {
      x = x / 2;
    }
    else if(x%2!=0){
        x=(3*x)+1;
    }
    c++;
  }
  return c;
};
const result=trails(12);
console.log(result);
