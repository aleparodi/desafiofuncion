let importe, moneda, valor

do {
    importe= parseFloat(prompt("Ingrese importe a convertir"))
  
  } while (isNaN(importe))

do {
    moneda= parseFloat(prompt("Ingrese 1.Dolar - 2.Euro - 3.Real"))
    if (moneda >= 1 && moneda <=3){
        break
    }else moneda=isNaN
}while (isNaN(moneda))

const calcular= (num1,num2) => num1 * num2

switch(moneda) {
    case 1:
        valor = 212
        alert (calcular(importe, valor))
        break
    case 2:
        valor = 131
        alert (calcular(importe, valor))
        break
    case 3 :
        valor = 25  
        alert (calcular(importe, valor))
        break
    default:
        aletr ("Operacion Fallida")
        break         
}
 





