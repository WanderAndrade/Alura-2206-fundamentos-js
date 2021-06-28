/*
var altura = 3;
var comprimento = 7;
area = altura * comprimento;

console.log (area);
var area;
console.log(area);
*/
let area = 0;
let forma = 'retângulo';
let altura = 3;
let comprimento = 7;

if (forma == 'retângulo') {
    area = altura * comprimento;
} else {
    area = altura * comprimento / 2;
}
console.log (area);
