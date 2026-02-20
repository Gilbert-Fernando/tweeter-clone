const tweetText = document.getElementById("tweetText");
const charCount = document.getElementById("charCount");
const tweetBtn = document.getElementById("tweetBtn");

tweetText.addEventListener("input", () => {
  const remaining = 160 - tweetText.value.length;
  charCount.textContent = `${remaining} characters remaining`;

  if (remaining < 0 || tweetText.value.trim() === "") {
    tweetBtn.disabled = true;
  } else {
    tweetBtn.disabled = false;
  }
});