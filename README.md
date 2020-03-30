Documentação Crawling Viva Real

    1. Deverá iniciar o node com as seguintes bibliotecas: node-fetch e fs;
    2. Crie o arquivo principal do servidor em js;
    3. Importe as bibliotecas citadas acima; 
    4. Criar 2 variáveis uma contendo o valor 36 que irá representar a quantidade de itens exibidos por pagina, e outra com o valor inicial 0 que irá definir a pagina. Ex: size = 36; from = 0.
    5. Faça um loop onde receba o valor de from e execute até que seja igual menor que 1296 (quantidade de itens multiplicado pela quantidade de paginas), sendo que irá acrescentar valor de size a cada etapa de loop.
    6. Faça um fetch com link de sintaxe interpolada para o link abaixo:
       https://glue-api.vivareal.com/v2/listings?addressCity=Balne%C3%A1rio%20Cambori%C3%BA&addressLocationId=BR%3ESanta%20Catarina%3ENULL%3EBalneario%20Camboriu&addressNeighborhood=&addressState=Santa%20Catarina&addressCountry=Brasil&addressStreet=&addressZone=&addressPointLat=-27.001596&addressPointLon=-48.637904&business=RENTAL&facets=amenities&unitTypes=APARTMENT&unitSubTypes=UnitSubType_NONE%2CDUPLEX%2CLOFT%2CSTUDIO%2CTRIPLEX&unitTypesV3=APARTMENT&usageTypes=RESIDENTIAL&listingType=USED&parentId=null&categoryPage=RESULT&includeFields=page%2Csearch%2Cexpansion%2Cnearby%2CfullUriFragments%2Caccount&size=${size}&from=${from}&q=&developmentsSize=5&__vt=
    7. Passe os seguintes parametros no fetch após o link: 
       {"credentials":"omit","headers":{"accept":"application/json, text/javascript, */*; q=0.01","accept-language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site","x-domain":"www.vivareal.com.br"},"referrer":"https://www.vivareal.com.br/aluguel/santa-catarina/balneario-camboriu/apartamento_residencial/?pagina=2","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"}
    8. Após o fetch faça um then onde uma funções irá retornar a respota da requisição em json.
    9. Após este then faça um segundo then que terá uma função que recebera a resposta do primeiro then e irá conter um for. Este for irá receber uma variável de valor zero que vai varrer enquanto o valor da variável for menor que 36 (quantidade de itens por pagina), irá ser atribuído +1 a esta variável por execução
    10. Neste for deverá ser declarado uma constante com o seguinte valor: res.search.result.listings[variavel do for].listing.title; (Isso irá pegar o titulo do imóvel) 
    11. Ainda dentro do for adicione o comando: fs.appendFile(`apartaments${item}.txt`, 'Title: ' + title, (error) => {if(error) {console.log(error)}}); Isso irá adicionar os titulos adquiridos a um arquivo txt. 
    12. Verifique a indentação;
    13. Execute o código.
