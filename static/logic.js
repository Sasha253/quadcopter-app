let bleConnectionButton = document.querySelector('.bleConnectionButton');
let bleInitialiseButton = document.querySelector('.bleInitialiseButton');
bleConnectionButton.addEventListener('click',function(){

    console.log('new switch click, connect');
    led.connect()
        .then(() => {
          let connected = document.querySelector("h2");
          connected.innerHTML = "connected";
          bleConnectionButton.stlye.display = "none"
          bleInitialiseButton.stlye.display = "block"
          console.log('connected')})
        .catch(error => { console.log('connect error!');
      });
  });

function powerOn() {
    led._writeCharacteristic(led.characteristic1UUID, new Uint8Array([1]))
      .then(() => console.log('wrote 1'))
      .catch(error => {console.log('write error');
    });
}

function powerOff() {
    led._writeCharacteristic(led.characteristic1UUID, new Uint8Array([0]))
      .then(() => console.log('wrote 0'))
      .catch(error => {console.log('write error');
    });
}

function initialise() {
  location.href = "https://sasha253.github.io/quadcopter-app/"
}

function videoStreamer() {
  location.href = "https://sasha253.github.io/quadcopter-app/video-stream"
}