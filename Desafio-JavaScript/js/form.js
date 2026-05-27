
//class contato

class contato {
    constructor(nome, email, cpf,sobrenome, telefone, contato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }

}

function Post(event, form) {

    event.preventDefault();

    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value
    );

    Enviar(data);

    // form.reset();

}

function Enviar(data) {

    var nome = document.getElementById("nomeid");

    if (data !== "") {
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
    }

    console.log(data);

}