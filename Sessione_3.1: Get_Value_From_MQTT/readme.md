Ciao, <br>
Vediamo come connettersi e ricevere i dati dai sensori tramite MQTT. <br>
Assicurati di configurare correttamente i dettagli del broker e i topic per ottenere i dati desiderati. 

Let's go with Python and Shell on Linux and Windows!

## Python 

Il file `.py` è uno script Python che utilizza la libreria `paho-mqtt` per connettersi a un broker MQTT e ricevere i messaggi dai sensori. 

1. Assicurati di avere Python installato sul tuo sistema, [Windows](https://www.python.org/downloads/windows/), Linux 'sudo apt-get install python3.6' .
2. Installa la libreria `paho-mqtt` eseguendo il comando:   'pip install paho-mqtt', valido su entrambi i sistemi.
3. Sostituisci `"BSAV00_0103/#"` con device name_serial number, che per il kit aura è del tipo BSAV00_0001, per ricevere i messaggi.
4. Esegui lo script per avviare la connessione al broker e ricevere i dati.

## Shell 

Il file `.sh` è uno script Shell che utilizza il comando `mosquitto_sub` per ascoltare i messaggi da un broker MQTT.

1. Assicurati di avere `mosquitto_sub` installato sul tuo sistema. Se non lo hai, installalo da [Mosquitto.org](https://mosquitto.org/download/).
2. In Windows puoi utilizzare [Cygwin](https://www.cygwin.com/) per simulare l'ambiente di Unix.
3. Cambia i diritti del file 'chmod +x aura_mqtt.sh'
4. Sostituisci `"BSAV00_0103/#"` con device name_serial number, che per il kit aura è del tipo BSAV00_0001, per ricevere i messaggi.
5. Esegui lo script per avviare l'ascolto dei messaggi dal broker.

Le sessioni possono esssere sperimentate su Linux e su Windows.

## Strumenti utilizzati
- [Python](https://www.python.org/).
- [Shell](https://www.learnshell.org/).

## Sperimentazione successiva
- Memorizza le misure in un file.<br>
(Suggerimento: dai un'occhiata ai comandi Linux [tail](https://www.ionos.it/digitalguide/server/configurazione/comando-tail-di-linux/), [cat](https://www.ionos.it/digitalguide/server/configurazione/linux-comando-cat/), [append](https://www.cyberciti.biz/faq/linux-append-text-to-end-of-file/), o [BareTail](http://www.baremetalsoft.com/baretail/) in Windows)
