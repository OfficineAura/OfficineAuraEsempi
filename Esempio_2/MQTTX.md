
# Guida all'Utilizzo del Biofiltro con MQTTX
<p align="center">
  <img src="https://github.com/OfficineAura/OfficineAuraEsempi/blob/main/Esempio_1/Gruppo-FOS_Officine-AURA_startup_logo_03.11.png" alt="Logo del Progetto" width="150" height="150" border-radius:"50%;"">
</p>

Questa guida fornisce istruzioni passo-passo per:
1. Installare un client MQTT e connettersi a un broker MQTT ([AWS MQTT](https://aws.amazon.com/it/what-is/mqtt/)).
2. Visualizzare i valori rilevati da un sensore presente nel biofiltro.
3. Analizzare un gas rilevato da un sensore nel biofiltro.
4. Generare e visualizzare un grafico relativo a quel gas in un dato intervallo temporale.

## Prerequisiti

- [MQTTX](https://mqttx.app/)
- [Test.mosquitto.org](https://test.mosquitto.org/)
- Serial number del dispositivo

## 1. Installazione del Client e Connessione al Broker

- Installare MQTTX da [questo link](https://mqttx.app/).
- Avviare l'applicazione e aggiungere una connessione.
- Inserire il nome e l'indirizzo IP del broker MQTT, ad esempio, test.mosquitto.org [Scopri di più...](https://test.mosquitto.org/).
- Inserire la porta del broker MQTT (in questo caso è la 1883).
- Lasciare vuoti i campi Username e Password.
- Lasciare gli altri parametri vuoti e/o di default.
- Connettersi al broker.

## 2. Visualizzazione dei Valori di un Sensore

- Conoscere il serial number del dispositivo.
- Aggiungere una nuova Subscription e nella tab "Topic" aggiungere il nome del dispositivo: `device name_serial number` (ad esempio: `BSAV00_SerialNumber` del tuo dispositivo).
- Lasciare gli altri parametri di default.
- Attendere la pubblicazione dei valori del sensore SEN5x.
- 
- 

## 3. Analisi di un Gas e Generazione del Grafico

## 4. Visualizzazione del grafico


## 5. Note Aggiuntive

Seguendo questi passaggi, dovresti essere in grado di connetterti ai dati inviati dal tuo biofiltro via MQTT, visualizzare i dati dei sensori e analizzare i gas rilevati tramite visualizzazione grafica.

## 6. Conclusione 

Ecco come dovrebbe appararire la tua schermata alla fine di questa lezione: 

