const message = (text = "Hello this is default perameter") => {
    console.log(text);
}

message();
message("I am learning javascript ES6");


function restPerameter(x, y, ...z) {
    console.log(`x is =${x}   y is =${y}  , z is =${z}`);
}

restPerameter(12, 15, 16, 20, 34, 38);