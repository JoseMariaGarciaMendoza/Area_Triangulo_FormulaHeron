let l1, l2, l3, a_result, p_result, s_result;

function GetL1() {
  l1 = document.getElementById("lado-1").value;
  l1 = parseFloat(l1);
}
function GetL2() {
  l2 = document.getElementById("lado-2").value;
  l2 = parseFloat(l2);
}

function GetL3() {
  l3 = document.getElementById("lado-3").value;
  l3 = parseFloat(l3);
}

function isTriangle()
{
    if(l1 + l2 > l3 && l2 + l3 > l1 && l1 + l3 > l2)
        return true;
    else
        return false;
}

function TypeTriangle() {
  if (l1 == l2 && l2 == l3) {
    return "Triángulo equilátero";
  } else if (l1 == l2 || l1 == l3 || l2 == l3) {
    return "Triángulo isósceles";
  } else {
    return "Triángulo escaleno";
  }
}

function calculator() {
  const parent = document.getElementById("container-response");
  parent.innerHTML = '';
  const h4_p_result = document.createElement("h4");
  const h4_s_result = document.createElement("h4");
  const h4_a_result = document.createElement("h4");
  const h4_type_triangle = document.createElement("h4");
  const h4_error = document.createElement("h4");

  if (!isTriangle()) {
    parent.innerHTML =
      "<h1> Con las medidas dadas no se puede generar el triangulo ";
  } else {
    p_result = l1 + l2 + l3;
    s_result = (l1 + l2 + l3) / 2;
    a_result = Math.sqrt(
    s_result * (s_result - l1) * (s_result - l2) * (s_result - l3)
    );
    // Operaciones necesarias

    h4_p_result.textContent = "El perimetro del triangulo es: " + p_result;

    h4_s_result.textContent = "El semiperimetro del triangulo es: " + s_result;

    h4_a_result.textContent = "El area del triangulo es: " + a_result;

    h4_type_triangle.textContent = "El triangulo es: " + TypeTriangle();
    // Creacion de objetos

    parent.append(h4_p_result, h4_s_result, h4_a_result, h4_type_triangle);
    // Agregando hijos a la etiqueta padre
  }
}
