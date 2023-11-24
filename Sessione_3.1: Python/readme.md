Ciao, <br>
Vediamo come connettersi e ricevere i dati dai sensori tramite MQTT. <br>
Assicurati di configurare correttamente i dettagli del broker e i topic per ottenere i dati desiderati. 

Let's go with Python on Linux and Windows!

## Python 

Il file `aura.py` è uno script che utilizza la libreria `paho-mqtt` per connettersi a un broker MQTT e ricevere i messaggi dai sensori. 

1. Assicurati di avere Python installato sul tuo sistema, [Windows](https://www.python.org/downloads/windows/), Linux 'sudo apt-get install python3.6' .
2. Scarica il file aura.py
3. Installa la libreria `paho-mqtt` eseguendo il comando:   'pip install paho-mqtt', valido su entrambi i sistemi.
4. Il tuo dispositivo invia messaggi al broker test.mosquitto.org. Nei messaggi è presente il nome del tuo dispositivo. <br>
   Il nome  è la concatenazione del modello e del serial number, riportati su etichetta interna al dispositivo. <br>
   Nel file aura.py sostituisci `"BSAV00_0103/#"` con modello e del serial number del tuo dispositivo. 
5. Esegui lo script per avviare la connessione al broker e ricevere i dati.

## Strumenti utilizzati
- [Python](https://www.python.org/).

## Sperimentazione successiva
- Memorizza le misure in un file.<br>
- Dal file salvato, attiva un alert con il valore più alto.<br>
(Suggerimento: dai un'occhiata ai comandi python: [open](https://flaviocopes.com/linux-command-open/), [subprocess](https://docs.python.org/3/library/subprocess.html))
