var game = {
  rejections: 0,
  guessers: {
    amount: 0,
    overclockRatio: 0,
    cost: 15,
  },
  unlocked: {
    guessers: false,
    rejected: false,
  },
}

function checkPassword() {
  if (document.getElementById("pass").value !== "") {
    if (document.getElementById("pass").value === (([]+[][[]])[+[]])+(([]+[][[]])[+[]])+ +([]+[[]])[++[[]][+[]] +[]]) {
      document.getElementById("password").innerHTML = "How did you find the password? Don't share this password.<br>Also join this discord. Here's the code: exv6pQ9<br>Here's the link: <a href='https://discord.gg/exv6pQ9'>Here</a>"
      document.getElementById("canvas").style.display = "none"
    } else {
      document.getElementById("pass").value = ""
      game.rejections++
   }
  }
}

function update() {
  document.getElementById("rejections").textContent = "Rejections: " + game.rejections
}

setInterval(update, 1000/30)
