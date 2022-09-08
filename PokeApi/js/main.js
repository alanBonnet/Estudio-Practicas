const listaPokes = document.getElementById("listaDePokes");
const loading = document.getElementById("loading")
const obtenerPokes = async (poke = "") =>{
    try {
        (poke.trim())
        ? ""
        : "";
        let consulta = await fetch(`https://pokeapi.co/api/v2/pokedex/national/`)
        const res = await consulta.json()
        return res.pokemon_entries

    } catch (error) {
        return error
    }
}
const obtenerPokeInfo = async (pokeID,imgOData) => {
    try {
        return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`)
        .then(res => res.json())
        .then(Poke=>{if(imgOData === "img"){
           return Poke.sprites.front_default
        }else if(imgOData === "types"){
            return [Poke.types[0].type.name , Poke.types[1]?.type.name]
        }})
        
    } catch (error) {
        return error
    }
}
const pintarPokes = async () => {
    try {
        let resultado = await obtenerPokes();
        let rendeHTML = "";
         resultado.forEach( async (element, index) => {
            let pokeIMGS = await obtenerPokeInfo(index+1,"img");
            let pokeInfoType = await obtenerPokeInfo(index+1, "types");
            let nombre = await element.pokemon_species.name;
                rendeHTML += `
            
                <div class="col-6 col-md-6 col-lg-4 mt-5" id="Poke${index}">
                    <div class="card p-3" style="width: 18rem;">
                        <img src="${pokeIMGS}" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${nombre.replace(/^\w/,(c) => c.toUpperCase())}</h5>
                            <p class="card-text">${pokeInfoType[0]} ${pokeInfoType[1]}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`
            
            
         });
         setTimeout(()=>{
            loading.innerHTML = ``;
            listaPokes.innerHTML="";
            listaPokes.innerHTML= rendeHTML
         },12000)

         
    } catch (error) {
        console.log(error)
    }
}


