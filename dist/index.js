const welcomeEl = document.getElementById("welcome")
const homeEl = document.getElementById("home")
//let server = "https://grhow-server-4ajpz2roya-ew.a.run.app"
let serverUrl = "http://localhost:3000"
fetch(serverUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    homeEl.textContent = json.message
    welcomeEl.style.animation = "fade 1s ease-out forwards"
    homeEl.style.animation = "fade 1s ease-out reverse forwards"
    welcomeEl.addEventListener('animationend', (ev) => {
      welcomeEl.style.display = "none"
    });
  })
  .catch(err => {
    console.error(err)
  })
