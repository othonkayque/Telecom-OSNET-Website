var btn = document.querySelector("#registrar");

function send() {
    var info = {
        nome: document.querySelector("#complete-name").value,
        age: document.querySelector("#age").value,
        prof: document.querySelector("#profissao").value,
        mail: document.querySelector("#mail").value,
        cpf: document.querySelector("#cpf").value,
        rg: document.querySelector("#RG").value,
        emissorRg: document.querySelector("#EmissorRG").value,
        dataEmissorRg: document.querySelector("#dataEmissorRG").value,
        local: document.querySelector("#local").value,
        casaNumero: document.querySelector("#casaNumero").value,
        ref: document.querySelector("#ref").value,
        contato: document.querySelector("#contato").value,
        formSelect: document.querySelector(".form-select").value,
        planoCidade: document.querySelector("#planoCidade").value,
        planoSitio: document.querySelector("#planoSitio").value,
        planoEscolhido: "",
        moraSitio: document.querySelector("#flexSwitchCheckDefault").checked,
    }
    info.moraSitio = (info.moraSitio == true) ? info.planoEscolhido = info.planoSitio : info.planoEscolhido = info.planoCidade;

    //response infos
    var number = "5588994209998";
    var msg = `
        *Nome:* ${info.nome} | *Idade:* ${info.age} | *Profissão:* ${info.prof} | *Email:* ${info.mail} | *CPF:* ${info.cpf} | *RG:* ${info.rg} | 
        *Emissor:* ${info.emissorRg} | *Data de emissão:* ${info.dataEmissorRg} | *Localidade:* ${info.local} | *Numero da casa:* ${info.casaNumero} |
        *Ponto de referencia:* ${info.ref} | *Telefone para contato:* ${info.contato} | *Dia escolhido para pagamento:* ${info.formSelect} | *Plano Escolhido:* ${info.planoEscolhido} Megas |
    `;
    var link = `https://api.whatsapp.com/send?phone=${number}&text=${msg}`;
    window.location.href = link;
}

function popUp() {
    var btnPopUp = document.querySelector("#popup");
    btnPopUp.style = "display: flex;";
}
function sendCancel() {
    var btnPopUp = document.querySelector("#popup");
    btnPopUp.style = "display: none;";
}