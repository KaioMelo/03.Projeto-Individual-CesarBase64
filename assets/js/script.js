let radio = document.querySelectorAll(".radio");
let botao = document.querySelector("#botaoEnviar");
let msg = document.querySelector("#mensagem");
let ch = document.querySelector("#chave");
let result = document.querySelector("#resultado");

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

let incremento = document.querySelector(".incrementoCesar");
let selecaoCod = document.addEventListener("click", function () {
  let codigo = document.querySelector("#codigos").value;
  if (codigo == "cesar") {
    incremento.style.display = "block";
  } else {
    incremento.style.display = "none";
  }
});

radio[0].addEventListener("click", function () {
  if (radio[0].checked) {
    botao.innerHTML = `<span>Codificar</span>`;
  }
});

radio[1].addEventListener("click", function () {
  if (radio[1].checked) {
    botao.innerHTML = `<span>Decodificar</span>`;
  }
});