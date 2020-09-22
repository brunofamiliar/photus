<p align="center">
    <a href="https://www.linkedin.com/in/brunofamiliar/">
        <img src="./static/photus_logo.png">
    </a>
</p>

<h1 align="center">
  Photus
</h1>

[![Author](https://img.shields.io/badge/author-brunofamiliar-green?style=for-the-badge&logo=github)]('https://github.com/brunofamiliar')
![GitHub Repo stars](https://img.shields.io/github/stars/brunofamiliar/photus?color=green&style=for-the-badge)

## 💡 Motivo
Sabemos o quanto é difícil para um desenvolvedor web escolher e trabalhar com componentes e bibliotecas de construção de interfaces. Pensando nisso, desenvolvemos uma solução usando javascript puro para facilitar o gerencimento de um processo extremamente custoso: a construção de galerias de imagens; que permite mais agilidade e otimiza o seu tempo. Essa biblioteca está sendo projetada para ter alta escalabilidade e flexibilizade, além de integrar fielmente ao design definido.

>⚠️ Esse projeto está em fase beta, por esse motivo não deve ser usado no ambiente de produção

## 📗 Requerimento
<div>
    <ul>
         <li>Tenha o <a href="https://www.npmjs.com/get-npm">NPM e NodeJS</a> instalado em seu sistema.</li> 
</ul>
</div>

## 🛠️ Como utilizar
```bash
$ git clone git@github.com:brunofamiliar/photus.git
$ cd photus
$ npm install
$ npm run build
```

* Copie os arquivos gerados dentro do diretório <i>"photus/dist"</i> para a raiz do seu projeto;
* Para utilizar a lib em seu projeto, importe os arquivos .js e .css compilados e crie uma tag <strong>div</strong> com a id <i>"pht__endpoint"</i>, essa tag é necessária para a injeção de dependência. Ex: index.html

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/main.css">
    <title>Photus - Simple Gallery</title>
</head>
<body>
    <div id="pht__endpoint"></div>
</body>
<script src="./photus.min.js"></script>
</html>
```

## ⚙️ Configurações disponíveis

### Opções
Propriedade   | Descrição | Tipo | Padrão
------------  | --------- | ---- | ------
type | Defina o tipo de layout a ser utilizado | string  | grid
[images](#images) | Carrega as imagens da galeria  | object[] | []
[style](#style) | Edite o estilo para adaptar ao design | object[] | []

### Images
Propriedade   | Descrição | Tipo | Padrão
------------  | --------- | ---- | ------
name | Nome da imagem (será utilizado também como label) | string  | -
path | Url a ser buscado a imagem | string  | -

### Style
#### Layout Grid

Propriedade   | Descrição | Tipo | Padrão
------------  | --------- | ---- | ------
columns | Quantidade de colunas | number  | 4
cardSize | Tamanho do cartão de imagem | number  | 200
contentWidth | Largura total do container | number | -
gap | Espaçamento entre cards | number | 1
borderRadius | Borda dos cards (top, right, bottom, left) | array[number] | []