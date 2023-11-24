Ciao,<br>
Vediamo come connettersi e ricevere i dati dai sensori tramite MQTT.
Assicurati di configurare correttamente i dettagli del broker e i topic per ottenere i dati desiderati.

Let's go with Java!

## Java

il file 'aura.java' è un codice Java che utilizza la libreria `org.eclipse.paho.client.mqttv3` per connettersi e ricevere i messaggi da un broker MQTT.

1. Assicurati di avere incluso la libreria: <br>
```xml

<!-- https://mvnrepository.com/artifact/org.eclipse.paho/org.eclipse.paho.client.mqttv3 -->
<dependency>
    <groupId>org.eclipse.paho</groupId>
    <artifactId>org.eclipse.paho.client.mqttv3</artifactId>
    <version>1.2.5</version>
</dependency>
```

2. Scarica il file aura.java
3. Il tuo dispositivo invia messaggi al broker test.mosquitto.org. Nei messaggi è presente il nome del tuo dispositivo.
Il nome è la concatenazione del modello e del serial number, riportati su etichetta interna al dispositivo.
Nel file aura.java sostituisci "BSAV00_0103/#" con modello e del serial number del tuo dispositivo.

## Strumenti Utilizzati
- [Java](https://www.java.com/en/download/help/whatis_java.html)

## Sperimentazione successiva
- Prova a pubblicare un valore sul tuo dispositivo.
(Suggerimento: dai un'occhiata alla libreria [mqttv3](https://public.dhe.ibm.com/software/dw/webservices/ws-mqtt/mqtt-v3r1.html) per capire come fare).
