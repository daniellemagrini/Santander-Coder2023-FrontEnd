/*
    Você foi contratado como programador para uma grande rede de lojas de automóveis (CarStore)
    e o seu primeiro desafio é construir a funcionalidade de enviar um e-mail, todas as segundas-feiras,
    para os clientes que visitaram as lojas no último mês, informando-os sobre os novos veículos e os mais
    vendidos, bem como as condições para aquisição (sejam criativos).
    
    - Como não haverá acesso a banco de dados, uma lista (array) de emails deverá ser criada,
    onde estarão armazenados os emails dos clientes.
    - A lista de emails armazenará, além do email de cada cliente, 
    uma flag com a decisão do cliente sobre receber ou não comunicações de marketing.
    - Será fornecida uma função, no arquivo "envia-email.js", que fará o envio "fake" do e-mail para um cliente.

    Dado o escopo global da aplicação, pede-se desenvolver cada subtarefa visando, ao final, a entrega completa
    da funcionalidade:
    
    1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.

    2. Criar uma função para montar o corpo do e-mail a ser enviado.

    3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua
    decisão sobre receber comunicações de marketing.

    Os passos acima são um guia, mas não obrigatórios. Podem desenvolver uma lógica diferente, que atenda ao solicitado.
*/
const listaEmails = require("./lista-emails");
const enviaEmail = require("./envia-email");

const dataAtual = new Date();

//FUNÇÕES
function diaDaSemana(dataAtual) {
    let dia = dataAtual.getDay();
    return dia;
}

function corpoEmail() {
    let corpo = `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
    make a type specimen book. It has survived not only five centuries, but a`

    return corpo;
      
}

if (diaDaSemana(dataAtual) === 1) {
    listaEmails.forEach(element => {
        if (element.emailMkt === 1) {
            let assuntoEmail = `${element.nome} dummy text of the printing`
            corpo = corpoEmail();
            enviaEmail(element.email, assuntoEmail, corpo);
        }
    });
}

