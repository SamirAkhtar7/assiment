// Q2. Input scores of 2 teams for 3 matches and display which team has scored better average.

 let teamAScore1 = parseInt(prompt("Enter score of teamA matches 1"));
 let teamAScore2 = parseInt(prompt("Enter score of teamA matches 2"));
 let teamAScore3 = parseInt(prompt("Enter score of teamA matches 3"));

let averageTeam1 = (teamAScore1 + teamAScore2 + teamAScore3) / 3;

 let teamBScore1 = parseInt(prompt("Enter score of teamB matches 1"));
 let teamBScore2 = parseInt(prompt("Enter score of teamB matches 2"));
 let teamBScore3 = parseInt(prompt("Enter score of teamB matches 3"));

let averageTeam2 = (teamBScore1 + teamBScore2 + teamBScore3) / 3;
 if (averageTeam1 > averageTeam2) {
     alert("Team A has scored better average");
 } else if (averageTeam1 < averageTeam2) {
     alert("Team B has scored better average");
 } else {
     alert("Both teams have scored same average");
 }