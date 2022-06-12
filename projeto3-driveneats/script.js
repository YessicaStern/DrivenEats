
function addborda(elemento , selecao){
    const click=document.querySelector(`.${selecao} .borda`);
    if(click !==null){
         click.classList.remove("borda");
    }
    elemento.classList.add("borda");

    addicone(elemento, selecao);

} 


function addicone(elemento, selecao){

    const click=document.querySelector(`.${selecao} .verdinho`);
    const icone= elemento.querySelector(".icones");
    if(click !==null){
        click.classList.remove("verdinho");
   }
   icone.classList.add("verdinho");
}

function pedido(){
    finalizar = document.querySelector(".confirme");
    finalizar.innerHTML= "Fechar Pedido";
    finalizar.classList.add("fechar")
}





