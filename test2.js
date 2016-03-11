
describe("getArray", function() {
		it("Парсим массив из формы", function() {
	    	assert.isNotNull(arr[0]);
	  	});
		it("Значения массива - числа", function() {
	  		for (var i = 0; i < arr.length; i++) {
	  			assert(!isNaN(arr[i]) && isFinite(arr[i]));
	  		}  	
	  	});
	
});

describe("createTable", function() {
				it("Отрисовка таблицы", function() {
				for (var i = 0; i < arr.length; i++) {
					assert.isNotNull(document.getElementById("col"+i));
				} 
		});
});


describe("clearAll", function() {
	before(function() {
		document.getElementById('clear').click();
	});
	it("Удаляем ячейки таблицы", function() {
		for (var i = 0; i < arr.length-1; i++) {
			assert.isNull(document.getElementById('col'+i));
		}
	});
	it("Удаляем содержимое формы input", function() {		
		assert.equal(document.getElementById('entArr').value,'');
	});
	it("Прячем кнопки управления", function() {		
		assert.equal(buttonBox.style.visibility,'hidden');
	});
		});
	