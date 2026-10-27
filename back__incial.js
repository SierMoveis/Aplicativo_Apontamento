''
document.addEventListener('DOMContentLoaded', function () {
    let openMenu = document.getElementById("open__menu")
    let closeMenu = document.getElementById("close__menu")
    let menu = document.getElementById("bt__menu")

    openMenu.addEventListener('click', () => {
        menu.style.display = 'flex'

        menu.style.right = (menu.offsetWidth * -1) + 'px'

        openMenu.style.display = 'none'

        setTimeout(() => {
            menu.style.opacity = '1'

            menu.style.right = '0'
        }, 10)
    })

    closeMenu.addEventListener('click', () => {
        menu.style.opacity = '0'

        menu.style.right = (menu.offsetWidth * -1) + 'px'

        openMenu.removeAttribute('style')

        setTimeout(() => {
            menu.removeAttribute('style')
        }, 200)
    })

    // Adiciona um event listener para os links do menu
    let links = document.querySelectorAll('.link__')
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.style.opacity = '0'

            menu.style.right = (menu.offsetWidth * -1) + 'px'

            openMenu.removeAttribute('style')

            setTimeout(() => {
                menu.removeAttribute('style')
            }, 200)
        })
    })

    // Obtém a URL da página atual
    var urlAtual = window.location.href;

    // Obtém todos os links na página
    var links__menu = document.querySelectorAll('.link__');

    // Itera sobre os links
    for (var i = 0; i < links__menu.length; i++) {
        var link = links__menu[i];

        // Obtém o URL de destino do link
        var urlDestino = link.href;

        // Verifica se a URL de destino é igual à URL atual
        if (urlDestino === urlAtual) {
            // Se forem iguais, oculta o link
            link.style.display = 'none';
        }
    }

    // função de seleção de setor

    const unidades = document.querySelectorAll('.unidade');

    function mostrarUnidade(id) {
        unidades.forEach(unidade => {
            unidade.style.display = 'none';
        });

        const unidadeSelecionada = document.getElementById(id);
        unidadeSelecionada.style.display = 'block';
    }

    document.querySelectorAll('.link__menu').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const id = this.getAttribute('href').substring(1);
            mostrarUnidade(id);

            const menu = document.querySelector('.inicial__menu');
            menu.style.display = 'none';
        });
    });

    // // Para exibir a primeira unidade ao carregar a página
    // mostrarUnidade('ua1'); // Altere para a unidade desejada

});

let listaDeUrls = [];


