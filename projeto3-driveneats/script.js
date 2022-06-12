
function addborda(elemento , selecao){
    const click=document.querySelector(`.${selecao} .borda`);
    if(click !==null){
         click.classList.remove("borda");
    }
    elemento.classList.add("borda");

    addicone(elemento, selecao);
   if (selecao==="pratos" ){
    prato=elemento.querySelector("h2").innerHTML;
   } else if (selecao==="bebidas" ){ 
    bebida=elemento.querySelector("h2").innerHTML;
   }  else{
    sobremesa=elemento.querySelector("h2").innerHTML;
   }
   pedido();
} 

function addicone(elemento, selecao){

    const click=document.querySelector(`.${selecao} .verdinho`);
    const icone= elemento.querySelector(".icones");
    if(click !==null){
        click.classList.remove("verdinho");
   }
   icone.classList.add("verdinho");
}

let prato=null;
let bebida=null;
let sobremesa=null;

function pedido(){
   /* console.log(sobremesa);
    console.log(bebida);
    console.log(prato);*/
   if ( prato !== null && bebida !== null && sobremesa !== null){ 
    console.log("oi");
    const finalizar = document.querySelector(".confirme");
    finalizar.innerHTML= "Fechar Pedido";
    finalizar.classList.add("fechar");
    }
}


