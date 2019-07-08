fetch('http://localhost:3000/api/recetas')
    .then(results =>
        return results.json())
    .then(data => {
        console.log(data)
        data.forEach(receta => {
            let li = document.createElement('li')
            li.innerHTML = receta
            document.querySelector('#lista-recetas').appendChild('li')
         // or document.getElementById('lista-recetas').appendChild(li)
        })
    })