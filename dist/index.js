const welcomeEl = document.getElementById("welcome")
const homeEl = document.getElementById("home")
const serverUrl = "https://grhow-server-4ajpz2roya-ew.a.run.app"
const headers = new Headers()
const date = new Date().toLocaleString()
headers.append("Accept", "application/json")
headers.append("Content-Type", "application/json")
let body = JSON.stringify({date})
fetch(serverUrl, {method: "POST", headers, body})
  .then(function (response) {
    let locale = response.headers.get("Content-Language")
    document.documentElement.lang = locale.substring(0, 2)
    return response.json()
  })
  .then(function (json) {
    homeEl.textContent = json.message
    welcomeEl.style.animation = "fade 1s ease-out forwards"
    homeEl.style.animation = "fade 1s ease-out reverse forwards"
    welcomeEl.addEventListener("animationend", (ev) => {
      welcomeEl.style.display = "none"
    })
  })
  .catch(err => {
    console.error(err)
  })
