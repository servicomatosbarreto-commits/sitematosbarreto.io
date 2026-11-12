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
├── index.html          # site principal (Matos Barreto + JMatos Construções)
├── tecnologia.html     # área Tecnologia e Soluções Digitais
├── img/                # capturas de tela do Mercadex e do Meu Sistema
├── .github/workflows/pages.yml   # publicação automática no GitHub Pages
├── .nojekyll
├── .gitignore
└── README.md
```

## Contatos (cada área tem o seu)

| Área | WhatsApp |
|---|---|
| Loja Matos Barreto | (12) 98139-0483 |
| JMatos Construções | (12) 98263-1882 |
| Tecnologia e Soluções Digitais | (12) 98208-9411 |

Endereço: Avenida Tomas Alves Figueiredo, 395, Industrial, Lorena-SP, CEP 12608-346.

## Como editar

Todo o conteúdo editável fica no início do bloco `<script>` de cada página, sob o comentário `EDITE AQUI`.

**`index.html`**
- `CFG`: telefones (`loja` e `jm`), endereço e `horario` (o horário de funcionamento ainda está em branco).
- `SERV`: serviços, descrições e ícones. `PCATS`: categorias de produtos (nome, descrição, cor e ícone).
- Produtos: o site mostra as quatro categorias, cada uma com botão de consulta pelo WhatsApp (categoria Construção vai para a JMatos). O catálogo individual com fotos e busca foi retirado até haver fotos dos produtos.
- As cores ficam em `:root` (`--brand` verde, `--y` amarelo). O tema claro/escuro usa a chave no topo e lembra a escolha do visitante.

**`tecnologia.html`**
- `WA` e `WA_TXT`: WhatsApp da área de tecnologia.
- `SERVICES`, `GAMES`, `CUSTOM`: serviços e tipos de projeto.
- `FEAT_PDV` e `FEAT_MDX`: recursos do Meu Sistema e do Mercadex. Marque `on:true` **somente** o que já está implementado.
- `MODELS` (arquivos 3D) e `PROJECTS` (portfólio) começam vazios, para você cadastrar os seus.
- `IMG_MDX` e `IMG_PDV`: capturas de tela (arquivos em `img/`).

Não há preços nem prazos fixos nas páginas: os planos (teste grátis de 7 dias, mensal e anual) e os projetos sob encomenda são combinados pelo WhatsApp.

## Rodar no computador

Basta abrir o `index.html` no navegador. Para simular um servidor:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie os arquivos:
   ```bash
   git init
   git add .
   git commit -m "Site Matos Barreto e Tecnologia"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
   git push -u origin main
   ```
2. No repositório, abra **Settings → Pages** e, em **Source**, escolha **GitHub Actions**.
3. A cada `git push` na branch `main`, o workflow publica o site. O endereço aparece em Settings → Pages.

Domínio próprio: em Settings → Pages, informe o domínio em *Custom domain* e aponte o DNS conforme a documentação do GitHub.

## Acessibilidade

O site principal passou por uma revisão WCAG 2.1 AA: contraste das cores, foco visível no teclado, alvos de toque de 44 px, link "Pular para o conteúdo", menu com estado anunciado e chave de tema com nome e estado. A página de tecnologia ainda não passou pela mesma revisão.

## Limitações e pendências

- Não há área administrativa nem banco de dados: a edição é feita nos arquivos. Para cadastro pela tela, é preciso um servidor.
- Falta preencher o horário de funcionamento do site principal e, na página de tecnologia, cadastrar modelos 3D e projetos. O catálogo de produtos do site principal foi retirado até haver fotos.
- Falta confirmar o que o Mercadex sincroniza com o Meu Sistema (hoje marcado como "em breve").
- **Privacidade:** o repositório fica público no plano gratuito. A captura `img/pdv-dashboard.jpg` mostra o nome do administrador e números de vendas do dia. Troque ou apague essa imagem (e a entrada em `IMG_PDV`) se não quiser expor esses dados.
- As páginas usam as fontes Sora, Inter, Bricolage Grotesque e Source Sans 3 do Google Fonts. Sem internet, o navegador usa fontes do sistema.
