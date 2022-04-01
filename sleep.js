function sleep(d) {
  const now = new Date().getTime();
  while (new Date().getTime() < now + d) { /* Do nothing */ }
}

export default sleep;
