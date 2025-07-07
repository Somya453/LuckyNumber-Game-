//Let's use a while loop to see what your lucky number could be!

const luckyNumber = 10;
let guess = Math.floor(Math.random() * 10) + 1;


while(guess!==10){
    console.log("Nope, it isn't", guess);

    guess=Math.floor(Math.random()*10)+1;
}
console.log("My lucky number is", luckyNumber + "!");
