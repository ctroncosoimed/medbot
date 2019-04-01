FROM kylev/hubot:latest

ENV HUBOT_HIPCHAT_JID yourvaluehere
# Set more hubot config env here.

RUN \
  npm install --save --production --silent \
    hubot-business-cat hubot-trello hubot-plusplus hubot-mongodb-brain

COPY external-scripts.json external-scripts.json

CMD ["-a", "hipchat"]

COPY . /hubot
