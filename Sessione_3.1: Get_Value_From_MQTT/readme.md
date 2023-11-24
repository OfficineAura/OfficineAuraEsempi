Ciao, <br>
Vediamo come connettersi e ricevere i dati dai sensori tramite MQTT. <br>
Assicurati di configurare correttamente i dettagli del broker e i topic per ottenere i dati desiderati. 

Let's go with Python and Shell on Linux and Windows!

## Python 

Il file `Get_Value.py` è uno script che utilizza la libreria `paho-mqtt` per connettersi a un broker MQTT e ricevere i messaggi dai sensori. 

1. Assicurati di avere Python installato sul tuo sistema, [Windows](https://www.python.org/downloads/windows/), Linux 'sudo apt-get install python3.6' .
2. Scarica il file Get_Value.py
3. Installa la libreria `paho-mqtt` eseguendo il comando:   'pip install paho-mqtt', valido su entrambi i sistemi.
4. Il tuo dispositivo invia messaggi al broker test.mosquitto.org. Nei messaggi è presente il nome del tuo dispositivo. <br>
   Il nome  è la concatenazione del modello e del serial number, riportati su etichetta interna al dispositivo. <br>
   Nel file Get_Value.py sostituisci `"BSAV00_0103/#"` con modello e del serial number del tuo dispositivo. 
5. Esegui lo script per avviare la connessione al broker e ricevere i dati.

## Shell_Linux 

Il file `Get_Value_Linux.sh` è uno script che utilizza il comando `mosquitto_sub` per ascoltare i messaggi da un broker MQTT.

1. Assicurati di avere `mosquitto_sub` installato sul tuo sistema. Se non lo hai, installalo da [Mosquitto.org](https://mosquitto.org/download/).
2. Scarica il file Get_Value_Linux.sh e esegui 'chmod +x Get_Value_Linux.sh'
3. Il tuo dispositivo invia messaggi al broker test.mosquitto.org. Nei messaggi è presente il nome del tuo dispositivo. <br>
   Il nome  è la concatenazione del modello e del serial number, riportati su etichetta interna al dispositivo. <br>
   Nel file Get_Value.py sostituisci `"BSAV00_0103/#"` con modello e del serial number del tuo dispositivo. 
4. Esegui Get_Value_Linux.sh per avviare l'ascolto dei messaggi dal broker.



## Strumenti utilizzati
- [Python](https://www.python.org/).
- [Shell](https://www.learnshell.org/).

## Sperimentazione successiva
- Memorizza le misure in un file.<br>
(Suggerimento: dai un'occhiata ai comandi Linux [tail](https://www.ionos.it/digitalguide/server/configurazione/comando-tail-di-linux/), [cat](https://www.ionos.it/digitalguide/server/configurazione/linux-comando-cat/), [append](https://www.cyberciti.biz/faq/linux-append-text-to-end-of-file/), o [BareTail](http://www.baremetalsoft.com/baretail/) in Windows)
- Dal file salvato, attiva un alert con il valore più alto.
(Suggerimento: dai un'occhiata ai comandi Linux [grep](https://www.ibm.com/docs/it/aix/7.3?topic=g-grep-command), [awk](https://www.ionos.it/digitalguide/server/configurazione/comando-awk-su-linux/). In python dai un'occhiata ai comandi [open](https://flaviocopes.com/linux-command-open/), [subprocess](https://docs.python.org/3/library/subprocess.html))
- Prova a eseguire Get_Value_Linux.sh in Windows. Suggerimenti: usa [Cygwin](https://www.cygwin.com/) e  verifica la directory in cui è installato mosquitto
