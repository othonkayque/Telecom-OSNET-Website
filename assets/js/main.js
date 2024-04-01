const path = require('path');
require('dotenv').config( { path: path.join(__dirname, '../env/.env') } )

const express = require('express');
const multer = require('multer'); 
const bodyParser = require('body-parser');
const app = express();


//body Parser config
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//static files
app.use('/html', express.static(path.join(__dirname, "../html")));
app.use('/static', express.static(path.join(__dirname, "../css")));
app.use('/javascript', express.static(path.join(__dirname, "../js")));

//routes
app.post('/', (req, res) => {
    console.log(req.body.name)
    res.sendFile(path.join(__dirname, '../html/index.html'));
});

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

app.post('/upload', upload.fields(
    [{ name: 'cpf-file', maxCount: 1 }, 
    { name: 'rg-file', maxCount: 1 }]), (req, res) => {

    var planoEscolhido;
    var moraSitio = (req.body.moraSitio == "on") ? planoEscolhido = req.body.planoSitio : planoEscolhido = req.body.planoCidade ;
    var msg = `
        *Nome:* ${req.body.nome} | *Idade:* ${req.body.age} | *Profissão:* ${req.body.prof} | *Email:* ${req.body.mail} | *CPF:* ${req.body.cpf}
        | *RG:* ${req.body.rg} | *Emissor:* ${req.body.emissor} | *Data de emissão:* ${req.body.dataEmissao} | 
        *Localidade:* ${req.body.local} | *Numero da casa:* ${req.body.casaNumero} | *Ponto de referencia:* ${req.body.ref} | 
        *Telefone para contato:* ${req.body.contato} | *Dia escolhido para pagamento:* ${req.body.diaPagamento} | 
        *Plano Escolhido:* ${planoEscolhido} Megas`
    ;

    res.redirect(`https://api.whatsapp.com/send?phone=${process.env.number}&text=${msg}`);
});

app.listen(8080);