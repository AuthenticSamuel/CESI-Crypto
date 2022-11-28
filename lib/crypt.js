import crypto from "crypto-js";

const { enc, MD5, SHA1, SHA256, SHA384, SHA512, AES, DES, TripleDES } = crypto;

const cs = (character, shift, offset) => {
  return String.fromCharCode(
    ((character.charCodeAt() - offset + shift + 26) % 26) + offset
  );
};

export const caesar = (input, shift, encrypt = true) => {
  if (encrypt) {
    const result = input
      .replace(/[A-Z]/g, (character) => cs(character, shift, 65))
      .replace(/[a-z]/g, (character) => cs(character, shift, 97));
    return result;
  } else {
    const result = input
      .replace(/[A-Z]/g, (character) => cs(character, 26 - shift, 65))
      .replace(/[a-z]/g, (character) => cs(character, 26 - shift, 97));
    return result;
  }
};

export const md5 = (input) => {
  const hash = MD5(input).toString();
  return hash;
};

export const sha1 = (input) => {
  const hash = SHA1(input).toString();
  return hash;
};

export const sha256 = (input) => {
  const hash = SHA256(input).toString();
  return hash;
};

export const sha384 = (input) => {
  const hash = SHA384(input).toString();
  return hash;
};

export const sha512 = (input) => {
  const hash = SHA512(input).toString();
  return hash;
};

export const aes = (input, passphrase, encrypt = true) => {
  if (encrypt) {
    const encrypted = AES.encrypt(input, passphrase).toString();
    return encrypted;
  } else {
    const bytes = AES.decrypt(input, passphrase);
    const decrypted = bytes.toString(enc.Utf8);
    return decrypted;
  }
};

export const des = (input, passphrase, encrypt = true) => {
  if (encrypt) {
    const encrypted = DES.encrypt(input, passphrase).toString();
    return encrypted;
  } else {
    const bytes = DES.decrypt(input, passphrase);
    const decrypted = bytes.toString(enc.Utf8);
    return decrypted;
  }
};

export const tdes = (input, passphrase, encrypt = true) => {
  if (encrypt) {
    const encrypted = TripleDES.encrypt(input, passphrase).toString();
    return encrypted;
  } else {
    const bytes = TripleDES.decrypt(input, passphrase);
    const decrypted = bytes.toString(enc.Utf8);
    return decrypted;
  }
};

export const oneParamCrypt = {
  md5,
  sha1,
  sha256,
  sha384,
  sha512,
};

export const twoParamCrypt = {
  aes,
  des,
  tdes,
};
