/*

  Con la emoción, ya estamos empezando a contar los días del calendario hasta
  el 25 de diciembre 📆.

  Para ayudar a esto, vamos a crear una función que pasándole una instancia 
  de Date nos diga el número de días que faltan.

  Veamos unos ejemplos:

  *const date1 = new Date('Dec 1, 2021')
  *daysToXmas(date1) // 24

  El resultado tiene que ser un número entero y, como ves, aunque falte un
  segundo hasta el siguiente día, se entiende que todavía falta un día.

  !¡Pero ojo! También hay que indicar si la fecha es del mismo día 
  !(devolveríamos 0) o si es una fecha futura (devolveríamos el número 
  !e días en negativo -):

  ?const date = new Date('Dec 25, 2021)
  ?daysToXmas(date) // 0

  Por cierto, la fecha de referencia para saber si es 25 de diciembre es 
  Dec 25, 2021.
*/

const acDay = new Date('Jan 1, 2022 00:00:01');
const daysToXmas = (date) => Math.ceil((new Date('Dec 25, 2021') - date) / 86_400_000);
console.log(daysToXmas(acDay));
export default daysToXmas;
