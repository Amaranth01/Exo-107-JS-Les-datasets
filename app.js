// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

let number = p1.dataset.number;
p1.innerHTML += (parseFloat(number) + 10);

let letter = p2.dataset.letter;
p2.innerHTML += letter.length.toString();

let array = p3.dataset.array;
p3.innerHTML += array;

let bool = p4.dataset.bool;
if (bool) {
    p4.innerHTML += "La valeur vaut true";
}
else {
    p4.innerHTML += 'La valeur est false';
}

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

let para = p5.dataset.para = '42';
p5.innerHTML = (parseFloat(para) + 10).toString();

let length = p6.dataset = "caractere".length;
p6.innerHTML = length;

let tab = p7.dataset.tab = "chien | chat | chouette"
p7.innerHTML = tab;

let booleen = p8.dataset.booleen = "false";
if (booleen === true) {
    p8.innerHTML += "La valeur vaut true";
}
else {
    p8.innerHTML += 'La valeur est false';
}