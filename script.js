// Lista com os caminhos das imagens
const imagens = [
  "src/images/01.jpg",
  "src/images/02.png",
  "src/images/03.jpg",
  "src/images/04.jpg",
  "src/images/05.jpg",
  "src/images/06.jpg",
  "src/images/07.jpg",
];

function imageRandom() {
    const indexRandom = Math.floor(Math.random() * imagens.length);
    const newImage = imagens[indexRandom]
    document.querySelector('#images img').src = newImage;

}
setInterval(imageRandom, 5000)



function copiar() {
    const texto = '11932080794'

    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Pix copiado com sucesso!');
        })
        .catch(err => {
            alert('Erro ao copiar:', err);
        });
}



