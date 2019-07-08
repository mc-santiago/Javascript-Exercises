fontSize=16
// explode =💥

document.onkeydown = checkKey;

function checkKey(e) {
    
    e = e || window.event;
    
    if (e.keyCode == '38') {
        console.log("key up");// up arrow
        fontSize += 2
        document.getElementById('balloon').style.fontSize = fontSize
    }
    else if (e.keyCode == '40' && fontSize>16) {
        console.log("key down");// down arrow
        fontSize -= 2
        document.getElementById('balloon').style.fontSize = fontSize
    }
    // else if () {
    //     console.log("onclick explode");// down arrow
    //     document.getElementById('balloon').innerHTML = explode   
    }
    
// console.log(fontSize)
// ballon.addEventListener('click', event => {
//     document.getElementById('balloon').innerHTML = '💥'
})
}
