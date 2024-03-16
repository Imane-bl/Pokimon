let btn = document.getElementById("search-button");

        btn.addEventListener('click', function() {
            let input = document.getElementById("search-input").value.toLowerCase();
            if (input === "red") {
                alert("Pokémon not found");
            } else if (input === "pikachu") {
                displayPokemon("PIKACHU", "#25", "60", "4", "35", "55", "40", "50", "50", "90", ["ELECTRIC"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");
            } else if (input === "94") {
                displayPokemon("GENGAR", "#94", "405", "15", "60", "65", "60", "130", "75", "110", ["GHOST", "POISON"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png");
            } else {
                console.log(" not found");
            }
        });

        function displayPokemon(name, id, weight, height, hp, attack, defense, specialAttack, specialDefense, speed, types, spriteUrl) {
            clearTypes();
            document.getElementById("pokemon-name").textContent = name;
            document.getElementById("pokemon-id").textContent = id;
            document.getElementById("weight").textContent = "Weight: " + weight;
            document.getElementById("height").textContent = "Height: " + height;
            document.getElementById("hp").textContent = hp;
            document.getElementById("attack").textContent = attack;
            document.getElementById("defense").textContent = defense;
            document.getElementById("special-attack").textContent = specialAttack;
            document.getElementById("special-defense").textContent = specialDefense;
            document.getElementById("speed").textContent = speed;

            let typesElement = document.getElementById("types");
            types.forEach(type => {
                let typeSpan = document.createElement("span");
                typeSpan.textContent = type;
                typesElement.appendChild(typeSpan);
            });

 let sprite = document.getElementById("sprite");
            if (!sprite) {
                sprite = document.createElement("img");
                sprite.id = "sprite";
                document.body.appendChild(sprite);
            }
            sprite.src = spriteUrl;
        }

        function clearTypes() {
            document.getElementById("types").innerHTML = "";
        }


