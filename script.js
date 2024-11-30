const playlists = {
  sad: {
    spotify: "https://open.spotify.com/embed/playlist/2sOMIgioNPngXojcOuR4tn",
  },
  happy: {
    spotify: "https://open.spotify.com/embed/playlist/0jrlHA5UmxRxJjoykf7qRY",
  },
  calm: {
    spotify: "https://open.spotify.com/embed/playlist/4kOdiP5gbzocwxQ8s2UTOF",
  },
  excited: {
    spotify: "https://open.spotify.com/embed/playlist/7n7DGZiTXT37yuIcSZ1efJ",
  },
  motivational: {
    spotify: "https://open.spotify.com/embed/playlist/4eBaqVbGzUyAiXv149myH2",
  },
  angry: {
    spotify: "https://open.spotify.com/embed/playlist/0a4Hr64HWlxekayZ8wnWqx",
  },
  relaxed: {
    spotify: "https://open.spotify.com/embed/playlist/4oblctaZrOuwS4YCeRG6wO",
  },
  nostalgic: {
    spotify: "https://open.spotify.com/embed/playlist/3DEdLxmZTeLBIpnFedtQDa",
  },
};

document.getElementById("mood").addEventListener("change", (event) => {
  const mood = event.target.value;
  const links = playlists[mood];
  const container = document.querySelector(".container");

  // Update playlist links and player
  document.getElementById("playlist-links").innerHTML = `
    <a href="${links.spotify}" target="_blank">Spotify Playlist</a>
  `;
  document.getElementById("playlist-player").innerHTML = `
    <iframe src="${links.spotify}" frameborder="0" allow="encrypted-media"></iframe>
  `;

  // Update container class for mood
  container.className = "container"; // Reset classes
  container.classList.add(mood);    // Add mood-specific class
});
