// Data fetching met AXIOS stappenplan
// 1. [x] HTML, CSS en JS files maken.
// 2. [x] CSS en JavaScript file linken.
// 3. [x] NPM init.
// 4. [x] git init (zorg wel voor een git repository)
// 5. [x] .gitignore maken.
// 6. [x] AXIOS installeren. _(library)_
// 7. [x] AXIOS script linken.
// 8. [x] Een async function maken en **aanroepen**!
// 9. [x] Request maken met AXIOS.
// 10. [x] Afwachten tot de data er is.
// 11. [x] Data weergeven in de DOM.
//  - [x] Lijst maken met een id.
//  - [x] Lijst selecteren.
//   - [x] Voor elke element in de array.
//       - [x] Een li aanmaken.
//       - [x] textContent toevoegen.
//        - [x] li appenden.
// [] refresh bij nieuwe entry
// [] meer styling, margin etc..
// [] homeworld toegevoegen via nieuwe dom en element in html
// [] url toevoegen via nieuwe dom en element in html


const searchButton = document.getElementById("button-element");
searchButton.addEventListener("click", fetchDataStarWars);

const personInfo = document.getElementById("character-container");

const searchInput = document.getElementById("input-element");
searchInput.addEventListener("keypress", handleKeyPress);

function handleKeyPress(event) {
    // console.log("KEY PRESSED?", event.code, event.code === "Enter");
    if (event.code === "Enter") {
        fetchDataStarWars();
    }
}
    async function fetchDataStarWars() {
        const outComeElement = searchInput.value; //=> de invoer is altijd met .value
        // console.log("OUTCOME", outComeElement, !outComeElement);
        if(!outComeElement) {
            return
        }

        const errorMessage = document.getElementById("error-msg");
        errorMessage.textContent = "";

        const response = await axios.get(`https://swapi.dev/api/people?search=${outComeElement}`);
         // console.log("RESPONSE", response, response.data.count === 0 );
         if(response.data.count === 0){
             return errorMessage.textContent = `This character does not exists in Star Wars. Try again!`;
         }

        // console.log("Response DATA", response.data);

        let starWarsData = response.data.results;
        console.log(response.data);
        console.log("Data", starWarsData);

        searchInput.value = "";

        try {
            // const names = document.getElementById("name-result");
            // console.log(names);

            for (const character of starWarsData) {
                // console.log("1 actor at a time?", character);

                const nameAndHeight = `${character.name} is one of Star Wars characters and his or her height is ${character.height} cm.`
                // console.log("NAME and HEIGHT", nameAndHeight);

                const characterInfo = document.createElement("li");
                characterInfo.textContent = nameAndHeight;
                console.log("INFO", characterInfo);

                personInfo.appendChild(characterInfo);
            }

        } catch (error) {
            console.log(error);
            // errorMessage.textContent = `This character does not exists in Star Wars. Try again!`;
        };

}

// fetchDataStarWars();