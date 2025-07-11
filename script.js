function changeTheme() {
  const body = document.body;
  const icone = document.getElementById('icon');
  const logo = document.getElementById('logo');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    body.style.backgroundImage.src = 'imagens/fundo_preto.svg'
    icone.src = 'imagens/sun.svg';
    logo.src = 'imagens/logo_branco.svg'
  } else {
    icone.src = 'imagens/moon.svg';
    logo.src = 'imagens/logo_preta.svg'
  }
}       