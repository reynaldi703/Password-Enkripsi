class TuringMachine {
  constructor(tape, headPosition, currentState) {
    this.tape = tape;
    this.headPosition = headPosition;
    this.currentState = currentState;
  }

  encrypt(plaintext, rotation) {
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
      let charCode = plaintext.charCodeAt(i);
      charCode += rotation;
      ciphertext += String.fromCharCode(charCode);
    }
    return ciphertext;
  }

  decrypt(ciphertext, rotation) {
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
      let charCode = ciphertext.charCodeAt(i);
      charCode -= rotation;
      plaintext += String.fromCharCode(charCode);
    }
    return plaintext;
  }

  run(input, operation, rotation) {
    if (operation === "encrypt") {
      return this.encrypt(input, rotation);
    } else if (operation === "decrypt") {
      return this.decrypt(input, rotation);
    } else {
      throw new Error("Invalid operation");
    }
  }
}

let tm = new TuringMachine([], 0, "start");

let inputField = document.getElementById("input-field");
let operationSelect = document.getElementById("operation-select");
let rotationInput = document.getElementById("rotation-input");
let outputField = document.getElementById("output-field");

document.getElementById("run-button").addEventListener("click", (event) => {
    event.preventDefault();
    let input = document.getElementById("input-field").value;
    let operation = document.getElementById("operation-select").value;
    let rotation = parseInt(document.getElementById("rotation-input").value);
    let output = tm.run(input, operation, rotation);
    document.getElementById("output-field").value = output;
  });

