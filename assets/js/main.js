'use strict'
function ab(a, b){
    for(a,b; a<=b; a++){
        if (a%2==0){
            alert(a)
        }
    }
}
ab(+prompt("Первое число (должно быть меньше чем второе)"), +prompt('Второе число'));



let i = 0;
while(i<3){
    alert(`number ${i}!`);
    i++;
}




let num;
do{
 num = prompt("Введите число больше 10");
}while(num<10 && num);



function ba(a, b){
    return Math.min(a,b);
}
alert(ba(+prompt("Первое число"), +prompt('Второе число')));























// let i = 1;
// while(i<=3){
//     alert(i);
//     i++;
// }

// let i = 3;
// while(i){
//     alert(i);
//     i--;
// }

// let i = 0;
// do{
//     alert(i);
//     i++;
// }while(i<=3);

// for(let i = 1; i<=3; i++){
//     alert(i);
// }

// let sum = 0;
// while (true){
//     let num = +prompt('Введите число');
//     if(!num) break;
//     sum += num;
// }
// alert(`Сумма рана ${sum}`);

// function showMessage(message){
//     alert(message)
// }
// showMessage('Привет');
// showMessage('Hello');
// showMessage('Пока');
// let message = 'Внешняя';
// function showMessage(){
//     let message = "Сообщение";
//     alert(message);
// }
// showMessage();
// alert(message);

// function getMessage(author, text = 'Пустое сообщение'){
//     alert(`${author}: ${text}`)
// }
// getMessage('Мария','Привет, как дела?')
// getMessage('Павел','Привет, нормально')
// getMessage('Никита')

// function sum(num1, num2){
//     return num1 + num2;
// }
// alert(sum(4,6));
// let result1 = sum(100, 50);
// let result2 = sum(60, 60);

// alert(result1-result2)

// let sum = (num1, num2) => num1+num2;
// sum(4,7);
// let sum = (num1, num2) => {
//     let result = num1+num2
//     num1+num2;
// }