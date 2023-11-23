Ciao,<br>
questa sessione illustra come  visualizzare i dati provenienti dal sensore SEN5 su una pagina web. <br>
Il codice HTML fornisce una struttura di base per la pagina web, mentre il JavaScript è responsabile della gestione e dell'aggiornamento dei valori del sensore.

## Istruzioni

1. Clona il repository o scarica i file.
2. Apri il file HTML (`index.html`) nel tuo browser.
3. Modifica il valore di `auraKit` con il device name_serial number, che per il kit aura è del tipo BSAV00_0001.
4. Personalizza il file HTML a tuo piacimento.

## Implementazione

Il file HTML (`index.html`) contiene elementi `<p>` che mostrano i valori come la temperatura, umidità e livello di particolato.
Il JavaScript all'interno del file gestisce la sostituzione degli ID degli elementi HTML con quelli relativi ai dati provenienti dal sensore. Inoltre, sono inclusi i file JavaScript necessari per la connessione e l'aggiornamento dei dati tramite MQTT.

## Strumenti utilizzati

- Browser web compatibile con HTML5 e JavaScript abilitato (di solito già lo è).
- [MQTT.js](https://cdnjs.cloudflare.com/ajax/libs/mqtt/4.2.7/mqtt.min.js): Libreria JavaScript per la comunicazione tramite MQTT.
- `mqtt.js`: File JavaScript per gestire la connessione e l'aggiornamento dei dati dei sensori.

## Sperimentazione successiva

Visualizza dati acquisiti da altro sensore. 
