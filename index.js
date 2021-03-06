const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'x-test, Content-Type, Accept, Access-Control-Allow-Headers'
};

const s = require('http').Server((req, res) => {
  if (req.url === '/result4/') {
    let header = req.headers["x-test"];

    let result = new Object();
    result.message = 'andreyafan20022202';
    result["x-result"] = header;
    let body = "";
    
    req
      .on("data", (data) => (body += data))
      .on("end", () => {
        result["x-body"] = body;
        res.writeHead(200, {...CORS, "Content-Type": "application/json" });
        res.end(JSON.stringify(result));
    });
  }
      
  else {
    res.end('OH NO!');
  }
});
s.listen(process.env.PORT);
