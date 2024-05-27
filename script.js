function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('amPM');
  
    if(hrs >= 12){
      amPM.innerHTML = 'PM';
    }
    else{
      amPM.innerHTML = 'AM';
    }
  
    if(hrs>12){
      hrs = hrs -12;
    }
    
    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
  
  }
  
  setInterval(displayTime, 10)