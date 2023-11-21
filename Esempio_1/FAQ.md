## FAQ (Domande Frequenti)

1. **[Dove trovo il serial number del mio dispositivo?](#domanda-1)**
   - **Risposta:** Il serial number si trova sul dispositivo stesso o nelle informazioni fornite con il kit. In MQTT Explorer, inserisci il topic `device name_serial number` per selezionare i dati relativi al tuo kit.

2. **[Cosa significa "p", "v", e "u" nei dati del gas?](#domanda-2)**
   - **Risposta:** 
     - "p": Nome identificativo del gas.
     - "v": Valore del gas.
     - "u": Unità di misura del gas.

3. **[Posso personalizzare il grafico?](#domanda-3)**
   - **Risposta:** Certamente! Dopo aver cliccato sull'icona "Settings" a destra del grafico, puoi modificare impostazioni come il colore del grafico, l'arco temporale e altro ancora.

4. **[Quanto spesso si aggiornano i dati e il grafico?](#domanda-4)**
   - **Risposta:** I dati e il grafico si aggiornano in tempo reale ogni volta che il sensore invia nuovi dati tramite MQTT.

5. **[Posso vedere un esempio finale di come dovrebbe apparire la schermata?](#domanda-5)**
   - **Risposta:** Certamente! Ecco un [esempio finale](https://github.com/OfficineAura/OfficineAuraEsempi/blob/main/Esempio_1/Mqtt_explorer_example.png) della schermata con dati e grafico.

6. **[Come posso interpretare i dati del sensore SEN5?](#domanda-6)**
   - **Risposta:** I dati includono informazioni come il nome del gas ("p"), il suo valore ("v") e l'unità di misura ("u"). Puoi fare riferimento al manuale del tuo kit AURA per ulteriori dettagli sui gas rilevati.

7. **[Perché quando mi connetto a test.mosquitto vedo tutti quei nomi sulla sinistra?](#domanda-7)**
   - **Risposta:** Test.mosquitto è un broker MQTT pubblico condiviso da molte persone. I nomi sulla sinistra rappresentano i vari topics (argomenti) che sono stati pubblicati su quel broker da diverse fonti. Puoi ignorarli se non sono pertinenti ai tuoi dati specifici.
