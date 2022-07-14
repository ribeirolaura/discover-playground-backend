let aceitar = false;

console.log("Pedindo uber");

const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve("Carro chegou");
  }
  return reject("carro não chegou");
});

console.log("aguardando");

promessa
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("finalizada"));
