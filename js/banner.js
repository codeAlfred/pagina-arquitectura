window.addEventListener('DOMContentLoaded',function(){
    
    
    var imagenes=[];
    
    imagenes[0]='img/banner2.jpeg';
    imagenes[1]='img/banner3.jpeg';
    imagenes[2]='img/banner4.jpeg';
    imagenes[3]='img/banner1.jpeg';
    
     var indice =0;
    
 function inicializacion(){   
   var cambioImg=document.getElementById('cambioImg');
     
//    document.cambioImg.src=imagenes[indice];
     
    if(indice<3){
       indice++;
    }else {
        indice=0;
    }
    cambioImg.src=imagenes[indice];
}
    
setInterval(inicializacion,3000);     
    
    
    
});





























