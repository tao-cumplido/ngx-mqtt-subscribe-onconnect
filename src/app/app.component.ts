import { Component } from '@angular/core';
import { MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-mqtt-subscribe-on-connect';

  constructor(mqtt: MqttService) {
    mqtt.onMessage.subscribe((message) => {
      console.log(message);
    });

    mqtt.connect();

    mqtt.observe('$SYS/broker/version');
  }
}
