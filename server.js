const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();
const PORT = 5000;

app.use('/static', express.static(path.join(path.resolve('./assets/idbank/'))));
// http://localhost:5000/static/level1/level2/mobile_payment_en.html

app.get('/api/static/addCard', async (req, res) => {
    return await fs.readFile('./assets/idbank/level1/level2/mobile_payment_en.html', 'utf-8', function (error, data) {
        if (error) {
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));