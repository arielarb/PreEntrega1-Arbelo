/*  Gestión de Vacaciones: 
Mi simulador consiste en una plataforma para gestionar las vacaciones de empleados en una empresa. Parte desde una base de X cantidad de días de vacaciones y el usuario va registrando en el sistema los días que desea solicitar, arrojando los días que solicitó, los días acumulados y los restantes. A medida que avance en el curso, iré incorporando otras funcionalidades al sistema. 
*/

const diasVacaciones2023 = 21;
let diasVacacionesUsuario = 0;
let sumaDiasVacaciones = 0;
let vacacionesRestantes = 0;
let nombreEmpleado = prompt("¿Cuál es tu nombre?");
let validado = "";

function validaDato(numero) {
  if (numero != isNaN(numero)) {
    return true;
  } else {
    return false;
  }
}

for (let i = 1; i <= 21; i++) {
  diasVacacionesUsuario = parseInt(
    prompt(
      "¿Cuántos días de vacaciones te quieres tomar? Recuerda que cuentas con 21 días en 2023."
    )
  );
  let validado = validaDato(diasVacacionesUsuario);
  if (validado) {
    sumaDiasVacaciones += diasVacacionesUsuario;
    vacacionesRestantes = diasVacaciones2023 - sumaDiasVacaciones;
    if (sumaDiasVacaciones <= diasVacaciones2023) {
      alert(
        `Muchas gracias ${nombreEmpleado}, hemos registrado el goce de ${diasVacacionesUsuario} días, ¡que los disfrutes! Hasta el momento, cuentas con ${sumaDiasVacaciones} días de vacaciones solicitados y ${vacacionesRestantes} días como saldo a favor.`
      );
      /*       diasVacacionesUsuario = parseInt(
        prompt(
          "¿Cuántos días de vacaciones te quieres tomar? Recuerda que cuentas con 21 días en 2023."
        )
      ); */
    } else {
      alert("Por favor, ingresar un valor numérico");
      diasVacacionesUsuario = parseInt(
        prompt(
          "¿Cuántos días de vacaciones te quieres tomar? Recuerda que cuentas con 21 días en 2023."
        )
      );
    }
  }
}

/* 

  while (isNaN(diasVacacionesUsuario)) {
  }
  sumaDiasVacaciones += diasVacacionesUsuario;
  vacacionesRestantes = diasVacaciones2023 - sumaDiasVacaciones;
  while (sumaDiasVacaciones <= diasVacaciones2023) {
    alert(
      `Muchas gracias ${nombreEmpleado}, hemos registrado el goce de ${diasVacacionesUsuario} días, ¡que los disfrutes! Hasta el momento, cuentas con ${sumaDiasVacaciones} días de vacaciones solicitados y ${vacacionesRestantes} días como saldo a favor.`
    );
    diasVacacionesUsuario = parseInt(
      prompt(
        "¿Cuántos días de vacaciones te quieres tomar? Recuerda que cuentas con 21 días en 2023."
      )
    );
    while (isNaN(diasVacacionesUsuario)) {
      alert("Por favor, ingresar un valor numérico");
      diasVacacionesUsuario = parseInt(
        prompt(
          "¿Cuántos días de vacaciones te quieres tomar? Recuerda que cuentas con 21 días en 2023."
        )
      );
    }
    sumaDiasVacaciones += diasVacacionesUsuario;
    vacacionesRestantes = diasVacaciones2023 - sumaDiasVacaciones;
  }
  alert("No cuentas con días de vacaciones hábiles.");
  break;
}
 */
