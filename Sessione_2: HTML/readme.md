Ciao,<br>
questa sessione illustra come  visualizzare i dati provenienti da sensori su una pagina web. <br>
Il codice HTML fornisce una struttura di base per la pagina web, mentre il JavaScript è responsabile della gestione e dell'aggiornamento dei valori dei sensori.

## Istruzioni

1. Clona il repository o scarica i file.
2. Apri il file HTML (`index.html`) nel tuo browser.
3. Modifica il valore di `auraKit` con il `device_name` e `serial_number` del tuo kit Aura Smart.
4. Personalizza la pagina come preferisci aggiungendo o modificando gli elementi HTML.

## Implementazione

Il file HTML (`index.html`) contiene elementi `<p>` che mostrano i valori dei sensori, come la temperatura, umidità e livello di particolato.
Il JavaScript all'interno del file gestisce la sostituzione degli ID degli elementi HTML con quelli relativi ai dati provenienti dai sensori. Inoltre, sono inclusi i file JavaScript necessari per la connessione e l'aggiornamento dei dati tramite MQTT.

## Requisiti

- Browser web compatibile con HTML5 e JavaScript abilitato.

## Risorse esterne

- [MQTT.js](https://cdnjs.cloudflare.com/ajax/libs/mqtt/4.2.7/mqtt.min.js): Libreria JavaScript per la comunicazione tramite MQTT.
- `mqtt.js`: File JavaScript per gestire la connessione e l'aggiornamento dei dati dei sensori.
