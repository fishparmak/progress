(function(global, factory){
    'use strict';
   
    global.Progress = factory;
   })(this, function () {
    
   
       return new Progress(state = 'animated', prm = 'yes');
   
       function Progress(state, prm) {
           this.state = state;
           this.prm = prm;
           this.value = 0;
   
           this.setMod = function (state, prm= '') {
              
               return this;
           };
   
           this.generateAll();
   
           this.printAll = function() {
               for(var i = 0; i < horoscope.length; i++) {
                   console.log('\nplace: ' + (i+1) + ', sign: ' + horoscope[i].sign + '\nprediction: ' + horoscope[i].prediction + '_____');
               }
               return this;
           }
           this.changeSign = function() {
               this.sign = prompt("Enter your sign");
               return this;
           }
           this.showMyHoroscope = function() {
               for(var i = 0; i < horoscope.length; i++) {
                   if( horoscope[i].sign == this.sign){
                       console.log('\nplace: ' + (i+1) + ', sign: ' + horoscope[i].sign + '\nprediction: ' + horoscope[i].prediction + '_____');
                       break;
                   }
               }
               return this;
           }
           this.showFriendHoroscope = function(friendSign) {
               for(var i = 0; i < horoscope.length; i++) {
                   if( horoscope[i].sign.toLowerCase() == friendSign.toLowerCase()){
                       console.log('\nplace: ' + (i+1) + ', sign: ' + horoscope[i].sign + '\nprediction: ' + horoscope[i].prediction + '_____');
                       break;
                   }
               }
               return this;
           }
       }
   })
   
