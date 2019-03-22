
// https://medsign.i-med.cl/

// Description:
//   Obtiene info del estado de las paginas web
//
// Dependencies:
//   None
//
// Commands:
//   hubot estado <applicacioón>
//
// Author:
//   @ctroncoso

module.exports = robot => {
  robot.respond(/estado (.*) (.*)/i, msg => {
    const environment = msg.match[1]
      .toLowerCase()
      .replace(/producci(?:ó|o)n$/, 'production')

    const application = msg.match[2]

    var request = require('request');

    const production = {
      imed: {
        url: 'https://www.i-med.cl'
      },
      medsign: {
        url: 'https://medsign.i-med.cl/'
      }
    }

    const pre = {
    }

    const develop = {
    }

    const qa = {
    }

    if(environment == 'production'){
      var webpage = production
    }else if(environment == 'pre'){
      var webpage = pre
    }else if(environment == 'develop'){
      var webpage = develop
    }else if(environment == 'qa') {
      var webpage = qa
    }else{
      return msg.send('No existe el Ambiente '+environment)
    }

    if (application in webpage){

      request(webpage[application].url, function (error, response, body) {
        if (!error && response.statusCode == 200){
          return msg.send(webpage[application].url+' :ok_hand:' )
        }else{
          return msg.send(webpage[application].url+' estado: '+error)
        }
      })

    }else{
      msg.send("Aún no lo agrega el desarrollador flojo que esta haciendo esto :rage:")
    }

  })
}
