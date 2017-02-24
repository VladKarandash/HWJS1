var x = prompt('Введите первое число', 3);
var y = prompt('Введите второе число', 2);

var a=Math.pow(x,y);

alert(a);


var names = ["Вася", "Стас", "Дима", "Женя", "Ян",];

for (var i = 0; i < names.length; i++) {
  alert( names[i] );
}
var name = prompt('Кто ты?', '');
if (name == 'Вася') {
  message = 'Привет, Вася!';
} else if (name == 'Стас') {
  message = 'Привет Стас!';
} else if (name == 'Дима') {
  message = 'Привет Дима!';
} else if (name == 'Женя') {
  message = 'Привет Женя!';
} else if (name == 'Ян') {
  message = 'Привет Ян!';
} else {
  message = 'Ошибка';
}
alert( message );
