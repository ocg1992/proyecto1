var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

document.write("Bienvenido a Seguros TK-U. Gracias"+ "<br>")
document.write(nombreCompleto+ "<br>")
var edad = 2020-anioNacimiento
document.write("de"+ "<br>");
document.write(edad+ "<br>");
document.write("años de edad. Por tu preferencia"+ "<br>");
document.write("Esta es tú cootización segun la información que nos brindastes"+ "<br>")
document.write("Recargo por edad"+ "<br>")
const precioBase = 250;
edad = 2020-anioNacimiento;


switch(edad) {
   case 0:
   case 1:
   case 2:
   case 3:
   case 4:
   case 5:
   case 6:
   case 7:
   case 8:
   case 9:
   case 10:
   case 11:
   case 12:
   case 13:
   case 14:
   case 15:
   case 16:
   case 17:
     document.write("Devido a su edad no se puede Asegurar")
     break; 
   case 18:
   case 19:
   case 20:
       document.write("NO se Le Aplican Recargos")
     break; 
   case 21:
   case 22:
   case 23:
   case 24:
       document.write(precioBase * 0.1)
     break; 
   case 25:
   case 26:
   case 27:
   case 28:
   case 29:
    document.write(precioBase * 0.2)
     break; 
   case 30:
   case 31:
   case 32:
   case 33:
   case 34:
   case 35:
   case 36:
   case 37:
   case 39:
     document.write(precioBase * 0.5)
     break; 
   case 40:
   case 41:
   case 42:
   case 43:
   case 44:
   case 45:
   case 46:
   case 47:
   case 48:
   case 49:
      document.write(precioBase * 0.8)
     break; 
   case 50:
   case 51:
   case 52:
   case 53:
   case 58:
   case 59:
   case 60:
   case 61:
   case 62:
   case 63:
   case 64: 
   case 65: 
    document.write(precioBase * 1.2)
     break;
   default:
    document.write("No se le puede asegurar")
     
    }

var mensaje =("Solo puede realizar los recargos")
document.write(mensaje+ "<br>")


comision = precioBase * 0.30;

// El siguiente es un comentario.
// Por favor no elimine los caracteres // que se encuentran al inicio.

// En la siguiente variable usted debe calcular los cargos correspondientes.
// Puede crear la cantidad de variables necesarias para calcular cada uno
// de los recargos que sean necesarios
recargos = 0;


totalPagar = precioBase + comision + recargos;
document.write(totalPagar);