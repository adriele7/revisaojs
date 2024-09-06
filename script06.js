alert("Programa que faz calculo de area geometrica plana")

let opcao = (prompt("Digite o numero da figura geometrica : \n 1.Triângulo \n 2.Quadrado\n 3.Retangulo \n 4.Circulo"))

if (opcao == 1){
    let base = parseInt(prompt("Digite o valor da base : "))
    let altura = parseInt(prompt("Digite o valor da altura : "))
    let area = base * altura /2
    alert("a area do triangulo corresponde a: " +area)
} else 
 if (opcao == 2) {
        let lado = parseFloat(prompt("Digite o valor do lado"))
        let area = lado * lado 
        alert("a area do Quadrado corresponde a : " +area)
} else
    if (opcao == 3) {
        let base = parseFloat(prompt("Digire o valor da base"))
        let altura = parseFloat(prompt("Digire o valor da altura"))
        let area = base * altura
        alert("a area do Retangulo corresponde a : " +area)
 } else 
    if (opcao == 4) {
        let raio = parseFloat(prompt("Digire o valor do raio"))
        let area = 3.14 * raio * raio 
        alert("a area do Circulo corresponde a " +area)
 } else {
    alert("Não possui número correspondente")
 }

