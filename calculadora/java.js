console.log(document);
//ID

var resultado_id = document.getElementById("resultado_id");

resultado_id.innerHTML = 10;

var numero1 = document.getElementById("num1");

numero1.value= 0;

var numero2 = document.getElementById("num2");

numero1.value= 0;
//mejor forma de hacerlo
//suma
const resultado_id_click = document.getElementById("resultado_id")
resultado_id_click.addEventListener("click", (Event)=> {
  resultado_id.innerHTML = parseInt(numero1.value) + parseInt(numero2.value);
});

//opcion 2 
//resta
function resta() {
    resultado_id.innerHTML = parseInt(numero1.value) - parseInt(numero2.value);
};

//Multiplicar
resultado_id_click.addEventListener("btn_multi", (Event)=> {
  resultado_id.innerHTML = parseInt(numero1.value) * parseInt(numero2.value);
});

//Multiplicar
resultado_id_click.addEventListener("btn_dividir", (Event)=> {
    resultado_id.innerHTML = parseInt(numero1.value) / parseInt(numero2.value);
  });
  
