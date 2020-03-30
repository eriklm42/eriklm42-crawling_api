const fetch = require('node-fetch');
const fs = require('fs');

size = 36;
for(from = 0; from <= 1296; from = from + 36) {
    fetch(`https://glue-api.vivareal.com/v2/listings?addressCity=Balne%C3%A1rio%20Cambori%C3%BA&addressLocationId=BR%3ESanta%20Catarina%3ENULL%3EBalneario%20Camboriu&addressNeighborhood=&addressState=Santa%20Catarina&addressCountry=Brasil&addressStreet=&addressZone=&addressPointLat=-27.001596&addressPointLon=-48.637904&business=RENTAL&facets=amenities&unitTypes=APARTMENT&unitSubTypes=UnitSubType_NONE%2CDUPLEX%2CLOFT%2CSTUDIO%2CTRIPLEX&unitTypesV3=APARTMENT&usageTypes=RESIDENTIAL&listingType=USED&parentId=null&categoryPage=RESULT&includeFields=page%2Csearch%2Cexpansion%2Cnearby%2CfullUriFragments%2Caccount&size=${size}&from=${from}&q=&developmentsSize=5&__vt=`, {"credentials":"omit","headers":{"accept":"application/json, text/javascript, */*; q=0.01","accept-language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site","x-domain":"www.vivareal.com.br"},"referrer":"https://www.vivareal.com.br/aluguel/santa-catarina/balneario-camboriu/apartamento_residencial/?pagina=2","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"})
    .then((res)=>{
        return res.json();
    })
    .then((res) => {
        for(let item = 0; item < 36; item++) {
            const title = res.search.result.listings[item].listing.title;
            fs.appendFile(`apartaments${item}.txt`, 'Title: ' + title, (error) => {if(error) {console.log(error)}});  
        }
    });
}



