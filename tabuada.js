function msk(){
    let numero = document.getElementById("idate")
    let tabela = document.getElementById("foto")

    let numerov = Number(numero.value);
    let vezes = 1
    
    tabela.innerHTML = ``
    tabela.style.opacity = 2;

    if(numero.value.length == 0){
        window.alert("[ERRO] Numero Invalido")
        tabela.style.opacity = 0;
    }
    else{
        while(vezes<=10){
            let res = numerov*vezes
            tabela.innerHTML += `<p>${numerov}*${vezes} = ${res} </p>`
            vezes++
        }
    }
}