# Come monitorare lo stato dell’aria con il Kit AURA

Il tuo KIT AURA rileva nell’aria la presenza di elementi inquinanti grazie a sensori.<br>
I valori di gas inquinanti sono trasmessi anche ad un broker ([MQTT](https://aws.amazon.com/it/what-is/mqtt/)). <br>
Ecco come fare per visualizzare misure.<br>

## Prerequisiti

- [MQTT Explorer](http://mqtt-explorer.com/)
- [Test.mosquitto.org](https://test.mosquitto.org/)
- Serial number del dispositivo

## 1. Installa il Client MQTT e Connettilo al Broker

- [Installa](http://mqtt-explorer.com/) MQTT Explorer.
- Avvia l'applicazione e crea una connessione.
- Inserisci l'indirizzo IP del broker MQTT (per il kit AURA l'IP è **`test.mosquitto.org`**) e la porta del broker MQTT (per il kit AURA è la **`1883`**).
- Lascia vuoti i campi Username e Password, la connessione al kit AURA non richiede credenziali.
- Connettiti.<details>Test.mosquitto è un broker MQTT pubblico condiviso da molte persone. I nomi sulla sinistra rappresentano i vari topics (argomenti) che sono stati pubblicati su quel broker da diverse fonti. Puoi ignorarli se non sono pertinenti ai tuoi dati specifici.</details>.


## 2. Visualizza i Valori di un Sensore

- Conosci il serial number del dispositivo.<details>Il serial number si trova sul dispositivo stesso o nelle informazioni fornite con il kit. In MQTT Explorer, inserisci il topic `device name_serial number` per selezionare i dati relativi al tuo kit.</details>.
- Nella barra di ricerca, inserisci il topic: `device name_serial number` (per il kit AURA è un valore tipo: **`BSAV00_0001`**). In questo modo selezioni solo l’albero di valori relativi al kit AURA.
- Dopo qualche minuto, vedrai la pubblicazione dei valori del sensore SEN5.
- Espandi il sotto-topic `SEN5` e troverai i valori di tutti i gas rilevati da questo sensore.
- Clicca su un gas (Es. PM2.5).

## 3. Analizza la struttura di un Gas e Genera il Grafico

- A destra troverai un formato contenente diverse chiavi-valori.
- Ecco come appare: `{"key1": value1,"key2": value2,// ...}`
-  “Key” rappresenta il nome identificativo mentre “value” è il valore corrispondente.<details>- "p": Nome identificativo del gas.
     - "v": Valore del gas.
     - "u": Unità di misura del gas.
</details>.
-  A destra della chiave “v” trovi un'icona che serve a visualizzare quello specifico valore su un grafico. Prova a cliccare. 

## 4. Analizza e Personalizza il Grafico

-  A sinistra si sarà aperto il grafico contenente i valori del gas.<details>Certamente! Dopo aver cliccato sull'icona "Settings" a destra del grafico, puoi modificare impostazioni come il colore del grafico, l'arco temporale e altro ancora.</details>.
-  Il grafico si aggiorna in tempo reale ogni volta il sensore invia i dati via MQTT.<details>I valori del gas visualizzati nel grafico si riferiscono all'arco temporale specifico indicato nella finestra di visualizzazione. Dopo aver cliccato sull'icona "Settings", puoi verificare e personalizzare l'intervallo di tempo per analizzare i dati del gas in un contesto temporale diverso.</details>.

## 5. Note Aggiuntive

Seguendo questi passaggi, dovresti essere in grado di connetterti ai dati inviati dal tuo biofiltro via MQTT, visualizzare i dati dei sensori e analizzare i gas rilevati tramite visualizzazione grafica.

## 6. Mettiti alla prova

- Prova a eseguire gli stessi passaggi utilizzato un altro client MQTT, `MQTTX`.
- Scaricalo da [questo link](https://mqttx.app/).

## 7. Conclusione 

Ecco come dovrebbe appararire la tua schermata alla fine di questa lezione: 

![Esempio Finale](https://github.com/OfficineAura/OfficineAuraEsempi/blob/main/Esempio_1/Mqtt_explorer_example.png)
