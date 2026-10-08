const http = require("http");
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.end("Olá de dentro de um container!\n");
}).listen(port, () => console.log("a ouvir na porta " + port));