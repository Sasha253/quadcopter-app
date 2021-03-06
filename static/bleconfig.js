(function() {
    'use strict';
  
    class Led{
  
      /**
       * customize your project here to reflect the uuid of your service and characteristics.
       */
      constructor() {
          this.deviceName = 'led';
          this.serviceUUID = '917649a0-d98e-11e5-9eec-0002a5d5c51b';
          this.characteristic1UUID = '917649a1-d98e-11e5-9eec-0002a5d5c51b';
          this.device = null;
          this.server = null;
          // The cache allows us to hold on to characeristics for access in response to user commands 
          this._characteristics = new Map();
      }
  
      connect(){
          return navigator.bluetooth.requestDevice({
            acceptAllDevices: true
          })
          .then(device => {
            
              this.device = device;
              console.log('connecting to device:', device);
              return device.gatt.connect();
          })
          
      }
  
    _cacheCharacteristic(service, characteristicUuid){
      return service.getCharacteristic(characteristicUuid)
      .then(characteristic => {
        this._characteristics.set(characteristicUuid, characteristic);
      });
    }
  
   _readCharacteristic(characteristicUuid) {
     let characteristic = this._characteristics.get(characteristicUuid);
     return characteristic.readValue()
     .then(value => {
       value - value.buffer ? value : new DataView(value);
       return value;
     });
  
   }
   _writeCharacteristic(characteristicUuid, value){
     let characteristic = this._characteristics.get(characteristicUuid);
     return characteristic.writeValue(value);
   }
  }
  
  window.led = new Led();
  
  })();
