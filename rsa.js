const bigInt = require('big-integer');

function generateRSAKeys() {
  const p = bigInt(61);  // First prime number
  const q = bigInt(53);  // Second prime number

  const n = p.multiply(q);  // n = p * q
  const phi = p.minus(1).multiply(q.minus(1));  // Euler's Totient function phi(n) = (p-1) * (q-1)

  const e = bigInt(17);  // Public key exponent
  const d = e.modInv(phi);

  return { publicKey: { e, n }, privateKey: { d, n } };
}

function encryptRSA(message, publicKey) {
  const { e, n } = publicKey;
  const encryptedChars = [];

  for (let i = 0; i < message.length; i++) {
    const charCode = bigInt(message.charCodeAt(i));  // Convert character to ASCII code
    const encryptedChar = charCode.modPow(e, n);  // Encrypt the character
    encryptedChars.push(encryptedChar);
  }

  return encryptedChars;  // Return an array of encrypted values
}

function decryptRSA(encryptedChars, privateKey) {
  const { d, n } = privateKey;
  let decryptedMessage = '';

  for (let i = 0; i < encryptedChars.length; i++) {
    const decryptedChar = encryptedChars[i].modPow(d, n);  // Decrypt the character
    decryptedMessage += String.fromCharCode(decryptedChar);  // Convert back to character
  }

  return decryptedMessage;  // Return the decrypted string
}

// Example usage
const { publicKey, privateKey } = generateRSAKeys();
console.log("Public Key:", publicKey);
console.log("Private Key:", privateKey);

const plainText = "Jainam";
console.log("Original message:", plainText);

// Encrypt the message
const cipherText = encryptRSA(plainText, publicKey);
console.log("Encrypted text:", cipherText.join(' '));  // Display encrypted values

// Decrypt the message
const decryptedMessage = decryptRSA(cipherText, privateKey);
console.log("Decrypted message:", decryptedMessage);
