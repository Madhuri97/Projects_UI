const FINAL_SPACE_API = 'https://finalspaceapi.com/api/v0/character/'
const character_container = document.getElementById('charid');
const no_of_characters = 47;

// getting each character
const fetchCharacters = async () => {
    for(let ch = 1; ch <= no_of_characters; ch++){
        await getCharacter(ch)
    }
}

async function getCharacter(chId){
    const res = await fetch(FINAL_SPACE_API+chId);
    const resData = await res.json();
    createCharacterCard(resData);
}

const createCharacterCard = charac => {
    const characterEle = document.createElement('div');
    characterEle.classList.add('character');
    const { id, name, img_url, gender, status, species, hair, origin, abilities } = charac;
    const wepon = abilities[0];
    const charInnerHTML = `
        <div class="charimg-container">
            <img src="${img_url}" alt="${name}" />
        </div>
        <br>
        <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            <p>Gender: <span>${gender}</span></p>
            <p>Status: <span>${status}</span></p>
            <p>Origin: <span>${origin}</span></p>
            <p>Species: <span>${species}</span></p>
            <p>Hair: <span>${hair}</span></p>
            <p>Ability: <span>${wepon}</span></p>
        </div>
    `;
    characterEle.innerHTML = charInnerHTML;
    charid.appendChild(characterEle);
}

fetchCharacters();