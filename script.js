//  Way 1
for (let index = 1; index < 7; index++) {
  console.log("*".repeat(index));
}
// Way 2
for (let index = 0; index < 7; index++) {
  for (let j = index; j < index+1; j++) {
    console.log("*".repeat(j+1));
  }
}
