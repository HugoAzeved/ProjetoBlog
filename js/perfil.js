

// Observador do Firebase Auth
firebase.auth().onAuthStateChanged((user) => {
    if (user) {

        console.log(user);

        telefone = '';
        verificado = 'Não';

        if (user.phoneNumber) 
            telefone = `<li><strong>Telefone:</strong> ${user.phoneNumber}</li>`;
        if (user.emailVerified)
            verificado = `Sim`;

        let out = `
        
<h2>Olá ${user.displayName}!</h2>
<img class="fotoPerfil" src="${user.photoURL}" alt="Avatar de ${user.displayName}" referrerpolicy="no-referrer">


<ul>
    <li><strong>E-mail:</strong> ${user.email}</li>
    <li><strong>E-mail verificado:</strong> ${verificado}</li>
    ${telefone}
    <li><strong>ID:</strong> ${user.uid}</li>
    <li><strong>Cadastro:</strong> ${dataISOparaBR(dataJStoISO(user.metadata.creationTime))}</li>
    <li><strong>Último login:</strong> ${dataISOparaBR(dataJStoISO(user.metadata.lastSignInTime))}</li>
</ul>


<p>Clique no botão a baixo para ver/editar seu perfil no google.</p>
<button class="btnPerfil" type="button" onclick="verPerfil()"><i class="fa-brands fa-google fa-fw"></i> Perfil no Google</button>

<p>Clique no botão abaixo para fazer logout/sair do aplicativo.</p>
<button class="btnLogout" type="button" onclick="fbSignOut()"> <i class="fa-solid fa-right-from-bracket"></i> </button>
        `;

        // Exibe os dados no HTML
        _('#conteudo').innerHTML = out;

    } else {
        // Se não está logado, mostra 404.html
        location.href = '404.html';
    }
});


/**
 * Abre o perfil do usuário no Google em um nova guia do navegador.
 */
function verPerfil() {
    window.open('https://myaccount.google.com/', '_blank');
}


/*



        if (user.emailVerified) console.log('verificado')

→ https://myaccount.google.com/
*/