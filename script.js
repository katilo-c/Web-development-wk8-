window.onload = () => {
  // Welcome message
  const savedName = localStorage.getItem('username');
  const welcomeEl = document.getElementById('welcome');
  if (savedName && welcomeEl) {
    welcomeEl.textContent = `Welcome back, ${savedName}!`;
  }

  // Likes counter
  let likes = localStorage.getItem('likeCount') || 0;
  const likeCountEl = document.getElementById('likeCount');
  const likeBtn = document.getElementById('likeBtn');

  if (likeCountEl) {
    likeCountEl.textContent = `Likes: ${likes}`;
  }

  if (likeBtn && likeCountEl) {
    likeBtn.addEventListener('click', () => {
      likes++;
      localStorage.setItem('likeCount', likes);
      likeCountEl.textContent = `Likes: ${likes}`;
    });
  }

  // Handle name saving
  const saveBtn = document.getElementById('saveNameBtn');
  const usernameInput = document.getElementById('username');

  if (saveBtn && usernameInput && welcomeEl) {
    saveBtn.addEventListener('click', () => {
      const name = usernameInput.value.trim();
      if (name) {
        localStorage.setItem('username', name);
        welcomeEl.textContent = `Welcome, ${name}!`;
      }
    });
  }
};
