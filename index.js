
/* Decimal */
function decimalABinario(decimal) {
  if (decimal === 0) {
    return '0'
  }

  let binario = ''
  while (decimal > 0) {
    const cociente = Math.floor(decimal / 2)
    const residuo = decimal % 2

    binario = residuo.toString() + binario
    decimal = cociente
  }

  return binario
}

function decimalAHexadecimal(decimal) {
  if (decimal === 0) {
    return '0'
  }

  let hexadecimal = ''
  const digitosHexadecimales = '0123456789ABCDEF'

  while (decimal > 0) {
    const residuo = decimal % 16
    hexadecimal = digitosHexadecimales[residuo] + hexadecimal
    decimal = Math.floor(decimal / 16)
  }
  return hexadecimal
}

function decimalAOctal(decimal) {
  if (decimal === 0) {
    return '0'
  }

  let octal = ''

  while (decimal > 0) {
    const residuo = decimal % 8
    octal = residuo + octal
    decimal = Math.floor(decimal / 8)
  }

  return octal
}

/* Binario */
function binarioAHexadecimal(binario) {
  while (binario.length % 4 !== 0) {
    binario = '0' + binario
  }

  const binarioHexMap = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'A',
    '1011': 'B',
    '1100': 'C',
    '1101': 'D',
    '1110': 'E',
    '1111': 'F',
  }

  let resultadoHexadecimal = ''

  //divide en 4 bits
  for (let i = 0; i < binario.length; i += 4) {
    const grupoBinario = binario.slice(i, i + 4)
    resultadoHexadecimal += binarioHexMap[grupoBinario]
  }

  return resultadoHexadecimal
}

function binarioADecimal(binario) {
  let decimal = 0
  const longitud = binario.length

  for (let i = 0; i < longitud; i++) {
    const bit = parseInt(binario.charAt(i))
    const posicion = longitud - i - 1
    decimal += bit * Math.pow(2, posicion)
  }

  return decimal
}

//  const decimalResultado = binarioADecimal(binario)
// console.log(`El valor binario ${binario} es equivalente a ${decimalResultado} en decimal.`)

function binarioAOctal(binario) {
  let octal = 0;
  const longitud = binario.length;

  for (let i = 0; i < longitud; i++) {
    const bit = parseInt(binario.charAt(i));
    const posicion = longitud - i - 1;
    octal += bit * Math.pow(2, posicion);
  }

  return octal.toString(8);
}

/**Hecadecimal */
function hexadecimalADecimal(hexadecimal) {
  const digitosHexadecimales = '0123456789ABCDEF'
  let decimal = 0

  hexadecimal = hexadecimal.toUpperCase()

  for (let i = 0; i < hexadecimal.length; i++) {
    const digitoHexadecimal = hexadecimal[i]
    const valorDecimal = digitosHexadecimales.indexOf(digitoHexadecimal)

    if (valorDecimal === -1) {
      return null
    }

    const potencia = hexadecimal.length - i - 1
    decimal += valorDecimal * Math.pow(16, potencia)
  }

  return decimal
}

function hexadecimalABinario(hexadecimal) {
  const digitosHexadecimales = "0123456789ABCDEF";
  let binario = "";

  hexadecimal = hexadecimal.toUpperCase();

  for (let i = 0; i < hexadecimal.length; i++) {
    const digitoHexadecimal = hexadecimal[i];
    const valorDecimal = digitosHexadecimales.indexOf(digitoHexadecimal);

    if (valorDecimal === -1) {
      throw new Error("Carácter hexadecimal no válido: " + digitoHexadecimal);
    }

    const binarioDe4Bits = valorDecimal.toString(2).padStart(4, "0");

    binario += binarioDe4Bits;
  }

  return binario;
}

function hexadecimalAOctal(hexadecimal) {
  const decimal = hexadecimalADecimal(hexadecimal);
  const octal = decimalAOctal(decimal)
  return octal
}

/**Octa */
function octalADecimal(octal) {
  const longitud = octal.length
  let decimal = 0

  for (let i = 0; i < longitud; i++) {
    const digitoOctal = parseInt(octal.charAt(i))
    decimal += digitoOctal * Math.pow(8, longitud - i - 1)
  }

  return decimal;
}

function octalABinario(octal) {
  const decimal = octalADecimal(octal)
  let binario = decimalABinario(decimal)
  return binario
}

function octalAHexadecimal(octal) {
  const decimal = octalADecimal(octal)
  let hexadecimal = decimalAHexadecimal(decimal)
  return hexadecimal
}

