# Documentação da Página de Apontamento de Unidades - Sier PCP

## Clique aqui e [acesse o Aplicativo dos Apontamento](https://siermoveis.github.io/Aplicativo_Apontamento/homepage.html)

Este repositório contém o código HTML de uma página web desenvolvida para exibir dados de produtividade e informações de unidades (UR1 a UR5 e ADM) no sistema Sier PCP - Apontamento. A página permite a navegação por datas e setores específicos, exibindo detalhes dinamicamente para cada unidade.

---

## Estrutura do Projeto

### Arquivos Principais:

- `index.html`: Página principal contendo o layout e a estrutura HTML.
- `front__inicial.css`: Arquivo CSS responsável pela estilização da página.
- `back__inicial.js`: Script JavaScript responsável por funcionalidades dinâmicas e interação do usuário.
- `Logo Sier.ico`: Ícone de favicon utilizado na aba do navegador.

---

## Descrição dos Componentes HTML

### 1. **Cabeçalho (`<head>`)**
Contém as seguintes configurações:

- `meta charset="UTF-8"`: Define a codificação de caracteres como UTF-8.
- `meta name="viewport"`: Garante a responsividade em diferentes dispositivos.
- Controle de cache com tags como `cache-control`, `expires` e `pragma`.
- Inclusão de bibliotecas CSS e JavaScript:
  - **CSS**: 
    - `front__inicial.css` (arquivo local)
    - Bootstrap via CDN.
  - **JavaScript**:
    - `back__inicial.js` (arquivo local)
    - jQuery, Popper.js e Bootstrap via CDN.

---

### 2. **Corpo do Documento (`<body>`)**

O corpo da página é dividido em várias seções:

#### a) **Header (`<header>`)**

- Inclui a logo da Sier e o botão para controlar o menu lateral de navegação.
- Links de navegação para diferentes páginas (e.g., `instruções.html`, `Produtividade.html`, etc.).
- Menu lateral expansível via JavaScript.

#### b) **Seção Principal (`<main>`)**

Cada unidade (UR1 a UR5 e ADM) é representada com as seguintes funcionalidades:

- **Campo de Data**: Permite selecionar uma data específica.
- **Campo de Setor**: Dropdown com setores como "Cabine de fundo", "Lix. Osso", etc.
- **Botões de Navegação**: Navegação entre dias (dia anterior e próximo dia) e opção para limpar seleção.
- **Exibição de Detalhes**: Contêineres dinâmicos que exibem os dados das unidades e setores selecionados.
- **Alertas Dinâmicos**: Seção que mostra mensagens de alerta ou erro quando necessário.

#### c) **Footer (`<footer>`)**

- Contém um simples rodapé com a mensagem: "Sier - PCP - Apontamento".

---

## Funcionalidades e Interatividade

1. **Responsividade**: A página utiliza o framework Bootstrap para garantir que o layout seja adaptado corretamente em diferentes dispositivos e resoluções.
2. **Controle de Navegação**: O menu de navegação lateral pode ser alternado entre visível e oculto através de um botão, oferecendo uma experiência de navegação limpa.
3. **Carregamento Dinâmico**: Ícones de carregamento são exibidos até que os dados necessários para cada unidade estejam disponíveis.
4. **Filtros de Data e Setor**: O usuário pode filtrar as informações exibidas selecionando uma data e um setor específico para cada unidade.
5. **Navegação Entre Dias**: Botões permitem ao usuário navegar para o dia anterior ou próximo, ajustando as informações exibidas de acordo.
6. **Alertas e Mensagens**: Mensagens de alerta dinâmicas são exibidas para o usuário em caso de erro ou de falta de dados.

---

## Documentação do JavaScript

O arquivo `back__inicial.js` contém a lógica responsável pela interatividade da página. Abaixo, segue a documentação detalhada de cada função.

### 1. **Função `menuToggle()`**

```javascript
function menuToggle() {
    let menuArea = document.getElementById("menu-area");
    if (menuArea.style.width == '200px') {
        menuArea.style.width = '0px';
    } else {
        menuArea.style.width = '200px';
    }
}
```

Descrição: Esta função controla a abertura e fechamento do menu lateral. Ela altera dinamicamente a largura do contêiner do menu (menu-area) entre 0 e 200px, conforme o estado atual.

### 2. **Função `mudarDataUR(unidade)`**

```javascript
function mudarDataUR(unidade) {
    let dia = document.getElementById('data' + unidade).value;
    alert('O dia escolhido para a ' + unidade + ' foi: ' + dia);
}
```

Descrição: Essa função é acionada quando o usuário seleciona uma data para uma unidade específica (como UR1, UR2, etc.). Ela captura o valor da data escolhida e exibe um alert informando a data e a unidade correspondente.
 
---


### 3. **Função `mudarSetorUR(unidade)`**

```javascript
function mudarDataUR(unidade) {
    let dia = document.getElementById('data' + unidade).value;
    alert('O dia escolhido para a ' + unidade + ' foi: ' + dia);
}
```

