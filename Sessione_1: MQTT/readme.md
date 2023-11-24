Ciao,<br>
il tuo KIT AURA rileva nell’aria la presenza di elementi inquinanti grazie a sensori.<br>
I valori di gas inquinanti sono trasmessi anche ad un broker ([MQTT](https://aws.amazon.com/it/what-is/mqtt/)). <br>
Ecco come visualizzare le misure.<br>


## 1. Installa il Client MQTT e Connettilo al Broker

- Installa e avvia [MQTT Explorer](http://mqtt-explorer.com/) 
- Crea una connessione
- Inserisci l'indirizzo IP del broker MQTT (per il kit AURA è **`test.mosquitto.org`**) e la porta del broker MQTT (per il kit AURA è la **`1883`**)
- Lascia vuoti i campi Username e Password (la connessione al kit AURA non richiede credenziali)
- Connettiti.

## 2. Visualizza i Valori di un Sensore

 Esegui le operazioni indicate nel [video](https://www.youtube.com/watch?v=pvuVjJ0AnrQ)
 
 Se non ti è possibile, segui le seguenti istruzioni:<br>
- Il tuo dispositivo invia messaggi al broker test.mosquitto.org. Nei messaggi è presente il nome del tuo dispositivo. <br>
   Il nome  è la concatenazione del modello e del numero di serie, riportati su etichetta interna al dispositivo. <br>
   In MQTT Explorer, inserisci nella barra di ricerca modello è numero di serie del tuo dispositivo (esempio:  **`BSAV00_0001`**).
- Dopo poco, MQTT Explorer mostrerà solo i sensori del tuo kit AURA. Tra questo c'è il sensore SEN5.
- Espandi `SEN5` per vedere i valori rilevati da questo sensore.
- Clicca una riga (Es. PM2.5).
- A destra MQTT Explorer mostra un elenco di variabili e valori, del tipo "v": 7.6. (Per PM2.5 le variabili sono: "t" - tempo, "n" - device name_serial number, "d" - id dispositivo, "p" - grandezza misurata, "v" - valore, "u" - unità di misura).
-  A sinistra della variabile “v” trovi un'icona che serve a visualizzare il grafico. Prova a cliccare. 
-  Il grafico si aggiorna in tempo reale ogni volta il sensore invia i dati via MQTT.

Ecco come dovrebbe appararire la tua schermata alla fine di questa lezione: 

![Esempio Finale](https://github.com/OfficineAura/OfficineAura_Lezioni/blob/main/Sessione_1%3A%20MQTT/Mqtt_explorer_example.png)
  

## Strumenti utilizzati

- MQTT Client: [Explorer](http://mqtt-explorer.com/)
- MQTT Broker: [test.mosquitto.org](https://test.mosquitto.org/)


## Sperimentazione successiva
Prova a modificare grafico in MQTT Explorer<br>
Ripeti la sessione utilizzando client MQTT: [`MQTTX`](https://mqttx.app/).

