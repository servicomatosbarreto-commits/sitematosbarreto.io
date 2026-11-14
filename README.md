# Matos Barreto: site da loja e área de tecnologia

Projeto de site estático (HTML, CSS e JavaScript puros, sem instalação e sem servidor) com **duas partes que funcionam juntas**:

| Página | Arquivo | O que é |
|---|---|---|
| **Matos Barreto** (site principal) | `index.html` | Loja em Lorena-SP: serviços de impressão, documentação, acadêmicos e gráficos, produtos (alimentícios, potes e utilidades, construção) e a marca **JMatos Construções**. |
| **Tecnologia e Soluções Digitais** | `tecnologia.html` | Área de tecnologia: assistência técnica, videogames, sites, aplicativos, **Mercadex** (app de pedidos para mercados), **Meu Sistema** (gestão e PDV), impressão 3D, projetos sob encomenda e portfólio. |

As duas se ligam entre si: o site principal tem o item **Tecnologia** no menu, um banner na página inicial e cartões na seção Serviços. A página de tecnologia tem o link de volta para o início.

## Estrutura

```
.
├── index.html          # site principal (Comercial Matos Barreto + JMatos Construções)
├── tecnologia.html     # área Tecnologia e Soluções Digitais
├── img/                # logos, ícones do site e capturas do Mercadex e do Meu Sistema
├── js/
│   ├── fx-common.js    # efeitos leves: aparecer ao rolar e inclinação do logotipo
│   ├── fx-matos.js     # fundo 3D do site principal (formas flutuantes verde e amarelo)
│   └── fx-tech.js      # fundo 3D da tecnologia (rede de pontos e poliedro)
├── vendor/             # three.js (biblioteca 3D, licença MIT) minificado a partir do seu zip
├── 404.html            # página exibida quando o endereço não existe
├── robots.txt
├── .nojekyll
├── .gitignore
└── README.md
```

## Efeitos visuais

- **Fundo 3D (three.js):** o site principal tem formas geométricas flutuando nas cores da marca, e a página de tecnologia tem uma rede de pontos conectados com um poliedro em arame. Ambos seguem o movimento do mouse, pausam quando saem da tela e carregam depois do conteúdo.
- **Outros efeitos:** os blocos aparecem suavemente ao rolar, o logotipo do topo da página principal flutua e inclina com o mouse, os botões têm brilho ao passar o mouse, os cartões sobem e brilham, o botão do WhatsApp pulsa e os títulos têm brilho animado.
- **Quem prefere menos movimento:** quando o aparelho está com "reduzir movimento" ligado, as animações são desligadas e o fundo 3D vira uma imagem parada. No modo "economia de dados", o 3D nem é carregado.
- Se o 3D não carregar (navegador sem WebGL ou arquivo aberto direto do computador), o site funciona normalmente, só sem o fundo animado.
- A biblioteca three.js (versão 0.187) está em `vendor/` com a licença MIT em `vendor/LICENSE-three.txt`.

## Logos

`img/logo-claro.png` (fundo transparente) e `img/logo-escuro.jpg` foram gerados a partir das duas logos enviadas, que estão guardadas sem alteração em `img/original-logo-claro.jpg` e `img/original-logo-escuro.jpg`. O ícone da aba do navegador (`favicon.png`) é o carrinho da logo. A página de tecnologia tem a logo no topo, que leva de volta ao site principal.

## Contatos (cada área tem o seu)

| Área | WhatsApp |
|---|---|
| Loja Matos Barreto | (12) 98139-0483 |
| JMatos Construções | (12) 98263-1882 |
| Tecnologia e Soluções Digitais | (12) 98208-9411 |

