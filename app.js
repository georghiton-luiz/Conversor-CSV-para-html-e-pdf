const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Writer = require('./Writer');
const PDFWrite = require('./PDFWriter')

let leitor = new Reader();
let escritor = new Writer()

async function main() {
    let dados = await leitor.Read('./users.CSV');
    let dadosProcessados = Processor.Process(dados);

    let usuarios = new Table(dadosProcessados);

    let html = await HtmlParser.Parse(usuarios);

    escritor.Write(`${Date.now()}.html`, html)
    PDFWrite.WritePDF(`${Date.now()}.pdf`, html)
};

main();
