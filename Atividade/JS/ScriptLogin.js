function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert('sucesso');
        location.href = "Principal.html";
    } else {
        alert('Usuario ou senha Incorretos');
    }

}