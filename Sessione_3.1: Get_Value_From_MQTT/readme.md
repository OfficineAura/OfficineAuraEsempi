Ciao, <br>
let's go with Python and Bash on Linux!

## Python 

Il file `mqtt_python.py` è uno script Python che utilizza la libreria `paho-mqtt` per connettersi a un broker MQTT e ricevere i messaggi dai sensori. 

1. Assicurati di avere Python installato sul tuo sistema.
2. Installa la libreria `paho-mqtt` eseguendo il comando:   'pip install paho-mqtt'
3. Sostituisci `"BSAV00_0103/#"` con il `device_name` e `serial_number` del tuo kit Aura per ricevere i messaggi in tempo reale.
4. Esegui lo script per avviare la connessione al broker e ricevere i dati.

## Bash Script (Shell)

Il file `mqtt_bash.sh` è uno script Bash che utilizza il comando `mosquitto_sub` per ascoltare i messaggi da un broker MQTT.

### Istruzioni:

1. Assicurati di avere `mosquitto_sub` installato sul tuo sistema. Se non lo hai, installa Mosquitto, il broker MQTT, da [Mosquitto.org](https://mosquitto.org/download/).
2. Sostituisci `"BSAV00_0103/#"` con il `device_name` e `serial_number` del tuo kit Aura per ricevere i messaggi in tempo reale.
3. Esegui lo script per avviare l'ascolto dei messaggi dal broker.

---

Questi script forniscono un modo per connettersi e ricevere i dati dai sensori tramite MQTT. Assicurati di configurare correttamente i dettagli del broker e i topic per ottenere i dati desiderati. Buon utilizzo!
