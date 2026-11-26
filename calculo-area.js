function alterarFigura() {
    let figura = document.getElementById("figura").value;

    if (figura === "circulo") {
        document.getElementById("labelBase").textContent = "Raio (cm):";
        document.getElementById("campoAltura").style.display = "none";
        document.getElementById("instrucao").textContent =
            "Informe o raio do círculo.";
    } else {
        document.getElementById("labelBase").textContent = "Base (cm):";
        document.getElementById("campoAltura").style.display = "block";
        document.getElementById("instrucao").textContent =
            "Informe a base e a altura.";
    }

    document.getElementById("base").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("resultado").textContent = "";
}

 function calcularArea() {

    let figura = document.getElementById("figura").value;

    // Lê os valores digitados
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    // cria variável area
    let area;

    if (figura === "circulo") {
        if (base <= 0) {
            document.getElementById("resultado").textContent =
                "Digite um raio válido!";
            return;
        }
        area = Math.PI * base * base;
    } else {
       if (figura === "quadrado") {
    if (base <= 0) {
        document.getElementById("resultado").textContent =
            "Digite um lado válido!";
        return;
    }
    area = base ** 2;
} else {
    if (base <= 0 || altura <= 0) {
        document.getElementById("resultado").textContent =
            "Digite uma base e uma altura válidas!";
        return;
    }
    }
  }
   document.getElementById("resultado").textContent = 
        "A área do " + figura + " é " + area.toFixed(2) + " cm²";
    }