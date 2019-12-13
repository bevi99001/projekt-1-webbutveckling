$.ajax
({
    url: 'artiklar.json'
}).done(function(res, err)
{
    let artiklar = document.getElementById('artiklar');

    for(let artikel in res.artiklar)
    {
        artikel = res.artiklar[artikel];
        artiklar.innerHTML += `<article><h3>${artikel.titel}</h3><a href="${artikel.källa}"><img alt="${artikel.titel}" src="${artikel.bild}"></a><p>${artikel.text}</p></article>`;
    }
});