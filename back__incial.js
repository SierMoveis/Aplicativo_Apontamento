
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
            link.addEventListener('click', function(event) {
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
            { data: "12/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/12.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/12.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/16.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/14.jpg"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/18.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/18.jpg"] },
            { data: "20/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/20.jpg", "capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/20.jpg"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Expedição/Embalagem/21.jpg" ,"capturas/Unidade 1/2024/11-Novembro/Expedição/MetasTv/21.jpg"] },
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
           ,
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


            // { data: "", captura: ["", "", ""] },
            // { data: "", captura: ["", "", ""] },
        ],

        Usinagem: [
            { data: "30/11/2023", captura: ["capturas/Unidade 1/11- Novembro/Usinagem/Filetação/30.png", "capturas/Unidade 1/11- Novembro/Usinagem/Tupia/30.png"] },
            
            { data: "19/12/2023", captura: ["capturas/Unidade 1/12- Dezembro/Usinagem/Filetação/19.png", "capturas/Unidade 1/12- Dezembro/Usinagem/Tupia/11.png"] },
                                             
            { data: "31/01/2024", captura: ["capturas/Unidade 1/2024/1- Janeiro/Usinagem/Filetação/31.png", "capturas/Unidade 1/2024/1- Janeiro/Usinagem/Tupia/31.png"] },
            
            { data: "29/02/2024", captura: ["capturas/Unidade 1/2024/2- Fevereiro/Usinagem/Filetação/29.png", "capturas/Unidade 1/2024/2- Fevereiro/Usinagem/Tupia/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 1/2024/3- Março/Usinagem/Filetação/28.jpg", "capturas/Unidade 1/2024/3- Março/Usinagem/Tupia/25.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 1/2024/4- Abril/Usinagem/Filetação/30.jpeg", "capturas/Unidade 1/2024/4- Abril/Usinagem/Tupia/30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/Usinagem/Filetação/30.jpg", "capturas/Unidade 1/2024/5- Maio/Usinagem/Tupia/29.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 1/2024/6- Junho/Usinagem/Filetação/28.jpg", "capturas/Unidade 1/2024/6- Junho/Usinagem/Tupia/28.jpg"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Filetação/31.jpeg", "capturas/Unidade 1/2024/7- Julho/Usinagem/Tupia/31.jpeg"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 1/2024/8- Agosto/Usinagem/Filetação/30.jpeg"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 1/2024/9- Setembro/Usinagem/Filetação/30.jpeg", "capturas/Unidade 1/2024/9- Setembro/Usinagem/Tupia/30.jpeg"] },
           
            { data: "02/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/2.jpeg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupia/2.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/3.jpeg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupia/3.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/4.jpeg"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/8.jpeg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupia/8.jpeg"] },
            { data: "09/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/9.jpeg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupia/9.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/11.jpg"] },
            { data: "15/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/15.jpg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupia/15.jpg"] },
            { data: "18/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/18.jpg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupia/18.jpg"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/22.jpg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupia/22.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupia/25.jpg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/25.jpg"] },
            { data: "29/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupia/29.jpg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/29.jpg"] },
            { data: "29/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/30.jpg"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 1/2024/10- Outubro/Usinagem/Filetação/31.jpg", "capturas/Unidade 1/2024/10- Outubro/Usinagem/Tupia/31.jpg"] },
            
            { data: "04/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/04.jpg"] },
            { data: "05/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupia/5.jpg"] },
            { data: "07/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/7.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupia/7.jpg"] },
            { data: "08/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/8.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupia/8.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/9.jpg"] },
            { data: "11/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/11.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupia/11.jpg"] },
            { data: "12/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/12.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/14.jpg"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupia/18.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/18.jpg"] },
            { data: "20/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/20.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupia/20.jpg"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupia/21.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/21.jpg"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/22.jpg" ,"capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupia/22.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/23.jpg"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/23.jpg", "NÃO ENTREGARAM"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/26.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupia/26.jpg"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Montagem/27.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupia/27.jpg"] },
            { data: "28/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/28.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupia/28.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Unidade 1/2024/11-Novembro/Usinagem/Filetação/30.jpg", "capturas/Unidade 1/2024/11-Novembro/Usinagem/Tupia/30.jpg"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/02.jpg", "capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Tupia/02.jpg"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/3.jpg","capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Tupia/3.jpg"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/4.jpg","capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Tupia/04.jpg"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/05.jpg "] },
            { data: "06/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/06.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/7.jpg"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/11.jpg"] },
            { data: "13/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/13.jpeg","NÃO ENTREGARAM"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/16.jpeg"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 1/2024/12-DEZEMBRO/Usinagem/Filetação/17.jpeg"] },
           
            { data: "07/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/07.jpeg",""] },
            { data: "08/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/8.jpeg",""] },
            { data: "09/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/9.jpeg",""] },
            { data: "10/01/2025", captura: ["","","capturas/Unidade 1/2025/Usinagem/Cnc/10.jpeg"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/13.jpeg",""] },
            { data: "15/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Tupia/15.jpeg","capturas/Unidade 1/2025/Usinagem/Filetação/15.jpeg"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 1/2025/Usinagem/Filetação/20.jpg",""] },

            // { data: "", captura: ["",""] },
        
            
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


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],
    },
    
    UA2: {
        Estofaria: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Estofaria/11- Novembro/.Estofadores/Estofadores_30_pt1.png", "capturas/Unidade 2/Estofaria/11- Novembro/.Estofadores/Estofadores_30_pt2.png", "capturas/Unidade 2/Estofaria/11- Novembro/Colagem/Colagem 30-11.png", "capturas/Unidade 2/Estofaria/11- Novembro/Costura/Costura 30-11.png", "capturas/Unidade 2/Estofaria/11- Novembro/Percinta-Montagem/Percinta-Montagem 30-11.png", "capturas/Unidade 2/Estofaria/11- Novembro/Bordadeira/Bordadeira 30-11.png"] },
            
            { data: "20/12/2023", captura: ["capturas/Unidade 2/Estofaria/12- Dezembro/.Estofadores/20-pt1.png", "capturas/Unidade 2/Estofaria/12- Dezembro/.Estofadores/20-pt2.png", "capturas/Unidade 2/Estofaria/12- Dezembro/Coladores/20.png", "capturas/Unidade 2/Estofaria/12- Dezembro/Costura/20.png", "capturas/Unidade 2/Estofaria/12- Dezembro/Perc_Mont/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 2/Estofaria/2024/1- Janeiro/.Estofadores/31-pt-1.png", "capturas/Unidade 2/Estofaria/2024/1- Janeiro/.Estofadores/31-pt-2.png", "capturas/Unidade 2/Estofaria/2024/1- Janeiro/Colagem/31.png", "capturas/Unidade 2/Estofaria/2024/1- Janeiro/Costura/31.png", "capturas/Unidade 2/Estofaria/2024/1- Janeiro/Percinta/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 2/Estofaria/2024/2- Fevereiro/.Estofadores/29-pt1.png", "capturas/Unidade 2/Estofaria/2024/2- Fevereiro/.Estofadores/29-pt2.png", "capturas/Unidade 2/Estofaria/2024/2- Fevereiro/Colagem/29.png", "capturas/Unidade 2/Estofaria/2024/2- Fevereiro/Costura/29.png", "capturas/Unidade 2/Estofaria/2024/2- Fevereiro/Percinta/29.png", "capturas/Unidade 2/Estofaria/2024/2- Fevereiro/Bordadeira/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 2/Estofaria/2024/3- Março/.Estofadores/28-pt1.png", "capturas/Unidade 2/Estofaria/2024/3- Março/.Estofadores/28-pt2.png", "capturas/Unidade 2/Estofaria/2024/3- Março/Colagem/28.png", "capturas/Unidade 2/Estofaria/2024/3- Março/Costura/28.png", "capturas/Unidade 2/Estofaria/2024/3- Março/Percinta/28.png", "capturas/Unidade 2/Estofaria/2024/3- Março/Bordadeira/28.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 2/Estofaria/2024/4- Abril/.Estofadores/30-pt1.png", "capturas/Unidade 2/Estofaria/2024/4- Abril/.Estofadores/30-pt2.png", "capturas/Unidade 2/Estofaria/2024/4- Abril/Colagem/30.png", "capturas/Unidade 2/Estofaria/2024/4- Abril/Costura/30.png", "capturas/Unidade 2/Estofaria/2024/4- Abril/Percinta/30.png", "capturas/Unidade 2/Estofaria/2024/4- Abril/Bordadeira/30.png"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 2/Estofaria/2024/5- Maio/.Estofadores/30-pt1.png", "capturas/Unidade 2/Estofaria/2024/5- Maio/.Estofadores/30-pt2.png", "capturas/Unidade 2/Estofaria/2024/5- Maio/Colagem/30.png", "capturas/Unidade 2/Estofaria/2024/5- Maio/Costura/30.png", "capturas/Unidade 2/Estofaria/2024/5- Maio/Percinta/30.png", "capturas/Unidade 2/Estofaria/2024/5- Maio/Bordadeira/30.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 2/Estofaria/2024/6- Junho/.Estofadores/28-pt1.png", "capturas/Unidade 2/Estofaria/2024/6- Junho/.Estofadores/28-pt2.png", "capturas/Unidade 2/Estofaria/2024/6- Junho/Colagem/28.png", "capturas/Unidade 2/Estofaria/2024/6- Junho/Costura/28.png", "capturas/Unidade 2/Estofaria/2024/6- Junho/Percinta/28.png", "capturas/Unidade 2/Estofaria/2024/6- Junho/zBordadeira/28.png"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/31-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/31-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/31.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/31.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/31.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/zBordadeira/31.png"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 2/Estofaria/2024/8- Agosto/.Estofadores/30-pt1.png", "capturas/Unidade 2/Estofaria/2024/8- Agosto/.Estofadores/30-pt2.png", "capturas/Unidade 2/Estofaria/2024/8- Agosto/Colagem/30.png", "capturas/Unidade 2/Estofaria/2024/8- Agosto/Costura/30.png", "capturas/Unidade 2/Estofaria/2024/8- Agosto/Percinta/30.png"] },
            
            { data: "30/09/2024", captura: ["capturas/Unidade 2/Estofaria/2024/9- Setembro/.Estofadores/30-pt1.png", "capturas/Unidade 2/Estofaria/2024/9- Setembro/.Estofadores/30-pt2.png", "capturas/Unidade 2/Estofaria/2024/9- Setembro/Colagem/30.png", "capturas/Unidade 2/Estofaria/2024/9- Setembro/Costura/30.png", "capturas/Unidade 2/Estofaria/2024/9- Setembro/Percinta/30.png"] },
            
            { data: "02/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/2-pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/.Estofadores/2-pt2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/zBordadeira/2.png"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/3-pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/3.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/3.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/3.png"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/4-pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/.Estofadores/4-pt2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/4.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/5.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/4.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/4.png"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/8-pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/8.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/8.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/8.png"] },
            { data: "10/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/10pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/10.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/10.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/10.png"] },
            { data: "15/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/15pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/15pt2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/15.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/15.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/15.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/zBordadeira/15.png"] },
            { data: "16/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/16pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/16pt2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/16.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/16.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/16.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/zBordadeira/16.png"] },
            { data: "17/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/17pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/17pt2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/17.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/17.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/17.png"] },
            { data: "19/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/19pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/19pt2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/19.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/19.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/19.png"] },
            { data: "21/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/21pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/21pt2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/21.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/21.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/21.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/zBordadeira/21.png"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/22pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/22pt2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/22.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/22.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/22.png"] },
            { data: "28/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/28pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/28pt2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/28.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/28.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/28.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/zBordadeira/28.png"] },
            { data: "30/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/30-pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/30-pt2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/30.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/30.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/30.png"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/31-pt1.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Estofadores/31-pt2.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Colagem/31.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Costura/31.png", "capturas/Unidade 2/Estofaria/2024/10- Outubro/Percinta/31.png"] },

            { data: "05/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/5-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/5-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/5.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/5.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/5.png"] },
            { data: "06/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/6-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/6-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/6.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/6.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/6.png"] },
            { data: "11/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/11.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/11-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/11-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/11.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/11.png"] },
            { data: "14/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/14-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/14-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/14.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/14.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/14.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/zBordadeira/14.png"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/18-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/18-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/18.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/18.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/18.png"] },
            { data: "19/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/19-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/19-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/19.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/19.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/19.png"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/21-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/21-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/21.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/21.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/21.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/zBordadeira/21.png"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/22-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/22-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/22.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/22.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/22.png"] },
            { data: "23/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/23-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/23-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/23.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/23.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/23.png"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/25-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/25-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/25.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/25.png", "", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/25.png"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/26-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/26-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/26.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/26.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/26.png"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/27-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/27-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/27.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/27.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/27.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/zBordadeira/26.png"] },
            { data: "28/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/28-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/28-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/28.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/28.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/28.png"] },
            { data: "29/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/29-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/29-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/29.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/29.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/29.png"] },
            { data: "30/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/30-pt1.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Estofadores/30-pt2.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Colagem/30.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Costura/30.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/Percinta/30.png"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/02-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/02-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/02.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/02.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/02.png"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/03-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/03-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/03.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/03.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/03.png"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/04-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/04-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/04.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/04.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/04.png"] },
            { data: "05/10/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/05-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/05-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/05.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/05.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/05.png"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/06-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/06-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/06.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/06.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/06.png"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/07-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/07-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/07.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/07.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/07.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/zBordadeira/06.png"] },
            { data: "09/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/09-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/09-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/09.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/09.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/09.png"] },
            { data: "10/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/10-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/10-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/10.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/10.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/10.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/zBordadeira/10.png"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/11-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/11-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/11.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/11.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/11.png"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/12-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/12-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/12.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/12.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/12.png"] },
            { data: "13/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/13-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/13-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/13.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/13.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/13.png"] },
            { data: "14/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/14-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/14-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/14.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/13.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/14.png"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/16-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/16-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/16.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/16.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/16.png"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/17-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/17-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/17.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/17.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/17.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/zBordadeira/17.png"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/18-pt1.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Estofadores/18-pt2.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Colagem/18.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Costura/18.png", "capturas/Unidade 2/Estofaria/2024/12-Dezembro/Percinta/18.png"] },

            { data: "06/01/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/06-pt1.png", "capturas/Unidade 2/Estofaria/2025/Estofaria/06-pt2.png", "capturas/Unidade 2/Estofaria/2025/Colagem/06.png", "capturas/Unidade 2/Estofaria/2025/Costura/06.png", "capturas/Unidade 2/Estofaria/2025/Percinta/06.png"] },
            { data: "07/12/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/07-pt1.png", "capturas/Unidade 2/Estofaria/2025/Estofaria/07-pt2.png", "capturas/Unidade 2/Estofaria/2025/Bordadeira/06.png", "capturas/Unidade 2/Estofaria/2025/Colagem/07.png", "capturas/Unidade 2/Estofaria/2025/Costura/07.png", "capturas/Unidade 2/Estofaria/2025/Percinta/07.png"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/08-pt1.png", "capturas/Unidade 2/Estofaria/2025/Estofaria/08-pt2.png", "capturas/Unidade 2/Estofaria/2025/Colagem/08.png", "capturas/Unidade 2/Estofaria/2025/Costura/08.png", "capturas/Unidade 2/Estofaria/2025/Percinta/08.png"] },
            { data: "09/01/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/09-pt1.png", "capturas/Unidade 2/Estofaria/2025/Estofaria/09-pt2.png", "capturas/Unidade 2/Estofaria/2025/Colagem/09.png", "capturas/Unidade 2/Estofaria/2025/Costura/09.png", "capturas/Unidade 2/Estofaria/2025/Percinta/09.png"] },
            { data: "10/01/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/10-pt1.png", "capturas/Unidade 2/Estofaria/2025/Estofaria/10-pt2.png", "capturas/Unidade 2/Estofaria/2025/Colagem/10.png", "capturas/Unidade 2/Estofaria/2025/Costura/10.png", "capturas/Unidade 2/Estofaria/2025/Percinta/10.png"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/13-pt1.png", "capturas/Unidade 2/Estofaria/2025/Estofaria/13-pt2.png", "capturas/Unidade 2/Estofaria/2025/Bordadeira/13.png", "capturas/Unidade 2/Estofaria/2025/Colagem/13.png", "capturas/Unidade 2/Estofaria/2025/Costura/13.png", "capturas/Unidade 2/Estofaria/2025/Percinta/13.png"] },
            { data: "14/01/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/14-pt1.png", "capturas/Unidade 2/Estofaria/2025/Estofaria/14-pt2.png", "capturas/Unidade 2/Estofaria/2025/Colagem/14.png", "capturas/Unidade 2/Estofaria/2025/Costura/14.png", "capturas/Unidade 2/Estofaria/2025/Percinta/14.png"] },
            { data: "15/01/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/15-pt1.png", "capturas/Unidade 2/Estofaria/2025/Estofaria/15-pt2.png", "capturas/Unidade 2/Estofaria/2025/Colagem/15.png", "capturas/Unidade 2/Estofaria/2025/Costura/15.png", "capturas/Unidade 2/Estofaria/2025/Percinta/15.png"] },
            { data: "16/01/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/16-pt1.png", "capturas/Unidade 2/Estofaria/2025/Estofaria/16-pt2.png", "capturas/Unidade 2/Estofaria/2025/Bordadeira/15.png", "capturas/Unidade 2/Estofaria/2025/Colagem/16.png", "capturas/Unidade 2/Estofaria/2025/Costura/16.png", "capturas/Unidade 2/Estofaria/2025/Percinta/16.png"] },
            { data: "17/01/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/17-pt1.png", "capturas/Unidade 2/Estofaria/2025/Estofaria/17-pt2.png", "capturas/Unidade 2/Estofaria/2025/Colagem/17.png", "capturas/Unidade 2/Estofaria/2025/Costura/17.png", "capturas/Unidade 2/Estofaria/2025/Percinta/17.png"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 2/Estofaria/2025/Estofaria/20-pt1.png", "capturas/Unidade 2/Estofaria/2025/Estofaria/20-pt2.png", "capturas/Unidade 2/Estofaria/2025/Colagem/20.png", "capturas/Unidade 2/Estofaria/2025/Costura/20.png", "capturas/Unidade 2/Estofaria/2025/Percinta/20.png"] },



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
            { data: "18/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/18.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/18.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/18.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/18.png","capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/18.png"] },
            { data: "19/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/19.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/19.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/19.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/19.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/19.png"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/21.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/21.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/21.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/21.png"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/22.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/22.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/22.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/22.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/22.png"] },
            { data: "23/11/2024", captura: [ "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/23.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/23.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/23.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/23.png"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 2/Usinagem/2024/11- Novembro/Usinagem/25.png" ,"capturas/Unidade 2/Usinagem/2024/11- Novembro/Roquite/25.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Rolinho/25.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/Mont.Us/25.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/MM/25.png", "capturas/Unidade 2/Usinagem/2024/11- Novembro/CNC/25-pt2.png"] },
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




            // { data: "", captura: ["", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", ""] },
        ],

        Acabamento: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Acabamento/11- Novembro/tingidor/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/robo/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/pé trás/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/pé frente/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/mont/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/maquininha/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/fundo/30.png",] },

            { data: "20/12/2023", captura: ["capturas/Unidade 2/Acabamento/12- Dezembro/tingidor/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/robo/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/pé trás/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/pé frente/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/mont/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/maquininha/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/fundo/20.png",] },

            { data: "31/01/2024", captura: ["capturas/Unidade 2/Acabamento/2024/1- Janeiro/tingidor/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/robo/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/pe traz/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/pe frente/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/mont/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/lix fundo maq/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/lix fundo manual/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 2/Acabamento/2024/2- Fevereiro/tingidor/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/robo/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/pe traz/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/pe frente/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/mont/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/lix fundo maq/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/lix fundo manual/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 2/Acabamento/2024/3- Março/tingidor/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/robo/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/pe tras/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/pe frente/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/mont/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/lix fundo maq/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/lix fundo manual/28.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 2/Acabamento/2024/4- Abril/ting/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/robo/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/pe traz/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/pe frente/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/mont/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/lix.fundo maquininha/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/lix.fundo manual/30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 2/Acabamento/2024/5- Maio/Tingidor/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/Robô/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/PéTras/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/PéFrente/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/Montagem/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/LixaçãoFundoMaquininha/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/LixaçãoFundoManual/30.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 2/Acabamento/2024/6- Junho/Tingidor/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/Robô/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/PéTras/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/PéFrente/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/Montagem/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/LixaçãoFundoMaquininha/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/LixaçãoFundoManual/28.jpg"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 2/Acabamento/2024/7- Julho/Tingidor/31.jpeg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Robô/31.jpeg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéTras/31.jpeg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéFrente/31.jpeg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Montagem/31.jpeg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoMaquininha/31.jpeg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoManual/31.jpeg"] },

            { data: "30/08/2024", captura: ["capturas/Unidade 2/Acabamento/2024/8- Agosto/Tingidor/30.jpeg", "capturas/Unidade 2/Acabamento/2024/8- Agosto/Robô/30.jpeg", "capturas/Unidade 2/Acabamento/2024/8- Agosto/PéTras/30.jpeg", "capturas/Unidade 2/Acabamento/2024/8- Agosto/PéFrente/30.jpeg", "capturas/Unidade 2/Acabamento/2024/8- Agosto/Montagem/30.jpeg", "capturas/Unidade 2/Acabamento/2024/8- Agosto/LixaçãoFundoMaquininha/30.jpeg", "capturas/Unidade 2/Acabamento/2024/8- Agosto/LixaçãoFundoManual/30.jpeg"] },
            
            { data: "30/09/2024", captura: ["capturas/Unidade 2/Acabamento/2024/9- Setembro/Tingidor/30.png", "capturas/Unidade 2/Acabamento/2024/9- Setembro/Robô/30.png", "capturas/Unidade 2/Acabamento/2024/9- Setembro/PéTras/30.jpeg", "capturas/Unidade 2/Acabamento/2024/9- Setembro/PéFrente/30.jpeg", "capturas/Unidade 2/Acabamento/2024/9- Setembro/Montagem/30.png", "capturas/Unidade 2/Acabamento/2024/9- Setembro/LixaçãoFundoMaquininha/30.jpeg", "capturas/Unidade 2/Acabamento/2024/9- Setembro/LixaçãoFundoManual/30.jpeg"] },

            { data: "02/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/2.png", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/2.png", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/2.png", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/2.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/2.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/2.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininha/2.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/04.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/4.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininha/4.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/4.jpeg"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/8.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininha/8.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/8.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/8.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/8.png", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/8.png", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/8.png"] },
            { data: "10/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/10.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/10.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/10.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/10.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/10.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininha/10.jpeg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/10.jpeg"] },
            { data: "14/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/14.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/14.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/14.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/14.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/14.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininha/14.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/14.jpg"] },
            { data: "16/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/16.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/16.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/16.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/16.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/16.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininha/16.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/16.jpg"] },
            { data: "21/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/21.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/21.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/21.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/21.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininha/21.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/21.jpg"] },
            { data: "22/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/22.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/22.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/22.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/22.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/22.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininha/22.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/22.jpg"] },
            { data: "28/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/28.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/28.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/28.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/28.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/28.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininha/28.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/28.jpg"] },
            { data: "30/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/30.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/30.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/30.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/30.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/30.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininha/30.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/30.jpg"] },
            { data: "31/10/2024", captura: ["capturas/Unidade 2/Acabamento/2024/10- Outubro/Tingidor/31.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Robô/31.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéTras/31.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/PéFrente/31.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/Montagem/31.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoMaquininha/31.jpg", "capturas/Unidade 2/Acabamento/2024/10- Outubro/LixaçãoFundoManual/31.jpg"] },
           
            { data: "06/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/6.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/06.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/6.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/6.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/06.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/06.jpg"] },
            { data: "07/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/7.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/7.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/7.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/7.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/7.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/7.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/7.jpg"] },
            { data: "08/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/8.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/8.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/8.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/8.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/8.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/8.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/8.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/9.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/9.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/9.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/9.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/9.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/09.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/09.jpg"] },
            { data: "11/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/11.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/11.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/11.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/11.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/11.jpg"] },
            { data: "13/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/13.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/13.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/13.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/13.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/13.jpg"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/18.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/14.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/18.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/18.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/18.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/18.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/18.jpg"] },
            { data: "19/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/19.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/19.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/19.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/19.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/19.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/19.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/20.jpg"] },
            { data: "21/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/21.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/21.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/21.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/21.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/21.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/21.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/21.jpg"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/22.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/22.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/22.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/22.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/22.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/22.png", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/22.jpeg"] },
            { data: "23/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/23.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/23.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/23.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/23.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/23.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/23.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/23.jpg"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/25.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/25.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/25.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/25.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/25.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/25.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/25.jpg"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/26.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/26.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/26.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/26.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/26.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/26.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/26.jpg"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/27.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/27.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/27.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/27.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/27.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/27.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/27.jpg"] },
            { data: "29/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/29.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/29.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/29.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/29.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/29.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/29.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/29.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Unidade 2/Acabamento/2024/11 -Novembro/Tingidor/30.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Robô/30.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéTras/30.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/PéFrente/30.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/Montagem/30.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoMaquininha/30.jpg", "capturas/Unidade 2/Acabamento/2024/11 -Novembro/LixaçãoFundoManual/30.jpg"] },
           
            { data: "02/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/2.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/02.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/02.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/2.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/2.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininha/2.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/2.jpg"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/3.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/3.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/3.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/3.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/3.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininha/3.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/3.jpg"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/4.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/4.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/4.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/4.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/4.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininha/4.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/04.jpg"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/5.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/5.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/5.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/05.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/5.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/05.png", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininha/5.png"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/6.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/6.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/6.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/6.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/6.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininha/06.png", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/06.png"] },
            { data: "07/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/7.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/7.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/7.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/7.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/7.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininha/07.png", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/07.png"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/11.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/11.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/11.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/11.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/11.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininha/11.jpg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/11.jpg"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/12.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/12.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/12.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/12.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/12.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininha/12.png", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/12.png"] },
            { data: "13/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/13.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/13.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/13.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/13.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininha/13.png", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/13.png"] },
            { data: "16/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/16.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/16.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/16.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/16.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/16.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininha/16.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/16.jpeg"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/17.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/17.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/17.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/17.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/17.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininha/17.png", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/17.png"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 2/Acabamento/2024/12-Dezembro/Tingidor/18.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Robô/18.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéTras/18.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/PéFrente/18.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/Montagem/18.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoMaquininha/18.jpeg", "capturas/Unidade 2/Acabamento/2024/12-Dezembro/LixaçãoFundoManual/18.jpeg"] },
           
            { data: "06/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/6.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/6.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/6.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/6.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/6.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininha/janeiro/06.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/06.jpeg"] },
            { data: "07/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/7.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/7.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/7.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/7.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/7.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininha/janeiro/07.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/07.png"] },
            { data: "08/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/8.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/8.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/8.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/8.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/8.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininha/janeiro/08.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/08.png"] },
            { data: "14/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/14.jpeg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/14.jpeg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/14.jpeg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/14.jpeg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/14.jpeg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininha/janeiro/14.png", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/14.png"] },
            { data: "20/01/2025", captura: ["capturas/Unidade 2/Acabamento/2025/Tingidor/janeiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/Robô/janeiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/PéTras/janeiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/PéFrente/janeiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/Montagem/janeiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoMaquininha/janeiro/20.jpg", "capturas/Unidade 2/Acabamento/2025/LixaçãoFundoManual/janeiro/20.jpg"] },


            // { data: "", captura: ["", "", "", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", "", "", ""] },
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


            // { data: "", captura: [""] }, 
            // { data: "", captura: [""] },
        ],
    },
    
    UA4: {
        Calibradora: [
            { data: "30/11/2023", captura: ["capturas/Unidade 4/Usinagem/11- Novembro/Calibradora/30.png",] },
            
            { data: "19/12/2023", captura: ["capturas/Unidade 4/Usinagem/12- Dezembro/Calibradora/19.png"] }, 

            { data: "31/01/2024", captura: ["capturas/Unidade 4/Usinagem/2024/1- Janeiro/Calibradora/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 4/Usinagem/2024/2- Fevereiro/Calibradora/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 4/Usinagem/2024/3- Março/Calibradora/28.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 4/Usinagem/2024/4- Abril/Calibradora/30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 4/Usinagem/2024/5- Maio/Calibradora/30.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 4/Usinagem/2024/6- Junho/Calibradora/28.jpg"] },

            { data: "31/07/2024", captura: ["capturas/Unidade 4/Usinagem/2024/7- Julho/Calibradora/31.jpeg"] },
            
            { data: "30/08/2024", captura: ["capturas/Unidade 4/Usinagem/2024/8- Agosto/Calibradora/30.jpeg"] },

            { data: "30/09/2024", captura: ["capturas/Unidade 4/Usinagem/2024/9- Setembro/Calibradora/30.jpeg"] },
            
            { data: "02/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Calibradora/02.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Calibradora/03.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Calibradora/04.jpeg"] },
            { data: "08/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Calibradora/8.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Calibradora/11.jpg"] },
            { data: "23/10/2024", captura: ["capturas/Unidade 4/Usinagem/2024/10-Outubro/Calibradora/23.jpg"] },
            
            
            { data: "09/11/024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibradora/09.jpg"] },
            { data: "18/11/2024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibradora/18.jpg"] },
            { data: "19/11/2024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibradora/19.jpg"] },
            { data: "22/11/2024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibradora/22.jpg"] },
            { data: "25/11/2024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibradora/25.jpg"] },
            { data: "26/11/2024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibradora/26.jpg"] },
            { data: "27/11/2024", captura: ["capturas/Unidade 4/Usinagem/2024/11-Novembro/Calibradora/27.jpg"] },
            { data: "02/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibradora/2.jpg"] },
            { data: "03/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibradora/03.jpg"] },
            { data: "04/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibradora/4.jpg"] },
            { data: "05/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibradora/05.jpg"] },
            { data: "06/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibradora/6.jpg"] },
            { data: "11/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibradora/11.jpg"] },
            { data: "12/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibradora/12.jpeg"] },
            { data: "14/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibradora/14.jpeg"] },
            { data: "17/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibradora/17.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Unidade 4/Usinagem/2024/12-DEZEMBRO/Calibradora/18.jpeg"] },
           
            { data: "08/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/Janeiro/08.jpeg"] },
            { data: "09/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/Janeiro/09.jpeg"] },
            { data: "13/01/2025", captura: ["capturas/Unidade 4/Usinagem/2025/Calibradora/Janeiro/13.jpeg"] },

            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        Prensas: [
            { data: "20/12/2023", captura: ["capturas/Unidade 4/Usinagem/12- Dezembro/prensa frequencia/20.png"] },

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


            // { data: "", captura: [""] },
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
            { data: "21/02/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/2- Fevereiro/Seccionadora/21.png"] },
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

            // { data: "", captura: [""] },
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
           


            // { data: "", captura: ["", ""] },
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
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/12-Dezembro/semana 04 à 09.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/12-Dezembro/11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/12-Dezembro/18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/1- Janeiro/22-01 À 26-01.png"] },
            
            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/11.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/18-pt6.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/19-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/19-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/19-pt6.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/20-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/20-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/20-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/20-pt6.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-G.png"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/22-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-G.png"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/26-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/27-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/27-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/28-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/4-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/5-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/12-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/19-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/26-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/26-pt3.png"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/7-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/9-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23g.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/29-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/7-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/13-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/14-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/19-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/21-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/28-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/28-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/28-ptg.jpeg"] },
            
            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/5-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/5-pt4.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/9-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/9-pt2.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/9-pt3.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/12-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/12-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/12-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/12-pt4.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/12-pt5.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/19 pt1.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/19 pt2.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/19 pt3.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/19 pt4.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/26-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/26-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/26-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/26-pt4.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/02 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/02 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/02 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/02 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/02 G.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/9-pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/9-pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/9-pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/9-pt4.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/16 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/16 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/16 parte 03.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/16 parte 04.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/16 g.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/22 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/22 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/22 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/22 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/22 g.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/23 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/23 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/23 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/23 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/23 g.jpeg"] },
            { data: "27/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/27 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/27 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/27 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/27 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/27g.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/29 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/29 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/29 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/29 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/29 g.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/30 pt1.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/30 pt2.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/30 pt3.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/30 pt4.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 1/BandaLarga/30 g.jpeg"] },
           

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
            { data: "19/10/2024", captura: [ "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/19 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/19 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Cab.Fundo/19 g.jpg"] },
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

            // { data: "", captura: ["", "", "", "", ""] },
        ],

        exp1: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/11- Novembro/27.png", "capturas/Retrabalhos/unidade 1/Expedição/11- Novembro/27 GRAFICO.png"] },

            { data: "07/12/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/04-12.png", "capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/07-12.png"] },
            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/SEMANA 04-12 À 09-12.png"] },
            
            { data: "16/12/2023", captura: [ "capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/SEMANA 11-12 À 15-12.png", "capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/SEMANA 11-12 À 15-12 GRAFI.png"] },

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
            { data: "19/10/2024", captura: [ "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/19  pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/19 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/19 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Expedição/19 g.jpg"] },
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

            // { data: "", captura: ["", "", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", "", "", ""] },

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
            { data: "19/10/2024", captura: [ "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/19 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/19 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Osso/19 g.jpg"] },
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

            // { data: "", captura: ["", "", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", "", ""] },

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
            { data: "19/10/2024", captura: [ "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/19 pt 1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/19 pt 2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/19 pt 3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/19 pt 4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 1/Usinagem/19 g.jpg"] },
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
            { data: "19/10/2024", captura: [ "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Curvados/19 g.jpg"] },
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

            // { data: "", captura: ["", "", ""] },
            // { data: "", captura: ["", "", "", "", ""] },
        ],

        Estofaria: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/12- Dezembro/SEMANA 04-12 À 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/12- Dezembro/SEMANA 11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/12- Dezembro/SEMANA 18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/11.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/13.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/18-pt3.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/19-pt3.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/20 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/20 GRAFICO.jpg"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/27 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/27 INFINITO.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/INFINITO.jpg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/28 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/28 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/28 INFINITO.jpg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/01 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/01 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/01 infinito.jpg"] },
            { data: "02/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/02 pçs.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/02 grafico.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/02 infinito.png"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/03 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/03 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/03 infinito.jpg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/04 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/04 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/04 infinito.jpg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/05 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/05 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/05 infinito.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/08 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/08 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/08 infinito.jpg"] },
            { data: "09/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/09 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/09 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/09 infinito.jpg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/10 infinito.jpg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/12 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/12 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/12 infinito.jpg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/16 infinito.jpg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/19 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/19 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/19 infinito.jpg"] },
            { data: "24/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/24 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/24 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/24 infinito.jpg"] },
            { data: "25/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/25 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/25 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/25 infinito.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/26 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/26 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/26 infinito.jpeg"] },
            { data: "29/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/29 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/29 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/29 infinito.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/6 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/6 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/6 ifinito.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/7 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/7 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/7 ifinito.jpeg"] },
            { data: "08/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/8 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/8 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/8 ifinito.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/9 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/9 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/9 infinito.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/10 infinito.jpg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/16 infinito.jpg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/17 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/17 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/17 infinito.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/20 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/20 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/20 infinito.jpg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/21 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/21 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/21 infinito.jpg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/23 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/23 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/23 infinito.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/25 1PT.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/25 2PT.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/25 g.jpg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/29 1PT.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/29 2PT.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/29 g.jpg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/30 1PT.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/30 2PT.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/30 g.jpg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/7 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/7 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/7G.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/11 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/11 G.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/13 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/13 G.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/15 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/15 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/15 g.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/18 g.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/19 G.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/20 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/20 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/20 G.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/21 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/21 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/21 G.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/28 G.jpg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/5 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/5 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/5G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/9 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/9 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/9G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/12 G.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/19 G.jpg"] },
            { data: "26/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/26 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/26 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/26 G.jpg"] },
            { data: "30/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/30 part 01.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/30 part 02.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/30g.jpeg"] },

            { data: "02/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/02 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/02 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/3g.jpeg"] },
            { data: "12/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/09 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/09 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/09g.jpeg"] },
            { data: "16/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/16 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/16 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/16G.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/22 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/22 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/22 g.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/23 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/23 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/23 g.jpeg"] },
            { data: "26/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/26 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/26 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/26 g.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/29 parte 01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/29 parte 02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/29 g.jpeg"] },
            { data: "30/08/2024", captura: ["capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/30 pt01.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/30 pt02.jpeg", "capturas/Retrabalhos/2024/8- Agosto/Unidade 2/Estofaria/30 g.jpeg"] },

            { data: "03/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/04 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/04 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/4 g.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/06 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/06 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/6 g.jpeg", "capturas/Unidade 2/Estofaria/2024/9- Setembro/zBordadeira/9.png"] },
            { data: "10/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/10 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/10 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/10 g.jpeg", "capturas/Unidade 2/Estofaria/2024/9- Setembro/zBordadeira/11.png"] },
            { data: "12/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/12 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/12 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/12g.jpeg"] },
            { data: "13/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/13 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/13 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/13g.jpeg"] },
            { data: "17/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/17 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/17 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/17 g.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/19 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/19 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/19 g.jpeg"] },
            { data: "24/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/24 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/24 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/24 g.jpeg"] },
            { data: "27/09/2024", captura: ["capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/27 1pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/27 2pt.jpeg", "capturas/Retrabalhos/2024/9- Setembro/Unidade 2/Estofaria/27 g.jpeg"] },
           
            { data: "01/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/01 PT01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/01 PT02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/1 G.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/03 PT01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/03 PT02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/3g.jpeg"] },
            { data: "04/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/04 PT01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/04 PT02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/4 g.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/10 PT01.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/10 PT02.jpeg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/10 G.jpeg"] },
            { data: "11/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/11 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/11 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/11 g.jpg"] },
            { data: "19/10/2024", captura: [ "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Estofaria/19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/26 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/26 g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/1 g.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/1 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/1 g.jpg"] },
            { data: "08/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/8 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/8 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/8 g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/9 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/9 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/9.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/14 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/23 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/23 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/23g.jpg"] },

            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/26 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/26 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/26g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/30 pt 01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/30 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Estofaria/30 g.jpg"] },

            { data: "03/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofaria/03 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofaria/03 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofaria/03 g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofaria/06 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofaria/06 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofaria/06 g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofaria/14 pt 01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofaria/14 pt 02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofaria/14g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofaria/18 pt 01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofaria/18 pt 02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Estofaria/18g.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofaria/10 PT01.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofaria/10 PT02.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofaria/10 G.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofaria/17 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofaria/17 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Estofaria/17 g.jpg"] },

            // { data: "", captura: ["", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", ""] },
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
            { data: "19/10/2024", captura: [ "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Expedição/19 g.jpg"] },
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

            // { data: "", captura: ["", "", ""] },
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
            { data: "19/10/2024", captura: [ "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Osso/19 g.jpg"] },
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

           //    { data: "", captura: ["", "", "", ""] },
           
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
            { data: "15/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/15 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/15 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/15 pt3.jpg","capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/15 pt4.jpg","capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/15 g.jpg"] },
            { data: "19/10/2024", captura: [ "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/19 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/19 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/26 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/26 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/26 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 2/Usinagem/26 g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/1 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/1 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/1 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/1 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/1g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/9 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/09 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/9 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/9pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/9g.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/14 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/14 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/14 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/23 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/23 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/23 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/23 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/23 g.jpg"] },
           
            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/26 pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/26 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/26 pt03.jpg" ,"capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/26 pt04.jpg" ,"capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/26 g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/30 pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/30 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/30 pt03.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/30 pt04.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 2/Usinagem/30 g.jpg"] },

            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/04 pt1.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/04 pt2.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/04 pt3.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/04 pt4.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/4g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/07 pt1.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/07 pt2.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/07 pt3.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/07 pt4.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/7g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/14 pt1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/14 pt2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/14mpt3.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/14 pt4.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/14 g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/18 pt1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/18 pt2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/18 pt3.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/18 pt4.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 2/Usinagem/18 g.jpeg"] },
        
            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/10 PT01.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/10 PT02.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/10 PT03.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/10 PT04.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/10 G.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/17 pt01.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/17 pt02.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/17 pt03.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/17 pt04.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 2/Usinagem/17 g.jpg"] },
            
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
            { data: "19/10/2024", captura: [ "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/18 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/18 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/18 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/18 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/18 g.jpg"] },
            { data: "24/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 3/24 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/26 pt3.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/26 pt4.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 3/26 g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 3/1 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/1 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/1 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/1 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/1 g.jpg"] },
            { data: "06/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 3/06 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/06 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/06 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/06 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/6 g.jpg"] },
            { data: "07/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 3/07 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/7 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/7 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/7 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/7 g.jpg"] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 3/23 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/23 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/23 pt3.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/23 pt4.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/23 g.jpg"] },
            
            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 3/26 pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/26 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/26 pt03.jpg" ,"capturas/Retrabalhos/2024/11-Novembro/Unidade 3/26 pt04.jpg" ,"capturas/Retrabalhos/2024/11-Novembro/Unidade 3/26g.jpg"] },
            { data: "29/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 3/29 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/29 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/29 pt03.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/29 pt04.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 3/29 g.jpg"] },
            
            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/04 pt01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/04 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/04 pt03.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/04 pt04.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/4 g.jpg"] },
            { data: "06/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/06 pt01.jpg","capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/06 pt02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/06 pt03.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/06 pt04.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/06 g.jpg"] },
            { data: "13/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/13 1 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/13 2 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/13 3 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/13 4 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/13 g.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/18 1 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/18 2 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/18 3 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/18 4 pt.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 3/18 g.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 3/10 PT01.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/10 PT02.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/10 PT03.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/10 PT04.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/10 G.jpeg"] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 3/17 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/17 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/17 pt3.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/17 pt4.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 3/17 g.jpg"] },
            
            // { data: "", captura: ["", "", "", ""] },
            // { data: "", captura: [""] },
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
            { data: "19/10/2024", captura: [ "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/19 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/19 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/19 g.jpg"] },
            { data: "25/10/2024", captura: ["capturas/Retrabalhos/2024/10- Outubro/Unidade 4/26 pt1.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/26 pt2.jpg", "capturas/Retrabalhos/2024/10- Outubro/Unidade 4/26g.jpg"] },

            { data: "01/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 4/1 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/1 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/1 g.jpg"] },
            { data: "09/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 4/09 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/09 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/09 g.jpg"] },
            { data: "14/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 4/14 pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/14 pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/14 g.jpg" ] },
            { data: "23/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 4/23 pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/23 pt02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/23 g.jpg"] },
           
            { data: "26/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 4/26 pt 01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/26 pt 02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/26 g.jpg"] },
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/Unidade 4/30 pt 01.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/30 pt 02.jpg", "capturas/Retrabalhos/2024/11-Novembro/Unidade 4/30 g.jpg"] },

            { data: "04/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/4 pt1.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/4 pt2.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/4g.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/7 pt1.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/07 pt2.jpg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/7g.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/14 PT01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/14 PT02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/14 G.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/18 PT01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/18 PT02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/Unidade 4/18 G.jpeg"] },

            { data: "10/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 4/10 PT01.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/10 PT02.jpeg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/10 G.jpeg",] },
            { data: "17/01/2025", captura: ["capturas/Retrabalhos/2025/JANEIRO/Unidade 4/17 pt1.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/17 pt2.jpg", "capturas/Retrabalhos/2025/JANEIRO/Unidade 4/17 g.jpg"] },


            //   { data: "", captura: [""] },
            //   { data: "", captura: [""] },
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
            { data: "30/11/2024", captura: ["capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/almox pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/almox pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/compras pt01.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/compras pt02.jpg","capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/transporte pt1.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/transporte pt2.jpg", "capturas/Retrabalhos/2024/11-Novembro/ADM/semana4/geral.jpg"] },
            { data: "07/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/TRANSP 01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/TRANSP 02.jpg","capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/COMP 01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/COMP 02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/ASSIST 01.jpg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/ASSIST 02.jpg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana1/GERAL.jpg"] },
            { data: "14/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/14 assist prt01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/14 assist prt02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/14 compras prt01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/14 compras prt02.jpeg","capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/14 pt02 pcp.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/trans prt 01.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/trans prt 02.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana2/geral.jpeg"] },
            { data: "18/12/2024", captura: ["capturas/Retrabalhos/2024/12-Dezembro/ADM/semana4/TRAP PT1.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana4/TRAP PT2.jpeg", "capturas/Retrabalhos/2024/12-Dezembro/ADM/semana4/GRAFICO GERAL.jpeg"] },
           
            { data: "17/01/2024", captura: ["capturas/Retrabalhos/2025/JANEIRO/ADM/semana2/COMPRAS 01.jpg", "capturas/Retrabalhos/2025/JANEIRO/ADM/semana2/COMPRAS 2.jpg", "capturas/Retrabalhos/2025/JANEIRO/ADM/semana2/GERAL 17.jpg"] },

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
            {data: "01/10/2024", captura: ["capturas/PQT/2024/9- Setembro/manutencao_grafico.jpeg"] },
            
            
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

            // { data: "", captura: [""] },
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

            // { data: "", captura: ["", ""] },
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
            { data: "07/11/2024", captura: ["capturas/Unidade 2/Estofaria/2024/11- Novembro/TesteEstofaria.png", "capturas/Unidade 2/Estofaria/2024/11- Novembro/TesteSetoresEstofaria.png"] },

            
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

function voltar (unidade) {
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
        main.style.height =  'calc(100vh - 174px)';  
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
        main.style.height =  'calc(100vh - 174px)'; 
    });
}
