function getCharTypes() {
    const chart = document.getElementById('es').checked;
    charTypes = [];
    if (gen) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890');
    }

    if (chart) {
        charTypes.push('!@#$%¨&*()_+-=~[];/?:;.,><|');
    }
    return charTypes;
}

function randomChart(){
    const randomIndex = Math.floor(Math.random() * charTypes.length);
    return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)];
}

function getPassword() {
    const size = document.getElementById('qt').value;
    if (isNaN(size) || size < 8 || size > 200) {
        alert("8 = minimo\n200 = maximo");
        return null;
    }

    return size;
}

function genPass(size, charTypes) {
    let passGenerate = '';
    while (passGenerate.length < size) {
        passGenerate += randomChart(charTypes)
    }

    return passGenerate
}


document.getElementById('gen').addEventListener('click', function() {
    const size = getPassword();
    const charTypes = getCharTypes();

    const passGenerate = genPass(size, charTypes);

    document.getElementById('textgen').value = passGenerate;
});