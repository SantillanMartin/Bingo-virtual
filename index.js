/*

let contenedorContador=document.getElementById("contenedor-contador");

let dateTime= new Date();
let time = dateTime.toLocaleTimeString();


function cuentaRegresiva(){
    contenedorContador.innerHTML="";
    contador.innerHTML=time;
    contenedorContador.append(contador);
      
}

boton.onclick=()=>{
    
    setInterval(cuentaRegresiva(),1000);
}



let contador=document.getElementById("contador-resta");
let boton=document.getElementById("boton");


// program to display time every 5 seconds

function showTime() {
    
    
    // return new date and time
    let dateTime= new Date();

    // return the time
    let time = dateTime.toLocaleTimeString();
    contador.innerHTML=time;
    
    
        timer=setInterval(()=>{
            if(numero>=0){
                contador.innerHTML=numero;
            numero--;
            }
            else{
                contador.innerHTML="se acabo el tiempo...";
                clearInterval(timer);
                numero=5;
            }
            
        },1000);
    }
    
    
        //contador.innerHTML="Se acabo el tiempo...";
        let numero=0;
        function mostrarTiempo(){
            timer=setInterval(()=>{
                
                contador.innerHTML=numero;
                numero++;  
            },1000);
        }
    
    function mostrarAviso(avisoGenerico){
        let contenedorContador=document.getElementById("contenedor-contador");
        let aviso=document.createElement("p");
        aviso.innerHTML=`Has estado durante ${avisoGenerico} segundos.`;
        contenedorContador.append(aviso);
        
    }
    let contenedorContador=document.getElementById("contenedor-contador");
    let aviso=document.createElement("p");
    aviso.innerHTML="bla";
    
    window.onload(mostrarTiempo());  
    
    
    





boton.onclick=()=>{
    showTime();
}
*/


// VARIABLES GLOBALES ://


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
    
    array.push(numeroAleatorio);
    numeroBolilleroContenedor.innerHTML="";
    let numeroSacado=document.createElement("p");
    numeroSacado.className="numero__sacado"
    numeroSacado.innerHTML=numeroAleatorio;

    numeroBolilleroContenedor.append(numeroSacado);
    }
}






function generarNumerosJugadorYCpu(arrayGenerico){
    let suma=0;
    for(let i=15;i>0;i--){
        let numeroAleatorio=Math.floor(Math.random() * 90);
        let verificar=arrayGenerico.some(numero=>numero==numeroAleatorio);
        while(verificar){
            numeroAleatorio=Math.floor(Math.random() * 90);
            verificar=arrayGenerico.some(numero=>numero==numeroAleatorio);
    }
    let objeto={
        numero:numeroAleatorio,
        id:`numero-tachar-${suma+=1}`
    }
    arrayGenerico.push(objeto);
    }
    console.log(arrayGenerico);
}

function pintarNumerosJugadorYCpu(idContenedor,arrayGenerico){
    let contenedorNumeros=document.getElementById(idContenedor)
    let sum=0;
    arrayGenerico.forEach((numero)=>{
        
        let numeroInsertado=document.createElement("div");
        numeroInsertado.className="main__player__d-flex";
        numeroInsertado.innerHTML=numero.numero;
        numeroInsertado.id=`numero-tachar-${sum+=1}`;
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

generarNumerosJugadorYCpu(array2);
generarNumerosJugadorYCpu(array3);
pintarNumerosJugadorYCpu("contenedor-numeros",array2);
//pintarNumerosJugadorYCpu("contenedor-cpu",array3);

array2.forEach((elemento)=>{
    console.log(elemento.id);
})