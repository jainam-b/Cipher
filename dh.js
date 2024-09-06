
const bigInt = require('big-integer');

function computePublicKey(privateKey, base, prime) {
  return bigInt(base).modPow(privateKey, prime);
}

function computeSharedSecretKey(receivedPublicKey, privateKey, prime) {
  return bigInt(receivedPublicKey).modPow(privateKey, prime);
}

function diffieHellman() {
  const prime = bigInt(23);  // A small prime number (in real scenarios, much larger primes are used)
  const base = bigInt(5);    // Base (also known as generator)

  // Step 2: Alice and Bob choose their private keys
  const alicePrivateKey = bigInt(6);  // Alice's private key (a)
  const bobPrivateKey = bigInt(15);   // Bob's private key (b)

  // Step 3: Alice computes her public key A = g^a mod p and sends it to Bob
  const alicePublicKey = computePublicKey(alicePrivateKey, base, prime);
  console.log("Alice's Public Key (sent to Bob):", alicePublicKey.toString());

  // Step 4: Bob computes his public key B = g^b mod p and sends it to Alice
  const bobPublicKey = computePublicKey(bobPrivateKey, base, prime);
  console.log("Bob's Public Key (sent to Alice):", bobPublicKey.toString());

  // Step 5: Alice computes the shared secret key using Bob's public key
  const aliceSharedSecretKey = computeSharedSecretKey(bobPublicKey, alicePrivateKey, prime);
  console.log("Alice's Shared Secret Key:", aliceSharedSecretKey.toString());

  // Step 6: Bob computes the shared secret key using Alice's public key
  const bobSharedSecretKey = computeSharedSecretKey(alicePublicKey, bobPrivateKey, prime);
  console.log("Bob's Shared Secret Key:", bobSharedSecretKey.toString());

  // Verify that both Alice and Bob have the same shared secret key
  if (aliceSharedSecretKey.equals(bobSharedSecretKey)) {
    console.log("Success! Both Alice and Bob have the same shared secret key.");
  } else {
    console.log("Error: Alice and Bob have different shared secret keys.");
  }
}

// Run the Diffie-Hellman key exchange simulation
diffieHellman();
