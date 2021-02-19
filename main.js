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
// 10. [ ] Afwachten tot de data er is.
// 11. [ ] Data weergeven in de DOM.
//  - [ ] Lijst maken met een id.
//  - [ ] Lijst selecteren.
//   - [ ] Voor elke element in de array.
//       - [] Een li aanmaken.
//       - [ ] textContent toevoegen.
//        - [ ] li appenden.

async function fetchDataStarWars() {
    const response = await axios.get(`https://swapi.dev/api/people/`);
    console.log("RESPONSE", response);
    // console.log("Response DATA", response.data);
    const starWarsData = response.data.results;
    console.log("Data", starWarsData);

    try {
        const names = document.getElementById("name-result");
        // console.log(names);

        for (const character of starWarsData) {
            // console.log("1 actor at a time?", character);

            const nameAndHeight = `${character.name} is one of Star Wars characters and his or her height is ${character.height} cm.`
            console.log("NAME and HEIGHT", nameAndHeight);
        }

    }

    catch(error) {
        console.log("ERROR");
    };

}
fetchDataStarWars();