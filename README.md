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


- O site principal não lista mais o serviço de banners nem a documentação de imóveis.
- **Privacidade:** nas capturas do Meu Sistema (`img/pdv-*.jpg`), o nome do administrador e os valores de venda do dia foram desfocados. As capturas originais não estão no repositório. Se trocar as imagens, desfoque dados pessoais antes de enviar, porque o repositório é público.
- As páginas usam as fontes Sora, Inter, Bricolage Grotesque e Source Sans 3 do Google Fonts. Sem internet, o navegador usa fontes do sistema.
