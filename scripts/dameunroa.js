// Description:
//   Muestra una foto de luis roa de forma random
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Command:
//   medbot dame un roa
//
// Author:
//   @pcalderon

const images = [
    'https://pbs.twimg.com/profile_images/547879613951516677/JfzEcf_B.jpeg',
    'https://i.ytimg.com/vi/WZPLqomme9Y/hqdefault.jpg',
    'https://i.ytimg.com/vi/OW4NeGVqzbE/maxresdefault.jpg'
  ]
  
  module.exports = robot => {
    robot.respond(/dame un roa/gi, msg => msg.send(msg.random(images)))
  }
  