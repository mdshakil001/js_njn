const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar')

let hpCharacters = [];



// searchBar.addEventListener('keyup', (e)=>{
//     const searchString = e.target.value
//     const filteredCharacters = hpCharacters.filter(character => {
//         return (
//         character.name.includes(searchString) 
//         ||
//         character.house.includes(searchString) 
//         )
//     })
//     // console.log(filteredCharacters)
//     displayCharacters(filteredCharacters)
// })

searchBar.addEventListener('keyup', (e)=>{
    const searchString = e.target.value.toLowerCase()
    // console.log(searchString);
    const filteredCharacters = hpCharacters.filter(character => {
        return (
        character.name.toLowerCase().includes(searchString) 
        ||
        character.house.toLowerCase().includes(searchString) 
        )
    })
    filteredCharacters.length < 1 ?  charactersList.innerHTML = `
        <h1>No Items Found !</h1>
    `
    :

    displayCharacters(filteredCharacters)
})





const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        // console.log("res ====>>>", res);
        hpCharacters = await res.json();
        // console.log("hpCharacters ====>>", hpCharacters);
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};



const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
        // console.log("htmlString = ", htmlString);
    charactersList.innerHTML = htmlString;
};


loadCharacters();




