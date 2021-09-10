const name = ["name1", "name2", "nmae3"];
for (let i of name) {
    console.log(i);
}

// for (let i = 0; i < name.length; i++) {

//     let element = name[i]
//     console.log(element);
// }


let student = {
    Id: 123,
    Name: "Rimon",
    Class: 10

}

for (let i in student) {
    console.log(`${i} :${student[i]}`);
}