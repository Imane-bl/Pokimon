//let input=getellementbyId("search-input");
//let input=getellementbyId("search-input");
let btn=document.getElementById("search-button");

/*les carecteres*/
let pokemonName=document.getElementById("pokemon-name");
let pokemonId=document.getElementById("pokemon-id");
let weight=document.getElementById("weight");
let height=document.getElementById("height");



let hp=document.getElementById("hp");
let attack=document.getElementById("attack");
let defense=document.getElementById("defense");
let specialAttack=document.getElementById("special-attack");
let specialDefense=document.getElementById("special-defense");
let speed=document.getElementById("speed");

let type=document.getElementById("types");

 


btn.addEventListener('click', function() {
    let input=document.getElementById("search-input").value;
    if(input=="Red"){
        alert("Pokémon not found");
    }else if(input==="Pikachu"){
        pokemonName.innerHTML="PIKACHU";

        let randomNbrId=Math.round(Math.random());
        if(randomNbrId===0){
            pokemonId.innerHTML="#25"; 
        }else{
            
        pokemonId.innerHTML="25";
        }
        let randomNbrWeight=Math.round(Math.random());
        if(randomNbrWeight===0){
             weight.innerHTML="Weight<span style='White-space:pre;'> 60</span>";
          
        }else{
            
        weight.innerHTML="60";
        }
        let randomNbrHeight=Math.round(Math.random());
        if(randomNbrHeight===0){
                height.innerHTML="4";
        }else{
            height.innerHTML="Height:<span style='White-space:pre;'> 4</span>";
        }
      defense.innerHTML="35";
      attack.innerHTML="55";
      hp.innerHTML="40";
      specialDefense.innerHTML="50";
      specialAttack.innerHTML="50";
      speed.innerHTML="90";

let imgelm=document.createElement("img"); 
imgelm.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
imgelm.id="sprite";
document.body.appendChild(imgelm);

type.innerHTML= " ";
/*pour 3 etape*/

let innerelm=document.createElement("div");
innerelm.innerText="ELECTRIC";
type.appendChild(innerelm);

/***lautre 94 */
}else if(input=="94"){
    pokemonName.innerHTML="GENGAR";

    let randomNbrId=Math.round(Math.random());
    if(randomNbrId===0){
        pokemonId.innerHTML="#94"; 
    }else{
        
    pokemonId.innerHTML="94";
    }
    let randomNbrWeight=Math.round(Math.random());
    if(randomNbrWeight===0){
         weight.innerHTML="Weight:<span style='White-space:pre;'> 405</span>";
      
    }else{
        
    weight.innerHTML="405";
    }
    let randomNbrHeight=Math.round(Math.random());
    if(randomNbrHeight===0){
            height.innerHTML="15";
    }else{
        height.innerHTML="Height<span style='White-space:pre;'> 15</span>";
    }
  defense.innerHTML="60";
  attack.innerHTML="65";
  hp.innerHTML="60";
  specialDefense.innerHTML="130";
  specialAttack.innerHTML="75";
  speed.innerHTML="110";

  let imgelm2=document.createElement("img"); 
  imgelm2.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png";
  imgelm2.id="sprite";
  document.body.appendChild(imgelm2);


  type.innerHTML= " ";
/*pour 3 etape*/

let innerelmOne=document.createElement("div");
let innerelmTwo=document.createElement("div");
innerelmOne.innerText="GHOST";
innerelmTwo.innerText="POISON";
type.appendChild(innerelmOne);
type.appendChild(innerelmTwo);

}else{
    console.log("eeee");
}


});




