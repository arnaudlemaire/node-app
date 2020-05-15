function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    const sleepTime = process.env.SLEEP_TIME;
    await sleep(sleepTime);
  }
}

main();
