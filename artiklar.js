$.ajax // hämtar artiklar.json
({
    url: 'artiklar.json'
}).done(function(res, err) // funktion som anrops när det är klart
{
    let artiklar = document.getElementById('artiklar'); // hitta artiklar elementet med ID:n artiklar

    for(let artikel in res.artiklar) // loopar igenom alla artiklar ifrån artiklar.json
    {
        artikel = res.artiklar[artikel]; // förenkling 
        artiklar.innerHTML += `<article><h3>${artikel.titel}</h3><a href="${artikel.källa}"><img alt="${artikel.titel}" src="${artikel.bild}"></a><p>${artikel.text}</p></article>`; // lägger till artiklen
    }
});
