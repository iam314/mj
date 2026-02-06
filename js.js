document.querySelector('.copymailbtn').addEventListener('click', () => {
  const email = document.querySelector('.email').textContent.trim();

  navigator.clipboard.writeText(email).then(() => {
    document.querySelector('.copymailbtn').textContent = 'Copied';
  });
});
