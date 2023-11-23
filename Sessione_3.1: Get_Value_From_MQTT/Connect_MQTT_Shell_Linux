#!/bin/sh

echo "Lo script è stato eseguito con successo!"

while true
do
    /usr/bin/mosquitto_sub -h "test.mosquitto.org" -t "BSAV00_0103/#" -F "%t %p" | while read -r payload
    do
        topic=$(echo "$payload" | cut -d ' ' -f 1)
        msg=$(echo "$payload" | cut -d ' ' -f 2-)
        echo "Messaggio Ricevuto: $topic: ${payload}"
    done
    sleep 10
done
