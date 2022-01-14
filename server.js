const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/addCard', (req, res) => {
    return await fs.readFile('app/assets/idbank/level1/level2/mobile_payment_en.html', 'utf-8', function (error, data) {
        if (error) {
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));