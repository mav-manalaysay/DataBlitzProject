// Smooth scroll for anchor links
document.querySelectorAll('a.nav-link, .dropdown-item').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    if(this.getAttribute('href').startsWith("#")){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Game availability data
const gameData = {
  "RE9": ["PS5","Xbox"],
  "Silent Hill": ["PS4","PS5"],
  "FIFA": ["PS4","PS5","Xbox","Switch"],
  "Cyberpunk": ["PS5","Xbox"],
  "Zelda": ["Switch"]
};

// Handle game selection
const gameItems = document.querySelectorAll('.game-item');
const consoleDisplay = document.getElementById('availableConsoles');

gameItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const game = item.dataset.game;
    const consoles = gameData[game] || [];
    consoleDisplay.innerHTML = `<h5>${game} is available on:</h5>`;
    consoles.forEach(c => {
      const btn = document.createElement('button');
      btn.classList.add('btn','btn-warning','m-2');
      btn.innerText = c;
      // Redirect or alert on click
      btn.addEventListener('click', () => {
        if(c === "PS4" || c === "PS5"){
          window.location.href = "playstation.html";
        } else if(c === "Switch"){
          alert("Nintendo Switch page coming soon!");
        } else if(c === "Xbox"){
          alert("Xbox page coming soon!");
        }
      });
      consoleDisplay.appendChild(btn);
    });
  });
});