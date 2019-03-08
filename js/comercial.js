window.addEventListener('DOMContentLoaded', function(){
    
    var imagenes=[];
    
    imagenes[0]='img/proyecto2.jpeg';
    imagenes[1]='img/proyecto3.jpeg';
    imagenes[2]='img/proyecto4.jpeg';
    imagenes[3]='img/proyecto1.jpeg';
    
    var indice=0;
    
    function llamarImagen(){
        
        var elementoImg1=document.getElementById('comercial1');
        var elementoImg2=document.getElementById('comercial2');
        var elementoImg3=document.getElementById('comercial3');
        
        elementoImg1.src=imagenes[indice];
        elementoImg2.src=imagenes[indice];
        elementoImg3.src=imagenes[indice];
        
        if(indice<3){
            indice++;
        }else{
            indice=0;
        }
        
        
    }
    
    setInterval(llamarImagen,3000);
    
    
    
    
  
});











