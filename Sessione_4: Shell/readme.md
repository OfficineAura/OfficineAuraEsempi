Ciao, <br>
Vediamo come connettersi e ricevere i dati dai sensori tramite MQTT. <br>
Assicurati di configurare correttamente i dettagli del broker e i topic per ottenere i dati desiderati. 

Let's go with Shell on Linux and Windows!

## Shell_Linux 

Il file `aura.sh` è uno script che utilizza il comando `mosquitto_sub` per ascoltare i messaggi da un broker MQTT.

1. Assicurati di avere `mosquitto_sub` installato sul tuo sistema. Se non lo hai, installalo da [Mosquitto.org](https://mosquitto.org/download/).
2. Scarica il file aura.sh e esegui 'chmod +x aura.sh'
3. Il tuo dispositivo invia messaggi al broker test.mosquitto.org. Nei messaggi è presente il nome del tuo dispositivo. <br>
   Il nome  è la concatenazione del modello e del serial number, riportati su etichetta interna al dispositivo. <br>
   Nel file aura.sh sostituisci `"BSAV00_0103/#"` con modello e del serial number del tuo dispositivo. 
4. Esegui aura.sh per avviare l'ascolto dei messaggi dal broker.


## Strumenti utilizzati
- [Shell](https://www.learnshell.org/).

## Sperimentazione successiva
- Memorizza le misure in un file.<br>
(Suggerimento: dai un'occhiata ai comandi Linux [tail](https://www.ionos.it/digitalguide/server/configurazione/comando-tail-di-linux/), [cat](https://www.ionos.it/digitalguide/server/configurazione/linux-comando-cat/), [append](https://www.cyberciti.biz/faq/linux-append-text-to-end-of-file/), o [BareTail](http://www.baremetalsoft.com/baretail/) in Windows)
- Dal file salvato, attiva un alert con il valore più alto.<br>
(Suggerimento: dai un'occhiata ai comandi Linux [grep](https://www.ibm.com/docs/it/aix/7.3?topic=g-grep-command), [awk](https://www.ionos.it/digitalguide/server/configurazione/comando-awk-su-linux/))
- Prova a eseguire aura.sh in Windows. <br>
(Suggerimento: usa [Cygwin](https://www.cygwin.com/) e  verifica la directory in cui è installato mosquitto)
