//Массивы символов
var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g'];
var arr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G'];
var arr4 = ['!', '@', '#', '$', '%', '^'];

//Данные с ползунка
document.getElementById('generatorRange').oninput = function () { //Хватаем значение ползунка
	document.getElementById('passwordLength').innerHTML = this.value; //Передаём значение в span
}

//Генерация пароля
document.getElementById('generatorButton').onclick = generatePass; //При нажатии на кнопку "Сгенерировать" вызывается функция (generatePass)

function generatePass() {
	var result = []; 
	if (document.getElementById('param1').checked) {
		result = result.concat(arr1);
	}
	if (document.getElementById('param2').checked) {
		result = result.concat(arr2);
	}
	if (document.getElementById('param3').checked) {
		result = result.concat(arr3);
	}
	if (document.getElementById('param4').checked) {
		result = result.concat(arr4);
	}
	result.sort(compareRandom); //Перемешка массива [result] при помощи метода .sort и функции (compareRandom)
	console.log(result);
	var pass = '';
	var passLength = parseInt(document.getElementById('generatorRange').value);
	for (var i = 0; i < passLength; i++) {
		pass += result[randomInteger(0, result.length - 1)];
	}
	console.log(pass);
	document.getElementById('resultField').innerHTML = pass;
}

function compareRandom(a, b) {
	return Math.random() - 0.5;
}

function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}