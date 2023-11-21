# Come monitorare lo stato dell’aria con il Kit AURA

Il tuo KIT AURA rileva nell’aria la presenza di elementi inquinanti grazie a sensori. 
I valori di gas inquinanti sono trasmessi anche ad un broker MQTT ([AWS MQTT](https://aws.amazon.com/it/what-is/mqtt/)). 
Ecco come fare per visualizzare misure.

## Prerequisiti

- [MQTT Explorer](http://mqtt-explorer.com/)
- [Test.mosquitto.org](https://test.mosquitto.org/)
- Serial number del dispositivo

## 1. Installa il Client MQTT e connettilo al Broker

- Installa MQTT Explorer da [questo link](http://mqtt-explorer.com/).
- Avvia l'applicazione e crea una connessione.
- Inserisci l'indirizzo IP del broker MQTT (per il kit AURA l'IP è test.mosquitto.org) e la porta del broker MQTT (per il kit AURA è la 1883).
- Lascia vuoti i campi Username e Password, la connessione al kit AURA non richiede credenziali.
- [Connettiti](FAQ.md#domanda-7).

## 2. Visualizzazione dei Valori di un Sensore

- Conosci il serial number del dispositivo.
- Nella barra di ricerca, inserisci il topic: `device name_serial number` (per il kit AURA è un valore tipo: `BSAV00_001`). In questo modo selezioni solo l’albero di valori relativi al kit AURA.
- Dopo qualche minuto, vedrai la pubblicazione dei valori del sensore SEN5.
- Espandi il sotto-topic `SEN5` e troverai i valori di tutti i gas rilevati da questo sensore.
- Clicca su un gas (Es. PM2.5).

## 3. Analisi di un Gas e Generazione del Grafico

- A destra troverai un formato contenente diverse chiavi-valori.
- Ecco come appare: `{"key1": value1,"key2": value2,// ...}`
-  “Key” rappresenta il nome identificativo mentre “value” è il valore corrispondente. 
-  A destra della chiave “v” trovi un'icona che serve a visualizzare quello specifico valore su un grafico. Prova a cliccare.

## 4. Visualizzazione del grafico

-  A sinistra si sarà aperto il grafico contenente i valori del gas. 
-  Il grafico si aggiorna in tempo reale ogni volta il sensore invia i dati via MQTT. 

## 5. Note Aggiuntive

Seguendo questi passaggi, dovresti essere in grado di connetterti ai dati inviati dal tuo biofiltro via MQTT, visualizzare i dati dei sensori e analizzare i gas rilevati tramite visualizzazione grafica.

## 6. Mettiti alla prova

- Prova a eseguire gli stessi passaggi utilizzato un altro client MQTT, MQTTX.
- Scaricalo da [questo link](https://mqttx.app/).

## 7. Conclusione 

Ecco come dovrebbe appararire la tua schermata alla fine di questa lezione: 

![Esempio Finale](https://github.com/OfficineAura/OfficineAuraEsempi/blob/main/Esempio_1/Mqtt_explorer_example.png)
