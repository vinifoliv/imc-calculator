const display = document.getElementById('display')

function calcular() {
    if (!validarEntrada()) return;

    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);

    let imc = peso / (altura * altura);

    if (imc < 18.5)
        prepareDisplay(imc, 'Abaixo do peso (IMC < 18,5');

    if (imc >= 18.5 && imc <= 24.9)
        prepareDisplay(imc, 'Peso normal (IMC entre 18,5 e 24,9)');

    if (imc >= 25 && imc <= 29.9)
        prepareDisplay(imc, 'Sobrepeso (IMC entre 25 e 29,9)');

    if (imc >= 30 && imc <= 34.9)
        prepareDisplay(imc, 'Obesidade grau 1 (IMC entre 30 e 34,9)');

    if (imc >= 35 && imc <= 39.9)
        prepareDisplay(imc, 'Obesidade grau 2 (IMC entre 35 e 39,9)');

    if (imc >= 40)
        prepareDisplay(imc, 'Obesidade grau 3 (IMC ≥ 40');
}

function validarEntrada() {
    const peso = document.getElementById('peso').value;
    if (peso == '' || peso < 1 || isAlpha(peso)) {
        alert('Digite um peso válido.')
        return false;
    }

    const altura = document.getElementById('altura').value;
    if (altura == '' || altura < 1 || isAlpha(altura)) {
        alert('Digite uma altura válido.');
        return false;
    }

    return true;
}

function prepareDisplay(imc, result) {
    if (display.innerHTML != '')
        clearPreviousDisplay();

    const title = document.createElement('h3');
    title.innerHTML = `IMC ${imc}`;
    title.id = 'title';

    const message = document.createElement('p');
    message.innerHTML = result;
    message.id = 'message';

    display.appendChild(title);
    display.appendChild(message);

    display.hidden = false;
}

function clearPreviousDisplay() {
    document.getElementById('title').remove();
    document.getElementById('message').remove();
}

function isAlpha(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/[a-z]/i)) return true;
    }

    return false;
}