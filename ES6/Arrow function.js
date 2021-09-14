function display1() {
    console.log(`this is display1`);
}
display1();

let display2 = () => {
    console.log(`this is display2`);
}

display2();


function message1() {
    return `Hi I am message1`;
}
console.log(message1());

const message2 = () => {
    return `Hi I am message2`;
}
console.log(message2());