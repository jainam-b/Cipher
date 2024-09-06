
# Cipher Project

This project includes implementations of various encryption algorithms:
- Caesar Cipher
- Vigenère Cipher
- RSA Encryption and Decryption
- Diffie-Hellman Key Exchange

## Setup and Usage

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/Cipher.git
    cd Cipher
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Running the Scripts

- **Caesar Cipher**: Run `node caesar.js`
- **Vigenère Cipher**: Run `node vigenere.js`
- **RSA Encryption and Decryption**: Run `node rsa.js`
- **Diffie-Hellman Key Exchange**: Run `node dh.js`

### Docker Setup

To run the project using Docker, follow these steps:

1. **Build the Docker Image:**

    ```bash
    docker build -t cipher-app .
    ```

2. **Run the Docker Container:**

    ```bash
    docker run -it --rm cipher-app node caesar.js  # Replace with the script you want to run
    ```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
