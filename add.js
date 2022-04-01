import sleep from "./sleep";

function add(first, second) {
  sleep(1000); // addition is hard... might take 10 seconds
  return first + second;
}

export default add;
