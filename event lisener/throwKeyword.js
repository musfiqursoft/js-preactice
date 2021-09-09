document.querySelector("#checkBtn").addEventListener("click", function () {

    var text = document.querySelector("#inputtext").value;
    try {

        if (text < 5) {
            throw "input is low";
        } else if (text > 10) {
            throw "input is high"
        } else {
            console.log(text);
        }


    } catch (err) {
        console.log(err);
    }


})