const loginform = document.getElementById("formulario")
loginform.addEventListener('submit', event => {
  event.preventDefault()
  const resultadoConversion = document.getElementById("drag")
  let base = document.getElementById("base").value
  let num = document.getElementById("destino").value
  let res = document.getElementById("numero_convertir").value

  if (base == "decimal") {
    switch (num) {
      case "hexadecimal": resultadoConversion.innerHTML = decimalAHexadecimal(res)
        break;
      case "binario": resultadoConversion.innerHTML = decimalABinario(res)
        break;
      case "octal": resultadoConversion.innerHTML = decimalAOctal(res)
        break;
      default: resultadoConversion.innerHTML = "Error"
        break;
    }
  }

  if (base == "hexadecimal") {
    switch (num) {
      case "decimal": resultadoConversion.innerHTML = hexadecimalADecimal(res)
        break;
      case "binario": resultadoConversion.innerHTML = hexadecimalABinario(res)
        break;
      case "octal": resultadoConversion.innerHTML = hexadecimalAOctal(res)
        break;
      default: resultadoConversion.innerHTML = "Error"
        break;
    }
  }

  if (base == "binario") {
    switch (num) {
      case "hexadecimal": resultadoConversion.innerHTML = binarioAHexadecimal(res)
        break;
      case "decimal": resultadoConversion.innerHTML = binarioADecimal(res)
        break;
      case "octal": resultadoConversion.innerHTML = binarioAOctal(res)
        break;
      default: resultadoConversion.innerHTML = "Error"
        break;
    }
  }

  if (base == "octal") {
    switch (num) {
      case "hexadecimal": resultadoConversion.innerHTML = octalAHexadecimal(res)
        break;
      case "decimal": resultadoConversion.innerHTML = octalADecimal(res)
        break;
      case "binario": resultadoConversion.innerHTML = octalABinario(res)
        break;
      default: resultadoConversion.innerHTML = "Error"
        break;
    }
  }
  if (base == num) {
    resultadoConversion.innerHTML = res;
  }
})

function sumaBinaria(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';

  // Recorrer ambas cadenas de derecha a izquierda
  while (i >= 0 || j >= 0) {
    // Sumar los bits actuales y el acarreo
    let sum = carry;
    if (i >= 0) {
      sum += a[i--] - '0';
    }
    if (j >= 0) {
      sum += b[j--] - '0';
    }

    // Añadir el resultado a la cadena de resultado
    result = (sum % 2) + result;

    // Actualizar el acarreo
    carry = Math.floor(sum / 2);
  }

  // Añadir el acarreo restante si existe
  if (carry != 0) {
    result = carry + result;
  }

  return result;
}

function complemeto1(binario) {
  binario = binario.replace(/0/g, 'x') 
  binario = binario.replace(/1/g, '0') 
  binario = binario.replace(/x/g, '1') 
  console.log(binario)
  return binario
}

function complemeto2(binario) {
  console.log(sumaBinaria(binario, "1"))
  return sumaBinaria(binario, "1")
}

function restaBinaria(a, b, comp) {
  a = '0' + a
  b = '0' + b
  let i = a.length - 1;
  let j = b.length - 1;
  let borrow = 0;
  let result = '';
  let isNegative = false;

  // Recorrer ambas cadenas de derecha a izquierda
  while (i >= 0) {
    let aBit = i < a.length ? parseInt(a[i]) : 0;
    let bBit = j >= 0 ? parseInt(b[j]) : 0;

    

    // Si hay un préstamo, reducir el bit de 'a'
    if (borrow) {
      if (aBit >= 1) {
        aBit -= borrow;
        borrow = 0;
      } else {
        aBit = 1;
        borrow = 1;
      }
    }

    // Si el bit actual de 'b' es mayor que el bit de 'a', tomar prestado
    if (bBit > aBit) {
      aBit += 2;
      borrow = 1;
      isNegative = true;
    }

    result = (aBit - bBit) + result;
    i--;
    j--;
  }

  // Eliminar los ceros a la izquierda
  result = result.replace(/^0+/, '');

  console.log(result)
  if (isNegative) {
    result = '1' + result
  }

  if (comp == "complemento1") {
    result = complemeto1(result)
  }
  if (comp == "complemento2") {
    result = complemeto2(complemeto1(result))
  }

  return result;
}



const form2 = document.getElementById('formulario2')
const resultado = document.getElementById('resultadoSuma')
let operacion = document.getElementById('operacion')
let complemento = document.getElementById('complemento')
let numero1 = document.getElementById('numero1')
let numero2 = document.getElementById('numero2')
let boton = document.getElementById('sumar')

operacion.addEventListener('change', (e) => {
  if (e.target.value == "suma") {
    complemento.disabled = true
    boton.value = "Sumar"
  }
  if (e.target.value == "resta") {
    complemento.disabled = false
    boton.value = "Restar"
  }
})


form2.addEventListener('submit', (e) => {
  e.preventDefault()

  if (operacion.value == "suma") {
    resultado.innerHTML = sumaBinaria(numero1.value, numero2.value)
  }

  if (operacion.value == "resta") {
    switch (complemento.value) {
      case "Complemento1":resultado.innerHTML = restaBinaria(numero1.value, numero2.value, "complemento1")
        break;
      case "Complemento2":resultado.innerHTML = restaBinaria(numero1.value, numero2.value, "complemento2")
      break;
    
      default:resultado.innerHTML = restaBinaria(numero1.value, numero2.value)
        break;
    }
  }

});