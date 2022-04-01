function mult(a, b) {
  let res = 0;
  for (let i = 0; i < b; i++) {
    res += a;
  }
  return res;
}

export default mult;
