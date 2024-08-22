var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style = "display: none"
<<<<<<< HEAD
    bruna.style = "display: flex"   
=======
    bruna.style = "display: flex"
>>>>>>> 49bd00a4991eff6f3b8ac2024c756d2171c602c3
    setaDireita.style = "display: none"
    setaEsquerda.style = "display: flex; margin-top: 55px"
}

function RolarParaEsquerda() {
    leonardo.style = "display: flex"
    bruna.style = "display: none"
    setaDireita.style = "display: flex; margin-top: 55px"
    setaEsquerda.style = "display: none"
}