const unidades = {
    //  { data: "", captura: ["", "", "", "", ""] },

    // Produtividade:

    UA1: {
        Expedicao: [
          
           
            
            
            { data: "31/08/2026", captura: ["capturas/Unidade 1/2026/08 AGOSTO/Expedição/MetasTv/31.jpeg", "capturas/Unidade 1/2026/08 AGOSTO/Expedição/Embalagem/31.jpeg"] },
            
            { data: "01/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/01.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/01.jpeg"] },
            { data: "02/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/02.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/02.jpeg"] },
            { data: "03/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/03.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/03.jpeg"] },
            { data: "08/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/08.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/08.jpeg"] },
            { data: "09/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/09.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/09.jpeg"] },
            { data: "11/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/11.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/11.jpeg"] },
            { data: "14/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/14.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/14.jpeg"] },
            { data: "15/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/15.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/15.jpeg"] },
            { data: "16/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/16.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/16.jpeg"] },
            { data: "17/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/17.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/17.jpeg"] },
            { data: "21/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/21.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/21.jpeg"] },
            { data: "22/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/22.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/22.jpeg"] },
            { data: "23/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/23.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/23.jpeg"] },
            { data: "24/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/24.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/24.jpeg"] },
            { data: "29/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/29.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/29.jpeg"] },
            { data: "30/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Expedição/MetasTv/30.jpeg", "capturas/Unidade 1/2026/09 SETEMBRO/Expedição/Embalagem/30.jpeg"] },
            { data: "01/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Expedição/Embalagem/01.jpeg", "capturas/Unidade 1/2026/10 OUTUBRO/Expedição/Embalagem/01.jpeg"] },
            { data: "07/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Expedição/MetasTv/07.jpeg", "capturas/Unidade 1/2026/10 OUTUBRO/Expedição/Embalagem/07.jpeg"] },
            { data: "13/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Expedição/MetasTv/13.jpeg", "capturas/Unidade 1/2026/10 OUTUBRO/Expedição/Embalagem/13.jpeg"] },
            { data: "14/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Expedição/MetasTv/14.jpeg", "capturas/Unidade 1/2026/10 OUTUBRO/Expedição/Embalagem/14.jpeg"] },
            { data: "15/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Expedição/MetasTv/15.jpeg", "capturas/Unidade 1/2026/10 OUTUBRO/Expedição/Embalagem/15.jpeg"] },
            { data: "19/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Expedição/MetasTv/19.jpeg", "capturas/Unidade 1/2026/10 OUTUBRO/Expedição/Embalagem/19.jpeg"] },
            { data: "20/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Expedição/MetasTv/20.jpeg", "capturas/Unidade 1/2026/10 OUTUBRO/Expedição/Embalagem/20.jpeg"] },
            { data: "21/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Expedição/MetasTv/21.jpeg", "capturas/Unidade 1/2026/10 OUTUBRO/Expedição/Embalagem/21.jpeg"] },
            { data: "22/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Expedição/MetasTv/22.jpeg", "capturas/Unidade 1/2026/10 OUTUBRO/Expedição/Embalagem/22.jpeg"] },


            // { data: "", captura: ["", ""] },


        ],

        Acabamento: [

            
            
            { data: "31/08/2026", captura: ["capturas/Unidade 1/2026/08 AGOSTO/Acabamento/31.jpeg"] },

            { data: "01/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/01.jpeg"] },
            { data: "02/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/02.jpeg"] },
            { data: "03/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/03.jpeg"] },
            { data: "08/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/08.jpeg"] },
            { data: "09/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/09.jpeg"] },
            { data: "10/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/10.jpeg"] },
            { data: "11/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/11.jpeg"] },
            { data: "14/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/14.jpeg"] },
            { data: "15/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/15.jpeg"] },
            { data: "16/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/16.jpeg"] },
            { data: "17/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/17.jpeg"] },
            { data: "18/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/18.jpeg"] },
            { data: "21/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/21.jpeg" ] },
            { data: "22/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/22.jpeg"] },
            { data: "23/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/23.jpeg"] },
            { data: "24/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/24.jpeg"] },
            { data: "28/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/28.jpeg"] },
            { data: "29/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/29.jpeg"] },
            { data: "30/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Acabamento/30.jpeg"] },
            { data: "01/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Acabamento/01.jpeg"] },
            { data: "06/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Acabamento/06.jpeg"] },
            { data: "07/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Acabamento/07.jpeg"] },
            { data: "13/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Acabamento/13.jpeg"] },
            { data: "14/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Acabamento/14.jpeg"] },
            { data: "15/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Acabamento/15.jpeg"] },
            { data: "19/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Acabamento/19.jpeg"] },
            { data: "20/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Acabamento/20.jpeg"] },
            { data: "21/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Acabamento/21.jpeg"] },
            { data: "22/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Acabamento/22.jpeg"] },

            // { data: "", captura: [""] },





        ],

        Usinagem: [

   
           
            { data: "31/08/2026", captura: ["capturas/Unidade 1/2026/08 AGOSTO/Usinagem - Cnc/31.jpeg" ] },

            { data: "01/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/01.jpeg" ] },
            { data: "02/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/2.jpeg" ] },
            { data: "03/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/03.jpeg"] },
            { data: "08/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/08.jpeg" ] },
            { data: "09/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/09.jpeg" ] },
            { data: "10/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/10.jpeg" ] },
            { data: "11/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/11.jpeg" ] },
            { data: "14/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/14.jpeg" ] },
            { data: "15/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/15.jpeg" ] },
            { data: "16/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/16.jpeg"] },
            { data: "17/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/17.jpeg" ] },
            { data: "21/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/21.jpeg" ] },
            { data: "22/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/22.jpeg" ] },
            { data: "23/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/23.jpeg" ] },
            { data: "24/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/24.jpeg" ] },
            { data: "29/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/29.jpeg" ] },
            { data: "30/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Usinagem - Cnc/30.jpeg" ] },
            { data: "01/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Usinagem - Cnc/01.jpeg" ] },
            { data: "07/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Usinagem - Cnc/07.jpeg" ] },
            { data: "13/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Usinagem - Cnc/13.jpeg" ] },
            { data: "14/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Usinagem - Cnc/14.jpeg" ] },
            { data: "15/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Usinagem - Cnc/15.jpeg" ] },
            { data: "19/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Usinagem - Cnc/19.jpeg" ] },
            { data: "20/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Usinagem - Cnc/20.jpeg" ] },
            { data: "21/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Usinagem - Cnc/21.jpeg" ] }, 
            { data: "22/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Usinagem - Cnc/22.jpeg" ] },

            // { data: "", captura: ["" ] },



        ],

        Montagem: [
          
            
           
           
           { data: "31/08/2026", captura: ["capturas/Unidade 1/2026/08 AGOSTO/Montagem/31.jpeg"] },

           
           { data: "03/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/03.jpeg"] },
           { data: "08/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/08.jpeg"] },
           { data: "09/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/09.jpeg"] },
           { data: "10/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/10.jpeg"] },
           { data: "11/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/11.jpeg"] },
           { data: "14/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/14.jpeg"] },
           { data: "15/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/15.jpeg"] },
           { data: "16/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/16.jpeg"] },
           { data: "17/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/17.jpeg"] },
           { data: "18/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/18.jpeg"] },
           { data: "21/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/21.jpeg"] },
           { data: "22/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/22.jpeg"] },
           { data: "23/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/23.jpeg"] },
           { data: "24/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/24.jpeg" ] },
           { data: "29/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/29.jpeg"] },
           { data: "30/09/2026", captura: ["capturas/Unidade 1/2026/09 SETEMBRO/Montagem/30.jpeg"] },
           { data: "01/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/1.jpeg"] },
           { data: "05/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/05.jpeg"] },
           { data: "06/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/06.jpeg"] },
           { data: "07/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/07.jpeg"] },
           { data: "13/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/13.jpeg"] },
           { data: "14/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/14.jpeg"] },
           { data: "15/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/15.jpeg"] },
           { data: "17/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/17.jpeg"] },
           { data: "19/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/19.jpeg"] },
           { data: "20/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/20.jpeg"] },
           { data: "21/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/21.jpeg"] },
           { data: "22/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/22.jpeg"] },
           { data: "23/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/24.jpeg"] },
           { data: "25/10/2026", captura: ["capturas/Unidade 1/2026/10 OUTUBRO/Montagem/25.jpeg"] },

            // { data: "", captura: [""] },


        ],


    },

    UA2: {
        Estofaria: [
            
            { data: "19/12/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/12-DEZEMBRO/19-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/12-DEZEMBRO/19-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/12-DEZEMBRO/19-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/12-DEZEMBRO/19-pt4.jpeg"] },

            
            { data: "30/01/2026", captura: ["capturas/Unidade 2/Estofaria/2026/01-JANEIRO/30-pt1.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/30-pt2.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/30-pt3.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/30-pt4.jpeg"] },

            
            { data: "26/02/2026", captura: ["capturas/Unidade 2/Estofaria/2026/02-FEVEREIRO/26-pt1.jpg", "capturas/Unidade 2/Estofaria/2026/02-FEVEREIRO/26-pt2.jpg", "capturas/Unidade 2/Estofaria/2026/02-FEVEREIRO/26-pt3.jpg", "capturas/Unidade 2/Estofaria/2026/02-FEVEREIRO/26-pt4.jpg"] },

            
            { data: "31/03/2026", captura: ["capturas/Unidade 2/Estofaria/2026/03-MARÇO/31pt1.jpg", "capturas/Unidade 2/Estofaria/2026/03-MARÇO/31pt2.jpg", "capturas/Unidade 2/Estofaria/2026/03-MARÇO/31pt3.jpg", "capturas/Unidade 2/Estofaria/2026/03-MARÇO/31pt4.jpg"] },
            
            
            { data: "30/04/2026", captura: ["capturas/Unidade 2/Estofaria/2026/04-APRIL/30pt1.jpg", "capturas/Unidade 2/Estofaria/2026/04-APRIL/30pt2.jpg", "capturas/Unidade 2/Estofaria/2026/04-APRIL/30pt3.jpg", "capturas/Unidade 2/Estofaria/2026/04-APRIL/30pt4.jpg"] },
            
            
            { data: "30/06/2026", captura: ["capturas/Unidade 2/Estofaria/2026/06-JUNHO/30-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/06-JUNHO/30-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/06-JUNHO/30-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/06-JUNHO/30-PT4.JPG"] },
            
            
            { data: "31/07/2026", captura: ["capturas/Unidade 2/Estofaria/2026/07-JULHO/31-pt1.jpg", "capturas/Unidade 2/Estofaria/2026/07-JULHO/31-pt2.jpg", "capturas/Unidade 2/Estofaria/2026/07-JULHO/31-pt3.jpg", "capturas/Unidade 2/Estofaria/2026/07-JULHO/31-pt4.jpg"] },
            
            
            { data: "31/08/2026", captura: ["capturas/Unidade 2/Estofaria/2026/08-AGOSTO/31-pt1.jpg", "capturas/Unidade 2/Estofaria/2026/08-AGOSTO/31-pt2.jpg", "capturas/Unidade 2/Estofaria/2026/08-AGOSTO/31-pt3.jpg", "capturas/Unidade 2/Estofaria/2026/08-AGOSTO/31-pt4.jpg"] },
            
           
            { data: "30/09/2026", captura: ["capturas/Unidade 2/Estofaria/2026/09-SETEMBRO/30-pt1.jpg", "capturas/Unidade 2/Estofaria/2026/09-SETEMBRO/30-pt2.jpg", "capturas/Unidade 2/Estofaria/2026/09-SETEMBRO/30-pt3.jpg", "capturas/Unidade 2/Estofaria/2026/09-SETEMBRO/30-pt4.jpg"] },
            
            { data: "01/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/1-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/1-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/1-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/1-PT4.JPG"] },
            { data: "02/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/2-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/2-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/2-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/2-PT4.JPG"] },
            { data: "05/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/5-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/5-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/5-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/5-PT4.JPG"] },
            { data: "06/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/6-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/6-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/6-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/6-PT4.JPG"] },
            { data: "07/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/7-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/7-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/7-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/7-PT4.JPG"] },
            { data: "13/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/13-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/13-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/13-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/13-PT4.JPG"] },
            { data: "14/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/14-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/14-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/14-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/14-PT4.JPG"] },
            { data: "15/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/15-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/15-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/15-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/15-PT4.JPG"] },
            { data: "16/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/16-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/16-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/16-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/16-PT4.JPG"] },
            { data: "19/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/19-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/19-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/19-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/19-PT4.JPG"] },
            { data: "20/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/20-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/20-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/20-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/20-PT4.JPG"] },
            { data: "21/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/21-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/21-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/21-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/21-PT4.JPG"] },
            { data: "22/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/22-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/22-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/22-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/24-PT4.JPG"] },
            { data: "23/10/2026", captura: ["capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/23-PT1.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/23-PT2.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/23-PT3.JPG", "capturas/Unidade 2/Estofaria/2026/10-OUTUBRO/23-PT4.JPG"] },
            


            // { data: "", captura: ["", "", "", ""] },
            
        ],

        Expedição: [

            
            { data: "19/12/2025", captura: ["capturas/Unidade 2/Expedição/2025/12-DEZEMBRO/19.jpeg"] },
            
            
            { data: "30/01/2026", captura: ["capturas/Unidade 2/Expedição/2026/01-JANEIRO/30.JPEG"] },

            
            { data: "26/02/2026", captura: ["capturas/Unidade 2/Expedição/2026/02-FEVEREIRO/26.JPG"] },

            
            { data: "31/03/2026", captura: ["capturas/Unidade 2/Expedição/2026/03-MARÇO/31.jpg"] },

            
            { data: "30/04/2026", captura: ["capturas/Unidade 2/Expedição/2026/04-ABRIL/30.JPG"] },

            
            { data: "29/05/2026", captura: ["capturas/Unidade 2/Expedição/2026/05-MAIO/29.JPG"] },
            
            
            { data: "30/06/2026", captura: ["capturas/Unidade 2/Expedição/2026/06-JUNHO/30.JPG"] },

            
            { data: "31/07/2026", captura: ["capturas/Unidade 2/Expedição/2026/07-JULHO/31.JPG"] },
            
            
            { data: "31/08/2026", captura: ["capturas/Unidade 2/Expedição/2026/08-AGOSTO/31.jpg"] },
            
            
            { data: "30/09/2026", captura: ["capturas/Unidade 2/Expedição/2026/09-SETEMBRO/30.JPG"] },
            
            { data: "01/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/01.JPG"] },
            { data: "02/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/02.JPG"] },
            { data: "05/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/05.JPG"] },
            { data: "06/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/06.JPG"] },
            { data: "07/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/07.JPG"] },
            { data: "08/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/08.JPG"] },
            { data: "13/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/13.JPG"] },
            { data: "14/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/14.JPG"] },
            { data: "15/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/15.JPG"] },
            { data: "16/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/16.JPG"] },
            { data: "19/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/19.JPG"] },
            { data: "20/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/20.JPG"] },
            { data: "21/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/21.JPG"] },
            { data: "22/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/22.JPG"] },
            { data: "23/10/2026", captura: ["capturas/Unidade 2/Expedição/2026/10-OUTUBRO/23.JPG"] },
            

            
            

            // { data: "", captura: [""] },
            
        ],
            

        CNC: [
            
            { data: "19/12/2025", captura: ["capturas/Unidade 2/Usinagem/2025/12-DEZEMBRO/CNC/19.JPEG"] },

            
            { data: "30/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/30.JPEG"] },

            
            { data: "26/02/2026", captura: ["capturas/Unidade 2/Usinagem/2026/02-FEVEREIRO/CNC/26.jpeg"] },

            
            { data: "31/03/2026", captura: ["capturas/Unidade 2/Usinagem/2026/03-MARÇO/CNC/31.JPG"] },

            
            { data: "30/04/2026", captura: ["capturas/Unidade 2/Usinagem/2026/04-ABRIL/CNC/30.jpg"] },

            
            { data: "29/05/2026", captura: ["capturas/Unidade 2/Usinagem/2026/05-MAIO/CNC/29.JPG"] },

               
            { data: "30/06/2026", captura: ["capturas/Unidade 2/Usinagem/2026/06-JUNHO/CNC/30.JPG"] },

            
            { data: "31/07/2026", captura: ["capturas/Unidade 2/Usinagem/2026/07-JULHO/CNC/31.JPG"] },

            
            { data: "31/08/2026", captura: ["capturas/Unidade 2/Usinagem/2026/08-AGOSTO/CNC/31.jpg"] },

            
            { data: "30/09/2026", captura: ["capturas/Unidade 2/Usinagem/2026/09-SETEMBRO/CNC/30.JPG"] },
            
            { data: "01/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/01.JPG"] },
            { data: "02/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/02.JPG"] },
            { data: "05/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/05.JPG"] },
            { data: "06/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/06.JPG"] },
            { data: "07/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/07.JPG"] },
            { data: "08/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/08.JPG"] },
            { data: "13/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/13.JPG"] },
            { data: "14/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/14.JPG"] },
            { data: "15/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/15.JPG"] },
            { data: "16/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/16.JPG"] },
            { data: "19/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/19.JPG"] },
            { data: "20/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/20.JPG"] },
            { data: "21/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/21.JPG"] },
            { data: "22/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/22.JPG"] },
            { data: "23/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/CNC/23.JPG"] },




            // { data: "", captura: [""] },



        ],

        


        Usinagem: [
            
            { data: "19/12/2025", captura: ["capturas/Unidade 2/Usinagem/2025/12-DEZEMBRO/MONTAGEM US/19.JPEG", "capturas/Unidade 2/Usinagem/2025/12-DEZEMBRO/ROLINHO/19.jpeg", "capturas/Unidade 2/Usinagem/2025/12-DEZEMBRO/ROQUITE/19.jpeg", "capturas/Unidade 2/Usinagem/2025/12-DEZEMBRO/MM/19.jpg", "capturas/Unidade 2/Usinagem/2025/12-DEZEMBRO/USINAGEM/19.jpg"] },
            
            
            { data: "30/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/30.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/30.JPG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/30.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/30.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/30.JPG"] },
            
            
            { data: "26/02/2026", captura: ["capturas/Unidade 2/Usinagem/2026/02-FEVEREIRO/MONTAGEM US/26.jpg", "capturas/Unidade 2/Usinagem/2026/02-FEVEREIRO/ROLINHO/26.JPG", "capturas/Unidade 2/Usinagem/2026/02-FEVEREIRO/ROQUITE/26.jpg", "capturas/Unidade 2/Usinagem/2026/02-FEVEREIRO/MM/26.jpg", "capturas/Unidade 2/Usinagem/2026/02-FEVEREIRO/USINAGEM/26.JPG"] },

            
            { data: "31/03/2026", captura: ["capturas/Unidade 2/Usinagem/2026/03-MARÇO/MONTAGEM US/31.JPG", "capturas/Unidade 2/Usinagem/2026/03-MARÇO/ROLINHO/31.JPG", "capturas/Unidade 2/Usinagem/2026/03-MARÇO/ROQUITE/31.JPG", "capturas/Unidade 2/Usinagem/2026/03-MARÇO/MM/31.jpg", "capturas/Unidade 2/Usinagem/2026/03-MARÇO/USINAGEM/31.JPG"] },
            
           
            { data: "30/04/2026", captura: ["capturas/Unidade 2/Usinagem/2026/04-ABRIL/MONTAGEM US/30.JPG", "capturas/Unidade 2/Usinagem/2026/04-ABRIL/ROLINHO/30.JPG", "capturas/Unidade 2/Usinagem/2026/04-ABRIL/ROQUITE/30.JPG", "capturas/Unidade 2/Usinagem/2026/04-ABRIL/MM/30.jpg", "capturas/Unidade 2/Usinagem/2026/04-ABRIL/USINAGEM/30.JPG"] },

            
            { data: "29/05/2026", captura: ["capturas/Unidade 2/Usinagem/2026/05-MAIO/USINAGEM/29.JPG", "capturas/Unidade 2/Usinagem/2026/05-MAIO/MM/29.jpg"] },

            
            { data: "30/06/2026", captura: ["capturas/Unidade 2/Usinagem/2026/06-JUNHO/USINAGEM/30.jpg", "capturas/Unidade 2/Usinagem/2026/06-JUNHO/MM/30.jpg"] },

            
            { data: "31/07/2026", captura: ["capturas/Unidade 2/Usinagem/2026/07-JULHO/USINAGEM/31.JPG", "capturas/Unidade 2/Usinagem/2026/07-JULHO/MM/31.jpg"] },

           
            { data: "31/08/2026", captura: ["capturas/Unidade 2/Usinagem/2026/08-AGOSTO/USINAGEM/31.jpg", "capturas/Unidade 2/Usinagem/2026/08-AGOSTO/MM/31.jpg"] },

            
            { data: "30/09/2026", captura: ["capturas/Unidade 2/Usinagem/2026/09-SETEMBRO/USINAGEM/30.JPG", "capturas/Unidade 2/Usinagem/2026/09-SETEMBRO/MM/30.jpg"] },

            { data: "01/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/01.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/01.jpg"] },
            { data: "02/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/02.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/02.jpg"] },
            { data: "05/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/05.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/05.jpg"] },
            { data: "06/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/06.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/06.jpg"] },
            { data: "07/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/07.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/07.jpg"] },
            { data: "08/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/08.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/08.jpg"] },
            { data: "13/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/13.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/13.jpg"] },
            { data: "14/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/14.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/14.jpg"] },
            { data: "15/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/15.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/15.jpg"] },
            { data: "16/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/16.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/16.jpg"] },
            { data: "19/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/19.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/19.jpg"] },
            { data: "20/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/20.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/20.jpg"] },
            { data: "21/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/21.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/21.jpg"] },
            { data: "22/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/22.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/22.jpg"] },
            { data: "23/10/2026", captura: ["capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/USINAGEM/23.JPG", "capturas/Unidade 2/Usinagem/2026/10-OUTUBRO/MM/23.jpg"] },




            ],


             // { data: "", captura: ["", ""] },



             Acabamento: [
            
            { data: "19/12/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/DEZEMBRO/19 PT01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/DEZEMBRO/19 PT02.jpg"] },

            
            { data: "30/01/2026", captura: ["capturas/Unidade 2/Acabamento/2026/01-JANEIRO/30 pt1.jpg", "capturas/Unidade 2/Acabamento/2026/01-JANEIRO/30 pt2.jpg"] },

            
            { data: "26/02/2026", captura: ["capturas/Unidade 2/Acabamento/2026/02 FEVEREIRO/26pt1.jpeg", "capturas/Unidade 2/Acabamento/2026/02 FEVEREIRO/26pt2.jpeg"] },

            
            { data: "31/03/2026", captura: ["capturas/Unidade 2/Acabamento/2026/03-MARÇO/31 Pt1.jpg", "capturas/Unidade 2/Acabamento/2026/03-MARÇO/31 Pt2.jpg"] },

            
            { data: "30/04/2026", captura: ["capturas/Unidade 2/Acabamento/2026/04-ABRIL/30 PT01.jpg", "capturas/Unidade 2/Acabamento/2026/04-ABRIL/30 PT02.jpg"] },

            
            { data: "29/05/2026", captura: ["capturas/Unidade 2/Acabamento/2026/05-MAIO/29 PT1.jpg", "capturas/Unidade 2/Acabamento/2026/05-MAIO/29 PT2.jpg"] },
            
            
            { data: "30/06/2026", captura: ["capturas/Unidade 2/Acabamento/2026/06-JUNHO/30 PT1.jpg", "capturas/Unidade 2/Acabamento/2026/06-JUNHO/30 PT2.jpg"] },
            
            
            { data: "31/08/2026", captura: ["capturas/Unidade 2/Acabamento/2026/08-AGOSTO/31.pt1.jpeg", "capturas/Unidade 2/Acabamento/2026/08-AGOSTO/31.pt2.jpeg"] },
            
            
            { data: "30/09/2026", captura: ["capturas/Unidade 2/Acabamento/2026/09-SETEMBRO/30-pt1.jpg", "capturas/Unidade 2/Acabamento/2026/09-SETEMBRO/30-pt2.jpg"] },
            

            { data: "01/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/01-PT1.JPG", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/01-PT2.JPG"] },
            { data: "02/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/02-PT1.JPG", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/02-PT2.JPG"] },
            { data: "05/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/05-PT1.JPG", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/05-PT2.JPG"] },
            { data: "06/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/06-PT1.JPG", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/06-PT2.JPG"] },
            { data: "08/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/08-PT1.JPG", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/08-PT2.JPG"] },
            { data: "13/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/13-PT1.JPG", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/13-PT2.JPG"] },
            { data: "14/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/14-PT1.JPG", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/14-PT2.JPG"] },
            { data: "15/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/15-PT1.JPG", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/15-PT2.JPG"] },
            { data: "16/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/16-PT1.JPG", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/16-PT2.JPG"] },
            { data: "19/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/19-PT1.JPG", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/19-PT2.JPG"] },
            { data: "20/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/20 PT1.jpeg", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/20 PT2.jpeg"] },
            { data: "21/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/21 PT1...jpeg","capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/21 PT2...jpeg"] },
            { data: "22/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/22 PT1...jpeg", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/22 PT2...jpeg"] },
            { data: "23/10/2026", captura: ["capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/23 PT1.jpeg", "capturas/Unidade 2/Acabamento/2026/10-OUTUBRO/23 PT2.jpeg"] },
            


            
            // { data: "", captura: ["", ""] },


           
        ],
    },

    UA3: {

        Traçador: [

            
            { data: "19/12/2025", captura: ["capturas/Unidade 3/Usinagem/2025/12-DEZEMBRO/19.jpg"] },

            
            { data: "30/01/2026", captura: ["capturas/Unidade 3/Usinagem/2026/01-JANEIRO/30.jpg"] },
            
            
            { data: "26/02/2026", captura: ["capturas/Unidade 3/Usinagem/2026/02-FEVEREIRO/26.jpg"] }, 

            
            { data: "31/03/2026", captura: ["capturas/Unidade 3/Usinagem/2026/03-MARÇO/31.jpg"] },

            
            { data: "30/04/2026", captura: ["capturas/Unidade 3/Usinagem/2026/04-ABRIL/30.jpg"] }, 

            
            { data: "29/05/2026", captura: ["capturas/Unidade 3/Usinagem/2026/05-MAIO/29.jpg"] }, 

            
            { data: "30/06/2026", captura: ["capturas/Unidade 3/Usinagem/2026/06-JUNHO/30.JPG"] }, 

            
            { data: "31/07/2026", captura: ["capturas/Unidade 3/Usinagem/2026/07-JULHO/31.JPG"] }, 
            
            
            { data: "31/08/2026", captura: ["capturas/Unidade 3/Usinagem/2026/08-AGOSTO/31.jpg"] }, 
            
            
            { data: "30/09/2026", captura: ["capturas/Unidade 3/Usinagem/2026/09-SETEMBRO/30.JPG"] }, 

            
            { data: "01/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/01.JPG"] }, 
            { data: "02/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/02.JPG"] }, 
            { data: "05/10/2025", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/05.JPG"] }, 
            { data: "06/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/06.JPG"] }, 
            { data: "07/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/07.JPG"] }, 
            { data: "08/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/08.jpg"] }, 
            { data: "13/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/13.jpg"] }, 
            { data: "14/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/14.jpg"] }, 
            { data: "15/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/15.jpg"] }, 
            { data: "16/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/16.jpg"] }, 
            { data: "19/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/19.jpg"] }, 
            { data: "20/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/20.jpg"] }, 
            { data: "21/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/21.jpg"] }, 
            { data: "22/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/22.jpg"] }, 
            { data: "23/10/2026", captura: ["capturas/Unidade 3/Usinagem/2026/10-OUTUBRO/23.jpg"] }, 

            
            
            
            // { data: "", captura: [""] }, 
            // { data: "", captura: [""] },
        ],
    },

    UA4: {
        Usinagem: [
          
           
            { data: "31/08/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Usinagem/08 AGOSTO/31.jpeg"] },

            
            { data: "20/10/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Usinagem/10 OUTUBRO/20.jpeg"] },
            { data: "21/10/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Usinagem/10 OUTUBRO/21.jpeg"] },
            { data: "22/10/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Usinagem/10 OUTUBRO/22.jpeg"] },
            { data: "23/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 4/OUTUBRO/23.jpeg"] },

            // { data: "", captura: [""] },


        ],

        P: [
           
            
            
            
           

            






        ],
    },

    UA5: {
        Usinagem: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],

        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    // Metas de produção

    MU1: {
        lista_acab1: [

            // { data: "", captura: ["", "", "", "", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", "", "", "", ""] },
        ],

        cg_mq1: [

            { data: "03/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/3.jpeg"] },
            { data: "04/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/4.jpeg"] },
            { data: "05/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/5.jpeg"] },
            { data: "06/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/6.jpeg"] },
            { data: "07/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/7.jpeg"] },
            { data: "10/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/10.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/11.jpeg"] },
            { data: "12/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/12.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/13.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/14.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/17.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/18.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/19.jpeg"] },
            { data: "20/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/20.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/21.jpeg"] },
            { data: "24/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/24.jpeg"] },
            { data: "25/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/25.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/26.jpeg"] },
            { data: "27/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/27.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/28.jpeg"] },
            { data: "01/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/1.jpeg"] },
            { data: "02/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/2.jpeg"] },
            { data: "04/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/4.jpeg"] },
            { data: "05/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/5.jpeg"] },
            { data: "08/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/8.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/9.jpeg"] },
            { data: "14/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/14.jpeg"] },
            { data: "15/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/15.jpeg"] },
            { data: "16/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/16.jpeg"] },
            { data: "24/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/24.jpeg"] },
            { data: "25/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/25.jpeg"] },
            { data: "26/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/26.jpeg"] },
            { data: "29/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/29.jpeg"] },
            { data: "30/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/30.jpeg"] },

            { data: "01/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/1.jpeg"] },
            { data: "02/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/2.jpeg"] },
            { data: "05/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/5.jpeg"] },
            { data: "06/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/6.jpeg"] },
            { data: "07/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/7.jpeg"] },
            { data: "08/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/8.jpeg"] },
            { data: "09/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/9.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/12.jpeg"] },
            { data: "13/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/13.jpeg"] },
            { data: "14/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/14.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/20.jpeg"] },
            { data: "21/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/21.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/22.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/23.jpeg"] },
            { data: "26/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/26.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/27.jpeg"] },
            { data: "28/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/28.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/29.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/30.jpeg"] },

            { data: "02/09/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/9- Setembro/2.jpeg"] },
            { data: "03/09/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/9- Setembro/3.jpeg"] },
            { data: "04/09/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/9- Setembro/4.jpeg"] },
            { data: "05/09/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/9- Setembro/5.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/9- Setembro/6.jpeg"] },
            { data: "09/09/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/9- Setembro/9.jpeg"] },
            { data: "10/09/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/9- Setembro/10.jpeg"] },
            { data: "11/09/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/9- Setembro/11.jpeg"] },
            { data: "12/09/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/9- Setembro/12.jpeg"] },

            { data: "04/12/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/12-Dezembro/04-12 unid 01.jpg"] },
            { data: "05/12/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/12-Dezembro/05-12 unid 01.jpg"] },
            { data: "06/12/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/12-Dezembro/06-12 unid 01.jpg"] },



            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        plan_un1: [
            { data: "25/01/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_1.jpeg"] },
            { data: "02/02/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_2.jpg"] },
            { data: "07/02/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_3.jpg"] },
            { data: "21/02/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_4.jpg"] },
            { data: "28/02/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_5.jpg"] },
            { data: "06/03/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_6.jpeg"] },
            { data: "15/03/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_7.jpeg"] },
            { data: "20/03/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_8.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_9.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_10.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_11.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_12.jpeg"] },
            { data: "18/04/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_13.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_14.jpeg"] },
            { data: "02/05/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_15.jpeg"] },
            { data: "08/05/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_16.jpeg"] },
            { data: "03/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_17.jpeg"] },
            { data: "04/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_18.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_19.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_20.jpeg"] },
            { data: "18/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_21.jpeg"] },
            { data: "24/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_22.jpeg"] },
            { data: "29/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_23.jpeg"] },
            { data: "05/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_24.jpeg"] },
            { data: "07/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_25.jpeg"] },
            { data: "14/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_26.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_27.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_28.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_29.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_30.jpeg"] },
            { data: "05/09/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_31.jpeg"] },
            { data: "09/09/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_32.jpeg"] },
            { data: "04/12/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planej -06.jpg"] },

            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],
    },

    MU2: {
        cg_mq_acab: [

            // { data: "", captura: ["", "", ""] },
            // { data: "", captura: ["", "", ""] },
        ],

        cg_mq_emba: [

            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        cg_mq_esto: [

            // { data: "", captura: [""] },
        ],

        quadroMetas: [

            { data: "29/04/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/4- Abril/29.png"] },
            { data: "30/04/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/4- Abril/30.png"] },
            { data: "02/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/2.png"] },
            { data: "07/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/7.png"] },
            { data: "09/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/9.png"] },
            { data: "10/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/10.png"] },
            { data: "13/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/13.png"] },
            { data: "14/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/14.png"] },
            { data: "15/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/15.png"] },
            { data: "16/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/16.png"] },
            { data: "20/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/20.png"] },
            { data: "21/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/21.png"] },
            { data: "22/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/22.png"] },
            { data: "30/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/30.png"] },

            { data: "05/06/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/6- Junho/5.png"] },
            { data: "06/06/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/6- Junho/6.png"] },
            { data: "10/06/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/6- Junho/10.png"] },
            { data: "11/06/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/6- Junho/11.png"] },

            { data: "26/11/2025", captura: ["capturas/Metas produção/Unidade 2/2025/METAS DO QUADRO/26.jPEG"] },

            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],
    },

    MU3: {
        cg_mq3: [

            // { data: "", captura: [""] },
        ],
    },

    MU4: {
        cg_mq4: [

            { data: "05/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/3-pt1.jpeg"] },
            { data: "04/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/4-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/4-pt2.jpeg"] },
            { data: "05/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/5-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/5-pt2.jpeg"] },
            { data: "06/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/6-pt1.jpeg"] },
            { data: "07/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/7-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/7-pt2.jpeg"] },
            { data: "10/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/10-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/10-pt2.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/11-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/11-pt2.jpeg"] },
            { data: "12/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/12-pt1.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/13-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/13-pt2.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/14-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/14-pt2.jpeg"] },
            { data: "15/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/15-pt1.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/17-pt1.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/18-pt1.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/19-pt1.jpeg"] },
            { data: "20/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/20-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/20-pt2.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/21-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/21-pt2.jpeg"] },
            { data: "24/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/24-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/24-pt2.jpeg"] },
            { data: "25/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/25-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/25-pt2.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/26-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/26-pt2.jpeg"] },
            { data: "27/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/27-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/27-pt2.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/28-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/28-pt2.jpeg"] },

            { data: "04/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/4-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/4-pt2.jpeg"] },
            { data: "05/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/5-pt1.jpeg"] },
            { data: "08/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/8-pt1.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/9-pt1.jpeg"] },
            { data: "10/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/10-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/10-pt2.jpeg"] },
            { data: "11/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/11-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/11-pt2.jpeg"] },
            { data: "15/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/15-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/15-pt2.jpeg"] },
            { data: "16/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/16-pt1.jpeg"] },
            { data: "17/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/17-pt1.jpeg"] },
            { data: "18/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/18-pt1.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/19-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/19-pt2.jpeg"] },
            { data: "22/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/22-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/22-pt2.jpeg"] },
            { data: "23/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/23-pt1.jpeg"] },
            { data: "24/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/24-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/24-pt2.jpeg"] },
            { data: "25/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/25-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/25-pt2.jpeg"] },
            { data: "26/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/26-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/26-pt2.jpeg"] },
            { data: "29/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/29-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/29-pt2.jpeg"] },
            { data: "30/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/30-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/30-pt2.jpeg"] },

            { data: "01/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/1-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/1-pt2.jpeg"] },
            { data: "02/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/2-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/2-pt2.jpeg"] },
            { data: "05/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/5-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/5-pt2.jpeg"] },
            { data: "06/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/6-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/6-pt2.jpeg"] },
            { data: "07/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/7-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/7-pt2.jpeg"] },
            { data: "08/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/8-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/8-pt2.jpeg"] },
            { data: "09/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/9-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/9-pt2.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/12-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/12-pt2.jpeg"] },
            { data: "13/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/13-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/13-pt2.jpeg"] },
            { data: "14/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/14-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/14-pt2.jpeg"] },
            { data: "15/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/15-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/15-pt2.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/16-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/16-pt2.jpeg"] },
            { data: "19/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/19-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/19-pt2.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/20-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/20-pt2.jpeg"] },
            { data: "21/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/21-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/21-pt2.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/22-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/22-pt2.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/23-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/23-pt2.jpeg"] },
            { data: "26/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/26-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/26-pt2.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/27-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/27-pt2.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/28-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/28-pt2.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/29-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/29-pt2.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/30-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/30-pt2.jpeg"] },

            { data: "02/09/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/2-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/2-pt2.jpeg"] },
            { data: "03/09/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/3-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/3-pt2.jpeg"] },
            { data: "04/09/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/4-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/4-pt2.jpeg"] },
            { data: "05/09/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/5-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/5-pt2.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/6-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/6-pt2.jpeg"] },
            { data: "09/09/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/9-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/9-pt2.jpeg"] },
            { data: "12/09/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/12-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/12-pt2.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/13-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/13-pt2.jpeg"] },
            { data: "16/09/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/16-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/9- Setembro/16-pt2.jpeg"] },


            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    MU5: {
        cg_mq5: [

            // { data: "", captura: ["",] },
        ],
    },

    // Tempo parado:

    TP1: {
        CNC_1: [
            { data: "30/11/2023", captura: ["capturas/Unidade 1/Tempo_parado/11- Novembro/tp_un1-s4-1.png", "capturas/Unidade 1/Tempo_parado/11- Novembro/tp_un1-s4-2.png", "capturas/Unidade 1/Tempo_parado/11- Novembro/tp_un1-s4-3.png", "capturas/Unidade 1/Tempo_parado/11- Novembro/tp_un1-s4-4.png"] },

            { data: "09/12/2023", captura: ["capturas/Unidade 1/Tempo_parado/12- Dezembro/s2-pt1.png", "capturas/Unidade 1/Tempo_parado/12- Dezembro/s2-pt2.png", "capturas/Unidade 1/Tempo_parado/12- Dezembro/s2-pt3.png", "capturas/Unidade 1/Tempo_parado/12- Dezembro/s2-pt4.png"] },

            { data: "20/01/2024", captura: ["capturas/Unidade 1/Tempo_parado/2024/1- Janeiro/20-pt-1.png", "capturas/Unidade 1/Tempo_parado/2024/1- Janeiro/20-pt-2.png"] },

            { data: "19/03/2024", captura: ["capturas/Unidade 1/Tempo_parado/2024/3- Março/s2/1.png", "capturas/Unidade 1/Tempo_parado/2024/3- Março/s2/2.png", "capturas/Unidade 1/Tempo_parado/2024/3- Março/s2/3.png", "capturas/Unidade 1/Tempo_parado/2024/3- Março/s2/4.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 1/Tempo_parado/2024/4- Abril/sem5-pt1.png", "capturas/Unidade 1/Tempo_parado/2024/4- Abril/sem5-pt2.png", "capturas/Unidade 1/Tempo_parado/2024/4- Abril/sem5-pt3.png", "capturas/Unidade 1/Tempo_parado/2024/4- Abril/sem5-pt4.png"] },

            { data: "03/05/2024", captura: ["capturas/Unidade 1/Tempo_parado/2024/5- Maio/sem1-pt1.png", "capturas/Unidade 1/Tempo_parado/2024/5- Maio/sem1-pt2.png", "capturas/Unidade 1/Tempo_parado/2024/5- Maio/sem1-pt3.png", "capturas/Unidade 1/Tempo_parado/2024/5- Maio/sem1-pt4.png"] },
            { data: "13/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/TempoParado/sem2-pt1.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem2-pt2.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem2-pt3.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem2-pt4.png"] },
            { data: "20/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/TempoParado/sem3-pt1.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem3-pt2.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem3-pt3.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem3-pt4.png"] },
            { data: "24/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/TempoParado/sem4-pt1.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem4-pt2.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem4-pt3.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem4-pt4.png"] },
            { data: "16/08/2024", captura: ["capturas/Unidade 1/2024/8- Agosto/TempoParado/SEM-3/1.png", "capturas/Unidade 1/2024/8- Agosto/TempoParado/SEM-3/2.png", "capturas/Unidade 1/2024/8- Agosto/TempoParado/SEM-3/3.png", "capturas/Unidade 1/2024/8- Agosto/TempoParado/SEM-3/4.png"] },


            // { data: "", captura: ["", "", "", ""] },
            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    TP2: {
        CNC_2: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Tempo_parado/11- Novembro/s4_1.png", "capturas/Unidade 2/Tempo_parado/11- Novembro/s4_2.png", "capturas/Unidade 2/Tempo_parado/11- Novembro/s4_3.png", "capturas/Unidade 2/Tempo_parado/11- Novembro/s4_4.png", "capturas/Unidade 2/Tempo_parado/11- Novembro/s4_5.png", "capturas/Unidade 2/Tempo_parado/11- Novembro/s4_6.png", "capturas/Unidade 2/Tempo_parado/11- Novembro/s4_7.png"] },

            { data: "09/12/2023", captura: ["capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt1.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt2.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt3.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt4.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt5.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt6.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt7.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt8.png"] },

            { data: "20/01/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt7.png"] },

            { data: "29/04/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt9.png"] },

            { data: "03/05/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt9.png"] },
            { data: "13/05/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt8.png"] },
            { data: "20/05/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt9.png"] },
            { data: "30/05/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt9.png"] },
            { data: "03/06/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt9.png"] },
            { data: "05/06/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt9.png"] },
            { data: "13/06/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt9.png"] },
            { data: "26/06/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt9.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt10.png"] },
            { data: "03/07/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt8.png"] },
            { data: "12/08/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-2/1.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-2/2.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-2/3.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-2/4.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-2/5.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-2/6.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-2/7.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-2/8.png"] },
            { data: "16/08/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-3/1.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-3/2.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-3/3.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-3/4.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-3/5.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-3/6.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-3/7.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-3/8.png"] },
            { data: "23/08/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-4/1.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-4/2.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-4/3.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-4/4.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-4/5.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-4/6.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-4/7.png", "capturas/Unidade 2/Tempo_parado/2024/8- Agosto/SEM-4/8.png"] },


            // { data: "", captura: ["", "", "", "", "", "", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", "", "", "", "", "", ""] },
        ],

        Usinagem: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    TP3: {
        Prensas: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    TP4: {
        Gabianni: [
            { data: "20/11/2023", captura: ["capturas/Unidade 4/Tempo_parado/11- Novembro/20-25.png",] },
            { data: "18/12/2023", captura: ["capturas/Unidade 4/Tempo_parado/12 Dezembro/18-12.png"] },

            { data: "26/01/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/1- Janeiro/15-01 à 26-01.png"] },
            { data: "21/02/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/2- Fevereiro/Seccionador21.png"] },
            { data: "28/03/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/3- Março/28 gabianne março.jpg"] },
            { data: "30/04/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/4- Abril/GABIANNE.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/5- Maio/maio gabianne.jpg"] },
            { data: "30/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/GABIANNE.jpg"] },
            { data: "31/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/Gabianne julho.jpeg"] },
            { data: "31/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/gabianne.jpeg"] },
            { data: "30/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/09 MÊS GABIANNE.jpeg"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/gabianne  outubro.jpg"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/Novembro/gabianne.jpg"] },

            { data: "18/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/gabianne dezembro.jpeg"] },
            { data: "31/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/jan gabianne.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/GABIANE FEV.jpeg"] },
           
            { data: "31/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/gabianne março.jpeg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/GABBIANE ABRIL.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/GABIANNE.jpg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/30 gabianne.jpg"] },
            { data: "31/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/GABIANNE JULHO.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/AGOSTO/GABIANNE.jpg"] },
            { data: "30/09/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/SETEMBRO/gabianne.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/GABIANNE.jpg"] },  
            
            { data: "29/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/GABIANNE NOV.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/GABBIANNE.jpg"] },
            { data: "30/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/GABBIANE.jpg"] },
            { data: "27/02/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/FEVEREIRO/27 gabianne.jpg"] },
            { data: "31/03/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/MARÇO/31 GABBIANE.jpg"] },
            { data: "30/04/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/ABRIL/30 GABBIANE.jpg"] },
            
            { data: "29/05/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/MAIO/SECCIONADORA MAIO.jpg"] },
            { data: "30/06/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/JUNHO/GABIANNE.jpg"] },
            { data: "31/07/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/JULHO/GABBIANE.jpeg"] },
            { data: "31/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/gabbiane.jpeg"] },
            { data: "30/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/GABIANNE.jpeg"] },
           


            
            // { data: "", captura: [""] },




        ],

        Prensas: [

          
            
        
           
           
           
            
            { data: "04/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/AGOSTO/04 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/AGOSTO/04 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/AGOSTO/04 HOME.jpeg"] },
            { data: "05/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/AGOSTO/05 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/AGOSTO/05 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/AGOSTO/05 HOME.jpeg"] },
            { data: "06/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/AGOSTO/06 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/AGOSTO/06 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/AGOSTO/06 MAQUIMOVEL.jpeg"] },
            { data: "07/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/AGOSTO/07 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/AGOSTO/07 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/AGOSTO/07 MAQUIMOVEL.jpeg"] },
            { data: "10/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/AGOSTO/10 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/AGOSTO/10 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/AGOSTO/10 MAQUIMOVEL.jpeg"] },
            { data: "11/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/11 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/11 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/11 HOME.jpeg"] },
            { data: "12/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/12 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/12 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/12 HOME.jpeg"] },
            { data: "13/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/13 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/13 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/13 MAQUIMOVEL.jpeg"] },
            { data: "14/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/14 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/14 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/14 MAQUIMOVEL.jpeg"] },
            { data: "17/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/17 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/14 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/17 HOME.jpeg"] },
            { data: "18/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/18 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/18 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/18 HOME.jpeg"] },
            { data: "19/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/19 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/19 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/19 MAQUIMOVEL.jpeg"] },
            { data: "20/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/20 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/20 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/20 MAQUIMOVEL.jpeg"] },
            { data: "21/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/21 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/21 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/21 MAQUIMOVEL.jpeg"] },
            { data: "24/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/24 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/24 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/24 MAQUIMOVEL.jpeg"] },
            { data: "25/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/25 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/25 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/25 MAQUIMOVEL.jpeg"] },
            { data: "26/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/26 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/26 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/26 MAQUIMOVEL.jpeg"] },
            { data: "27/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/27 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/27 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/27 MAQUIMOVEL.jpeg"] },
            { data: "28/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/28 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/28 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/28 MAQUIMOVEL.jpeg"] },
            { data: "31/08/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/31 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/31 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/08 AGOSTO/31 MAQUIMOVEL.jpeg"] },
            { data: "01/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/01 MAQ.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/01 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/01 HOME.jpeg"] },
            { data: "02/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/02 MAQ.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/02 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/02 HOME.jpeg"] },
            { data: "03/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/03 MAQ.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/03 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/03 HOME.jpeg"] },
            { data: "04/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/04 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/04 MAQ.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/04 HOME.jpeg"] },
            { data: "08/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/08 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/08 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/08 MAQ.jpeg"] },
            { data: "09/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/09 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/09 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/09 MAQ.jpeg"] },
            { data: "10/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/10 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/10 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/10 MAQ.jpeg"] },
            { data: "11/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/11 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/11 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/11 MAQ.jpeg"] },
            { data: "14/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/14 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/14 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/14 MAQ.jpeg"] },
            { data: "15/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/15 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/15 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/15 MAQ.jpeg"] },
            { data: "16/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/16 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/16 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/16 MAQ.jpeg"] },
            { data: "17/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/17  ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/17 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/17 MAQ.jpeg"] },
            { data: "18/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/18 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/18 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/18 MAQ.jpeg"] },
            { data: "21/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/21 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/21 MAQ.jpeg", ""] },
            { data: "22/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/22 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/22 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/22 MAQ.jpeg"] },
            { data: "23/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/23 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/23 MAQ.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/24 HOME.jpeg"] },
            { data: "24/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/24 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/24 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/24 MAQ.jpeg"] },
            { data: "25/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/25 MAQ.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/25 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/25 HOME.jpeg"] },
            { data: "28/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/28 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/28 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/28 MAQ.jpeg"] },
            { data: "29/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/29 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/29 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/29 MAQ.jpeg"] },
            { data: "30/09/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 SET/30 ITAL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/30 MAQ.jpeg", "capturas/Unidade 4/Tempo_parado/2026/09 SET/30 HOME.jpeg"] },
            { data: "01/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/01 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/01 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/01 HOME.jpeg"] },
            { data: "02/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/02 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/02 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/02 HOME.jpeg"] },
            { data: "03/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/03 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/03 HOME.jpeg"] },
            { data: "05/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/05 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/05 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/05 HOME.jpeg"] },
            { data: "06/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/06 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/06 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/06 HOME.jpeg"] },
            { data: "07/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/07 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/07 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/07 HOME.jpeg"] },
            { data: "08/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/08 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/08 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/08 HOME.jpeg"] },
            { data: "13/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/13 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/13 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/13 MAQUIMOVEL.jpeg"] },
            { data: "14/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/14 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/14 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/14 MAQUIMOVEL.jpeg"] },
            { data: "15/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/15 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/15 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/15 MAQUIMOVEL.jpeg"] },
            { data: "16/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/16 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/16 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/16 MAQUIMOVEL.jpeg"] },
            { data: "19/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/19 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/19 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/19 MAQUIMOVEL.jpeg"] },
            { data: "20/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/20 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/20 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/20 MAQUIMOVEL.jpeg"] },
            { data: "21/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/21 HOME.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/21 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/21 MAQUIMOVEL.jpeg"] },
            { data: "22/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/22 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/22 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/27 HOME.jpeg"] },
            { data: "23/10/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/10 OUT/23 ITALPRESSE.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/23 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2026/10 OUT/23HOME.jpeg"] },

            // { data: "", captura: ["", "", ""] },


        ],
    },

    TP5: {
        Gabianni: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],

        Prensas: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    // Retrabalhos:

    UR1: {
        _: [
           
          


            // { data: "", captura: ["", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", ""] },


        ],

        Cab_fundo: [
         
           
            { data: "09/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/09 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/09 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/09 pt03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/09 pt04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/09 g.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/16 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/16 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/16 pt03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/16 pt04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/16 g.jpg"] },
            { data: "23/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/23 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/23 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/23 pt03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/23 pt04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/24 g.jpg"] },
            { data: "30/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/30 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/30 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/30 pt03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/30 pt04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/30 g.jpg"] },
            
            { data: "06/02/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/06 pt 01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/06 pt 02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/06 pt 03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/06 pt 04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/06g.jpeg"] },
            { data: "11/02/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/11 pt01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/11 pt02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/11 pt03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/11 pt04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/11 g.jpg"] },
            { data: "26/02/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/26 pt01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/26 pt02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/26 pt03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/26 pt04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/FEVEREIRO/26 g.jpg"] },
            { data: "06/03/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/06 PT 01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/06 PT 02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/06 PT 03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/06 PT 04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/06 G.jpg"] },
            { data: "14/03/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/14 PT 01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/14 PT 02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/14 PT 03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/14 PT 04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/14 G.jpg"] },
            { data: "20/03/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/20 PT 01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/20 PT 02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/20 PT 03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/20 PT 04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/20 G.jpg"] },
            { data: "27/03/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/27 PT 01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/27 PT 02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/27 PT 03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/27 PT 04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MARÇO/27 G.jpg"] },
            { data: "02/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/02 01PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/02 02PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/02 03PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/02 04PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/02 G.jpg"] },
            { data: "11/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/11 01PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/11 02PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/11 03PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/11 04PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/11 G.jpg"] },
            { data: "17/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/17 01PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/17 02PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/17 03PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/17 04PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/17 G.jpg"] },
            { data: "25/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/25 01PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/25 02PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/25 03PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/25 04PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/25 G.jpg"] },
            { data: "30/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/30 01PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/30 02PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/30 03PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/30 04PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/ABRIL/30 G.jpg"] },
            { data: "08/05/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/08 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/08 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/08 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/08 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/08 G.jpg"] },
            { data: "15/05/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/15 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/15 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/15 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/15 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/15 G.jpg"] },
            { data: "22/05/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/22 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/22 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/22 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/22 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/22 G.jpg"] },
            { data: "29/05/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/29 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/29 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/29 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/29 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/MAIO/29 G.jpg"] },
            { data: "04/06/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/04 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/04 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/04 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/04 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/04 G.jpg"] },
            { data: "12/06/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/12 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/12 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/12 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/12 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/12 G.jpg"] },
            { data: "19/06/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/19 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/19 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/19 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/19 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/12 G.jpg"] },
            { data: "27/06/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/27 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/27 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/27 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/27 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JUNHO/27 G.jpg"] },
            { data: "02/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/02 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/02 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/02 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/02 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/02 G.jpg"] },
            { data: "10/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/10 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/10 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/10 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/10 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/10 G.jpg"] },
            { data: "17/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/17 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/17 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/17 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/17 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/17 G.jpg"] },
            { data: "24/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/24 pt01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/24 pt02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/24 pt03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/24 pt04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/24 g.jpeg"] },
            { data: "31/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/31 pt01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/31 pt02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/31 pt03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/31 pt04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/JULHO/31 g.jpeg"] },
            { data: "07/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/07 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/07 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/07 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/07 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/07 G.jpeg"] },
            { data: "14/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/14 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/14 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/14 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/14 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/14 G.jpeg"] },
            { data: "21/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/21 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/21 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/21 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/21 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/21 g.jpeg"] },
            { data: "28/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/28 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/28 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/28 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/28 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/AGOSTO/28 g.jpeg"] },
            { data: "04/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/04 PT 01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/04 PT 02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/04 PT 03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/04 PT 04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/04 G.jpeg"] },
            { data: "11/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/11 PT 01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/11 PT 02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/11 PT 03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/11 PT 04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/11 g.jpeg"] },
            { data: "18/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/18 PT 01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/18 PT 02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/18 PT 03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/18 PT 04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/18 G.jpeg"] },
            { data: "25/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/25 PT 01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/25 PT 02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/25 PT 03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/25 PT 04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/SETEMBRO/25 g.jpeg"] },
            { data: "02/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/02 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/02 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/02 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/02 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/02 G.jpeg"] },
            { data: "08/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/08 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/08 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/08 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/08 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/08 G.jpeg"] },
            { data: "16/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/16 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/16 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/16 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/16 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/16 g.jpeg"] },
            { data: "23/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/23 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/23 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/23 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/23 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Cab.Fundo/OUTUBRO/23 G.jpeg"] },



            // { data: "", captura: ["", "", "", "", ""] },


        ],

        exp1: [
            
           
          { data: "11/02/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/FEVEREIRO/11 pt01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/FEVEREIRO/11 pt02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/FEVEREIRO/11 pt03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/FEVEREIRO/11 pt04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/FEVEREIRO/11g.jpg"] },
          { data: "26/02/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/FEVEREIRO/26 pt01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/FEVEREIRO/26 pt02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/FEVEREIRO/26 pt03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/FEVEREIRO/26 pt04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/FEVEREIRO/26 g.jpg"] },
          { data: "06/03/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/06 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/06 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/06 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/06 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/06 G.jpg"] },
          { data: "14/03/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/14 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/14 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/14 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/14 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/14 G.jpg"] },
          { data: "20/03/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/20 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/20 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/20 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/20 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/20 G.jpg"] },
          { data: "27/03/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/27 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/27 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/27 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/27 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MARÇO/27 G.jpg"] },
          { data: "02/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/02 1PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/02 2PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/02 3PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/02 4PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/02 G.jpg"] },
          { data: "11/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/11 1PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/11 2PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/11 3PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/11 4PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/11 g.jpg"] },
          { data: "17/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/17 1PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/17 2PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/17 3PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/17 4PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/17 G.jpg"] },
          { data: "25/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/25 1PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/25 2PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/25 3PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/25 4PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/25 G.jpg"] },
          { data: "30/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/30 1PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/30 2PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/30 3PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/30 4PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/ABRIL/30G.jpg"] },
          { data: "08/05/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/08 PT1.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/08 PT2.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/08 PT3.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/08 PT4.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/08 G.jpg"] },
          { data: "15/05/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/15 PT1.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/15 PT2.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/15 PT3.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/15 PT4.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/15G.jpg"] },
          { data: "22/05/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/22 PT1.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/22 PT2.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/22 PT3.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/22 PT4.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/22 G.jpg"] },
          { data: "29/05/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/29 PT1.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/29 PT2.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/29 PT3.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/29 PT4.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/MAIO/29 G.jpg"] },
          { data: "04/06/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/04 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/04 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/04 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/04 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/4G.jpg"] },
          { data: "12/06/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/12 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/12 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/12 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/12 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/12G.jpg"] },
          { data: "19/06/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/19 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/19 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/19 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/19 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/19 G.jpg"] },
          { data: "27/06/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/26 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/26 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/26 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/26 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JUNHO/26 G.jpg"] },
          { data: "02/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/02 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/02 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/02 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/02 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/02 G.jpg"] },
          { data: "10/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/10 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/10 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/10 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/10 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/10 G.jpg"] },
          { data: "17/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/17 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/17 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/17 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/17 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/17 G.jpg"] },
          { data: "24/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/24 pt01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/24 pt02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/24 pt03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/24 pt04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/24 g.jpeg"] },
          { data: "31/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/31 pt01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/31 pt02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/31 pt03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/31 pt04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/JULHO/31 g.jpeg"] },
          { data: "07/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/07 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/07 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/07 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/07 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/07 G.jpeg"] },
          { data: "14/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/14 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/14 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/14 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/14 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/14 G.jpeg"] },
          { data: "21/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/21 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/21 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/21 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/21 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/21 g.jpeg"] },
          { data: "28/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/28 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/28 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/28 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/28 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/AGOSTO/28 g.jpeg"] },
          { data: "04/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/04 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/04 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/04 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/04 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/04 G.jpeg"] },
          { data: "11/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/11 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/11 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/11 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/11 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/11 g.jpeg"] },
          { data: "18/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/18 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/18 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/18 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/18 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/18 g.jpeg"] },
          { data: "25/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/25 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/25 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/25 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/25 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/SETEMBRO/25 g.jpeg"] },
          { data: "02/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/02 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/02 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/02 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/02 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/02 G.jpeg"] },
          { data: "08/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/08 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/08 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/08 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/08 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/8 g.jpeg"] },
          { data: "16/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/16 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/16 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/16 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/16 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/16 g.jpeg"] },
          { data: "23/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/23 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/23 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/23 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/23 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Expedição/OUTUBRO/23 G.jpeg"] },


           // { data: "", captura: ["", "", "", "", ""] },



        ],

        Lix_Osso: [
            
           
            { data: "31/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/31 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/31 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/31 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/31 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/31 g.jpg"] },
           
            { data: "07/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/08 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/08 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/08 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/08 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/8g.jpg"] },
            { data: "11/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/14 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/14 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/14 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/14 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/14-G.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/22 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/22 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/22 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/22 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/22 g.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/29 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/29 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/29 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/29 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Osso/29 g.jpg"] },

            { data: "06/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/06 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/06 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/06 pt03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/06 pt04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/06 g.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/13 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/13 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/13 pt03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/13 pt04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/13 g.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/18 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/18 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/18 pt03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/18 pt04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Osso/18 g.jpg"] },

            { data: "09/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/09 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/09 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/09 pt03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/09 pt04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/09 g.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/16 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/16 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/16 pt03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/16 pt04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/16 g.jpg"] },
            { data: "23/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/23 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/23 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/23 pt03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/23 pt04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/23 g.jpg"] },
            { data: "30/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/30 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/30 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/30 pt03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/30 pt04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Osso/30 g.jpg"] },
           
           { data: "06/02/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/06 pt 01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/06 pt 02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/06 pt 03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/06 pt 04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/06g.jpeg"] },
           { data: "11/02/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/11 pt01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/11 pt02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/11 pt03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/11 pt04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/11 g.jpg"] },
           { data: "26/02/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/26 pt01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/26 pt02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/26 pt03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/26 pt04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/FEVEREIRO/26g.jpg"] },
           { data: "06/03/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/06 PT 01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/06 PT 02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/06 PT 03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/06 PT 04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/06 G.jpg"] },
           { data: "14/03/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/14 PT 01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/14 PT 02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/14 PT 03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/14 PT 04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/14G.jpg"] },
           { data: "20/03/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/20 PT 01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/20 PT 02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/20 PT 03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/20 PT 04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/20 G.jpg"] },
           { data: "27/03/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/27 PT 01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/27 PT 02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/27 PT 03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/27 PT 04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MARÇO/27 G.jpg"] },
           { data: "02/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/02 01PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/02 02PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/02 03PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/02 04PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/02 G.jpg"] },
           { data: "11/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/11 01PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/11 02PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/11 03PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/11 04PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/11 G.jpg"] },
           { data: "17/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/17 01PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/17 02PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/17 03PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/17 04PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/17 g.jpg"] },
           { data: "25/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/25 01PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/25 02PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/25 03PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/25 04PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/25 G.jpg"] },
           { data: "30/04/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/30 01PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/30 02PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/30 03PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/30 04PT.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/ABRIL/30 G.jpg"] },
           { data: "08/05/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/08 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/08 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/08 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/08 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/08 G.jpg"] },
           { data: "15/05/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/15 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/15 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/15 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/15 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/15 G.jpg"] },
           { data: "22/05/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/22 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/22 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/22 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/22 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/22 G.jpg"] },
           { data: "29/05/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/29 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/29 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/29 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/29 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/MAIO/29 G.jpg"] },
           { data: "04/06/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/04 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/04 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/04 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/04 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/04 G.jpg"] },
           { data: "08/06/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/12 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/12 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/12 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/12 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/12 G.jpg"] },
           { data: "19/06/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/19 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/19 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/19 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/19 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/19 G.jpg"] },
           { data: "26/06/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/27 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/27 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/27 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/27 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JUNHO/27 G.jpg"] },
           { data: "02/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Osso/JULHO/02 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 2/Osso/JULHO/02 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 2/Osso/JULHO/02 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 2/Osso/JULHO/02 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 2/Osso/JULHO/02 G.jpg"] },
           { data: "10/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/10 pt01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/10 pt02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/10 pt03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/10 pt04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/10 g.jpg"] },
           { data: "17/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/17 pt01.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/17 pt02.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/17 pt03.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/17 pt04.jpg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/17G.jpg"] },
           { data: "24/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/24 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/24 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/24 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/24 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/24 G.jpeg"] },
           { data: "31/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/31 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/31 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/31 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/31 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/JULHO/31 g.jpeg"] },
           { data: "07/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/07 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/07 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/07 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/07 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/07 G.jpeg"] },
           { data: "14/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/14 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/14 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/14 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/14 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/14 G.jpeg"] },
           { data: "21/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/21 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/21 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/21 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/21 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/21g.jpeg"] },
           { data: "28/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/28 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/28 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/28 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/28 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/AGOSTO/28 g.jpeg"] },
           { data: "04/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/04 PT1.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/04 PT2.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/04 PT3.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/04 PT4.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/04G.jpeg"] },
           { data: "11/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/11 PT1.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/11 PT2.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/11 PT3.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/11 PT4.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/11 g.jpeg"] },
           { data: "18/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/18 PT1.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/18 PT2.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/18 PT3.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/18 PT4.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/18G.jpeg"] },
           { data: "25/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/25 PT1.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/25 PT2.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/25 PT3.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/25 PT4.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/SETEMBRO/25 g.jpeg"] },
           { data: "02/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/02 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/02 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/02 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/02 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/02 G.jpeg"] },
           { data: "08/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/08 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/08 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/08 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/08 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/08G.jpeg"] },
           { data: "16/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/16 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/16 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/16 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/16 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/16 g.jpeg"] },
           { data: "23/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/23 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/23 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/23 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/23 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Osso/OUTUBRO/23 G.jpeg"] },

            // { data: "", captura: ["", "", "", "", ""] },



        ],

        Usinagem: [
            
            { data: "07/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Curvados/AGOSTO/07 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/AGOSTO/07 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/AGOSTO/07 G.jpeg"] },
            { data: "14/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Curvados/AGOSTO/14 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/AGOSTO/14 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/AGOSTO/14 G.jpeg"] },
            { data: "21/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Curvados/AGOSTO/21 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/AGOSTO/21 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/AGOSTO/21 g.jpeg"] },
            { data: "28/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Curvados/AGOSTO/28 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/AGOSTO/28 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/AGOSTO/28 G.jpeg"] },
            { data: "04/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Curvados/SETEMBRO/04 PT 01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/SETEMBRO/04 PT 02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/SETEMBRO/04 G.jpeg"] },
            { data: "11/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Curvados/SETEMBRO/11 PT 01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/SETEMBRO/11 PT 02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/SETEMBRO/11g.jpeg"] },
            { data: "18/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Curvados/SETEMBRO/18 PT 01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/SETEMBRO/18 PT 02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/SETEMBRO/18 G.jpeg"] },
            { data: "25/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Curvados/SETEMBRO/25 PT 01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/SETEMBRO/25 PT 02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/SETEMBRO/25 g.jpeg"] },
            { data: "02/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Curvados/OUTUBRO/02 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/OUTUBRO/02 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/OUTUBRO/02 G.jpeg"] },
            { data: "08/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Curvados/OUTUBRO/08 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/OUTUBRO/08 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/OUTUBRO/08 g.jpeg"] },
            { data: "16/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Curvados/OUTUBRO/16 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/OUTUBRO/16 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Curvados/OUTUBRO/16 g.jpeg"] },
            { data: "23/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 1/Usinagem/OUTUBRO/23 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Usinagem/OUTUBRO/23 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Usinagem/OUTUBRO/23 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Usinagem/OUTUBRO/23 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 1/Usinagem/OUTUBRO/23 G.jpeg"] },


             // { data: "", captura: ["", "", ""] },
           
             
        ],


    UR2: {

 Estofaria: [

          { data: "23/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Estofaria/OUTUBRO/23 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Estofaria/OUTUBRO/23 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Estofaria/OUTUBRO/23 G.jpeg"] },

          
            // { data: "", captura: ["", "", ""] },


        ],

        exp2: [


         { data: "23/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Expedição/OUTUBRO/23 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Expedição/OUTUBRO/23 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Expedição/OUTUBRO/23 G.jpeg"] },   
                  
            
            // { data: "", captura: ["", "", ""] },


            
        ],

        Mont_Osso: [
             
            
            { data: "23/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Osso/OUTUBRO/23 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Osso/OUTUBRO/23 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Osso/OUTUBRO/23 G.jpeg"] },

             // { data: "", captura: ["", "", ""] },


        ],

        Tecido: [
         { data: "", captura: ["", "", "", ""] },

            //    { data: "", captura: ["", "", "", ""] },
            //    { data: "", captura: ["", "", "", ""] },


        ],
        
        Restauração: [
        
        { data: "23/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Restauração/OUTUBRO/23 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Restauração/OUTUBRO/23 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Restauração/OUTUBRO/23 G.jpeg"] },

            // { data: "", captura: ["", "", ""] },
            
        ],

        Ispeção_Qualidade_Fundo: [

      
       { data: "04/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Inspeção de Qualidade/09 SETEMBRO/04 PT 01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Inspeção de Qualidade/09 SETEMBRO/04 PT 02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Inspeção de Qualidade/09 SETEMBRO/04 G.jpeg"] },
       

       // { data: "", captura: ["", "", ""] },


        ],

        Us_un2: [
           
          
           { data: "23/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 2/Usinagem/OUTUBRO/23 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Usinagem/OUTUBRO/23 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Usinagem/OUTUBRO/23 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Usinagem/OUTUBRO/23 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 2/Usinagem/OUTUBRO/23 G.jpeg"] },

            // { data: "", captura: ["", "", "", "", ""] },


        ],
    },

    UR3: {
        Un_3: [
           
 
           { data: "17/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/JULHO/17 PT01.jpg", "capturas/Retrabalhos/2026/Unidade 3/JULHO/17 PT02.jpg", "capturas/Retrabalhos/2026/Unidade 3/JULHO/17 PT03.jpg", "capturas/Retrabalhos/2026/Unidade 3/JULHO/17 PT04.jpg", "capturas/Retrabalhos/2026/Unidade 3/JULHO/17 G.jpg"] },
           { data: "24/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/JULHO/24 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 3/JULHO/24 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 3/JULHO/24 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 3/JULHO/24 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 3/JULHO/24 G.jpeg"] },
           { data: "31/07/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/JULHO/31 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 3/JULHO/31 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 3/JULHO/31 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 3/JULHO/31 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 3/JULHO/31 g.jpeg"] },
           { data: "07/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/AGOSTO/03 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/03 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/03 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/03 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/03 G.jpeg"] },
           { data: "14/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/AGOSTO/14 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/14 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/14 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/14 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/14 G.jpeg"] },
           { data: "21/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/AGOSTO/21 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/21 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/21 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/21 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/21 g.jpeg"] },
           { data: "28/08/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/AGOSTO/28 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/28 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/28 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/28 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 3/AGOSTO/28 g.jpeg"] },
           { data: "04/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/04 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/04 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/04 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/04 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/4G.jpeg"] },
           { data: "11/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/11 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/11 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/11 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/11 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/11 g.jpeg"] },
           { data: "18/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/18 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/18 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/18 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/18 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/18 G.jpeg"] },
           { data: "25/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/25 PT01.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/25 PT02.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/25 PT03.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/25 PT04.jpeg", "capturas/Retrabalhos/2026/Unidade 3/SETEMBRO/25 g.jpeg"] },
           { data: "02/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/02 PT1.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/02 PT2.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/02 PT3.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/02 PT4.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/02 G.jpeg"] },
           { data: "08/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/08 PT1.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/08 PT2.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/08 PT3.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/08 PT4.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/08 g.jpeg"] },
           { data: "16/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/16 PT1.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/16 PT2.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/16 PT3.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/16 PT4.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/16 G.jpeg"] },
           { data: "23/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/23 PT1.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/23 PT2.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/23 PT3.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/23 PT4.jpeg", "capturas/Retrabalhos/2026/Unidade 3/OUTUBRO/23 G.jpeg"] },

           // { data: "", captura: ["", "", "", "", ""] },


        ],





    },

       
    },

    UR4: {
        Un_4: [
          
           { data: "25/09/2026", captura: ["capturas/Retrabalhos/2026/Unidade 4/SETEMBRO/25.jpeg"] },
           { data: "02/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 4/OUTUBRO/02.jpeg"] },
           { data: "08/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 4/OUTUBRO/08.jpeg", "", ""] },
           { data: "12/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 4/OUTUBRO/16.jpeg", "", ""] },
           { data: "23/10/2026", captura: ["capturas/Retrabalhos/2026/Unidade 4/OUTUBRO/23.jpeg", "", ""] },


            // { data: "", captura: ["", "", ""] },

        ],

    },

    UR5: {
        PeG: [
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/ADM/semana3/transporteMotivos.jpg", "capturas/Retrabalhos/2024/7- Julho/ADM/semana3/transporteGrafico.jpeg", "capturas/Retrabalhos/2024/7- Julho/ADM/semana3/pcpMotivos.jpeg", "capturas/Retrabalhos/2024/7- Julho/ADM/semana3/pcpGrafico.png", "capturas/Retrabalhos/2024/7- Julho/ADM/semana3/assistComercialMotivo.png", "capturas/Retrabalhos/2024/7- Julho/ADM/semana3/assistComercialGrafico.png"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/ADM/semana5/transporte-01.jpg", "capturas/Retrabalhos/2024/7- Julho/ADM/semana5/transporteGeral.jpg", "capturas/Retrabalhos/2024/7- Julho/ADM/semana5/pcp-01.jpeg", "capturas/Retrabalhos/2024/7- Julho/ADM/semana5/pcpGrafico.jpeg", "capturas/Retrabalhos/2024/7- Julho/ADM/semana5/programação-01.jpeg", "capturas/Retrabalhos/2024/7- Julho/ADM/semana5/programaçãoGrafico.jpeg", "capturas/Retrabalhos/2024/7- Julho/ADM/semana5/geral.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/ADM/semana1/transporte01png.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana1/transporteGrafico.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana1/pcp01.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana1/pcpGrafico.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana1/compras01.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana1/comprasGrafico.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana1/cadastro01.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana1/cadastroGrafico.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana1/assist.Comercial01.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana1/assist.ComercialGrafico.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana1/graficoGeral1.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/ADM/semana3/transporte1.jpg", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana3/transporteGrafico.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana3/pcp1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana3/pcpGrafico.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana3/compras1.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana3/comprasGrafico.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana3/geral1.png"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/ADM/semana4/transporte01.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana4/transporteGrafico.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana4/pcp01.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana4/pcpGrafico.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana4/1.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/ADM/semana5/assist_comercial_retrabalhos.jpeg", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana5/assist_comercial_producao.png", "capturas/Retrabalhos/2024/8- Agosto/ADM/semana5/1.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/ADM/semana2/Transporte.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana2/TransporteGraficoProdução.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana2/Pcp.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana2/PcpGraficoProdução.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana2/Assistência.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana2/AssistênciaGraficoProdução.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana2/Geral.png"] },
            { data: "12/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/ADM/semana3/Transporte.jpg", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana3/TransporteGraficoProdução.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana3/Pcp.jpeg", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana3/PcpGraficoProdução.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana3/geral.png"] },
            { data: "19/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/ADM/semana4/Pcp.jpeg", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana4/Pcp produção.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana4/Assistência.jpeg", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana4/Assistência produção.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana4/Compras.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana4/Compras produção.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana4/geral.png"] },
            { data: "26/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/ADM/semana5/transporte.jpg", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana5/transporteGrafico.png", "capturas/Retrabalhos/2024/9- Setembro/ADM/semana5/geral.png"] },
            { data: "31/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/ADM/semana5/TRANSPORTE.jpg", "capturas/Retrabalhos/2024/10- Outubro/ADM/semana5/PROD-TRASPORTE.jpg", "capturas/Retrabalhos/2024/10- Outubro/ADM/semana5/PCP.jpg", "capturas/Retrabalhos/2024/10- Outubro/ADM/semana5/PROD.PCP.jpg", "capturas/Retrabalhos/2024/10- Outubro/ADM/semana5/COMPRAS.jpg", "capturas/Retrabalhos/2024/10- Outubro/ADM/semana5/PROD.COMPRAS.jpg", "capturas/Retrabalhos/2024/10- Outubro/ADM/semana5/Geral.jpg"] },

            { data: "07/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/ADM/semana2/01 PT  ASSIS TEC.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana2/02 PT  ASSIS TEC.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana2/01 PT PCP.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana2/02 PT PCP.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana2/01 PT TRASP.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana2/02 PT TRASP.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana2/G GERAL.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/ADM/semana3/trasp pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana3/trasp pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana3/23 g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/almox pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/almox pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/compras pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/compras pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/transporte pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/transporte pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/geral.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/TRANSP 01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/TRANSP 02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/COMP 01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/COMP 02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/ASSIST 01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/ASSIST 02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/GERAL.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/14 assist prt01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/14 assist prt02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/14 compras prt01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/14 compras prt02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/14 pt02 pcp.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/trans prt 01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/trans prt 02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/geral.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/ADM/semana4/TRAP PT1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana4/TRAP PT2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana4/GRAFICO GERAL.jpeg"] },

            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/ADM/semana2/COMPRAS 01.jpg", "capturas/Retrabalhos/2025/JANEIRO/ADM/semana2/COMPRAS 2.jpg", "capturas/Retrabalhos/2025/JANEIRO/ADM/semana2/GERAL 17.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/ADM/semana4/pt01 ass.jpg", "capturas/Retrabalhos/2025/JANEIRO/ADM/semana4/pt02 ass.jpg", "capturas/Retrabalhos/2025/JANEIRO/ADM/semana4/pt01 transporte.jpg", "capturas/Retrabalhos/2025/JANEIRO/ADM/semana4/pt02 transporte.jpg", "capturas/Retrabalhos/2025/JANEIRO/ADM/semana4/geral.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/ADM/semana5/assist pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/ADM/semana5/assist pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/ADM/semana5/transporte pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/ADM/semana5/transporte pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/ADM/semana5/geral.jpg"] },

            { data: "07/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana1/ASSIT. PT1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana1/ASSIT. PT2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana1/COMPRAS. PT1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana1/COMPRAS. PT2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana1/TRANSP. PT1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana1/TRANSP. PT2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana1/GERAL.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana2/asst 1pt.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana2/asst 2pt.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana2/transp 1pt.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana2/transp 2pt.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana2/g geral.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana3/assi pt 01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana3/assi pt 02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana3/trasn pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana3/trasn pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana3/geral.jpg"] },
            { data: "25/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana4/ASSIST TEC PT01.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana4/ASSIST TEC PT02.jpeg" ,"capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana4/TRANS PT 01.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana4/TRANS PT 02.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/ADM/semana4/GERAL.jpeg"] },

            //    { data: "", captura: ["", "", "", ""] },
            //    { data: "", captura: ["", "", "", ""] },
        ],
    },

    // Notas do PQT:

    UP1: {
        Un1: [

            { data: "02/02/2024", captura: ["capturas/PQT/2024/1- Janeiro/un1.jpg", "capturas/PQT/2024/1- Janeiro/un1_page-0001.jpg", "capturas/PQT/2024/1- Janeiro/un1_page-0002.jpg"] },
            { data: "01/04/2024", captura: ["capturas/PQT/2024/3- Março/un1-G.jpeg", "capturas/PQT/2024/3- Março/un1_page-0001.jpg", "capturas/PQT/2024/3- Março/un1_page-0002.jpg", "capturas/PQT/2024/3- Março/un1_page-0003.jpg"] },
            { data: "23/04/2024", captura: ["capturas/PQT/2024/4- Abril/un1.jpeg", "capturas/PQT/2024/4- Abril/un1_page-0001.jpg", "capturas/PQT/2024/4- Abril/un1_page-0002.jpg", "capturas/PQT/2024/4- Abril/un1_page-0003.jpg"] },
            { data: "30/05/2024", captura: ["capturas/PQT/2024/5- Maio/un1.jpeg", "capturas/PQT/2024/5- Maio/UN1nnconform.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/PQT/2024/6- Junho/un1-pt1.jpeg", "capturas/PQT/2024/6- Junho/un1-pt2.jpeg"] },
            { data: "31/07/2024", captura: ["capturas/PQT/2024/7- Julho/conformidadesUnidade1-pt1.jpeg", "capturas/PQT/2024/7- Julho/conformidadesUnidade1-pt2.jpeg", "capturas/PQT/2024/7- Julho/graficoUnidade1.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/PQT/2024/8- Agosto/un1_notas.jpeg", "capturas/PQT/2024/8- Agosto/conformidades_un1_pt1.jpeg", "capturas/PQT/2024/8- Agosto/conformidades_un1_pt2.jpeg"] },
            { data: "01/10/2024", captura: ["capturas/PQT/2024/9- Setembro/unidade1_grafico.jpeg", "capturas/PQT/2024/9- Setembro/unidade1_nao_conformidades_pt1.jpeg", "capturas/PQT/2024/9- Setembro/unidade1_nao_conformidades_pt2.jpeg"] },


            // { data: "", captura: ["", "", ""] },
        ],
    },

    UP2: {
        Un2: [

            { data: "02/02/2024", captura: ["capturas/PQT/2024/1- Janeiro/un2.jpg", "capturas/PQT/2024/1- Janeiro/un2_page-0001.jpg"] },
            { data: "01/04/2024", captura: ["capturas/PQT/2024/3- Março/un2-G.jpeg", "capturas/PQT/2024/3- Março/un2_page-0001.jpg"] },
            { data: "23/04/2024", captura: ["capturas/PQT/2024/4- Abril/un2.jpeg", "capturas/PQT/2024/4- Abril/un2_page-0001.jpg"] },
            { data: "30/05/2024", captura: ["capturas/PQT/2024/5- Maio/un2.jpeg", "capturas/PQT/2024/5- Maio/UN2nnconform.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/PQT/2024/6- Junho/un2-pt1.jpeg", "capturas/PQT/2024/6- Junho/un2-pt2.jpeg", "capturas/PQT/2024/6- Junho/un2-pt3.jpeg"] },
            { data: "31/07/2024", captura: ["capturas/PQT/2024/7- Julho/conformidadesUnidade2-pt1.jpeg", "capturas/PQT/2024/7- Julho/conformidadesUnidade2-pt2.jpeg", "capturas/PQT/2024/7- Julho/graficoUnidade2.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/PQT/2024/8- Agosto/un2_notas.jpeg", "capturas/PQT/2024/8- Agosto/conformidades_un2_pt1.jpeg", "capturas/PQT/2024/8- Agosto/conformidades_un2_pt2.jpeg"] },
            { data: "01/10/2024", captura: ["capturas/PQT/2024/9- Setembro/unidade2_notas.jpeg", "capturas/PQT/2024/9- Setembro/unidade2_grafico.jpeg", "capturas/PQT/2024/9- Setembro/unidade2_nao_conformidades_pt1.jpeg", "capturas/PQT/2024/9- Setembro/unidade2_nao_conformidades_pt2.jpeg"] },


            // { data: "", captura: [""] },
        ],
    },

    UP3: {
        Un3: [

            { data: "02/02/2024", captura: ["capturas/PQT/2024/1- Janeiro/un3.jpg", "capturas/PQT/2024/1- Janeiro/un3_page-0001.jpg"] },
            { data: "01/04/2024", captura: ["capturas/PQT/2024/3- Março/un3-G.jpeg", "capturas/PQT/2024/3- Março/un3_page-0001.jpg"] },
            { data: "23/04/2024", captura: ["capturas/PQT/2024/4- Abril/un3.jpeg", "capturas/PQT/2024/4- Abril/un3_page-0001.jpg"] },
            { data: "30/05/2024", captura: ["capturas/PQT/2024/5- Maio/un3.jpeg", "capturas/PQT/2024/5- Maio/UN3nnconform.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/PQT/2024/6- Junho/un3-pt1.png", "capturas/PQT/2024/6- Junho/un3-pt3.png"] },
            { data: "31/07/2024", captura: ["capturas/PQT/2024/7- Julho/conformidadesUnidade3.jpeg", "capturas/PQT/2024/7- Julho/graficoUnidade3.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/PQT/2024/8- Agosto/un3_notas.jpeg", "capturas/PQT/2024/8- Agosto/conformidades_un3_pt1.jpeg"] },
            { data: "01/10/2024", captura: ["capturas/PQT/2024/9- Setembro/unidade3_grafico.jpeg"] },


            // { data: "", captura: [""] },
        ],
    },

    UP4: {
        Un4: [

            { data: "02/02/2024", captura: ["capturas/PQT/2024/1- Janeiro/un4.jpg", "capturas/PQT/2024/1- Janeiro/un4_page-0001.jpg"] },
            { data: "01/04/2024", captura: ["capturas/PQT/2024/3- Março/un4-G.jpeg", "capturas/PQT/2024/3- Março/un4_page-0001.jpg"] },
            { data: "23/04/2024", captura: ["capturas/PQT/2024/4- Abril/un4.jpeg", "capturas/PQT/2024/4- Abril/un4_page-0001.jpg"] },
            { data: "30/05/2024", captura: ["capturas/PQT/2024/5- Maio/un4.jpeg", "capturas/PQT/2024/5- Maio/UN4nnconform.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/PQT/2024/6- Junho/un4-pt1.png", "capturas/PQT/2024/6- Junho/un4-pt2.png"] },
            { data: "31/07/2024", captura: ["capturas/PQT/2024/7- Julho/conformidadesUnidade4.jpeg", "capturas/PQT/2024/7- Julho/graficoUnidade4.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/PQT/2024/8- Agosto/un4_notas.jpeg", "capturas/PQT/2024/8- Agosto/conformidades_un4_pt1.jpeg"] },
            { data: "01/10/2024", captura: ["capturas/PQT/2024/9- Setembro/unidade4_grafico.jpeg"] },


            // { data: "", captura: [""] },
        ],
    },

    UP5: {
        Un5: [
            // Almoxarifado

            { data: "02/02/2024", captura: ["capturas/PQT/2024/1- Janeiro/almoxarifado.jpg", "capturas/PQT/2024/1- Janeiro/almoxarifado_page-0001.jpg"] },
            { data: "01/04/2024", captura: ["capturas/PQT/2024/3- Março/almoxarifado-G.jpeg", "capturas/PQT/2024/3- Março/almoxarifado_page-0001.jpg"] },
            { data: "23/04/2024", captura: ["capturas/PQT/2024/4- Abril/almoxarifado.jpeg", "capturas/PQT/2024/4- Abril/un5_page-0001.jpg"] },
            { data: "30/05/2024", captura: ["capturas/PQT/2024/5- Maio/unAlmoxarifado.jpeg", "capturas/PQT/2024/5- Maio/UNAnnconform.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/PQT/2024/6- Junho/unA-pt1.png", "capturas/PQT/2024/6- Junho/unA-pt2.png"] },
            { data: "31/07/2024", captura: ["capturas/PQT/2024/7- Julho/conformidadesAlmoxarifado.jpeg", "capturas/PQT/2024/7- Julho/graficoAlmoxarifado.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/PQT/2024/8- Agosto/almoxarifado_notas.jpeg", "capturas/PQT/2024/8- Agosto/conformidades_almoxarifado.jpeg"] },
            { data: "01/10/2024", captura: ["capturas/PQT/2024/9- Setembro/almoxarifado_grafico.jpeg"] },


            // { data: "", captura: [""] },
        ],
    },

    UP6: {
        UnManutencao: [
            { data: "01/10/2024", captura: ["capturas/PQT/2024/9- Setembro/manutencao_grafico.jpeg"] },


            // {data: "", captura: [""] },
        ]
    },

    UPG: {
        Geral: [

            { data: "02/02/2024", captura: ["capturas/PQT/2024/1- Janeiro/geral.jpg"] },
            { data: "23/04/2024", captura: ["capturas/PQT/2024/4- Abril/geral.png"] },
            { data: "30/05/2024", captura: ["capturas/PQT/2024/5- Maio/geral.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/PQT/2024/6- Junho/resumo.png"] },
            { data: "31/07/2024", captura: ["capturas/PQT/2024/7- Julho/graficoGeral.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/PQT/2024/8- Agosto/geral_notas.jpeg"] },
            { data: "01/10/2024", captura: ["capturas/PQT/2024/9- Setembro/geral_grafico.jpeg"] },


            // { data: "", captura: [""] },
        ],
    },

    UAS1: {    // Assistência Técnica:
        fxe1: [
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 TAMPOS PÇS.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 TAMPOS GRAFICOS.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 COMPL.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 COMPL GRAFICO.jpg"] },


            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],

        apos_1: [
            { data: "18/12/2023", captura: ["capturas/slides 01/18-12-2023/slide01_page-0001.jpg", "capturas/slides 01/18-12-2023/slide01_page-0002.jpg", "capturas/slides 01/18-12-2023/slide01_page-0003.jpg", "capturas/slides 01/18-12-2023/slide01_page-0004.jpg", "capturas/slides 01/18-12-2023/slide01_page-0005.jpg", "capturas/slides 01/18-12-2023/slide01_page-0006.jpg", "capturas/slides 01/18-12-2023/slide01_page-0007.jpg", "capturas/slides 01/18-12-2023/slide01_page-0008.jpg", "capturas/slides 01/18-12-2023/slide01_page-0009.jpg", "capturas/slides 01/18-12-2023/slide01_page-0010.jpg", "capturas/slides 01/18-12-2023/slide01_page-0011.jpg", "capturas/slides 01/18-12-2023/slide01_page-0012.jpg", "capturas/slides 01/18-12-2023/slide01_page-0013.jpg", "capturas/slides 01/18-12-2023/slide01_page-0014.jpg", "capturas/slides 01/18-12-2023/slide01_page-0015.jpg", "capturas/slides 01/18-12-2023/slide01_page-0016.jpg", "capturas/slides 01/18-12-2023/slide01_page-0017.jpg", "capturas/slides 01/18-12-2023/slide01_page-0018.jpg", "capturas/slides 01/18-12-2023/slide01_page-0019.jpg", "capturas/slides 01/18-12-2023/slide01_page-0020.jpg",] },


            // { data: "", captura: ["", "", ] },
            // { data: "", captura: ["", "", ] },
        ],
    },

    UAS2: {    // Assistência Técnica:
        fxe2: [
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/15 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/15 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/15 G.INFINITO.jpg"] },


            // { data: "", captura: ["", "", ""] },
            // { data: "", captura: ["", "", ""] },
        ],

        apos_2: [
            { data: "18/12/2023", captura: ["capturas/slides 02/18-12-2023/slide02_page-0001.jpg", "capturas/slides 02/18-12-2023/slide02_page-0002.jpg", "capturas/slides 02/18-12-2023/slide02_page-0003.jpg", "capturas/slides 02/18-12-2023/slide02_page-0004.jpg", "capturas/slides 02/18-12-2023/slide02_page-0006.jpg", "capturas/slides 02/18-12-2023/slide02_page-0007.jpg", "capturas/slides 02/18-12-2023/slide02_page-0008.jpg", "capturas/slides 02/18-12-2023/slide02_page-0009.jpg", "capturas/slides 02/18-12-2023/slide02_page-0010.jpg", "capturas/slides 02/18-12-2023/slide02_page-0011.jpg", "capturas/slides 02/18-12-2023/slide02_page-0012.jpg", "capturas/slides 02/18-12-2023/slide02_page-0013.jpg", "capturas/slides 02/18-12-2023/slide02_page-0014.jpg", "capturas/slides 02/18-12-2023/slide02_page-0015.jpg", "capturas/slides 02/18-12-2023/slide02_page-0016.jpg", "capturas/slides 02/18-12-2023/slide02_page-0017.jpg", "capturas/slides 02/18-12-2023/slide02_page-0018.jpg", "capturas/slides 02/18-12-2023/slide02_page-0020.jpg", "capturas/slides 02/18-12-2023/slide02_page-0021.jpg", "capturas/slides 02/18-12-2023/slide02_page-0022.jpg", "capturas/slides 02/18-12-2023/slide02_page-0023.jpg", "capturas/slides 02/18-12-2023/slide02_page-0024.jpg", "capturas/slides 02/18-12-2023/slide02_page-0026.jpg", "capturas/slides 02/18-12-2023/slide02_page-0027.jpg", "capturas/slides 02/18-12-2023/slide02_page-0028.jpg", "capturas/slides 02/18-12-2023/slide02_page-0029.jpg",] },


            // { data: "", captura: ["", "", "", "", "", "",] },
            // { data: "", captura: ["", "", "", "", "", "",] },
        ],
    },

    QD1: {    // Qualidade do fornecedor:

        Colpany: [
            

            { data: "08/05/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/MAIO/08 COLPANY.jpg"] },


            // { data: "", captura: [""] },
            



        ],

        Fast: [
          
            { data: "08/05/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/MAIO/08 FAST GLASS.jpg"] },
            { data: "15/05/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/MAIO/15 FAST GLASS.jpg"] },
            { data: "22/05/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/MAIO/22 FAST GLASS.jpg"] },
            { data: "28/05/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/MAIO/28 FAST GLASS.jpg"] },
            { data: "05/06/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JUNHO/05.jpg"] },
            { data: "12/06/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JUNHO/12.jpg"] },
            { data: "19/06/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JUNHO/19.jpg"] },
            { data: "27/06/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JUNHO/27.jpg"] },
            { data: "02/07/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JULHO/02 FAST.jpg"] },
            { data: "10/07/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JULHO/10 FAST.jpg"] },
            { data: "17/07/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JULHO/17 FAST.jpg"] },
            { data: "24/07/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JULHO/23.jpeg"] },
            { data: "31/07/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JULHO/31.jpeg"] },
            { data: "07/08/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/AGOSTO/07.jpeg"] },
            { data: "14/08/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/AGOSTO/14.jpeg"] },
            { data: "21/08/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/AGOSTO/21.jpeg"] },
            { data: "28/08/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/AGOSTO/28.jpeg"] },
            { data: "04/09/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/SETEMBRO/04.jpeg"] },
            { data: "11/09/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/SETEMBRO/11.jpeg"] },
            { data: "18/09/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/SETEMBRO/18.jpeg"] },
            { data: "25/09/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/SETEMBRO/25.jpeg"] },
            { data: "16/10/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/OUTUBRO/16.jpeg"] },
            { data: "23/10/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/OUTUBRO/23.jpeg"] },

            // { data: "", captura: [""] },




        ],

        Vidros: [
            
           
            { data: "08/05/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/MAIO/08 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2026/MAIO/08 FAST GLASS.jpg"] },
            { data: "15/05/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/MAIO/15 FAST GLASS.jpg", ""] },
            { data: "22/05/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/MAIO/22 FAST GLASS.jpg", ""] },
            { data: "28/05/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/MAIO/28 FAST GLASS.jpg", ""] },
            { data: "05/06/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JUNHO/05.jpg", ""] },
            { data: "12/06/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JUNHO/12.jpg", ""] },
            { data: "19/06/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JUNHO/19.jpg", ""] },
            { data: "27/06/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JUNHO/27.jpg"] },
            { data: "02/07/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JULHO/02 FAST.jpg", ""] },
            { data: "10/07/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JULHO/10 FAST.jpg", ""] },
            { data: "17/07/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JULHO/17 FAST.jpg", ""] },
            { data: "24/07/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JULHO/23.jpeg"] },
            { data: "31/07/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/JULHO/31.jpeg"] },
            { data: "07/08/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/AGOSTO/07.jpeg"] },
            { data: "14/08/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/AGOSTO/14.jpeg"] },
            { data: "21/08/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/AGOSTO/21.jpeg"] },
            { data: "28/08/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/AGOSTO/28.jpeg"] },
            { data: "04/09/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/SETEMBRO/04.jpeg"] },
            { data: "11/09/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/SETEMBRO/11.jpeg"] },
            { data: "18/09/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/SETEMBRO/18.jpeg"] },
            { data: "25/09/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/SETEMBRO/25.jpeg"] },
            { data: "16/10/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/OUTUBRO/16.jpeg"] },
            { data: "23/10/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/OUTUBRO/23.jpeg"] },

            // { data: "", captura: ["", ""] },


        ],
    },

    QD2: {    // Qualidade do fornecedor:
        Vidros: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    QD3: {    // Qualidade do fornecedor:
        Vidros: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    QD4: {    // Qualidade do fornecedor:
        Vidros: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    QD5: {    // Qualidade do fornecedor:
        Vidros: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    DS1: {    // Disperdício de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    DS2: {    // Disperdício de matérial:
        Tampos: [
            { data: "07/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/TesteEstofaria.png", "capturas/Unidade 2/Estofari2024/11- Novembro/TesteSetoresEstofaria.png"] },


            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    DS3: {    // Disperdício de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    DS4: {    // Disperdício de matérial:
        Tampos: [
            { data: "04/12/2023", captura: ["capturas/Unidade 4/Disperdicio/tampos/DESPERDICIO DE TAMPO 04-12.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/JANEIRO.png"] },
            { data: "29/02/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/FEVEREIRO.png"] },
            { data: "28/03/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/MARÇO.jpg"] },
            { data: "30/04/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/ABRIL.jpeg"] },
            { data: "31/05/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/MAIO.jpg"] },
            { data: "30/06/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/JUNHO.jpg"] },
            { data: "31/07/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/JULHO.jpeg"] },
            { data: "31/08/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/AGOSTO.jpeg"] },
            { data: "30/09/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/SETEMBRO.jpeg"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/outubro.jpg"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/NOVEMBRO.jpg"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/DEZEMBRO.jpeg"] },

            { data: "31/01/2025", captura: ["capturas/Unidade 4/Disperdicio/tampos/2025/janeiro.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Unidade 4/Disperdicio/tampos/2025/mes fevereiro.jpeg"] },
            { data: "04/05/2025", captura: ["capturas/Unidade 4/Disperdicio/tampos/2025/abril.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 4/Disperdicio/tampos/2025/MAIO.jpg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 4/Disperdicio/tampos/2025/JUNHO.jpg"] },
            { data: "31/07/2025", captura: ["capturas/Unidade 4/Disperdicio/tampos/2025/JULHO.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Unidade 4/Disperdicio/tampos/2025/AGOSTO.jpg"] },
            { data: "30/09/2025", captura: ["capturas/Unidade 4/Disperdicio/tampos/2025/SETEMBRO 2025.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Unidade 4/Disperdicio/tampos/2025/OUTUBRO.jpg"] },     
            { data: "29/11/2025", captura: ["capturas/Unidade 4/Disperdicio/tampos/2025/NOVEMBRO 2025.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Unidade 4/Disperdicio/tampos/2025/DEZEMBRO 2025.jpg"] },
            { data: "30/01/2026", captura: ["capturas/Unidade 4/Disperdicio/tampos/2026/JANEIRO.jpg"] },
            { data: "27/02/2026", captura: ["capturas/Unidade 4/Disperdicio/tampos/2026/Fevereiro 2026.jpg"] },
            { data: "31/03/2026", captura: ["capturas/Unidade 4/Disperdicio/tampos/2026/03 MARÇO.jpg"] },
            { data: "30/04/2026", captura: ["capturas/Unidade 4/Disperdicio/tampos/2026/04 ABRIL.jpg"] },
            { data: "29/05/2026", captura: ["capturas/Unidade 4/Disperdicio/tampos/2026/05 MAIO.jpg"] },
            { data: "30/06/2026", captura: ["capturas/Unidade 4/Disperdicio/tampos/2026/06 JUNHO.jpg"] },
            { data: "31/07/2026", captura: ["capturas/Unidade 4/Disperdicio/tampos/2026/07 JULHO.jpeg"] },
            { data: "31/08/2026", captura: ["capturas/Unidade 4/Disperdicio/tampos/2026/08 AGOSTO.jpeg"] },
            { data: "30/09/2026", captura: ["capturas/Unidade 4/Disperdicio/tampos/2026/09 SETEMBRO.jpeg"] },

        // { data: "", captura: [""] },

        ],

        // { data: "", captura: ["", ""] },

    },

    DS5: {    // Disperdício de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    CS1: {    // Consumo de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    CS2: {    // Consumo de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    CS3: {    // Consumo de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    CS4: {    // Consumo de matérial:
        Chapas: [
            { data: "04/12/2023", captura: ["capturas/Unidade 4/Consumo/CONSUMO DE CHAPAS.png"] },
            { data: "31/12/2023", captura: ["capturas/Unidade 4/Consumo/CONSUMO DE CHAPAS DEZEMBRO 2023.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 4/Consumo/2024/JANEIRO.png"] },
            { data: "29/02/2024", captura: ["capturas/Unidade 4/Consumo/2024/FEVEREIRO.png"] },
            { data: "28/03/2024", captura: ["capturas/Unidade 4/Consumo/2024/MARÇO.jpg"] },
            { data: "30/04/2024", captura: ["capturas/Unidade 4/Consumo/2024/ABRIL.jpeg"] },
            { data: "31/05/2024", captura: ["capturas/Unidade 4/Consumo/2024/MAIO.jpg"] },
            { data: "30/06/2024", captura: ["capturas/Unidade 4/Consumo/2024/JUNHO.jpg"] },
            { data: "31/07/2024", captura: ["capturas/Unidade 4/Consumo/2024/julho 23 chapas.jpeg"] },
            { data: "31/08/2024", captura: ["capturas/Unidade 4/Consumo/2024/AGOSTO.jpeg"] },
            { data: "30/09/2024", captura: ["capturas/Unidade 4/Consumo/2024/SETEMBRO CHAPAS.jpeg"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 4/Consumo/2024/outubro chapa.jpg"] },
            { data: "01/12/2024", captura: ["capturas/Unidade 4/Consumo/CONSUMO DE CHAPAS DEZEMBRO 2023.png"] },

            { data: "31/01/2025", captura: ["capturas/Unidade 4/Consumo/2025/CONSUMO GABIANNE.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Unidade 4/Consumo/2025/mes fev.jpeg"] },
            
            { data: "31/03/2025", captura: ["capturas/Unidade 4/Consumo/2025/mes março.jpeg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 4/Consumo/2025/MES ABRIL.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 4/Consumo/2025/MAIP.jpg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 4/Consumo/2025/JUNHO.jpg"] },
            { data: "31/07/2025", captura: ["capturas/Unidade 4/Consumo/2025/JULHO.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Unidade 4/Consumo/2025/AGOSTO.jpg"] },
            { data: "30/09/2025", captura: ["capturas/Unidade 4/Consumo/2025/SETEMBRO 2025.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Unidade 4/Consumo/2025/OUTUBRO 2025.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Unidade 4/Consumo/2025/NOVEMBRO 2025.jpg"] },
            { data: "30/01/2026", captura: ["capturas/Unidade 4/Consumo/2026/JANEIRO.jpg"] },
            { data: "27/02/2026", captura: ["capturas/Unidade 4/Consumo/2026/Fevereiro 2026.jpg"] },
            { data: "31/03/2026", captura: ["capturas/Unidade 4/Consumo/2026/03 MARÇO.jpg"] },
            { data: "30/04/2026", captura: ["capturas/Unidade 4/Consumo/2026/04 ABRIL.jpg"] },
            { data: "29/05/2026", captura: ["capturas/Unidade 4/Consumo/2026/05 MAIO.jpg"] },
            { data: "30/06/2026", captura: ["capturas/Unidade 4/Consumo/2026/06 JUNHO.jpg"] },
            { data: "31/07/2026", captura: ["capturas/Unidade 4/Consumo/2026/07 JULHO.jpeg"] },
            { data: "31/08/2026", captura: ["capturas/Unidade 4/Consumo/2026/08 AGOSTO.jpeg"] },
            { data: "30/09/2026", captura: ["capturas/Unidade 4/Consumo/2026/09 SETEMBRO.jpeg"] },
            
             // { data: "", captura: [""] },

        ],
    },

    CS5: {    // Consumo de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },
};

function exibirInformação(unidade) {
    // Seleciona o botão e o desabilita
    const botao = document.querySelector(`button[onclick="exibirInformação('${unidade}')"]`);
    botao.disabled = true;

    // Exibe a mensagem de carregamento
    exibirMensagemDeCarregamento(unidade);

    listaDeUrls = []
    console.log(listaDeUrls)

    let data_input = document.getElementById(`dataInput_${unidade}`).value;
    let setor = document.getElementById(`setorSelect_${unidade}`).value;
    let capturas = unidades[unidade][setor];

    let detalhesContainer = document.getElementById(`detalhesContainer_${unidade}`);
    let detalhesContainerAlert = document.getElementById(`detalhesContainer_alert_${unidade}`);
    detalhesContainer.innerHTML = ''; // Limpar o conteúdo antes de adicionar novas capturas
    detalhesContainerAlert.innerHTML = ''; // Limpar o conteúdo do alerta

    let capturasEncontradas = false;

    // Função para exibir as imagens
    function exibirImagens() {


        for (let i = 0; i < capturas.length; i++) {
            let dataFormatada = capturas[i].data.split('/').reverse().join('-');

            if (dataFormatada === data_input) {
                for (let j = 0; j < capturas[i].captura.length; j++) {
                    listaDeUrls.push(capturas[i].captura[j]);

                    let novaImagem = document.createElement('img');
                    novaImagem.src = capturas[i].captura[j];
                    novaImagem.alt = data_input;

                    let novoDetalhe = document.createElement('div');
                    novoDetalhe.classList.add('detalhes');
                    novoDetalhe.innerHTML = `
                        <div class="detalhes-container"></div>
                    `;

                    novoDetalhe.querySelector('.detalhes-container').appendChild(novaImagem);

                    detalhesContainer.appendChild(novoDetalhe);
                }
                capturasEncontradas = true;

                const ocultar = document.querySelectorAll('.ocultar');
                ocultar.forEach(ocultar => {
                    ocultar.style.display = 'none';
                });

                const ocultar_dois = document.querySelectorAll('.ocultar_dois');
                ocultar_dois.forEach(ocultar_dois => {
                    ocultar_dois.style.display = 'flex';
                    ocultar_dois.style.align = 'center';
                });

                const main = document.querySelectorAll('.inicial__mn');
                main.forEach(main => {
                    main.style.height = '100vh';
                });
            }
        }
        console.log(listaDeUrls)

        // Esconde a mensagem de carregamento após o carregamento das imagens
        esconderMensagemDeCarregamento(unidade);

        if (!capturasEncontradas) {
            detalhesContainerAlert.innerHTML = "Apontamento não finalizado!";
        } else {
            detalhesContainerAlert.innerHTML = ''; // Limpar o conteúdo do alerta se novas capturas foram encontradas
        }

        // Reabilita o botão
        botao.disabled = false;
    }

    // Adiciona um tempo de espera (5 segundos) para simular o carregamento
    setTimeout(exibirImagens, 5000);

};

function exibirMensagemDeCarregamento(unidade) {
    let alerta_carregamento = document.getElementById(`loadingMessage_${unidade}`);

    if (alerta_carregamento) {
        alerta_carregamento.style.display = 'flex';

    } else {
        console.error(`Elemento de carregamento não encontrado para a unidade ${unidade}`);
    }
}

function esconderMensagemDeCarregamento(unidade) {
    let alerta_carregamento = document.getElementById(`loadingMessage_${unidade}`);

    if (alerta_carregamento) {
        alerta_carregamento.style.display = 'none';
    } else {
        console.error(`Elemento de carregamento não encontrado para a unidade ${unidade}`);
    }
}

function atualizarInputData(unidade) {
    let data_input = document.getElementById(`dataInput_${unidade}`);
    let setor = document.getElementById(`setorSelect_${unidade}`).value;
    let capturas = unidades[unidade][setor];

    // Verificar se o setor selecionado existe nas unidades
    if (!capturas) {
        console.error(`Setor ${setor} não encontrado para a unidade ${unidade}`);
        return;
    }

    let ultimaData = capturas[capturas.length - 1].data;

    // Convertendo o formato da data de "dd/mm/yyyy" para "yyyy-MM-dd"
    let dataFormatada = ultimaData.split('/').reverse().join('-');
    console.log(dataFormatada);

    // Atribuindo a data formatada ao valor do input
    data_input.value = dataFormatada;
    exibirInformação(unidade)
}

// Função para diminuir o índice em 1
function diminuirIndice(indice) {
    // Verificar se o índice é válido
    if (indice > 0) {
        return indice - 1;
    } else {
        console.error(`Erro ao diminuir o índice, índice inválido`);
        return indice;
    }
}

function aumentarIndice(indice) {
    // Verificar se o índice é válido
    if (indice >= 0) {
        return indice + 1;
    } else {
        console.error(`Erro ao aumentar o índice, índice inválido`);
        return indice;
    }
}

// BOTÕES

function proximoDia(unidade) {
    let data_input = document.getElementById(`dataInput_${unidade}`);
    let setor = document.getElementById(`setorSelect_${unidade}`).value;
    let capturas = unidades[unidade][setor];

    // Verificar se o setor selecionado existe nas unidades
    if (!capturas) {
        console.error(`Setor ${setor} não encontrado para a unidade ${unidade}`);
        return;
    }

    let dataFormatada = data_input.value; // Obter a data formatada do input

    // Converter o formato da data de entrada para o formato do array capturas
    let dataComparacao = dataFormatada.split('-').reverse().join('/');

    // Percorrer o array de capturas
    for (let i = 0; i < capturas.length; i++) {
        if (capturas[i].data === dataComparacao) { // Verificar se a data corresponde
            if (i < capturas.length - 1) {
                let proximaData = capturas[i + 1].data;
                console.log(`Próxima Data: ${proximaData}`);

                let tituloUnidade = document.querySelector(`#${unidade} h6`);
                tituloUnidade.scrollIntoView({ behavior: 'smooth' });

                // Converter a próxima data para o formato "dd/MM/yyyy"
                partesData = proximaData.split('/'); // Dividir a data em partes
                proximaData = `${partesData[2]}-${partesData[1]}-${partesData[0]}`; // Formatar para "dd/MM/yyyy"

                // Atribuir a próxima data ao valor do input
                data_input.value = proximaData;
                return; // Sair da função após encontrar a data
            } else {
                console.error(`Não há data posterior disponível`);
                return;
            }
        }
    }
    console.error(`Data ${dataFormatada} não encontrada no array de capturas`);
}

function diaAnterior(unidade) {
    let data_input = document.getElementById(`dataInput_${unidade}`);
    let setor = document.getElementById(`setorSelect_${unidade}`).value;
    let capturas = unidades[unidade][setor];

    // Verificar se o setor selecionado existe nas unidades
    if (!capturas) {
        console.error(`Setor ${setor} não encontrado para a unidade ${unidade}`);
        return;
    }

    let dataFormatada = data_input.value; // Obter a data formatada do input

    // Converter o formato da data de entrada para o formato do array capturas
    let dataComparacao = dataFormatada.split('-').reverse().join('/');

    // Percorrer o array de capturas de trás para frente
    for (let i = capturas.length - 1; i >= 0; i--) {
        if (capturas[i].data === dataComparacao) { // Verificar se a data corresponde
            if (i > 0) {
                let proximaData = capturas[i - 1].data;
                console.log(`Próxima Data: ${proximaData}`);

                let tituloUnidade = document.querySelector(`#${unidade} h6`);
                tituloUnidade.scrollIntoView({ behavior: 'smooth' });

                // Converter a próxima data para o formato "dd/MM/yyyy"
                partesData = proximaData.split('/'); // Dividir a data em partes
                proximaData = `${partesData[2]}-${partesData[1]}-${partesData[0]}`; // Formatar para "dd/MM/yyyy"

                // Atribuir a próxima data ao valor do input
                data_input.value = proximaData;
                return; // Sair da função após encontrar a data
            } else {
                console.error(`Não há data anterior disponível`);
                return;
            }
        }
    }
    console.error(`Data ${dataFormatada} não encontrada no array de capturas`);
}

function voltar(unidade) {
    let detalhesContainer = document.getElementById(`detalhesContainer_${unidade}`);
    detalhesContainer.innerHTML = "";

    let detalhesContainerAlerta = document.getElementById(`detalhesContainer_alert_${unidade}`);
    detalhesContainerAlerta.innerHTML = "";

    let tituloUnidade = document.querySelector(`#${unidade} h6`);
    tituloUnidade.scrollIntoView({ behavior: 'smooth' });


    const menu = document.querySelector('.inicial__menu');
    menu.style.display = 'flex';

    const unidades = document.querySelectorAll('.unidade');
    unidades.forEach(unidade => {
        unidade.style.display = 'none';
    });

    const ocultar = document.querySelectorAll('.ocultar');
    ocultar.forEach(ocultar => {
        ocultar.style.display = 'flex';
    });

    const main = document.querySelectorAll('.inicial__mn');
    main.forEach(main => {
        main.style.height = 'calc(100vh - 174px)';
    });
}

function limparDetalhes(unidade) {
    let detalhesContainer = document.getElementById(`detalhesContainer_${unidade}`);
    detalhesContainer.innerHTML = "";

    let detalhesContainerAlerta = document.getElementById(`detalhesContainer_alert_${unidade}`);
    detalhesContainerAlerta.innerHTML = "";

    const ocultar = document.querySelectorAll('.ocultar');
    ocultar.forEach(ocultar => {
        ocultar.style.display = 'flex';
    });

    const ocultar_dois = document.querySelectorAll('.ocultar_dois');
    ocultar_dois.forEach(ocultar_dois => {
        ocultar_dois.style.display = 'none';
    });

    const main = document.querySelectorAll('.inicial__mn');
    main.forEach(main => {
        main.style.height = 'calc(100vh - 174px)';
    });
}
