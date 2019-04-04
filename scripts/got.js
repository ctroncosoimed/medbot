// Description:
//   TODO
//
// Dependencies:
//   moment-business-days
//
// Configuration:
//   None
//
// Commands:
//   @medbot proximo capitulo got?
//
// Author:

var moment = require('moment-business-days');

module.exports = function gardel(robot) {
  'use strict';

  var today = moment().format('D');
  var inicio_got = moment('14-04-2019', 'DD-MM-YYYY').format('DD');
  var dayCount = inicio_got - today

  robot.respond(/(cu(?:á|a)nto falta para got ?)/, function(msg) {
    if(dayCount <= 0){
      return msg.send('Ya Empezó!');
    }else{
      return msg.send('Faltan ' + dayCount + ' días para la nueva temporada');
    }
    
  });
};
