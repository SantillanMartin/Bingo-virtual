let numeroBolilleroContenedor=document.getElementById("bolillero-numero");
let array=[];
let array2=[];
let array3=[];
let arrayIdsPlayer=["numero--tachado-1","numero--tachado-2","numero--tachado-3","numero--tachado-4","numero--tachado-5","numero--tachado-6","numero--tachado-7","numero--tachado-8","numero--tachado-9",
"numero--tachado-10","numero--tachado-11","numero--tachado-12","numero--tachado-13","numero--tachado-14","numero--tachado-15"];
let boton=document.getElementById("boton");
let terminoJuego=false;

// Boton que genera el numero aleatorio//
boton.onclick=()=>{
    
    generarNumeroAleatorio();
    pintarNumerosDeArrays();
    
}




function generarNumeroAleatorio(){
    if(terminoJuego==false){
        let numeroAleatorio=Math.floor(Math.random() * 90);
        let verificar=array.some(numero=>numero==numeroAleatorio);
        
        while(verificar){
            numeroAleatorio=Math.floor(Math.random() * 90);
            verificar=array.some(numero=>numero==numeroAleatorio);
    }

        //let verificarSiSalio=array2.some(elemento=>elemento.numero==numeroAleatorio);
        array2.forEach((number)=>{
            
            if(number.numero==numeroAleatorio){
                let numeroInsertado=document.getElementById(number.id);
                numeroInsertado.className="main__player__d-flex tachar"
                
                
                
                
            }
        })

        array3.forEach((number)=>{
            
            if(number.numero==numeroAleatorio){
                let numeroInsertado=document.getElementById(number.id);
                numeroInsertado.className="main__player__d-flex tachar"
                
                
                
                
            }
        })

    
    array.push(numeroAleatorio);
    numeroBolilleroContenedor.innerHTML="";
    let numeroSacado=document.createElement("p");
    numeroSacado.className="numero__sacado"
    numeroSacado.innerHTML=numeroAleatorio;

    numeroBolilleroContenedor.append(numeroSacado);
    }
}






function generarNumerosJugadorYCpu(arrayGenerico,idGenerico){
    let suma=0;
    for(let i=15;i>0;i--){
        let numeroAleatorio=Math.floor(Math.random() * 90);
        let verificar=arrayGenerico.some(numero=>numero.numero==numeroAleatorio);
        while(verificar){
            numeroAleatorio=Math.floor(Math.random() * 90);
            verificar=arrayGenerico.some(numero=>numero.numero==numeroAleatorio);
    }
    let objeto={
        numero:numeroAleatorio,
        id:idGenerico+(suma+=1)
    }
    arrayGenerico.push(objeto);
    }
    console.log(arrayGenerico);
}

function pintarNumerosJugadorYCpu(idContenedor,arrayGenerico,idGenerico){
    let contenedorNumeros=document.getElementById(idContenedor)
    let sum=0;
    arrayGenerico.forEach((numero)=>{
        
        let numeroInsertado=document.createElement("div");
        numeroInsertado.className="main__player__d-flex";
        numeroInsertado.innerHTML=numero.numero;
        numeroInsertado.id=idGenerico+(sum+=1);
        contenedorNumeros.append(numeroInsertado);
    })
}


function pintarNumerosDeArrays(){
    let contenedorNumeros=document.getElementById("colocar--numeros--generados");
    let numeroAColocar=document.createElement("div");
    numeroAColocar.className="main__player__d-flex main__player__margin--left";
    array.forEach((numero)=>{
        
        numeroAColocar.innerHTML=numero;
        contenedorNumeros.append(numeroAColocar);
    })

    
}
generarNumerosJugadorYCpu(array2,"tachar-numeros-jugador-");
generarNumerosJugadorYCpu(array3,"tachar-numeros-cpu-");
pintarNumerosJugadorYCpu("contenedor-numeros",array2,"tachar-numeros-jugador-");
pintarNumerosJugadorYCpu("contenedor-cpu",array3,"tachar-numeros-cpu-");

array2.forEach((elemento)=>{
    console.log(elemento.id);
})