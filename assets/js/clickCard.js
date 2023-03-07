
function clickCard(item){
    const mensagem = 'Oi, vi seus serviços no seu site, gostaria de saber mais sobre: ' + item;  //para adicionar quebra de linha coloque \n
    const link = "https://wa.me/5512988030168?text=" + mensagem;
    window.open(link);
}