const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8000; 

const server = http.createServer(app);
const { loadPlanets } = require("./models/planets.model");

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

async function startServer(){
  await loadPlanets();
  app.listen(PORT, (req, res) => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

startServer();