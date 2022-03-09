function passwordGen(length){
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_';
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            characters.length));
    }
    return result;
}

function updateBlocks() {
    let passwordEl1 = document.getElementById("password-block-1")
    let passwordEl2 = document.getElementById("password-block-2")
    let passwordEl3 = document.getElementById("password-block-3")
    let passwordEl4 = document.getElementById("password-block-4")

    passwordEl1.textContent = passwordGen(10);
    passwordEl2.textContent = passwordGen(10);
    passwordEl3.textContent = passwordGen(10);
    passwordEl4.textContent = passwordGen(10);
}