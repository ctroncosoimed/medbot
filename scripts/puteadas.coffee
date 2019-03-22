# Description
#   Aleatoriamente putea alguien para ti
#
# Commands:
#   hubot putea (a|al) <alguien> - Putea al usaurio señalado
#
# Author:
#   lgaticaq

puteadas = [
  "eres tonto o le tiras piedras a los aviones",
  "eres más infantil que una pelea entre Pokemones y Power Rangers",
  "tienes menos futuro que un enfermo de parkinson tocando pandero",
  "que mala suerte que de 5 millones de espermatozoides salieras tú...",
  "parece que tus viejos no le pusieron mucho empeño pa' hacerte",
  "tu rostro es como el invierno, lleno de escarcha, tormentas y nubosidad",
  "eres más feo que la azafata del Caleuche",
  "eres más inútil que bolsillo de pijama",
  "te gusta la pistola de quaker",
  "teni el #bombolleno",
  "hijoelapeeeeeeeeeeerrra",
  "¿Alguien te dijo alguna vez que eres una persona increíblemente promedio?",
  "¿Te das cuenta de que la gente solo te tolera?",
  "Deberías tratar de comer un poco de maquillaje para ser más bello por dentro.",
  "Me encanta cómo dices cosas obvias con la sensación de que descubriste algo.",
  "Todas las personas que te amaron alguna vez estaban equivocados.",
  "Me arrepiento de los tediosos minutos que he pasado contigo. "
]

module.exports = (robot) ->
  robot.respond /putea (a|al) (.*)/i, (msg) ->
    puteada = msg.random puteadas
    msg.send "oe #{msg.match[2]} #{puteada}"
