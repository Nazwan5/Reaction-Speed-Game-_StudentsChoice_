let score = 0;
    const box = document.getElementById("box");
    const scoreDisplay = document.getElementById("score");

    box.addEventListener("click", () => {
      score++;
      scoreDisplay.textContent = "Score: " + score;

      // move box randomly
      box.style.marginLeft = Math.random() * 900 + "px";
      box.style.marginTop = Math.random() * 700 + "px";
    });