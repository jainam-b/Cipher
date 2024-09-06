const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function vigenereEncrypt(plainText, keyword) {
  let result = '';
  let keywordIndex = 0;

  for (let i = 0; i < plainText.length; i++) {
    let char = plainText[i];

    if (char >= 'A' && char <= 'Z') {
      let shift = keyword[keywordIndex % keyword.length].toUpperCase().charCodeAt(0) - 65;
      result += String.fromCharCode((char.charCodeAt(0) + shift - 65) % 26 + 65);
      keywordIndex++;
    }
    else if (char >= 'a' && char <= 'z') {
      let shift = keyword[keywordIndex % keyword.length].toLowerCase().charCodeAt(0) - 97;
      result += String.fromCharCode((char.charCodeAt(0) + shift - 97) % 26 + 97);
      keywordIndex++;
    }
    else {
      result += char;
    }
  }
  return result;
}

function vigenereDecrypt(cipherText, keyword) {
  let result = '';
  let keywordIndex = 0;

  for (let i = 0; i < cipherText.length; i++) {
    let char = cipherText[i];

    if (char >= 'A' && char <= 'Z') {
      let shift = keyword[keywordIndex % keyword.length].toUpperCase().charCodeAt(0) - 65;
      result += String.fromCharCode((char.charCodeAt(0) - shift + 26 - 65) % 26 + 65);
      keywordIndex++;
    }
    else if (char >= 'a' && char <= 'z') {
      let shift = keyword[keywordIndex % keyword.length].toLowerCase().charCodeAt(0) - 97;
      result += String.fromCharCode((char.charCodeAt(0) - shift + 26 - 97) % 26 + 97);
      keywordIndex++;
    }
    else {
      result += char;
    }
  }
  return result;
}

rl.question('Enter plain text: ', (plainText) => {
  rl.question('Enter keyword: ', (keyword) => {

    // Encrypt the plain text
    const cipherText = vigenereEncrypt(plainText, keyword);
    console.log("Encrypted text: " + cipherText);

    // Decrypt the cipher text
    const decryptedText = vigenereDecrypt(cipherText, keyword);
    console.log("Decrypted text: " + decryptedText);

    // Close the readline interface
    rl.close();
  });
});

