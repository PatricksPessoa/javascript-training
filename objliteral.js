var servico = { //objeto
    cliente : 'Patrick',
    valor : 20,
    status : false,
    iniciarServico : function(){
        this.status = true;
    }
};

console.log(servico.status);
servico.iniciarServico();
console.log(servico.status);
