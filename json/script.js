document.addEventListener('DOMContentLoaded', () => {
    let characters = [];
    fetch('characters.json')
        .then(response => response.json())
        .then(data => {
            characters = data;
            displayCharacters(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    function displayCharacters(data) {
        const container = document.getElementById('character-list');
        container.innerHTML = '';
        data.forEach(character => {
            const div = document.createElement('div');
            div.className = 'character';
            div.innerHTML = `
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
            `;
            container.appendChild(div);
        });
    }

    document.getElementById('search').addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const filteredCharacters = characters.filter(character => 
            character.name.toLowerCase().includes(query)
        );
        displayCharacters(filteredCharacters);
    });
});
