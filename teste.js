const vivareal = require('./teste.json');

console.log(vivareal.page.uriPagination.page);
const ver = vivareal.search.result.listings;
console.log(ver);
for(let item = 0; item < 36; item++) {
    const titulo = vivareal.search.result.listings[item].listing.title;
    console.log(titulo);
}
