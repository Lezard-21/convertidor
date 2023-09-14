
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
  const decimal = 35
  const binario = decimalABinario(decimal)
  console.log(`El valor decimal ${decimal} es equivalente a ${binario} en binario.`)

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
  
  const hexadecimalResultado = decimalAHexadecimal(decimal)
  console.log(`El valor decimal ${decimal} es equivalente a ${hexadecimalResultado} en hexadecimal.`)
 
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
  
  const octal = decimalAOctal(decimal)
  console.log(`El valor decimal ${decimal} es equivalente a ${octal} en octal.`)
  
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
  
  const hexadecimal = binarioAHexadecimal(binario)
  console.log(`El valor binario ${binario} es equivalente a ${hexadecimal} en hexadecimal.`)
  
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
  
   const decimalResultado = binarioADecimal(binario)
  console.log(`El valor binario ${binario} es equivalente a ${decimalResultado} en decimal.`)

 function binarioAOctal(){
       let decimal = 0
    const longitud = binario.length
  
    for (let i = 0; i < longitud; i++) {
      const bit = parseInt(binario.charAt(i))
      const posicion = longitud - i - 1
      decimal += bit * Math.pow(8, posicion)
    }
    
    return octal 
  }
  const octalResultado0 = binarioAOctal(binario)
  console.log(`El valor binario ${binario} es equivalente a ${octalResultado0} en octal.`)


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
  
  const hexadecimalResultado2 = hexadecimalADecimal(hexadecimal)
  console.log(`El valor hexadecimal ${hexadecimal} es equivalente a ${hexadecimalResultado2} en decimal.`)
  
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

const resultadoHexadecimal2 = hexadecimalABinario(hexadecimal);
console.log(`El valor hexadecimal ${hexadecimal} es equivalente a ${resultadoHexadecimal2} en binario.`);
 

  function hexadecimalAOctal(hexadecimal) {
    const decimal = hexadecimalADecimal(hexadecimal);
    const octal = decimalAOctal(decimal)
    return octal
  }
  const hexadecimalOctal = hexadecimalAOctal(hexadecimal)
  console.log(`El valor hexadecimal ${hexadecimal} es equivalente a ${hexadecimalOctal} en octal.`)

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
  
  const octalResultado = octalADecimal(octal)
  console.log(`El valor octal ${octal} es equivalente a ${octalResultado} en decimal.`)
  
function octalABinario(octal){
  const decimal = octalADecimal(octal)
  let binario = decimalABinario(decimal)
  return binario
}
const octalBin = octalABinario(octal)
  console.log(`El valor octal ${octal} es equivalente a ${octalBin} en binario.`)

function octalAHexadecimal(octal){
  const decimal = octalADecimal(octal)
  let hexadecimal = decimalAHexadecimal(decimal)
  return hexadecimal
}
const octalHexa = octalAHexadecimal(octal)
  console.log(`El valor octal ${octal} es equivalente a ${octalHexa} en hexadecimal.`)
