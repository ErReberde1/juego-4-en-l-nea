

let tablero = [["00","01","02","03","04","05","06"],
                ["10","11","12","13","14","15","16"], 
                ["20","21","22","23","24","25","26"],
                ["30","31","32","33","34","35","36"],
                ["40","41","42","43","44","45","46"],
                ["50","51","52","53","54","55","56"]] 

let tablero1 = [["00","01","02","03","04","05","06"],
                ["10","11","12","13","14","15","16"], 
                ["Red","Red","Red","Blue","24","25","Red"],
                ["30","Red","Blue","Red","34","Red","36"],
                ["40","Blue","Red","Red","Red","45","46"],
                ["Blue","51","52","Red","Red","Red","56"]]                

export const comprobar =(tablero)=>{

    let resultado

    function iteracionDerechaIzquierda (fila, columna){
        let conteoRed = 0
        let conteoBlue = 0
        for (let i = 0; i<4; i++){
           if (tablero[fila][columna] == "Red"){
            conteoRed+=1
           }else if(tablero[fila][columna] == "Blue"){
            conteoBlue+=1
           }
           else { 
            conteoRed=0
           }
           columna -= 1
           fila-=1
        }

        if(conteoRed == 4) return "EL GANADOR ES EL PLAYER 1!!!!!!!!!!!!!!!!!!!!!!"

        if(conteoBlue == 4) return "EL GANADOR ES EL PLAYER 1!!!!!!!!!!!!!!!!!!!!!!"
    }
    
    function iteracion1 (numero1, numero2){

        for (let i = 0; i<3; i++){
            resultado = iteracionDerechaIzquierda(numero1, numero2)
            numero1-=1
            return resultado 
        }
            
        
        
    }
    //iteracionIzquierdaDerecha

    function iteracion2 (numero1, numero2){

        for (let i = 0; i<3; i++){
            resultado = iteracionIzquierdaDerecha(numero1, numero2)
            numero1-=1
            return resultado 
        }
        
    }

    function iteracionIzquierdaDerecha(fila, columna){
        let conteoRed = 0
        let conteoBlue = 0
        for (let i = 0; i<4; i++){
           if (tablero[fila][columna] == "Red"){
            conteoRed+=1
           }else if(tablero[fila][columna] == "Blue"){
            conteoBlue+=1
           }
           else { 
            conteoRed=0
           }
           columna += 1
           fila-=1
        }

        if(conteoRed == 4) return "EL GANADOR ES EL PLAYER 1!!!!!!!!!!!!!!!!!!!!!!"

        if(conteoBlue == 4) return "EL GANADOR ES EL PLAYER 1!!!!!!!!!!!!!!!!!!!!!!"
    }



    
    
    iteracion1(5,6)
    if(resultado !== undefined) return console.log(resultado)
    iteracion1(5,5)
    if(resultado !== undefined) return console.log(resultado)
    iteracion1(5,4)
    if(resultado !== undefined) return console.log(resultado)
    iteracion1(5,3)
    if(resultado !== undefined) return console.log(resultado)
    iteracion2(5,0)
    if(resultado !== undefined) return console.log(resultado)
    iteracion2(5,1)
    if(resultado !== undefined) return console.log(resultado)
    iteracion2(5,2)
    if(resultado !== undefined) return console.log(resultado) 
    iteracion2(5,3)
    if(resultado !== undefined) return console.log(resultado) 
        
}