Instagram da loja: [@comercialmatosbarreto_](https://www.instagram.com/comercialmatosbarreto_/)

Endereço: Avenida Tomas Alves Figueiredo, 395, Industrial, Lorena-SP, CEP 12608-346.

## Como editar

Todo o conteúdo editável fica no início do bloco `<script>` de cada página, sob o comentário `EDITE AQUI`.

**`index.html`**
- `CFG`: `instagram`, telefones (`loja` e `jm`), endereço e `horario` (lista de linhas; hoje: segunda a sexta 8h às 19h e domingo 9h às 13h).
- `SERV`: serviços, descrições e ícones. `PCATS`: categorias de produtos (nome, descrição, cor e ícone).
- Produtos: o site mostra as quatro categorias, cada uma com botão de consulta pelo WhatsApp (categoria Construção vai para a JMatos). O catálogo individual com fotos e busca foi retirado até haver fotos dos produtos.
- As cores ficam em `:root` (`--brand` verde, `--y` amarelo). O tema claro/escuro usa a chave no topo e lembra a escolha do visitante.

**`tecnologia.html`**
- `WA` e `WA_TXT`: WhatsApp da área de tecnologia.
- `SERVICES`, `GAMES`, `CUSTOM`: serviços e tipos de projeto.
- `FEAT_PDV` e `FEAT_MDX`: recursos do Meu Sistema e do Mercadex. Marque `on:true` **somente** o que já está implementado.
- `MODELS` (arquivos 3D) e `PROJECTS` (portfólio) começam vazios e a seção de projetos fica oculta até o primeiro cadastro.
- `IMG_MDX` e `IMG_PDV`: capturas de tela (arquivos em `img/`).

Não há preços nem prazos fixos nas páginas: os planos (teste grátis de 7 dias, mensal e anual) e os projetos sob encomenda são combinados pelo WhatsApp.

## Rodar no computador

Abrir o `index.html` direto no navegador funciona, mas sem o fundo 3D (os módulos do three.js exigem um servidor). Para ver tudo, rode um servidor local:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Publicar no GitHub Pages

1. **Criar o repositório:** em github.com, clique em **New**, dê um nome (ex.: `site-matos-barreto`), deixe **Public** e **não** marque README nem .gitignore. Clique em **Create repository**.
2. **Enviar os arquivos** (escolha um jeito):
   - **Pelo navegador:** na página do repositório vazio, clique em **uploading an existing file**, abra a pasta do projeto e arraste **o conteúdo dela** (`index.html`, `tecnologia.html`, `404.html`, `robots.txt`, `README.md` e as pastas `img`, `js` e `vendor`). O `index.html` precisa ficar na **raiz** do repositório, não dentro de uma subpasta. Clique em **Commit changes**.
   - **Pelo terminal**, dentro da pasta do projeto:
     ```bash
     git init
     git add .
     git commit -m "Site Matos Barreto e Tecnologia"
     git branch -M main
     git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
     git push -u origin main
     ```
3. **Ativar o Pages:** em **Settings → Pages**, em **Source** escolha **Deploy from a branch**, depois a branch `main` e a pasta `/ (root)`, e clique em **Save**.
4. **Abrir o site:** espere 1 a 2 minutos. O endereço aparece no topo de Settings → Pages e tem a forma `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Se aparecer erro 404: confira se o `index.html` está na raiz, se o repositório é **Public** (no plano gratuito o Pages só funciona em repositório público) e se o endereço termina com `/`.

**Atualizar depois:** no GitHub, abra o arquivo, clique no lápis, edite e clique em **Commit changes**. O site se atualiza sozinho em cerca de 1 minuto. Para trocar fotos, use **Add file → Upload files** na pasta `img`.

Domínio próprio: em Settings → Pages, informe o domínio em *Custom domain* e aponte o DNS conforme a documentação do GitHub.

## Acessibilidade

O site principal passou por uma revisão WCAG 2.1 AA (feita antes dos efeitos 3D; os efeitos respeitam "reduzir movimento"): contraste das cores, foco visível no teclado, alvos de toque de 44 px, link "Pular para o conteúdo", menu com estado anunciado e chave de tema com nome e estado. A página de tecnologia ainda não passou pela mesma revisão.

## Limitações e pendências

- Não há área administrativa nem banco de dados: a edição é feita nos arquivos. Para cadastro pela tela, é preciso um servidor.
- Na página de tecnologia, as seções de **Projetos** e de modelos 3D aparecem sozinhas quando você cadastrar o primeiro item em `PROJECTS` ou `MODELS`; enquanto estiverem vazias, ficam ocultas.
- A sincronização opcional do Mercadex com o Meu Sistema aparece como disponível; confira se a descrição reflete o que ela faz hoje.
- O site principal não lista mais o serviço de banners nem a documentação de imóveis.
- **Privacidade:** nas capturas do Meu Sistema (`img/pdv-*.jpg`), o nome do administrador e os valores de venda do dia foram desfocados. As capturas originais não estão no repositório. Se trocar as imagens, desfoque dados pessoais antes de enviar, porque o repositório é público.
- As páginas usam as fontes Sora, Inter, Bricolage Grotesque e Source Sans 3 do Google Fonts. Sem internet, o navegador usa fontes do sistema.
