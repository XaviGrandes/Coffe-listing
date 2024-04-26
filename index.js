  
fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
    .then(response => response.json())
    .then(data => {
        let tarjetasCafes = '';
        data.forEach(item => {
            tarjetasCafes += `
                <div class="tarjeta">
                    <img class="img-tarjeta" src="${item.image}" alt="${item.name}">
                    <div class='d-flex justify-content-between mt-2'>
                        <span class='titular-tarjeta'>${item.name}</span>
                        <span class='tarjeta-precio'>${item.price}</span>
                    </div>
                    <div class='d-flex justify-content-between'>
                        <div class='d-flex'>
                            <img src="${item.rating != null ? './assets/Star_fill.svg' : './assets/Star.svg' }">
                            <span class='tarjeta-rating'>${item.rating !=null? item.rating : '<p class="no-ratings">No ratings</p>'}</span>
                            <span class='tarjeta-votes'>(${item.votes} votes)</span>
                        </div>
                        <div class='mt-2'>
                            <span class='sold-out'>${item.available ? "": "Sold out"}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Insertar el HTML de las tarjetas en el contenedor
        document.getElementById('tarjetas-container').innerHTML = tarjetasCafes;
    })
    .catch(error => {
        console.log(error);
    });

    //si hay alguna tarjeta con "Sold out" la ocultamos
    document.getElementById('availableProducs').addEventListener('click', function(){
        const tarjetas = document.querySelectorAll(".tarjeta")
        tarjetas.forEach(card =>{
            if (card.children[2].children[1].innerText == "Sold out") {
                card.classList.add('d-none')
            }
        })
    })
    // recorremos todo el listado para quitar todos los 'd-none' de las tarjetas
    document.getElementById('allProducts').addEventListener('click', function(){
        const tarjetas = document.querySelectorAll(".tarjeta")
        tarjetas.forEach(card =>{
            if (card.classList.contains('d-none')) {
                card.classList.remove('d-none')
            }
        })
    })