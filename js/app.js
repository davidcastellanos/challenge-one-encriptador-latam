/*CLEAR TEXT AREA */
const clearValue = () => {
    let inputValue = document.getElementById("mensaje");
    inputValue.value = "";    
}

const copyText = () => {
    let btn = document.getElementById('btn-copy');
    let clipboard = new ClipboardJS(btn);

}



/* ENCRYPTION SECTION*/
const encrypt = (input) => {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        result += input[i] == "a" || input[i] == "á" ? "ai" : input[i] == "e" ||
        input[i] == "é"? "enter" : input[i] == "i" || input[i] == "í" ? "imes" : 
        input[i] == "o" || input[i] == "ó"? "ober" : input[i] == "u" || input[i] == "ú" ? "ufat" : input[i];
        
    }

    return result;
}

const getValueEncrypt = () => {
    let inputValue = document.getElementById("mensaje").value; 

    if (inputValue === "") {
        alert("Debe escribir un texto válido!");

    } else {
        document.getElementById("tituloSalida").innerHTML = "resultado:";
        document.getElementById("msjSalida").innerHTML = encrypt(inputValue.toLowerCase());
    }

    clearValue();
}



/* DECRYPTION SECTION*/
const decrypt = (input) => {
    var txtDescifrado = input.replace(/enter/gm, "e"), 
    txtDescifrado = txtDescifrado.replace(/ober/gm, "o"),
    txtDescifrado = txtDescifrado.replace(/imes/gm, "i"),
    txtDescifrado = txtDescifrado.replace(/ai/gm, "a"),
    txtDescifrado = txtDescifrado.replace(/ufat/gm, "u");

    // console.log(txtDescifrado);
    return txtDescifrado;

}

const getValueDecrypt = () => {
    let inputValue = document.getElementById("mensaje").value; 

    if (inputValue === "") {
        alert("Debe escribir un texto válido!")        
    } else {
        document.getElementById("tituloSalida").innerHTML = "resultado:";
    
        document.getElementById("msjSalida").innerHTML = decrypt(inputValue.toLowerCase());
        // console.log(inputValue);
        
    }

    clearValue();   
}
