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
            { data: "30/11/2023", captura: ["capturas/Unidade 1/11- Novembro/Expedição/Embalagem/30.png", "capturas/Unidade 1/11- Novembro/Expedição/MetasTv/30.png"] },

            { data: "20/12/2023", captura: ["capturas/Unidade 1/12- Dezembro/Expedição/Embalagem/20.png", "capturas/Unidade 1/12- Dezembro/Expedição/MetasTv/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 1/2024/1- Janeiro/Expedição/Embalagem/31.png", "capturas/Unidade 1/2024/1- Janeiro/Expedição/MetasTv/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 1/2024/2- Fevereiro/Expedição/Embalagem/29.png", "capturas/Unidade 1/2024/2- Fevereiro/Expedição/MetasTv/29.png"] },

            { data: "30/03/2024", captura: ["capturas/Unidade 1/2024/3- Março/Expedição/Embalagem/30.jpg", "capturas/Unidade 1/2024/3- Março/Expedição/MetasTv/28.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 1/2024/4- Abril/Expedição/Embalagem/30.jpeg", "capturas/Unidade 1/2024/4- Abril/Expedição/MetasTv/30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/Expedição/Embalagem/30.jpg", "capturas/Unidade 1/2024/5- Maio/Expedição/MetasTv/30.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 1/2024/6- Junho/Expedição/Embalagem/29.jpg", "capturas/Unidade 1/2024/6- Junho/Expedição/MetasTv/28.jpg"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Expedição/Embalagem/31.jpeg", "capturas/Unidade 1/2024/7- Julho/Expedição/MetasTv/31.jpeg"] },

            { data: "31/08/2024", captura: ["capturas/Unidade 1/2024/8- Agosto/Expedição/Embalagem/31.jpeg", "capturas/Unidade 1/2024/8- Agosto/Expedição/MetasTv/31.jpeg"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 1/2024/9- Setembro/Expedição/Embalagem/30.jpeg", "capturas/Unidade 1/2024/9- Setembro/Expedição/MetasTv/30.jpeg"] },

            { data: "02/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/Embalagem/2.jpeg", "capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/02.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/Embalagem/3.jpeg", "capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/3.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/Embalagem/4.jpeg", "capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/4.jpeg"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/Embalagem/8.jpeg", "capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/8.jpeg"] },
            { data: "09/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/Embalagem/9.jpeg", "capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/9.jpeg"] },
            { data: "15/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/Embalagem/15.jpg", "capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/15.jpg"] },
            { data: "17/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/Embalagem/17.jpg", "capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/17.jpg"] },
            { data: "18/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/Embalagem/18.jpg", "capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/18.jpg"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/Embalagem/22.jpg", "capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/22.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/Embalagem/25.jpg", "capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/25.jpg"] },
            { data: "29/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/29.jpg", "capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/29.jpg"] },
            { data: "30/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/30.jpg", "capturas/Unidade 1/2024/10- Outubro/Expedição/Embalagem/30.jpg"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Expedição/MetasTv/31.jpg", "capturas/Unidade 1/2024/10- Outubro/Expedição/Embalagem/31.jpg"] },

            { data: "05/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/5.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/5.jpg"] },
            { data: "07/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/7.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/7.jpg"] },
            { data: "08/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/8.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/8.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/09.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/9.jpg"] },
            { data: "11/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/11.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/11.jpg"] },
            { data: "12/11/2024", captura: ["capturas/Unidade 1/2h024/11-Novembro/Expedição/Embalagem/12.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/12.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/16.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/14.jpg"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/18.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/18.jpg"] },
            { data: "20/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/20.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/20.jpg"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/21.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/21.jpg"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/22.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/22.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/23.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/23.jpg"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/25.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/25.jpg"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/26.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/26.jpg"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/27.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/27.jpg"] },
            { data: "28/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/28.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/28.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/30.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/30.jpg"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/Embalagem/02.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/MetasTv/02.jpg"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/Embalagem/3.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/MetasTv/3.jpg"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/Embalagem/4.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/MetasTv/4.jpg"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/Embalagem/5.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/MetasTv/5.jpg"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/MetasTv/06.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/Embalagem/6.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/MetasTv/7.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/Embalagem/7.jpg"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/MetasTv/12.jpeg", "capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/Embalagem/12.jpeg"] },
            { data: "14/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/Embalagem/14.jpeg", "capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/MetasTv/14.jpeg"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/MetasTv/16.jpeg", "capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/Embalagem/16.jpeg"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/MetasTv/17.jpeg", "capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/Embalagem/17.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/Embalagem/18.jpeg", "capturas/Unidade 1/2024/12-DEZEMBRO/Expedição/MetasTv/18.jpeg"] },

            { data: "07/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/7.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/7.jpeg"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/8.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/8.jpeg"] },
            { data: "09/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/9.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/9.jpeg"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/13.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/13.jpeg"] },
            { data: "15/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/15.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/15.jpeg"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/20.jpg", ""] },
            { data: "22/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/22.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/22.jpg"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/23.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/23.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/24.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/24.jpg"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/27.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/27.jpg"] },
            { data: "28/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/28.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/28.jpg"] },
            { data: "29/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/29.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/29.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/30.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/30.jpg"] },
            { data: "31/01/2025", captura: ["", "capturas/Unidade 1/2025/Expedição/MetasTv/JANEIRO/31.jpg"] },


            { data: "13/02/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/FEVEREIRO/13.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/FEVEREIRO/13.jpg"] },
            { data: "17/02/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/FEVEREIRO/17.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/FEVEREIRO/17.jpg"] },
            { data: "18/02/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/FEVEREIRO/18.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/FEVEREIRO/18.jpg"] },
            { data: "19/02/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/FEVEREIRO/19.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/FEVEREIRO/19.jpg"] },
            { data: "20/02/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/FEVEREIRO/20.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/FEVEREIRO/20.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/FEVEREIRO/21.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/FEVEREIRO/21.jpg"] },
            { data: "24/02/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/FEVEREIRO/24.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/FEVEREIRO/24.jpg"] },
            { data: "25/02/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/FEVEREIRO/25.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/FEVEREIRO/25.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/FEVEREIRO/26.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/FEVEREIRO/26.jpeg"] },
            
            { data: "13/03/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MARÇO/13.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/MARÇO/13.jpeg"] },
            { data: "14/03/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MARÇO/14.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/MARÇO/14.jpeg"] },
            { data: "17/03/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/15.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/15.jpeg"] },
            { data: "18/03/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MARÇO/18.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/MARÇO/18.jpeg"] },
            { data: "19/03/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MARÇO/19.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/MARÇO/19.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MARÇO/20.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/MARÇO/20.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MARÇO/21.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/MARÇO/21.jpeg"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MARÇO/24.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/MARÇO/24.jpeg"] },
            { data: "26/03/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MARÇO/26.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/MARÇO/26.jpeg"] },
            { data: "27/03/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MARÇO/27.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/MARÇO/27.jpeg"] },
            { data: "29/03/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MARÇO/29.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/MARÇO/29.jpeg"] },
            { data: "31/03/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MARÇO/31.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/MARÇO/31.jpeg"] },
            
            { data: "01/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/1.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/1.jpeg"] },
            { data: "03/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/03.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/3.jpeg"] },
            { data: "04/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/04.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/04.jpeg"] },
            { data: "07/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/07.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/07.jpeg"] },
            { data: "08/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/08.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/08.jpeg"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/09.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/09.jpeg"] },
            { data: "10/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/10.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/10.jpeg"] },
            { data: "14/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/14.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/11.jpeg"] },
            { data: "15/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/15.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/15.jpeg"] },
            { data: "16/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/16.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/16.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/17.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/17.jpeg"] },
            { data: "22/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/22.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/22.jpeg"] },
            { data: "23/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/23.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/23.jpeg"] },
            { data: "24/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/24.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/24.jpg"] },
            { data: "25/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/25.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/25.jpg"] },
            { data: "28/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/28.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/28.jpg"] },
            { data: "29/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/29.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/29.jpeg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/ABRIL/30.jpeg", "capturas/Unidade 1/2025/Expedição/Embalagem/04 ABRIL/30.jpeg"] },
            
            { data: "01/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/05.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/05.jpg"] },
            { data: "06/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/06.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/6.jpg"] },
            { data: "07/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/07.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/7.jpg"] },
            { data: "08/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/08.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/08.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/09.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/09.jpg"] },
            { data: "12/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/12.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/12.jpg"] },
            { data: "13/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/13.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/13.jpg"] },
            { data: "14/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/14.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/14.jpg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/15.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/15.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/16.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/16.jpg"] },
            { data: "19/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/19.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/19.jpg"] },
            { data: "20/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/20.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/20.jpg"] },
            { data: "21/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/21.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/21.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/23.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/23.jpg"] },
            { data: "27/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/27.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/27.jpg"] },
            { data: "28/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/28.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/28.jpg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/29.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/29.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/MAIO/30.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/05 MAIO/31.jpg"] },
            
            { data: "04/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/04.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/04.jpg"] },
            { data: "05/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/05.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/05.jpg"] },
            { data: "09/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/09.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/09.jpg"] },
            { data: "10/06/2025'", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/10.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/10.jpg"] },
            { data: "11/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/11.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/11.jpg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/12.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/12.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/13.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/13.jpg"] },
            { data: "16/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/16.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/16.jpg"] },
            { data: "17/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/17.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/17.jpg"] },
            { data: "18/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/18.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/18.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/19.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/19.jpg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/23.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/23.jpg"] },
            { data: "24/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/24.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/24.jpg"] },
            { data: "25/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/25.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/25.jpg"] },
            { data: "26/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/26.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/26.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/27.jpg", "capturas/Unidade 1/2025/Expedição/Embalagem/JUNHO/28.jpg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JUNHO/30.jpg", ""] },

            { data: "01/07/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JULHO/1.jpg"] },
            { data: "02/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/02.jpg", ""] },
            { data: "07/07/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JULHO/07.jpg"] },
            { data: "08/07/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JULHO/08.jpg"] },
            { data: "09/07/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JULHO/09.jpg", ""] },
            { data: "10/07/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JULHO/10.jpg"] },
            { data: "14/07/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JULHO/14.jpg"] },
            { data: "16/07/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JULHO/16.jpg"] },
            { data: "17/07/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JULHO/17.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JULHO/18.jpg"] },
            { data: "21/07/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JULHO/21.jpg"] },
            { data: "23/07/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JULHO/23.jpg"] },
            { data: "24/07/2025", captura: ["capturas/Unidade 1/2025/Expedição/MetasTv/JULHO/24.jpg"] },



            // { data: "", captura: ["", ""] },


        ],

        Acabamento: [
            { data: "30/11/2023", captura: ["capturas/Unidade 1/11- Novembro/LixaçãoMetal/30.png", "capturas/Unidade 1/11- Novembro/QuadroQuadroMetas/30.jpeg"] },

            { data: "20/12/2023", captura: ["capturas/Unidade 1/12- Dezembro/LixaçãoMetal/20.png", "capturas/Unidade 1/12- Dezembro/QuadroQuadroMetas/19.jpeg"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 1/2024/1- Janeiro/LixaçãoMetal/31.png", "capturas/Unidade 1/2024/1- Janeiro/QuadroMetas/31.jpg"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 1/2024/2- Fevereiro/LixaçãoMetal/29.png", "capturas/Unidade 1/2024/2- Fevereiro/LixaçãoOsso/28.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 1/2024/3- Março/LixaçãoMetal/28.jpg", "capturas/Unidade 1/2024/3-Março/LixaçãoOsso/28.jpg", "capturas/Unidade 1/2024/3- Março/QuadroMetas/28.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 1/2024/4- Abril/LixaçãoMetal/30.jpeg", "capturas/Unidade 1/2024/4- Abril/LixaçãoOsso/30.jpeg", "capturas/Unidade 1/2024/4- Abril/QuadroMetas/18.png"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/LixaçãoMetal/30.jpg", "capturas/Unidade 1/2024/5- Maio/LixaçãoOsso/30.jpg", "capturas/Unidade 1/2024/5- Maio/QuadroMetas/30.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 1/2024/6- Junho/LixaçãoMetal/28.jpg", "capturas/Unidade 1/2024/6- Junho/LixaçãoOsso/28.jpg", "capturas/Unidade 1/2024/6- Junho/QuadroMetas/27.png"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/LixaçãoMetal/31.jpeg", "capturas/Unidade 1/2024/7- Julho/LixaçãoOsso/31.jpeg", "capturas/Unidade 1/2024/7- Julho/QuadroMetas/31.png"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 1/2024/8- Agosto/LixaçãoMetal/30.jpeg", "capturas/Unidade 1/2024/8- Agosto/LixaçãoOsso/30.jpeg", "capturas/Unidade 1/2024/8- Agosto/QuadroMetas/30.jpeg"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 1/2024/9- Setembro/LixaçãoMetal/30.jpeg", "capturas/Unidade 1/2024/9- Setembro/LixaçãoOsso/30.jpeg", "capturas/Unidade 1/2024/9- Setembro/Lix.Fundo/30.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/01.jpeg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/01.jpeg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/01.jpeg"] },
            { data: "02/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/2.jpeg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/2.jpeg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/2.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/3.jpeg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/3.jpeg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/3.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/4.jpeg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/4.jpeg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/4.jpeg"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/08.jpeg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/8.jpeg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/8.jpeg"] },
            { data: "09/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/9.jpeg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/9.jpeg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/9.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/11.jpg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/11.jpg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/11.jpg"] },
            { data: "14/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/14.jpg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/14.jpg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/14.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/15.jpg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/15.jpg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/15.jpg"] },
            { data: "16/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/16.jpg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/16.jpg"] },
            { data: "17/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/17.jpg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/17.jpg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/17.jpg"] },
            { data: "18/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/18.jpg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/18.jpg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/18.jpg"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/22.jpg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/22.jpg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/22.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/25.jpg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/25.jpg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/25.jpg"] },
            { data: "29/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/29.jpg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/29.jpg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/29.jpg"] },
            { data: "30/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/30.jpg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/30.jpg", "capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/30.jpg"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Lix.Fundo/31.jpg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoMetal/31.jpg", "capturas/Unidade 1/2024/10- Outubro/LixaçãoOsso/31.jpg"] },

            { data: "05/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/5.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/05.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/5.jpg"] },
            { data: "07/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/7.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/7.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/7.jpg"] },
            { data: "08/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/8.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/8.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/8.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/09.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/9.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/9.jpg"] },
            { data: "11/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/11.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/11.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/11.jpg"] },
            { data: "12/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/12.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/12.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/12.jpg"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/18.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/18.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/18.jpg"] },
            { data: "20/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/20.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/20.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/20.jpg"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/21.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/21.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/21.jpg"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/22.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/22.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/22.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/23.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/23.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/23.jpg"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/25.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/25.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/25.jpg"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/26.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/26.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/26.jpg"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/27.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/27.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/27.jpg"] },
            { data: "28/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/28.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/28.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/28.jpg"] },
            { data: "29/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/29.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/29.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/29.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/LixaçãoOsso/30.jpg", "capturas/Unidade 1/2024/11-Novembro/LixaçãoMetal/30.jpg", "capturas/Unidade 1/2024/11-Novembro/Lix.Fundo/30.jpg"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoOsso/02.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoMetal/02.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Lix.Fundo/02.jpg"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoOsso/3.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoMetal/3.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Lix.Fundo/3.jpg"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoOsso/04.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoMetal/04.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Lix.Fundo/4.jpg"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoOsso/5.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoMetal/5.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Lix.Fundo/5.jpg"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoOsso/6.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoMetal/6.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Lix.Fundo/6.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoOsso/7.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoMetal/7.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Lix.Fundo/7.jpg"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoOsso/11.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoMetal/11.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Lix.Fundo/11.jpg"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoMetal/12.jpeg", "capturas/Unidade 1/2024/12-DEZEMBRO/Lix.Fundo/12.jpeg"] },
            { data: "14/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoOsso/14.jpeg", "capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoMetal/14.jpeg", ""] },
            { data: "16/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoOsso/16.jpeg", "capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoMetal/16.jpeg", ""] },
            { data: "17/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoOsso/17.jpeg", "capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoMetal/17.jpeg", "capturas/Unidade 1/2024/12-DEZEMBRO/Lix.Fundo/17.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoOsso/18.jpeg", "capturas/Unidade 1/2024/12-DEZEMBRO/LixaçãoMetal/18.jpeg", "capturas/Unidade 1/2024/12-DEZEMBRO/Lix.Fundo/18.jpeg"] },

            { data: "06/01/2025", captura: ["capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/6.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/6.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/6.jpeg"] },
            { data: "07/01/2025", captura: ["capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/7.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/7.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/7.jpeg"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/8.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/8.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/8.jpeg"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/9.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/09.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/9.jpeg"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/13.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/13.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/13.jpeg"] },
            { data: "15/01/2025", captura: ["capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/15.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/15.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/15.jpeg"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/20.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/20.jpg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/20.jpg"] },
            { data: "21/01/2025", captura: ["capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/21.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/21.jpg", ""] },
            { data: "22/01/2025", captura: ["capturas/Unidade 1/2025/Stone/22.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/22.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/22.jpg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/22.jpg"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/23.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/23.jpg", "", ""] },
            { data: "23/01/2025", captura: ["capturas/Unidade 1/2025/Stone/23.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/23.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/23.jpg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/23.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/24.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/24.jpg", "capturas/Unidade 1/2025/Stone/24.jpg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/24.jpg"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 1/2025/Stone/27.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/27.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/27.jpg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/27.jpg"] },
            { data: "28/01/2025", captura: ["capturas/Unidade 1/2025/Stone/28.jpg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/28.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/28.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/28.jpg"] },
            { data: "29/01/2025", captura: ["capturas/Unidade 1/2025/Stone/29.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/29.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/29.jpg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/29.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Unidade 1/2025/Stone/30.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/30.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/30.jpg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/30.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Unidade 1/2025/Stone/31.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/JANEIRO/31.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/JANEIRO/31.jpg", "capturas/Unidade 1/2025/Lix.Fundo/JANEIRO/31.jpg"] },

            { data: "05/02/2025", captura: ["capturas/Unidade 1/2025/Stone/FEVEREIRO/5.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/5.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/05.jpg", "capturas/Unidade 1/2025/Lix.Fundo/FEVEREIRO/5.jpg"] },
            { data: "06/02/2025", captura: ["capturas/Unidade 1/2025/Stone/FEVEREIRO/6.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/6.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/6.jpg", "capturas/Unidade 1/2025/Lix.Fundo/FEVEREIRO/6.jpg"] },
            { data: "07/02/2025", captura: ["capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/7.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/7.jpg", "", ""] },
            { data: "10/02/2025", captura: ["capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/10.png", "capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/10.png", "", ""] },

            { data: "11/02/2025", captura: ["capturas/Unidade 1/2025/Stone/FEVEREIRO/11.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/11.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/11.jpg", "capturas/Unidade 1/2025/Lix.Fundo/FEVEREIRO/11.jpg"] },
            { data: "13/02/2025", captura: ["capturas/Unidade 1/2025/Stone/FEVEREIRO/13.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/13.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/13.jpg", "capturas/Unidade 1/2025/Lix.Fundo/FEVEREIRO/13.jpg"] },
            { data: "17/02/2025", captura: ["capturas/Unidade 1/2025/Stone/FEVEREIRO/17.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/17.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/17.jpg", "capturas/Unidade 1/2025/Lix.Fundo/FEVEREIRO/17.jpg"] },
            { data: "19/02/2025", captura: ["capturas/Unidade 1/2025/Stone/FEVEREIRO/19.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/19.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/19.jpg", "capturas/Unidade 1/2025/Lix.Fundo/FEVEREIRO/19.jpg"] },
            { data: "20/02/2025", captura: ["capturas/Unidade 1/2025/Stone/FEVEREIRO/20.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/20.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/20.jpg", "capturas/Unidade 1/2025/Lix.Fundo/FEVEREIRO/20.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Unidade 1/2025/Stone/FEVEREIRO/21.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/21.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/21.jpg", "capturas/Unidade 1/2025/Lix.Fundo/FEVEREIRO/21.jpg"] },
            { data: "24/02/2025", captura: ["capturas/Unidade 1/2025/Stone/FEVEREIRO/24.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/24.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/24.jpg", "capturas/Unidade 1/2025/Lix.Fundo/FEVEREIRO/24.jpg"] },
            { data: "25/02/2025", captura: ["capturas/Unidade 1/2025/Stone/FEVEREIRO/25.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/25.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/25.jpg", "capturas/Unidade 1/2025/Lix.Fundo/FEVEREIRO/25.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Unidade 1/2025/Stone/FEVEREIRO/26.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/FEVEREIRO/26.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/FEVEREIRO/26.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/FEVEREIRO/26.jpeg"] },
            
            { data: "13/03/2025", captura: ["capturas/Unidade 1/2025/Stone/MARÇO/13.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/MARÇO/13.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/MARÇO/13.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/MARÇO/13.jpeg"] },
            { data: "14/03/2025", captura: ["capturas/Unidade 1/2025/Stone/MARÇO/14.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/MARÇO/14.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/MARÇO/14.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/MARÇO/14.jpeg"] },
            { data: "17/03/2025", captura: ["capturas/Unidade 1/2025/Stone/MARÇO/17.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/MARÇO/17.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/MARÇO/17.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/MARÇO/17.jpeg"] },
            { data: "18/03/2025", captura: ["capturas/Unidade 1/2025/Stone/MARÇO/18.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/MARÇO/18.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/MARÇO/18.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/MARÇO/18.jpeg"] },
            { data: "19/03/2025", captura: ["capturas/Unidade 1/2025/Stone/MARÇO/19.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/MARÇO/19.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/MARÇO/19.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/MARÇO/19.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Unidade 1/2025/Stone/MARÇO/20.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/MARÇO/20.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/MARÇO/20.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/MARÇO/20.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Unidade 1/2025/Stone/MARÇO/21.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/MARÇO/21.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/MARÇO/21.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/MARÇO/21.jpeg"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 1/2025/Stone/MARÇO/24.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/MARÇO/24.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/MARÇO/24.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/MARÇO/24.jpeg"] },
            { data: "26/03/2025", captura: ["capturas/Unidade 1/2025/Stone/MARÇO/26.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/MARÇO/26.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/MARÇO/26.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/MARÇO/26.jpeg"] },
            { data: "27/03/2025", captura: ["capturas/Unidade 1/2025/Stone/MARÇO/27.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/MARÇO/27.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/MARÇO/27.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/MARÇO/27.jpeg"] },
            { data: "29/03/2025", captura: ["capturas/Unidade 1/2025/Stone/MARÇO/29.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/MARÇO/29.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/MARÇO/29.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/MARÇO/29.jpeg"] },
            { data: "31/03/2025", captura: ["capturas/Unidade 1/2025/Stone/MARÇO/31.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/MARÇO/31.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/MARÇO/31.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/MARÇO/31.jpeg"] },

            { data: "01/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/1.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/1.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/1.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/1.jpeg"] },
            { data: "03/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/3.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/03.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/03.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/3.jpeg"] },
            { data: "04/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/04.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/04.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/04.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/04.jpeg"] },
            { data: "07/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/07.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/07.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/07.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/07.jpeg"] },
            { data: "08/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/08.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/08.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/08.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/08.jpeg"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/09.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/09.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/09.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/09.jpeg"] },
            { data: "10/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/10.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/10.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/10.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/10.jpeg"] },
            { data: "14/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/14.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/14.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/14.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/14.jpeg"] },
            { data: "15/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/15.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/15.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/15.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/15.jpeg"] },
            { data: "16/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/16.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/16.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/16.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/16.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/17.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/17.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/17.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/17.jpeg"] },
            { data: "22/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/22.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/22.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/22.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/22.jpeg"] },
            { data: "23/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/23.jpeg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/23.jpeg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/23.jpeg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/23.jpeg"] },
            { data: "24/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/24.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/24.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/24.jpg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/24.jpg"] },
            { data: "25/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/25.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/25.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/25.jpg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/25.jpg"] },
            { data: "28/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/28.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/28.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/28.jpg","capturas/Unidade 1/2025/Lix.Fundo/ABRIL/28.jpg"] },
            { data: "29/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/29.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/29.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/29.jpg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/29.jpg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 1/2025/Stone/ABRIL/30.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/ABRIL/30.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/ABRIL/30.jpg", "capturas/Unidade 1/2025/Lix.Fundo/ABRIL/30.jpg"] },
            
            { data: "01/05/2025", captura: ["capturas/Unidade 1/2025/Stone/05 MAIO/05.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/05-MAIO/05.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/05-MAIO/05.jpg", "capturas/Unidade 1/2025/Lix.Fundo/05 MAIO/05.jpg"] },
            { data: "06/05/2025", captura: ["capturas/Unidade 1/2025/Stone/05 MAIO/06.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/05-MAIO/06.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/05-MAIO/06.jpg", "capturas/Unidade 1/2025/Lix.Fundo/05 MAIO/06.jpg"] },
            { data: "07/05/2025", captura: ["capturas/Unidade 1/2025/Stone/05 MAIO/07.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/05-MAIO/07.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/05-MAIO/07.jpg", "capturas/Unidade 1/2025/Lix.Fundo/05 MAIO/07.jpg"] },
            { data: "08/05/2025", captura: ["capturas/Unidade 1/2025/Stone/05 MAIO/08.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/05-MAIO/08.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/05-MAIO/08.jpg", "capturas/Unidade 1/2025/Lix.Fundo/05 MAIO/08.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Unidade 1/2025/Stone/05 MAIO/09.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/05-MAIO/09.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/05-MAIO/09.jpg", "capturas/Unidade 1/2025/Lix.Fundo/05 MAIO/09.jpg"] },
            { data: "12/05/2025", captura: ["capturas/Unidade 1/2025/Stone/05 MAIO/12.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/05-MAIO/12.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/05-MAIO/12.jpg", "capturas/Unidade 1/2025/Lix.Fundo/05 MAIO/12.jpg"] },
            { data: "13/05/2025", captura: ["capturas/Unidade 1/2025/Stone/05 MAIO/13.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/05-MAIO/13.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/05-MAIO/13.jpg", "capturas/Unidade 1/2025/Lix.Fundo/05 MAIO/13.jpg"] },
            { data: "14/05/2025", captura: ["capturas/Unidade 1/2025/Stone/05 MAIO/14.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/05-MAIO/14.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/05-MAIO/14.jpg", "capturas/Unidade 1/2025/Lix.Fundo/05 MAIO/14.jpg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 1/2025/Stone/05 MAIO/15.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/05-MAIO/15.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/05-MAIO/15.jpg", "capturas/Unidade 1/2025/Lix.Fundo/05 MAIO/15.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Unidade 1/2025/Stone/05 MAIO/16.jpg", "capturas/Unidade 1/2025/LixaçãoOsso/05-MAIO/16.jpg", "capturas/Unidade 1/2025/LixaçãoMetal/05-MAIO/16.jpg", "capturas/Unidade 1/2025/Lix.Fundo/05 MAIO/16.jpg"] },
            { data: "19/05/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/19.jpg"] },
            { data: "20/05/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/20.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/23.jpg"] },
            { data: "27/05/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/27.jpg"] },
            { data: "28/05/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/28.jpg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/29.jpg"] },
            { data: "31/05/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/31.jpg"] },

            { data: "03/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/03.jpg"] },
            { data: "04/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/4.jpg"] },
            { data: "05/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/5.jpg"] },
            { data: "06/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/06.jpg"] },
            { data: "09/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/09.jpg"] },
            { data: "10/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/10.jpg"] },
            { data: "11/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/11.jpg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/12.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/13.jpg"] },
            { data: "16/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/16.jpg"] },
            { data: "17/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/17.jpg"] },
            { data: "18/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/18.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/19.jpg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/23.jpg"] },
            { data: "24/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/24.jpg"] },
            { data: "25/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/25.jpg"] },
            { data: "26/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/26.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/27.jpg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JUNHO/30.jpg"] },
           
            { data: "01/07/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JULHO/01.jpg"] },
            { data: "02/07/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JULHO/02.jpg"] },
            { data: "07/07/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JULHO/07.jpg", "capturas/Unidade 1/2025/ACABAMENTO 2025/JULHO/7H.jpg"] },
            { data: "08/07/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JULHO/08.jpg"] },
            { data: "09/07/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JULHO/09.jpg"] },
            { data: "14/07/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JULHO/14.jpg"] },
            { data: "16/07/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JULHO/16.jpg"] },
            { data: "17/07/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JULHO/17.jpg"] },
            { data: "21/07/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JULHO/21.jpg"] },
            { data: "23/07/2025", captura: ["capturas/Unidade 1/2025/ACABAMENTO 2025/JULHO/23.jpg"] },

            
            // { data: "", captura: [""] },





        ],

        Usinagem: [
            { data: "30/11/2023", captura: ["capturas/Unidade 1/11- Novembro/Usinagem/Filetação/30.png", "capturas/Unidade 1/11- Novembro/Usinagem/Tupi30.png"] },

            { data: "19/12/2023", captura: ["capturas/Unidade 1/12- Dezembro/Usinagem/Filetação/19.png", "capturas/Unidade 1/12- Dezembro/Usinagem/Tupi11.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 1/2024/1- Janeiro/Usinagem/Filetação/31.png", "capturas/Unidade 1/2024/1- Janeiro/Usinagem/Tupi31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 1/2024/2- Fevereiro/Usinagem/Filetação/29.png", "capturas/Unidade 1/2024/2- Fevereiro/Usinagem/Tupi29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 1/2024/3- Março/Usinagem/Filetação/28.jpg", "capturas/Unidade 1/2024/3- Março/Usinagem/Tupi25.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 1/2024/4- Abril/Usinagem/Filetação/30.jpeg", "capturas/Unidade 1/2024/4- Abril/Usinagem/Tupi30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/Usinagem/Filetação/30.jpg", "capturas/Unidade 1/2024/5- Maio/Usinagem/Tupi29.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 1/2024/6- Junho/Usinagem/Filetação/28.jpg", "capturas/Unidade 1/2024/6- Junho/Usinagem/Tupi28.jpg"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Filetação/31.jpeg", "capturas/Unidade 1/2024/7- Julho/Usinagem/Tupi31.jpeg"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 1/2024/8- Agosto/Usinagem/Filetação/30.jpeg"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 1/2024/9- Setembro/Usinagem/Filetação/30.jpeg", "capturas/Unidade 1/2024/9- Setembro/Usinagem/Tupi30.jpeg"] },

            { data: "02/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/2.jpeg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupi2.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/3.jpeg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupi3.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/4.jpeg"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/8.jpeg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupi8.jpeg"] },
            { data: "09/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/9.jpeg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupi9.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/11.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/15.jpg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupi15.jpg"] },
            { data: "18/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/18.jpg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupi18.jpg"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/22.jpg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupi22.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupi25.jpg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/25.jpg"] },
            { data: "29/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupi29.jpg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/29.jpg"] },
            { data: "29/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/30.jpg"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/31.jpg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupi31.jpg"] },

            { data: "04/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/04.jpg"] },
            { data: "05/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupi5.jpg"] },
            { data: "07/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/7.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupi7.jpg"] },
            { data: "08/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/8.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupi8.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/9.jpg"] },
            { data: "11/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/11.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupi11.jpg"] },
            { data: "12/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/12.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/14.jpg"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupi18.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/18.jpg"] },
            { data: "20/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/20.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupi20.jpg"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupi21.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/21.jpg"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/22.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupi22.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/23.jpg"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/23.jpg", "NÃO ENTREGARAM"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/26.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupi26.jpg"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/27.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupi27.jpg"] },
            { data: "28/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/28.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupi28.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/30.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupi30.jpg"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/02.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Tupi02.jpg"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/3.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Tupi3.jpg"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/4.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Tupi04.jpg"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/05.jpg "] },
            { data: "06/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/06.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/7.jpg"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/11.jpg"] },
            { data: "13/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/13.jpeg", "NÃO ENTREGARAM"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/16.jpeg"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/17.jpeg"] },

            { data: "07/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07.jpeg", ""] },
            { data: "08/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/8.jpeg", ""] },
            { data: "09/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/9.jpeg", ""] },
            { data: "10/01/2025", captura: ["", "", "capturas/Unidade 1/2025/Usinagem/Cnc/10.jpeg"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/13.jpeg", ""] },
            { data: "15/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Tupi15.jpeg", "capturas/Unidade 1/2025/Usinagem/Filetação/15.jpeg"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/20.jpg", ""] },
            { data: "22/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/22.jpg", "capturas/Unidade 1/2025/Usinagem/Cnc/22.jpg"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/23.jpg", "capturas/Unidade 1/2025/Usinagem/Cnc/23.jpg", ""] },
            { data: "24/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Cnc/24.jpg", "capturas/Unidade 1/2025/Usinagem/Filetação/24.jpg"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/27.jpg", "capturas/Unidade 1/2025/Usinagem/Cnc/27.jpg"] },
            { data: "28/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/28.jpg", "capturas/Unidade 1/2025/Usinagem/Cnc/28.jpg"] },
            { data: "29/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Cnc/29.jpg", "capturas/Unidade 1/2025/Usinagem/Filetação/29.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/30.png", "capturas/Unidade 1/2025/Usinagem/Cnc/30.jpg", ""] },
            { data: "31/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/31.jpg", "capturas/Unidade 1/2025/Usinagem/Cnc/31.jpg"] },

            { data: "05/02/2025", captura: ["", "capturas/Unidade 1/2025/Usinagem/Filetação/FEVEREIRO/05.jpg"] },
            { data: "11/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/FEVEREIRO/11.jpg"] },

            { data: "13/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/FEVEREIRO/13.jpg", "", ""] },
            { data: "17/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/FEVEREIRO/17.jpg"] },
            { data: "18/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/FEVEREIRO/18.jpg"] },
            { data: "19/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/FEVEREIRO/19.jpg"] },
            { data: "20/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/FEVEREIRO/20.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/FEVEREIRO/21.jpg"] },
            { data: "24/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/FEVEREIRO/24.jpg"] },
            { data: "25/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/FEVEREIRO/25.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/30.png"] },
            { data: "13/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/MARÇO/13.jpeg"] },
            { data: "14/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/MARÇO/14.jpeg"] },
            { data: "17/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/MARÇO/17.jpeg"] },
            { data: "18/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/MARÇO/18.jpeg"] },
            { data: "19/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/MARÇO/19.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/MARÇO/20.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/MARÇO/21.jpeg"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/MARÇO/24.jpeg"] },
            { data: "26/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/MARÇO/26.jpeg"] },
            { data: "27/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/MARÇO/27.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/MARÇO/28.jpeg"] },
            { data: "31/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/MARÇO/31.jpeg"] },
            
            { data: "01/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/1.jpeg"] },
            { data: "03/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/03.jpeg"] },
            { data: "04/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/04.jpeg"] },
            { data: "07/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/07.jpeg"] },
            { data: "08/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/08.jpeg"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/09.jpeg"] },
            { data: "10/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/10.jpeg"] },
            { data: "14/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/14.jpeg"] },
            { data: "15/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/15.jpeg"] },
            { data: "16/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/16.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/17.jpeg"] },
            { data: "22/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/22.jpeg"] },
            { data: "23/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/23.jpeg"] },
            { data: "24/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/24.jpg"] },
            { data: "25/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/25.jpg"] },
            { data: "28/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/28.jpg"] },
            { data: "29/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/29.jpg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/ABRIL/30.jpg"] },

            { data: "05/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06 MAIO/5.jpg"] },
            { data: "06/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/06.jpg", "capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/06.jpg"] },
            { data: "07/05/2025", captura: ["capturascapturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/07.jpg", "capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/07.jpg", ""] },
            { data: "08/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/08.jpg", "capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/08.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/09.jpg", "capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/09.jpg"] },
            { data: "12/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/12.jpg", "capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/12.jpg"] },
            { data: "13/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/13.jpg", "capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/13.jpg"] },
            { data: "14/05/2025", captura: ["capturas/capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/14.jpg", "capturas/capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/14.jpg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/15.jpg", "capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/15.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/16.jpg"] },
            { data: "19/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/19.jpg", "capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/19.jpg"] },
            { data: "20/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/20.jpg", "capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/20.jpg"] },
            { data: "21/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/21.jpg", "capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/21.jpg"] },
            { data: "22/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/22.jpg", "capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/22.jpg"] },
            { data: "27/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/27.jpg", "capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/27.jpg"] },
            { data: "28/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Tupi05 MAIO/28.jpg", "capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/28.jpg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/29.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/05-MAIO/30.jpg"] },

            { data: "03/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/3.jpg"] },
            { data: "04/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/04.jpg"] },
            { data: "05/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/05.jpg"] },
            { data: "06/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/06.jpg"] },

            { data: "10/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/10.jpg", "capturas/Unidade 1/2025/Usinagem/Tupia/06 JUNHO/10.jpg"] },
            { data: "11/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/11.jpg", "capturas/Unidade 1/2025/Usinagem/Tupia/06 JUNHO/11.jpg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/12.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/13.jpg"] },
            { data: "16/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/16.jpg"] },
            { data: "17/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/17.jpg"] },
            { data: "18/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/18.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/19.jpg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/23.jpg"] },
            { data: "24/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/24.jpg"] },
            { data: "25/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/25.jpg"] },
            { data: "26/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/26.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/27.jpg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/06-JUNHO/30.jpg"] },

            { data: "01/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/01.jpg"] },
            { data: "02/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/02.jpg"] },
            { data: "07/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/03.jpg"] },
            { data: "08/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/8.jpg"] },
            { data: "09/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/09.jpg"] },
            { data: "10/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/10.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/11.jpg"] },
            { data: "14/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/14.jpg"] },
            { data: "15/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/15.jpg"] },
            { data: "16/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/16.jpg"] },
            { data: "17/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/17.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/18.jpg"] },
            { data: "21/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/21.jpg"] },
            { data: "23/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/23.jpg"] },
            { data: "24/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/24.jpg"] },

            



            // { data: "", captura: ["", ""] },

        ],

        Montagem: [
            { data: "30/11/2023", captura: ["capturas/Unidade 1/11- Novembro/Usinagem/Montagem/30.png"] },

            { data: "20/12/2023", captura: ["capturas/Unidade 1/12- Dezembro/Usinagem/Montagem/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 1/2024/1- Janeiro/Usinagem/Montagem/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 1/2024/2- Fevereiro/Usinagem/Montagem/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 1/2024/3- Março/Usinagem/Montagem/28.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 1/2024/4- Abril/Usinagem/Montagem/30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/Usinagem/Montagem/30.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 1/2024/6- Junho/Usinagem/Montagem/28.jpg"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/31.jpeg"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 1/2024/8- Agosto/Usinagem/Montagem/31.jpeg", "capturas/Unidade 1/2024/8- Agosto/Usinagem/Montagem/31 HEXTRA.jpeg"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 1/2024/9- Setembro/Usinagem/Montagem/30.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/1.jpeg"] },
            { data: "02/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/2.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/03.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/04.jpeg"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/08.jpeg"] },
            { data: "09/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/9.jpeg"] },
            { data: "14/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/14.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/15.jpg"] },
            { data: "16/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/16.jpg"] },
            { data: "17/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/17.jpg"] },
            { data: "18/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/18.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/19.jpg"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/22.jpg"] },
            { data: "23/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/23.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/25.jpg"] },
            { data: "29/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/29.jpg"] },
            { data: "30/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/30.jpg"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Montagem/31.jpg"] },

            { data: "05/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/5.jpg"] },
            { data: "06/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/6.jpg"] },
            { data: "07/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/7.jpg"] },
            { data: "08/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/8.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/9.jpg"] },
            { data: "11/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/11.jpg"] },
            { data: "16/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/16.jpg"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/18.jpg"] },
            { data: "20/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/20.jpg"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/21.jpg"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/22.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/23.jpg"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/25.jpg"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/26.jpg"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/27.jpg"] },
            { data: "28/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/28.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/30.jpg"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Montagem/2.jpg"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Montagem/3.jpg"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Montagem/04.jpg"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Montagem/05.jpg"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Montagem/6.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Montagem/7.jpg"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Montagem/12.jpeg"] },
            { data: "14/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Montagem/14.jpeg"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Montagem/16.jpeg"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Montagem/17.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Montagem/18.jpeg"] },

            { data: "06/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/6.jpeg"] },
            { data: "07/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/7.jpeg"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/8.jpeg"] },
            { data: "09/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/09.jpeg"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/13.jpeg"] },
            { data: "15/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/15.jpeg"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/20.jpg"] },
            { data: "22/01/2025", captura: ["capturas/Unidade A11/2025/Usinagem/Montagem/Janeiro/22.jpg"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/23.jpg"] },
            { data: "24/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/24-01.jpg"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/27.jpg"] },

            { data: "28/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/28.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/30.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/Janeiro/31.jpg"] },

            { data: "05/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/FEVEREIRO/05.jpg"] },
            { data: "10/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/FEVEREIRO/10.jpg"] },
            { data: "11/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/FEVEREIRO/11.jpg"] },
            { data: "13/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/FEVEREIRO/13.jpg"] },
            { data: "17/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/FEVEREIRO/17.jpg"] },
            { data: "18/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/FEVEREIRO/18.jpg"] },
            { data: "19/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/FEVEREIRO/19.jpg"] },
            { data: "20/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/FEVEREIRO/20.jpg"] },
            { data: "22/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/FEVEREIRO/22.jpg"] },
            { data: "24/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/FEVEREIRO/24.jpg"] },
            { data: "25/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/FEVEREIRO/25.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/FEVEREIRO/26.jpeg"] },
            { data: "13/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/MARÇO/13.jpeg"] },
            { data: "14/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/MARÇO/14.jpeg"] },
            { data: "18/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/MARÇO/18.jpeg"] },
            { data: "19/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/MARÇO/19.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/MARÇO/20.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/MARÇO/21.jpeg"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/MARÇO/24.jpeg"] },
            { data: "25/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/MARÇO/26.jpeg"] },
            { data: "27/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/MARÇO/27.jpeg"] },
            { data: "29/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/MARÇO/29.jpeg"] },
            { data: "31/03/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/MARÇO/31.jpeg"] },
            
            { data: "01/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/01.jpeg"] },
            { data: "03/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/03.jpeg"] },
            { data: "04/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/04.jpeg"] },
            { data: "07/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/05.jpeg"] },
            { data: "08/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/08.jpeg"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/09.jpeg"] },
            { data: "10/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/10.jpeg"] },
            { data: "14/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/14.jpeg"] },
            { data: "15/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/15.jpeg"] },
            { data: "16/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/16.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/17.jpeg"] },
            { data: "22/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/22.jpeg"] },
            { data: "23/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/23.jpeg"] },
            { data: "24/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/24.jpg"] },
            { data: "25/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/25.jpg"] },
            { data: "28/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/28.jpg"] },
            { data: "29/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/29.jpg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/ABRIL/30.jpg"] },

            { data: "05/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/6-MAIO/5.jpg"] },
            { data: "06/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/06.jpg"] },
            { data: "07/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/07.jpg"] },
            { data: "08/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/08.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/09.jpg"] },
            { data: "12/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/12.jpg"] },
            { data: "13/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/13.jpg"] },
            { data: "14/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/14.jpg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/15.jpg"] },
            { data: "17/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/17.jpg"] },
            { data: "20/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/20.jpg"] },
            { data: "21/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/21.jpg"] },
            { data: "24/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/24.jpg"] },
            { data: "27/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/27.jpg"] },
            { data: "28/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/28.jpg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/29.jpg"] },
            { data: "31/05/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/5-MAIO/31.jpg"] },

            { data: "03/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/03.jpg"] },
            { data: "04/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/04.jpg", "capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/04HJ.jpg"] },
            { data: "05/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/05.jpg"] },
            { data: "06/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/06.jpg", "capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/06 H.jpg"] },
            { data: "09/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/09.jpg"] },
            { data: "10/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/10.jpg"] },
            { data: "11/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/11.jpg", "capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/11h.jpg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/12.jpg", "capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/12 H.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/13.jpg", "capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/13H.jpg"] },
            { data: "16/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/16.jpg"] },
            { data: "17/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/17.jpg"] },
            { data: "18/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/18.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/19.jpg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/23.jpg"] },
            { data: "24/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/24.jpg"] },
            { data: "25/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/25.jpg"] },
            { data: "26/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/26.jpg"] },
            { data: "28/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/28.jpg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/06-JUNHO/30.jpg"] },
            
            { data: "01/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/01.jpg"] },
            { data: "02/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/02.jpg", "capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/02 h.jpg"] },
            { data: "07/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/07.jpg"] },
            { data: "08/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/08.jpg"] },
            { data: "09/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/09.jpg"] },
            { data: "10/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/10.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/11.jpg", "capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/11H.jpg"] },
            { data: "14/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/14.jpg"] },
            { data: "15/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/15.jpg"] },
            { data: "16/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/16.jpg"] },
            { data: "17/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/17.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07-JULHO/18.jpg"] },
            { data: "21/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/21.jpg"] },
            { data: "23/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/23.jpg"] },
            { data: "24/07/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/24 PT1.jpg", "capturas/Unidade 1/2025/Usinagem/Montagem/JULHO/24 PT2.jpg"] },



            // { data: "", captura: [""] },


        ],
    },

    UA2: {
        Estofaria: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Estofari11- Novembro/.Estofadores/Estofadores_30_pt1.png", "capturas/Unidade 2/Estofari11- Novembro/.Estofadores/Estofadores_30_pt2.png", "capturas/Unidade 2/Estofari11- Novembro/Colagem/Colagem 30-11.png", "capturas/Unidade 2/Estofari11- Novembro/CosturCostura 30-11.png", "capturas/Unidade 2/Estofari11- Novembro/Percinta-Montagem/Percinta-Montagem 30-11.png", "capturas/Unidade 2/Estofari11- Novembro/BordadeirBordadeira 30-11.png"] },

            { data: "20/12/2023", captura: ["capturas/Unidade 2/Estofari12- Dezembro/.Estofadores/20-pt1.png", "capturas/Unidade 2/Estofari12- Dezembro/.Estofadores/20-pt2.png", "capturas/Unidade 2/Estofari12- Dezembro/Coladores/20.png", "capturas/Unidade 2/Estofari12- Dezembro/Costur20.png", "capturas/Unidade 2/Estofari12- Dezembro/Perc_Mont/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 2/Estofari2024/1- Janeiro/.Estofadores/31-pt-1.png", "capturas/Unidade 2/Estofari2024/1- Janeiro/.Estofadores/31-pt-2.png", "capturas/Unidade 2/Estofari2024/1- Janeiro/Colagem/31.png", "capturas/Unidade 2/Estofari2024/1- Janeiro/Costur31.png", "capturas/Unidade 2/Estofari2024/1- Janeiro/Percint31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 2/Estofari2024/2- Fevereiro/.Estofadores/29-pt1.png", "capturas/Unidade 2/Estofari2024/2- Fevereiro/.Estofadores/29-pt2.png", "capturas/Unidade 2/Estofari2024/2- Fevereiro/Colagem/29.png", "capturas/Unidade 2/Estofari2024/2- Fevereiro/Costur29.png", "capturas/Unidade 2/Estofari2024/2- Fevereiro/Percint29.png", "capturas/Unidade 2/Estofari2024/2- Fevereiro/Bordadeir29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 2/Estofari2024/3- Março/.Estofadores/28-pt1.png", "capturas/Unidade 2/Estofari2024/3- Março/.Estofadores/28-pt2.png", "capturas/Unidade 2/Estofari2024/3- Março/Colagem/28.png", "capturas/Unidade 2/Estofari2024/3- Março/Costur28.png", "capturas/Unidade 2/Estofari2024/3- Março/Percint28.png", "capturas/Unidade 2/Estofari2024/3- Março/Bordadeir28.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 2/Estofari2024/4- Abril/.Estofadores/30-pt1.png", "capturas/Unidade 2/Estofari2024/4- Abril/.Estofadores/30-pt2.png", "capturas/Unidade 2/Estofari2024/4- Abril/Colagem/30.png", "capturas/Unidade 2/Estofari2024/4- Abril/Costur30.png", "capturas/Unidade 2/Estofari2024/4- Abril/Percint30.png", "capturas/Unidade 2/Estofari2024/4- Abril/Bordadeir30.png"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 2/Estofari2024/5- Maio/.Estofadores/30-pt1.png", "capturas/Unidade 2/Estofari2024/5- Maio/.Estofadores/30-pt2.png", "capturas/Unidade 2/Estofari2024/5- Maio/Colagem/30.png", "capturas/Unidade 2/Estofari2024/5- Maio/Costur30.png", "capturas/Unidade 2/Estofari2024/5- Maio/Percint30.png", "capturas/Unidade 2/Estofari2024/5- Maio/Bordadeir30.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 2/Estofari2024/6- Junho/.Estofadores/28-pt1.png", "capturas/Unidade 2/Estofari2024/6- Junho/.Estofadores/28-pt2.png", "capturas/Unidade 2/Estofari2024/6- Junho/Colagem/28.png", "capturas/Unidade 2/Estofari2024/6- Junho/Costur28.png", "capturas/Unidade 2/Estofari2024/6- Junho/Percint28.png", "capturas/Unidade 2/Estofari2024/6- Junho/zBordadeir28.png"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 2/Estofari2024/7- Julho/.Estofadores/31-pt1.png", "capturas/Unidade 2/Estofari2024/7- Julho/.Estofadores/31-pt2.png", "capturas/Unidade 2/Estofari2024/7- Julho/Colagem/31.png", "capturas/Unidade 2/Estofari2024/7- Julho/Costur31.png", "capturas/Unidade 2/Estofari2024/7- Julho/Percint31.png", "capturas/Unidade 2/Estofari2024/7- Julho/zBordadeir31.png"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 2/Estofari2024/8- Agosto/.Estofadores/30-pt1.png", "capturas/Unidade 2/Estofari2024/8- Agosto/.Estofadores/30-pt2.png", "capturas/Unidade 2/Estofari2024/8- Agosto/Colagem/30.png", "capturas/Unidade 2/Estofari2024/8- Agosto/Costur30.png", "capturas/Unidade 2/Estofari2024/8- Agosto/Percint30.png"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 2/Estofari2024/9- Setembro/.Estofadores/30-pt1.png", "capturas/Unidade 2/Estofari2024/9- Setembro/.Estofadores/30-pt2.png", "capturas/Unidade 2/Estofari2024/9- Setembro/Colagem/30.png", "capturas/Unidade 2/Estofari2024/9- Setembro/Costur30.png", "capturas/Unidade 2/Estofari2024/9- Setembro/Percint30.png"] },

            { data: "02/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/2-pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/.Estofadores/2-pt2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/zBordadeir2.png"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/3-pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/3.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur3.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint3.png"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/4-pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/.Estofadores/4-pt2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/4.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/5.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur4.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint4.png"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/8-pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/8.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur8.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint8.png"] },
            { data: "10/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/10pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/10.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur10.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint10.png"] },
            { data: "15/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/15pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/15pt2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/15.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur15.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint15.png", "capturas/Unidade 2/Estofari2024/10- Outubro/zBordadeir15.png"] },
            { data: "16/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/16pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/16pt2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/16.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur16.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint16.png", "capturas/Unidade 2/Estofari2024/10- Outubro/zBordadeir16.png"] },
            { data: "17/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/17pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/17pt2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/17.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur17.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint17.png"] },
            { data: "19/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/19pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/19pt2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/19.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur19.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint19.png"] },
            { data: "21/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/21pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/21pt2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/21.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur21.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint21.png", "capturas/Unidade 2/Estofari2024/10- Outubro/zBordadeir21.png"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/22pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/22pt2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/22.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur22.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint22.png"] },
            { data: "28/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/28pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/28pt2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/28.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur28.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint28.png", "capturas/Unidade 2/Estofari2024/10- Outubro/zBordadeir28.png"] },
            { data: "30/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/30-pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/30-pt2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/30.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur30.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint30.png"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/31-pt1.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Estofadores/31-pt2.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Colagem/31.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Costur31.png", "capturas/Unidade 2/Estofari2024/10- Outubro/Percint31.png"] },

            { data: "05/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/5-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/5-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/5.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur5.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint5.png"] },
            { data: "06/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/6-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/6-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/6.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur6.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint6.png"] },
            { data: "11/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Percint11.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/11-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/11-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur11.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/11.png"] },
            { data: "14/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/14-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/14-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/14.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur14.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint14.png", "capturas/Unidade 2/Estofari2024/11- Novembro/zBordadeir14.png"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/18-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/18-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/18.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur18.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint18.png"] },
            { data: "19/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/19-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/19-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/19.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur19.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint19.png"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/21-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/21-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/21.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur21.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint21.png", "capturas/Unidade 2/Estofari2024/11- Novembro/zBordadeir21.png"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/22-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/22-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/22.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur22.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint22.png"] },
            { data: "23/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/23-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/23-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/23.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur23.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint23.png"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/25-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/25-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/25.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur25.png", "", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint25.png"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/26-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/26-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/26.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur26.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint26.png"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/27-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/27-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/27.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur27.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint27.png", "capturas/Unidade 2/Estofari2024/11- Novembro/zBordadeir26.png"] },
            { data: "28/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/28-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/28-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/28.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur28.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint28.png"] },
            { data: "29/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/29-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/29-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/29.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur29.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint29.png"] },
            { data: "30/11/2024", captura: ["capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/30-pt1.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Estofadores/30-pt2.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Colagem/30.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Costur30.png", "capturas/Unidade 2/Estofari2024/11- Novembro/Percint30.png"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/02-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/02-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/02.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur02.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint02.png"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/03-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/03-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/03.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur03.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint03.png"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/04-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/04-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/04.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur04.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint04.png"] },
            { data: "05/10/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/05-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/05-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/05.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur05.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint05.png"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/06-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/06-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/06.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur06.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint06.png"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/07-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/07-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/07.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur07.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint07.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/zBordadeir06.png"] },
            { data: "09/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/09-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/09-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/09.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur09.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint09.png"] },
            { data: "10/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/10-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/10-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/10.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur10.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint10.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/zBordadeir10.png"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/11-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/11-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/11.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur11.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint11.png"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/12-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/12-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/12.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur12.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint12.png"] },
            { data: "13/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/13-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/13-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/13.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur13.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint13.png"] },
            { data: "14/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/14-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/14-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/14.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur13.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint14.png"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/16-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/16-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/16.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur16.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint16.png"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/17-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/17-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/17.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur17.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint17.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/zBordadeir17.png"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/18-pt1.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Estofadores/18-pt2.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Colagem/18.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Costur18.png", "capturas/Unidade 2/Estofari2024/12-Dezembro/Percint18.png"] },

            { data: "06/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari06-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari06-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/06.png", "capturas/Unidade 2/Estofari2025/Costur06.png", "capturas/Unidade 2/Estofari2025/Percint06.png"] },
            { data: "07/12/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari07-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari07-pt2.png", "capturas/Unidade 2/Estofari2025/Bordadeir06.png", "capturas/Unidade 2/Estofari2025/Colagem/07.png", "capturas/Unidade 2/Estofari2025/Costur07.png", "capturas/Unidade 2/Estofari2025/Percint07.png"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari08-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari08-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/08.png", "capturas/Unidade 2/Estofari2025/Costur08.png", "capturas/Unidade 2/Estofari2025/Percint08.png"] },
            { data: "09/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari09-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari09-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/09.png", "capturas/Unidade 2/Estofari2025/Costur09.png", "capturas/Unidade 2/Estofari2025/Percint09.png"] },
            { data: "10/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari10-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari10-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/10.png", "capturas/Unidade 2/Estofari2025/Costur10.png", "capturas/Unidade 2/Estofari2025/Percint10.png"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari13-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari13-pt2.png", "capturas/Unidade 2/Estofari2025/Bordadeir13.png", "capturas/Unidade 2/Estofari2025/Colagem/13.png", "capturas/Unidade 2/Estofari2025/Costur13.png", "capturas/Unidade 2/Estofari2025/Percint13.png"] },
            { data: "14/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari14-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari14-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/14.png", "capturas/Unidade 2/Estofari2025/Costur14.png", "capturas/Unidade 2/Estofari2025/Percint14.png"] },
            { data: "15/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari15-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari15-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/15.png", "capturas/Unidade 2/Estofari2025/Costur15.png", "capturas/Unidade 2/Estofari2025/Percint15.png"] },
            { data: "16/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari16-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari16-pt2.png", "capturas/Unidade 2/Estofari2025/Bordadeir15.png", "capturas/Unidade 2/Estofari2025/Colagem/16.png", "capturas/Unidade 2/Estofari2025/Costur16.png", "capturas/Unidade 2/Estofari2025/Percint16.png"] },
            { data: "17/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari17-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari17-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/17.png", "capturas/Unidade 2/Estofari2025/Costur17.png", "capturas/Unidade 2/Estofari2025/Percint17.png"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari20-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari20-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/20.png", "capturas/Unidade 2/Estofari2025/Costur20.png", "capturas/Unidade 2/Estofari2025/Percint20.png"] },
            { data: "21/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari21-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari21-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/21.png", "capturas/Unidade 2/Estofari2025/Costur21.png", "capturas/Unidade 2/Estofari2025/Percint21.png"] },
            { data: "22/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari22-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari22-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/22.png", "capturas/Unidade 2/Estofari2025/Costur22.png", "capturas/Unidade 2/Estofari2025/Percint22.png"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari23-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari23-pt2.png", "capturas/Unidade 2/Estofari2025/Bordadeir22.png", "capturas/Unidade 2/Estofari2025/Colagem/23.png", "capturas/Unidade 2/Estofari2025/Costur23.png", "capturas/Unidade 2/Estofari2025/Percint23.png"] },
            { data: "24/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari24-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari24-pt2.png", "capturas/Unidade 2/Estofari2025/Bordadeir24.png", "capturas/Unidade 2/Estofari2025/Colagem/24.png", "capturas/Unidade 2/Estofari2025/Costur24.png", "capturas/Unidade 2/Estofari2025/Percint24.png"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari27-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari27-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/27.png", "capturas/Unidade 2/Estofari2025/Costur27.png", "capturas/Unidade 2/Estofari2025/Percint27.png"] },
            { data: "28/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari28-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari28-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/28.png", "capturas/Unidade 2/Estofari2025/Costur28.png", "capturas/Unidade 2/Estofari2025/Percint28.png"] },
            { data: "29/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari29-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari29-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/29.png", "capturas/Unidade 2/Estofari2025/Costur29.png", "capturas/Unidade 2/Estofari2025/Percint29.png"] },
            { data: "30/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari30-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari30-pt2.png", "capturas/Unidade 2/Estofari2025/Bordadeir29.png", "capturas/Unidade 2/Estofari2025/Colagem/30.png", "capturas/Unidade 2/Estofari2025/Costur30.png", "capturas/Unidade 2/Estofari2025/Percint90.png"] },
            { data: "31/01/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari31-pt1.png", "capturas/Unidade 2/Estofari2025/Estofari31-pt2.png", "capturas/Unidade 2/Estofari2025/Colagem/31.png", "capturas/Unidade 2/Estofari2025/Costur31.png", "capturas/Unidade 2/Estofari2025/Percint31.png"] },
            { data: "03/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/03-Cumaru.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/03-Sier.jpeg"] },
            { data: "04/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/04-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/04-pt2.jpeg", "", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/04-pt3.jpeg"] },
            { data: "06/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/06-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/06-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/06-pt3.jpeg"] },
            { data: "07/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/07-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/07-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/07-pt3.jpeg"] },
            { data: "10/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/10-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/10-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/10-pt3.jpeg"] },
            { data: "11/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/11-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/11-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/11-pt3.jpeg"] },
            { data: "13/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/13-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/13-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/13-pt3.jpeg"] },
            { data: "14/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/14-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/14-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/14-pt3.jpeg"] },
            { data: "17/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/17-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/17-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/17-pt3.jpeg"] },
            { data: "18/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/18-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/18-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/18-pt3.jpeg"] },
            { data: "19/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/19-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/19-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/19-pt3.jpeg"] },
            { data: "20/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/20-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/20-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/20-pt3.jpeg"] },
            { data: "21/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/21-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/21-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/21-pt3.jpeg"] },
            { data: "24/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/24-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/24-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/24-pt3.jpeg"] },
            { data: "25/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/25-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/25-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/25-pt3.jpeg"] },
            { data: "27/02/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/27-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/27-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari02-FEVEREIRO/27-pt3.jpeg"] },
            { data: "11/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/11-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/11-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/11-pt3.jpeg"] },
            { data: "12/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/12-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/12-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/12-pt3.jpeg"] },
            { data: "13/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/13-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/13-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/13-pt3.jpeg"] },
            { data: "14/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/14-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/14-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/14-pt3.jpeg"] },
            { data: "17/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/17-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/17-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/17-pt3.jpeg"] },
            { data: "18/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/18-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/18-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/18-pt3.jpeg"] },
            { data: "19/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/19-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/19-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/19-pt3.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/20-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/20-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/20-pt3.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/21-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/21-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/21-pt3.jpeg"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/24-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/24-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/24-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir03-MARÇO/24.png"] },
            { data: "25/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/25-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/25-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/25-pt3.jpeg"] },
            { data: "26/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/26-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/26-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/26-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir03-MARÇO/26.png"] },
            { data: "27/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/27-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/27-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/27-pt3.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/28-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/28-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/28-pt3.jpeg"] },
            { data: "31/03/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/31-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/31-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari03-MARÇO/31-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir03-MARÇO/31.png"] },

            { data: "01/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/01-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/01-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/01-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir04-ABRIL/01.png"] },
            { data: "02/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/02-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/02-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/02-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir04-ABRIL/02.png"] },
            { data: "03/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/03-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/03-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/03-pt3.jpeg"] },
            { data: "04/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/04-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/04-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/04-pt3.jpeg"] },
            { data: "07/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/07-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/07-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/07-pt3.jpeg"] },
            { data: "08/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/08-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/08-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/08-pt3.jpeg"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/09-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/09-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/09-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir04-ABRIL/08.png"] },
            { data: "11/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/11-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/11-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/11-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir04-ABRIL/11.png"] },
            { data: "14/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/14-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/14-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/14-pt3.jpeg"] },
            { data: "15/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/15-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/15-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/15-pt3.jpeg"] },
            { data: "16/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/16-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/16-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/16-pt3.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/17-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/17-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/17-pt3.jpeg"] },
            { data: "22/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/22-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/22-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/22-pt3.jpeg"] },
            { data: "23/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Bordadeir04-ABRIL/23.jpg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/23-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/23-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/23-pt3.jpeg"] },
            { data: "24/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/24-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/24-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/24-pt3.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/25-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/25-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/25-pt3.jpeg"] },
            { data: "28/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/28-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/28-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/28-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir04-ABRIL/28.jpg"] },
            { data: "29/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/29-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/29-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/29-pt3.jpeg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/30-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/30-pt1-Hora Extra.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/30-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/30-pt2-Hora Extra.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/30-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Estofari04-ABRIL/30-pt3-Hora Extra.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir04-ABRIL/30.jpg"] },

            { data: "01/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/01-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/01-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/01-pt3.jpeg"] },
            { data: "05/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/05-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/05-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/05-pt3.jpeg"] },
            { data: "06/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/06-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/06-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/06-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir05-MAIO/06.jpg"] },
            { data: "07/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/07-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/07-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/07-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir05-MAIO/07.jpg"] },
            { data: "08/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/08-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/08-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/08-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir05-MAIO/08.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/09-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/09-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/09-pt3.jpeg"] },
            { data: "12/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/12-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/12-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/12-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir05-MAIO/12.jpg"] },
            { data: "14/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/14-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/14-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/14-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir05-MAIO/14.jpg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/15-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/15-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/15-pt3.jpeg"] },
            { data: "16/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/16-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/16-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/16-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir05-MAIO/16.jpg"] },
            { data: "19/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/19-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/19-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/19-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir05-MAIO/19.jpg"] },
            { data: "20/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/20-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/20-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/20-pt3.jpeg"] },
            { data: "21/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/21-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/21-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/21-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir05-MAIO/21.jpg"] },
            { data: "22/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/22-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/22-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/23-pt3.jpeg"] },
            { data: "23/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/23-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/23-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/23-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir05-MAIO/23.jpg"] },
            { data: "26/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/26-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/26-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/26-pt3.jpeg"] },
            { data: "27/05/2025", captura: ["capturas/Unidade 2/Estofari2025/Estofari05-MAIO/27-pt1.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/27-pt1-HORA-EXTRA.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/27-pt2.jpeg", "capturas/Unidade 2/Estofari2025/Estofari05-MAIO/27-pt3.jpeg", "capturas/Unidade 2/Estofari2025/Bordadeir05-MAIO/27.jpg"] },
            { data: "28/05/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/05-MAIO/28-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/05-MAIO/28-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/05-MAIO/28-pt3.jpeg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/05-MAIO/29-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/05-MAIO/29-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/05-MAIO/29-pt3.jpeg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/05-MAIO/30-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/05-MAIO/30-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/05-MAIO/30-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/05-MAIO/30-pt3-HORA-EXTRA.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/05-MAIO/30.jpg"] },

            { data: "02/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/02-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/02-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/02-pt3.jpeg"] },
            { data: "03/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/03-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/03-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/03-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/06-JUNHO/03.jpg"] },
            { data: "04/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/04-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/04-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/04-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/06-JUNHO/04.jpg"] },
            { data: "05/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/05-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/05-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/05-pt3.jpeg"] },
            { data: "06/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/06-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/06-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/06-pt3.jpeg"] },
            { data: "09/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/09-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/09-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/09-pt3.jpeg"] },
            { data: "10/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/10-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/10-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/10-pt3.jpeg"] },
            { data: "11/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/11-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/11-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/11-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/06-JUNHO/11.jpg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/12-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/12-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/12-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/06-JUNHO/12.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/13-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/13-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/13-pt3.jpeg"] },
            { data: "16/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/16-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/16-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/16-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/06-JUNHO/16.jpg"] },
            { data: "17/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/17-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/17-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/17-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/06-JUNHO/17.jpg"] },
            { data: "18/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/18-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/18-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/18-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/06-JUNHO/18.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/19-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/19-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/19-pt3.jpeg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/23-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/23-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/23-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/06-JUNHO/23.jpg"] },
            { data: "24/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/24-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/24-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/24-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/06-JUNHO/24.jpg"] },
            { data: "25/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/25-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/25-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/25-pt3.jpeg"] },
            { data: "26/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/26-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/26-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/26-pt3.jpeg"] },
            { data: "27/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/27-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/27-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/27-pt3.jpeg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/30-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/30-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-JUNHO/30-pt3.jpeg"] },
           
            { data: "01/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/01-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/01-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/01-pt3.jpeg"] },
            { data: "02/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/02-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/02-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/02-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/07-JULHO/02.jpg"] },
            { data: "03/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/03-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/03-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/03-pt3.jpeg"] },
            { data: "07/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/07-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/07-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/07-pt3.jpeg"] },
            { data: "08/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/08-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/08-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/08-pt3.jpeg"] },
            { data: "09/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/09-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/09-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/09-pt3.jpeg"] },
            { data: "10/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/10-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/10-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/10-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/07-JULHO/10.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/11-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/11-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/11-pt3.jpeg"] },
            { data: "14/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/14-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/14-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/14-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/14-pt3-hora-extra.jpeg"] },
            { data: "16/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/16-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/16-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/16-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/07-JULHO/16.jpg"] },
            { data: "17/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/17-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/17-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/17-pt3.jpeg"] },
            { data: "18/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/18-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/18-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/18-pt3.jpeg"] },
            { data: "21/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/21-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/21-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/21-pt3.jpeg", "capturas/Unidade 2/Estofaria/2025/Bordadeira/07-JULHO/21.jpg"] },
            { data: "23/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/23-pt1.jpg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/23-pt2.jpg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/23-pt3.jpg"] },
            { data: "24/07/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/24-pt1.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/24-pt2.jpeg", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-JULHO/24-pt3.jpeg"] },





            // { data: "", captura: ["", "", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", "", ""] },
        ],

        Telinha: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Expedição/11- Novembro/Telinha 30-11.png"] },

            { data: "20/12/2023", captura: ["capturas/Unidade 2/Expedição/12- Dezembro/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 2/Expedição/2024/1- Janeiro/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 2/Expedição/2024/2- Fevereiro/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 2/Expedição/2024/3- Março/28.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 2/Expedição/2024/4- Abril/30.png"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 2/Expedição/2024/5- Maio/30.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 2/Expedição/2024/6- Junho/28.png"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 2/Expedição/2024/7- Julho/31.png"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 2/Expedição/2024/8- Agosto/30.png"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 2/Expedição/2024/9- Setembro/30.png"] },

            { data: "02/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/1.png"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/3.png"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/4.png"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/8.png"] },
            { data: "15/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/15.png"] },
            { data: "16/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/16.png"] },
            { data: "17/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/17.png"] },
            { data: "19/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/19.png"] },
            { data: "21/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/21.png"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/22.png"] },
            { data: "28/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/28.png"] },
            { data: "30/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/30.png"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 2/Expedição/2024/10- Outubro/31.png"] },

            { data: "05/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/5.png"] },
            { data: "06/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/6.png"] },
            { data: "07/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/7.png"] },
            { data: "08/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/8.png"] },
            { data: "11/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/11.png"] },
            { data: "14/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/14.png"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/18.png"] },
            { data: "19/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/20.png"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/21.png"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/22.png"] },
            { data: "23/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/23.png"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/25.png"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/26.png"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/27.png"] },
            { data: "28/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/28.png"] },
            { data: "29/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/29.png"] },
            { data: "30/11/2024", captura: ["capturas/Unidade 2/Expedição/2024/11-Novembro/30.png"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/02.png"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/03.png"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/04.png"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/05.png"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/06.png"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/07.png"] },
            { data: "09/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/09.png"] },
            { data: "10/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/10.png"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/11.png"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/12.png"] },
            { data: "13/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/13.png"] },
            { data: "14/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/14.png"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/16.png"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/17.png"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 2/Expedição/2024/12-Dezembro/18.png"] },

            { data: "06/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/06.png"] },
            { data: "07/12/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/07.png"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/08.png"] },
            { data: "09/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/09.png"] },
            { data: "10/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/10.png"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/13.png"] },
            { data: "14/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/14.png"] },
            { data: "15/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/15.png"] },
            { data: "16/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/16.png"] },
            { data: "17/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/17.png"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/20.png"] },
            { data: "21/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/21.png"] },
            { data: "22/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/22.png"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/23.png"] },
            { data: "24/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/24.png"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/27.png"] },
            { data: "28/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/28.png"] },
            { data: "29/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/29.png"] },
            { data: "30/01/2024", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/30.png"] },
            { data: "31/01/2025", captura: ["capturas/Unidade 2/Expedição/2025/01-JANEIRO/31.png"] },
            { data: "03/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/03.png"] },
            { data: "04/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/04.jpg"] },
            { data: "06/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/06.jpg"] },
            { data: "07/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/07.jpg"] },
            { data: "10/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/10.png"] },
            { data: "13/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/13.png"] },
            { data: "14/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/14.png"] },
            { data: "17/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/17.png"] },
            { data: "18/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/18.png"] },
            { data: "19/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/19.png"] },
            { data: "20/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/20.png"] },
            { data: "21/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/21.png"] },
            { data: "24/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/24.png"] },
            { data: "25/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/25.png"] },
            { data: "27/02/2025", captura: ["capturas/Unidade 2/Expedição/2025/02-FEVEREIRO/27.png"] },
            { data: "11/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/11.png"] },
            { data: "12/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/12.png"] },
            { data: "13/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/13.png"] },
            { data: "17/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/17.png"] },
            { data: "18/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/18.png"] },
            { data: "19/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/19.png"] },
            { data: "20/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/20.png"] },
            { data: "21/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/21.png"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/24.png"] },
            { data: "25/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/25.png"] },
            { data: "26/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/26.png"] },
            { data: "27/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/27.png"] },
            { data: "28/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/28.png"] },
            { data: "31/03/2025", captura: ["capturas/Unidade 2/Expedição/2025/03-MARÇO/31.png"] },

            { data: "01/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/01.png"] },
            { data: "02/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/02.png"] },
            { data: "03/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/03.png"] },
            { data: "04/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/04.png"] },
            { data: "07/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/07.png"] },
            { data: "08/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/08.png"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/09.png"] },
            { data: "11/04/2005", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/11.png"] },
            { data: "14/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/14.png"] },
            { data: "15/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/15.jpg"] },
            { data: "16/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/16.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/17.jpg"] },
            { data: "22/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/22.jpg"] },
            { data: "23/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/23.jpg"] },
            { data: "24/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/24.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/25.jpg"] },
            { data: "28/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/28.jpg"] },
            { data: "29/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/29.jpg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 2/Expedição/2025/04-ABRIL/30.jpg"] },

            { data: "01/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/01.jpg"] },
            { data: "05/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/05.jpg"] },
            { data: "06/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/06.jpg"] },
            { data: "07/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/07.jpg"] },
            { data: "08/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/08.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/09.jpg"] },
            { data: "12/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/12.jpg"] },
            { data: "14/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/14.jpg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/15.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/16.jpg"] },
            { data: "19/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/19.jpg"] },
            { data: "20/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/20.jpg"] },
            { data: "21/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/21.jpg"] },
            { data: "22/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/22.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/23.jpg"] },
            { data: "26/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/26.jpg"] },
            { data: "27/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/27.jpg"] },
            { data: "28/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/28.jpg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/29.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/05-MAIO/30.jpg"] },
            
            { data: "02/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/02.jpg"] },
            { data: "03/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/03.jpg"] },
            { data: "04/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/04.jpg"] },
            { data: "05/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/05.jpg"] },     
            { data: "06/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/06.jpg"] },
            { data: "09/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/09.jpg"] },
            { data: "10/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/10.jpg"] },
            { data: "11/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/11.jpg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/12.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/13.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/16.jpg"] },
            { data: "17/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/17.jpg"] },
            { data: "18/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/18.jpg"] },
            { data: "19/06/2026", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/19.jpg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/23.jpg"] },
            { data: "24/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/24.jpg"] },
            { data: "25/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/25.jpg"] },
            { data: "26/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/26.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/27.jpg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 2/Expedição/2025/06-JUNHO/30.jpg"] },

            { data: "01/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/01.jpg"] },
            { data: "02/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/02.jpg"] },
            { data: "03/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/03.jpg"] },
            { data: "07/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/07.jpg"] },
            { data: "08/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/08.jpg"] },
            { data: "09/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/09.jpg"] },
            { data: "10/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/10.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/11.jpg"] },
            { data: "14/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/14.jpg"] },
            { data: "15/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/15.jpg"] },
            { data: "16/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/16.jpg"] },
            { data: "17/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/17.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/18.jpg"] },
            { data: "21/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/21.jpg"] },
            { data: "23/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/23.jpg"] },
            { data: "24/07/2025", captura: ["capturas/Unidade 2/Expedição/2025/07-JULHO/24.jpg"] },



            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        CNC: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Usinagem/11- Novembro/CNC/CNC-30_pt1.png", "capturas/Unidade 2/Usinagem/11- Novembro/CNC/CNC-30_pt2.png"] },

            { data: "20/12/2023", captura: ["capturas/Unidade 2/Usinagem/12- Dezembro/CNC/20-pt1.png", "capturas/Unidade 2/Usinagem/12- Dezembro/CNC/20-pt2.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 2/Usinagem/2024/1- Janeiro/CNC/31-pt1.png", "capturas/Unidade 2/Usinagem/2024/1- Janeiro/CNC/31-pt2.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 2/Usinagem/2024/2- Fevereiro/CNC/29-pt1.png", "capturas/Unidade 2/Usinagem/2024/2- Fevereiro/CNC/29-pt2.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 2/Usinagem/2024/3- Março/CNC/28-pt1.png", "capturas/Unidade 2/Usinagem/2024/3- Março/CNC/28-pt2.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 2/Usinagem/2024/4- Abril/CNC/30-pt1.png", "capturas/Unidade 2/Usinagem/2024/4- Abril/CNC/30-pt2.png"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 2/Usinagem/2024/5- Maio/CNC/30-pt1.png", "capturas/Unidade 2/Usinagem/2024/5- Maio/CNC/30-pt2.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 2/Usinagem/2024/6- Junho/CNC/28-pt1.png", "capturas/Unidade 2/Usinagem/2024/6- Junho/CNC/28-pt2.png"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/31-pt1.jpg", "capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/31-pt2.jpg"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 2/Usinagem/2024/8- Agosto/CNC/30-pt1.png", "capturas/Unidade 2/Usinagem/2024/8- Agosto/CNC/30-pt2.png"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 2/Usinagem/2024/9- Setembro/CNC/30-pt1.png", "capturas/Unidade 2/Usinagem/2024/9- Setembro/CNC/30-pt2.png"] },

            { data: "01/09/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/1-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/1-pt2.png"] },
            { data: "02/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/2-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/2-pt2.png"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/3-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/3-pt2.png"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/7-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/7-pt2.png"] },
            { data: "10/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/10-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/10-pt2.png"] },
            { data: "16/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/16-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/16-pt2.png"] },
            { data: "19/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/19-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/19-pt2.png"] },
            { data: "21/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/21-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/21-pt2.png"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/22-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/22-pt2.png"] },
            { data: "23/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/23-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/23-pt2.png"] },
            { data: "28/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/28-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/28-pt2.png"] },
            { data: "30/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/30-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/30-pt2.png"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/31-pt1.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/CNC/31-pt2.png"] },

            { data: "05/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/5-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/5-pt2.png"] },
            { data: "06/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/6-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/6-pt2.png"] },
            { data: "13/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/13-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/13-pt2.png"] },
            { data: "14/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/14-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/14-pt2.png"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/18-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/18-pt2.png"] },
            { data: "19/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/19-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/19-pt2.png"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/21-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/21-pt2.png"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/22-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/22-pt2.png"] },
            { data: "23/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/23-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/23-pt2.png"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/25-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/25-pt2.png"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/26-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/26-pt2.png"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/27-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/27-pt2.png"] },
            { data: "28/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/28-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/28-pt2.png"] },
            { data: "29/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/29-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/29-pt2.png"] },
            { data: "30/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/30-pt1.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/30-pt2.png"] },
            { data: "01/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/01-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/01-pt2.png"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/02-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/02-pt2.png"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/03-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/03-pt2.png"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/04-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/04-pt2.png"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/05-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/05-pt2.png"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/06-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/06-pt2.png"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/07-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/07-pt2.png"] },
            { data: "09/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/09-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/09-pt2.png"] },
            { data: "10/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/10-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/10-pt2.png"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/11-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/11-pt2.png"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/12-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/12-pt2.png"] },
            { data: "13/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/13-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/13-pt2.png"] },
            { data: "14/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/14-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/14-pt2.png"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/16-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/16-pt2.png"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/17-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/17-pt2.png"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/18-pt1.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/CNC/18-pt2.png"] },

            { data: "06/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/06-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/06-pt2.png"] },
            { data: "07/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/07-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/07-pt2.png"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/08-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/08-pt2.png"] },
            { data: "10/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/10-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/10-pt2.png"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/13-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/13-pt2.png"] },
            { data: "14/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/14-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/14-pt2.png"] },
            { data: "15/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/15-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/15-pt2.png"] },
            { data: "16/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/16-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/16-pt2.png"] },
            { data: "17/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/17-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/17-pt2.png"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/20-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/20-pt2.png"] },
            { data: "21/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/21-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/21-pt2.png"] },
            { data: "22/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/22-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/22-pt2.png"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/23-pt1.png", "capturas/Unidade 2/Usinagem/2025/CNC/23-pt2.png"] },
            { data: "24/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/24.jpeg"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/27.jpeg"] },
            { data: "28/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/28.jpeg"] },
            { data: "29/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/29.jpeg"] },
            { data: "30/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/30.jpeg"] },
            { data: "31/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/CNC/31.1.jpeg"] },
            { data: "03/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/02-FEV/03.jpeg"] },
            { data: "04/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/02-FEV/04.jpeg"] },
            { data: "05/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/02-FEV/05.jpeg"] },
            { data: "06/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/02-FEV/06.jpeg"] },
            { data: "07/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/02-FEV/07.jpeg"] },
            { data: "10/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/02-FEV/10.jpeg"] },
            { data: "11/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/CNC/02-FEV/11.jpeg"] },
            { data: "13/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/CNC/13.jpeg"] },
            { data: "14/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/CNC/14.jpeg"] },
            { data: "17/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/CNC/17.jpeg"] },
            { data: "18/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/CNC/18.jpeg"] },
            { data: "19/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/CNC/19.jpeg"] },
            { data: "20/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/CNC/20.jpeg"] },
            { data: "21/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/CNC/21.jpeg"] },
            { data: "24/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/CNC/24.jpeg"] },
            { data: "25/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/CNC/25.jpeg"] },
            { data: "28/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/CNC/28.jpeg"] },
            { data: "11/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/11.jpeg"] },
            { data: "12/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/12.jpeg"] },
            { data: "13/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/13.jpeg"] },
            { data: "14/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/14.jpeg"] },
            { data: "17/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/17.jpeg"] },
            { data: "18/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/18.jpeg"] },
            { data: "19/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/19.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/20.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/21.jpeg"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/24.jpeg"] },
            { data: "25/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/25.jpeg"] },
            { data: "26/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/26.jpeg"] },
            { data: "27/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/27.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/28.jpeg"] },
            { data: "31/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/CNC/31.jpeg"] },

            { data: "01/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/01.jpeg"] },
            { data: "02/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/02.jpeg"] },
            { data: "03/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/03.jpeg"] },
            { data: "04/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/04.jpeg"] },
            { data: "07/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/07.jpeg"] },
            { data: "08/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/08.jpeg"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/09.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/11.jpeg"] },
            { data: "14/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/14.jpeg"] },
            { data: "15/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/15.jpeg"] },
            { data: "16/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/16.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/17.jpeg"] },
            { data: "22/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/22.jpeg"] },
            { data: "23/04/2024", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/23.jpeg"] },
            { data: "24/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/24.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/25.jpeg"] },
            { data: "28/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/28.jpeg"] },
            { data: "29/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/29.jpeg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/CNC/30.jpeg"] },

            { data: "01/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/01.jpeg"] },
            { data: "05/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/05.jpeg"] },
            { data: "06/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/06.jpeg"] },
            { data: "07/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/07.jpeg"] },
            { data: "08/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/08.jpeg"] },
            { data: "09/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/09.jpeg"] },
            { data: "12/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/12.jpeg"] },
            { data: "13/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/13.jpeg"] },
            { data: "14/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/14.jpeg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/15.jpeg"] },
            { data: "16/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/16.jpeg"] },
            { data: "19/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/19.jpeg"] },
            { data: "20/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/20.jpeg"] },
            { data: "21/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/21.jpeg"] },
            { data: "22/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/22.jpeg"] },
            { data: "23/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/23.jpeg"] },
            { data: "26/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/26.jpeg"] },
            { data: "27/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/27.jpeg"] },
            { data: "28/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/28.jpeg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/29.jpeg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/CNC/30.jpeg"] },

            { data: "01/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/01.jpeg"] },
            { data: "02/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/02.jpeg"] },
            { data: "03/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/03.jpeg"] },
            { data: "04/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/04.jpeg"] },
            { data: "05/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/05.jpeg"] },
            { data: "06/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/06.jpeg"] },
            { data: "09/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/09.jpeg"] },
            { data: "10/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/10.jpeg"] },
            { data: "11/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/11.jpeg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/12.jpeg"] },
            { data: "13/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/13.jpeg"] },
            { data: "16/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/16.jpeg"] },
            { data: "17/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/17.jpeg"] },
            { data: "18/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/18.jpeg"] },
            { data: "19/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/19.jpeg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/23.jpeg"] },
            { data: "24/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/24.jpeg"] },
            { data: "25/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/25.jpeg"] },
            { data: "26/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/26.jpeg"] },
            { data: "27/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/27.jpeg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/CNC/30.jpeg"] },
       
            { data: "01/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/01.jpeg"] },
            { data: "02/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/02.jpeg"] },
            { data: "07/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/07.jpeg"] },
            { data: "08/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/08.jpeg"] },
            { data: "09/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/09.jpeg"] },
            { data: "10/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/10.jpeg"] },
            { data: "11/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/11.jpeg"] },
            { data: "14/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/14.jpeg"] },
            { data: "15/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/15.jpeg"] },
            { data: "16/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/16.jpeg"] },
            { data: "17/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/17.jpeg"] },
            { data: "18/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/18.jpeg"] },
            { data: "21/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/21.jpeg"] },
            { data: "23/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/23.jpg"] },
            { data: "24/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/CNC/24.jpg"] },    




        ],




        // { data: "", captura: ["", "", "", "", ""] },
        // { data: "", captura: ["", ""] },


        Usinagem: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Usinagem/11- Novembro/Usinagem/Usinagem 30-11.png", "capturas/Unidade 2/Usinagem/11- Novembro/Roquite/Roquite 30-11.png", "capturas/Unidade 2/Usinagem/11- Novembro/Mont. Usinagem/Mont. Usinagem 30-11.png", "capturas/Unidade 2/Usinagem/11- Novembro/Mult. Mold/Mult. Mold 30-11.png"] },

            { data: "20/12/2023", captura: ["capturas/Unidade 2/Usinagem/12- Dezembro/Rolinho/20.png", "capturas/Unidade 2/Usinagem/12- Dezembro/Roquite/20.png", "capturas/Unidade 2/Usinagem/12- Dezembro/Usinagem/20.png", "", "capturas/Unidade 2/Usinagem/12- Dezembro/Mult. Mold/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 2/Usinagem/2024/1- Janeiro/Rolinho/31.png", "capturas/Unidade 2/Usinagem/2024/1- Janeiro/Roquite/31.png", "capturas/Unidade 2/Usinagem/2024/1- Janeiro/Usinagem/31.png", "capturas/Unidade 2/Usinagem/2024/1- Janeiro/Montagem/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 2/Usinagem/2024/2- Fevereiro/Rolinho/29.png", "capturas/Unidade 2/Usinagem/2024/2- Fevereiro/Roquite/29.png", "capturas/Unidade 2/Usinagem/2024/2- Fevereiro/Usinagem/29.png", "capturas/Unidade 2/Usinagem/2024/2- Fevereiro/Montagem/29.png", "capturas/Unidade 2/Usinagem/2024/2- Fevereiro/MM/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 2/Usinagem/2024/3- Março/Rolinho/28.png", "capturas/Unidade 2/Usinagem/2024/3- Março/Roquite/28.png", "capturas/Unidade 2/Usinagem/2024/3- Março/Usinagem/28.png", "capturas/Unidade 2/Usinagem/2024/3- Março/Montagem/28.png", "capturas/Unidade 2/Usinagem/2024/3- Março/MM/28.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 2/Usinagem/2024/4- Abril/Rolinho/30.png", "capturas/Unidade 2/Usinagem/2024/4- Abril/Roquite/30.png", "capturas/Unidade 2/Usinagem/2024/4- Abril/Usinagem/30.png", "capturas/Unidade 2/Usinagem/2024/4- Abril/Mont. Us/30.png", "capturas/Unidade 2/Usinagem/2024/4- Abril/MM/30.png"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 2/Usinagem/2024/5- Maio/Rolinho/30.png", "capturas/Unidade 2/Usinagem/2024/5- Maio/Roquite/30.png", "capturas/Unidade 2/Usinagem/2024/5- Maio/Usinagem/30.png", "capturas/Unidade 2/Usinagem/2024/5- Maio/Mont Us/30.png", "capturas/Unidade 2/Usinagem/2024/5- Maio/MM/30.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 2/Usinagem/2024/6- Junho/Rolinho/28.png", "capturas/Unidade 2/Usinagem/2024/6- Junho/Roquite/28.png", "capturas/Unidade 2/Usinagem/2024/6- Junho/Usinagem/28.png", "capturas/Unidade 2/Usinagem/2024/6- Junho/Mont.Us/28.png", "capturas/Unidade 2/Usinagem/2024/6- Junho/MM/28.png"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/Rolinho/31.jpg", "capturas/Unidade 2/Usinagem/2024/7- Julho/Roquite/31.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Usinagem/31.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Mont.Us/31.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/MM/31.png"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 2/Usinagem/2024/8- Agosto/Rolinho/30.png", "capturas/Unidade 2/Usinagem/2024/8- Agosto/Roquite/30.png", "capturas/Unidade 2/Usinagem/2024/8- Agosto/Usinagem/30.png", "capturas/Unidade 2/Usinagem/2024/8- Agosto/Mont.Us/30.png", "capturas/Unidade 2/Usinagem/2024/8- Agosto/MM/30.png"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 2/Usinagem/2024/9- Setembro/Rolinho/30.png", "capturas/Unidade 2/Usinagem/2024/9- Setembro/Roquite/30.png", "capturas/Unidade 2/Usinagem/2024/9- Setembro/Usinagem/30.png", "capturas/Unidade 2/Usinagem/2024/9- Setembro/Mont.Us/30.png", "capturas/Unidade 2/Usinagem/2024/9- Setembro/MM/30.png"] },

            { data: "01/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/1.png"] },
            { data: "02/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/2.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Roquite/2.png"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/MM/3.png"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/4.png"] },
            { data: "10/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/10.png"] },
            { data: "11/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/11.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/MM/11.png"] },
            { data: "16/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/16.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Roquite/16.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Mont.Us/16.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/MM/16.png"] },
            { data: "17/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/17.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Roquite/17.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Usinagem/17.png"] },
            { data: "19/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/19.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Roquite/19.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Usinagem/19.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Mont.Us/19.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/MM/19.png"] },
            { data: "21/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/21.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Roquite/21.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Usinagem/21.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Mont.Us/21.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/MM/21.png"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/22.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Roquite/22.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Usinagem/22.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Mont.Us/22.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/MM/22.png"] },
            { data: "23/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/23.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Roquite/23.png"] },
            { data: "28/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/28.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Roquite/28.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Mont.Us/28.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Usinagem/28.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/MM/28.png"] },
            { data: "30/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/30.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Roquite/30.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Usinagem/30.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/MM/30.png"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 2/Usinagem/2024/10- Outubro/Rolinho/31.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Roquite/31.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Mont.Us/31.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/Usinagem/31.png", "capturas/Unidade 2/Usinagem/2024/10- Outubro/MM/31.png"] },

            { data: "04/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/4.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/4.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/4.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/4.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/4.png"] },
            { data: "06/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/6.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/6.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/6.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/6.png"] },
            { data: "07/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/7.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/7.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/7.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/7.png"] },
            { data: "09/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/9.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/9.png"] },
            { data: "11/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/11.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/11.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/11.png"] },
            { data: "14/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/14.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/14.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/14.png"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/18.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/18.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/18.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/18.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/18.png"] },
            { data: "19/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/19.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/19.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/19.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/19.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/19.png"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/21.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/21.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/21.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/21.png"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/22.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/22.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/22.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/22.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/22.png"] },
            { data: "23/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/23.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/23.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/23.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/23.png"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/25.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/25.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/25.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/25.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/25.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/25-pt2.png"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/26.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/26.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/26.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/26.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/26.png"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/27.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/27.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/27.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/27.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/27.png"] },
            { data: "28/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/28.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/28.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/28.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/28.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/28.png"] },
            { data: "29/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/29.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/29.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/29.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/29.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/29.png"] },
            { data: "30/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/30.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/30.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/30.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/29.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/30.png"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/02.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/02.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/02.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/02.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/02.png"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/03.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/03.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/03.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/03.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/03.png"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/04.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/04.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/04.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/04.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/04.png"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/05.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/05.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/05.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/05.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/05.png"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/06.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/06.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/06.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/06.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/06.png"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/07.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/07.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/07.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/07.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/07.png"] },
            { data: "09/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/09.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/09.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/09.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/09.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/09.png"] },
            { data: "10/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/10.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/10.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/10.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/10.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/10.png"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/11.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/11.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/11.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/11.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/11.png"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/12.jpeg", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/12.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/12.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/12.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/12.png"] },
            { data: "13/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/13.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/13.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/13.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/13.png"] },
            { data: "14/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/14.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/14.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/14.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/13.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/13.png"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/16.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/16.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/16.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/16.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/16.png"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/17.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/17.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/17.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/17.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/17.png"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 2/Usinagem/2024/12-Dezembro/Mont.Us/18.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Rolinho/18.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Roquite/18.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/MM/18.png", "capturas/Unidade 2/Usinagem/2024/12-Dezembro/Usinagem/18.png"] },

            { data: "06/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/06.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/06.png", "capturas/Unidade 2/Usinagem/2025/Roquite/06.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/06.png"] },
            { data: "07/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/07.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/07.png", "capturas/Unidade 2/Usinagem/2025/Roquite/07.png", "capturas/Unidade 2/Usinagem/2025/MM/07.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/07.png"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/08.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/08.png", "capturas/Unidade 2/Usinagem/2025/Roquite/08.png", "capturas/Unidade 2/Usinagem/2025/MM/08.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/08.png"] },
            { data: "09/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/09.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/09.png", "capturas/Unidade 2/Usinagem/2025/Roquite/09.png", "capturas/Unidade 2/Usinagem/2025/MM/09.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/09.png"] },
            { data: "10/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/10.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/10.png", "capturas/Unidade 2/Usinagem/2025/Roquite/10.png", "capturas/Unidade 2/Usinagem/2025/MM/10.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/10.png"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/13.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/13.png", "capturas/Unidade 2/Usinagem/2025/Roquite/13.png", "capturas/Unidade 2/Usinagem/2025/MM/13.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/13.png"] },
            { data: "14/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/14.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/14.png", "capturas/Unidade 2/Usinagem/2025/Roquite/14.png", "capturas/Unidade 2/Usinagem/2025/MM/14.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/14.png"] },
            { data: "15/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/15.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/15.png", "capturas/Unidade 2/Usinagem/2025/Roquite/15.png", "capturas/Unidade 2/Usinagem/2025/MM/15.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/15.png"] },
            { data: "16/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/16.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/16.png", "capturas/Unidade 2/Usinagem/2025/Roquite/16.png", "capturas/Unidade 2/Usinagem/2025/MM/16.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/16.png"] },
            { data: "17/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/17.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/17.png", "capturas/Unidade 2/Usinagem/2025/Roquite/17.png", "capturas/Unidade 2/Usinagem/2025/MM/17.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/17.png"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/20.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/20.png", "capturas/Unidade 2/Usinagem/2025/Roquite/20.png", "capturas/Unidade 2/Usinagem/2025/MM/20.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/20.png"] },
            { data: "21/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/21.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/21.png", "capturas/Unidade 2/Usinagem/2025/Roquite/21.png", "capturas/Unidade 2/Usinagem/2025/MM/21.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/21.png"] },
            { data: "22/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/22.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/22.png", "capturas/Unidade 2/Usinagem/2025/Roquite/22.png", "capturas/Unidade 2/Usinagem/2025/MM/22.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/22.png"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/23.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/23.png", "capturas/Unidade 2/Usinagem/2025/Roquite/23.png", "capturas/Unidade 2/Usinagem/2025/MM/23.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/23.png"] },
            { data: "24/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/25.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/25.png", "capturas/Unidade 2/Usinagem/2025/Roquite/24.png", "capturas/Unidade 2/Usinagem/2025/MM/24.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/24.png"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/27.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/27.png", "capturas/Unidade 2/Usinagem/2025/Roquite/27.png", "capturas/Unidade 2/Usinagem/2025/MM/27.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/27.png"] },
            { data: "28/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/28.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/28.png", "capturas/Unidade 2/Usinagem/2025/Roquite/28.png", "capturas/Unidade 2/Usinagem/2025/MM/28.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/28.png"] },
            { data: "29/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/29.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/29.png", "capturas/Unidade 2/Usinagem/2025/Roquite/29.png", "capturas/Unidade 2/Usinagem/2025/MM/29.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/29.png"] },
            { data: "30/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/30.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/30.png", "capturas/Unidade 2/Usinagem/2025/Roquite/30.png", "capturas/Unidade 2/Usinagem/2025/MM/30.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/30.png"] },
            { data: "31/01/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/31.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/31.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/31.png", "capturas/Unidade 2/Usinagem/2025/MM/31.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/31.png"] },

            { data: "03/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/02-FEVEREIRO/03.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/02-FEVEREIRO/03.png", "capturas/Unidade 2/Usinagem/2025/Roquite/02-FEVEREIRO/03.png", "capturas/Unidade 2/Usinagem/2025/MM/02-FEVEREIRO/03.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/02-FEVEREIRO/03.png"] },
            { data: "04/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/02-FEVEREIRO/04.jpg", "capturas/Unidade 2/Usinagem/2025/Rolinho/02-FEVEREIRO/04.jpg", "capturas/Unidade 2/Usinagem/2025/Roquite/02-FEVEREIRO/04.jpg", "capturas/Unidade 2/Usinagem/2025/MM/02-FEVEREIRO/04.jpg", "capturas/Unidade 2/Usinagem/2025/Usinagem/02-FEVEREIRO/04.jpg"] },
            { data: "06/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/02-FEVEREIRO/06.jpg", "capturas/Unidade 2/Usinagem/2025/Rolinho/02-FEVEREIRO/06.jpg", "capturas/Unidade 2/Usinagem/2025/Roquite/02-FEVEREIRO/06.jpg", "capturas/Unidade 2/Usinagem/2025/MM/02-FEVEREIRO/06.jpg", "capturas/Unidade 2/Usinagem/2025/Usinagem/02-FEVEREIRO/06.jpg"] },
            { data: "07/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/02-FEVEREIRO/07.jpg", "capturas/Unidade 2/Usinagem/2025/Rolinho/02-FEVEREIRO/07.jpg", "capturas/Unidade 2/Usinagem/2025/Roquite/02-FEVEREIRO/07.jpg", "capturas/Unidade 2/Usinagem/2025/MM/02-FEVEREIRO/07.jpg", "capturas/Unidade 2/Usinagem/2025/Usinagem/02-FEVEREIRO/07.jpg"] },
            { data: "10/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/02-FEVEREIRO/10.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/02-FEVEREIRO/10.png", "capturas/Unidade 2/Usinagem/2025/Roquite/02-FEVEREIRO/10.png", "capturas/Unidade 2/Usinagem/2025/MM/02-FEVEREIRO/10.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/02-FEVEREIRO/10.png"] },
            { data: "11/10/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Mont. Us/02-FEVEREIRO/11.png", "capturas/Unidade 2/Usinagem/2025/Rolinho/02-FEVEREIRO/11.png", "capturas/Unidade 2/Usinagem/2025/Roquite/02-FEVEREIRO/11.png", "capturas/Unidade 2/Usinagem/2025/MM/02-FEVEREIRO/11.png", "capturas/Unidade 2/Usinagem/2025/Usinagem/02-FEVEREIRO/11.png"] },
            { data: "13/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/Mont.Us/13.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Rolinho/13.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Roquite/13.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/MM/13.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Usinagem/13.png"] },
            { data: "14/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/Mont.Us/14.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Rolinho/14.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Roquite/14.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/MM/14.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Usinagem/14.png"] },
            { data: "17/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/Mont.Us/17.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Rolinho/17.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Roquite/17.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/MM/17.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Usinagem/17.png"] },
            { data: "18/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/Mont.Us/18.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Rolinho/18.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Roquite/18.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/MM/18.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Usinagem/18.png"] },
            { data: "19/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/Mont.Us/19.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Rolinho/19.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/MM/19.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Usinagem/19.png"] },
            { data: "20/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/Mont.Us/20.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Rolinho/20.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Roquite/20.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/MM/20.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Usinagem/20.png"] },
            { data: "21/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/Mont.Us/21.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Rolinho/21.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Roquite/21.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/MM/21.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Usinagem/21.png"] },
            { data: "24/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/Mont.Us/24.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Rolinho/24.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Roquite/24.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/MM/24.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Usinagem/24.png"] },
            { data: "25/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/Mont.Us/25.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Rolinho/25.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Roquite/25.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/MM/25.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Usinagem/25.png"] },
            { data: "28/02/2025", captura: ["capturas/Unidade 2/Usinagem/2025/fevereiro/Mont.Us/28.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Rolinho/28.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Roquite/28.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/MM/26.png", "capturas/Unidade 2/Usinagem/2025/fevereiro/Usinagem/27.png"] },
            { data: "11/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/11.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/11.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/11.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/11.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/11.png"] },
            { data: "12/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/12.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/12.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/12.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/12.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/12.png"] },
            { data: "13/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/13.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/13.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/13.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/13.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/13.png"] },
            { data: "14/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/14.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/14.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/14.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/14.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/14.png"] },
            { data: "17/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/17.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/17.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/17.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/17.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/17.png"] },
            { data: "18/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/18.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/18.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/18.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/18.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/18.png"] },
            { data: "19/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/19.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/19.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/19.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/19.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/19.png"] },
            { data: "20/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/20.png", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/20.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/20.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/20.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/20.png"] },
            { data: "21/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/21.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/21.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/21.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/21.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/21.png"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/24.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/24.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/24.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/24.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/24.png"] },
            { data: "25/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/25.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/25.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/25.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/25.jpg", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/25.png"] },
            { data: "26/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/26.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/26.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/26.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/25.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/26.png"] },
            { data: "27/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/27.png", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/27.png", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/27.png", "capturas/Unidade 2/Usinagem/2025/Março/MM/27.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/27.png"] },
            { data: "28/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/28.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/28.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/28.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/28.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/28.png"] },
            { data: "31/03/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Março/Mont.Us/31.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Rolinho/31.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/Roquite/31.jpeg", "capturas/Unidade 2/Usinagem/2025/Março/MM/31.png", "capturas/Unidade 2/Usinagem/2025/Março/Usinagem/31.png"] },
           
            { data: "01/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/01.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/01.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite", "capturas/Unidade 2/Usinagem/2025/Abril/MM/01.png", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/01.png"] },
            { data: "02/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/02.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/02.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/02.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/MM/02.png", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/02.png"] },
            { data: "03/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/03.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/03.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/03.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/MM/03.png", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/03.png"] },
            { data: "04/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/04.png", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/04.png", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/04.png", "capturas/Unidade 2/Usinagem/2025/Abril/MM/04.png", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/04.png"] },
            { data: "07/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/07.png", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/07.png", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/07.png", "capturas/Unidade 2/Usinagem/2025/Abril/MM/07.png", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/07.png"] },
            { data: "08/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/08.png", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/08.png", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/08.png", "capturas/Unidade 2/Usinagem/2025/Abril/MM/08.png", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/08.png"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/09.png", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/09.png", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/09.png", "capturas/Unidade 2/Usinagem/2025/Abril/MM/09.png", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/09.png"] },
            { data: "10/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/10.png", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/10.png", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/10.png", "capturas/Unidade 2/Usinagem/2025/Abril/MM/10.png", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/10.png"] },
            { data: "11/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/11.png", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/11.png", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/11.png", "capturas/Unidade 2/Usinagem/2025/Abril/MM/11.png", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/11.png"] },
            { data: "14/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/14.png", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/14.png", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/14.png", "capturas/Unidade 2/Usinagem/2025/Abril/MM/14.png", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/14.png"] },
            { data: "15/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/15.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/15.png", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/15.png", "capturas/Unidade 2/Usinagem/2025/Abril/MM/15.png", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/15.png"] },
            { data: "16/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/16.jpg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/16.jpg", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/16.jpg", "capturas/Unidade 2/Usinagem/2025/Abril/MM/16.jpg", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/16.jpg"] },
            { data: "17/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/17.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/17.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/17.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/MM/17.jpg", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/17.jpg"] },
            { data: "22/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/22.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/22.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/22.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/MM/22.jpg", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/22.jpg"] },
            { data: "23/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/23.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/23.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/23.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/MM/23.jpg", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/23.jpg"] },
            { data: "24/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/24.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/24.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/24.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/MM/24.jpg", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/24.jpg"] },
            { data: "25/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/25.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/25.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/25.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/MM/25.jpg", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/25.jpg"] },
            { data: "28/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/28.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/28.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/28.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/MM/28.jpg", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/28.jpg"] },
            { data: "29/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/29.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/29.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/29.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/MM/29.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/29.jpg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 2/Usinagem/2025/Abril/Mont. Us/30.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Rolinho/30.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/Roquite/30.jpeg", "capturas/Unidade 2/Usinagem/2025/Abril/MM/30.jpg", "capturas/Unidade 2/Usinagem/2025/Abril/Usinagem/30.jpg"] },

            { data: "01/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/01.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/01.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/01.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/01.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/01.jpg"] },
            { data: "05/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/05.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/05.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/05.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/05.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/05.jpg"] },
            { data: "06/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/06.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/06.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/06.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/06.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/06.jpg"] },
            { data: "07/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/07.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/07.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/07.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/07.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/07.jpg"] },
            { data: "08/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/08.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/08.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/08.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/08.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/08.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/09.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/09.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/09.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/09.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/09.jpg"] },
            { data: "12/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/12.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/12.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/12.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/12.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/12.jpg"] },
            { data: "13/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/13.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/13.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/13.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/13.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/13.jpg"] },
            { data: "14/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/14.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/14.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/14.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/14.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/14.jpg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/15.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/15.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/15.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/15.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/15.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/16.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/16.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/16.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/16.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/16.jpg"] },
            { data: "19/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/19.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/19.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/19.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/19.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/19.jpg"] },
            { data: "20/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/20.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/20.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/20.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/20.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/20.jpg"] },
            { data: "21/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/21.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/21.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/21.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/21.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/21.jpg"] },
            { data: "22/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/22.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/22.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/22.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/22.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/22.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/23.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/23.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/23.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/23.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/23.jpg"] },
            { data: "26/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/26.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/26 HORA-EXTRA.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/26.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/26 HORA-EXTRA.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/26.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/26.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/26.jpg"] },
            { data: "27/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/27.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/27.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/27 HORA-EXTRA.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/27.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/27.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/27.jpg"] },
            { data: "28/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/28.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/28 HORA-EXTRA.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/28.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/28.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/28.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/28.jpg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/29.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/29.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/29.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/29.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/29.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 2/Usinagem/2025/MAIO/Mont. Us/30.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Rolinho/30.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/Roquite/30.jpeg", "capturas/Unidade 2/Usinagem/2025/MAIO/MM/30.jpg", "capturas/Unidade 2/Usinagem/2025/MAIO/Usinagem/30.jpg"] },
            
            { data: "02/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Montagem da Usinagem/02.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/02.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/02.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/02.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/02.jpg"] },
            { data: "03/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/03.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/03.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/03.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/03.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/03.jpg"] },
            { data: "04/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/04.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/04.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/04.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/04.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/04.jpg"] },
            { data: "05/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/05.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/05.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/05.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/05.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/05.jpg"] },
            { data: "06/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/06.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/06.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/06.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/06.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/06.jpg"] },
            { data: "09/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/09.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/09.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/09.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/09.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/09.jpg"] },
            { data: "10/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/10.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/10.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/10.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/10.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/10.jpg"] },
            { data: "11/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/11.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/11.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/11.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/11.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/11.jpg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/12.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/12.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/12.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/12.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/12.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/13.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/13.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/13.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/13.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/13.jpg"] },
            { data: "16/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/16.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/16.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/16.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/16.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/16.jpg"] },
            { data: "17/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/17.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/17.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/17.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/17.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/17.jpg"] },
            { data: "18/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/18.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/18.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/18.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/18.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/18.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/19.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/19.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/19.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/19.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/19.jpg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/23.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/23.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/23.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/23.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/23.jpg"] },
            { data: "24/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/24.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/24.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/24.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/24.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/24.jpg"] },
            { data: "25/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/25.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/25.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/25.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/25.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/25.jpg"] },
            { data: "26/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/26.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/26.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/26.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/26.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/26.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/27.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/27.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/27.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/27.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/27.jpg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JUNHO/Mont. Us/30.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Rolinho/30.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Roquite/30.jpeg", "capturas/Unidade 2/Usinagem/2025/JUNHO/MM/30.jpg", "capturas/Unidade 2/Usinagem/2025/JUNHO/Usinagem/30.jpg"] },
       
            { data: "01/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/01.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/01.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/01.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/01.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/01.jpg"] },
            { data: "02/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/02.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/02.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/02.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/02.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/02.jpg"] },
            { data: "03/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/03.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/03.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/03.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/03.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/03.jpg"] },
            { data: "07/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/07.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/07.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/07.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/07.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/07.jpg"] },
            { data: "08/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/08.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/08.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/08.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/08.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/08.jpg"] },
            { data: "09/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/09.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/09.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/09.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/09.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/09.jpg"] },
            { data: "10/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/10.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/10.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/10.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/10.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/10.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/11.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/11.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/11.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/11.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/11.jpg"] },
            { data: "14/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/14.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/14.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/14.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/14.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/14.jpg"] },
            { data: "15/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/15.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/15.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/15.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/15.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/15.jpg"] },
            { data: "16/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/16.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/16.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/16.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/16.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/16.jpg"] },
            { data: "17/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/17.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/17.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/17.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/17.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/17.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/18.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/18.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/18.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/18.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/18.jpg"] },
            { data: "21/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/21.jpeg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/21.jpeg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/21.jpeg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/21.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/21.jpg"] },
            { data: "23/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/23.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/23.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/23.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/23.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/23.jpg"] },
            { data: "24/07/2025", captura: ["capturas/Unidade 2/Usinagem/2025/JULHO/Montagem Us/24.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Rolinho/24.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Roquite/24.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/MM/24.jpg", "capturas/Unidade 2/Usinagem/2025/JULHO/Usinagem/24.jpg"] },




            ],


             // { data: "", captura: ["", "", "", "", ""] },






             Acabamento: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Acabamento/11- Novembro/tingidor/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/robo/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/pé trás/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/pé frente/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/mont/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/maquininh30.png", "capturas/Unidade 2/Acabamento/11- Novembro/fundo/30.png",] },

            { data: "20/12/2023", captura: ["capturas/Unidade 2/Acabamento/12- Dezembro/tingidor/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/robo/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/pé trás/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/pé frente/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/mont/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/maquininh20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/fundo/20.png",] },

            { data: "31/01/2024", captura: ["capturas/Unidade 2/Acabamento/2024/1- Janeiro/tingidor/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/robo/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/pe traz/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/pe frente/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/mont/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/lix fundo maq/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/lix fundo manual/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 2/Acabamento/2024/2- Fevereiro/tingidor/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/robo/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/pe traz/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/pe frente/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/mont/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/lix fundo maq/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/lix fundo manual/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 2/Acabamento/2024/3- Março/tingidor/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/robo/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/pe tras/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/pe frente/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/mont/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/lix fundo maq/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/lix fundo manual/28.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 2/Acabamento/2024/4- Abril/ting/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/robo/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/pe traz/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/pe frente/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/mont/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/lix.fundo maquininh30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/lix.fundo manual/30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 2/Acabamento/2024/5- Maio/Tingidor/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/Robô/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/PéTras/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/PéFrente/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/Montagem/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/LixaçãoFundoMaquininh30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/LixaçãoFundoManual/30.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 2/Acabamento/2024/6- Junho/Tingidor/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/Robô/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/PéTras/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/PéFrente/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/Montagem/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/LixaçãoFundoMaquininh28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/LixaçãoFundoManual/28.jpg"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 2/Acabamento/2024/7- Julho/Tingidor/31.jpeg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Robô/31.jpeg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéTras/31.jpeg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéFrente/31.jpeg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Montagem/31.jpeg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoMaquininh31.jpeg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoManual/31.jpeg"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 2/Acabamento/2024/8- Agosto/Tingidor/30.jpeg", "capturas/Unidade 2/Acabamento/2024/8- Agosto/Robô/30.jpeg", "capturas/Unidade 2/Acabamento/2024/8- Agosto/PéTras/30.jpeg", "capturas/Unidade 2/Acabamento/2024/8- Agosto/PéFrente/30.jpeg", "capturas/Unidade 2/Acabamento/2024/8- Agosto/Montagem/30.jpeg", "capturas/Unidade 2/Acabamento/2024/8- Agosto/LixaçãoFundoMaquininh30.jpeg", "capturas/Unidade 2/Acabamento/2024/8- Agosto/LixaçãoFundoManual/30.jpeg"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 2/Acabamento/2024/9- Setembro/Tingidor/30.png", "capturas/Unidade 2/Acabamento/2024/9- Setembro/Robô/30.png", "capturas/Unidade 2/Acabamento/2024/9- Setembro/PéTras/30.jpeg", "capturas/Unidade 2/Acabamento/2024/9- Setembro/PéFrente/30.jpeg", "capturas/Unidade 2/Acabamento/2024/9- Setembro/Montagem/30.png", "capturas/Unidade 2/Acabamento/2024/9- Setembro/LixaçãoFundoMaquininh30.jpeg", "capturas/Unidade 2/Acabamento/2024/9- Setembro/LixaçãoFundoManual/30.jpeg"] },

            { data: "02/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/2.png", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/2.png", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/2.png", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/2.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/2.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/2.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininh2.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/04.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/4.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininh4.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/4.jpeg"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/8.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininh8.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/8.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/8.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/8.png", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/8.png", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/8.png"] },
            { data: "10/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/10.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/10.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/10.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/10.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/10.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininh10.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/10.jpeg"] },
            { data: "14/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/14.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/14.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/14.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/14.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/14.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininh14.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/14.jpg"] },
            { data: "16/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/16.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/16.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/16.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/16.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/16.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininh16.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/16.jpg"] },
            { data: "21/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/21.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/21.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/21.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/21.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininh21.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/21.jpg"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/22.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/22.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/22.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/22.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/22.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininh22.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/22.jpg"] },
            { data: "28/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/28.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/28.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/28.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/28.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/28.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininh28.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/28.jpg"] },
            { data: "30/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/30.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/30.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/30.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/30.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/30.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininh30.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/30.jpg"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/31.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/31.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/31.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/31.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/31.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininh31.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/31.jpg"] },

            { data: "06/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/6.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/06.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/6.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/6.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/06.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/06.jpg"] },
            { data: "07/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/7.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/7.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/7.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/7.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/7.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh7.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/7.jpg"] },
            { data: "08/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/8.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/8.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/8.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/8.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/8.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh8.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/8.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/9.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/9.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/9.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/9.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/9.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh09.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/09.jpg"] },
            { data: "11/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/11.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/11.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/11.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/11.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/11.jpg"] },
            { data: "13/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/13.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/13.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/13.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/13.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/13.jpg"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/18.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/14.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/18.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/18.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/18.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh18.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/18.jpg"] },
            { data: "19/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/19.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/19.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/19.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/19.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/19.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh19.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/20.jpg"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/21.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/21.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/21.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/21.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/21.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh21.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/21.jpg"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/22.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/22.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/22.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/22.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/22.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh22.png", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/22.jpeg"] },
            { data: "23/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/23.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/23.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/23.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/23.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/23.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh23.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/23.jpg"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/25.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/25.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/25.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/25.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/25.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh25.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/25.jpg"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/26.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/26.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/26.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/26.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/26.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh26.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/26.jpg"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/27.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/27.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/27.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/27.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/27.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh27.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/27.jpg"] },
            { data: "29/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/29.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/29.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/29.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/29.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/29.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh29.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/29.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/30.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/30.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/30.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/30.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/30.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininh30.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/30.jpg"] },

            { data: "02/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/2.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/02.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/02.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/2.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/2.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininh2.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/2.jpg"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/3.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/3.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/3.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/3.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/3.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininh3.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/3.jpg"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/4.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/4.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/4.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/4.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/4.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininh4.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/04.jpg"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/5.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/5.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/5.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/05.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/5.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/05.png", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininh5.png"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/6.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/6.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/6.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/6.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/6.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininh06.png", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/06.png"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/7.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/7.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/7.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/7.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/7.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininh07.png", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/07.png"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/11.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/11.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/11.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/11.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/11.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininh11.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/11.jpg"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/12.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/12.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/12.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/12.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/12.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininh12.png", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/12.png"] },
            { data: "13/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/13.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/13.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/13.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/13.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininh13.png", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/13.png"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/16.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/16.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/16.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/16.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/16.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininh16.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/16.jpeg"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/17.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/17.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/17.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/17.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/17.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininh17.png", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/17.png"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/18.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/18.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/18.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/18.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/18.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininh18.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/18.jpeg"] },

            { data: "06/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/6.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/6.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/6.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/6.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/6.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/06.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/06.jpeg"] },
            { data: "07/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/7.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/7.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/7.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/7.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/7.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/07.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/07.png"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/8.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/8.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/8.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/8.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/8.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/08.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/08.png"] },
            { data: "14/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/14.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/14.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/14.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/14.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/14.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/14.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/14.png"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/20.jpg"] },
            { data: "21/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/21.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/21.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/21.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/21.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/21.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/21.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/21.jpeg"] },
            { data: "22/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/22.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/22.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/22.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/22.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/22.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/22.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/22.jpeg"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/23.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/23.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/23.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/23.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/23.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/23.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/23.png"] },
            { data: "24/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/27.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/24.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/27.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/27.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/27.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/24.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/24.jpeg"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/27.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/27.png", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/27.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/27.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/27.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/27.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual"] },
            { data: "28/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/28.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/28.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/28.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/28.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/28.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/28.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/28.jpg"] },
            { data: "29/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/29.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/29.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/29.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/29.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/29.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/29.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/29.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/30.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/30.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/30.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/30.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/30.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininhjaneiro/30.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/30.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/31.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/31.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/31.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/31.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/31.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh01-JANEIRO/31.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/01-JANEIRO/31.png"] },

            { data: "06/02/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/fevereiro/6.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/fevereiro/6.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/fevereiro/06.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/fevereiro/6.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/fevereiro/6.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/02-FEVEREIRO/06.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh02-FEVEREIRO/06.jpg"] },
            { data: "12/02/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/fevereiro/12.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/fevereiro/12.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/fevereiro/12.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/fevereiro/12.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/fevereiro/12.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh02-FEVEREIRO/12.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/02-FEVEREIRO/12.jpg"] },
            { data: "18/02/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/fevereiro/18.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/fevereiro/18.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/fevereiro/18.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/fevereiro/18.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/fevereiro/18.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh02-FEVEREIRO/18.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/02-FEVEREIRO/18.jpg"] },
            { data: "19/02/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/fevereiro/19.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/fevereiro/19.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/fevereiro/19.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/fevereiro/19.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/fevereiro/19.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh02-FEVEREIRO/19.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/02-FEVEREIRO/19.jpg"] },
            { data: "20/02/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/fevereiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/fevereiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/fevereiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/fevereiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/fevereiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh02-FEVEREIRO/20.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/02-FEVEREIRO/20.jpg"] },
            { data: "24/02/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/fevereiro/24.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/fevereiro/24.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/fevereiro/24.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/fevereiro/24.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/fevereiro/24.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/02-FEVEREIRO/24.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh02-FEVEREIRO/24.jpg"] },
            { data: "25/02/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/fevereiro/25.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/fevereiro/25.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/fevereiro/25.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/fevereiro/25.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/fevereiro/25.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/02-FEVEREIRO/25.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh02-FEVEREIRO/25.png"] },
            { data: "26/02/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/fevereiro/26.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/fevereiro/26.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/fevereiro/26.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/fevereiro/26.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/fevereiro/26.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh02-FEVEREIRO/27.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/02-FEVEREIRO/27.jpeg"] },
            
            { data: "13/02/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Robô/março/13.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Março/13.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/março/13.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/março/13.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/03-MARÇO/13.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh03-MARÇO/13.jpeg"] },
            { data: "14/03/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Março/14.png", "capturas/Unidade 2/Acabamento/2025/Robô/março/14.png", "capturas/Unidade 2/Acabamento/2025/PéTras/Março/14.png", "capturas/Unidade 2/Acabamento/2025/PéFrente/março/14.png", "capturas/Unidade 2/Acabamento/2025/Montagem/março/14.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh03-MARÇO/14.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/03-MARÇO/14.png"] },
            { data: "17/03/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Março/17.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/março/17.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Março/17.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/março/17.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/março/17.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh03-MARÇO/17.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/03-MARÇO/17.png"] },
            { data: "18/03/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Março/18.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/março/18.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Março/18.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/março/18.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/março/18.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh03-MARÇO/18.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/03-MARÇO/18.png"] },
            { data: "19/03/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Março/19.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/março/19.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Março/19.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/março/19.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/março/19.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh03-MARÇO/19.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/03-MARÇO/19.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Março/20.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/março/20.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Março/20.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/março/20.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/março/20.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/03-MARÇO/20.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh03-MARÇO/20.png"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Março/24.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/março/24.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Março/24.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/março/24.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/março/24.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh03-MARÇO/24.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/03-MARÇO/24.png"] },
            { data: "25/03/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Março/25.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/março/25.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Março/25.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/março/25.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/março/25.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh03-MARÇO/25.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/03-MARÇO/25.png"] },
            { data: "26/03/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Março/26.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/março/26.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Março/26.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/março/26.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/março/26.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh03-MARÇO/26.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/03-MARÇO/26.png"] },
            { data: "27/03/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Março/27.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/março/27.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Março/27.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/março/27.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/março/27.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh03-MARÇO/27.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/03-MARÇO/27.jpeg"] },
            { data: "31/03/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Março/31.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/março/31.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Março/31.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/março/31.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/março/31.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh03-MARÇO/31.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/03-MARÇO/31.png"] },
            
            { data: "03/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/03.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/03.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/03.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/03.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/03.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/03.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/03.jpeg"] },
            { data: "04/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/04.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/04.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/04.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/04.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/04.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/04.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/04.png"] },
            { data: "07/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/07.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/07.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/07.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/07.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/07.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/07.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/07.jpeg"] },
            { data: "08/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/08.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/08.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/08.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/08.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/08.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/08.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/08.jpeg"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/09.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/09.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/09.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/09.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/09.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/09.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/09.png"] },
            { data: "11/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/11.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/11.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/11.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/11.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/11.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/11.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/11.jpeg"] },
            { data: "14/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/14.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/14.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/14.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/14.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/14.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/14.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/14.jpeg"] },
            { data: "15/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/15.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/15.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/15.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/15.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/15.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/15.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/15.jpg"] },
            { data: "16/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/16.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/16.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/16.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/16.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/16.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/16.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/16.jpeg"] },
            { data: "22/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/22.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/22.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/22.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/22.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/22.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/22.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/22.jpg"] },
            { data: "23/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/23.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/23.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/23.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/23.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/23.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/23.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/23.jpeg"] },
            { data: "24/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/24.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/24.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/24.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/24.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/24.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/24.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/24.jpg"] },
            { data: "28/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/28.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/28.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/28.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/28.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/28.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/28.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/28.jpg"] },
            { data: "29/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/29.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/29.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/29.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/29.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/29.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/29.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/29.jpg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/abril/30.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/abril/30.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Abril/30.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Abril/30.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/abril/30.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh04-ABRIL/30.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/04-ABRIL/30.jpg"] },
            
            { data: "01/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/06.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/06.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/06.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/06.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/06.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/06.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/06.jpg"] },
            { data: "07/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/07.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/07.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/07.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/07.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/07.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/07.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/07.jpg"] },
            { data: "08/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/08.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/08.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/08.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/08.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/8.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/8.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/08.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/09.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/09.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/09.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/09.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/09.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/09.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/09.jpg"] },
            { data: "12/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/12.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/12.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/12.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/12.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/12.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/12.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/12.jpg"] },
            { data: "13/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/13.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/13.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/13.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/13.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/13.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/13.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/13.jpg"] },
            { data: "14/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/14.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/14.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/14.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/14.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/14.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/14.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/14.jpg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/15.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/15.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/15.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/15.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/15.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/15.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/15.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/16.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/16.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/16.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/16.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/16.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/16.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/16.jpg"] },
            { data: "19/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/19.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/19.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/19.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/19.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/19.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/19.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/19.jpg"] },
            { data: "21/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/21.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/21.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/21.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/21.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/21.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/21.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/21.jpg"] },
            { data: "26/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/26.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/26.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/26.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/26.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/26.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/26.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/26.jpg"] },
            { data: "27/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/27.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/27.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/27.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/27.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/27.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/27.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/27.jpg"] },
            { data: "28/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/28.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/28.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/28.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/28.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/28.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/28.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininh05-MAIO/28.jpg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/29.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/29.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/29.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/29.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/Maio/29.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininha/05-MAIO/29.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/29.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/Maio/30.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/Maio/30.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/Maio/30.jpg","capturas/Unidade 2/Acabamento/2025/PéFrente/Maio/30.jpg" ,"capturas/Unidade 2/Acabamento/2025/Montagem/Maio/30.jpg","capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininha/05-MAIO/30.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/06-MAIO/30.jpeg"] },
            
            { data: "05/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/05 PT1.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/05 PT2.jpg"] },
            { data: "09/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/09 PT01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/09 PT02.jpg"] },
            { data: "10/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/10 PT01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/10 PT02.jpg"] },
            { data: "11/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/11 PT01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/11 PT02.jpg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/12 PT01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/12 PT02.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/13 PT1.jpgH", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/13 PT2.jpg"] },
            { data: "16/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/16 PT1.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/16 PT2.jpg"] },
            { data: "17/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/17 PT1.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/17-pt2.jpeg"] },
            { data: "18/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/18 PT1.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/18-pt2.jpeg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/23 PT1.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/23 PT2.jpg"] },
            { data: "24/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/24 PT1.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/24 PT2.jpg"] },
            { data: "25/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/25 PT1.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/25 PT2.jpg"] },
            { data: "26/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/26 PT1.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/26 PT2.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/27 PT1.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/27 PT2.jpg"] },  
            { data: "30/06/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/30 PT1.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/30 PT2.jpg"] },
           
            { data: "02/07/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/02 PT 01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/02 PT 02.jpg"] },
            { data: "03/07/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/03 PT 01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/03 PT 02.jpg"] },
            { data: "07/07/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/07 PT 01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/07 PT 02.jpg"] },
            { data: "09/07/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/09 PT 01.jpeg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/09 PT 02.jpeg"] },
            { data: "10/07/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/10 PT 01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/10 PT 02.jpg"] },
            { data: "14/07/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/14 PT 01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/14 PT 02.jpg"] },
            { data: "16/07/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/16 PT 01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/16 PT 02.jpg"] },
            { data: "17/07/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/17 PT 01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/17 PT 02.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/18 PT 01.jpeg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/18 PT 02.jpeg"] },
            { data: "21/07/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/21 PT 01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/21 PT 02.jpg"] },
            { data: "23/07/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/23 PT 01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/23 PT 02.jpg"] },
            { data: "24/07/2025", captura: ["capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/24 PT 01.jpg", "capturas/Unidade 2/Acabamento/2025/ACABAMENTO/JULHO/24 PT 02.jpg"] },


            // { data: "", captura: ["", ""] },


           
        ],
    },

    UA3: {
        Traçador: [
            { data: "30/11/2023", captura: ["capturas/Unidade 3/Usinagem/11- Novembro/Traçador 30-11.png"] },

            { data: "20/12/2023", captura: ["capturas/Unidade 3/Usinagem/12- Dezembro/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 3/Usinagem/2024/1- Janeiro/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 3/Usinagem/2024/2- Fevereiro/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 3/Usinagem/2024/3- Março/28.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 3/Usinagem/2024/4- Abril/30.png"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 3/Usinagem/2024/5- Maio/30.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 3/Usinagem/2024/6- Junho/28.png"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 3/Usinagem/2024/7- Julho/31.png"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 3/Usinagem/2024/8- Agosto/30.png"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 3/Usinagem/2024/9- Setembro/30.png"] },

            { data: "03/10/2024", captura: ["capturas/Unidade 3/Usinagem/2024/10- Outubro/3.png"] },
            { data: "11/10/2024", captura: ["capturas/Unidade 3/Usinagem/2024/10- Outubro/11.png"] },
            { data: "16/10/2024", captura: ["capturas/Unidade 3/Usinagem/2024/10- Outubro/16.png"] },
            { data: "17/10/2024", captura: ["capturas/Unidade 3/Usinagem/2024/10- Outubro/17.png"] },
            { data: "18/10/2024", captura: ["capturas/Unidade 3/Usinagem/2024/10- Outubro/18.png"] },
            { data: "21/10/2024", captura: ["capturas/Unidade 3/Usinagem/2024/10- Outubro/21.png"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 3/Usinagem/2024/10- Outubro/22.png"] },
            { data: "28/10/2024", captura: ["capturas/Unidade 3/Usinagem/2024/10- Outubro/28.png"] },
            { data: "30/10/2024", captura: ["capturas/Unidade 3/Usinagem/2024/10- Outubro/30.png"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 3/Usinagem/2024/10- Outubro/31.png"] },

            { data: "06/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/6.png"] },
            { data: "07/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/7.png"] },
            { data: "11/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/11.png"] },
            { data: "12/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/12.png"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/18.png"] },
            { data: "19/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/19.png"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/21.png"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/22.png"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/25.png"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/26.png"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/27.png"] },
            { data: "28/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/28.png"] },
            { data: "29/11/2024", captura: ["capturas/Unidade 3/Usinagem/2024/11- Novembro/29.png"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/02.png"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/02.png"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/04.png"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/05.png"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/06.png"] },
            { data: "09/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/09.png"] },
            { data: "10/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/10.png"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/11.png"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/12.png"] },
            { data: "13/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/13.png"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/14.png"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/17.png"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 3/Usinagem/2024/12-Dezembro/18.png"] },

            { data: "06/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/06.png"] },
            { data: "07/12/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/07.png"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/08.png"] },
            { data: "09/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/09.png"] },
            { data: "10/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/10.png"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/13.png"] },
            { data: "14/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/14.png"] },
            { data: "15/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/15.png"] },
            { data: "16/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/16.png"] },
            { data: "17/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/17.png"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/20.png"] },
            { data: "21/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/21.png"] },
            { data: "22/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/22.png"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/23.png"] },
            { data: "24/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/24.png"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/27.png"] },
            { data: "28/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/28.png"] },
            { data: "29/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/29.png"] },
            { data: "30/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/30.png"] },
            { data: "31/01/2025", captura: ["capturas/Unidade 3/Usinagem/2025/01-JANEIRO/31.png"] },
            { data: "03/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/03.png"] },
            { data: "04/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/04.jpg"] },
            { data: "05/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/05.jpg"] },
            { data: "06/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/06.jpg"] },
            { data: "07/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/07.jpg"] },
            { data: "10/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/10.png"] },
            { data: "11/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/11.png"] },
            { data: "12/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/12.png"] },
            { data: "13/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/13.png"] },
            { data: "14/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/14.png"] },
            { data: "17/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/17.png"] },
            { data: "18/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/18.png"] }, 
            { data: "19/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/19.png"] }, 
            { data: "20/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/20.png"] }, 
            { data: "21/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/21.png"] }, 
            { data: "24/02/2024", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/24.png"] }, 
            { data: "25/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/25.png"] }, 
            { data: "26/02/2025", captura: ["capturas/Unidade 3/Usinagem/2025/02-FEVEREIRO/26.png"] }, 
            { data: "11/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/11.png"] }, 
            { data: "12/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/12.png"] }, 
            { data: "13/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/13.png"] }, 
            { data: "14/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/14.png"] }, 
            { data: "17/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/17.png"] }, 
            { data: "18/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/18.png"] }, 
            { data: "19/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/19.png"] },
            { data: "20/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/20.png"] }, 
            { data: "21/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/21.png"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/24.png"] }, 
            { data: "25/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/25.png"] }, 
            { data: "26/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/26.png"] }, 
            { data: "27/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/27.png"] }, 
            { data: "28/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/28.png"] }, 
            { data: "31/03/2025", captura: ["capturas/Unidade 3/Usinagem/2025/03-MARÇO/31.png"] },

            { data: "01/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/01.png"] }, 
            { data: "02/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/02.png"] },
            { data: "03/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/03.png"] }, 
            { data: "04/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/04.png"] }, 
            { data: "07/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/07.png"] }, 
            { data: "08/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/08.png"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/09.png"] },
            { data: "10/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/10.png"] }, 
            { data: "11/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/11.png"] }, 
            { data: "14/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/14.png"] }, 
            { data: "15/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/15.png"] }, 
            { data: "16/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/16.jpg"] }, 
            { data: "17/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/17.jpg"] }, 
            { data: "22/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/22.jpg"] }, 
            { data: "23/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/23.jpg"] }, 
            { data: "24/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/24.jpg"] },
            { data: "25/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/25.jpg"] }, 
            { data: "28/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/28.jpg"] }, 
            { data: "29/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/29.jpg"] }, 
            { data: "30/04/2025", captura: ["capturas/Unidade 3/Usinagem/2025/04-ABRIL/30.jpg"] }, 

            { data: "01/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/01.jpg"] }, 
            { data: "05/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/05.jpg"] }, 
            { data: "06/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/06.jpg"] }, 
            { data: "07/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/07.jpg"] }, 
            { data: "08/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/08.jpg"] }, 
            { data: "09/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/09.jpg"] }, 
            { data: "12/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/12.jpg"] }, 
            { data: "13/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/13.jpg"] }, 
            { data: "14/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/14.jpg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/15.jpg"] }, 
            { data: "16/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/16.jpg"] }, 
            { data: "19/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/19.jpg"] },
            { data: "20/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/20.jpg"] }, 
            { data: "21/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/21.jpg"] }, 
            { data: "22/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/22.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/23.jpg"] }, 
            { data: "26/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/26.jpg"] }, 
            { data: "27/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/27.jpg"] }, 
            { data: "28/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/28.jpg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/29.jpg"] }, 
            { data: "30/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/05-MAIO/30.jpg"] },
            
            { data: "02/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/02.jpg"] },
            { data: "03/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/03.jpg"] },
            { data: "04/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/04.jpg"] },
            { data: "05/05/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/05.jpg"] }, 
            { data: "06/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/06.jpg"] }, 
            { data: "09/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/09.jpg"] },
            { data: "10/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/10.jpg"] }, 
            { data: "11/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/11.jpg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/12.jpg"] }, 
            { data: "13/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/13.jpg"] }, 
            { data: "16/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/16.jpg"] }, 
            { data: "17/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/17.jpg"] }, 
            { data: "18/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/18.jpg"] },
            { data: "19/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/19.jpg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/23.jpg"] }, 
            { data: "24/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/24.jpg"] },
            { data: "25/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/25.jpg"] }, 
            { data: "26/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/26.jpg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 3/Usinagem/2025/06-JUNHO/30.jpg"] }, 

            { data: "01/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/01.jpg"] },
            { data: "02/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/02.jpg"] }, 
            { data: "03/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/03.jpg"] }, 
            { data: "07/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/07.jpg"] },
            { data: "08/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/08.jpg"] }, 
            { data: "09/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/09.jpg"] },
            { data: "10/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/10.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/11.jpg"] }, 
            { data: "14/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/14.jpg"] },
            { data: "15/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/15.jpg"] }, 
            { data: "16/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/16.jpg"] }, 
            { data: "17/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/17.jpg"] }, 
            { data: "18/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/18.jpg"] }, 
            { data: "21/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/21.jpg"] }, 
            { data: "23/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/23.jpg"] }, 
            { data: "24/07/2025", captura: ["capturas/Unidade 3/Usinagem/2025/07-JULHO/24.jpg"] },


            // { data: "", captura: [""] }, 
            // { data: "", captura: [""] },
        ],
    },

    UA4: {
        Calibradora: [
            { data: "30/11/2023", captura: ["capturas/Unidade 4/Usinagem/11- Novembro/Calibrador30.png",] },

            { data: "19/12/2023", captura: ["capturas/Unidade 4/Usinagem/12- Dezembro/Calibrador19.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 4/Usinagem/2024/1- Janeiro/Calibrador31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 4/Usinagem/2024/2- Fevereiro/Calibrador29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 4/Usinagem/2024/3- Março/Calibrador28.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 4/Usinagem/2024/4- Abril/Calibrador30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 4/Usinagem/2024/5- Maio/Calibrador30.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 4/Usinagem/2024/6- Junho/Calibrador28.jpg"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 4/Usinagem/2024/7- Julho/Calibrador31.jpeg"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 4/Usinagem/2024/8- Agosto/Calibrador30.jpeg"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 4/Usinagem/2024/9- Setembro/Calibrador30.jpeg"] },

            { data: "02/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Calibrador02.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Calibrador03.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Calibrador04.jpeg"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Calibrador8.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Calibrador11.jpg"] },
            { data: "23/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Calibrador23.jpg"] },


            { data: "09/11/024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibrador09.jpg"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibrador18.jpg"] },
            { data: "19/11/2024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibrador19.jpg"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibrador22.jpg"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibrador25.jpg"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibrador26.jpg"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibrador27.jpg"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibrador2.jpg"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibrador03.jpg"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibrador4.jpg"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibrador05.jpg"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibrador6.jpg"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibrador11.jpg"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibrador12.jpeg"] },
            { data: "14/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibrador14.jpeg"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibrador17.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibrador18.jpeg"] },

            { data: "08/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorJaneiro/08.jpeg"] },
            { data: "09/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorJaneiro/09.jpeg"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorJaneiro/13.jpeg"] },
            { data: "22/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorJaneiro/22.jpg"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorJaneiro/23.jpg"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorJaneiro/27.png"] },
            { data: "28/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorJaneiro/28.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorJaneiro/30.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorJaneiro/31.jpg"] },

            { data: "14/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorFevereiro/14.jpg"] },
            { data: "17/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorFevereiro/17.jpg"] },
            { data: "18/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorFevereiro/18.jpg"] },
            { data: "19/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorFevereiro/19.jpg"] },
            { data: "20/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorFevereiro/20.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorFevereiro/21.jpg"] },
            { data: "24/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorFevereiro/24.jpg"] },
            { data: "25/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorFevereiro/25.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorFevereiro/26.jpeg"] },
            { data: "13/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradormarço/13.jpeg"] },
            { data: "14/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradormarço/14.jpeg"] },
            { data: "17/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradormarço/17.jpeg"] },
            { data: "18/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradormarço/18.jpeg"] },
            { data: "19/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradormarço/19.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradormarço/20.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradormarço/21.jpeg"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradormarço/24.jpeg"] },
            { data: "26/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradormarço/26.jpeg"] },
            { data: "27/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradormarço/27.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradormarço/28.jpeg"] },
            { data: "31/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradormarço/31.png"] },
            
            { data: "03/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/03.jpeg"] },
            { data: "04/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/04.jpeg"] },
            { data: "07/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/7.jpeg"] },
            { data: "08/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/08.jpeg"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/09.jpeg"] },
            { data: "10/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/10.jpeg"] },
            { data: "15/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/15.jpeg"] },
            { data: "16/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/16.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/17.jpeg"] },
            { data: "22/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/22.jpeg"] },
            { data: "23/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/23.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/25.jpg"] },
            { data: "28/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/28.jpg"] },
            { data: "29/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/29.jpg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradorabril/30.jpg"] },
            
            { data: "06/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/06.jpg"] },
            { data: "07/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/07.jpg"] },
            { data: "08/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/08.jpg"] },
            { data: "12/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/12.jpg"] },
            { data: "14/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/14.jpg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/15.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/16.jpg"] },
            { data: "19/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/19.jpg"] },
            { data: "20/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/20.jpg"] },
            { data: "21/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/21.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/23.jpg"] },
            { data: "27/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/26.jpg"] },
            { data: "28/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/28.jpg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/CalibradorMAIO/29.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/MAIO/30.jpg"] },
            
            { data: "04/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/04.jpg"] },
            { data: "05/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/05.jpg"] },
            { data: "06/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/06.jpg"] },
            { data: "09/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/09.jpg"] },
            { data: "10/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/10.jpg"] },
            { data: "11/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/11.jpg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/12.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/13.jpg"] },
            { data: "16/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/16.jpg"] },
            { data: "17/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/17.jpg"] },
            { data: "18/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/18.jpg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/23.jpg"] },
            { data: "24/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/24.jpg"] },
            { data: "26/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/26.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/27.jpeg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JUNHO/30.jpg"] },
            { data: "03/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/03.jpg"] },
            { data: "07/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/07.jpg"] },
            { data: "09/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/09.jpg"] },
            { data: "10/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/10.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/11.jpg"] },
            { data: "14/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/14.jpg"] },
            { data: "15/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/15.jpg"] },
            { data: "16/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/16.jpg"] },
            { data: "17/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/17.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/18.jpg"] },
            { data: "21/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/21.jpg"] },
            { data: "23/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/23.jpg"] },
            { data: "24/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/JULHO/24.jpg"] },


            
            // { data: "", captura: [""] },


        ],

        Prensas: [
            { data: "20/12/2023", captura: ["capturas/Unidade 4/Usinagem/12- Dezembro/prensa frequenci20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 4/Usinagem/2024/1- Janeiro/Prensas/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 4/Usinagem/2024/2- Fevereiro/Prensas/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 4/Usinagem/2024/3- Março/Prensas/28.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 4/Usinagem/2024/4- Abril/Prensas/30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 4/Usinagem/2024/5- Maio/Prensas/30.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 4/Usinagem/2024/6- Junho/Prensas/28.jpg"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 4/Usinagem/2024/7- Julho/Prensas/31.jpeg"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 4/Usinagem/2024/8- Agosto/Prensas/30.jpeg"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 4/Usinagem/2024/9- Setembro/Prensas/30.jpeg"] },

            { data: "02/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Prensas/02.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Prensas/03.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Prensas/04.jpeg"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Prensas/8.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Prensas/11.jpg"] },
            { data: "23/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Prensas/23.jpg"] },

            { data: "07/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Prensas/07.jpeg"] },
            { data: "13/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Prensas/13.jpeg"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Prensas/17.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Prensas/18.jpeg"] },

            { data: "07/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/Janeiro/6.jpeg"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/Janeiro/8.jpeg"] },
            { data: "09/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/Janeiro/09.jpeg"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/Janeiro/13.jpeg"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/Janeiro/20.jpg"] },
            { data: "22/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/Janeiro/22.jpg"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/Janeiro/23.jpg"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/Janeiro/27.jpg"] },
            { data: "28/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/Janeiro/28.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/Janeiro/30.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/Janeiro/31.jpg"] },

            { data: "07/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/fevereiro/07.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/fevereiro/15.jpg"] },
            { data: "17/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/fevereiro/17.jpg"] },
            { data: "18/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/fevereiro/18.jpg"] },
            { data: "19/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/fevereiro/19.jpg"] },
            { data: "20/02/20205", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/fevereiro/20.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/fevereiro/21.jpg"] },
            { data: "24/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/fevereiro/24.jpg"] },
            { data: "25/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/fevereiro/25.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/fevereiro/26.jpeg"] },
            { data: "13/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MARÇO/13.jpeg"] },
            { data: "14/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MARÇO/14.jpeg"] },
            { data: "17/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MARÇO/17.jpeg"] },
            { data: "18/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MARÇO/18.jpeg"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MARÇO/24.jpeg"] },
            { data: "26/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MARÇO/26.jpeg"] },
            { data: "27/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MARÇO/27.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MARÇO/28.jpeg"] },
            { data: "31/03/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MARÇO/31.jpeg"] },

            { data: "03/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/ABRIL/03.jpeg"] },
            { data: "04/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/ABRIL/04.jpeg"] },
            { data: "07/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/ABRIL/07.jpeg"] },
            { data: "08/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/ABRIL/08.jpeg"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/ABRIL/09.jpeg"] },
            { data: "10/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/ABRIL/10.jpeg"] },
            { data: "15/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/ABRIL/15.jpeg"] },
            { data: "17/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/ABRIL/17.jpeg"] },
            { data: "25/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/ABRIL/25.jpg"] },
            { data: "28/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/ABRIL/28.jpg"] },
            { data: "29/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/ABRIL/29.jpg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/ABRIL/30.jpg"] },
           
            { data: "06/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/6.jpg"] },
            { data: "07/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/07.jpg"] },
            { data: "08/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/08.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/09.jpg"] },
            { data: "12/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/12.jpg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/15.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/16.jpg"] },
            { data: "19/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/19.jpg"] },
            { data: "20/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/20.jpg"] },
            { data: "21/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/21.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/23.jpg"] },
            { data: "27/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/27.jpg"] },
            { data: "28/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/28.jpg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/29.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/MAIO/30.jpg"] },
            
            { data: "04/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/04.jpg"] },
            { data: "05/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/5.jpg"] },
            { data: "06/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/06.jpg"] },
            { data: "09/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/09.jpg"] },
            { data: "10/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/10.jpg"] },
            { data: "11/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/11.jpg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/12.jpg"] }, 
            { data: "13/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/13.jpg"] },
            { data: "16/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/16.jpg"] },
            { data: "18/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/18.jpg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/23.jpg"] },
            { data: "24/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/24.jpg"] },
            { data: "27/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/27.jpeg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JUNHO/30.jpg"] },
            { data: "03/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JULHO/03.jpg"] },
            { data: "07/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JULHO/07.jpg"] },
            { data: "09/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JULHO/08.jpg"] },
            { data: "10/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JULHO/10.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JULHO/11.jpg"] },
            { data: "14/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JULHO/14.jpg"] },
            { data: "15/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JULHO/15.jpg"] },
            { data: "16/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JULHO/16.jpg"] },
            { data: "17/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JULHO/17.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JULHO/18.jpg"] },
            { data: "21/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JULHO/21.jpg"] },
            { data: "24/07/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Prensas/JULHO/24.jpg"] },

            
            

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
            
        

            
            // { data: "", captura: [""] },




        ],

        Prensas: [

            { data: "03/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/03 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/03 italpresse.jpg"] },
            { data: "04/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/4 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/4 italpresse.jpg"] },
            { data: "05/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/5 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/5 italpresse.jpg"] },
            { data: "06/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/6 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/6 italpresse.jpg"] },
            { data: "07/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/7 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/7 italpresse.jpg"] },
            { data: "08/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/8 italpresse.jpg"] },
            { data: "10/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/10 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/10 italpresse.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/11 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/11 italpresse.jpg"] },
            { data: "12/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/12 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/12 italpresse.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/13 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/13 italpresse.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/14 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/14 italpresse.jpg"] },
            { data: "15/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/15 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/15 italpresse.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/17 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/17 italpresse.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/18 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/18 italpresse.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/19 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/19 italpresse.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/20 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/20 italpresse.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/21 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/21 italpresse.jpg"] },
            { data: "24/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/24 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/24 italpresse.jpg"] },
            { data: "27/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/27 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/27 italpresse.jpg"] },

            { data: "01/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/01 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/01 italpresse.jpg"] },
            { data: "02/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/02 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/02 italpresse.jpg"] },
            { data: "04/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/04 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/04 italpresse.jpg"] },
            { data: "05/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/05 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/05 italpresse.jpg"] },
            { data: "15/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/15 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/15 italpresse.jpg"] },
            { data: "18/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/18 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/18  italpresse.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/19 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/19 italpresse.jpg"] },
            { data: "22/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/22 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/22 italpresse.jpg"] },
            { data: "23/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/23 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/23 italpresse.jpg"] },
            { data: "24/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/24 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/24  italpresse.jpg"] },
            { data: "25/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/25 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/25  italpresse.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/26 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/26 italpresse.jpg"] },
            { data: "29/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/29 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/29 ITALPRESSE.jpeg"] },
            { data: "30/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/30 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/30 ITALPRESSE.jpeg"] },
            { data: "31/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/31 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/31 ITALPRESSE.jpeg"] },

            { data: "01/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/01 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/01 italpresse.jpeg"] },
            { data: "02/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/02 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/02 italpresse.jpeg"] },
            { data: "05/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/05 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/05 italpresse.jpeg"] },
            { data: "06/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/06 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/06 italpresse.jpeg"] },
            { data: "07/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/07 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/07 italpresse.jpeg"] },
            { data: "08/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/08 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/08 italpresse.jpeg"] },
            { data: "09/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/09 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/09 italpresse.jpeg"] },
            { data: "10/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/10 italpresse.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/12 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/12 italpresse.jpeg"] },
            { data: "13/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/13 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/13 italpresse.jpeg"] },
            { data: "14/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/14 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/14 italpresse.jpeg"] },
            { data: "15/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/15 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/15 italpresse.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/16 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/16 italpresse.jpeg"] },
            { data: "19/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/19 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/19 italpresse.jpeg"] },
            { data: "20/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/20 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/20 italpresse.jpeg"] },
            { data: "21/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/21 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/21 italpresse.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/22 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/22 italpresse.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/23 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/23 italpresse.jpeg"] },
            { data: "26/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/26 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/26 italpresse.jpeg"] },
            { data: "28/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/28 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/28 italpresse.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/29 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/29 italpresse.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/30 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/30 italpresse.jpeg"] },
            { data: "31/08/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/8- Agosto/31 maquimovel.jpeg", "capturas/Unidade 4/Tempo_parado/2024/8- Agosto/31 italpresse.jpeg"] },

            { data: "02/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/02 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/02 ITALPRESSE.jpeg"] },
            { data: "03/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/02 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/02 ITALPRESSE.jpeg"] },
            { data: "04/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/04 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/04 ITALPRESSE.jpeg"] },
            { data: "05/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/05 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/05 ITALPRESSE.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/06 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/06 ITALPRESSE.jpeg"] },
            { data: "07/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/07 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/07 ITALPRESSE.jpeg"] },
            { data: "09/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/09 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/09 ITALPRESSE.jpeg"] },
            { data: "10/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/10 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/10 ITALPRESSE.jpeg"] },
            { data: "11/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/11 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/11 ITALPRESSE.jpeg"] },
            { data: "12/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/12 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/12 ITALPRESSE.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/13 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/13 ITALPRESSE.jpeg"] },
            { data: "14/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/14  MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/14  ITALPRESSE.jpeg"] },
            { data: "16/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/16 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/16 ITALPRESSE.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/17 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/17 ITALPRESSE.jpeg"] },
            { data: "18/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/18 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/18 ITALPRESSE.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/19 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/19 ITALPRESSE.jpeg"] },
            { data: "20/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/20 MAQUIMOVEL.jpeg"] },
            { data: "23/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/23 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/23 ITALPRESSE.jpeg"] },
            { data: "24/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/24 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/24 ITALPRESSE.jpeg"] },
            { data: "25/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/25 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/25 ITALPRESSE.jpeg"] },
            { data: "26/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/26 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/26 ITALPRESSE.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/27 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/27 ITALPRESSE.jpeg"] },
            { data: "28/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/28 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/28 ITALPRESSE.jpeg"] },
            { data: "30/09/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/9- Setembro/30 MAQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/9- Setembro/30 ITALPRESSE.jpeg"] },

            { data: "01/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/01 MÁQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/01 ITALPRESSE.jpeg"] },
            { data: "02/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/02 MÁQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/02 ITALPRESSE.jpeg"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/08 MÁQUIMOVEL.jpeg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/08 ITALPRESSE.jpeg"] },
            { data: "09/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/09 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/09 italpresse.jpg"] },
            { data: "10/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/10 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/10 italpresse.jpg"] },
            { data: "11/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/11 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/11 italpresse.jpg"] },
            { data: "14/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/14 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/14 italpresse.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/15 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/15 italpresse.jpg"] },
            { data: "16/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/16maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/16 italpresse.jpg"] },
            { data: "17/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/17 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/17 italpresse.jpg"] },
            { data: "18/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/18 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/18 italpresse.jpg"] },
            { data: "19/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/19 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/19 italpresse.jpg"] },
            { data: "21/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/21 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/22 italpresse.jpg"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/22 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/22 italpresse.jpg"] },
            { data: "23/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/10-Outubro/23 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/10-Outubro/23 italpresse.jpg"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/6 maq.jpg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/6 italpresse.jpg"] },

            { data: "01/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/01 mq.jpg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/01 italpresse.jpg"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/2 maq.jpg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/2 italpresse.jpg"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/03 maq.jpg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/3 italpresse.jpg"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/04 maq.jpg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/4 italpresse.jpg"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/6 maq.jpg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/6 italpresse.jpg"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/6 maq.jpg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/6 italpresse.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/7maq.jpg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/7 italpresse.jpg"] },
            { data: "08/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/8maq.jpg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/09 ital.jpeg"] },
            { data: "09/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/09 ital.jpeg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/09 maq.jpeg"] },
            { data: "10/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/10 ital.jpeg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/10 maq.jpeg"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/11 ital.jpeg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/11 maq.jpeg"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/12 ital.jpeg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/12 maq.jpeg"] },
            { data: "13/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/13 ital.jpeg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/13 maq.jpeg"] },
            { data: "14/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/14 ital.jpeg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/14 maq.jpeg"] },
            { data: "15/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/15 ital.jpeg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/15 MAQ.jpeg"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/16 ITALP.jpeg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/16 MAQ.jpeg"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/17 ITALP.jpeg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/17 MAQ.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/18MAQ.jpeg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/18 ital.jpeg"] },
            { data: "19/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/19 maq.jpeg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/19 ITALP.jpeg"] },
            { data: "20/12/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/20 maq.jpeg", "capturas/Unidade 4/Tempo_parado/2024/12-Dezembro/20 ITALP.jpeg"] },

            { data: "06/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAQ 06.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ITAL 06.jpeg"] },
            { data: "07/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAQ  07.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ITAL 07.jpeg"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAQ 08.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ITAL 08.jpeg"] },
            { data: "09/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ITAL 09.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MAQ 09.jpeg"] },
            { data: "10/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAQ  10.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ITAL 10.jpeg"] },
            { data: "11/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAQ 11.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ITAL 11.jpeg"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/13.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ITAL 13.jpeg"] },
            { data: "23/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/23 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2025/23 itlpresse.jpg"] },
            { data: "27/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/27 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2025/27 itlpresse.jpg"] },
            { data: "28/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/28 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2025/28 itlpresse.jpg"] },
            { data: "29/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/29 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2025/29 itlpresse.jpg"] },
            { data: "30/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/30 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2025/30 itlpresse.jpg"] },
            { data: "31/01/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/31italpresse.jpg", "capturas/Unidade 4/Tempo_parado/2025/31 maquimovel.jpg"] },

            { data: "03/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/03 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/03 ITAL.jpg"] },
            { data: "04/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/04 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/04 ITAL.jpg"] },
            { data: "05/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/05 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/05 ITAL.jpg"] },
            { data: "06/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/06 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/06 ITAL.jpg"] },
            { data: "07/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/07 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/07 ITAL.jpg"] },
            { data: "10/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/10 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/10 ITAL.jpg"] },
            { data: "11/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/11 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/11  ITAL.jpg"] },
            { data: "12/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/12 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/12  ITAL.jpg"] },
            { data: "13/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/13 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/13  ITAL.jpg"] },
            { data: "14/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/14 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/14 ITAL.jpg"] },
            { data: "15/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/15 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/15 ITAL.jpg"] },
            { data: "17/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/17 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/17 ITAL.jpg"] },
            { data: "18/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/18 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/18 ITAL.jpg"] },
            { data: "19/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/19 ITAL.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/19 MAQ.jpg"] },
            { data: "20/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/20 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/20 ITAL.jpg"] },
            { data: "21/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/21 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/21 ITAL.jpg"] },
            { data: "24/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/24 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/24 ITAL.jpg"] },
            { data: "25/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/25 ITAL.jpg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/25 MAQ.jpg"] },
            { data: "26/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/MAQ 26.jpeg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/ITALP 26.jpeg"] },
            { data: "27/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/MAQ 27.jpeg", "capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/ITALP 27.jpeg"] },
            { data: "28/02/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/FEVEREIRO/MAQ 28.jpeg"] },
            { data: "11/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 11.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITAL 11.jpeg"] },
            { data: "12/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 12.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP12.jpeg"] },
            { data: "13/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 13.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP13.jpeg"] },
            { data: "14/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 14.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP14.jpeg"] },
            { data: "15/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 15.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP15.jpeg"] },
            { data: "18/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 18.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP 18.jpeg"] },
            { data: "19/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 19.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP19.jpeg"] },
            { data: "20/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 20.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP20.jpeg"] },
            { data: "21/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 21.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP21.jpeg"] },
            { data: "22/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 22.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP22.jpeg"] },
            { data: "24/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 24.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP24.jpeg"] },
            { data: "25/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 25.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP25.jpeg"] },
            { data: "26/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 26.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP26.jpeg"] },
            { data: "27/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 27.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP27.jpeg"] },
            { data: "28/03/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MARÇO/MAQ 28.jpeg", "capturas/Unidade 4/Tempo_parado/2025/MARÇO/ITALP28.jpeg"] },
            { data: "31/03/2025", captura: ["capturasUnidade 4/Tempo_parado/2025/MARÇO/MAQ 31.jpeg", "capturasUnidade 4/Tempo_parado/2025/MARÇO/ITALP31.jpeg"] },
           
            { data: "01/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 01.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 01.jpeg"] },
            { data: "02/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 02.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 02.jpeg"] },
            { data: "03/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 03.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 03.jpeg"] },
            { data: "04/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 04.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 04.jpeg"] },
            { data: "07/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 07.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 07.jpeg"] },
            { data: "08/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 08.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 08.jpeg"] },
            { data: "09/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 09.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 09.jpeg"] },
            { data: "10/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 10.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 10.jpeg"] },
            { data: "11/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 11.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 11.jpeg"] },
            { data: "12/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 12.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 12.jpeg"] },
            { data: "14/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 14.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 14.jpeg"] },
            { data: "15/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 15.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 15.jpeg"] },
            { data: "16/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/16 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/16 ITAL.jpg"] },
            { data: "17/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 17.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 17.jpeg"] },
            { data: "22/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/MAQ 22.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/ITALP 23.jpeg"] },
            { data: "23/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/23 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/23 ITAL.jpg"] },
            { data: "24/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/24 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/24 ITAL.jpg"] },
            { data: "25/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/25 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/25 ITAL.jpg"] },
            { data: "28/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/28 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/28 ITAL.jpg"] },
            { data: "29/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/29 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/29 ITAL.jpg"] },
            { data: "30/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/ABRIL/30 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/ABRIL/30 ITAL.jpg"] },
            { data: "01/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/01 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/01 ITAL.jpg"] },
            { data: "05/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/05 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/05 ITAL.jpg"] },
            { data: "06/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/06 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/06 ITAL.jpg"] },
            { data: "07/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/07 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/07 ITAL.jpg"] },
            { data: "08/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/08 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/08 ITAL.jpg"] },
            { data: "09/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/09 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/09 ITAL.jpg"] },
            { data: "12/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/12 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/12 ITAL.jpg"] },
            { data: "13/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/13 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/13 ITAL.jpg"] },
            { data: "14/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/14 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/14 ITAL.jpg"] },
            { data: "15/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/15 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/15 ITAL.jpg"] },
            { data: "16/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/16 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/16 ITAL.jpg"] },
            { data: "17/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/17 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/17 ITAL.jpg"] },
            { data: "19/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/19 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/19 ITAL.jpg"] },
            { data: "20/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/20 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/20 ITAL.jpg"] },
            { data: "21/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/22 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/22 ITAL.jpg"] },
            { data: "22/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/22 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/22 ITAL.jpg"] },
            { data: "23/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/23 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/23  ITAL.jpg"] },
            { data: "26/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/26 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/26 ITAL.jpg"] },
            { data: "27/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/27 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/27 ITAL.jpg"] },
            { data: "28/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/28 ITAL.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/28 MAQ.jpg"] },
            { data: "29/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/29 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/29 ITAL.jpg"] },
            { data: "30/05/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAIO/30 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/MAIO/30 ITAL.jpg"] },

            { data: "02/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/02 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/02 ITALP.jpg"] },
            { data: "03/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/03 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/03 ITALP.jpg"] },
            { data: "04/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/04 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/04 ITALP.jpg"] },
            { data: "05/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/05 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/05 ITALP.jpg"] },
            { data: "06/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/06 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/06 ITALP.jpg"] },
            { data: "09/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/09 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/09 ITALP.jpg"] },
            { data: "10/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/10 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/10 ITALP.jpg"] },
            { data: "11/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/11 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/11 ITALP.jpg"] },
            { data: "12/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/12 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/12 ITALP.jpg"] },
            { data: "13/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/13 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/13 ITALP.jpg"] },
            { data: "16/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/16 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/16 ITALP.jpg"] },
            { data: "17/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/17 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/17 ITALP.jpg"] },
            { data: "18/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/18 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/18 ITALP.jpg"] },
            { data: "23/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/23 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/23 ITALP.jpg"] },
            { data: "24/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/24 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/24 ITALP.jpg"] },
            { data: "25/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/25 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/25 ITALP.jpg"] },
            { data: "26/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/26 MAQ", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/26 ITALP"] },
            { data: "27/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/27 MAQ.jpeg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/27 ITALP.jpeg"] },
            { data: "30/06/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JUNHO/30 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JUNHO/30 ITALP.jpg"] },
            
            { data: "01/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/01 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/01 ITALP.jpg"] },
            { data: "02/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/02 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/02 ITALP.jpg"] },
            { data: "03/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/03 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/03 ITALP.jpg"] },
            { data: "07/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/07 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/07  ITALP.jpg"] },
            { data: "08/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/08 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/08  ITALP.jpg"] },
            { data: "09/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/09  ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/09 MAQ.jpg"] },
            { data: "10/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/10MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/10 ITALP.jpg"] },
            { data: "11/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/11 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/11 ITALP.jpg"] },
            { data: "14/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/MAQ 11.jpeg", "capturas/Unidade 4/Tempo_parado/2025/ITAL 11.jpeg"] },
            { data: "15/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/15 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/15  ITALP.jpg"] },
            { data: "16/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/16 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/16 ITALP.jpg"] },
            { data: "17/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/17  ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/17 MAQ.jpg"] },
            { data: "18/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/18 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/18 ITALP.jpg"] },
            { data: "18/04/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/19 MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/19  ITALP.jpg"] },
            { data: "21/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/21  MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/21  ITALP.jpg"] },
            { data: "23/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/23  MAQ.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/23 ITALP.jpg"] },
            { data: "24/07/2025", captura: ["capturas/Unidade 4/Tempo_parado/2025/JULHO/24  ITALP.jpg", "capturas/Unidade 4/Tempo_parado/2025/JULHO/24  MAQ.jpg"] },



            
            // { data: "", captura: ["", ""] },


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




            // { data: "", captura: ["", "", "", "", ""] },


        ],

        exp1: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/11- Novembro/27.png", "capturas/Retrabalhos/unidade 1/Expedição/11- Novembro/27 GRAFICO.png"] },

            { data: "07/12/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/04-12.png", "capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/07-12.png"] },
            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/SEMANA 04-12 À 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/SEMANA 11-12 À 15-12.png", "capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/SEMANA 11-12 À 15-12 GRAFI.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/18-12 À 20-12.png", "capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/18-12 À 20-12 GRAFICO.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/1- Janeiro/09-01 À 12-01.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/1- Janeiro/09-01 À 12-01 GRÁFICO.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/1- Janeiro/15-01 À 19-01.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/1- Janeiro/15-01 À 19-01 GRÁFICO.png"] },
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

            

            
            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
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


            // { data: "", captura: [""] },
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
