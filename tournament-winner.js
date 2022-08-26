// O(N) Time
const tournamentWinner = (competitions, results) => {
  const scores = {};
  let currentBestTeam = "";
  scores[currentBestTeam] = 0;
  for (let i = 0; i < competitions.length; i++) {
    const winnerId = results[i];
    const winnerName = winnerId === 0 ? competitions[i][1] : competitions[i][0];
    scores[winnerName] = scores[winnerName] ? scores[winnerName] + 3 : 3;
    currentBestTeam = scores[winnerName] > scores[currentBestTeam] ? winnerName : currentBestTeam;
  }

  return currentBestTeam;
};
