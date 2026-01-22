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
    // mostrarUnidade('UA1'); // Altere para a unidade desejada

});

let listaDeUrls = [];


const unidades = {
    //  { data: "", captura: ["", "", "", "", ""] },

    // Produtividade:

    UA1: {
        Expedicao: [
          
            
            { data: "05/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/05.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/05.jpg"] },
            { data: "06/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/06.jpg", "capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/07.jpg"] },
            { data: "11/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/11.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/11.jpg"] },
            { data: "12/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/12.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/12.jpg"] },
            { data: "13/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/13.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/13.jpg"] },
            { data: "14/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/14.jpg", ""] },
            { data: "17/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/17.jpg", "capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/17.jpg"] },
            { data: "18/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/18.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/18.jpg"] },
            { data: "19/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/19.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/19.jpg"] },
            { data: "21/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/21.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/21.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/22.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/22.jpg"] },
            { data: "24/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/24.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/24.jpg"] },
            { data: "25/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/25.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/25.jpg"] },
            { data: "26/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/26.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/26.jpg"] },
            { data: "27/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/27.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/27.jpg"] },
            { data: "28/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/28.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/28.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/NOVEMBRO/29.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/NOVEMBRO/29.jpg"] },

            { data: "01/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/01.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/01.jpg"] },
            { data: "03/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/03.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/03.jpg"] },
            { data: "04/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/04.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/04.jpg"] },
            { data: "05/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/05.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/05.jpg"] },
            { data: "06/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/06.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/06.jpg"] },
            { data: "08/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/07.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/07.jpg"] },
            { data: "09/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/09.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/09.jpg"] },
            { data: "10/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/10.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/10.jpg"] },
            { data: "11/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/11.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/11.jpg"] },
            { data: "12/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/12.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/12.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/13.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/13.jpg"] },
            { data: "15/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/15.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/15.jpg"] },
            { data: "16/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/16.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/16.jpg"] },
            { data: "17/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/17.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/17.jpg"] },
            { data: "18/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/18.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/18.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/12 DEZEMBRO/19.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/12 DEZEMBRO/19.jpg"] },

            { data: "06/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Expedição/MetasTv/06.jpg", "capturas/Unidade 1/2026/janeiro/Expedição/Embalagem/06.jpg"] },
            { data: "07/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Expedição/Embalagem/07.jpg"] },
            { data: "08/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Expedição/MetasTv/08.jpg", "capturas/Unidade 1/2026/janeiro/Expedição/Embalagem/08.jpg"] },
            { data: "09/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Expedição/MetasTv/09.jpg", "capturas/Unidade 1/2026/janeiro/Expedição/Embalagem/09.jpg"] },
            { data: "12/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Expedição/MetasTv/12.jpg", "capturas/Unidade 1/2026/janeiro/Expedição/Embalagem/12.jpg"] },
            { data: "13/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Expedição/MetasTv/13.jpg", "capturas/Unidade 1/2026/janeiro/Expedição/Embalagem/13.jpg"] },
            { data: "14/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Expedição/MetasTv/14.jpg", "capturas/Unidade 1/2026/janeiro/Expedição/Embalagem/14.jpg"] },
            { data: "15/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Expedição/MetasTv/15.jpg", "capturas/Unidade 1/2026/janeiro/Expedição/Embalagem/15.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Expedição/MetasTv/16.jpg", "capturas/Unidade 1/2026/janeiro/Expedição/Embalagem/16.jpg"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Expedição/MetasTv/19.jpg", "capturas/Unidade 1/2026/janeiro/Expedição/Embalagem/19.jpg"] },
            { data: "20/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Expedição/MetasTv/20.jpg", "capturas/Unidade 1/2026/janeiro/Expedição/Embalagem/20.jpg"] },
            { data: "21/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Expedição/MetasTv/21.jpg", "capturas/Unidade 1/2026/janeiro/Expedição/Embalagem/21.jpg"] },

            // { data: "", captura: ["", ""] },


        ],

        Acabamento: [

            { data: "01/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/02.jpg"] },
            { data: "07/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/07.jpg"] },
            { data: "08/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/08.jpg"] },
            { data: "09/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/09.jpg"] },
            { data: "13/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/13.jpg"] },
            { data: "14/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/14.jpg"] },
            { data: "15/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/15.jpg"] },
            { data: "16/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/16.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/17.jpg"] },
            { data: "20/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/20.jpg"] },
            { data: "21/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/21.jpg"] },
            { data: "22/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/22.jpg"] },
            { data: "23/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/23.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/24.jpg"] },
            { data: "27/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/27.jpg"] },
            { data: "28/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/28.jpg"] },
            { data: "29/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/29.jpg"] },
            { data: "30/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/30.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/OUTUBRO/31.jpg"] },

            { data: "05/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/05.jpg"] },
            { data: "06/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/06.jpg"] },
            { data: "10/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/10.jpg"] },
            { data: "11/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/11.jpg"] },
            { data: "12/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/12.jpg"] },
            { data: "13/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/13.jpg"] },
            { data: "14/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/14.jpg"] },
            { data: "17/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/17.jpg"] },
            { data: "18/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/18.jpg"] },
            { data: "19/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/19.jpg"] },
            { data: "21/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/21.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/22.jpg"] },
            { data: "24/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/24.jpg"] },
            { data: "25/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/25.jpg"] },
            { data: "26/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/26.jpg"] },
            { data: "27/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/27.jpg"] },
            { data: "28/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/28.jpg"] },    
            { data: "29/11/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/NOVEMBRO/29.jpg"] },

            { data: "01/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/1.jpg"] }, 
            { data: "03/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/03.jpg"] },
            { data: "04/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/04.jpg"] },
            { data: "05/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/05.jpg"] },
            { data: "06/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/06.jpg"] },
            { data: "08/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/08.jpg"] }, 
            { data: "09/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/09.jpg"] },
            { data: "10/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/10.jpg"] },
            { data: "11/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/11.jpg"] },
            { data: "12/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/12.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/13.jpg"] },
            { data: "15/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/15.jpg"] },
            { data: "16/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/16.jpg"] },
            { data: "17/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/17.jpg"] },
            { data: "18/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/18.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/DEZEMBRO/19.jpg"] },

            { data: "06/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Acabamento/06.jpg"] },
            { data: "07/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Acabamento/07.jpg"] },
            { data: "08/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Acabamento/08.jpg"] },
            { data: "09/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Acabamento/09.jpg"] },
            { data: "12/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Acabamento/12.jpg"] },
            { data: "13/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Acabamento/13.jpg"] },
            { data: "14/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Acabamento/14.jpg"] },
            { data: "15/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Acabamento/15.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Acabamento/16.jpg"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Acabamento/19.jpg"] },
            { data: "20/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Acabamento/20.jpg"] },
            { data: "21/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Acabamento/21.jpg"] },



            // { data: "", captura: [""] },





        ],

        Usinagem: [
           
            { data: "02/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/2.jpg"] },
            { data: "07/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/07.jpg"] },
            { data: "08/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/08.jpg"] },
            { data: "09/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/09.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/10.jpg"] },
            { data: "13/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/13.jpg"] },
            { data: "14/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/14.jpg"] },
            { data: "15/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/15.jpg"] },
            { data: "16/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/16.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/17.jpg"] },
            { data: "20/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/20.jpg"] },
            { data: "21/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/21.jpg"] },
            { data: "22/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/22.jpg"] },
            { data: "23/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/23.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/24.jpg"] },
            { data: "27/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/27.jpg"] },
            { data: "28/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/28.jpg"] },
            { data: "29/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/29.jpg"] },
            { data: "30/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/30.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/OUTUBRO/31.jpg"] },

            { data: "04/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/04.jpg"] },
            { data: "05/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/05.jpg"] },
            { data: "06/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/06.jpg"] },
            { data: "11/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/11.jpg"] },
            { data: "12/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/12.jpg"] },
            { data: "13/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/13.jpg"] },
            { data: "14/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/14.jpg"] },
            { data: "17/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/17.jpg"] },
            { data: "18/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/18.jpg"] },
            { data: "19/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/19.jpg"] },
            { data: "21/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/21.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/22.jpg"] },
            { data: "24/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/24.jpg"] },
            { data: "25/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/25.jpg"] },
            { data: "26/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/26.jpg"] },
            { data: "27/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/27.jpg"] },
            { data: "28/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/28.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/11 NOVEMBRO/29.jpg"] },

           
            { data: "05/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/05.jpg"] },
            { data: "06/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/06.jpg"] },
            { data: "08/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/08.jpg"] },
            { data: "09/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/09.jpg"] },
            { data: "10/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/10.jpg"] },
            { data: "11/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/11.jpg"] },
            { data: "12/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/12.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/13.jpg"] },
            { data: "15/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/15.jpg" ,"capturas/Unidade 1/2025/Usinagem/Cnc/DEZ/15.jpg"] },
            { data: "16/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Cnc/DEZ/16.jpg" , "capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/16.jpg"] },
            { data: "17/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/17.jpg", "capturas/Unidade 1/2025/Usinagem/Cnc/DEZ/17.jpg"] },
            { data: "18/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/18.jpg", "capturas/Unidade 1/2025/Usinagem/Cnc/DEZ/18.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/12 DEZEMBRO/19.jpg" , ""] },

            { data: "06/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Filetação/06.jpg" , "capturas/Unidade 1/2026/janeiro/Usinagem/Cnc/06.jpg"] },
            { data: "07/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Filetação/07.jpg" , "capturas/Unidade 1/2026/janeiro/Usinagem/Cnc/07.jpg"] },
            { data: "08/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Filetação/08.jpg" , "capturas/Unidade 1/2026/janeiro/Usinagem/Cnc/08.jpg"] },
            { data: "12/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Filetação/12.jpg" , "capturas/Unidade 1/2026/janeiro/Usinagem/Cnc/12.jpg"] },
            { data: "13/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Filetação/13.jpg" , "capturas/Unidade 1/2026/janeiro/Usinagem/Cnc/13.jpg"] },
            { data: "14/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Filetação/14.jpg" , "capturas/Unidade 1/2026/janeiro/Usinagem/Cnc/14.jpg"] },
            { data: "15/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Filetação/15.jpg" , "capturas/Unidade 1/2026/janeiro/Usinagem/Cnc/15.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Filetação/16.jpg" , "capturas/Unidade 1/2026/janeiro/Usinagem/Cnc/16.jpg"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Filetação/19.jpg" , "capturas/Unidade 1/2026/janeiro/Usinagem/Cnc/19.jpg"] },
            { data: "20/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Filetação/20.jpg" , "capturas/Unidade 1/2026/janeiro/Usinagem/Cnc/20.jpg"] },
            { data: "21/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Filetação/21.jpg" , "capturas/Unidade 1/2026/janeiro/Usinagem/Cnc/21.jpg"] },
            

            
            // { data: "", captura: ["" , ""] },



        ],

        Montagem: [
          
            { data: "01/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/02.jpg"] },
            { data: "07/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/07.jpg"] },
            { data: "08/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/08.jpg"] },
            { data: "09/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/09.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/10.jpg"] },
            { data: "13/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/13.jpg"] },
            { data: "14/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/14.jpg"] },
            { data: "15/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/15.jpg"] },
            { data: "16/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/16.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/17.jpg"] },
            { data: "20/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/20.jpg"] },
            { data: "22/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/22.jpg"] },
            { data: "23/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/23.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/24.jpg"] },
            { data: "27/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/27.jpg"] },
            { data: "28/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/28.jpg"] },
            { data: "29/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/29.jpg"] },
            { data: "30/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/30.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/OUTUBRO/31.jpg"] },

            { data: "05/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/05.jpg"] },
            { data: "06/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/06.jpg"] },
            { data: "11/11/2025", captura: ["captHuras/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/11.jpg"] },
            { data: "12/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/12.jpg"] },
            { data: "13/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/13.jpg"] },
            { data: "14/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/14.jpg"] },
            { data: "17/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/17.jpg"] },
            { data: "18/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/18.jpg"] },
            { data: "19/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/19.jpg"] },
            { data: "21/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/21.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/22.jpg"] },
            { data: "24/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/24.jpg"] },
            { data: "25/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/25.jpg"] },
            { data: "26/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/26.jpg"] },
            { data: "27/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/27.jpg"] },
            { data: "28/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/28.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/NOVEMBRO/29.jpg"] },

            { data: "01/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/01.jpg"] },
            { data: "03/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/03.jpg"] },
            { data: "04/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/04.jpg"] },
            { data: "05/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/05.jpg"] },
            { data: "06/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/06.jpg"] },
            { data: "08/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/08.jpg"] },
            { data: "09/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/09.jpg"] },
            { data: "10/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/10.jpg"] },
            { data: "11/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/11.jpg"] },
            { data: "12/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/12.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/13.jpg"] },
            { data: "15/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/15.jpg"] },
            { data: "16/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/16.jpg"] },
            { data: "17/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/17.jpg"] },
            { data: "18/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/18.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/12 dezembro/19.jpg"] },
            
            { data: "06/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Montagem/06.jpg"] },
            { data: "07/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Montagem/07.jpg"] },
            { data: "08/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Montagem/08.jpg"] },
            { data: "09/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Montagem/09.jpg"] },
            { data: "12/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Montagem/12.jpg"] },
            { data: "13/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Montagem/13.jpg"] },
            { data: "14/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Montagem/14.jpg"] },
            { data: "15/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Montagem/15.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Montagem/16.jpg"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Montagem/19.jpg"] },
            { data: "20/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Montagem/20.jpg"] },
            { data: "21/01/2026", captura: ["capturas/Unidade 1/2026/janeiro/Usinagem/Montagem/21.jpg"] },


            // { data: "", captura: [""] },


        ],


    },

    UA2: {
        Estofaria: [
            
            { data: "19/12/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/12-DEZEMBRO/19-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/12-DEZEMBRO/19-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/12-DEZEMBRO/19-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/12-DEZEMBRO/19-pt4.jpeg"] },

            { data: "06/01/2026", captura: ["capturas/Unidade 2/Estofaria/2026/01-JANEIRO/06-pt1.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/06-pt2.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/06-pt3.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/06-pt4.jpeg"] },
            { data: "07/01/2026", captura: ["capturas/Unidade 2/Estofaria/2026/01-JANEIRO/07-pt1.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/07-pt2.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/07-pt3.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/07-pt4.jpeg"] },
            { data: "08/01/2026", captura: ["capturas/Unidade 2/Estofaria/2026/01-JANEIRO/08-pt1.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/08-pt2.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/08-pt3.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/08-pt4.jpeg"] },
            { data: "09/01/2026", captura: ["capturas/Unidade 2/Estofaria/2026/01-JANEIRO/09-pt1.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/09-pt2.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/09-pt3.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/09-pt4.jpeg"] },
            { data: "12/01/2026", captura: ["capturas/Unidade 2/Estofaria/2026/01-JANEIRO/12-pt1.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/12-pt2.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/12-pt3.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/12-pt4.jpeg"] },
            { data: "13/01/2026", captura: ["capturas/Unidade 2/Estofaria/2026/01-JANEIRO/13-pt1.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/13-pt2.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/13-pt3.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/13-pt4.jpeg"] },
            { data: "14/01/2026", captura: ["capturas/Unidade 2/Estofaria/2026/01-JANEIRO/14-pt1.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/14-pt2.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/14-pt3.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/14-pt4.jpeg"] },
            { data: "15/01/2026", captura: ["capturas/Unidade 2/Estofaria/2026/01-JANEIRO/15-pt1.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/15-pt2.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/15-pt3.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/15-pt4.jpeg"] },
            { data: "16/01/2026", captura: ["capturas/Unidade 2/Estofaria/2026/01-JANEIRO/16-pt1.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/16-pt2.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/16-pt3.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/16-pt4.jpeg"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 2/Estofaria/2026/01-JANEIRO/19-pt1.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/19-pt2.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/19-pt3.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/19-pt4.jpeg"] },
            { data: "20/01/2026", captura: ["capturas/Unidade 2/Estofaria/2026/01-JANEIRO/20-pt1.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/20-pt2.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/20-pt3.jpeg", "capturas/Unidade 2/Estofaria/2026/01-JANEIRO/20-pt4.jpeg"] },




            // { data: "", captura: ["", "", "", ""] },
            
        ],

        Expedição: [

            
            { data: "19/12/2025", captura: ["capturas/Unidade 2/Expedição/2025/12-DEZEMBRO/19.jpeg"] },
            
            { data: "07/01/2026", captura: ["capturas/Unidade 2/Expedição/2026/01-JANEIRO/07.JPEG"] },
            { data: "08/01/2026", captura: ["capturas/Unidade 2/Expedição/2026/01-JANEIRO/08.JPEG"] },
            { data: "09/01/2026", captura: ["capturas/Unidade 2/Expedição/2026/01-JANEIRO/09.JPEG"] },
            { data: "12/01/2026", captura: ["capturas/Unidade 2/Expedição/2026/01-JANEIRO/12.JPEG"] },
            { data: "13/01/2026", captura: ["capturas/Unidade 2/Expedição/2026/01-JANEIRO/13.JPEG"] },
            { data: "14/01/2025", captura: ["capturas/Unidade 2/Expedição/2026/01-JANEIRO/14.JPEG"] },
            { data: "15/01/2026", captura: ["capturas/Unidade 2/Expedição/2026/01-JANEIRO/15.JPEG"] },
            { data: "16/01/2026", captura: ["capturas/Unidade 2/Expedição/2026/01-JANEIRO/16.JPEG"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 2/Expedição/2026/01-JANEIRO/19.JPEG"] },
            { data: "20/01/2026", captura: ["capturas/Unidade 2/Expedição/2026/01-JANEIRO/20.JPEG"] },
            { data: "21/01/2026", captura: ["capturas/Unidade 2/Expedição/2026/01-JANEIRO/21.JPEG"] },




            // { data: "", captura: [""] },
            
        ],


        CNC: [
            
            { data: "19/12/2025", captura: ["capturas/Unidade 2/Usinagem/2025/12-DEZEMBRO/CNC/19.JPEG"] },

            { data: "06/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/06.JPEG"] },
            { data: "07/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/07.JPEG"] },
            { data: "08/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/08.JPEG"] },
            { data: "09/01/2025", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/09.JPEG"] },
            { data: "12/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/12.JPEG"] },
            { data: "13/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/13.JPEG"] },
            { data: "14/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/14.JPEG"] },
            { data: "15/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/15.JPEG"] },
            { data: "16/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/16.JPEG"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/19.JPEG"] },
            { data: "20/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/20.JPEG"] },
            { data: "21/01/2025", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/CNC/21.JPEG"] },




            // { data: "", captura: ["", "", "", "", ""] },
            // { data: "", captura: [""] },



        ],

        


        Usinagem: [
            
            { data: "19/12/2025", captura: ["capturas/Unidade 2/Usinagem/2025/12-DEZEMBRO/MONTAGEM US/19.JPEG", "capturas/Unidade 2/Usinagem/2025/12-DEZEMBRO/ROLINHO/19.jpeg", "capturas/Unidade 2/Usinagem/2025/12-DEZEMBRO/ROQUITE/19.jpeg", "capturas/Unidade 2/Usinagem/2025/12-DEZEMBRO/MM/19.jpg", "capturas/Unidade 2/Usinagem/2025/12-DEZEMBRO/USINAGEM/19.jpg"] },

            { data: "06/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/06.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/06.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/06.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/06.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/06.jpg"] },
            { data: "07/01/2025", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/07.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/07.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/07.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/07.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/07.jpg"] },
            { data: "08/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/08.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/08.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/08.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/08.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/08.jpg"] },
            { data: "09/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/09.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/09.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/09.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/09.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/09.jpg"] },
            { data: "12/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/12.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/12.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/12.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/12.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/12.jpg"] },
            { data: "13/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/13.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/13.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/13.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/13.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/13.jpg"] },
            { data: "14/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/14.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/14.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/14.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/14.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/14.jpg"] },
            { data: "15/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/15.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/15.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/15.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/15.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/15.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/16.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/16.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/16.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/16.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/16.jpg"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/19.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/19.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/19.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/19.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/19.jpg"] },
            { data: "20/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/20.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/20.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/20.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/20.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/20.jpg"] },
            { data: "21/01/2026", captura: ["capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MONTAGEM US/21.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROLINHO/21.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/ROQUITE/21.JPEG", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/MM/21.jpg", "capturas/Unidade 2/Usinagem/2026/01-JANEIRO/USINAGEM/21.jpg"] },




            ],


             // { data: "", captura: ["", "", "", "", ""] },






             Acabamento: [
            
            { data: "19/12/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/DEZEMBRO/19 PT01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/DEZEMBRO/19 PT02.jpg"] },

            { data: "06/01/2026", captura: ["capturas/Unidade 2/Acabamento/2026/01-JANEIRO/06-pt1.jpeg", "capturas/Unidade 2/Acabamento/2026/01-JANEIRO/06-pt2.jpeg"] },
            { data: "07/01/2026", captura: ["capturas/Unidade 2/Acabamento/2026/01-JANEIRO/07-pt1.jpeg", "capturas/Unidade 2/Acabamento/2026/01-JANEIRO/07-pt2.jpeg"] },
            { data: "08/01/2026", captura: ["capturas/Unidade 2/Acabamento/2026/01-JANEIRO/08-pt1.jpeg", "capturas/Unidade 2/Acabamento/2026/01-JANEIRO/08-pt2.jpeg"] },
            { data: "10/01/2026", captura: ["capturas/Unidade 2/Acabamento/2026/01-JANEIRO/10 pt1.jpg", "capturas/Unidade 2/Acabamento/2026/01-JANEIRO/10 pt2.jpg"] },
            { data: "12/01/2026", captura: ["capturas/Unidade 2/Acabamento/2026/01-JANEIRO/12 pt1.jpg", "capturas/Unidade 2/Acabamento/2026/01-JANEIRO/12 pt2.jpg"] },
            { data: "13/01/2026", captura: ["capturas/Unidade 2/Acabamento/2026/01-JANEIRO/13 pt1.jpg", "capturas/Unidade 2/Acabamento/2026/01-JANEIRO/13 pt2.jpg"] },
            { data: "14/01/2026", captura: ["capturas/Unidade 2/Acabamento/2026/01-JANEIRO/14 pt1.jpg", "capturas/Unidade 2/Acabamento/2026/01-JANEIRO/14 pt2.jpg"] },
            { data: "15/01/2026", captura: ["capturas/Unidade 2/Acabamento/2026/01-JANEIRO/15 pt1.jpg", "capturas/Unidade 2/Acabamento/2026/01-JANEIRO/15 pt.jpg"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 2/Acabamento/2026/01-JANEIRO/19-pt1.jpg", "capturas/Unidade 2/Acabamento/2026/01-JANEIRO/19-pt2.jpg"] },
            { data: "20/01/2026", captura: ["capturas/Unidade 2/Acabamento/2026/01-JANEIRO/20-pt1.jpg", "capturas/Unidade 2/Acabamento/2026/01-JANEIRO/20-pt2.jpg"] },
            { data: "21/01/2026", captura: ["capturas/Unidade 2/Acabamento/2026/01-JANEIRO/21-pt1.jpg", "capturas/Unidade 2/Acabamento/2026/01-JANEIRO/21-pt2.jpg"] },




            // { data: "", captura: ["", ""] },


           
        ],
    },

    UA3: {
        Traçador: [
            
            { data: "19/12/2025", captura: ["capturas/Unidade 3/Usinagem/2025/12-DEZEMBRO/19.jpg"] },

            { data: "06/01/2026", captura: ["capturas/Unidade 3/Usinagem/2026/01-JANEIRO/06.jpg"] }, 
            { data: "07/01/2026", captura: ["capturas/Unidade 3/Usinagem/2026/01-JANEIRO/07.jpg"] },
            { data: "08/01/2026", captura: ["capturas/Unidade 3/Usinagem/2026/01-JANEIRO/08.jpg"] },
            { data: "09/01/2026", captura: ["capturas/Unidade 3/Usinagem/2026/01-JANEIRO/09.jpg"] }, 
            { data: "12/01/2026", captura: ["capturas/Unidade 3/Usinagem/2026/01-JANEIRO/12.jpg"] }, 
            { data: "13/01/2026", captura: ["capturas/Unidade 3/Usinagem/2026/01-JANEIRO/13.jpg"] }, 
            { data: "14/01/2026", captura: ["capturas/Unidade 3/Usinagem/2026/01-JANEIRO/14.jpg"] }, 
            { data: "16/01/2026", captura: ["capturas/Unidade 3/Usinagem/2026/01-JANEIRO/16.jpg"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 3/Usinagem/2026/01-JANEIRO/19.jpg"] }, 
            { data: "20/01/2026", captura: ["capturas/Unidade 3/Usinagem/2026/01-JANEIRO/20.jpg"] }, 
            { data: "21/01/2026", captura: ["capturas/Unidade 3/Usinagem/2026/01-JANEIRO/21.jpg"] }, 



            // { data: "", captura: [""] }, 
            // { data: "", captura: [""] },
        ],
    },

    UA4: {
        Calibradora: [
          
            { data: "02/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/02.jpg"] },
            { data: "07/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/07.jpg"] },
            { data: "08/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/08.jpg"] },
            { data: "09/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/09.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/10.jpg"] },
            { data: "13/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/13.jpg"] },
            { data: "14/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/14.jpg"] },
            { data: "15/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/15.jpg"] },
            { data: "16/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/16.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/17.jpg"] },
            { data: "20/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/20.jpg"] },
            { data: "21/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/21.jpg"] },
            { data: "22/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/22.jpg"] },
            { data: "23/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/23.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/24.jpg"] },
            { data: "27/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/27.jpg"] },
            { data: "28/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/28.jpg"] },
            { data: "30/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/29.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/OUTUBRO/31.jpg"] },

            { data: "05/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/05.jpeg"] },
            { data: "06/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/06.jpg"] },
            { data: "12/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/12.jpg"] },
            { data: "13/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/13.jpg"] },
            { data: "14/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/14.jpg"] },
            { data: "17/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/17.jpg"] },
            { data: "18/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/18.jpg"] },
            { data: "19/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/19.jpg"] },
            { data: "21/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/21.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/22.jpg"] },
            { data: "24/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/24.jpg"] },
            { data: "25/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/25.jpg"] },
            { data: "26/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/26.jpg"] },
            { data: "27/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/27.jpg"] },
            { data: "28/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/28.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/NOVEMBRO/29.jpg"] },

            { data: "01/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/01.jpg"] },
            { data: "02/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/02.jpg"] },
            { data: "03/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/03.jpg"] },
            { data: "04/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/04.jpg"] },
            { data: "05/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/05.jpg"] },
            { data: "06/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/06.jpg"] },
            { data: "08/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/08.jpg"] },
            { data: "09/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/09.jpg"] },
            { data: "10/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/10.jpg"] },
            { data: "11/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/11.jpg"] },
            { data: "12/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/12.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/13.jpg"] },
            { data: "15/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/15.jpg"] },
            { data: "16/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/16.jpg"] },
            { data: "17/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/17.jpg"] },
            { data: "18/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/18.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/12-DEZEMBRO/19.jpg"] },

            { data: "06/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Calibradora/07.jpg"] },
            { data: "07/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Calibradora/08.jpg"] },
            { data: "09/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Calibradora/09.jpg"] },
            { data: "12/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Calibradora/12.jpg"] },
            { data: "13/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Calibradora/13.jpg"] },
            { data: "14/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Calibradora/14.jpg"] },
            { data: "15/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Calibradora/15.jpg"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Calibradora/19.jpg"] },
            { data: "20/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Calibradora/20.jpg"] },
            { data: "21/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Calibradora/21.jpg"] },



            // { data: "", captura: [""] },


        ],

        Prensas: [
           
            { data: "02/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/02.jpg"] },
            { data: "07/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/07.jpg"] },
            { data: "08/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/08.jpg"] },
            { data: "09/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/09.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/10.jpg"] },
            { data: "13/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/13.jpg"] },
            { data: "14/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/14.jpg"] },
            { data: "15/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/15.jpg"] },
            { data: "16/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/16.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/17.jpg"] },
            { data: "20/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/20.jpg"] },
            { data: "21/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/21.jpg"] },
            { data: "22/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/22.jpg"] },
            { data: "23/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/23.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/24.jpg"] },
            { data: "27/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/27.jpg"] },
            { data: "28/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/28.jpg"] },
            { data: "29/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/29.jpg"] },
            { data: "30/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/30.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/OUTUBRO/31.jpg"] },

            { data: "06/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/6.jpg"] },
            { data: "12/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/12.jpg"] },
            { data: "13/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/13.jpg"] },
            { data: "14/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/14.jpg"] },
            { data: "17/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/17.jpg"] },
            { data: "18/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/18.jpg"] },
            { data: "19/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/19.jpg"] },
            { data: "21/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/21.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/22.jpg"] },
            { data: "24/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/24.jpg"] },
            { data: "25/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/25.jpg"] },
            { data: "26/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/26.jpg"] },
            { data: "27/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/27.jpg"] },
            { data: "28/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/28.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/NOVEMBRO/29.jpg"] },

            { data: "01/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/1.jpg"] },
            { data: "02/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/2.jpg"] },
            { data: "03/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/03.jpg"] },
            { data: "04/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/04.jpg"] },
            { data: "05/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/05.jpg"] },
            { data: "06/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/06.jpg"] },
            { data: "08/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/08.jpg"] },
            { data: "09/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/09.jpg"] },
            { data: "10/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/10.jpg"] },
            { data: "11/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/11.jpg"] },
            { data: "12/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/12.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/14.jpg"] },
            { data: "15/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/15.jpg"] },
            { data: "16/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/16.jpg"] },
            { data: "17/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/17.jpg"] },
            { data: "18/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/18.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/12 DEZEMBRO/19.jpg"] },
            
            
            { data: "05/12/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Prensas/05.jpg"] },
            { data: "06/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Prensas/07.jpg"] },
            { data: "08/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Prensas/08.jpg"] },
            { data: "09/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Prensas/09.jpg"] },
            { data: "12/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Prensas/12.jpg"] },
            { data: "13/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Prensas/13.jpg"] },
            { data: "14/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Prensas/14.jpg"] },
            { data: "15/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Prensas/15.jpg"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Prensas/19.jpg"] },
            { data: "20/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Prensas/20.jpg"] },
            { data: "21/01/2026", captura: ["capturas/Unidade 4/Usinagem/2026/Prensas/21.jpg"] },



             // { data: "", captura: [""] },






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
            


            // { data: "", captura: [""] },




        ],

        Prensas: [

          
            
           ,
            { data: "01/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 01.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 01.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 01.jpg"] },
            { data: "02/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 02.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 02.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 02.jpg"] },
            { data: "07/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 07.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 07.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 07.jpg"] },
            { data: "08/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 08.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 08.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 08.jpg"] },
            { data: "09/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 09.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 09.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 09.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 10.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 10.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 10.jpg"] },
            { data: "13/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 13.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 13.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 13.jpg"] },
            { data: "14/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 14.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 14.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 14.jpg"] },
            { data: "15/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 15.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 14.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 15.jpg"] },
            { data: "16/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 16.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 16.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 16.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 17.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 17.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 17.jpg"] },
            { data: "20/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 20.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 20.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 20.jpg"] },
            { data: "21/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 21.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 21.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 21.jpg"] },
            { data: "22/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 22.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 22.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 22.jpg"] },
            { data: "23/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 23.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 23.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 23.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 24.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 24.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 24.jpg"] },
            { data: "25/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 25.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 25.jpg"] },
            { data: "27/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 27.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 27.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 27.jpg"] },
            { data: "28/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 28.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 28.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 28.jpg"] },
            { data: "29/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 29.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 29.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 29.jpg"] },
            { data: "30/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 30.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 30.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 30.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/MAQ 31.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/ITALP 31.jpg", "capturas/Unidade 4/Tempo_parado/2025/OUTUBRO/HOME 31.jpg"] },

            { data: "03/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/03 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/03 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/03 HOME.jpg"] },
            { data: "04/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/04 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/04 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/04 HOME.jpg"] },
            { data: "05/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/05 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/05 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/05 HOME.jpg"] },
            { data: "06/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/06 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/06 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/06 HOME.jpg"] },
            { data: "07/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/07HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/7 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/07 ITALP.jpg"] },
            { data: "08/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/08 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/08 ITALP.jpg"] },
            { data: "10/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/10 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/10 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/10 HOME.jpg"] },
            { data: "11/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/11 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/11 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/11 HOME.jpg"] },
            { data: "12/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/12 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/12 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/12 HOME.jpg"] },
            { data: "13/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/13 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/13 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/13 HOME.jpg"] },
            { data: "14/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/14 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/14 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/14 HOME.jpg"] },
            { data: "17/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/17 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/17 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/17 HOME.jpg"] },
            { data: "18/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/18 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/18 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/18 HOME.jpg"] },
            { data: "19/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/19 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/19 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/19 MAQ.jpg"] },
            { data: "21/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/21 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/21 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/21 HOME.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/22 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/22 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/22 HOME.jpg"] },
            { data: "24/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/24 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/24 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/24 HOME.jpg"] },
            { data: "25/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/25 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/25 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/25 HOME.jpg"] },
            { data: "26/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/26 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/26 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/26 HOME.jpg"] },
            { data: "27/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/27 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/27 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/27 HOME.jpg"] },
            { data: "28/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/28 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/28 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/28 HOME.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/29 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/29 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/NOVEMBRO/29 MAQ.jpg"] },
           
            { data: "01/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/1 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/01 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/01 HOME.jpg"] },  
            { data: "02/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/02 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/02 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/02ITALP.jpg"] },
            { data: "03/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/03 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/03 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/03ITALP.jpg"] },
            { data: "04/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/04 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/04 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/04 HOME.jpg"] },
            { data: "05/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/05 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/05 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/05 MAQ.jpg"] },
            { data: "06/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/06 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/06 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/06 HOME.jpg"] },
            { data: "08/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/08 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/08 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/08 MAQ.jpg"] },
            { data: "09/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/09 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/09 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/09 MAQ.jpg"] },
            { data: "10/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/10 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/10 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/10 MAQ.jpg"] },
            { data: "11/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/11 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/11 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/11 MAQ.jpg"] },
            { data: "12/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/12 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/12 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/12 MAQ..jpg"] },
            { data: "13/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/13 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/13 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/13 HOME.jpg"] },
            { data: "14/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/14 MAQ..jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/14 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/14 HOME.jpg"] },
            { data: "15/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/15 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/15 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/15 MAQ.jpg"] },
            { data: "16/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/16 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/16 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/16 MAQ.jpg"] },
            { data: "17/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/17 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/17 ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/17 MAQ.jpg"] },
            { data: "18/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/18  MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/18 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/18 ITALP.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/19 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/19 HOME.jpg", ""] },
            { data: "20/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/12 DEZEMBRO/20 MAQ.jpg", "", ""] },
            { data: "21/12/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAQ 11.jpeg", "", ""] },
            
            { data: "05/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/05 MAQUIMOVEL.jpg", "capturas/Unidade 4/Tempo_parado/2026/05 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/05 HOME.jpg"] },
            { data: "06/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/06 MAQUIMOVEL.jpg", "capturas/Unidade 4/Tempo_parado/2026/06 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/06 HOME.jpg"] },
            { data: "07/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/07 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2026/07 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/07 MAQUIMOVEL.jpg"] },
            { data: "08/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/08 HOME.jpg", "capturas/Unidade 4/Tempo_parado/2026/08 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/08 MAQUIMOVEL.jpg"] },
            { data: "09/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/09 home.jpg", "capturas/Unidade 4/Tempo_parado/2026/09 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/09 MAQUIMOVEL.jpg"] },
            { data: "12/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/12 home.jpg", "capturas/Unidade 4/Tempo_parado/2026/12 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/12 MAQUIMOVEL.jpg"] },
            { data: "13/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/13 home.jpg", "capturas/Unidade 4/Tempo_parado/2026/13 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/13 MAQUIMOVEL.jpg"] },
            { data: "14/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/14 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/14 MAQUIMOVEL.jpg", "capturas/Unidade 4/Tempo_parado/2026/14 home.jpg"] },
            { data: "15/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/15 home.jpg", "capturas/Unidade 4/Tempo_parado/2026/15 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/15 MAQUIMOVEL.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/16 MAQUIMOVEL.jpg", "capturas/Unidade 4/Tempo_parado/2026/16 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/16 HOME.jpg"] },
            { data: "17/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/17 home.jpg", "capturas/Unidade 4/Tempo_parado/2026/17 MAQUIMOVEL.jpg", "capturas/Unidade 4/Tempo_parado/2026/17 ITALPRESSE.jpg"] },
            { data: "19/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/19 home.jpg", "capturas/Unidade 4/Tempo_parado/2026/19 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/19 MAQUIMOVEL.jpg"] },
            { data: "20/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/20 home.jpg", "capturas/Unidade 4/Tempo_parado/2026/20 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/20 MAQUIMOVEL.jpg"] },
            { data: "21/01/2026", captura: ["capturas/Unidade 4/Tempo_parado/2026/21 home.jpg", "capturas/Unidade 4/Tempo_parado/2026/21 ITALPRESSE.jpg", "capturas/Unidade 4/Tempo_parado/2026/21 MAQUIMOVEL.jpg"] },

            

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
        Banda_Larga: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larg11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larg11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larg12-Dezembro/semana 04 à 09.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larg12-Dezembro/11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larg12-Dezembro/18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/11.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/18-pt6.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/19-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/19-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/19-pt6.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/20-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/20-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/20-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/20-pt6.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/21-G.png"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/22-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/21-G.png"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/26-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/27-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/27-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/28-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/3- Março/25-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/4-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/5-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/1-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/8-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/12-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/8-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/19-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/16-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/26-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/4- Abril/26-pt3.png"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/7-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/6-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/9-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/13-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/13-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/13-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/13-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/20-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/23g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/23g.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/29-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/27-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larg2024/5- Maio/27-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg7-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg13-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg11-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg14-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg11-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg19-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg21-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg17-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg28-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg28-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarg28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg5-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg5-pt4.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg9-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg9-pt2.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg9-pt3.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg12-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg12-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg12-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg12-pt4.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg12-pt5.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg19 pt1.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg19 pt2.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg19 pt3.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg19 pt4.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg26-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg26-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg26-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarg26-pt4.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg02 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg02 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg02 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg02 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg02 G.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg9-pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg9-pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg9-pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg9-pt4.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg16 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg16 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg16 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg16 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg16 g.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg22 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg22 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg22 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg22 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg22 g.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg23 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg23 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg23 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg23 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg23 g.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg27 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg27 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg27 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg27 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg27g.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg29 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg29 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg29 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg29 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg29 g.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg30 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg30 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg30 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg30 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarg30 g.jpeg"] },



            // { data: "", captura: ["", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", ""] },


        ],

        Cab_fundo: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/11- Novembro/20-25.png"] },

            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/12-Dezembro/04-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/12-Dezembro/SEMANA 11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/12-Dezembro/SEMANA 18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/11.png"] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/12.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/13.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt6.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt7.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt8.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/19-pt4.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/19-pt5.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/19-pt6.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/20-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/20-pt4.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/20-pt5.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/20-pt6.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-pt2.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-pt4.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-pt5.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-pt6.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/26-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/26-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/27-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/27-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/27-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/27-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/28-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/28-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/28-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/28-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/28-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/3-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/4-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/4-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/4-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/4-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/5-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/5-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/5-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/5-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/10-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/10-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/12-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/12-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/12-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/12-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/19-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/19-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/19-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/19-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/26-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/26-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/26-G.jpeg"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/7-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/7-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/7-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/9-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/9-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/9-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/9-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/10-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/10-g.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/13-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/13-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/14-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/14-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/14-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/14-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/16-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/16-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/17-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/17-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/17-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/17-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/21-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/21-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/21-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/23g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/24-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/24-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/24-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/24-g.jpeg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/29-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/29-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/29-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/29-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/30-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/30-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/30-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/30-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/30-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/7-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/7-pt2.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/7-pt4.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/11-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/13-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/13-pt2.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/13-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/13-pt4.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/13-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/14-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/14-pt2.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/14-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/14-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/18-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/18-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/18-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/19-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/19-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/19-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/19-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/21-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/21-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/21-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/21-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/28-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/28-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/5-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/5-pt2.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/5-pt4.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/5-pt5.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/9-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/9-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/9-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/12-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/12-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/12-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/12-pt4.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/12-pt5.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/19 1PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/19 2PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/19 3PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/19 4PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/26-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/26-pt2.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/26-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/26-pt4.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/26-pt5.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/02 PARTE 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/02 PARTE 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/02 PARTE 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/02 PARTE 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/02 G.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/9-pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/9-pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/9-pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/9-pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/9-pt5.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/16 PARTE 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/16 PARTE 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/16 PARTE 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/16 PARTE 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/16 G.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/20-pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/20-pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/20-pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/20-pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/20 g.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/22 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/22 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/22 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/22 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/22 g.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/23 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/23 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/23 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/23 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/23 g.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/27 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/27 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/27 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/27 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/27 g.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/29 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/29 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/29 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/29 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/29 g.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/30pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/30 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/30 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/30 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Cab.Fundo/30 g.jpeg"] },

            { data: "03/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/04 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/04 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/04 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/04 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/4g.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/06 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/06 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/06 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/06 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/6 g.jpeg"] },
            { data: "10/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/10 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/10 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/10 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/10 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/10g.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/13 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/13 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/13 pt3.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/13 pt4.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/13 pt5.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/17 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/17 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/17 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/17 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/17 g.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/19 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/19 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/19 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/19 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/19 g.jpeg"] },
            { data: "23/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/23 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/23 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/23 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/23 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/23 g.jpeg"] },
            { data: "26/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/26 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/26 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/26 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/26 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/26 g.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/27 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/27 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/27 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/27 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Cab.Fundo/27 g.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/1 pt 1.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/1 pt 2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/1 pt 3.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/1 pt 4.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/1g.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/03 pt 1.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/03 pt 2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/03 pt 3.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/03 pt 4.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/3g.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/04 pt 1.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/04 pt 2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/04 pt 3.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/04 pt 4.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/4 g.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/10 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/10 pt 2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/10 pt 3.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/10 pt 4.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/10 g.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/11 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/11 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/11 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/11 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/11 g.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/15 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/15 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/15 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/15 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/15 g.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/19 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/19 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/26 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/26 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/26 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/26g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/1pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/1pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/1pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/1pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/1 g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/09 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/09 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/09 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/09 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/09 g.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/14 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/14 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/14 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/23 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/23 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/23 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/23 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/23 g.jpg"] },

            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/26 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/26 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/26 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/26 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/26 g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/30 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/30 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/30 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/30 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Cab.Fundo/30 g.jpg"] },

            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/04 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/04 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/04 pt03.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/04 pt04.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/4 g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/07 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/07 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/07 pt03.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/07 pt04.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/07 g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/14 pt 01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/14 pt 02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/14 pt 03.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/14 pt 04.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/14 g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/18 pt 01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/18 pt 02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/18 pt 03.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/18 pt 04.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Cab.Fundo/18 g.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/10 PT1.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/10 PT2.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/10 PT3.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/10 PT4.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/10 G.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/17 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/17 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/17 pt3.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/17 pt4.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/17 g.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/24 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/24pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/24 pt3.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/24 pt4.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/24 g.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/29 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/29 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/29 pt3.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/29 pt4.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/29 g.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/31 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/31 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/31 pt3.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/31 pt4.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Cab.Fundo/31 g.jpg"] },

            { data: "07/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/07 PT1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/07 PT2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/07 PT3.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/07 PT4.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/7G.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/14 PT1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/14 PT2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/14 PT3.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/14 PT4.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/14 G.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/21 PT1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/21PT2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/21 PT3.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/21 PT4.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/21 G.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/26 pt01.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/26 pt02.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/26 pt03.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/26 pt04.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Cab.Fundo/26 g.jpeg"] },
           
            { data: "14/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/14 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/14 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/14 pt3.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/14 pt4.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/14 g.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/20 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/20 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/20 pt3.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/20 pt4.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/20g.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/21 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/21 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/21 pt3.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/21 pt4.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/21 g.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/28 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/28 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/28 pt3.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/28 pt4.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Cab.Fundo/28 G.jpeg"] },
            
            { data: "04/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/01 PT1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/01 PT2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/01 PT3.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/01 PT4.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/1 G.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/11 PT1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/11 PT2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/11 PT3.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/11 PT4.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/11 G.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/17 PT1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/17 PT2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/17 PT3.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/17 PT4.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/17 G.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/25 PT01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/25 PT02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/25 PT03.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/25 PT04.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/25 G.jpg"] },
            { data: "01/05/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/30 PT01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/30 PT02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/30 PT03.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/30 PT04.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Cab.Fundo/30 g.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/08 PT01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/08 PT02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/08 PT03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/08 PT04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/08 G.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/16 PT01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/16 PT02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/16 PT03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/16 PT04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/16 g.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/23 PT01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/23 PT02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/23 PT03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/23 PT04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/23 g.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/30 PT01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/30 PT02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/30 PT03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/30 PT04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Cab.Fundo/30 g.jpg"] },
           
            { data: "06/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/06 PT1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/06 PT2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/06 PT3.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/06 PT4.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/06 G.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/13 PT1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/13 PT2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/13 PT3.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/13 PT4.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/13 G.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/19 PT1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/19 PT2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/19 PT3.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/19 PT4.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/19 g.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/27 PT01.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/27 PT02.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/27 PT03.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/27 PT04.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Cab.Fundo/27 g.jpeg"] },
            { data: "03/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/03 pt01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/03 pt02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/03 pt03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/03 pt04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/3g.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/03 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/12 pt01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/11 pt03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/11 PT04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/3g.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/18 pt01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/18 pt02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/18 pt03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/18 pt04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/18 G.jpg"] },
            { data: "25/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/25 pt01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/25 pt02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/25 pt03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/25 pt04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Cab.Fundo/25G.jpg"] },
            { data: "01/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/01 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/01 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/01 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/01 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/01 G.jpg"] },
            { data: "08/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/08 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/08 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/08 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/08 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/08 g.jpg"] },
            { data: "11/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/15 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/15 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/15 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/15 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/15G.jpg"] },
            { data: "22/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/22 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/22 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/22 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/22 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/22 g.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/29 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/29 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/29 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/29 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Cab.Fundo/29 g.jpg"] },
            { data: "05/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/01 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/01 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/01 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/01 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/01 g.jpg"] },
            { data: "12/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/12 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/12 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/12 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/12 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/12.jpg"] },
            { data: "18/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/18 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/18 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/18 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/18 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/18G.jpg"] },
            { data: "26/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/26 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/26 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/26 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/26 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Cab.Fundo/26 g.jpg"] },
            { data: "03/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/03 PT01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/03 PT02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/03 PT03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/03 PT04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/03 G.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/10 PT01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/10 PT02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/10 PT03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/10 PT04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/10 g.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/17 PT01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/17 PT02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/17 PT03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/17 PT04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/17 g.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/24 PT01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/24 PT02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/24 PT03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/24 PT04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/24 g.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/31 PT01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/31 PT02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/31 PT03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/31 PT04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Cab.Fundo/31 g.jpg"] },
             
            { data: "07/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/08 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/08 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/08 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/08 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/8 g.jpg"] },
            { data: "14/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/14 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/14 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/14 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/14 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/14 G.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/22 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/22 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/22 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/22 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/22 g.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/29 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/29 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/29 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/29 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Cab.Fundo/29 g.jpg"] },
           
            { data: "06/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/06 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/06 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/06 pt03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/06 pt04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/06 g.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/13 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/13 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/13 pt03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/13 pt04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/13 g.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/18 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/18 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/18 pt03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/18 pt04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Cab.Fundo/18 g.jpg"] },
           
            { data: "09/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/09 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/09 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/09 pt03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/09 pt04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/09 g.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/16 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/16 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/16 pt03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/16 pt04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Cab.Fundo/16 g.jpg"] },




            // { data: "", captura: ["", "", "", "", ""] },


        ],

        exp1: [
            
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/1- Janeiro/22-01 À 26-01.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/1- Janeiro/22-01 À 26-01 GRÁFICO.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/tampos unid 01 29.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/complemento 01 29.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/tampos 01 pçs 29.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/complemento 01 pçs 29.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/grafico unid 01.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/complemento 05-07 pçs.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/complemento 05-07.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/tampos 01 pçs 29.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/tampos 05-07.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/grafico unid 01 05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/tampos pçs 19-23.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/grafico tampo 19-23.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/complemento peças 19-23.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/complemento grafico 19-23.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/gafico assit 19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-02 complemento.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-02 comple grafico.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-02 tampos.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-02 tampo grafico.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-02 grafico infinito.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/07 COMPL.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/07 COMP.GRAFICO.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/07 TAMPOS .png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/07 TAMPOS GRAFICO.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/08 COMPL.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/08 COMP.GRAFICO.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/08 TAMPOS .png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/08 TAMPOS GRAFICO.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/08 grafico infinito.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/11 COMPL.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/11 COMP.GRAFICO.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/11 TAMPOS .png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/11 TAMPOS GRAFICO.png", ""] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/12 COMPL.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/12 COMP.GRAFICO.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/12 TAMPOS .png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/12 TAMPOS GRAFICO.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/13 COMPL.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/13 COMP.GRAFICO.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/13 TAMPOS.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/13 TAMPOS GRAFICO.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 COMPL.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 COMPL GRAFICO.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 TAMPOS PÇS.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 TAMPOS GRAFICOS.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 GRAFICO INFINITO.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-pt6.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-G.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-pt4.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-pt5.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-pt6.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-G.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-pt4.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-pt5.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-pt6.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-G.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-G.png"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-pt1.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-pt2.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-pt4.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-pt5.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-pt6.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-G.png"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/28-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/28-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/28-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/28-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/3-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/4-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/4-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/4-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/4-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/5-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/5-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/5-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/5-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/10-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/12-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/12-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/12-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/12-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/19-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/19-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/19-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/19-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/26-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/26-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/26-G.jpeg"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/7-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/7-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/7-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/9-g.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/9-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/9-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/9-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/9-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/10-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/10-g.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/13-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/13-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/14-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/14-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/14-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/14-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/16-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/16-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/17-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/17-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/17-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/21-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/21-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/21-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/23 g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/24-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/24-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/24-g.jpeg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/29-pt1.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/29-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/29-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/29-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/30-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/30-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/30-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/30-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/7-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/13-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/13-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/13-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/13-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/14-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/14-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/14-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/14-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/18-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/18-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/18-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/19-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/19-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/19-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/19-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/21-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/21-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/21-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/21-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/28-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/28-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/5-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/5-pt4.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/9-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/9-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/9-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/12-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/12-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/12-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/12-pt4.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/19 3pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/19 4pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/26-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/26-pt2.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/26-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/26-pt4.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/26-pt5.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/02 part 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/02 part 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/02 part 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/02 part 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/02 G.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/9-pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/9-pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/9-pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/9-pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/9-pt5.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/16 part 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/16 part 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/16 part 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/16 part 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/16 G.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/20 part 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/20 part 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/20 part 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/20 part 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/20G.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/22 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/22 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/22 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/22 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/22 G.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/23 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/23 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/23 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/23 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/23 G.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/27 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/27 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/27 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/27 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/27 G.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/29 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/29 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/29 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/29 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/29 g.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/31 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/30 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/31 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/31 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Expedição/31 g.jpeg"] },

            { data: "03/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/04 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/04 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/04 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/04 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/4g.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/06 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/06 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/06 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/06 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/6 g.jpeg"] },
            { data: "10/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/10 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/10 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/10 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/10 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/10g.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/13 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/13 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/13 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/13 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/13 g.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/17 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/17 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/17 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/17 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/17 g.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/19 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/19 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/19 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/19 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/19 g.jpeg"] },
            { data: "24/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/24 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/24 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/24 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/24 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/24 g.jpeg"] },
            { data: "26/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/26 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/26 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/26 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/26 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/26 g.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/27 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/27 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/27 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/27 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Expedição/27 g.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/1 pt1.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/1 pt2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/1 pt3.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/1 pt4.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/1 g.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/3 pt1.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/03 pt2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/03 pt3.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/03 pt4.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/3 g.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/04 pt1.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/04 pt2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/04 pt3.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/04 pt4.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/04 G.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/10 pt1.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/10 pt2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/10 pt3.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/10 g.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/11 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/11 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/11 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/11 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/11 g.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/15 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/15 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/15  pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/15 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/15 g.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/19  pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/19 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/19 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/26 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/26 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/26 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/26 g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/01 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/01 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/01 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/01 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/01 g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/09 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/09 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/09 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/09 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/09 g.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/14 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/14 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/14 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/23 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/23 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/23 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/23 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/23 g.jpg"] },

            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/26 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/26 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/26 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/26 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/26 g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/30 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/30 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/30 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/30 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Expedição/30 g.jpg"] },

            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/04 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/04 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/04 pt03.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/04 pt04.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/04 g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/07 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/07 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/07 pt03.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/07 pt04.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/7 g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/14 pt 01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/14 pt 02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/14 pt 03.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/14 pt 04.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/14 g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/18 pt 01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/18 pt 02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/18 pt 03.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/18 pt 04.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Expedição/18 g.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/10 PT01.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/10 PT02.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/10 PT03.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/10 PT04.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/10 G.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/17 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/17 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/17 pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/17 pt04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/17 g.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/24 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/24 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/24 pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/24 pt04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/24 g.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/29 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/29 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/29 pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/29 pt04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/29 g.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/31 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/31 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/31 pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/31 pt04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Expedição/31 g.jpg"] },

            { data: "07/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/07 PT1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/07 PT2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/07 PT3.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/07 PT4.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/7G.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/14 PT1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/14 PT2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/14 PT3.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/14 PT4.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/14 g.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/22 PT1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/22 PT2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/22 PT3.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/22 PT4.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/22 g.jpg"] },
            { data: "28/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/28 pt01.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/28 pt02.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/28 pt03.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/28 pt04.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Expedição/28 g.jpeg"] },
            
            { data: "14/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/14 PT01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/14 PT02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/14 PT03.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/14 PT04.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/14.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/20 PT01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/20 PT02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/20 PT03.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/20 PT04.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/20 g.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/21 PT01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/21 PT02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/21 PT03.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/21 PT04.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/21 g.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/28 PT01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/28 PT02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/28 PT03.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/28 PT04.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Expedição/28 g.jpeg"] },

            { data: "04/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/04 pt01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/04 pt02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/04 pt03.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/04 pt04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/4 g.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/11 pt01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/11 pt02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/11 pt03.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/11 pt04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/11 g.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/17 pt01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/17 pt02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/17 pt03.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/17 pt04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/17 G.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/25 pt1.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/25 pt2.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/25 pt3.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/25 pt4.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/25 g.jpg"] },
            { data: "01/05/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/30 pt1.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/30 pt2.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/30 pt3.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/30 pt4.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Expedição/30g.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/08 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/08 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/08 PT 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/08 PT 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/08 G.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/16 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/16 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/16 PT 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/16 PT 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/16 g.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/23 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/23 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/23 PT 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/23 PT 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/23 g.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/30 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/30 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/30 PT 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/30 PT 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Expedição/30g.jpg"] },

            { data: "06/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/06 pt 01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/06 pt 02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/06 pt 03.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/06 pt 04.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/06 g.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/13 pt 01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/13 pt 02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/13 pt 03.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/13 pt 04.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/13 G.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/19 pt 01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/19 pt 02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/19 pt 03.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/19 pt 04.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/19 G.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/27 PT 01", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/27 PT 02.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/27 PT 03.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/27 PT 04.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Expedição/27G.jpeg"] },
            { data: "03/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/03 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/03 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/03 PT03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/03 PT04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/3G.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/11 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/11 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/11 PT03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/11 PT04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/11G.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/18 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/18 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/18 PT03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/18 PT04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/18 G.jpg"] },
            { data: "25/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/25 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/25 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/25 PT03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/25 PT04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Expedição/25g.jpg"] },
            { data: "01/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/01 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/01 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/01 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/01 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/01 G.jpg"] },
            { data: "08/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/08 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/08 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/08 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/08 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/08 G.jpg"] },
            { data: "11/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/15 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/15 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/15 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/15 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/15 G.jpg"] },
            { data: "22/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/22 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/22 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/22 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/22 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/22 g.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/29 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/29 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/29 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/29 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Expedição/29 g.jpg"] },
            { data: "05/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/05 PT01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/05 PT02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/05 PT03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/05 PT04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/05 G.jpg"] },
            { data: "12/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/12 PT01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/12 PT02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/12 PT03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/12 PT04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/12 g.jpg"] },
            { data: "18/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/18 PT01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/18 PT02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/18 PT03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/18 PT04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/18 g.jpg"] },
            { data: "26/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/26 PT01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/26 PT02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/26 PT03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/26 PT04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Expedição/26 g.jpg"] },
            { data: "03/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/03 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/03 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/03 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/03 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/03 g.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/10 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/10 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/10 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/10 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/10 g.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/17 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/17 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/17 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/17 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/17g.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/24 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/24 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/24 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/24 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/24 g.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/31 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/31 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/31 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/31 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Expedição/31g.jpg"] },

            { data: "07/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/08 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/08 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/08 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/08 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/08 g.jpg"] },
            { data: "11/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/14 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/14 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/14 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/14 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/14 g.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/22 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/22 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/22 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/22 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/22 g.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/29 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/29 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/29 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/29 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Expedição/29 g.jpg"] },

           { data: "06/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/06 pt 01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/06 pt 02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/06 pt 03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/06 pt 04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/06 g.jpg"] },
           { data: "13/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/13  pt 01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/13  pt 02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/13  pt 03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/13  pt 04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/13 g.jpg"] },
           { data: "19/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/18 pt 01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/18 pt 02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/18 pt 03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/18 pt 04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Expedição/18 g.jpg"] },
           
          { data: "09/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Expedição/09 pt 01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Expedição/09 pt 02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Expedição/09 pt 03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Expedição/09 pt 04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Expedição/09 g.jpg"] },
          { data: "16/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Expedição/16 pt 01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Expedição/16 pt 02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Expedição/16 pt 03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Expedição/16 pt 04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Expedição/16 g.jpg"] },

           


           // { data: "", captura: ["", "", "", "", ""] },



        ],

        Lix_Osso: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 1/osso/11- Novembro/20-25.png"] },

            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 1/osso/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 1/osso/12- Dezembro/SEMANA 04 À 09.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 1/osso/12- Dezembro/SEMANA 11 À 15.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 1/osso/12- Dezembro/SEMANA 18 À 20.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/1- Janeiro/15-01 Á 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/1- Janeiro/22-01 Á 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/11.png"] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/12.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/13.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt6.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt7.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt8.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-G.png"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/22-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/22-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/22-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/26-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/28-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/28-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/28-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/28-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/3-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/4-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/4-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/4-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/4-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/4-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/5-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/5-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/5-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/5-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/10-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/12-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/12-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/12-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/12-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/19-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/19-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/19-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/19-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/26-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/26-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/26-G.jpeg"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/7-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/7-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/7-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/9-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/9-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/9-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/9-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/10-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/10-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/14-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/14-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/14-pt3.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/14-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/16-pt3.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/16-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/17-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/17-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/17-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/17-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/21-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/21-pt3.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/21-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/23 g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/24-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/24-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/24-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/24-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/24-g.jpeg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/29-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/29-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/29-pt3.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/29-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/30-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/30-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/30-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/30-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/7-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/13-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/13-pt2.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/13-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/13-pt4.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/13-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/14-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/14-pt2.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/14-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/14-pt4.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/14-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/17-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/17-pt2.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/17-pt4.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/18-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/18-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/18-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/19-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/19-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/19-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/19-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/21-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/21-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/21-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/21-pt4.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/21-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/28-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/28-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/5-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/5-pt4.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/9-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/9-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/9-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/12-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/12-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/12-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/12-pt4.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/19 1PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/19 2PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/19 3PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/19 3PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/19 4PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/26-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/26-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/26-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/26-pt4.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/26-pt5.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/02 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/02 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/02 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/02 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/02 g.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/9-pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/9-pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/9-pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/9-pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/9-pt5.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/16 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/16 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/16 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/16 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/16g.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/20 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/20 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/20 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/20 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/20 g.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/22 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/22 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/22 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/22 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/22 g.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/23 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/23 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/23 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/23pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/23 g.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/27 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/27 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/27 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/27 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/27 g.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/29 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/29 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/29 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/29 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/29 g.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/30 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/30 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/30 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/30 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Osso/30 g.jpeg"] },

            { data: "03/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/04 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/04 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/04 3pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/04 4pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/4 g.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/06 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/06 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/06 3pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/06 4pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/06 g.jpeg"] },
            { data: "10/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/10 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/10 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/10 3pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/10 4pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/10g.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/13 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/13 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/13 pt3.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/13 pt4.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/13 pt5.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/17 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/17 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/17 pt3.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/17 pt4.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/17 g.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/19 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/19 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/19 pt3.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/19 pt4.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/19 g.jpeg"] },
            { data: "23/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/23 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/23 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/23 pt3.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/23pt4.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/23 g.jpeg"] },
            { data: "26/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/25 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/25 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/25 3pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/25 4pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/25 g.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/27 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/27 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/27 3pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/27 4pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Osso/27 g.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/01 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/01 pt 02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/01 pt 03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/01 pt 04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/1g.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/03 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/03 pt 02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/03 pt 03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/04 pt 04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/03 g.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/04 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/04 pt 02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/04 pt 03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/04 pt 04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/04 g.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/10 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/10 pt 02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/10 pt03.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/10 pt 04.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/10 g.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/11 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/11 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/11 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/11 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/11g.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/15 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/15 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/15 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/15 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/15 g.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/19 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/19 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/26 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/26 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/26 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/26g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/01 1pt.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/01 2pt.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/01 3pt.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/01 4pt.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/1g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/9 1pt.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/09 2pt.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/09 3pt.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/09 4pt.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/09 g.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/14 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/14 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/14 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/23 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/23 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/23 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/23 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/23 g.jpg"] },

            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/26 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/26 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/26 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/26 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/26 g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/30 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/30 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/30 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/30 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/30 g.jpg"] },

            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/04 pt 01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/04 pt 02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/04 pt 03.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/04 pt 04.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/4g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/07 pt 01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/07 pt 02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/07 pt 03.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/07 pt 04.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/7g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/14 pt1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/14 pt2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/14 pt3.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/14 pt4.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/14 g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/18 pt1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/18 pt2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/18 pt3.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/18 pt4.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Osso/18 g.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/10 1pt.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/10 2pt.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/10 3pt.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/10 4pt.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/10 g.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/17 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/17 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/17 pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/17 pt 04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/17 g.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/24 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/24 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/24 pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/24 pt04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/24 g.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/29 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/29 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/29 pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/29 pt04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/29 g.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/31 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/31 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/31 pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/31 pt04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/31 g.jpg"] },

            { data: "07/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/7pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/7pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/7pt03.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/7pt04.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/7 g.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/14 pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/14pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/14 pt03.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/14 pt04.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/14 g.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/21 pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/21 pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/21 pt03.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/21 pt04.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/21 G.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/26 pt01.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/26 pt02.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/26 pt03.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/26 pt04.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Osso/26 g.jpeg"] },
            
            { data: "14/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/14PT01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/14PT02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/14PT03.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/14PT04.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/14 G.jpeg"] },
            { data: "18/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/18PT01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/18PT02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/18PT03.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/18PT04.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/18 G.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/21PT01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/21PT02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/21PT03.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/21PT04.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/21 g.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/28PT01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/28PT02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/28PT03.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/28PT04.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Osso/28 G.jpeg"] },

            { data: "04/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/04 pt01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/04 pt02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/04 pt03.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/04 pt04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/4 g.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/11 pt01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/11 pt02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/11 pt03.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/11 pt04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/11g.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/17 pt01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/17 pt02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/17 pt03.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/17 pt04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/17 G.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/25 1pt.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/25 2pt.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/25 3pt.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/25 4pt.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/25g.jpg"] },
            { data: "01/05/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/30 1pt.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/30 2pt.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/30 3pt.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/30 4pt.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Osso/30 g.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/08 pt 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/08 pt 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/08 pt 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/08 pt 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/08 G.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/16 pt 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/16 pt 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/16 pt 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/16 pt 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/16 g.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/23 pt 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/23 pt 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/23 pt 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/23 pt 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/23 g.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/30 pt 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/30 pt 0.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/30 pt 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/30 pt 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Osso/30 g.jpg"] },
            
            { data: "06/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/06 PT01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/06 PT02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/06 PT03.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/06 PT04.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/06 G.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/13 PT01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/13 PT02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/13 PT03.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/13 PT04.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/13g.jpg"] }, 
            { data: "19/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/19 PT01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/19 PT02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/19 PT03.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/19 PT04.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/19 g.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/27 PT1.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/27 PT2.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/27 PT3.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/27 PT4.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Osso/27 G.jpeg"] },
            { data: "03/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/03 pt01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/03 pt02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/03 pt03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/03 pt0.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/3g.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/11 pt01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/11 pt02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/11 pt03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/11 pt04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/11 g.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/18 pt01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/18 pt02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/18 pt03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/18 pt04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/18g.jpg"] },
            { data: "25/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/25 pt01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/25 pt02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/25 pt03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/25 pt04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Osso/25g.jpg"] },
            { data: "01/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/01 pt 01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/01 pt 02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/01 pt 03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/01 pt 04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/01 g.jpg"] },
            { data: "08/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/08 pt 01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/08 pt 02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/08 pt 03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/08 pt 04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/08 g.jpg"] },
            { data: "11/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/15 pt 01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/15 pt 02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/15 pt 03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/15 pt 04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/15 G.jpg"] },
            { data: "22/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/22 pt 01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/22 pt 02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/22 pt 03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/22 pt 04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/22 g.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/29  pt 01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/29  pt 02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/29  pt 03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/29  pt 04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Osso/29 g.jpg"] },
            { data: "05/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/01 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/01 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/01 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/01 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/01 g.jpg"] },
            { data: "12/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/12 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/12 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/12 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/12 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/12 g.jpg"] },
            { data: "18/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/18 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/18 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/18 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/18 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/18 g.jpg"] },
            { data: "26/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/26 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/26 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/26 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/26 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Osso/26g.jpg"] },
            { data: "03/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/03 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/03 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/03 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/03 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/03 g.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/10 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/10 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/10 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/10 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/10 g.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/17 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/17 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/17 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/17 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/17 g.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/24 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/24 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/24 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/24 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Osso/24 g.jpg"] },
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




            // { data: "", captura: ["", "", "", "", ""] },



        ],

        Usinagem: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 1/usinagem/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 1/usinagem/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 1/usinagem/12-Dezembro/SEMANA 04-12 ÀS 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 1/usinagem/12-Dezembro/11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 1/usinagem/12-Dezembro/18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/11.png"] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/12.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt6.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt7.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt8.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/19-pt4.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/19-pt5.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/19-pt6.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/20-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/20-pt4.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/20-pt5.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/20-pt6.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-G.png"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/22-pt3.jpg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/22-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/26-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/27-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/27-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/27-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/27-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/28-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/28-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/28-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/28-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/3-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/4-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/4-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/4-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/4-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/5-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/5-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/5-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/5-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/10-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/12-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/12-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/12-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/12-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/19-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/19-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/19-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/19-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/26-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/26-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/26-G.jpeg"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/7-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/9-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/9-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/9-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/10-g.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/13-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/13-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/14-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/14-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/14-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/14-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/16-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/16-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/17-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/17-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/17-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/23 g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/24-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/24-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/24-g.jpeg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/29-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/29-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/29-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/29-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/30-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/30-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/30-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/7-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/13-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/13-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/13-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/13-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/14-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/14-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/14-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/14-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/18-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/18-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/18-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/19-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/19-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/19-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/19-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/21-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/21-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/21-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/21-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/28-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/28-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/5-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/5-pt4.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/9-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/9-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/9-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/12-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/12-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/12-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/12-pt4.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/19 1PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/19 2PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/19 3PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/19 4PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/26-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/26-pt2.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/26-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/26-pt4.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/02 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/02 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/02 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/02 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/2 g.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/9-pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/9-pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/9-pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/9-pt4.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/16 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/16 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/16 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/16 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/16 g.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/20 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/20 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/20 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/20 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/20 g.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/22 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/22 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/22 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/22-pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/22 g.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/23 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/23 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/23 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/23 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/23 g.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/27 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/27 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/27 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/27 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/27 g.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/29 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/29 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/29 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/29 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/29g.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/30 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/30 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/30 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/30 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/Usinagem/30 g.jpeg"] },

            { data: "03/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/04 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/04 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/04 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/04 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/4g.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/06 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/06 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/06 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/06 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/6g.jpeg"] },
            { data: "10/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/10 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/10 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/10 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/10 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/10 g.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/13 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/13 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/13 pt3.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/13 pt4.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/13 pt5.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/17 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/17 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/17 pt3.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/17 pt4.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/17 g.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/19 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/19 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/19 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/19 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/19 g.jpeg"] },
            { data: "24/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/24 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/24 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/24 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/24 pt4.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/24 g.jpeg"] },
            { data: "26/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/26 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/26 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/26 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/26 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/26 g.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/27 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/27 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 1/Usinagem/27 g.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/1 pt01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/1 pt02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/1 pt03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/1 pt04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/1g.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/03 pt01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/03 pt02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/03 pt03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/03 pt04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/03 g.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/04 pt01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/04 pt02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/04 pt03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/04 pt04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/04 g.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/10 pt01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/10 pt02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/10 pt03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/10 pt04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/10 g.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/11 pt 1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/11 pt 2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/11 pt 3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/11 pt 4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/11g.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/15 pt 1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/15 pt 2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/15 pt 3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/15 pt 4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/15 g.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/19 pt 1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/19 pt 2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/19 pt 3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/19 pt 4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/26 pt 1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/26 pt 2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/26 pt 3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/26 pt 4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/26g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/01 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/01 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/01 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/01 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/01 g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/09 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/09 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/09 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/09 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/9 g.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/14 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/14 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/14 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/23 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/23 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/23 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/23 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/23 g.jpg"] },

            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/26 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/26 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/26 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/26 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Usinagem/26 g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/30 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/30 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/30 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/30 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 1/Osso/30 g.jpg"] },

            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/4 pt 01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/4 pt 02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/4 pt 03.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/4 pt 04.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/4 g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/07 pt 01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/07 pt 02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/07 pt 03.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/07 pt 04.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/7 g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/14  pt1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/14  pt2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/14  pt3.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/14  pt4.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/14 g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/18 pt1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/18 pt2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/18  pt3.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/18 pt4.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 1/Usinagem/18 g.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/10 1PT.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/10 2PT.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/10 3PT.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/10 4PT.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Osso/10 g.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/17 PT01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/17 PT02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/17 PT03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/17 PT04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/17 G.jpg"] },
            { data: "25/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/24 PT01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/24 PT02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/24 PT02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/24 PT03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/24 PT04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/24-G.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/31 PT01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/31 PT02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/31 PT03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/31 PT04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 1/Usinagem/31 g.jpg"] },

            { data: "07/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/01 pt 01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/01 pt 02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/01 pt 03.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/01 pt 04.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/7g.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/14 pt 01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/14 pt 02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/14 pt 03.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/14 pt 04.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/14 g.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/21 pt 01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/21 pt 02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/21 pt 03.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/21 pt 04.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/21G.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/26 pt 01.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/26 pt 02.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/26 pt 03.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/26 pt 04.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 1/Usinagem/26 g.jpeg"] },
            
            { data: "14/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/14pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/14pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/14pt3.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/14pt4.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/14g.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/20pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/20pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/20pt3.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/20pt4.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/20G.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/21pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/21pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/21pt3.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/21pt4.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/21g.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/28pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/28pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/28pt3.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/28pt4.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 1/Usinagem/28 G.jpeg"] },

            { data: "04/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/04 PT01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/04 PT02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/04 PT03.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/04 PT04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/4 G.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/11 PT01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/11 PT02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/11 PT03.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/11 PT04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/11 G.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/17 PT01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/17 PT02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/17 PT03.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/17 PT04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/17 g.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/25 1PT.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/25 2PT.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/25 3PT.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/25 4PT.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 1/Usinagem/25 G.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/08 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/08 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/08 PT 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/08 PT 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/08G.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/16 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/16 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/16 PT 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/16 PT 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/16 G.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/23 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/23 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/23 PT 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/23 PT 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/23 g.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/30 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/30 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/30 PT 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/30 PT 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 1/Usinagem/30 g.jpg"] },

            { data: "06/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/06 PT1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/06 PT2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/06 PT3.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/06 PT4.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/06 G.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/13 PT1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/13 PT2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/13 PT3.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/13 PT4.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/13.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/19 PT1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/19 PT2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/19 PT3.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/19 PT4.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/19 G.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/27 pt01.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/27 pt02.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/27 pt03.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/27 pt04.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 1/Usinagem/27 g.jpeg"] },
            { data: "03/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/03 pt01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/03 pt02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/03 pt03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/03 pt04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/3g.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/11 pt01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/11 pt02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/11 pt03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/11 pt04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/11g.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/18 pt01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/18 pt02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/18 pt03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/18 pt04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/18 g.jpg"] },
            { data: "25/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/25 pt01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/25 pt02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/25 pt03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/25 pt04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 1/Usinagem/25 G.jpg"] },
            { data: "01/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/01 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/01 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/01 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/01 PT034.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/01 G.jpg"] },
            { data: "08/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/08 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/08 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/08 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/08 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/08G.jpg"] },
            { data: "11/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/15 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/15 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/15 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/15 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/15 G.jpg"] },
            { data: "22/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/22 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/22 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/22 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/22 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/22 g.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/29 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/29 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/29 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/29 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 1/Usinagem/29 g.jpg"] },
            { data: "09/08/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/05 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/05 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/05 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/05 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/05 g.jpg"] },
            { data: "12/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/12  pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/12  pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/12  pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/12  pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/12.jpg"] },
            { data: "18/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/18 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/18 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/18 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/18 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/18 g.jpg"] },
            { data: "26/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/26 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/26 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/26 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/26 pt4.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 1/Usinagem/26 g.jpg"] },
            { data: "03/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/03 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/03 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/03 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/03 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/03 g.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/10 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/10 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/10 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/10 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/10 g.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/17 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/17 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/17 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/17 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/17 g.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/24 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/24 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/24 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/24 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/24 g.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/31 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/31 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/31 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/31 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 1/Usinagem/31 g.jpg"] },

            { data: "07/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/07 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/07 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/07 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/07 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/07 g.jpg"] },
            { data: "11/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/14 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/14 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/14 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/14 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/14 G.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/22 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/22 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/22 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/22 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/22 G.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/29 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/29 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/29 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/29 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 1/Usinagem/29 g.jpg"] },

            { data: "06/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/06 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/06 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/06 pt03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/06 pt04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/06 g.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/13 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/13 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/13 pt03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/13 pt04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/13 g.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/18 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/18 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/18 pt03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/18 pt04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 1/Usinagem/18g.jpg"] },

           { data: "09/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Usinagem/09 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Usinagem/09 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Usinagem/09 pt03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Usinagem/09 pt04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 1/Usinagem/09 g.jpg"] },
           { data: "16/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/16 pt1.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/16 pt2.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/16 pt3.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/16 pt4.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/16 g.jpg"] },


           //{ data: "", captura: ["", "", "", "", ""] },
 
            


        ],
    },


    UR2: {
        Us_curvado: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 2/Curvados/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Curvados/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Curvados/12- Dezembro/SEMANA 04-12 À 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Curvados/12- Dezembro/SEMANA 11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Curvados/12- Dezembro/SEMANA 18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/1.png"] },

            { data: "01/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/1.png"] },
            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/11.png"] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/12.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/13.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/18-pt3.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/19-pt2.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/20 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/20 GRAF.jpg"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/21-G.png"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/27 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/27 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/27 INFINITO.jpg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/28 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/28 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/28 INFINITO.jpg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/01 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/01 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/01 infinito.jpg"] },
            { data: "02/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/02 pçs.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/02 grafico.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/02 infinito.png"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/03 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/03 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/03 infinito.jpg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/04 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/04 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/04 infinito.jpg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/05 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/05 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/05 infinito.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/08 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/08  grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/08 infinito.jpg"] },
            { data: "09/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/09 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/09  grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/09 infinito.jpg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/10 infinito.jpg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/12 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/12 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/12 infinito.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/16 infinito.jpg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/19 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/19 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/19 infinito.jpg"] },
            { data: "24/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/24 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/24 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/24 infinito.jpg"] },
            { data: "25/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/25 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/25 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/25 infinito.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/26 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/26 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/26 infinito.jpeg"] },
            { data: "29/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/29 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/29  grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/29 infinito.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/6 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/6 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/6 infinito.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/7 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/7 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/7 infinito.jpeg"] },
            { data: "08/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/8 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/8 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/8 infinito.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/9 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/9 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/9 infinito.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/10 infinito.jpg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/13 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/13 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/13 infinito.jpg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/14 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/14 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/14 infinito.jpg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/16 infinito.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/16 infinito.jpg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/17 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/17 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/17 infinito.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/20 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/20 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/20 infinito.jpg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/21 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/21 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/21 infinito.jpg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/23 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/23 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/23 infinito.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/24 1pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/24 2pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/24 g.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/27 1pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/27 2pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/27 infinito.jpg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/29 1pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/29 2pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/29 g.jpg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/30 1pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/30 2pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/30 g.jpg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/7 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/7 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/7 3pt.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/11 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/11 g.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/13 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/13 g.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/14 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/14 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/14 g.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/18 g.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/19 g.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/20 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/20 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/20 g.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/21 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/21 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/21 g.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/28 g.jpg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/05 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/05 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/5G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/09 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/09 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/9G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/12G.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/26 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/26 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/26 G.jpg"] },
            { data: "29/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/29 part 01.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/29 part 02.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/29 g.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/02 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/02 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/3g.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/09 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/09 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/9g.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/16 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/16parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/16 g.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/22 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/22 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/22 g.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/23 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/23 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/23 g.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/27 pt01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/27 pt02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/27 g.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/29 pt01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/29 pt02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/29 g.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/30 pt01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/30 pt02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Curvados/30 g.jpeg"] },

            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/06 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/06 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/06 g.jpeg"] },
            { data: "12/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/12 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/12 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/12 g.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/13 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/13 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/13g.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/17 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/17 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/17 g.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/19 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/19 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/19 g.jpeg"] },
            { data: "24/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/24 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/24 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/24 g.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/27 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/27 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Curvados/27 G.jpeg"] },


            { data: "04/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/04 pt 1.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/04 pt 2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/4 g.jpeg"] },
            { data: "09/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/9 1pt.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/9 2pt.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/9 g.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/10 1pt.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/10 2pt.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/10 g.jpg"] },
            { data: "11/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/11 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/11 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/11 g.jpg"] },
            { data: "14/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/15 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/15 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/15 g.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/26 1pt.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/26 2pt.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/26g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/1 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/1 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/1 g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/9 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/09 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/09 g.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/14g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/23 pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/23 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/23 g.jpg"] },

            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/26 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/26pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/26 g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/30pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/30 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Curvados/30 g.jpg"] },

            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Curvados/04 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Curvados/04 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Curvados/4 g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Curvados/07 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Curvados/07 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Curvados/7 g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Curvados/13 pt1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Curvados/13 pt2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Curvados/13 g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Curvados/18 pt1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Curvados/18 pt2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Curvados/18 g.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/10 PT01.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/10 PT02.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/10 G.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/17 pt 01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/17 pt 02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/17 g.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/24 pt 01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/24 pt 02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/24 g.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/29 pt 01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/29 pt 02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/29 g.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/31 pt 01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/31 pt 02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Curvados/31 G.jpg"] },

            { data: "07/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Curvados/07 pt1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Curvados/07 pt2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Curvados/7 g.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Curvados/14 pt1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Curvados/14 pt2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Curvados/14 g.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Curvados/21 pt1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Curvados/21 pt2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Curvados/21 g.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Curvados/26 pt 01.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Curvados/26 pt 02.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Curvados/26 g.jpeg"] },
            
            { data: "14/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Curvados/14 PT1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Curvados/14 PT2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Curvados/14 G.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Curvados/20 PT1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Curvados/20PT2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Curvados/20 g.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Curvados/21 PT1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Curvados/21PT2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Curvados/21 g.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Curvados/29 PT1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Curvados/28 PT2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Curvados/28 g.jpeg"] },
            
            { data: "04/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/04  PT1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/04  PT2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/04  g.jpeg"] },
            { data: "07/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/11 PT1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/11  PT2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/11  g.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/17 PT1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/17 PT2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/17 g.jpeg"] },  
            { data: "25/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/25 pt01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/25 pt02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/25 g.jpg"] },
            { data: "01/05/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/30 pt01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/30 pt02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Curvados/30 g.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/08 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/08 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/08 G.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/16 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/16 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/16 g.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/23 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/23 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/23 g.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/30PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/30PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/30 g.jpg"] },

            { data: "06/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Curvados/06 PT 01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Curvados/06 PT 02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Curvados/06 G.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Curvados/13 PT 01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Curvados/13 PT 02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Curvados/13 G.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Curvados/19 PT 01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Curvados/19 PT 02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Curvados/19 g.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Curvados/27 PT1.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Curvados/27 PT2.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Curvados/27 G.jpeg"] },
            { data: "03/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Curvados/03 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Curvados/03 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Curvados/03 G.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Curvados/11 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Curvados/11 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Curvados/11g.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Curvados/18 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Curvados/18 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Curvados/18g.jpg"] },
            { data: "25/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Curvados/25 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Curvados/25 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Curvados/25 G.jpg"] },
            { data: "01/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/01 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/01 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/01 G.jpg"] },
            { data: "08/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/08 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/08 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/08G.jpg"] },
            { data: "11/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/15 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/15 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/15G.jpg"] },
            { data: "22/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/22 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/22 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/22g.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/30 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/30 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Curvados/30 g.jpg"] },
            { data: "05/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Curvados/05 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Curvados/05 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Curvados/5g.jpg"] },
            { data: "12/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Curvados/12 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Curvados/12 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Curvados/12g.jpg"] },
            { data: "18/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Curvados/18 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Curvados/18 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Curvados/18 g.jpg"] },
            { data: "26/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Curvados/26 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Curvados/26 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Curvados/26 g.jpg"] },
            { data: "03/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/03 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/03 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/3g.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/10 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/10 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/10 g.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/17 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/17 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/17 g.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/25 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/25 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/25 G.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/31 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/31 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Curvados/31g.jpg"] },

            { data: "07/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Curvados/07 1pt.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Curvados/07 2pt.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Curvados/7 g.jpg"] },
            { data: "11/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Curvados/14 1pt.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Curvados/14 2pt.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Curvados/14 g.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Curvados/22 1pt.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Curvados/22 2pt.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Curvados/22 g.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Curvados/29  pt01.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Curvados/29  pt02.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Curvados/29 g.jpg"] },

            { data: "06/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Curvados/06 PT01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Curvados/06 PT02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Curvados/06 G.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Curvados/13 PT01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Curvados/13 PT02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Curvados/13 g.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Curvados/19 PT01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Curvados/19 PT02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Curvados/19 g.jpg"] },

            { data: "09/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Curvados/09 pt1.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Curvados/09 pt2.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Curvados/09 g.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Curvados/16 pt1.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Curvados/16 pt2.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Curvados/16g.jpg"] },
        

             // { data: "", captura: ["", "", ""] },
           
        ],

        Estofaria: [

            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofari11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofari11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofari12- Dezembro/SEMANA 04-12 À 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofari12- Dezembro/SEMANA 11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofari12- Dezembro/SEMANA 18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/11.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/13.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/18-pt3.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/19-pt3.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/20 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/20 GRAFICO.jpg"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/27 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/27 INFINITO.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/INFINITO.jpg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/28 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/28 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/3- Março/28 INFINITO.jpg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/01 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/01 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/01 infinito.jpg"] },
            { data: "02/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/02 pçs.png", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/02 grafico.png", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/02 infinito.png"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/03 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/03 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/03 infinito.jpg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/04 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/04 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/04 infinito.jpg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/05 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/05 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/05 infinito.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/08 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/08 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/08 infinito.jpg"] },
            { data: "09/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/09 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/09 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/09 infinito.jpg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/10 infinito.jpg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/12 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/12 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/12 infinito.jpg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/16 infinito.jpg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/19 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/19 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/19 infinito.jpg"] },
            { data: "24/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/24 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/24 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/24 infinito.jpg"] },
            { data: "25/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/25 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/25 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/25 infinito.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/26 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/26 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/26 infinito.jpeg"] },
            { data: "29/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/29 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/29 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/4- Abril/29 infinito.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/6 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/6 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/6 ifinito.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/7 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/7 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/7 ifinito.jpeg"] },
            { data: "08/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/8 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/8 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/8 ifinito.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/9 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/9 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/9 infinito.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/10 infinito.jpg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/16 infinito.jpg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/17 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/17 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/17 infinito.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/20 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/20 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/20 infinito.jpg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/21 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/21 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/21 infinito.jpg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/23 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/23 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/23 infinito.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/25 1PT.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/25 2PT.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/25 g.jpg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/29 1PT.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/29 2PT.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/29 g.jpg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/30 1PT.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/30 2PT.jpg", "capturas/Retrabalhos/unidade 2/Estofari2024/5- Maio/30 g.jpg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari7 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari7 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari7G.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari11 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari11 G.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari13 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari13 G.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari15 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari15 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari15 g.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari18 g.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari19 G.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari20 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari20 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari20 G.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari21 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari21 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari21 G.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofari28 G.jpg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari5 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari5 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari5G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari9 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari9 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari9G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari12 G.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari26 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari26 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari26 G.jpg"] },
            { data: "30/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari30 part 01.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari30 part 02.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofari30g.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari02 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari02 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari3g.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari09 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari09 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari09g.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari16 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari16 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari16G.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari22 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari22 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari22 g.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari23 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari23 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari23 g.jpeg"] },
            { data: "26/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari26 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari26 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari26 g.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari29 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari29 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari29 g.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari30 pt01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari30 pt02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofari30 g.jpeg"] },

            { data: "03/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari04 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari04 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari4 g.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari06 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari06 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari6 g.jpeg", "capturas/Unidade 2/Estofari2024/9- Setembro/zBordadeir9.png"] },
            { data: "10/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari10 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari10 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari10 g.jpeg", "capturas/Unidade 2/Estofari2024/9- Setembro/zBordadeir11.png"] },
            { data: "12/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari12 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari12 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari12g.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari13 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari13 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari13g.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari17 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari17 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari17 g.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari19 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari19 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari19 g.jpeg"] },
            { data: "24/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari24 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari24 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari24 g.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari27 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari27 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofari27 g.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari01 PT01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari01 PT02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari1 G.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari03 PT01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari03 PT02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari3g.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari04 PT01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari04 PT02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari4 g.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari10 PT01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari10 PT02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari10 G.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari11 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari11 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari11 g.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofari19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/26 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/26 g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari1 g.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari1 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari1 g.jpg"] },
            { data: "08/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari8 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari8 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari8 g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari9 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari9 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari9.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari14 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari23 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari23 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari23g.jpg"] },

            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari26 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari26 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari26g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari30 pt 01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari30 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofari30 g.jpg"] },

            { data: "03/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofari03 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofari03 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofari03 g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofari06 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofari06 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofari06 g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofari14 pt 01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofari14 pt 02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofari14g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofari18 pt 01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofari18 pt 02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofari18g.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari10 PT01.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari10 PT02.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari10 G.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari17 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari17 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari17 g.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari24 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari24 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari24 G.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari29 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari29 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari29 g.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari31  pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari31 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofari31 g.jpg"] },

            { data: "07/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Estofari07 pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Estofari07 pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Estofari07 g.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Estofari14 pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Estofari14 pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Estofari14 G.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Estofari21 pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Estofari21 pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Estofari21G.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Estofari26 PT1.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Estofari26 PT2.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Estofari26 G.jpeg"] },
            
            { data: "14/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Estofari14 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Estofari14 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Estofari14 pt.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Estofari20 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Estofari20 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Estofari20 g.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Estofari21 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Estofari21 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Estofari21 g.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Estofari28 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Estofari28 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Estofari28 G.jpeg"] },

            { data: "04/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari04 pt1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari04 pt2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari04 g.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari11 pt1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari11 pt2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari11 g.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari17 pt1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari17 pt2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari17 g.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari25 PT01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari25 PT02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari25 G.jpg"] },
            { data: "01/05/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari30 PT01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari30 PT02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Estofari30 g.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Estofari08 pt01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Estofari08 pt02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Estofari08 g.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Estofari16 pt01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Estofari16 pt02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Estofari16 g.jpg"] },         
            { data: "23/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/23 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/23 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Curvados/23 g.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 4/30 pt 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 4/30 pt 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 4/30 g.jpg"] },

            { data: "06/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Estofaria/06 PT1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Estofaria/06 PT2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Estofaria/06 G.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Estofaria/13 PT1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Estofaria/13 PT2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Estofaria/13 g.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Estofaria/19 PT1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Estofaria/19 PT2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Estofaria/19 g.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Estofaria/27 PT01.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Estofaria/27 PT02.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Estofaria/27 G.jpeg"] },
            { data: "03/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Estofaria/03 PT1.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Estofaria/03 PT2.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Estofaria/3G.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Estofaria/11 PT1.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Estofaria/11 PT2.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Estofaria/11G.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Estofaria/18 PT1.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Estofaria/18 PT2.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Estofaria/18g.jpg"] },
            { data: "25/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Estofaria/25 PT1.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Estofaria/25 PT2.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Estofaria/25 G.jpg"] },
            { data: "01/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/01 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/01 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/01 G.jpg"] },
            { data: "08/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/08 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/08 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/08 G.jpg"] },
            { data: "11/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/15 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/15 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/15 G.jpg"] },
            { data: "22/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/22 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/22 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/22 g.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/29 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/29 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Estofaria/29 g.jpg"] },
            { data: "05/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Estofaria/05 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Estofaria/05 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Estofaria/05g.jpg"] },
            { data: "12/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Estofaria/12 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Estofaria/12 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Estofaria/12g.jpg"] },
            { data: "18/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Estofaria/18 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Estofaria/18 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Estofaria/18 g.jpg"] },
            { data: "26/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Estofaria/26 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Estofaria/26 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Estofaria/26 g.jpg"] },
            { data: "03/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/03 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/03 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/03 g.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/10 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/10 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/10 g.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/17 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/17 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/17 g.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/24 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/24 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/24 g.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/31 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/31 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Estofaria/31 g.jpg"] },

           { data: "07/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Estofaria/08 pt01.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Estofaria/08 pt02.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Estofaria/08 g.jpg"] },
           { data: "11/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Estofaria/14 pt01.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Estofaria/14 pt02.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Estofaria/14 g.jpg"] },
           { data: "22/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Estofaria/22 pt01.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Estofaria/22 pt02.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Estofaria/22 G.jpg"] },
           { data: "29/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Estofaria/29 pt01.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Estofaria/29 pt02.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Estofaria/29 g.jpg"] },
 
           { data: "06/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Estofaria/06 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Estofaria/06 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Estofaria/06 g.jpg"] },
           { data: "13/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Estofaria/13 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Estofaria/13 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Estofaria/3g.jpg"] },
           { data: "19/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Estofaria/20 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Estofaria/20 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Estofaria/20g.jpg"] },

            { data: "09/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Estofaria/09 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Estofaria/09 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Estofaria/09 g.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Estofaria/16 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Estofaria/16 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Estofaria/16 g.jpg"] },


            // { data: "", captura: ["", "", ""] },


        ],

        exp2: [
            
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 2/Expedição/11- Novembro/27-02.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Expedição/11- Novembro/27.png", "capturas/Retrabalhos/unidade 2/Expedição/11- Novembro/27 GRAFICO.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Expedição/12- Dezembro/SEMANA 04-12 À 09-12.png", "capturas/Retrabalhos/unidade 2/Expedição/12- Dezembro/SEMANA 04-12 À 09-12 GRÁFICO.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Expedição/12- Dezembro/SEMANA 11-12 À 15-12.png", "capturas/Retrabalhos/unidade 2/Expedição/12- Dezembro/SEMANA 11-12 À 15-12 GRAFICO.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Expedição/12- Dezembro/SEMANA 18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/1- Janeiro/9-12.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/1- Janeiro/09-01 À 12-01 GRÁFICO.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/1- Janeiro/15-01 À 19-01.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/1- Janeiro/15-01 À 19-01 GRÁFICO.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/1- Janeiro/22-01 À 26-01.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/1- Janeiro/22-01 À 26-01 GRÁFICO.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/01-29 pçs.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/01-29.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/grafico 02 29.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/05-07 pçs.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/05-07.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/grafico  05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/19-23 pçs.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/19-23.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/grafico 19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/26 PÇS.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/26-02 GRAFICO.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/26 GRAFICO INFINITO.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/07-PÇS.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/07 GRAFICO.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/8PÇS.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/8 GRAFICO.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/8 GRAFICO INFINITO.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/11-PÇS.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/11 GRAFICO.png"] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/12.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/13 PÇS.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/13 GRAFICO.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/15 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/15 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/15 G.INFINITO.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/18-G.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/19-G.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/20 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/20 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/20 G.INFINITO.jpg"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/21-pt1.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/21-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/21-pt3.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/22-pt1.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/22-pt2.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/22-pt3.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/22-G.png"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/26-pt1.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/27 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/27 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/27 G.INFINITO.jpg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/28 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/28 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/28 G.INFINITO.jpg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/01 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/01 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/01 infinito.jpg"] },
            { data: "02/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/02 pçs.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/02 grafico.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/02 infinito.png"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/03 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/03 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/03 infinito.jpg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/04 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/04 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/04 infinito.jpg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/05 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/05 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/05 infinito.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/08 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/08 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/08 infinito.jpg"] },
            { data: "09/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/09 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/09 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/09 infinito.jpg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/10  infinito.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/10 grafico.jpg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/12 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/12 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/12 infinito.jpg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/16 infinito.jpg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/19 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/19 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/19 infinito.jpg"] },
            { data: "24/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/24 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/24 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/24 infinito.jpg"] },
            { data: "25/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/25 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/25 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/25 infinito.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/26 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/26 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/26 infinito.jpeg"] },
            { data: "29/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/29 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/29 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/29 infinito.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/6 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/6 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/6- infinito.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/7 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/7 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/7  infinito.jpeg"] },
            { data: "08/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/8 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/8 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/8  infinito.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/9 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/9 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/9  infinito.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/10 infinito.jpg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/13 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/13  grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/13 infinito.jpg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/14 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/14 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/14  infinito.jpg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/16 infinito.jpg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/17 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/17 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/17 infinito.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/20 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/20 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/20 infinito.jpg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/21 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/21 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/21 infinito.jpg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/23 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/23 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/23 infinito.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/25 1pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/25 2pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/25 g.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/27 1pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/27 2pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/27 infinito.jpg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/29 1pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/29 2pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/29 g.jpg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/30 1pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/30 2pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/30 g.jpg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/7 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/7 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/7 g.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/11 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/11 g.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/13 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/13 G.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/14 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/14 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/14 G.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/18 g.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/19 g.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/20 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/20 g.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/21 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/21 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/21 G.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/28 G.jpg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/05 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/05 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/05 G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/09 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/09 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/09 G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/12 G.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/26 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/26 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/26 G.jpg"] },
            { data: "30/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/30 part 01.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/30 part 02.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/30g.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/02 01 parte.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/02 02 parte.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/3 g.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/09 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/09 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/09g.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/16 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/16 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/16 g.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/20 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/20 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/20 g.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/22 01 parte.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/22 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/22 g.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/23 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/23 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/23 g.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/27 PT1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/27 PT2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/27 G.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/29 PT1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/29 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/29 G.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/30 PT1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/30 PT2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Expedição/30 G.jpeg"] },

            { data: "03/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/04 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/04 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/4g.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/06 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/06 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/06g.jpeg"] },
            { data: "10/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/10 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/10 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/10g.jpeg"] },
            { data: "12/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/12 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/12 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/12g.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/13 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/13 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/13g.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/17 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/17 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/17g.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/19 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/19 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/19 g.jpeg"] },
            { data: "24/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/24 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/24 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/24 g.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/27 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/27 pt2.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Expedição/27 g.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/01 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/01 pt 02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/1 g.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/03 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/03 pt 02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/03 g.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/04 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/04 pt 02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/04 G.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/10 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/10 pt 02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/10 g.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/11 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/11 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/11 g.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/15 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/15 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/15 g.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/26 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/26 g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/1 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/1 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/1 g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/09 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/09 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/09 g.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/14 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/23 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/23 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/23 g.jpg"] },

            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/26 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/26 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/26 g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/30 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/30 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Expedição/30 g.jpg"] },

            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Expedição/04 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Expedição/04 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Expedição/4g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Expedição/07 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Expedição/07 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Expedição/7g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Expedição/14 pt 1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Expedição/14 pt 2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Expedição/14 g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Expedição/18 pt 1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Expedição/18 pt 2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Expedição/18 g.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/10 1PT.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/10 2PT.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/10 G.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/17 1pt.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/17 2pt.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/17 g.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/20 PT01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/20 PT02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/20 PT03.jpg"] },
            { data: "29/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/29 PT01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/29 PT02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/29g.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/31 PT01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/31 PT02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Expedição/31 g.jpg"] },

            { data: "07/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Expedição/07 pt 01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Expedição/07 pt 02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Expedição/7g.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Expedição/14 pt 01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Expedição/14 pt 02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Expedição/14G.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Expedição/21 pt 01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Expedição/21 pt 02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Expedição/21 g.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Expedição/26 PT 01.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Expedição/26 PT 02.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Expedição/26 G.jpeg"] },
            
            { data: "14/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Expedição/14 pt01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Expedição/14 pt02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Expedição/14g.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Expedição/20 pt01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Expedição/20 pt02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Expedição/20 g.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Expedição/21 pt01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Expedição/21 pt02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Expedição/21g.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Expedição/28 pt01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Expedição/28 pt02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Expedição/28 G.jpeg"] },

            { data: "04/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/04 pt1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/04 pt2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/4g.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/11 pt1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/11 pt2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/11 G.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/17 pt1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/17 pt2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/17 g.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/25 pt01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/25 pt02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/25 g.jpg"] },
            { data: "01/05/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/30 pt01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/30 pt02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Expedição/30 G.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Expedição/08 pt01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Expedição/08 pt02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Expedição/08 g.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Expedição/16 pt01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Expedição/16 pt02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Expedição/16 g.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Expedição/23 pt01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Expedição/23 pt02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Expedição/23 g.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Expedição/30 pt01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Expedição/30 pt02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Expedição/30 G.jpg"] },

            { data: "06/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Expedição/06 PT 01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Expedição/06 PT 02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Expedição/06 G.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Expedição/13 PT 01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Expedição/13 PT 02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Expedição/13 G.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Expedição/19 PT 01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Expedição/19 PT 02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Expedição/19 G.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Expedição/27 PT01.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Expedição/27 PT02.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Expedição/27 G.jpeg"] },
            { data: "03/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Expedição/03 PT1.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Expedição/03 PT2.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Expedição/03 G.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Expedição/11 PT1.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Expedição/11 PT2.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Expedição/11G.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Expedição/18 PT1.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Expedição/18 PT2.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Expedição/18g.jpg"] },
            { data: "25/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Expedição/25 PT1.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Expedição/25 PT2.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Expedição/25G.jpg"] },
            { data: "01/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/01 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/01 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/1 G.jpg"] },
            { data: "08/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/08 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/08 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/08 g.jpg"] },
            { data: "15/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/15 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/15 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/15 g.jpg"] },
            { data: "22/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/22 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/22 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/22 G.jpg"] },
            { data: "28/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/29 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/29 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Expedição/29 g.jpg"] },
            { data: "05/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Expedição/05 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Expedição/05 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Expedição/5 g.jpg"] },
            { data: "12/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Expedição/12 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Expedição/12 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Expedição/12g.jpg"] },
            { data: "18/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Expedição/18 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Expedição/18 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Expedição/18 g.jpg"] },
            { data: "26/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Expedição/26 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Expedição/26 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Expedição/26 g.jpg"] },
            { data: "03/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/03 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/03 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/3g.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/10 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/10 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/10 g.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/17 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/17 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/17 g.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/24 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/24 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/24g.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/31 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/31 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Expedição/31 g.jpg"] },

            { data: "07/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Expedição/07 01PT.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Expedição/07 02PT.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Expedição/07 G.jpg"] },
            { data: "11/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Expedição/14 01PT.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Expedição/14 02PT.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Expedição/14 g.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Expedição/22 01PT.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Expedição/22 02PT.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Expedição/22 g.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Expedição/29 01PT.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Expedição/29 02PT.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Expedição/29 g.jpg"] },

            { data: "06/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Expedição/06 p01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Expedição/06 p02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Expedição/06 g.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Expedição/13 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Expedição/13 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Expedição/13 g.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Expedição/19 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Expedição/19 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Expedição/19 g.jpg"] },

            { data: "09/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Expedição/09 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Expedição/09 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Expedição/09 g.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Expedição/16 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Expedição/16 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Expedição/16 g.jpg"] },

           
            // { data: "", captura: ["", "", ""] },


            
        ],

        Mont_Osso: [
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Osso/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Osso/12-Dezembro/semana 04-12 à 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Osso/12-Dezembro/11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Osso/12-Dezembro/18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/1- Janeiro/09-01 Á 12-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/1- Janeiro/22-01 Á 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/2- Fevereiro/29-01 À 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/26-02.png"] },

            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/11.png"] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/12.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/13.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/18-pt3.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/19-pt2.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/20 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/20 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/20 INFINITO.jpg"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/27 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/27 INFINITO.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/27 GRAFICO.jpg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/28 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/28 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/28 INFINITO.jpg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/01 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/01 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/01 infinito.jpg"] },
            { data: "02/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/02  pçs.png", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/02 grafico.png", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/02 infinito.png"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/03 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/03 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/03 infinito.jpg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/04 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/04 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/04 infinito.jpg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/05 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/05 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/05 infinito.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/08 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/08 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/08 infinito.jpg"] },
            { data: "09/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/09 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/09 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/09 infinito.jpg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/10 infinito.jpg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/12 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/12 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/12 infinito.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/16 infinito.jpg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/19 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/19 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/19 infinito.jpg"] },
            { data: "24/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/24 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/24 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/24 infinito.jpg"] },
            { data: "25/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/25 PÇS.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/25 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/25infinito.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/26 PÇS.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/26 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/26 infinito.jpeg"] },
            { data: "29/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/29 PÇS.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/29 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/29 infinito.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/6 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/6 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/6 infinito.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/7 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/7 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/7 infinito.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/9 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/9 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/9 infinito.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/10 infinito.jpg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/13 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/13 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/13 infinito.jpg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/14 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/14 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/14  infinito.jpg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/16 infinito.jpg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/17 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/17 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/17 infinito.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/20 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/20 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/20 infinito.jpg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/21 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/21 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/21 infinito.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/27 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/27 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/27 infinito.jpg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/27 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/27 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/27 infinito.jpg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/30 1pt.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/30 2pt.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/30 g.jpg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/7 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/7 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/7G.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/11 02pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/11 g.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/13 02pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/13 g.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/14 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/14 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/14 g.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/18 g.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/19 g.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/19 g.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/28 g.jpg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/05 1p.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/05 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/05 G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/08 1p.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/08 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/08 G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/12 1p.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/12 G.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/19 1p.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/26 1p.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/26 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/26 G.jpg"] },
            { data: "30/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/30 part 01.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/30 part 02.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/30 g.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/02 parte 1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/02 parte 2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/3g.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/09 parte 1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/09 parte 2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/9g.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/16 parte 1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/16 parte 2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/16 g.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/20 parte 1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/20 parte 2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/20 g.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/22 parte 1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/22 parte 2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/22 g.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/23 parte 1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/23 parte 2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/23 g.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/27 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/27 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/27 g.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/29 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/29 parte 2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/29 G.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/30 pt01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/30 pt 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Osso/30 g.jpeg"] },

            { data: "03/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/04 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/04 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/4 g.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/06 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/06 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/6 g.jpeg"] },
            { data: "10/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/10 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/10 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/10g.jpeg"] },
            { data: "12/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/12 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/12 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/12g.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/13 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/13 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/13g.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/17 pt1.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/17 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/17 g.jpeg"] },
            { data: "20/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/20 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/20 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/20 g.jpeg"] },
            { data: "24/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/24 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/24 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/24 g.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/27 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/27 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Osso/27 g.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/01 pt 1.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/01pt 2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/01 g.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/03 pt 1.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/03 pt 2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/3 g.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/04 pt 1.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/04 pt 2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/4 g.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/10 pt 1.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/10 pt 2.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/10 g.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/11 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/11 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/11 g.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/15 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/15 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/15 g.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/26 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/26 g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/1 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/1 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/1 g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/9 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/9 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/09 g.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/14 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/23 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/23 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/23 g.jpg"] },

            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/26 pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/26 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/26 g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/30 pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/30 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Osso/30 g.jpg"] },

            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Osso/04 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Osso/04 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Osso/4 g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Osso/07 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Osso/07 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Osso/7 g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Osso/14 pt1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Osso/14pt2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Osso/14g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Osso/18 pt1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Osso/18pt2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Osso/18g.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/10 PT01.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/10 PT02.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/10 G.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/17 pt 01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/17 pt 02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/17 g.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/24 pt 01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/24 pt 02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/24 g.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/29 pt 01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/29 pt 02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/29-01.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/31 pt 01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/31 pt 02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Osso/31 g.jpg"] },


            { data: "07/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Osso/07 pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Osso/07 pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Osso/7g.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Osso/14 pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Osso/14 pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Osso/14g.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Osso/21 pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Osso/21 pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Osso/21 g.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Osso/26 pt01.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Osso/26 pt02.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Osso/26 g.jpeg"] },
            
            { data: "14/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Osso/14 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Osso/14 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Osso/14 g.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Osso/20 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Osso/20 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Osso/20 G.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Osso/21 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Osso/21 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Osso/21 G.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Osso/28 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Osso/28 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Osso/28G.jpeg"] },
            
            { data: "04/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/04 pt01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/04 pt02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/4 g.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/11 pt01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/11 pt02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/11 G.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/17 pt01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/17 pt02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/17 g.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/25 pt 01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/25 pt 02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/25 g.jpg"] },
            { data: "01/05/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/30 pt 01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/30 pt 02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Osso/30 G.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Osso/08 PT01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Osso/08 PT02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Osso/08 G.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Osso/16 PT01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Osso/16 PT02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Osso/16 g.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Osso/23 PT01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Osso/23 PT02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Osso/23 g.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Osso/30 PT1.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Osso/30 PT2.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Osso/30 G.jpg"] },

            { data: "06/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Osso/06 pt1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Osso/06 pt2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Osso/06 g.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Osso/13 pt1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Osso/13 pt2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Osso/13 G.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Osso/19 pt1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Osso/19 pt2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Osso/19 G.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Osso/27 PT1.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Osso/27 PT2.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Osso/27G.jpeg"] },
            { data: "03/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Osso/03 PT 01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Osso/03 PT 02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Osso/03G.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Osso/11 PT 01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Osso/11 PT 02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Osso/11G.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Osso/18 PT 01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Osso/18 PT 02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Osso/18 G.jpg"] },
            { data: "25/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Osso/25 PT 01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Osso/25 PT 02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Osso/25 G.jpg"] },
            { data: "01/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/01 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/01 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/01 G.jpg"] },
            { data: "08/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/08 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/08 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/08 G.jpg"] },
            { data: "11/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/15 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/15 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/15 G.jpg"] },
            { data: "22/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/22 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/22 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/22 g.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/29 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/29 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Osso/29 g.jpg"] },
            { data: "05/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Osso/05 pt 1.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Osso/05 pt 2.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Osso/05 pt g.jpg"] },
            { data: "12/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Osso/12 pt 1.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Osso/12 pt 2.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Osso/12 g.jpg"] },
            { data: "18/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Osso/18 pt 1.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Osso/18 pt 2.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Osso/18 g.jpg"] },
            { data: "26/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Osso/26 pt 1.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Osso/26 pt 2.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Osso/26 g.jpg"] },
            { data: "03/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/03 PT01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/03 PT02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/03 G.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/10 PT01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/10 PT02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/10g.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/17 PT01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/17 PT02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/17 g.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/24 PT01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/24 PT02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/24 g.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/31 PT01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/31 PT02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Osso/31g.jpg"] },

            { data: "07/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Osso/07 1pt.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Osso/07 2pt.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Osso/03 g.jpg"] },
            { data: "11/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Osso/14 pt 1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Osso/14 pt 2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Osso/14 g.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Osso/22 pt 1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Osso/22 pt 2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Osso/22 g.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Osso/29 pt 1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Osso/29 pt 2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Osso/29 g.jpg"] },

            { data: "06/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Osso/06 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Osso/06 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Osso/06 g.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Osso/13 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Osso/13 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Osso/13 g.jpg"] },
            { data: "19/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Osso/18 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Osso/18 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Osso/18 g.jpg"] },

            { data: "09/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Osso/09 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Osso/09 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Osso/09 g.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Osso/16 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Osso/16 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Osso/16g.jpg"] },




            //{ data: "", captura: ["", "", ""] },

        ],

        Tecido: [
            { data: "27/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Tecido/1- Janeiro/22-01 à 27-01.png", "capturas/Retrabalhos/unidade 2/Tecido/1- Janeiro/22-01 à 27-01 GRAFICO.png"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Tecido/3- Março/28 pçs.jpg", "capturas/Retrabalhos/unidade 2/Tecido/3- Março/28 grafico.jpg", "capturas/Retrabalhos/unidade 2/Tecido/3- Março/28 ifinito.jpg"] },


            //    { data: "", captura: ["", "", "", ""] },
            //    { data: "", captura: ["", "", "", ""] },
        ],

        Restauracao: [
            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/7 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/7 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/7 g.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/11 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/11 g.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/13 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/13 g.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/14 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/14 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/14 g.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/18 g.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/19 g.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/20 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/20 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/20 g.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/21 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/21 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/21 g.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/28 g.jpg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/05 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/05 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/5 G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/09  2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/09 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/9 G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/12 G.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/26 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/26 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/26 G.jpg"] },
            { data: "29/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/30 part 01.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/30 part 02.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/30G.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Restauração/02 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Restauração/02 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Restauração/3 g.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Restauração/09 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Restauração/09 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Restauração/09g.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Restauração/16 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Restauração/16 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Restauração/16 g.jpeg"] },
            { data: "25/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/20PT1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/20 PT2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/20 PT3.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/20 PT4.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/20G.jpeg"] },



            // { data: "", captura: ["", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", ""] },
        ],

        Us_un2: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/12-Dezembro/semana 04-12 à 12-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/12-Dezembro/semana 11-12 à 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/12-Dezembro/semana 18-12 à 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/2- Fevereiro/29-01 À 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/26-02.png"] },

            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/11.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/18-pt2.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/19-pt4.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/20 COMPL.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/20 COMPL GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/20 TAMPOS.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/20 TAMPOS GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/20 INFINITO.jpg"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/22-pt3.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/22-pt4.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/27 COMPL.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/27 COMPL GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/27 TAMPOS.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/27 TAMPOS GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/27 INFINITO.jpg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/28 COMPL.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/28 COMPL GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/28 TAMPOS.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/28 TAMPOS GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/28 INFINITO.jpg"] },

            { data: "02/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/02 cadeiras.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/02 cad.graficos.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/02 base .png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/02 base grafico.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/02 infinito.png"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/03 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/03 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/03 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/03 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/03 infinito.png"] },
            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/01 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/01 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/01 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/01 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/01 infinito.jpg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/04 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/04 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/04 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/04 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/04 infinito.jpg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/05 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/05 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/05 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/05 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/05 infinito.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/08 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/08 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/08 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/08 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/08 infinito.jpg"] },
            { data: "09/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/09 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/09 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/09 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/09 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/09 infinito.jpg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/10 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/10 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/10 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/10 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/10 infinito.jpg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/12 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/12 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/12 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/12 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/12 infinito.jpg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/16 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/16 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/16 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/16 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/16 infinito.jpg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/19 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/19 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/19 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/19 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/19 infinito.jpg"] },
            { data: "24/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/24 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/24 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/24 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/24 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/24 infinito.jpg"] },
            { data: "25/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/25 cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/25 cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/25 bases.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/25 bases grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/25 infinito.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/26 cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/26 cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/26 bases.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/26 bases grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/26 infinito.jpeg"] },
            { data: "29/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/29 cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/29 cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/29 bases.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/29 bases grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/29 infinito.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/6 Cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/6 Cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/6 base.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/6 base grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/6 inifito.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/7 Cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/7 Cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/7 base.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/7 base grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/7 inifito.jpeg"] },
            { data: "08/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/8 Cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/8 Cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/8 base.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/8 base grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/8 inifito.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/9 Cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/9 Cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/9 base.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/9 base grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/9 inifito.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/10 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/10 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/10 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/10 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/10 infinito.jpg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/13 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/13 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/13 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/13 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/13 infinito.jpg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/14 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/14 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/14 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/14 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/14 infinito.jpg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/16 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/16 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/16 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/16 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/16 infinito.jpg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/17 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/17 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/17 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/17 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/17 infinito.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/20 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/20 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/20 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/20 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/20 infinito.jpg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/21 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/21 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/21 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/21 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/21 infinito.jpg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/23 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/23 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/23 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/23 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/23 infinito.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/24 1pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/24 2pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/24 3pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/24 4pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/24 G.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/27 1pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/27 2pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/27 3pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/27 4pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/27  infinito.jpg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/29 1pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/29 2pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/29 3pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/29 4pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/29 g.jpg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/30 1pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/30 2pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/30 3pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/30 4pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/30 g.jpg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/07-1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/07-2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/07-3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/07-4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/7G.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/11 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/11 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/11 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/11 G.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/13 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/13 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/13 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/13g.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/14 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/14 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/14 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/14 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/14 g.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/17 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/17 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/18 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/18 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/18 G.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/19 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/19 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/19 G.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/20 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/20 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/20 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/20 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/20 G.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/21 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/21 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/21 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/21 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/21 G.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/28 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/28 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/28 g.jpg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/05 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/05 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/05 3pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/05 4pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/5G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/09 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/09 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/09 3pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/09 4pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/9G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/12 3pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/12 4pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/12 G.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/19 3pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/19 4pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/26 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/26 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/26 3pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/26 4pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/26 G.jpg"] },
            { data: "30/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/30 part 01.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/30 part 02.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/30 part 03.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/30 part 04.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/30 g.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/02 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/02 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/02 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/02 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/02 g.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/09 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/09 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/09 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/09 parte 04.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/16 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/16 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/16 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/16 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/16 g.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/20 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/20 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/20 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/20 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/20 g.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/22 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/22 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/22 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/22 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/22 g.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/23 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/23 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/23 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/23 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/23 g.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/27 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/27 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/27 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/27 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/27 g.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/29 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/29 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/29 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/29 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/29 g.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/30 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/30 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/30 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/30 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Usinagem/30 g.jpeg"] },

            { data: "03/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/04 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/04 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/04 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/04 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/4 g.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/06 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/06 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/06 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/06 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/6 g.jpeg"] },
            { data: "10/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/10 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/10 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/10 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/10 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/10 g.jpeg"] },
            { data: "12/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/12 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/12 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/12 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/12 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/12g.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/13 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/13 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/13 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/13 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/13 g.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/17 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/17 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/17 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/17 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/17 g.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/19 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/19 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/19 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/19 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/19 g.jpeg"] },
            { data: "24/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/24 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/24 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/24 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/24 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/24 g.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/27 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/27 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/27 pt03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/27 pt04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Usinagem/27 g.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/01 pt01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/01 pt02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/01 pt03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/01 pt04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/1g.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/03 pt01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/03 pt02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/03 pt03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/03 pt04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/03 g.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/04 pt01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/04 pt02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/04 pt03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/04 pt04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/4 g.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/10 pt01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/10 pt02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/10 pt03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/10 pt04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/10 g.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/11 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/11 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/11 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/11 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/11 g.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/15 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/15 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/15 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/15 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/15 g.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/19 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/19 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/26 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/26 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/26 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/26 g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/1 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/1 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/1 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/1 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/1g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/9 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/09 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/9 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/9pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/9g.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/14 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/14 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/14 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/23 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/23 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/23 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/23 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/23 g.jpg"] },

            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/26 pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/26 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/26 pt03.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/26 pt04.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/26 g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/30 pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/30 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/30 pt03.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/30 pt04.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/30 g.jpg"] },

            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/04 pt1.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/04 pt2.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/04 pt3.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/04 pt4.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/4g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/07 pt1.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/07 pt2.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/07 pt3.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/07 pt4.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/7g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/14 pt1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/14 pt2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/14mpt3.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/14 pt4.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/14 g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/18 pt1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/18 pt2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/18 pt3.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/18 pt4.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/18 g.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/10 PT01.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/10 PT02.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/10 PT03.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/10 PT04.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/10 G.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/17 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/17 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/17 pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/17 pt04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/17 g.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/24 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/24 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/24  pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/24 pt04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/24 G.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/29pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/29 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/29 pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/29 pt04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/29 g.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/31 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/31 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/31 pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/31 pt04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/31 g.jpg"] },

            { data: "07/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/07 pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/07 pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/07 pt03.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/07 pt04.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/7g.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/14 pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/14 pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/14 pt03.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/14 pt04.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/14 g.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/21 pt01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/21 pt02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/21 pt03.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/21 pt04.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/21 G.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/26 pt 01.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/26 pt 02.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/26 pt 03.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/26 pt 04.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 2/Usinagem/26 g.jpeg"] },
            { data: "14/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/14 PT1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/14 PT2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/14 PT3.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/14 PT4.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/14G.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/21 PT1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/21 PT2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/21 PT3.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/21 PT4.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/21 g.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/28 PT1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/28 PT2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/28 PT3.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/28 PT4.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 2/Usinagem/28 g.jpeg"] },

            { data: "04/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/04 pt 01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/04 pt 02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/04 pt 03.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/04 pt 04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/4 g.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/11 pt 01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/11 pt 02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/11 pt 03.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/11 pt 04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/11 g.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/17 pt 01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/17pt 02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/17pt 03.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/17pt 04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/17 G.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/25 PT01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/25 PT02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/25 PT03.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/17pt 04.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/17 G.jpeg"] },
            { data: "01/05/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/30 PT01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/30 PT02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/30 PT03.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/30 PT04.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 2/Usinagem/30 G.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/08 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/08 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/08 PT 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/08 PT 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/08 G.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/16 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/16 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/16 PT 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/16 PT 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/16 g.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/23 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/23 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/23 PT 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/23 PT 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/23 g.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/30 PT 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/30 PT 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/30 PT 03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/30 PT 04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 2/Usinagem/30 g.jpg"] },

            { data: "06/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/06 pt1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/06 pt2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/06 pt3.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/06 pt4.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/06 g.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/13 pt1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/13 pt2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/13 pt3.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/13 pt4.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/13 G.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/19 pt1.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/19 pt2.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/19 pt3.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/19 pt4.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/19 g.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/27PT01.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/27PT02.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/27PT03.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/27PT04.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 2/Usinagem/27 G.jpeg"] },
            { data: "03/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/03 PT1.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/03 PT2.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/03 PT3.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/03 PT4.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/3G.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/11 PT1.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/11 PT2.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/11 PT3.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/11 PT4.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/11G.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/18 PT1.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/18 PT2.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/18 PT3.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/18 PT4.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/18 G.jpg"] },
            { data: "25/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/25 PT1.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/25 PT2.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/25 PT3.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/25 PT4.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 2/Usinagem/25G.jpg"] },
            { data: "01/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/01 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/01 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/01 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/01 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/01 G.jpg"] },
            { data: "08/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/08 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/08 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/08 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/08 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/08 G.jpg"] },
            { data: "11/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/15 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/15 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/15 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/15 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/15 G.jpg"] },
            { data: "22/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/22 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/22 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/22 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/22 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/22 g.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/29 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/29 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/29 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/29 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 2/Usinagem/29 g.jpg"] },
            { data: "05/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/05 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/05 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/05 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/05 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/05 G.jpg"] },
            { data: "12/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/12 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/12 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/12 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/12 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/12 g.jpg"] },
            { data: "18/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/18 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/18 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/18 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/18 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/18 g.jpg"] },
            { data: "26/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/26 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/26 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/26 pt03.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/26 pt04.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 2/Usinagem/26 g.jpg"] },
            { data: "03/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/03 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/03 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/03 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/03 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/40g.jpg"] },
            { data: "10/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/10 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/10 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/10 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/10 pt4.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/10 g.jpg"] },
            { data: "17/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/17  pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/17  pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/17  pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/17  pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/17 g.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/24  pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/24 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/24 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/24 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/24 g.jpg"] },
            { data: "31/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/31 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/31 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/31 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/31 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 2/Usinagem/31g.jpg"] },

            { data: "07/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/07 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/07 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/07 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/07 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/07 g.jpg"] },
            { data: "11/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/14 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/14 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/14 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/14 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/14 g.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/22 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/22 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/22 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/22 pt 4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/22 g.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/29 pt1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/29 pt2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/29 pt3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/29 pt4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 2/Usinagem/29 g.jpg"] },

           { data: "06/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/06 pt 01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/06 pt 02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/06 pt 03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/06 pt 04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/06 g.jpg"] },
           { data: "13/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/13 pt 01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/13 pt 02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/13 pt 03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/13 pt 04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/13 g.jpg"] },
           { data: "19/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/18 pt 01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/18 pt 02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/18 pt 03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/18 pt 04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 2/Usinagem/18g.jpg"] },

           { data: "09/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/9 pt1.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/9 pt2.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/9 pt3.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/9 pt4.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/09 g.jpg"] },
           { data: "16/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/16 pt1.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/16 pt2.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/16 pt3.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/16 pt4.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 2/Usinagem/16 g.jpg"] },


            
            // { data: "", captura: ["", "", "", "", ""] },


        ],
    },

    UR3: {
        Un_3: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 3/11- Novembro/20-25.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 3/12-Dezembro/semana 04-12 às 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 3/12-Dezembro/11-12 ÀS 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 3/12-Dezembro/18-12 ÀS 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/8.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/18-pt4.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/19-pt4.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/20-pt3.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/20-pt4.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/22-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/22-pt3.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/22-pt4.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/25-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/25-pt4.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/26-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/26-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/26-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/28-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/4-pt2.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/5-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/5-pt2.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/5-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/12-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/12-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/12-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/12-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/19-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/26-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/26-pt3.png"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/9-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/9-g.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/21-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/21-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/21-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/23g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/24-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/24-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/24-g.jpeg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/29-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/29-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/29-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/29-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/30-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/30-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/30-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/7-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/14-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/19-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/19-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/19-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/19-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/21-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/21-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/21-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/21-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/28-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 3/5-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/5-pt4.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 3/9-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/9-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/9-pt3.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 3/12-pt1.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/12-pt2.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/12-pt3.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/12-pt4.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/12 g.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 3/19-pt1.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/19-pt2.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/19-pt3.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/19-pt4.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/19 g.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 3/26-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/26-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/26-pt3.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 3/02 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/02 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/02 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/02 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/2 g.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 3/09 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/09 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/09 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/09 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/09 g.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 3/16 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/16 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/16 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/16 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/16 g.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 3/20 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/20 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/20 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/20 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/20 g.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 3/22 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/22 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/22 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/22 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/22 g.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 3/23 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/23 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/23 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/23 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/23 g.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 3/27 pt 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/27 pt 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/27 pt 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/27 pt 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/27 g.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 3/29 pt01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/29 pt02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/29 pt03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/29 pt04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/29 g.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 3/30 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/30pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/30pt03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/30pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 3/30 g.jpeg"] },

            { data: "03/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 3/04 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/04 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/04 pt 03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/04 pt 04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/4g.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 3/06 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/06 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/06 pt 03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/06 pt 04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/6g.jpeg"] },
            { data: "10/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 3/10 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/10 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/10 pt 03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/10 pt 04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/10g.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 3/13 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/13 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/13 pt 03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/13pt 04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/13 G.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 3/17 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/17 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/17 pt 03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/17 pt 04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/17 g.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 3/19 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/19 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/19 pt 03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/19 pt 04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/19 g.jpeg"] },
            { data: "24/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 3/24 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/24 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/24pt 03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/24 pt 04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/24 g.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 3/27 pt 01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/27 pt 02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/27 pt 03.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/27 pt 04.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 3/27 g.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 3/01 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/01 pt 02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/01 pt 03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/01 pt 04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/1 g.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 3/03 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/03 pt 02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/03 pt 03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/03 pt 04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/03 g.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 3/04 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/04 pt 02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/04 pt 03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/04 pt 04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/4 g.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 3/10 pt 01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/10 pt 02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/10 pt 03.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/10 pt 04.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/10 g.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 3/11 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/11 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/11 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/11 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/11 g.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 3/15 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/15 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/15 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/15 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/15 g.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 3/18 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/18 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/18 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/18 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/18 g.jpg"] },
            { data: "24/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 3/24 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/26 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/26 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/26 g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 3/1 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/1 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/1 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/1 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/1 g.jpg"] },
            { data: "06/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 3/06 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/06 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/06 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/06 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/6 g.jpg"] },
            { data: "07/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 3/07 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/7 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/7 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/7 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/7 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 3/23 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/23 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/23 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/23 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/23 g.jpg"] },

            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 3/26 pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/26 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/26 pt03.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/26 pt04.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/26g.jpg"] },
            { data: "29/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 3/29 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/29 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/29 pt03.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/29 pt04.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/29 g.jpg"] },

            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/04 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/04 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/04 pt03.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/04 pt04.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/4 g.jpg"] },
            { data: "06/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/06 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/06 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/06 pt03.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/06 pt04.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/06 g.jpg"] },
            { data: "13/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/13 1 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/13 2 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/13 3 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/13 4 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/13 g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/18 1 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/18 2 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/18 3 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/18 4 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/18 g.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 3/10 PT01.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/10 PT02.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/10 PT03.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/10 PT04.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/10 G.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 3/17 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/17 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/17 pt3.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/17 pt4.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/17 g.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 3/24 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/24 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/24 pt3.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/24 pt4.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/24 TG.jpg"] },
            { data: "29/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 3/29 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/29 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/29 pt3.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/29 pt4.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/29 g.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 3/31 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/31 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/31 pt3.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/31 pt4.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/31 g.jpg"] },

            { data: "07/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/07 PT1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/07 PT2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/07 PT3.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/07 PT4.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/07 G.jpg"] },
            { data: "12/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/14 PT1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/14 PT2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/14 PT3.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/14 PT4.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/14 G.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/21 PT1.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/21 PT2.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/21 PT3.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/21 PT4.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/21 G.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/26 pt01.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/26 pt02.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/26 pt03.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/26 pt04.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 3/26 g.jpeg"] },
           
            { data: "14/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 3/14 PT01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/14 PT02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/14 PT03.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/14 PT04.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/14G.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 3/20 PT01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/20PT02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/20PT03.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/20PT04.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/20G.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 3/21 PT01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/21 PT02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/21 PT03.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/21 PT04.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/21 G.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 3/28 PT01.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/28 PT02.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/28 PT03.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/28 PT04.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 3/28 g.jpeg"] },

            { data: "04/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 3/04 PT1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/04 PT2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/04 PT3.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/04 PT4.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/04 G.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 3/11 PT1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/11 PT2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/11 PT3.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/11 PT4.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/11 g.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 3/17PT1.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/17PT2.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/17PT3.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/17PT4.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/17 G.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 3/25 PT1.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/25 PT2.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/25 PT3.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/25 PT04.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/25 G.jpg"] },
            { data: "01/05/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 3/30 PT1.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/30 PT2.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/30 PT3.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/30 PT4.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 3/30 G.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 3/08 PT01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/08 PT02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/08 PT03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/08 PT04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/08 G.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 3/16 PT01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/16 PT02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/16 PT03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/16 PT04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/16 g.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 3/23 PT01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/23 PT02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/23 PT03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/23 PT04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/23 g.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 3/30 PT01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/30 PT02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/30 PT03.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/30 PT04.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 3/30 g.jpg"] },

           { data: "06/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 3/06 pt01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/06 pt02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/06 pt03.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/06 pt04.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/06 g.jpg"] },
           { data: "13/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 3/13 pt01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/13 pt02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/13 pt03.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/13 pt04.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/13G.jpg"] },
           { data: "19/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 3/19 pt01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/19 pt02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/19 pt03.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/19 pt04.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/19 g.jpg"] },
           { data: "27/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 3/27 pt01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/27 pt02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/27 pt03.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/27 pt04.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 3/27 g.jpg"] },
           { data: "03/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 3/03 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/03 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/03 PT03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/03 PT04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/03 G.jpg"] },
           { data: "11/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 3/11 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/11 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/11 PT03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/11 PT04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/11 G.jpg"] },
           { data: "18/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 3/18 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/18 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/18 PT03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/18 PT04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/18 G.jpg"] },
           { data: "25/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 3/25 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/25 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/25 PT03.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/25 PT04.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 3/25G.jpg"] },
           { data: "01/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 3/01 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/01 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/01 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/01 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/01 G.jpg"] },
           { data: "08/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 3/08 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/08 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/08 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/08 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/08 G.jpg"] },
           { data: "11/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 3/15 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/15 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/15 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/15 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/15 G.jpg"] },
           { data: "22/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 3/22 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/22 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/22 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/22 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/22 g.jpg"] },
           { data: "29/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 3/30 PT01.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/30 PT02.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/30 PT03.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/30 PT04.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 3/30 G.jpg"] },
           { data: "05/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/05 pt1.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/05 pt2.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/05 pt3.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/05 pt4.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/5 g.jpg"] },
           { data: "12/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/12 pt1.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/12 pt2.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/12 pt3.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/12 pt4.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/12g.jpg"] },
           { data: "18/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/18 pt1.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/18 pt2.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/18 pt3.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/18 pt4.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/18 g.jpg"] },
           { data: "26/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/26 pt1.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/26 pt2.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/26 pt3.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/26 pt4.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 3/26 g.jpg"] },
           { data: "03/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/03 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/03 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/03 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/03 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/04 g.jpg"] },
           { data: "10/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/10 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/10 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/10 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/10 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/10g.jpg"] },
           { data: "17/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/17 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/17 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/17 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/17 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/17 g.jpg"] },
           { data: "24/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/24 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/24 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/24 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/24 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/24 g.jpg"] },
           { data: "31/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/31 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/31 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/31 pt03.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/31 pt04.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 3/31 g.jpg"] },

           { data: "07/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/08 pt 1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/08 pt 2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/08 pt 3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/08 pt 4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/08 g.jpg"] },
           { data: "11/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/14 pt 1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/14 pt 2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/14 pt 3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/14 pt 4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/15 g.jpg"] },
           { data: "22/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/22 pt 1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/22 pt 2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/22 pt 3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/22 pt 4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/22 g.jpg"] },
           { data: "29/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/29 pt 1.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/29 pt 2.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/29 pt 3.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/29 pt 4.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 3/29 g.jpg"] },

           { data: "06/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 3/06 PT 01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 3/06 PT 02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 3/06 PT 03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 3/06 PT 04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 3/06 G.jpg"] },
           { data: "13/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 3/13 PT 01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 3/13 PT 02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 3/13 PT 03.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 3/13 PT 04.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 3/13 g.jpg"] },
           { data: "09/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 3/09 PT01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 3/09 PT02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 3/09 PT03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 3/09 PT04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 3/09 G.jpg"] },
           { data: "16/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 3/16 PT01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 3/16 PT02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 3/16 PT03.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 3/16 PT04.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 3/16 g.jpg"] },


            
           // { data: "", captura: ["", "", "", "", ""] },



        ],

    },

    UR4: {
        Un_4: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 4/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 4/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 4/12-Dezembro/semana 04 à 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 4/12-Dezembro/11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 4/12-Dezembro/18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/1- Janeiro/09-01 Á 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/1- Janeiro/15-01 Á 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/1- Janeiro/22-01 Á 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/26-02.png"] },

            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/8.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt6.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt7.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt8.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/19-pt3.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/20-pt3.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/3- Março/25-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/3- Março/25-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/1-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/1-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/5-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/5-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/5-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/10-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/10-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/12-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/12-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/12-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/19-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/19-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/19-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/26-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/26-G.jpeg"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/7-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/9-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/9-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/9-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/9-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/14-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/14-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/14-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/16-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/16-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/14-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/14-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/20-g.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/20-pt2.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/21-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/21-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/23 g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/24-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/24-g.jpeg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/29-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/29-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/29-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/30-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/30-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/7-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/13-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/13-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/13-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/14-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/14-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/14-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/18-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/18-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/19-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/19-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/19-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/21-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/21-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/21-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/28-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 4/5-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/5-pt3.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 4/9-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/9-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/9-pt3.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 4/12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/12 g.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 4/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/19 g.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 4/26-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/26-pt2.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/26-pt3.png"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 4/02 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/02 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/2 g.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 4/9-pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/9-pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/9-pt3.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 4/16 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/16 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/16 G.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 4/20 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/20 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/20 G.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 4/22 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/22 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/22 G.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 4/23 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/23 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/23 G.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 4/27 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/27 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/27 G.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 4/29 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/29 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/30 g.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 4/30 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/30 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 4/30 g.jpeg"] },

            { data: "03/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 4/04 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/04 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/4g.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 4/06 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/06 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/6g.jpeg"] },
            { data: "10/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 4/10 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/10 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/10g.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 4/13 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/13 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/13g.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 4/17 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/17 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/17 g.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 4/19 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/19 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/19 G.jpeg"] },
            { data: "24/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 4/24 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/24 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/24 g.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 4/27 pt01.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/27 pt02.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 4/27 g.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 4/01 pt01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/01 pt02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/1g.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 4/03 pt01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/03 pt02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/3 G.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 4/04 pt01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/04 pt02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/4 G.jpeg",] },
            { data: "10/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 4/10 pt01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/10 pt02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/10 g.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 4/11 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/11 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/11 g.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 4/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 4/26 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/26g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 4/1 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/1 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/1 g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 4/09 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/09 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/09 g.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 4/14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/14 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 4/23 pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/23 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/23 g.jpg"] },

            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 4/26 pt 01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/26 pt 02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/26 g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 4/30 pt 01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/30 pt 02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/30 g.jpg"] },

            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/4 pt1.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/4 pt2.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/4g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/7 pt1.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/07 pt2.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/7g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/14 PT01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/14 PT02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/14 G.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/18 PT01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/18 PT02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/18 G.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 4/10 PT01.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/10 PT02.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/10 G.jpeg",] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 4/17 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/17 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/17 g.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 4/24 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/24 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/24 g.jpg"] },
            { data: "29/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 4/29 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/29 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/29 g.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 4/31 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/31 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/31 g.jpg"] },

            { data: "07/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 4/07PT 01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 4/07PT 02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 4/07 G.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 4/14 PT 01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 4/14 PT 02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 4/14 G.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 4/21 PT 01.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 4/21 PT 02.jpg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 4/21 G.jpg"] },
            { data: "25/02/2025", captura: ["capturas/Retrabalhos/2025/FEVEREIRO/Unidade 4/26 pt 01.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 4/26 pt 02.jpeg", "capturas/Retrabalhos/2025/FEVEREIRO/Unidade 4/26 g.jpeg"] },

            { data: "14/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 4/14 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 4/14 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 4/14 g.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 4/20 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 4/20pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 4/20 g.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 4/21 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 4/21 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 4/21 g.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Retrabalhos/2025/MARÇO/Unidade 4/28 pt1.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 4/28 pt2.jpeg", "capturas/Retrabalhos/2025/MARÇO/Unidade 4/28 g.jpeg"] },
            
            { data: "04/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 4/04 PT01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 4/04 PT02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 4/4 G.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 4/11 PT01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 4/11 PT02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 4/11 g.jpeg"] },  
            { data: "17/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 4/17 PT01.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 4/17 PT02.jpeg", "capturas/Retrabalhos/2025/ABRIL/Unidade 4/17 g.jpeg"] },  
            { data: "25/04/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 4/25 PT 01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 4/25 PT 02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 4/25 G.jpg"] },  
            { data: "01/05/2025", captura: ["capturas/Retrabalhos/2025/ABRIL/Unidade 4/30 PT 01.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 4/30 PT 02.jpg", "capturas/Retrabalhos/2025/ABRIL/Unidade 4/30 G.jpg"] },  
            { data: "09/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 4/08 pt 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 4/08 pt 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 4/08 g.jpg"] }, 
            { data: "16/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 4/16 pt 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 4/16 pt 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 4/16 g.jpg"] },  
            { data: "23/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 4/23 pt 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 4/23 pt 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 4/23 g.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Retrabalhos/2025/05 MAIO/Unidade 4/30 pt 01.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 4/30 pt 02.jpg", "capturas/Retrabalhos/2025/05 MAIO/Unidade 4/30 g.jpg"] },  
            
            { data: "06/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 4/06 pt01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 4/06 pt02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 4/06 g.jpg"] },  
            { data: "13/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 4/13 pt01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 4/13 pt02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 4/13 g.jpg"] },  
            { data: "19/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 4/19 pt01.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 4/19 pt02.jpg", "capturas/Retrabalhos/2025/JUNHO/Unidade 4/19 G.jpg"] },  
            { data: "27/06/2025", captura: ["capturas/Retrabalhos/2025/JUNHO/Unidade 4/27 pt1.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 4/27 pt2.jpeg", "capturas/Retrabalhos/2025/JUNHO/Unidade 4/27g.jpeg"] },  
            { data: "03/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 4/03 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 4/03 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 4/3G.jpg"] },  
            { data: "11/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 4/11 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 4/11 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 4/11G.jpg"] },  
            { data: "18/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 4/18 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 4/18 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 4/18 G.jpg"] },  
            { data: "25/07/2025", captura: ["capturas/Retrabalhos/2025/JULHO/Unidade 4/25 PT01.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 4/25 PT02.jpg", "capturas/Retrabalhos/2025/JULHO/Unidade 4/25G.jpg"] },  
            { data: "01/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 4/01 PT1.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 4/01 PT2.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 4/01 G.jpg"] },  
            { data: "08/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 4/08 PT1.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 4/08 PT2.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 4/08 G.jpg"] },  
            { data: "11/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 4/15 PT1.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 4/15 PT2.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 4/15 G.jpg"] },  
            { data: "22/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 4/22 PT1.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 4/22 PT2.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 4/22 g.jpg"] },  
            { data: "29/08/2025", captura: ["capturas/Retrabalhos/2025/AGOSTO/Unidade 4/29 PT1.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 4/29 PT2.jpg", "capturas/Retrabalhos/2025/AGOSTO/Unidade 4/29 g.jpg"] },  
            { data: "05/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 4/05 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 4/05 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 4/05 g.jpg"] },  
            { data: "12/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 4/12 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 4/12 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 4/12g.jpg"] },  
            { data: "18/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 4/18 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 4/18 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 4/18 g.jpg"] },  
            { data: "26/09/2025", captura: ["capturas/Retrabalhos/2025/SETEMBRO/Unidade 4/26 pt01.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 4/26 pt02.jpg", "capturas/Retrabalhos/2025/SETEMBRO/Unidade 4/26 g.jpg"] },  
            { data: "03/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/03 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/03 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/3g.jpg"] },  
            { data: "10/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/10 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/10 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/10 g.jpg"] },  
            { data: "17/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/17 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/17 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/17 g.jpg"] },  
            { data: "24/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/24 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/24 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/24 g.jpg"] },  
            { data: "31/10/2025", captura: ["capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/31 pt01.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/31 pt02.jpg", "capturas/Retrabalhos/2025/OUTUBRO/Unidade 4/31 g.jpg"] },  

            { data: "07/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 4/07 pt01.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 4/07 pt02.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 4/07 g.jpg"] },  
            { data: "11/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 4/14 pt01.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 4/14 pt02.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 4/14 g.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 4/22 pt01.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 4/22 pt02.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 4/22 g.jpg"] },  
            { data: "29/11/2025", captura: ["capturas/Retrabalhos/2025/NOVEMBRO/Unidade 4/29 pt01.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 4/29 pt02.jpg", "capturas/Retrabalhos/2025/NOVEMBRO/Unidade 4/29 g.jpg"] },  

           { data: "06/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 4/06 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 4/06 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 4/06 g.jpg"] },  
           { data: "13/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 4/13 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 4/13 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 4/13 g.jpg"] },  
           { data: "18/12/2025", captura: ["capturas/Retrabalhos/2025/DEZEMBRO/Unidade 4/19 pt01.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 4/19 pt02.jpg", "capturas/Retrabalhos/2025/DEZEMBRO/Unidade 4/19 g.jpg"] },  

           { data: "09/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 4/09 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 4/09 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 4/09 g.jpg"] },
           { data: "16/01/2026", captura: ["capturas/Retrabalhos/2026/1 JANEIRO/Unidade 4/16 pt01.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 4/16 pt02.jpg", "capturas/Retrabalhos/2026/1 JANEIRO/Unidade 4/16 g.jpg"] },  



            //   { data: "", captura: ["", "", ""] },  

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
            { data: "27/11/2023", captura: ["capturas/Retrabalhos/vidros/11- Novembro/COLPANY.png"] },

            { data: "04/12/2023", captura: ["capturas/Retrabalhos/vidros/12-Dezembro/COLPANY 04.png"] },
            { data: "11/12/2023", captura: ["capturas/Qualidade fornecedor/vidros/12-Dezembro/COLPANY 11.png"] },

            { data: "12/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/COLPANY 09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/COLPANY 15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/COLPANY 22-01 À 26-01.png"] },

            { data: "19/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/colpany 19.png"] },
            { data: "25/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/colpany 25.png"] },

            { data: "08/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/Colpany 04.png"] },
            { data: "11/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/11 Colpany.png"] },
            { data: "18/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/18 COLPANY.jpg"] },
            { data: "25/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/25 COLPANY.jpg"] },

            { data: "05/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/5 COLPANY.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/8 COLPANY.jpg"] },
            { data: "15/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/15 COLPANY.jpg"] },
            { data: "26/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/22 COLPANY.jpg"] },
            { data: "29/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/29 company.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/6 colpany.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/13 colpany.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/20 colpany.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/27 colpany.jpg"] },

            { data: "06/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/03 Colpany.jpg"] },
            { data: "10/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/10 Colpany.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/17 Colpany.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/24 Colpany.jpg"] },

            { data: "04/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/01 colpany.jpg"] },
            { data: "16/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/08 colpany.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/15 colpany.jpg"] },
            { data: "25/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/22 COLPANY.jpg"] },

            { data: "01/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/02 colpany.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/9 colpany.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/16 colpany.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/22 colpany.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/30 colpany.jpeg"] },

            { data: "02/09/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/9- Setembro/02 colpany.jpeg"] },
            { data: "09/09/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/9- Setembro/09 colpany.jpeg"] },
            { data: "16/09/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/9- Setembro/16 colpany.jpeg"] },
            { data: "23/09/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/9- Setembro/23 colpany.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/01 company.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/11 company.jpeg"] },
            { data: "18/10/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/14 company.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/21 company.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/01 company.jpg"] },
            { data: "08/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/08 company.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/14 company.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/23 company.jpg"] },
            { data: "28/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/28 company.jpg"] },

            { data: "06/12/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/12-Dezembro/02 comp.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/12-Dezembro/14 colpany.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/06-01 COLPANY.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/17 COLPANY.jpg"] },
            { data: "23/01/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/23 COLPANY.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/31 COLPANY.jpg"] },

            { data: "06/02/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/FEVEREIRO/07 COLPANY.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/FEVEREIRO/14 COLPANY.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/FEVEREIRO/21 COLPANY.jpg"] },
           
            { data: "14/03/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/março/COLPANY 11.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/março/COLPANY 21.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/março/COLPANY 28.jpeg"] },
           
            { data: "04/04/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/04 COLPANY.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/11 COLPANY.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/17 COLPANY.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/25 colpany.jpg"] },
            { data: "01/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/30 colpany.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/MAIO/COLPANY 09.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/MAIO/COLPANY 16.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/MAIO/COLPANY 23.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/MAIO/COLPANY 30.jpg"] },

            { data: "06/06/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JUNHO/06 C.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JUNHO/13 COLP.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JUNHO/20 COLP.jpg"] },
            { data: "26/06/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JUNHO/27 COLP.jpg"] },
            { data: "03/07/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/03 COLPANY.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/11 COLPANY.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/18 COLPANY.jpg"] },
            { data: "25/07/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/25 COLPANY.jpg"] },
            { data: "01/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/31 COLPANY.jpg"] },
            { data: "08/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/AGOSTO/COLPANY 08.jpg"] },
            { data: "15/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/AGOSTO/COLPANY 11.jpg"] },
            { data: "22/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/AGOSTO/COLPANY 21.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/AGOSTO/COLPANY 29.jpg"] },

            { data: "05/09/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/05 COLPANY.jpg"] },
            { data: "11/09/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/11 COLPANY.jpg"] },
            { data: "18/09/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/18 COLPANY.jpg"] },
            { data: "26/09/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/25 COLPANY.jpg"] },

            { data: "10/10/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/OUTUBRO/10 COLPANY.jpg"] },
            { data: "16/10/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/OUTUBRO/16 COLPANY.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/OUTUBRO/24 COLPANY.jpg"] },
            
            { data: "07/11/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/07 COLPANY.jpg"] },
            { data: "13/11/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/13 colpa.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/22 colpa.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/29 colpa.jpg"] },

            { data: "06/12/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/DEZEMBRO/06 colpa.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/DEZEMBRO/13 colpa.jpg"] },


            { data: "09/01/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/09 colpany.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/16 colpany.jpg"] },


            // { data: "", captura: [""] },
            



        ],

        Fast: [
            { data: "27/11/2023", captura: ["capturas/Retrabalhos/vidros/11- Novembro/FAST GLASS.png"] },

            { data: "04/12/2023", captura: ["capturas/Retrabalhos/vidros/12-Dezembro/FAST GLASS 04.png"] },
            { data: "11/12/2023", captura: ["capturas/Qualidade fornecedor/vidros/12-Dezembro/FAST GLASS 11.png"] },

            { data: "12/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 29-01 À 02-02.png"] },
            { data: "19/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/fast class 19.png"] },
            { data: "25/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/fast class 25.png"] },

            { data: "08/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/fast glass 04.png"] },
            { data: "11/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/11 fast glass.png"] },
            { data: "18/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/18 FAST CLASS.jpg"] },
            { data: "25/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/25 FAST CLASS.jpg"] },

            { data: "05/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/5 FAST GLASS.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/8 FAST GLASS.jpg"] },
            { data: "15/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/15 FAST GLASS.jpg"] },
            { data: "26/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/22 FAST GLASS.jpg"] },
            { data: "29/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/29 fast glas.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/6 fast glass.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/13 fast glass.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/20 fast glass.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/27 fast glass.jpg"] },

            { data: "06/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/03 fast.jpg"] },
            { data: "10/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/10 fast.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/17 fast.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/24 Fast.jpg"] },

            { data: "04/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/01 FAST GLASS.jpg"] },
            { data: "16/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/08 FAST GLASS.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/15 FAST GLASS.jpg"] },
            { data: "25/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/22 FAST GLASS.jpg"] },

            { data: "01/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/02 Fast glass.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/9 Fast glass.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/16 Fast glass.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/22 Fast glass.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/30 Fast glass.jpeg"] },

            { data: "02/09/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/9- Setembro/02 fast.jpeg"] },
            { data: "09/09/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/9- Setembro/09 fast.jpeg"] },
            { data: "16/09/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/9- Setembro/16 fast.jpeg"] },
            { data: "23/09/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/9- Setembro/23 fast.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/1 fast glass.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/11 fast glass.jpeg"] },
            { data: "18/10/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/14 fast glass.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/21fast glass.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/21fast glass.jpg"] },
            { data: "08/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/08 fast glass.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/14 fast glass.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/23 fast glass.jpg"] },
            { data: "28/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/28 fast glass.jpg"] },

            { data: "06/12/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/12-Dezembro/02 fast.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/12-Dezembro/14 fast.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/06-01 fast.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/17  FAST GLASS.jpg"] },
            { data: "23/01/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/23 FAST GLASS.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/31 FAST GLASS.jpg"] },

            { data: "06/02/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/FEVEREIRO/07 FAST GLASS.jpg"] },
            { data: "13/02/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/FEVEREIRO/14 FAST GLASS.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/FEVEREIRO/21  FAST GLASS.jpg"] },
            
            { data: "13/03/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/março/fast glass 11.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/março/fast glass 21.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/março/fast glass 28.jpeg"] },
            
            { data: "04/04/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/04 FAST GLASS.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/11 FAST GLASS.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/17 FAST GLASS.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/25-04.jpg"] },
            { data: "01/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/30 fast.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/MAIO/FAST 09.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/MAIO/FAST 16.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/MAIO/FAST 23.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/MAIO/FAST 30.jpg"] },

            { data: "06/06/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JUNHO/06.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JUNHO/13 FAST.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JUNHO/20FAST.jpg"] },
            { data: "26/06/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JUNHO/27 FAST.jpg"] },
            { data: "03/07/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/03 FAST GLASS.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/11 FAST GLASS.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/18  FAST GLASS.jpg"] },
            { data: "25/07/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/25  FAST GLASS.jpg"] },
            { data: "01/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/31  FAST GLASS.jpg"] },
            { data: "08/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/AGOSTO/FAST GLASS  08.jpg"] },
            { data: "11/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/AGOSTO/FAST GLASS  11.jpg"] },
            { data: "22/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/AGOSTO/FAST GLASS 21.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/AGOSTO/FAST GLASS  29.jpg"] },

            { data: "05/09/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/05 FAST.jpg"] },
            { data: "11/09/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/11 FAST.jpg"] },
            { data: "18/09/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/18 FAST.jpg"] },
            { data: "26/09/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/25 FAST.jpg"] },

            { data: "10/10/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/OUTUBRO/10 fast.jpg"] },
            { data: "16/10/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/OUTUBRO/16 FAST.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/OUTUBRO/24 FAST.jpg"] },
            
            { data: "07/11/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/07 fast.jpg"] },
            { data: "13/11/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/13 fast.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/22 fast.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/29 fast.jpg"] },

            { data: "06/12/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/DEZEMBRO/06 FAST.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/DEZEMBRO/13 FAST.jpg"] },

            { data: "09/01/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/09 fast.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/16 fast.jpg"] },



            // { data: "", captura: [""] },




        ],

        Vidros: [
            { data: "27/11/2023", captura: ["capturas/Retrabalhos/vidros/11- Novembro/COLPANY.png", "capturas/Retrabalhos/vidros/11- Novembro/FAST GLASS.png"] },

            { data: "04/12/2023", captura: ["capturas/Retrabalhos/vidros/12-Dezembro/COLPANY 04.png", "capturas/Retrabalhos/vidros/12-Dezembro/FAST GLASS 04.png"] },
            { data: "11/12/2023", captura: ["capturas/Qualidade fornecedor/vidros/12-Dezembro/COLPANY 11.png", "capturas/Qualidade fornecedor/vidros/12-Dezembro/FAST GLASS 11.png"] },

            { data: "12/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/COLPANY 09-01 À 12-01.png", "capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/COLPANY 15-01 À 19-01.png", "capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/COLPANY 22-01 À 26-01.png", "capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 29-01 À 02-02.png"] },
            { data: "19/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/colpany 19.png", "capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/fast class 19.png"] },
            { data: "25/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/colpany 25.png", "capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/fast class 25.png"] },

            { data: "08/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/Colpany 04.png", "capturas/Qualidade fornecedor/vidros/2024/3- Março/fast glass 04.png"] },
            { data: "11/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/11 Colpany.png", "capturas/Qualidade fornecedor/vidros/2024/3- Março/11 fast glass.png"] },
            { data: "18/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/18 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2024/3- Março/18 FAST CLASS.jpg"] },
            { data: "25/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/25 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2024/3- Março/25 FAST CLASS.jpg"] },

            { data: "05/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/5 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2024/4- Abril/5 FAST GLASS.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/8 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2024/4- Abril/8 FAST GLASS.jpg"] },
            { data: "15/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/15 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2024/4- Abril/15 FAST GLASS.jpg"] },
            { data: "26/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/22 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2024/4- Abril/22 FAST GLASS.jpg"] },
            { data: "29/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/29 company.jpeg", "capturas/Qualidade fornecedor/vidros/2024/4- Abril/29 fast glas.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/6 colpany.jpeg", "capturas/Qualidade fornecedor/vidros/2024/5- Maio/6 fast glass.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/13 colpany.jpg", "capturas/Qualidade fornecedor/vidros/2024/5- Maio/13 fast glass.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/20 colpany.jpg", "capturas/Qualidade fornecedor/vidros/2024/5- Maio/20 fast glass.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/27 colpany.jpg", "capturas/Qualidade fornecedor/vidros/2024/5- Maio/27 fast glass.jpg"] },

            { data: "06/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/03 fast.jpg", "capturas/Qualidade fornecedor/vidros/2024/6- Junho/03 Colpany.jpg"] },
            { data: "10/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/10 fast.jpg", "capturas/Qualidade fornecedor/vidros/2024/6- Junho/10 Colpany.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/17 fast.jpg", "capturas/Qualidade fornecedor/vidros/2024/6- Junho/17 Colpany.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/24 Fast.jpg", "capturas/Qualidade fornecedor/vidros/2024/6- Junho/24 Colpany.jpg"] },

            { data: "04/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/01 FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2024/7- Julho/01 colpany.jpg"] },
            { data: "16/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/08 FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2024/7- Julho/08 colpany.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/15 FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2024/7- Julho/15 colpany.jpg"] },
            { data: "25/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/22 FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2024/7- Julho/22 COLPANY.jpg"] },

            { data: "01/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/02 Fast glass.jpeg", "capturas/Qualidade fornecedor/vidros/2024/8- Agosto/02 colpany.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/9 Fast glass.jpeg", "capturas/Qualidade fornecedor/vidros/2024/8- Agosto/9 colpany.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/16 Fast glass.jpeg", "capturas/Qualidade fornecedor/vidros/2024/8- Agosto/16 colpany.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/22 Fast glass.jpeg", "capturas/Qualidade fornecedor/vidros/2024/8- Agosto/22 colpany.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/8- Agosto/30 Fast glass.jpeg", "capturas/Qualidade fornecedor/vidros/2024/8- Agosto/30 colpany.jpeg"] },

            { data: "02/09/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/9- Setembro/02 fast.jpeg", "capturas/Qualidade fornecedor/vidros/2024/9- Setembro/02 colpany.jpeg"] },
            { data: "09/09/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/9- Setembro/09 fast.jpeg", "capturas/Qualidade fornecedor/vidros/2024/9- Setembro/09 colpany.jpeg"] },
            { data: "16/09/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/9- Setembro/16 fast.jpeg", "capturas/Qualidade fornecedor/vidros/2024/9- Setembro/16 colpany.jpeg"] },
            { data: "23/09/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/9- Setembro/23 fast.jpeg", "capturas/Qualidade fornecedor/vidros/2024/9- Setembro/23 colpany.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/1 fast glass.jpeg", "capturas/Qualidade fornecedor/vidros/2024/10-Outubro/01 company.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/11 fast glass.jpeg", "capturas/Qualidade fornecedor/vidros/2024/10-Outubro/11 company.jpeg"] },
            { data: "18/10/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/14 fast glass.jpg", "capturas/Qualidade fornecedor/vidros/2024/10-Outubro/14 company.jpg"] },
            { data: "31/10/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/10-Outubro/29fast glass.jpg", "capturas/Qualidade fornecedor/vidros/2024/10-Outubro/29 company.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/01 fast glass.jpg", "capturas/Qualidade fornecedor/vidros/2024/11-Novembro/01 company.jpg"] },
            { data: "08/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/08 fast glass.jpg", "capturas/Qualidade fornecedor/vidros/2024/11-Novembro/08 company.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/14 fast glass.jpg", "capturas/Qualidade fornecedor/vidros/2024/11-Novembro/14 company.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/23 fast glass.jpg", "capturas/Qualidade fornecedor/vidros/2024/11-Novembro/23 company.jpg"] },
            { data: "28/11/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/11-Novembro/28 fast glass.jpg", "capturas/Qualidade fornecedor/vidros/2024/11-Novembro/28 company.jpg"] },

            { data: "06/12/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/12-Dezembro/02 fast.jpg", "capturas/Qualidade fornecedor/vidros/2024/12-Dezembro/02 comp.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/12-Dezembro/14 fast.jpeg", "capturas/Qualidade fornecedor/vidros/2024/12-Dezembro/14 colpany.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/06-01 fast.jpeg", "capturas/Qualidade fornecedor/vidros/2025/06-01 COLPANY.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/17  FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2025/17 COLPANY.jpg"] },
            { data: "23/01/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/23 FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2025/23 COLPANY.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/31 FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2025/31 COLPANY.jpg"] },

            { data: "06/02/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/FEVEREIRO/07 FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2025/FEVEREIRO/07 COLPANY.jpg"] },
            { data: "13/02/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/FEVEREIRO/14 FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2025/FEVEREIRO/14 COLPANY.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/FEVEREIRO/21  FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2025/FEVEREIRO/21 COLPANY.jpg"] },
           
            { data: "13/03/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/março/fast glass 11.jpeg", "capturas/Qualidade fornecedor/vidros/2025/março/COLPANY 11.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/março/fast glass 21.jpeg", "capturas/Qualidade fornecedor/vidros/2025/março/COLPANY 21.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/março/fast glass 28.jpeg", "capturas/Qualidade fornecedor/vidros/2025/março/COLPANY 28.jpeg"] },
           
            { data: "04/04/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/04 FAST GLASS.jpeg", "capturas/Qualidade fornecedor/vidros/2025/ABRIL/04 COLPANY.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/11 FAST GLASS.jpeg", "capturas/Qualidade fornecedor/vidros/2025/ABRIL/11 COLPANY.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/17 FAST GLASS.jpeg", "capturas/Qualidade fornecedor/vidros/2025/ABRIL/17 COLPANY.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/25-04.jpg", "capturas/Qualidade fornecedor/vidros/2025/ABRIL/25 colpany.jpg"] },
            { data: "01/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/ABRIL/30 fast.jpg", "capturas/Qualidade fornecedor/vidros/2025/ABRIL/30 colpany.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/MAIO/FAST 09.jpg", "capturas/Qualidade fornecedor/vidros/2025/MAIO/COLPANY 09.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/MAIO/FAST 16.jpg", "capturas/Qualidade fornecedor/vidros/2025/MAIO/COLPANY 16.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/MAIO/COLPANY 23.jpg", "capturas/Qualidade fornecedor/vidros/2025/MAIO/FAST 23.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/MAIO/FAST 30.jpg", "capturas/Qualidade fornecedor/vidros/2025/MAIO/COLPANY 30.jpg"] },

            { data: "06/06/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JUNHO/06.jpg", "capturas/Qualidade fornecedor/vidros/2025/JUNHO/06 C.jpg"] },
            { data: "11/06/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JUNHO/13 FAST.jpg", "capturas/Qualidade fornecedor/vidros/2025/JUNHO/13 COLP.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JUNHO/20FAST.jpg", "capturas/Qualidade fornecedor/vidros/2025/JUNHO/20 COLP.jpg"] },
            { data: "26/06/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JUNHO/27 FAST.jpg", "capturas/Qualidade fornecedor/vidros/2025/JUNHO/27 COLP.jpg"] },
            { data: "03/07/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/03 FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2025/JULHO/03 COLPANY.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/11 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2025/JULHO/11 FAST GLASS.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/18 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2025/JULHO/18  FAST GLASS.jpg"] },
            { data: "25/07/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/25 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2025/JULHO/25  FAST GLASS.jpg"] },
            { data: "01/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/JULHO/31 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2025/JULHO/31  FAST GLASS.jpg"] },
            { data: "08/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/AGOSTO/COLPANY 08.jpg", "capturas/Qualidade fornecedor/vidros/2025/AGOSTO/FAST GLASS  08.jpg"] },
            { data: "15/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/AGOSTO/COLPANY 11.jpg", "capturas/Qualidade fornecedor/vidros/2025/AGOSTO/FAST GLASS  11.jpg"] },
            { data: "22/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/AGOSTO/COLPANY 21.jpg", "capturas/Qualidade fornecedor/vidros/2025/AGOSTO/FAST GLASS 21.jpg"] },
            { data: "29/08/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/AGOSTO/COLPANY 29.jpg", "capturas/Qualidade fornecedor/vidros/2025/AGOSTO/FAST GLASS  29.jpg"] },

            { data: "05/09/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/05 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/05 FAST.jpg"] },
            { data: "11/09/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/11 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/11 FAST.jpg"] },
            { data: "18/09/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/18 FAST.jpg", "capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/18 COLPANY.jpg"] },
            { data: "26/09/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/25 FAST.jpg", "capturas/Qualidade fornecedor/vidros/2025/SETEMBRO/25 COLPANY.jpg"] },

            { data: "10/10/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/OUTUBRO/10 fast.jpg", "capturas/Qualidade fornecedor/vidros/2025/OUTUBRO/10 COLPANY.jpg"] },
            { data: "16/10/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/OUTUBRO/16 FAST.jpg", "capturas/Qualidade fornecedor/vidros/2025/OUTUBRO/16 COLPANY.jpg"] },
            { data: "24/10/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/OUTUBRO/24 FAST.jpg", "capturas/Qualidade fornecedor/vidros/2025/OUTUBRO/24 COLPANY.jpg"] },//
           
            { data: "07/11/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/07 fast.jpg", "capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/07 COLPANY.jpg"] },
            { data: "13/11/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/13 fast.jpg", "capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/13 colpa.jpg"] },
            { data: "22/11/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/22 colpa.jpg", "capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/22 fast.jpg"] },
            { data: "29/11/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/29 colpa.jpg", "capturas/Qualidade fornecedor/vidros/2025/NOVEMBRO/29 fast.jpg"] },

            { data: "06/12/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/DEZEMBRO/06 FAST.jpg", "capturas/Qualidade fornecedor/vidros/2025/DEZEMBRO/06 colpa.jpg"] },
            { data: "13/12/2025", captura: ["capturas/Qualidade fornecedor/vidros/2025/DEZEMBRO/13 colpa.jpg", "capturas/Qualidade fornecedor/vidros/2025/DEZEMBRO/13 FAST.jpg"] },

            { data: "09/01/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/09 fast.jpg", "capturas/Qualidade fornecedor/vidros/2026/09 colpany.jpg"] },
            { data: "16/01/2026", captura: ["capturas/Qualidade fornecedor/vidros/2026/16 fast.jpg", "capturas/Qualidade fornecedor/vidros/2026/16 colpany.jpg"] },



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



            // { data: "", captura: [""] },
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
