//alert ("Tarea JS!!!!");

let m= prompt("Ingresa el numero de tu mes de nacimiento )");
let d= prompt("Ingresa tu día de nacimiento");

if ((m==12)&&(d>22||d<=31) || ((m==1)&&(d<=20))){
    console.log("Tu signo es Capricornio");
    alert("Capricornio");
} else if ((m==1)&&(d>21||d<=31) || ((m==2)&&(d<=19))){
    console.log("Tu signo es Acuario");
    alert("Acuario");
} else if ((m==2)&&(d>20||d<=29) || ((m==3)&&(d<=20))) {
    console.log("Tu signo es Piscis");
    alert("Piscis");
} else if ((m==3)&&(d>21||d<=31) || ((m==4)&&(d<=20))){
    console.log("Tu signo es Aries");
    alert("Aries");
} else if ((m==4)&&(d>21||d<=31) || ((m==5)&&(d<=20))){
    console.log("Tu signo es Tauro");
    alert("Tauro");
} else if ((m==5)&&(d>21||d<=31) || ((m==6)&&(d<=20))){
    console.log("Tu signo es Géminis");
    alert("Geminis");
} else if ((m==6)&&(d>22||d<=31) || ((m==7)&&(d<=22))){
    console.log("Tu signo es Cancer");
    alert("Cancer");
} else if ((m==7)&&(d>23||d<=31) || ((m==8)&&(d<=23))){
    console.log("Tu signo es Leo");
    alert("Leo");
} else if ((m==8)&&(d>24||d<=31) || ((m==9)&&(d<=22))){
    console.log("Tu signo es Virgo");
    alert("virgo");
} else if ((m==9)&&(d>23||d<=31) || ((m==10)&&(d<=22))){
    console.log("Tu signo es Libra");
    alert("Libra");
} else if ((m==10)&&(d>22||d<=31) || ((m==11)&&(d<=23))){
    console.log("Tu signo es Escorpio");
    alert("Escorpio");
} else if ((m==11)&&(d>23||d<=31) || ((m==12)&&(d<=21))){
    console.log("Tu signo es Sagitario");
    alert("Sagitario");
} else {
    console.log("Ingresaste un dato incorrecto");
    alert("Ingresaste un dato incorrecto");
}