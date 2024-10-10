const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults();
const data = require('./data/db.json');
const PORT = process.env.PORT || 8001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Endpoint to get all data
server.get('/alldata', (req, res) => {
    res.send({
        login: true,
        table: data.student,
        lineGraphData: data.LineGraph,
        cardData: data.cardData,
        pieChart: data.pieChart[0]
    });
});

// Endpoint to get line graph data
server.get('/lineGraph', (req, res) => {
    res.send({ lineGraphData: data.LineGraph });
});

// Endpoint to get card data
server.get('/cardData', (req, res) => {
    res.send({ cardData: data.cardData });
});

// Endpoint to get pie chart data by month
server.get('/pieChart/:month', (req, res) => {
    const monthData = data.pieChart.find(item => item.month === req.params.month);
    if (monthData) {
        res.send({ pieChart: monthData });
    } else {
        res.status(404).send({ error: 'Month not found' });
    }
});

// Endpoint to get student table data
server.get('/table', (req, res) => {
    res.send({ table: data.student });
});

// Optional: Example function for generating pie data (currently not used)
function pieDataGenerator() {
    return data.pieChart; // Return the pie chart data directly
}

// Use default router for other routes
server.use(router);

// Start the server
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});