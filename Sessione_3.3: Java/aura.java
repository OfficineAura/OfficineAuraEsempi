//Importare la libreria PAHO necessaria in Java per effettuare la connessione MQTT. Ricorda di implementare le dependency necessarie.
import org.eclipse.paho.client.mqttv3.*;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;

import java.util.concurrent.CountDownLatch;

public class Aura implements MqttCallback {

    private static final String MQTT_HOST = "tcp://test.mosquitto.org:1883"; // Indirizzo e porta del broker MQTT

    public Aura(String nodeId) throws MqttException, InterruptedException {
        // Creazione di un oggetto MqttClient con il nome "Testing"
        MqttClient mqttClient = new MqttClient(MQTT_HOST, "Testing", new MemoryPersistence());

        // Configurazione delle opzioni di connessione
        MqttConnectOptions connOpts = new MqttConnectOptions();
        connOpts.setCleanSession(true);

        // Connessione al broker MQTT
        mqttClient.connect(connOpts);

        // Configurazione del callback per gestire gli eventi MQTT
        mqttClient.setCallback(this);

        // Sottoscrizione al topic "BSAV00_0001" con QoS 0 (usato di default)
        mqttClient.subscribe(nodeId, 0);

        // Utilizzo di un oggetto CountDownLatch per bloccare il thread principale fino a quando il messaggio viene ricevuto. Cosi facendo bloccheremo il thread principale fino a quando non viene ricevuto un messaggio MQTT.
        CountDownLatch latch = new CountDownLatch(1);

        latch.await(); // Blocca qui fino a quando il messaggio viene ricevuto
    }

    public static void main(String[] args) throws MqttException, InterruptedException {
        Aura aura = new Aura("BSAV00_0001");
    }

    @Override
    public void messageArrived(String topic, MqttMessage message) throws Exception {
        System.out.println("Message: " + new String(message.getPayload()));
    }
}
