// Description:
//   Muestra una foto de manuel de forma random
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Command:
//   huemul dame un keldor
//
// Author:
//   @ceto

const images = [
  'https://www.maray.cl/wp-content/uploads/2018/05/marco-antonio-solis.jpg',
  'http://www.htv.com/wp-content/uploads/2016/09/SOLIS-759x500.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1C3q7TUUiIC8tsrfUc7D2m3RtIBc3IkcaUNwRjTjJ9-JNFxDfFQ',
  'https://sss.lainolvidable.com.pe/imagen/apaisado/historia-cancion-si-no-te-hubieras-ido-marco-antonio-solis-ff7e7.jpg',
  'https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2018/12/20/marco_anronio_solis_hospitalizado.jpg?itok=T6pPAo0k',
  'http://static.t13.cl/images/sizes/1200x675/1551326069-auno1046822.jpg',
  'https://www.abc.es/media/estilo/2019/03/13/maluma-khZG--620x349@abc.JPG',
  'https://assets.trome.pe/files/ec_article_multimedia_gallery/uploads/2019/01/18/5c4203c3e6662.jpeg',
  'https://www.buenamusica.com/media/fotos/noticias/maluma/maluma-nombre-significado.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccNQcXXdV6tzXoKK6ruWhSsMwgHJqZZLt4iGG7T4XBz5Vedhr',
  'http://static.t13.cl/images/sizes/1200x675/1535831092-063951724586.jpg',
  'https://www.elprogreso.es/media/elprogreso/images/2018/10/22/2018102211443027167.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerGR-SAzw8vfmamabhvffLDcSVPPIUgnJoHrsnOWVX9RnlkLQ',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7gJrRIbBPg8_rT0XPQxWzkvk9laOEvEpiTIVSxzAfwLexJkPM',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8y7ZsCFisfJ_TSLg7OO9pxn_R0fM_blbaMcIjjRE5GomKKUm7',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLeWlBcCjipdekAQ6EkLgGmrzU02z4KK1SsYOUN06zmIbmDQ7UQ'
]

module.exports = robot => {
  robot.respond(/dame un manuel/gi, msg => msg.send(msg.random(images)))
}
