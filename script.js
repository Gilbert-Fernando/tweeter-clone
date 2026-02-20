const tweetText = document.getElementById("tweetText");
const charCount = document.getElementById("charCount");
const tweetBtn = document.getElementById("tweetBtn");
const tweetFeed = document.getElementById("tweetFeed");

const MAX_LENGTH = 160;

// Disable button initially
tweetBtn.disabled = true;

// Character counter
tweetText.addEventListener("input", () => {
  const remaining = MAX_LENGTH - tweetText.value.length;
  charCount.textContent = `${remaining} characters remaining`;

  if (remaining < 0 || tweetText.value.trim() === "") {
    tweetBtn.disabled = true;
    charCount.style.color = "red";
  } else {
    tweetBtn.disabled = false;
    charCount.style.color = "black";
  }
});

// Create new tweet
tweetBtn.addEventListener("click", () => {
  const message = tweetText.value.trim();

  if (message === "" || message.length > MAX_LENGTH) return;

  const now = new Date();
  const dateString = now.toLocaleString();

  const newTweet = document.createElement("section");
  newTweet.classList.add("posted-tweet");

  newTweet.innerHTML = `
    <div class="profile-pic"></div>
    <div class="tweet-content">
      <div class="tweet-header">
        <span class="name">Gilberto Garza</span>
        <span class="username">@Yucateco-tactico89</span>
        <span class="date">· ${dateString}</span>
      </div>
      <p>${message}</p>
      <div class="tweet-icons">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-link"></i>
        <i class="fas fa-upload"></i>
      </div>
    </div>
  `;

  // Add new tweet to the top
  tweetFeed.prepend(newTweet);

  // Clear textarea
  tweetText.value = "";
  charCount.textContent = `${MAX_LENGTH} characters remaining`;
  tweetBtn.disabled = true;
});