/**
 * JavaScript do template do site.
 * É executado em todas as páginas.
 * Todo o código global fica aqui, por exemplo, gestão do usuário e
 * tratamento do template.
 **/

/**
 * Inicializa o Firebase e as ferramentas Firestore e Auth
 */
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Arrow function
window.onload = () => { // Isso é uma "arrow function"

    // Carrega o template HTML em div#wrap
    _('#wrap').innerHTML = template();

    // Observa as mudanças de status do usuário
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
  console.log(user)
        } else {
            // User is signed out
            // ...
        }

    });
    /**
     * Obtém o ano da data atual e atualiza a licensa do site.
     **/
    let agora = new Date();
    let ano = agora.getFullYear();
    if (ano > site.ano)
        _('#footerAno').innerHTML = `${site.ano} ${ano}`;
    else
        _('#footerAno').innerHTML = ano;

    _('#usuarioAcao').addEventListener('click', (evento) => {
        //Bloqueia a execução normal do evento
        evento.preventDefault();
        let acao = _('#usuarioAcao').getAttribute('data-acao');
        switch (acao) {
            case 'login':
                fbSigIn();
                break;
            case 'logout':
                fbSignOut();
                break;
            case 'perfil':
                location.href = 'perfil.html';
        }
    });
}