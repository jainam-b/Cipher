const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function encrypt(text, shift) {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char >= 'A' && char <= 'Z') {
      result += String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26 + 26) % 26 + 65);
    }
    else if (char >= 'a' && char <= 'z') {
      result += String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26 + 26) % 26 + 97);
    }
    else {
      result += char;
    }
  }
  return result;
}

function decrypt(cipherText, shift) {
  return encrypt(cipherText, -shift); // Decryption is just the reverse of encryption
}

rl.question('Enter plain text: ', (plainText) => {
  rl.question('Enter shift key: ', (shiftKey) => {
    const shift = parseInt(shiftKey, 10);

    if (isNaN(shift)) {
      console.log("Invalid shift key. Please enter a number.");
      rl.close();
      return;
    }

    const cipherText = encrypt(plainText, shift);
    console.log("Encrypted text: " + cipherText);

    const decryptedText = decrypt(cipherText, shift);
    console.log("Decrypted text: " + decryptedText);

    rl.close();
  });
});
