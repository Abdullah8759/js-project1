const button = document.querySelectorAll(".button")
const body = document.querySelector(".body")

console.log(button, body)
button.forEach(function (val) {
    addEventListener("click", function (e) {

        console.log(e.target)

        if (e.target.id === "grey") {

            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow") {

            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "black") {

            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue") {

            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "red") {

            body.style.backgroundColor = e.target.id;
        }
    })
});
