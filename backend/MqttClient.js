const mqtt = require('async-mqtt');
const client = mqtt.connect('mqtt://mqtt.eclipse.org');

let planObject =  {
  ts: Date.now(),
  device: "some device",
  co: 123123,
  humidity: 123,
  light: true,
  lpg: 123,
  motion: false,
  smoke: 123123,
  temp: 123
};

client.on('connect', async () => {
  console.log("connected!");
  await client.publish("some_topic_test",  JSON.stringify(planObject))
  //await client.publish("blockchain/0x2acB59e05961B59bE33c8F1041345f3920A75740/fact",  JSON.stringify(factObject))
});
