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

// Arrow function
window.onload = () => { // Isso é uma "arrow function"

    document.title = site.nome

    // Carrega o template HTML em div#wrap
    _('#wrap').innerHTML = template();

    _('#conteudo').innerHTML = ''

    /**
     * Obtém o ano da data atual e atualiza a licensa do site.
     **/
    let agora = new Date();
    let ano = agora.getFullYear();
    console.log(_('#footerAno'))
    if (ano > site.ano)
        _('#footerAno').innerHTML = `${site.ano} ${ano}`;
    else
        _('#footerAno').innerHTML = ano;

}