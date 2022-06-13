let painel =document.querySelector(".painel");
painel.classList.add("escondido");


function addborda(elemento , selecao){
    const click=document.querySelector(`.${selecao} .borda`);
    if(click !==null){
         click.classList.remove("borda");
    }
    elemento.classList.add("borda");

    addicone(elemento, selecao);
    if (selecao==="pratos" ){
        prato=elemento.querySelector("h2").innerHTML;
       /* let preco1=elemento.querySelector("h4").innerHTML;*/
       } else if (selecao==="bebidas" ){ 
        bebida=elemento.querySelector("h2").innerHTML;
       /* let preco2=elemento.querySelector("h4".innerHTML)*/
       }  else{
        sobremesa=elemento.querySelector("h2").innerHTML;
        /*let preco3=elemento.querySelector("h4").innerHTML;*/
       }
       pedido();
      /* console.log( preco1 + preco2 + preco3);*/
} 

function addicone(elemento, selecao){

    const click=document.querySelector(`.${selecao} .verdinho`); 
    const icone= elemento.querySelector(".icones");
    if(click !==null){
        click.classList.remove("verdinho");
   }
   icone.classList.add("verdinho");
}/*
let preco1=null;
let preco2=null;
let preco3=null;*/
let prato=null;
let bebida=null;
let sobremesa=null;

function pedido(){
    console.log(sobremesa);
    console.log(bebida);
    console.log(prato);
   if ( prato !== null && bebida !== null && sobremesa !== null){ 
    const finalizar = document.querySelector(".confirme");
    finalizar.innerHTML= "Fechar Pedido";
    finalizar.classList.add("fechar");
    }
    
}


let final= prato + bebida + sobremesa;
console.log(final);

function finalizarpedido(elemento){
    if ( prato !== null && bebida !== null && sobremesa !== null){
    
   /* let body2=document.querySelector(".bodyalternativo");
    body2.classList.add("fundo");
    document.querySelector(".corpo").classList.add("fixo");*/
    

    let final= prato + bebida + sobremesa;
    console.log(final);
    
    
    painel.classList.remove("escondido"); 
    
    
    let linkwpp =document.querySelector(".botao1");

    


    
    }
}
