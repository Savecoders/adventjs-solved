function compile(code) {
  const operador = {
    "+": 1,
    "-": -1,
    "?": 0,
    "¿": 0,
    "%": 0,
    "<": 0,
  };

  let result = 0,
    retorno = null,
    IF = 0;
  for (let i = 0; i < code.length; i++) {
    IF = (code[i] == "¿") + (result <= 0) > 1;
    i = i + code.indexOf("?") * IF - i * IF;
    if (code[i] == "%") retorno = i + 1;
    if (code[i] == "<") {
      retorno ||= i;
      i = retorno;
      retorno = null;
    }
    operador["*"] = result;
    result += operador[code.at(i)];
  }
  return result;
}
