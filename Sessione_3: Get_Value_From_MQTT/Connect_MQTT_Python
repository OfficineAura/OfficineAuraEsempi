import paho.mqtt.client as mqttClient
import time
  
def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connessione al broker riuscita!")
        global Connected  # Usiamo una variabile globale per capire se siamo connessi
        Connected = True  # Siamo connessi
  
    else:
        print("Ops.. Qualcosa è andato storto.")

def on_message(client, userdata, message):
    print(f"Ricevuto messaggio sul topic {message.topic}: {str(message.payload.decode('utf-8'))}")

Connected = False   # Variabile globale per lo stato della connessione

broker_address = "test.mosquitto.org"  # Indirizzo del broker
port = 1883                            # Porta del broker

client = mqttClient.Client("Python")   # Creiamo una nuova istanza per la connessione
client.on_connect = on_connect         # Collega la funzione di connessione al callback
client.on_message = on_message         # Collega la funzione di ricezione messaggi al callback

client.connect(broker_address, port=port)  # Connettiti al broker
client.loop_start()                       # Avvia il ciclo di ascolto

while Connected != True:    # Aspetta che la connessione vada a buon fine
    time.sleep(0.1)

client.subscribe("BSAV00_0103/#")  # Modifica BSAV00_0103 con il device_name (BSAV00) e serial_number (in questo caso 0103) del tuo kit Aura e ricevi in tempo reale tutti i messaggi.

try:
    while True:
        time.sleep(1)

except KeyboardInterrupt:
    print("Usciamo di qui")
    client.disconnect() #Effettuiamo la disconnessione al broker
    client.loop_stop()
