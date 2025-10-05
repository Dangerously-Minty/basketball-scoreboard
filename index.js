let points = new Array(
        new Array("home","guest"),
        new Array(0,0)
        )

function addPoints(team,i){
    points[1][team]+=i
    document.getElementById(points[0][team]).textContent = points[1][team] 
}
function newGame(){
    points[1][0] = 0
    points[1][1] = 0
    document.getElementById(points[0][0]).textContent = points[1][0] 
    document.getElementById(points[0][1]).textContent = points[1][1] 
}