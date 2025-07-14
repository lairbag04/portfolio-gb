function changeTheme() {
  const body = document.body;
  const icone = document.getElementById('icon');
  const logo = document.getElementById('logo');
  const iconProjects = document.getElementById('icon-projects');
  const iconLanguage = document.getElementById('icon-language');
  const iconCollege = document.getElementById('icon-college');
  const iconEmail = document.getElementById('email_icon');
  const profilePhoto = document.getElementById('profile-photo');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    body.style.backgroundImage = 'imagens/fundo_preto.svg';
    icone.src = 'imagens/icons/sun.svg';
    logo.src = 'imagens/icons/logo_branco.svg';
    iconProjects.src = 'imagens/icons/projects_branco.svg';
    iconLanguage.src = 'imagens/icons/language_branco.svg';
    iconCollege.src = 'imagens/icons/college_branco.svg';
    iconEmail.src = 'imagens/icons/email_branco.svg';
    profilePhoto.src = 'imagens/profile_preto.png';
  } else {
    icone.src = 'imagens/icons/moon.svg'; 
    logo.src = 'imagens/icons/logo_preta.svg';
    iconProjects.src = 'imagens/icons/projects_preto.svg';
    iconLanguage.src = 'imagens/icons/language_preto.svg';
    iconCollege.src = 'imagens/icons/college_preto.svg';
    iconEmail.src = 'imagens/icons/email_preto.svg';
    profilePhoto.src = 'imagens/profile_branco.jpg';
  }
} 

function mudarPagina(pagina) {
  const home_pag = document.getElementById('home');
  const about_pag = document.getElementById('about-me');
  const contact_pag = document.getElementById('contact')

  if (pagina === 'home') {
    home_pag.style.display = 'block';
    about_pag.style.display = 'none';
    contact_pag.style.display = 'none';
    home_pag.classList.remove('animate__animated', 'animate__zoomIn');
    home_pag.classList.add('animate__animated', 'animate__zoomIn');
    return;
  } 

  if (pagina === 'about-me') {
    home_pag.style.display = 'none';
    about_pag.style.display = 'block';
    contact_pag.style.display = 'none';
    about_pag.classList.remove('animate__animated', 'animate__zoomIn');
    about_pag.classList.add('animate__animated', 'animate__zoomIn');
    return;
  }

  if (pagina === 'contact') {
    home_pag.style.display = 'none';
    about_pag.style.display = 'none';
    contact_pag.style.display = 'block';
    contact_pag.classList.remove('animate__animated', 'animate__zoomIn');
    contact_pag.classList.add('animate__animated', 'animate__zoomIn');
  }
}
