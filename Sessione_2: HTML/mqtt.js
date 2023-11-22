
console.log(mqtt)

function connectMqttGetValues() {
    const options = {
        connectTimeout: 30000,
        clientId: 'officine_aura_random' + Math.floor(Math.random() * 10000),
    }

    const connectUrl = 'wss://test.mosquitto.org:8081'
    const client = mqtt.connect(connectUrl, options)
    client.on('connect', (connack) => {
        console.log("connected");
        client.subscribe('BSAV00_0103/#')
        console.log("subscribed");
    })

    client.on('reconnect', (error) => {
        console.log('reconnecting:', error)
    })

    client.on('error', (error) => {
        console.log('Connection failed:', error)
    })

    client.on('message', (topic, message) => {
        try {
            const parsedMessage = JSON.parse(message.toString());
            console.log("out_" + parsedMessage["n"] + "_" + parsedMessage["p"]);
            console.log('Parsed Message:', parsedMessage);

            updateUIField("it", parsedMessage);
        } catch (error) {
            console.error('Error parsing message as JSON:', error);
        }
    })
}

function disconnectMqtt() {
    client.end();
}

function updateUIField(lang, element) {
    if (lang === null || lang === "" || lang === undefined) {
        lang = "it";
    }
    if (element.hasOwnProperty("n") && element.hasOwnProperty("p") && element.hasOwnProperty("v")) {

        var groupName = element.n;
        var name = element.p;
        var propertyValues = element.v;
        var propertyU = element.u;

        id = groupName + "_" + name;
        if (document.getElementById("out_" + id)) {
            var elementById = document.getElementById("out_" + id);

            var v = parseFloat(propertyU);

            if (element.hasOwnProperty("v") && element.hasOwnProperty("u") && (isNaN(v) || (v !== 0 && v !== 1) || element.u !== "")) {
                if (isNaN(v)) {
                    elementById.innerHTML = element.v;

                } else {
                    elementById.innerHTML = v;
                }
            } if ((element.hasOwnProperty("v") && element.hasOwnProperty("u") && element.hasOwnProperty("t") && (isNaN(v) || (v !== 0 && v !== 1) || element.u !== ""))) {
                idtime = groupName + "_" + "t";
                var elementById2 = document.getElementById("out_" + idtime);
                elementById2.innerHTML = new Date(parseFloat(element.t)).toLocaleString(lang);
                console.log(idtime);
            } else if (element.hasOwnProperty("v")) {

                elementById.innerHTML = parseFloat(element.v) > 0.5 ? "<img width=16 src=\"../themes/mytheme/images/" + propertyKey + "_on.png\">" : "<img width=16 src=\"../themes/mytheme/images/" + propertyKey + "_off.png\">";
            } else {
                elementById.innerHTML = "---";
            }
            if (elementById && element.hasOwnProperty("c")) {
                elementById.classList.add(element.c);
            }
        } else {
            console.log("NO: out_" + id + " for: " + propertyValues + ", " + propertyU);
        }
        if (document.getElementById("out_class_" + id)) {
            var elementById = document.getElementById("out_class_" + id);
            if (elementById && element.hasOwnProperty("c")) {
                console.log("Should add className for: " + "out_class_" + id + " (" + elementById + ") to: " + element.c);
                elementById.classList.add(element.c);
                console.log("Added className for: " + "out_class_" + id + " (" + elementById + ") to: " + element.c);
            } else {

            }
        } else {

        }


    }
}

document.addEventListener("DOMContentLoaded", function () {
    connectMqttGetValues();
})
