var game = {
  rejections: 0,
  guessers: {
    amount: 0,
    overclockRatio: 0,
  },
}

function checkPassword() {
  if (document.getElementById("pass").value === (([]+[][[]])[+[]])+(([]+[][[]])[+[]])+ +([]+[[]])[++[[]][+[]] +[]]) {
    document.getElementById("password").innerHTML = "How did you find the password? Don't share this password.<br>Also join this discord. Here's the code: exv6pQ9<br>Here's the link: <a href='https://discord.gg/exv6pQ9'>Here</a>"
  } else {
    game.rejections++
  }
}

function update() {
  
}
