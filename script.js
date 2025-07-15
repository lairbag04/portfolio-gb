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
    body.style.backgroundImage = 'assets/imagens/fundo_preto.svg';
    icone.src = 'assets/imagens/icons/sun.svg';
    logo.src = 'assets/imagens/icons/logo_branco.svg';
    iconProjects.src = 'assets/imagens/icons/projects_branco.svg';
    iconLanguage.src = 'assets/imagens/icons/language_branco.svg';
    iconCollege.src = 'assets/imagens/icons/college_branco.svg';
    iconEmail.src = 'assets/imagens/icons/email_branco.svg';
    profilePhoto.src = 'assets/imagens/profile_preto.png';
  } else {
    icone.src = 'assets/imagens/icons/moon.svg';
    logo.src = 'assets/imagens/icons/logo_preta.svg';
    iconProjects.src = 'assets/imagens/icons/projects_preto.svg';
    iconLanguage.src = 'assets/imagens/icons/language_preto.svg';
    iconCollege.src = 'assets/imagens/icons/college_preto.svg';
    iconEmail.src = 'assets/imagens/icons/email_preto.svg';
    profilePhoto.src = 'assets/imagens/profile_branco.jpg';
  }
}

function changePage(pag) {
  const pages = ['home', 'about-me', 'contact', 'projects'];

  pages.forEach(pageId =>{
  const page = document.getElementById(pageId);
  if (pag === pageId){
    page.style.display = 'block';
    page.classList.remove('animate__animated', 'animate__zoomIn');
    page.classList.add('animate__animated', 'animate__zoomIn'); 
  }
  else {
    page.style.display = 'none';
  }
 })
}
