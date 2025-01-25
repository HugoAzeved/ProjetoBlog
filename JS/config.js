/**
 * Chaves de conexão ccom o Firebase.
 * ATENÇÃO! Sempre troque essas chaves pelas chaves do seu projeto.
 **/

const firebaseConfig = {
  apiKey: "AIzaSyBU0Zm9TwA-jR0d8EATK4UgVkfkU6bXdJ8",
  authDomain: "projetoblog-24951.firebaseapp.com",
  projectId: "projetoblog-24951",
  storageBucket: "projetoblog-24951.firebasestorage.app",
  messagingSenderId: "445464845403",
  appId: "1:445464845403:web:ce9a311a21a501e83bb37e"
};


/**
 * configuração do site;
 */

const site = {
  /**
    * Nome do site usado na tag <title>...</title> e nas interações dinâmicas
    **/
  nome: "Chrono Mirror",

  /**
   * Logotipo do site, usado na tag <header>...</title>
   */
  logo: "img/logo.png",

  /**
   * Controla a ação ao clicar no link do usuário logado no menu principal
   * Se `true`, exibe o perfil do usuário → perfil.html
   * Se `false`, faz logout direto
   **/
  verPerfil: false,

  /**
   * Ano de lançamento do site
   **/
  ano: 2025,

  /**
   * Licensa do site usada no rodapé
   **/
  licensa: `
    <i class="fa-regular fa-copyright fa-rotate-180 fa-fw"></i>
    <span>Copyleft <span id="footerAno"></span> Hugo Azes</span>
    `,

}