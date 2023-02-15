const elbox1 = document.querySelector(".box1")
const elinput1 = document.querySelector(".input1")
const eltext1 = document.querySelector(".text1")
const arr = []

elbox1.addEventListener("change", myFunction);
function myFunction() {
    eltext1.innerHTML = elinput1.value

}



const elsubject = document.querySelector(".subject")
const elinput2 = document.querySelector(".input2")
const eldiv1 = document.querySelector(".div1")

eldiv1.addEventListener("change", myfunc);
function myfunc() {

    // elsubject.innerHTML = elinput2.value


    if (elinput2.value === "b") {
       elsubject.innerHTML = "Б"
   }
    else if (elinput2.value === "a" ) {
        elsubject.innerHTML = "a"
    }
    else if (elinput2.value === "s") {
        elsubject.innerHTML = "c"
    }
    else if (elinput2.value === "q") {
        elsubject.innerHTML = "Қ"
    }
    else if (elinput2.value === "e") {
        elsubject.innerHTML = "E"
    }
    else if (elinput2.value === "yu") {
        elsubject.innerHTML = "ю"
    }
    else if (elinput2.value === "a") {
        elsubject.innerHTML = "A"
    }
    else if (elinput2.value === "k") {
        elsubject.innerHTML = "k"
    }

    else if (elinput2.value === "r") {
        elsubject.innerHTML = "p"
    }


}






// fetch()
//     .then(function myFunction() {
//         eltext1.innerHTML = elinput1.value

//     })
//     .then(function my() {
//         arr.push("elinput1.value")

//     })



