
function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function classificarIMC(imc) {

    var classificacao = '';
    var cor = '';

    if (imc < 18.5) {
        classificacao = 'Magreza';
        cor = 'red';
    }

    else if (imc <= 24.9) {
        classificacao = 'Normal';
        cor = 'green';
    }

    else if (imc <= 29.9) {
        classificacao = 'Sobrepeso';
        cor = '#c45f00';
    }

    else if (imc <= 39.9) {
        classificacao = 'Obesidade';
        cor = '#ce0d07';
    }

    else {
        classificacao = 'Obesidade Grave';
        cor = '#740505';
    }

    return [classificacao,cor];
}

function executarIMC(e) {

    //console.log(e);
    //Previnir o comportamento padrão de quem acionou a função
    e.preventDefault();

    //var peso = Number(prompt('Informe o peso'));
    //var altura = Number(prompt('Informe a altura'));

    //Seleção de DOM
    var peso = document.getElementById('peso');
    var altura = document.getElementById('altura');
    var resposta = document.getElementById('resposta');

    
    console.log(peso);

    var imc = calcularIMC(peso.value, altura.value);
    var classificacao = classificarIMC(imc);

    //alert('Seu IMC é: ' + imc + '\nSua classificação: ' + classificacao);
    
    resposta.innerHTML = '<h3>Seu IMC é: ' + imc + ' - Sua classificação: ' + classificacao[0] + '</h3>';
    resposta.style.color = classificacao[1];
    
    peso.value = '';
    altura.value = '';
}


//executarIMC();
