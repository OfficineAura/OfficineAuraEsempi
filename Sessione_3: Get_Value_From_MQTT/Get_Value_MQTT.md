# Leggi misura da sensore.

Il sensore comunica le misure al broker MQTT [Sesssione_1: MQTT](https://github.com/OfficineAura/OfficineAura_Sperimentazione/tree/main/Sessione_1:%20MQTT).<br>
La logica implementabile è la stessa per tutti i linguaggi utilizzati in queste demo. <br>
Ecco come fare.<br>

## Logica di programmazione

- Identifica la libreria;
- Importala sul tuo IDE; 
- Utilizza le funzioni della libreria per effettuare la connessione; 
- Sottoscriviti ad un topic;
- Implementa una funzione di callback per gestire i messaggi in arrivo;
- Riprendi i valori di un determinato sensore; 
- Stampa i valori;
- Disconnessione sicura.

## 1. Installa libreria necessaria

Hai bisogno di una libreria MQTT in qualsiasi linguaggio di programmazione per semplificare l'implementazione delle funzionalità di comunicazione con il protocollo MQTT.
Alcune delle librerie comuni in diversi linguaggi di programmazione sono: 
- Python: **`paho-mqtt`**
- JavaScript: **`mqtt.js`**
- Java: Eclipse **`Paho`**
- C#: **`MQTTnet`**
- Arduino: **`PubSubClient`**

## 2. Effettua la Connessione

Una volta trovata la libreria da utilizzare, non ti resterà che utilizzarla per eseguire la connessione.<details>
- Definisci i dettagli del Broker MQTT (Indirizzo IP e porta);
- Inizializza un oggetto MQTT client nel modo in cui lo richiede la libreria che stai utilizzando;
- Implementa una funzione di connessione al broker MQTT;
- Aggiungi la logica per la sottiscrizione al topic di interesse (ad esempio: **`"BSAV00_0001/"`**;
- Implementare una funzione di callback per gestire i messaggi ricevuti dal broker;
- Avvio del loop per mantenere la connessione al broker.</details> 

## 3. Riprendi i valori di un determinato sensore

Una volta effettuata la connessione, potrai utilizzare una delle tante funzionalità della libreria. 
Sottiscriviti al topic di interesse (quello utilizzato dal sensore per pubblicare i dati) e riprendi i valori di quel topic.<details>
- Specifica il topic al quale il sensore pubblica i dati (ad esempio **`"sensor/temperature"`**;
- Implementa una funzione di messaggistica che gestirà i messaggi ricevuti dal broker quando il sensore pubblica nuovi dati.
- Estrai i valori dal payload del messaggio e gestiscili secondo le tue esigenze (ad esempio: stampali in console).</details> 

## 4. Stampa i valori in console

Una volta ripresi i valori, dovrai implementare un meccanismo per visualizzarli, ad esempio, attraverso la console di output (Es. System.out.println o Serial.println);

## 5. Note Aggiuntive

Seguendo questi passaggi, dovresti essere in grado di sviluppare la logica necessaria per connetterti ad una queue MQTT, riprendere i valori e stamparli in console.

## 6. Mettiti alla prova

- Prova a eseguire questi passaggi utilizzando un linguaggio di programmazione. 
