function Media(){
  var elementoNota1 = document.getElementById("nota1")
  var elementoNota2 = document.getElementById("nota2")
  var elementoNota3 = document.getElementById("nota3")
  var elementoNota4 = document.getElementById("nota4")
  var nota1 = elementoNota1.value
  var nota1Num = parseFloat(nota1)
  var nota2 = elementoNota2.value
  var nota2Num = parseFloat(nota2)
  var nota3 = elementoNota3.value
  var nota3Num = parseFloat(nota3)
  var nota4 = elementoNota4.value
  var nota4Num = parseFloat(nota4)
  var notaFinal = (nota1Num + nota2Num + nota3Num + nota4Num)/4
  var elementoMedia = document.getElementById("mediaNotas")
  var aprovado = "Você foi aprovado, sua nota final foi: " + notaFinal
  var reprovado = "Você foi reprovado, sua nota final foi: " + notaFinal
  
  if (notaFinal>=6){
    elementoMedia.innerHTML = aprovado;
  } else {
    elementoMedia.innerHTML = reprovado;
  }
}