
// example from the mdn official site 
function* idMaker() {
    let index = 0;
    while (true) {
      yield index++;
    }
  }
  
  const gen = idMaker();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3
  console.log(gen.next().value); // 4
  console.log(gen.next().value); // 5

  