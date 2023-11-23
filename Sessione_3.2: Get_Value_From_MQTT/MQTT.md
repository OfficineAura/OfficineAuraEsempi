# Connessione e Recupero Dati da MQTT

Qui sono presentati due script in due linguaggi di programmazione per connettersi e ottenere valori da un broker MQTT.

## Script in C++ (Arduino)

### Connessione a MQTT tramite Arduino

Gli script utilizzano le librerie `WiFi.h` e `PubSubClient.h` per connettersi e ottenere i valori da un broker MQTT.

### Istruzioni per l'Utilizzo:

- Imposta le credenziali della rete WiFi (`ssid` e `password`).
- Cambia il nome del topic a cui iscriversi in quello del tuo kit Aura.
- Utilizza la funzione di callback `callback` per gestire i messaggi ricevuti.

## Script in Java

### Connessione a MQTT tramite Java

L'implementazione in Java richiede le librerie `org.eclipse.paho.client.mqttv3` per connettersi e ricevere i messaggi da un broker MQTT.

### Istruzioni per l'Utilizzo:

- Specifica l'indirizzo e la porta del broker MQTT (`host`).
- Utilizza `MqttClient` e `MqttCallback` per connetterti e gestire i messaggi ricevuti.

---

Questi script consentono di connettersi al broker MQTT e recuperare i dati dai sensori. Segui le istruzioni nel codice per configurare la connessione e adattarla alle tue esigenze.
