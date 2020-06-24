

$(document).ready(function() {

    for (var i = 1; i <= 50; i++) {
        $.get('https://pokeapi.co/api/v2/pokemon/' + i, (data) => {
            $('#images').append(`<img src="${data.sprites.front_default}" alt="sprite" id="${data.id}"/>`);
        })
    };
    
    $('#images').on('click', 'img', function() {
        $.get('https://pokeapi.co/api/v2/pokemon/' + $(this).attr('id'), (pokemon) => {
            let html_str = "";
            html_str += "<ul>";

            for (let j = 0; j < pokemon.types.length; j++) {
                html_str += `<li>${pokemon.types[j].type.name}</li>`;
            }
            html_str += "</ul>";

            $('#sidebar').html(`<h3>${pokemon.name}</h3><img src="${pokemon.sprites.front_default}" alt="sprite"/><h4>Types</h4>${html_str}<h4>Height</4><p>${pokemon.height}</p><h4>Weight</h4><p>${pokemon.weight}</p>`);
        }); 
    })
});