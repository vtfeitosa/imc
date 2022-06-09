function calc(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let result = document.getElementById("media");

    // if (isNaN(peso)||isNaN(altura)){
    //     "Os valores inseridos não são válidos."
    // } else if {
        
    // }

    let  media = (peso / (altura * altura));

    if (media < 18.5){
        result.innerHTML = 'Magreza';

    }else if (18.5 < media < 24.9){
        result.innerHTML = 'Normal';

    }else if (25< media <29.9){
        result.innerHTML = 'Sobrepeso';

    }else if (30< media <34.5){
        result.innerHTML = 'Obesidade grau I';

    }else if (35< media <39.9){
        result.innerHTML = "Obesidade grau II";
    }else if (media > 40){
        result.innerHTML = "Obesidade grau III";
    }

    console.log(result.innerHTML);
}  