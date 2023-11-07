// function gettoplama(num1, num2) {
//   console.log(num1 + num2);
// }
// function getcixma(num1, num2) {
//   return num1 - num2;
// }
// function getbolme(num1, num2) {
//   return num1 % num2;
// }
// function getvurma(num1, num2) {
//   return num1 * num2;
// }

// const calcElement = document.getElementById("num1");

// const calcElement2 = document.getElementById("num2");

// const toplama = document.getElementById("toplama");
// const cixma = document.getElementById("cixma");
// const vurma = document.getElementById("vurma");
// const bolme = document.getElementById("bolme");

// const output = document.getElementById("output");

// toplama.addEventListener("click", function () {
//  output.innerHTML=parseInt(calcElement.value) + parseInt(calcElement2.value);
// });

// cixma.addEventListener("click", function () {
//     output.innerHTML=(calcElement.value - calcElement2.value);
// });

// vurma.addEventListener("click", function () {
//     output.innerHTML=(calcElement.value * calcElement2.value);
// });

// bolme.addEventListener("click", function () {
//     output.innerHTML=(calcElement.value / calcElement2.value);
// });


var numberrandom=Math.floor(Math.random()*100+1)
const inputnumber=document.getElementById("num")
const submit=document.getElementById("Number");

submit.addEventListener("click", function () {
if(numberrandom>inputnumber.value)
{
    output.innerHTML=("Daha boyuk ede daxil edin")
}
else if (inputnumber.value>numberrandom)
{
    output.innerHTML=("Daha kicik eded daxil edin")
}
else{
    output.innerHTML=("Duz tapdiniz!!!!")
}
});
