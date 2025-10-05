let game = {
        teams: ["home","guest"],
        points: [0,0]
}

function addPoints(team,i){
    game.points[team]+=i
    document.getElementById(game.teams[team]).textContent = game.points[team] 
}
function newGame(){
    game.points[0] = 0
    game.points[1] = 0
    document.getElementById(game.teams[0]).textContent = 0
    document.getElementById(game.teams[1]).textContent = 0 
}