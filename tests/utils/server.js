const url = require('url');
const http = require('http');

const log = (...args) => {
  // console.log(...args);
}

const makeServer = async () => {
  const server = http.createServer((req, res) => {
    req.setEncoding('utf8');

    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;

    log(`[${new Date().toISOString()}]`, req.method, pathname);

    if (pathname === '/') {
      pathname = '/json';
    }

    let status;
    let result;
    let data = '';

    req.on('data', (chunk) => { data += chunk });

    req.on('end', () => {
      const query = Object.fromEntries(Object.entries(parsedUrl.query));
      status = query.status ?? 200

      if (pathname.startsWith('/loopback')) {
        result = JSON.stringify({
          url: req.url,
          method: req.method,
          headers: req.headers,
          query: query,
          body: data,
        });

        res.writeHead(status, { 'Content-Type': 'application/json' });
      }
      else if (pathname.startsWith('/json')) {
        result = data;
        res.writeHead(status, { 'Content-Type': 'application/json' });
      }
      else {
        result = ``;
        res.writeHead(status, { 'Content-Type': 'text/plain' });
      }

      res.end(result);

      log({
        url: req.url,
        method: req.method,
        headers: req.headers,
        query: query,
        body: data,
        result
      });

    });
  });

  const PORT = 3333;

  server.listen(PORT, log(`Listening on localhost:${PORT}...`));
  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      log(`Address localhost:${PORT} in use please retry when the port is available!`);
      server.close();
    }
  });

  return () => server.close();
};


module.exports = { makeServer };
