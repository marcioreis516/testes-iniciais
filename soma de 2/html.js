

function botao() {
    let a = document.getElementById('nu1').value;
    let b = document.getElementById('nu2').value;
    let soma= parseFloat(a)+parseFloat(b);

    console.log(soma)
    document.getElementById('saida').innerHTML=soma;
}