let input = prompt("Hey, say something!");
while (true) {
    input = prompt(input);
    if (input === "stop copying me") break;
}
console.log("OK YOU WIN!");