// Lista de canciones de Ricardo Arjona
const songs = [
  { name: "Mujeres", wins: 0, losses: 0 },
  { name: "Historia de un Taxi", wins: 0, losses: 0 },
  { name: "Señora de las Cuatro Décadas", wins: 0, losses: 0 },
  { name: "Te Conozco", wins: 0, losses: 0 },
  { name: "Fuiste Tú", wins: 0, losses: 0 },
  { name: "El Problema", wins: 0, losses: 0 },
  { name: "Dime Que No", wins: 0, losses: 0 },
  { name: "Adiós Melancolía", wins: 0, losses: 0 }
];

let currentPair = [];

// Elegir dos canciones al azar
function pickSongs() {
  const idx1 = Math.floor(Math.random() * songs.length);
  let idx2;
  do {
    idx2 = Math.floor(Math.random() * songs.length);
  } while (idx2 === idx1);

  currentPair = [idx1, idx2];
  document.getElementById("song1").textContent = songs[idx1].name;
  document.getElementById("song2").textContent = songs[idx2].name;
}

// Actualizar ranking
function updateRanking() {
  const rankingList = document.getElementById("rankingList");
  rankingList.innerHTML = "";
  const sorted = [...songs].sort((a, b) => b.wins - a.wins);
  sorted.forEach(song => {
    const li = document.createElement("li");
    li.textContent = `${song.name} (Ganadas: ${song.wins}, Perdidas: ${song.losses})`;
    rankingList.appendChild(li);
  });
}

// Registrar elección del usuario
function vote(winnerIndex) {
  const loserIndex = currentPair.find(idx => idx !== winnerIndex);
  songs[winnerIndex].wins++;
  songs[loserIndex].losses++;
  updateRanking();
  pickSongs();
}

// Eventos de clic
document.getElementById("song1").addEventListener("click", () => vote(currentPair[0]));
document.getElementById("song2").addEventListener("click", () => vote(currentPair[1]));

// Inicialización
pickSongs();
updateRanking();
