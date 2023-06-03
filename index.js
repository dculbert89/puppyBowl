const Base_URL = "https://fsa-puppy-bowl.herokuapp.com"

async function fetchPlayersData () {
    try {

        
        let response = await fetch(`${Base_URL}/api/2304-ftb-et-web-ft/players`)
        
        let translatedData = await response.json()
        
        let players = translatedData.data.players
        
        return players
        
    } catch (error) {
        return error
    }
}

async function renderPlayerData () {
    let playerContainer = document.getElementById("player-container")

    let currentPlayers = await fetchPlayersData();

    currentPlayers.forEach((player) => {
        let newPlayerElement = document.createElement("div")
        

        newPlayerElement.innerText = `${player.name}-------`
        newPlayerElement.style.fontWeight = "bold"
        newPlayerElement.classList.add("name")

        playerContainer.appendChild(newPlayerElement)

        let newButton = document.createElement("button")
        newButton.classList.add("button")
        newButton.innerText = "Click to see Details"

        newButton.addEventListener("click", () => {
            localStorage.setItem("playerName", player.name)
            localStorage.setItem("teamId", player.teamId)
            localStorage.setItem("playerBreed", player.breed)
            localStorage.setItem("playerStatus", player.status)
            localStorage.setItem("playerImageURL", player.imageUrl)

            window.location.href = "puppy-details.html"
        })

        newPlayerElement.appendChild(newButton)

        console.log(player)
    });
    
}

renderPlayerData()