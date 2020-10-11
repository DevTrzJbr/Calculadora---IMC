const calcular = document.getElementById('calcular');

const imc = () => {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso != '') {
        
        const valorIMC =  (peso / altura**2).toFixed(1);

        let classificacao = valorIMC;;

        if ( valorIMC < 18.5) {
            classificacao = 'Abaixo do peso!'
        } else if (valorIMC < 25) {
            classificacao = 'com Peso Normal. Parabéns!'
        } else if (valorIMC < 30) {
            classificacao = 'com Sobrepeso!'
        } else if (valorIMC < 35) {
            classificacao = 'com Obesidade Gral I!'
        } else if (valorIMC < 40) {
            classificacao = 'com Obesidade Gral II!'
        } else if (valorIMC < 40) {
            classificacao = 'com Obesidade Gral III ou Mórbida. CUIDADO!!!'
        };

        resultado.textContent = `${nome} seu IMC é de ${valorIMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
    };
}

calcular.addEventListener('click', imc);