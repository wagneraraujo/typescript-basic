//basic ts types
let message: string;
message = `teste`;

let total: number;
total = 876;

//array
let items: string[];
items = ["teste", "teste2"];

let values: Array<number>;
values = [1, 4, 5];

//turple
let title: [number, string];
title = [4, "teste"];

//enum, cnmjunto de chave e valor
enum Colors {
  white = "#fff",
  black = "#000"
}

// any => qualquer coisa
let qualquer = true;

// não tem retorno
function user(): void {
  console.log();
}

//null
//never => nunca vai retornar
//type object => qualquer coisa que não serja um tipo primitivo, pode ser qualquer coisa
let cart: object;

function teste(): string {
  return "teste";
}
