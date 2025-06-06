const themeButtons = document.querySelectorAll('.theme-btn');

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.remove('theme-light', 'theme-green');

    const theme = btn.getAttribute('data-theme');
    if (theme === 'light') {
      document.body.classList.add('theme-light');
    } else if (theme === 'green') {
      document.body.classList.add('theme-green');
    }
  });
});
