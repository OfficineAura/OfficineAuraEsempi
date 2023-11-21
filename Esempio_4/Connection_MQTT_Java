//Importare la libreria PAHO necessaria in Java per effettuare la connessione MQTT. Ricorda di implementare le dependency necessarie.
import org.eclipse.paho.client.mqttv3.*;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;

import java.util.concurrent.CountDownLatch;

public class MainClass {

    public static void main(String[] args) {
        String host = "tcp://test.mosquitto.org:1883"; // Indirizzo e porta del broker MQTT

        // Creazione di un oggetto MqttClient con il nome "Testing"
        MqttClient mqttClient = new MqttClient(host, "Testing", new MemoryPersistence());

        // Configurazione delle opzioni di connessione
        MqttConnectOptions connOpts = new MqttConnectOptions();
        connOpts.setCleanSession(true);

        // Connessione al broker MQTT
        mqttClient.connect(connOpts);

        // Configurazione del callback per gestire gli eventi MQTT
        mqttClient.setCallback(new MqttCallback() {

            public void messageArrived(String topic, MqttMessage message) throws Exception {
                System.out.println("Message: " + new String(message.getPayload()));
            }
        });

        // Sottoscrizione al topic "BSAV00_0001" con QoS 0 (usato di default)
        try {
            mqttClient.subscribe("BSAV00_0001", 0);
        } catch (MqttException e) {
            e.printStackTrace();
        }

        // Utilizzo di un oggetto CountDownLatch per bloccare il thread principale fino a quando il messaggio viene ricevuto. Cosi facendo bloccheremo il thread principale fino a quando non viene ricevuto un messaggio MQTT.
        CountDownLatch latch = new CountDownLatch(1);

        try {
            latch.await(); // Blocca qui fino a quando il messaggio viene ricevuto
        } catch (InterruptedException e) {
        }
    }
}
