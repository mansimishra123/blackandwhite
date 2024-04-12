import paho.mqtt.client as mqtt
import time
from flask import Flask

app = Flask(__name__)



def on_connect(client, userdata, flags, rc): 
    client.subscribe("topicName/humidity")

def on_message(client, userdata, msg):
    global humidity
    humidity = float(msg.payload.decode())

@app.route('/', methods=['GET'])
def check_humidity():
    client = mqtt.Client()
    client.on_connect = on_connect
    client.on_message = on_message

    client.connect("broker.emqx.io", 1883)
    client.loop_start()

    for i in range(0,10):
        time.sleep(0.005)
        print("Humidity:", humidity)
        return render_template('index.html',status=int(detection))
        humidity=30 or 80

    loop_stop()

if __name__ == '__main__':
    app.run(port=5001)
