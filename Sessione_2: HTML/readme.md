Ciao,<br>
questa sessione illustra come  visualizzare i dati provenienti dal sensore SEN5 su una pagina web. <br>
Il codice HTML fornisce una struttura di base per la pagina web, mentre il JavaScript è responsabile della gestione e dell'aggiornamento dei valori del sensore.

## Crea la tua prima pagina AURA

1. Clona il repository o scarica i file.
2. Apri il file HTML (`index.html`) nel tuo browser.
3. Modifica il valore di `auraKit` con il device name_serial number, che per il kit aura è del tipo BSAV00_0001.
4. Personalizza il file HTML a tuo piacimento.

## Dettagli sul codice 

Il file HTML (`aura.html`) contiene elementi `<p>` che mostrano i valori come la temperatura, umidità e livello di particolato.
Il JavaScript all'interno del file gestisce la sostituzione degli ID degli elementi HTML con quelli relativi ai dati provenienti dal sensore. Inoltre, sono inclusi i file JavaScript necessari per la connessione e l'aggiornamento dei dati tramite MQTT.

## Strumenti utilizzati

- Browser web compatibile con HTML5 e JavaScript abilitato (di solito già lo è).
- [MQTT.js](https://cdnjs.cloudflare.com/ajax/libs/mqtt/4.2.7/mqtt.min.js): Libreria JavaScript per la comunicazione tramite MQTT.
- `mqtt.js`: File JavaScript per gestire la connessione e l'aggiornamento dei dati dei sensori.

## Sperimentazione successiva

- Visualizza dati acquisiti da altro sensore<br>
- Riporta dati tabella in file HTML  <br>

- Crea grafico delle misure<br>
Usa la libreria JavaScript Chart.js per visualizzare i valori dei sensori in un grafico. Ecco un esempio di come potresti farlo:

1. Aggiungi la libreria Chart.js al tuo progetto HTML. Puoi farlo includendo questo script nel tuo file HTML:

    ```html
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    ```

2. Modifica il tuo file JavaScript per ottenere i dati dai sensori e memorizzarli in un array.

3. Utilizza Chart.js per creare un grafico che rappresenti graficamente i dati dei sensori. Ad esempio, potresti creare un grafico a linee per tracciare la variazione della temperatura nel tempo.

4. Aggiungi il grafico alla tua pagina HTML in modo che sia visibile insieme agli altri valori dei sensori.

Puoi consultare la documentazione di Chart.js per ulteriori istruzioni e opzioni di personalizzazione: [Documentazione Chart.js](https://www.chartjs.org/docs/latest/).
