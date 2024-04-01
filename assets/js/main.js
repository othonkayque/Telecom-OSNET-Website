const express = require('express');
const path = require('path');
const multer = require('multer'); 
const app = express();


app.use('/html', express.static(path.join(__dirname, "../html")));
app.use('/static', express.static(path.join(__dirname, "../css")));
app.use('/javascript', express.static(path.join(__dirname, "../js")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../html/index.html"));
})

app.get('/osnet', (req, res) => {
    res.sendFile(path.join(__dirname, "../html/osnet.html"));
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../upload")); 
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}.jpg`);
    },
});

const upload = multer({ storage });

app.post('/upload', upload.fields([{ name: 'cpf-file', maxCount: 1 }, { name: 'rg-file', maxCount: 8 }]), (req, res) => {
    return 'Arquivo enviado com sucesso!';
});

app.listen(8080);