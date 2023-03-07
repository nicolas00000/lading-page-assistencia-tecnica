const services = [
    {
      icon: '<i class="fas fa-laptop-medical"></i>',
      title: "formatação",
      description: "Formatação é o processo de apagar todos os dados de um dispositivo de armazenamento, como um disco rígido ou pendrive, e prepará-lo para receber novos dados.",
      paramet: 'clickCard("formataocao")'
    },
    
    {
      icon: '<i class="fa fa-hdd-o" aria-hidden="true"></i>',
      title: "atualização de drives", 
      description: "A atualização de drivers é o processo de instalar novas versões de software que permitem a comunicação entre o sistema operacional e os dispositivos de hardware em um computador"
    },

    {
      icon: '<i class="fas fa-download"></i>',
      title: "instalação de softwares", 
      description: "instalação do opl para rodar jogos nos ps2 via pen drive"
    },

    {
      icon: '<i class="fas fa-recycle"></i>',
      title: "recuperação de arquivos", 
      description: "instalação do opl para rodar jogos nos ps2 via pen drive"
    },

    {
      icon: '<i class="fas fa-ice-cream"></i>',
      title: "troca de pasta térmica", 
      description: "instalação do opl para rodar jogos nos ps2 via pen drive"
    },

    {
      icon: '<i class="fas fa-quidditch"></i>',
      title: "limpeza", 
      description: "instalação do opl para rodar jogos nos ps2 via pen drive"
    },

    {
      icon: '<i class="fas fa-charging-station"></i>',
      title: "manutençaõ de fonte", 
      description: "instalação do opl para rodar jogos nos ps2 via pen drive"
    },

    {
      icon: '<i class="fas fa-tools"></i>',
      title: "manutenção preventiva", 
      description: "instalação do opl para rodar jogos nos ps2 via pen drive"
    },

    {
      icon: '<i class="fa fa-paperclip" aria-hidden="true"></i>',
      title: "configuração de impressora", 
      description: "instalação do opl para rodar jogos nos ps2 via pen drive"
    },

    {
      icon: '<i class="fas fa-desktop-alt"></i>',
      title: "Troca de tela", 
      description: "instalação do opl para rodar jogos nos ps2 via pen drive"
    },

    {
      icon: '<i class="fas fa-keyboard"></i>',
      title: "Troca teclado", 
      description: "instalação do opl para rodar jogos nos ps2 via pen drive"
    },
]


const row = document.querySelector(".row-services")
services.forEach(element => {
    row.innerHTML +=`
    <div class="col-lg-4 col-md-6 d-flex align-items-stretch" onclick="clickCard&#40;'${element.title}'&#41;">
    <div class="icon-box">
      <div class="icon">${element.icon}</div>
      <h4><a href="">${element.title}</a></h4>
      <p>${element.description}</p>
    </div>
    </div>
    `
});