Ciao, <br>
Vediamo come connettersi e ricevere i dati dai sensori tramite MQTT. <br>
Assicurati di configurare correttamente i dettagli del broker e i topic per ottenere i dati desiderati. 

Let's go with Python and Shell on Linux and Windows!

## Python 

Il file `mqtt_python.py` è uno script Python che utilizza la libreria `paho-mqtt` per connettersi a un broker MQTT e ricevere i messaggi dai sensori. 

1. Assicurati di avere Python installato sul tuo sistema, [Windows](https://www.python.org/downloads/windows/), Linux 'sudo apt-get install python3.6' .
2. Installa la libreria `paho-mqtt` eseguendo il comando:   'pip install paho-mqtt'
3. Sostituisci `"BSAV00_0103/#"` con device name_serial number, che per il kit aura è del tipo BSAV00_0001, per ricevere i messaggi.
4. Esegui lo script per avviare la connessione al broker e ricevere i dati.

## Shell 

Il file `mqtt_bash.sh` è uno script Bash che utilizza il comando `mosquitto_sub` per ascoltare i messaggi da un broker MQTT.

1. Assicurati di avere `mosquitto_sub` installato sul tuo sistema. Se non lo hai, installa Mosquitto, il broker MQTT, da [Mosquitto.org](https://mosquitto.org/download/).
2. Sostituisci `"BSAV00_0103/#"` con device name_serial number, che per il kit aura è del tipo BSAV00_0001, per ricevere i messaggi.
3. Esegui lo script per avviare l'ascolto dei messaggi dal broker.

La sessione può esssere sperimentata su Linux (Ubuntu?) e su WIndows.

Strumenti utilizzati
python     python.org
shell shell wiki


Sperimentazione successiva
Memorizza le misure in un file.
suggetilenti: vedi comando tail in linux , cat. append ....
