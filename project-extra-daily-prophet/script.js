const article = document.querySelector('.article-container');

article.addEventListener('click', (e) => {
  if (e.target.classList.contains('article-animation')) {
    e.target.style.animationPlayState = 'running';
  }
});
