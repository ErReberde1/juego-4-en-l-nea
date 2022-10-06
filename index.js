import prompt from "prompt";
import {comprobar} from './comprobar.js'




/* 
let fila5 = ["00", "01", "02", "03", "04", "05", "06"]
let fila4 = ["10", "11", "12", "13", "14", "15", "16"]
let fila3 = ["20", "21", "22", "23", "24", "25", "26"]
let fila2 = ["30", "31", "32", "33", "34", "35", "36"]
let fila1 = ["40", "41", "42", "43", "44", "45", "46"]
let fila0 = ["50", "51", "52", "53", "54", "55", "56"] */

let tablero = [["00","01","02","03","04","05","06"],
                ["10","11","12","13","14","15","16"], 
                ["20","21","22","23","24","25","26"],
                ["30","31","32","33","34","35","36"],
                ["40","41","42","43","44","45","46"],
                ["50","51","52","53","54","55","56"]] 





console.table(tablero)



const iniciarjuego = async () => {

  prompt.start();

  //Identificador de usuarios. Vemos que los nombres sean válidos, es decir, que al menos tenga una letra.

  let player1= await prompt.get(["nombre_Player1"]);
  let player2= await prompt.get(["nombre_Player2"]);

  let regexp = /[a-z][A-z]/

  if(!regexp.test(player1.nombre_Player1)) {
    console.log(`tu nombre tiene que tener al menos un caracter ${player1.nombre_Player1}`)
    return iniciarjuego();
  }

  if(!regexp.test(player2.nombre_Player2)) {
    console.log(`tu nombre tiene que tener al menos un caracter ${player2.nombre_Player2}`)
    return iniciarjuego();
  }
  
  player1.fichas = 22
  
  player2.fichas = 22
  
  let turno = 0

  const comprobarHorizontal =()=>{

    for(let i = 0; i < tablero.length; i++){
      let recuentoRed= 0
      let recuentoBlue=0
      
      for(let j=0; j < tablero[i].length+1; j++){
        
        if (tablero[i][j] == "Red"){
          recuentoRed+=1
          recuentoBlue= 0
        } else if( tablero[i][j]=="Blue"){
          
          recuentoRed = 0
          recuentoBlue += 1
          
        } else {
          recuentoRed = 0
          recuentoBlue= 0
        }
        
        
        if (recuentoRed == 4) {
          console.log("EL GANADOR ES EL PLAYER 1!!!!!!!!!!!!!!!!!!!!!!")
          break
        }
       
        if (recuentoBlue == 4){
          console.log("EL GANADOR ES EL PLAYER 2!!!!!!!!!!!!!!!!!!!!!!")
          break
        }
      }
      continue
    }
  }

  const comprobarVertical =()=>{
    for(let i = 0; i < tablero.length+1; i++){
      let recuentoRed= 0
      let recuentoBlue=0
      
      for(let j=0; j < 6; j++){
        
        if (tablero[j][i] == "Red"){
          recuentoRed+=1
          recuentoBlue= 0
        } else if( tablero[j][i]=="Blue"){
          
          recuentoRed = 0
          recuentoBlue += 1
          
        } else {
          recuentoRed = 0
          recuentoBlue= 0
        }
        
        
        if (recuentoRed == 4) {
          console.log("EL GANADOR ES EL PLAYER 1!!!!!!!!!!!!!!!!!!!!!!")
          break
        }
       
        if (recuentoBlue == 4){
          console.log("EL GANADOR ES EL PLAYER 2!!!!!!!!!!!!!!!!!!!!!!")
          break
        }
      }
      continue
    }
  }

  const partida = async()=>{
    while(player1.fichas > 0 && player2.fichas>0){
      if (turno == 0){
        const columna = await prompt.get(["Dime_columna"])

        /* let regexp = /[a-z][A-z]/

        if (regexp.test(columna.Dime_columna))  {
          console.log("Tienen que ser números no letras")
          continue
        } */

        if ( Number(columna.Dime_columna) < 0 || columna.Dime_columna == "" || Number(columna.Dime_columna) > 7 ) { 
          console.log("Tiene que ser un número válido. No puede ser menor a 0, no puede ser mayor o igual a 6 y no puede ser un caracter vacío")
          continue
        }
       
        for (let fila = 0; fila < 6; fila++){

          
          if (tablero[fila][columna.Dime_columna] !== "Red" && tablero[fila][columna.Dime_columna] !== "Blue"){
              
               if(fila == 5) {
                tablero[fila][columna.Dime_columna] = "Red"
                console.table(tablero)
                turno = 1
                comprobarHorizontal()
                comprobarVertical()
                if(comprobar(tablero) != undefined) return console.log(comprobar(tablero))
                console.log("Ahora es turno del player 2 "+ "fichas: " +player1.fichas)
                player1.fichas-=1
                break
                }
          } else {
            if (fila== 0){
              console.log("la columna ya está completa, prueba con otra columna =)")
              break
            }
              tablero[fila-1][columna.Dime_columna] = "Red"
              console.log(tablero[fila-1][columna.Dime_columna])
              console.table(tablero)
              turno = 1
              comprobarHorizontal()
              comprobarVertical()
              if(comprobar(tablero) != undefined) return console.log(comprobar(tablero))
              console.log("Ahora es turno del player 2 " + "fichas: "+ player2.fichas)
              player1.fichas-=1
              break
            }

          
          
        } if(turno == 1){
          /* let regexp = /[a-z][A-z]/
          if (regexp.test(columna.Dime_columna)) console.log("Tienen que ser números no letras") */

          const columna = await prompt.get(["Dime_columna"])

          

        
        if ( Number(columna.Dime_columna) < 0 || columna.Dime_columna == "" || Number(columna.Dime_columna) > 7) { 
          console.log("Tiene que ser un número válido. No puede ser menor a 0, no puede ser mayor o igual a 6 y no puede ser un caracter vacío")
          continue
        }
       
        for (let fila = 0; fila < 6; fila++){

          if (tablero[fila][columna.Dime_columna] !== "Red" && tablero[fila][columna.Dime_columna] !== "Blue"){
               if(fila == 5) {
                tablero[fila][columna.Dime_columna] = "Blue"
                console.table(tablero)
                turno = 0
                comprobarHorizontal()
                comprobarVertical()
                if(comprobar(tablero) != undefined) return console.log(comprobar(tablero))

                console.log("Ahora es turno del player 1 " + "fichas: "+ player1.fichas)
                player2.fichas-=1
                break
                }
          } else {
              if (fila== 0){

                console.log("la columna ya está completa, prueba con otra columna =)")
                continue
              }
              tablero[fila-1][columna.Dime_columna] = "Blue"
              console.log(tablero[fila-1][columna.Dime_columna])
              console.table(tablero)
              turno = 0
              comprobarHorizontal()
              comprobarVertical()
              if(comprobar(tablero) != undefined) return console.log(comprobar(tablero))
              console.log("Ahora es turno del player 1 " + "fichas: "+ player1.fichas)
              player2.fichas-=1
              break
            }
        }
      }
    }
  }

  
  
};
partida()
}



iniciarjuego()