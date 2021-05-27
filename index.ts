import * as minimist from "minimist";
import { ProductController } from "./controllers";

function parsearParams(argv) {
 const resultado = minimist(argv);
 if (resultado.search) {
  return { search: resultado.search };
 } else {
  return {};
 }

}

function main() {
 const argumentosParseados = parsearParams(process.argv.slice(2));
 const prodController = new ProductController();
 prodController.processOptions(argumentosParseados).then((resultado) => {
  console.log(resultado);
 });
}

main();
