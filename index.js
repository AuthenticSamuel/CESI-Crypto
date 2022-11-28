import inquirer from "inquirer";

import { questions } from "./config/index.js";
import { caesar, oneParamCrypt, twoParamCrypt } from "./lib/crypt.js";

const main = async () => {
  const { method } = await inquirer.prompt(questions.method);
  const { algorithm } = await inquirer.prompt(questions.algorithm);

  let shift = null;
  if (algorithm === "caesar") {
    const { shift: s } = await inquirer.prompt(questions.shift);
    shift = s;
  }

  let passphrase = null;
  if (Object.keys(twoParamCrypt).includes(algorithm)) {
    const { passphrase: p } = await inquirer.prompt(questions.passphrase);
    passphrase = p;
  }

  const { text } = await inquirer.prompt(
    method === "encrypt" ? questions.cryptText : questions.decryptText
  );

  if (algorithm === "caesar") {
    console.log(caesar(text, shift, method === "encrypt"));
  } else if (Object.keys(twoParamCrypt).includes(algorithm)) {
    console.log(
      twoParamCrypt[algorithm](text, passphrase, method === "encrypt")
    );
  } else {
    console.log(oneParamCrypt[algorithm](text));
  }
};

main();
