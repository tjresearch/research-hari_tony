var mraa = require('mraa');
var pwmPin = new mraa.Pwm(5);
pwmPin.period_ms(20);
pwmPin.pulsewidth_ms(10);
pwmPin.enable(true);
//function loop(){pwmPin.write(0);}
//pwmPin.write(0);
a=function(){console.log('set 0');pwmPin.write(.5);}
a();
setTimeout(function(){pwmPin.enable(false);},500000);
