let radio = document.querySelectorAll(".radio");
let botao = document.querySelector("#botaoEnviar");
let msg = document.querySelector("#mensagem");
let ch = document.querySelector("#chave");
let result = document.querySelector("#resultado");

// Configuração da Base64 e cifra de cesar
botao.addEventListener("click", function (event) {
  event.preventDefault();
  var codigo = document.querySelector("#codigos").value;
  if (codigo == "cesar" && radio[0].checked) {
    var valorMsg = msg.value.split("");
    var valorChave = parseInt(ch.value);
    result.value = codificarCesar(valorMsg, valorChave);
  } else if (codigo == "cesar" && radio[1].checked) {
    var valorMsg = msg.value.split("");
    var valorChave = parseInt(ch.value);
    result.value = decodificarCesar(valorMsg, valorChave);
  } else if (codigo == "base64" && radio[0].checked) {
    var valorMsg = msg.value;
    result.value = btoa(valorMsg);
  } else {
    var valorMsg = msg.value;
    result.value = atob(valorMsg);
  }
});

//codificador da cifra de cesar
function codificarCesar(msg, ch) {
  return msg
    .map((str) => {
      let entrada = str.charCodeAt();
      if (entrada >= 65 && entrada <= 90) {
        return String.fromCharCode(((entrada - 65 + ch) % 26) + 65);
      } else if (entrada >= 97 && entrada <= 122) {
        return String.fromCharCode(((entrada - 97 + ch) % 26) + 97);
      } else {
        return str;
      }
    })
    .join("");
}

//decodificador da cifra de cesar
function decodificarCesar(msg, ch) {
  return msg
    .map((str) => {
      let entrada = str.charCodeAt();
      if (entrada >= 65 && entrada <= 90) {
        if (entrada - 65 - chave < 0) {
          return String.fromCharCode(((entrada - 65 - ch + 26) % 26) + 65);
        } else {
          return String.fromCharCode(((entrada - 65 - ch) % 26) + 65);
        }
      } else if (entrada >= 97 && entrada <= 122) {
        if (entrada - 97 - chave < 0) {
          return String.fromCharCode(((entrada - 97 - ch + 26) % 26) + 97);
        } else {
          return String.fromCharCode(((entrada - 97 - ch) % 26) + 97);
        }
      } else {
        return str;
      }
    })
    .join("");
}

// display incremento de cifra de cesar
let incremento = document.querySelector(".incrementoCesar");
let selecaoCod = document.addEventListener("click", function () {
  let codigo = document.querySelector("#codigos").value;
  if (codigo == "cesar") {
    incremento.style.display = "block";
  } else {
    incremento.style.display = "none";
  }
});
