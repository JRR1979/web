function shopValue(){
    var x1, x2, x3, x4,
    valor1, valor2, valor3, valor4, total;

    x1=document.getElementById("item1").value;
    x2=document.getElementById("item2").value;
    x3=document.getElementById("item3").value;
    x4=document.getElementById("item4").value;

    if(x1!="0"){
        valor1=parseFloat(x1)*17000;
        }
        else{
        valor1=0;}
    
    if(x2!="0"){
        valor2=parseFloat(x2)*30000;
        }
        else{
        valor2=0;}

    if(x3!="0"){
        valor3=parseFloat(x3)*18000;
        }
        else{
        valor3=0;}

    if(x4!="0"){
        valor4=parseFloat(x4)*10000;
        }
        else{
        valor4=0;}
    
    total=valor1+valor2+valor3+valor4;
    
    document.getElementById("value").innerHTML="FACTURA DE VENTA\
                                            <br>************************************\
                                            <br>"+x1+" mug(s) por $"+valor1+" pesos\
                                            <br>"+x2+" camiseta(s) por $"+valor2+" pesos\
                                            <br>"+x3+" cuaderno(s) por $"+valor3+" pesos\
                                            <br>"+x4+" boton(es) por $"+valor4+" pesos\
                                            <br>************************************\
                                            <br>valor IVA:    $"+(total*0.19)+" pesos\
                                            <br>valor neto: $"+(total-(total*0.19))+" pesos\
                                            <br>valor total: $"+total+" pesos";
}