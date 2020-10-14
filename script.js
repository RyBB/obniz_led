(() => {
  'use strict';

  const obniz = new Obniz();
  obniz.onconnect = async () => {
    $('#text').text('obnizに接続しました。');
    const led1 = obniz.wired('LED', {anode: 0, cathode: 1});
    const led2 = obniz.wired('LED', {anode: 10, cathode: 11});

    $('#before').on('click', () => {
      led1.on();
      setTimeout(() => {
        led1.off();
      }, 1000);
    });
    $('#after').on('click', () => {
      led2.on();
      setTimeout(() => {
        led2.off();
      }, 1000);
    });
  };
})();