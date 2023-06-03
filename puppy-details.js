window.onload = () => {
    let playerName = localStorage.getItem("playerName")
    let playerBreed = localStorage.getItem("playerBreed")
    let playerStatus = localStorage.getItem("playerStatus")
    let storedUrl = localStorage.getItem("playerImageURL")
    let teamId = localStorage.getItem("teamId")


    let playerNameContainer = document.getElementById("player-name-container")

    let imageDetailsContainer = document.getElementById("image-details-container")

    let playerDetailsContainer = document.getElementById("player-details-container")

    let newNameElement = document.createElement("h2")
    newNameElement.innerText = `Player Name: ${playerName}`
    playerNameContainer.appendChild(newNameElement)

    let newTeamId = document.createElement("h4")
    newTeamId.innerText = `Team: ${teamId}`
    playerNameContainer.appendChild(newTeamId)

    let newBreedElement = document.createElement("p")
    newBreedElement.innerText = `Breed: ${playerBreed}`
    playerDetailsContainer.appendChild(newBreedElement)
    
    let newStatusElement = document.createElement("p")
    newStatusElement.innerText = `Status: ${playerStatus}`
    playerDetailsContainer.appendChild(newStatusElement)

    let playerImageUrl = document.createElement("img")
    playerImageUrl.src = storedUrl
    playerImageUrl.classList.add("puppyImage")
    imageDetailsContainer.appendChild(playerImageUrl)

}