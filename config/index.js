export const algorithms = [
  {
    name: "César",
    value: "caesar",
    type: "special",
  },
  {
    name: "MD5",
    value: "md5",
    type: "hash",
  },
  {
    name: "SHA-1",
    value: "sha1",
    type: "hash",
  },
  {
    name: "SHA-256",
    value: "sha256",
    type: "hash",
  },
  {
    name: "SHA-384",
    value: "sha384",
    type: "hash",
  },
  {
    name: "SHA-512",
    value: "sha512",
    type: "hash",
  },
  {
    name: "AES",
    value: "aes",
    type: "cypher",
  },
  {
    name: "DES",
    value: "des",
    type: "cypher",
  },
  {
    name: "Triple DES",
    value: "tdes",
    type: "cypher",
  },
];

export const questions = {
  method: {
    type: "list",
    name: "method",
    message: "Encrypter ou décrypter?",
    choices: [
      {
        name: "Encrypter",
        value: "encrypt",
      },
      {
        name: "Décrypter",
        value: "decrypt",
      },
    ],
  },
  algorithm: {
    type: "list",
    name: "algorithm",
    message: "Quel algorithme souhaitez-vous utiliser?",
    default: algorithms[0].value,
    choices: algorithms,
  },
  shift: {
    type: "number",
    name: "shift",
    message: "Décalage",
    default: 3,
    validate: (input) => input > 0 && input < 26,
  },
  cryptText: {
    type: "input",
    name: "text",
    message: "Le texte à chiffrer",
  },
  decryptText: {
    type: "input",
    name: "text",
    message: "Le texte à déchiffrer",
  },
  passphrase: {
    type: "input",
    name: "passphrase",
    message: "Passphrase secrète",
    default: "Secret",
  },
};
