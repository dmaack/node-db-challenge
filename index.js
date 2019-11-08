const server = require('./api/server');

const PORT = process.env.PORT || 6010;
server.listen(PORT, () => console.log(`\n Listening on port ${PORT}\n`))