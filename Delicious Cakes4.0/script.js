function exibir_categoria(figure){
    let elementos = document.getElementsByClassName('box_produto');
    console.log(elementos);
    for(var i=0; i < elementos.length; i++){
        console.log(elementos[i].id);
        if(figure == elementos[i].id){
            elementos[i].style = "display:block";
        }
        else{
            elementos[i].style = "display:none";
        }
    }
}

let exibir_todos = () => {
    let elementos= document.getElementsByClassName('box_produto');
    console.log(elementos);
    for(var i=0; i < elementos.length; i++){
        elementos[i].style = "display:block";
    }
}

let destaque = (imagem) => {
console.log(imagem);
if(imagem.width > 98 && imagem.width < 180){
    imagem.width = imagem.width / 2;
}
else{
    imagem.width = imagem.width * 2;
}
}

let destaque1 = () => {
    if(imagem.width > 98 && imagem.width < 180){
        imagem.width = imagem.width / 2;
    }
    else{
        imagem.width = imagem.width * 2;
    }   
}