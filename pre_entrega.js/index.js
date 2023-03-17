//verificar antes de enviar en que lugar corresponde las nuevas variables de banco!! 

const bancos = [
    new tipoBanco('BNA', 1),
    new tipoBanco('Brubank', 2),
    new tipoBanco('Santander', 3),
    new tipoBanco('Macro', 4),
  ]
  
  let bancoDeseado = parseInt(prompt(
      'Escoge tu banco: 1.BNA - 2.Brubank - 3.Santander - 4.Macro'))
  // 1 - 2 - 3 - 4
  
  // variable para condicion de banco correcto
  let escogioBanco = false
  
  //variable que contiene informacion del banco deseado
  let banco
  while (escogioBanco === false) {
    banco = bancos.find((banco) => banco.id === bancoDeseado) // banco - undefined
    if (!banco)
      bancoDeseado = parseInt(
        prompt(
          'Escoge el numero de tu banco  1.BNA - 2.Brubank - 3.Santander - 4.Macro'
        )
      ) 

let banco = parseInt(prompt("Cual es su banco?.")) 
};

////////////////////HASTA ACA///////////////////////////

let monto = parseInt(prompt("Ingresa el monto a invertir."));
let meses = parseInt(prompt("Ingresar cantidad de meses a invertir."));

if (meses <= 12 && meses > 0){
    alert("El interés anual es de 60%");
    for (let i = 0; i <= meses; i++) {
        let interes12 = i * 0.05 * monto + monto;
        alert("Su capital en el mes número " + i + " es de " + interes12 + '.');
    }
} else if(meses <= 24 && meses > 12){
    alert("El interés anual es de 72%");
    for (let i = 0; i <= meses; i++) {
        let interes24 = i * 0.06 * monto + monto;
        alert("Su capital en el mes número " + i + " es de " + interes24 + '.');
    }
} else if(meses <= 36 && meses > 24){
    alert("El interés anual es de 84%");
    for (let i = 0; i <= meses; i++) {
        let interes36 = i * 0.07 * monto + monto;
        alert("Su capital en el mes número " + i + " es de " + interes36 + '.');
    }
} else if(meses < 1){
    alert('La cantidad de meses indicada es menor a la mínima permitida.')
} else if(meses > 36)

      {
    alert('La cantidad de meses indicada es mayor a la máxima permitida.')
}
