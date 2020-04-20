function suma()

{
    var num1=Number (document.getElementById('n1').value);
    var num2=Number (document.getElementById('n2').value);
    var num3=Number (document.getElementById('n3').value);
    var num4=Number (document.getElementById('n4').value);
    var num5=Number (document.getElementById('n5').value);
     

    var suma=num1+num2+num3+num4+num5;
    document.getElementById('res').value=suma;
    
     var iva=suma*0.19;
    document.getElementById('iva').value=iva;
    

  
    if(suma>100000){
        
        var descu=suma*0.10;
       document.getElementById('des').value=descu;
       
       }
    else{
       document.getElementById().value; }
    
   var c = Math.max(num1,num2);
   
document.getElementById('may').value=c;
}
