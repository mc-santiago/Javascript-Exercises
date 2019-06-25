var select=document.getElementById("mySelect")

select.onchange = changeColor

function changeColor(event){
    console.log(event.target.value)
    if (event.target.value == 'black'){
        document.getElementById("justText").style.color = 'black';
    }
    else if (event.target.value == 'blue'){
        document.getElementById("justText").style.color = 'blue';
    }
    else if (event.target.value == 'green'){
        document.getElementById("justText").style.color = 'green';
    }
    else if (event.target.value == 'yellow'){
        document.getElementById("justText").style.color = 'yellow';
    }
    else if (event.target.value == 'red'){
        document.getElementById("justText").style.color = 'red';
    }

}