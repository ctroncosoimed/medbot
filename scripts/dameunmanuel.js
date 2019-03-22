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
  'https://media.metrolatam.com/2018/12/16/46312933101610486826002975542087621070553088n-6ae634d3c67cd8947ce82343ab4996cb-1200x600.jpg',
  'https://sss.lainolvidable.com.pe/imagen/apaisado/historia-cancion-si-no-te-hubieras-ido-marco-antonio-solis-ff7e7.jpg',
  'https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2018/12/20/marco_anronio_solis_hospitalizado.jpg?itok=T6pPAo0k',
  'http://static.t13.cl/images/sizes/1200x675/1551326069-auno1046822.jpg'
]

module.exports = robot => {
  robot.respond(/dame un manuel/gi, msg => msg.send(msg.random(images)))
}
