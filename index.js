// start your server here

const server = require("./api/server");

const port = process.env.PORT || 5004

server.listen(port, () => console.log(`\nAPI running on port ${port}\n`))