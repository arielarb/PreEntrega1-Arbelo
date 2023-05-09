/* Mi simulador consiste en un turnero para negocios: una plataforma que empresas puedan contratar para generar turnos en diversos rubros: peluquería, restaurantes, salon de belleza, profesionales médicos, veterinarias, talleres mecánicos, y cualquier servicio que precise gestión de turnos.

En este ejemplo, mostraré la utilización del turnero para una peluqueria.*/

/* bienvenida
nombre y apellido let nombreUsuario = prompt("¿Cuál es tu nombre y apellido?");

function1:
que tipo de servicio - while isNaN /n

function2:
con quien cortarse 1 o 2 - switch dentro de while con functions 


2 function con for para incluir dentro del switch: 
que dia recordar dias de atencion, martes a sabados de 10 a 20 hs 
aca meter el condicional de suma de turnos de cada peluquero
que horario
forma de pago

function5: alerta de confirmación de turno con datos

(llamada a todas las funciones en un bucle while);
bienvenida
nombre y apellido 
function1
function2
function5 (declaracion aqui, o alert directo) */

const nombreNegocio = 'peluquería "Los Hermanos"';
const turnosJose = 10; // La cantidad de turnos por día de uno de los dos peluqueros
const turnosArmando = 10; // La cantidad de turnos por día de uno de los dos peluqueros
let servicio = "";

function tipoServicio(seleccion) {
  let seleccion = parseInt(
    prompt(
      "¿Qué servicio desea solicitar? \n1. Corte \n2. Barba \n3. Corte y Barba \n4. Salir"
    )
  );
  do {
    if (seleccion == 1) {
      seleccion = "corte";
    } else if (seleccion == 2) {
      seleccion = "barba";
    } else if (seleccion == 3) {
      seleccion = "corte y barba";
    } else if (seleccion == 4) {
      alert("Muchas gracias por ingresar a nuestro turnero");
      break;
    }
  } while (seleccion == "");
  {
    seleccion = parseInt(
      prompt(
        "¿Qué servicio desea solicitar? \n1. Corte \n2. Barba \n3. Corte y Barba \n4. Salir"
      )
    );
  }
}
/* case "1":
        servicio += "corte";
        break;
      case "2":
        servicio += "barba";
        break;
      case "3":

        servicio += "corte y barba";
        break;
      case "4":
        servicio += "teñido";
        break;
      default:
        alert("Ingrese una opción válida");
    }
    tipoServicio = prompt(
      "¿Qué servicio desea? Por favor ingresar un número valido: \n1. Corte \n2. Barba \n3. Corte y Barba \n4. Teñido \n5. Salir"
    );
  }
} */
function promptTurnero() {
  do {
    alert(`¡Bienvenido al sistema de turnos de ${nombreNegocio}`);
    let nombreUsuario = prompt("¿Cuál es tu nombre y apellido?");
    tipoServicio(seleccion);
    alert(
      `¡Listo! Ya tienes agendado tu turno en ${nombreNegocio}. A continuación te compartimos los detalles: \nNombre y Apellido: ${nombreUsuario} \nTipo de servicio solicitado: ${servicio} \nQuien te atenderá es: ${elegirProfesional}`
    );
  } while ("ESC");
  {
    alert("Muchas gracias por ingresar a nuestro turnero");
  }
}

promptTurnero();

/* function elegirProfesional() {} */
