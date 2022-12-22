let numeroBolilleroContenedor=document.getElementById("bolillero-numero");
let array=[];
let array2=[];
let array3=[];
let playerContador=15;
let cpuContador=15;
let boton=document.getElementById("boton");
let terminoJuego=false;

// Boton que genera el numero aleatorio//
boton.onclick=()=>{
    
    generarNumeroAleatorio();
    pintarNumerosDeArrays();
    mostrarGanador();
    
    
}

function mostrarGanador(){
    if(playerContador==0){
        terminoJuego=true;
        numeroBolilleroContenedor.innerHTML="";
        numeroBolilleroContenedor.className="bolillero__ganador";
        let mensaje=document.createElement("p");
        mensaje.innerHTML="PLAYER WINS!!!";
        numeroBolilleroContenedor.append(mensaje);
        
    }else if(cpuContador==0){
        terminoJuego=true;
        numeroBolilleroContenedor.innerHTML="";
        numeroBolilleroContenedor.className="bolillero__ganador";
        let mensaje=document.createElement("p");
        mensaje.innerHTML="CPU WINS!!!";
        numeroBolilleroContenedor.append(mensaje);
        
    }
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
                playerContador-=1;
                console.log(playerContador);
                
                
                
            }
        })

        array3.forEach((number)=>{
            
            if(number.numero==numeroAleatorio){
                let numeroInsertado=document.getElementById(number.id);
                numeroInsertado.className="main__player__d-flex tachar"
                cpuContador-=1;
                
                
                
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
    if(terminoJuego==false){
        let contenedorNumeros=document.getElementById("colocar--numeros--generados");
        let numeroAColocar=document.createElement("div");
        numeroAColocar.className="main__player__d-flex main__player__margin--left";
        array.forEach((numero)=>{
        
        numeroAColocar.innerHTML=numero;
        contenedorNumeros.append(numeroAColocar);
    })
    }
    

    
}
generarNumerosJugadorYCpu(array2,"tachar-numeros-jugador-");
generarNumerosJugadorYCpu(array3,"tachar-numeros-cpu-");
pintarNumerosJugadorYCpu("contenedor-numeros",array2,"tachar-numeros-jugador-");
pintarNumerosJugadorYCpu("contenedor-cpu",array3,"tachar-numeros-cpu-");

array2.forEach((elemento)=>{
    console.log(elemento.id);
})