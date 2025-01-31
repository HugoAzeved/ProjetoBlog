

// Observador do Firebase Auth
firebase.auth().onAuthStateChanged((user) => {
    if (user) {

        console.log(user);

        let out = `
        
<h2>Olá ${user.displayName}!</h2>
<img class="fotoPerfil" src="${user.photoURL}" alt="Avatar de ${user.displayName}" referrerpolicy="no-referrer">
        
        `;


        _('#conteudo').innerHTML = out;

    } else {
        location.href = '404.html';
    }
});