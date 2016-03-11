var arr = [];
var error=false;

function main() {
	arr = getArray();
	innerI = 0;
	outerI = 0;
		if (!error) {
		createTable(arr);
	}	else {
		alert ('Вы допустили ошибку при вводе.\n\nВведите корректные данные!');
		error=false; // error to initial state
	};
}

	
function getArray() {
	    var arr=document.getElementById('entArr').value.split(/\s+/);	
	for (var i = 0; i < arr.length; i++) {
 		arr[i] = parseFloat(arr[i]); // Make numbers from string elements from input form
		if (!(!isNaN(arr[i]) && isFinite(arr[i])))	{
		clearAll();
		error=true; // error flag
		break;
		}
	}
	return arr;
		}
	
/*function checkArrElem(some) { //Проверяем, всё ли верно ввёл пользователь
        if(!isNaN(parseFloat(some)) && isFinite(some)) {
        return false;
	        }
        }
    return true;	
    }	
		*/
		
function createTable(arr) {
            var div=document.getElementById('showArr');
            var table="<table><tr>";
            for(i=0; i<arr.length; i++) {
                table+='<td id="col'+i+'">'+arr[i]+'</td>';
            }
            table+='</tr></table>'
            div.innerHTML=table;
			document.getElementById('buttonBox').style.visibility = 'visible';
}


function clearAll(){
	var buttonBox = document.getElementById('buttonBox');
	for (var i = 0; i < arr.length; i++) {
 		if (document.getElementById('col'+i) !== null) {
		document.getElementById('col'+i).remove();}
 	}
	document.getElementById('entArr').value=null;
	buttonBox.style.visibility = 'hidden';
}


function nextStep(){
	var cell0,cell1,cell2;

	if(outerI<arr.length-1){
		if(innerI<arr.length-outerI){
			    if (innerI == 0) { //если 1 элемент - без сброса цвета
				cell1 = document.getElementById('col'+innerI);
				cell2 = document.getElementById('col'+(innerI+1));			
			paint(cell1,cell2,'#FFFF3C');
				} else {
					cell0 = document.getElementById('col'+(innerI-1));
					cell1 = document.getElementById('col'+innerI);
					cell2 = document.getElementById('col'+(innerI+1));			
					cell0.style.backgroundColor='#f0f0f2'; // сбрасываем в цвет фона
					paint(cell1,cell2,'#FFFF3C');
				} 

			if (arr[innerI]>arr[innerI+1]){
				var temp = arr[innerI];
				arr[innerI] = arr[innerI+1];
				arr[innerI+1] = temp;
				paint(cell1,cell2,'#FF3C53');
				cell1.innerHTML = arr[innerI];
				cell2.innerHTML = arr[innerI+1];
			}

			innerI++;
			if(innerI == arr.length-outerI){
				innerI =0;
				outerI++;
				paint(cell1,cell2,'#53FF3C');
			}
		}
	}else{
		paint(document.getElementById('col0'),null,'#53FF3C'); // красим 1 элемент
		alert('Массив отсортирован!');
	}
}


function paint(cell1,cell2,color){
	cell1.style.backgroundColor = color;
	if(cell2) // для окраски только одного элемента
		cell2.style.backgroundColor = color;
}
