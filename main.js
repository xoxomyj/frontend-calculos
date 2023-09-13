'use strict'

const botaoSomar = document.getElementById('somar')
const botaoSubtrair = document.getElementById('subtrair')
const botaoMultiplicar = document.getElementById('multiplicar')
const botaoDividir = document.getElementById('divisao')
const botaoMedia = document.getElementById('media')
const botaoIdentificar = document.getElementById('identificar')
const botaoSomar03 = document.getElementById('somar3')
const botaoConfirmar = document.getElementById('confirmar')
const botaoDescobrir = document.getElementById('descobrir')

function somar () {

    const num = Number(document.getElementById('numero1').value)
    const ndois = Number(document.getElementById('numero2').value)
    const resultado1 = document.getElementById('resultado1')
    
    const somatoria = num + ndois
    resultado1.textContent = somatoria

}

function subtrair () {

    const ntres = Number(document.getElementById('numero3').value)
    const nquatro = Number(document.getElementById('numero4').value)
    const resultado2 = document.getElementById('resultado2')
    
    const subtracao = ntres - nquatro
    resultado2.textContent = subtracao

}

function multiplicar () {

    const ncinco = Number(document.getElementById('numero5').value)
    const nseis = Number(document.getElementById('numero6').value)
    const resultado3 = document.getElementById('resultado3')
    
    const multiplicacao = ncinco * nseis
    resultado3.textContent = multiplicacao

}

function dividir () {

    const nsete = Number(document.getElementById('numero7').value)
    const noito = Number(document.getElementById('numero8').value)
    const resultado4 = document.getElementById('resultado4')
    
    const dividir = nsete / noito
    resultado4.textContent = dividir

}

function MediaEscolar () {

    const nota01 = Number(document.getElementById('nota1').value)
    const nota02 = Number(document.getElementById('nota2').value)
    const nota03 = Number(document.getElementById('nota3').value)
    const nota04 = Number(document.getElementById('nota4').value)

    const media = (nota01 + nota02 + nota03 + nota04) / 4

    if (media >= 7){
        alert(`A sua média é ${media}. Você foi aprovado.`)

    } else {
        const ne = prompt(`Sua média é ${media}. Adicione sua nota de exame`)
        const media2 = (media + Number(ne)) / 2
        
        if (media2 >= 5){
            alert(`Sua nova média é ${media2}. Aprovado com exame.`)

        }else{
            alert(`Sua nova média é ${media2}. Você foi reprovado.`)

        }

    }

}

function identificar () {

    const numeropn2 = Number(document.getElementById('numeropn2').value)
    const positivoounegativo = document.getElementById('positivonegativo')

    if (numeropn2 > 0 ){
        positivoounegativo.textContent = 'Positivo'

    }else if(numeropn2 < 0){
        positivoounegativo.textContent = 'Negativo'

    }else {
        positivoounegativo.textContent = 'Igual á Zero'
    }   

}

function somarTresValores () {

    const valor01 = Number(document.getElementById('valor01').value)
    const valor02 = Number(document.getElementById('valor02').value)
    const valor03 = Number(document.getElementById('valor03').value)
    const resultado3 = document.getElementById('somarvalores3')

    const soma3v = valor01 + valor02 + valor03

    if(soma3v >= 100){
        resultado3.textContent = soma3v
        
    }else {
        resultado3.textContent = 'Seu total não é um número maior que 100'

    }

}

function confirmarmultiplos() {

    const nnove = Number(document.getElementById('numero9').value)
    const ndez = Number(document.getElementById('numero10').value)
    const nonze = Number(document.getElementById('numero11').value)
    const ndoze = Number(document.getElementById('numero12').value)
    const confirmarMulti = document.getElementById('multiplosde2ou3')

    let result = ''

    if (nnove % 2 == 0 || nnove % 3 == 0){
        result = nnove

    }

    if (ndez % 2 == 0 || ndez % 3 == 0){
        if(nnove % 2 == 0 || nnove % 3 == 0){
        result = `${result} - ${ndez}`

        }else{
        result = ndez

        }

    }

    if (nonze % 2 == 0 || nonze % 3 == 0){
        if(nnove % 2 == 0 || nnove % 3 == 0 || ndez % 2 == 0 || ndez % 3 == 0){
        result = `${result} - ${nonze}`

        }else{
        result = nonze

        }

    }
    
    if (ndoze % 2 == 0 || ndoze % 3 == 0){
        
        if(nnove % 2 == 0 || nnove % 3 == 0 || ndez % 2 == 0 || ndez % 3 == 0 || nonze % 2 == 0 || nonze % 3 == 0){

            result = `${result} - ${ndoze}`

        }else{

            result = ndoze

        }
    }
    confirmarMulti.textContent = result
}

function descobrir () {

    const ntreze = Number(document.getElementById('numero13').value)
    const nquatorze = Number(document.getElementById('numero14').value)
    const nquinze = Number(document.getElementById('numero15').value)
    const ndezesseis = Number(document.getElementById('numero16').value)
    const ndezessete = Number(document.getElementById('numero17').value)
    const resultadodescoberta = document.getElementById('descoberta')

    const menorn = Math.min(ntreze, nquatorze, nquinze, ndezesseis, ndezessete)
    const maiorn = Math.max(ntreze, nquatorze, nquinze, ndezesseis, ndezessete)

    resultadodescoberta.textContent = `${menorn} - ${maiorn}`

}



botaoSomar.addEventListener('click', somar)
botaoSubtrair.addEventListener('click', subtrair)
botaoMultiplicar.addEventListener('click', multiplicar)
botaoDividir.addEventListener('click', dividir)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', MediaEscolar)
botaoSomar03.addEventListener('click', somarTresValores)
botaoConfirmar.addEventListener('click', confirmarmultiplos)
botaoDescobrir.addEventListener('click', descobrir)




