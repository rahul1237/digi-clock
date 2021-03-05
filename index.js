time = document.getElementById('time')

var date
var Time
var Odate

setInterval(() => {
    date = new Date()

    Time = date.getHours() + ':' + date.getMinutes() + ':'  +  date.getSeconds()

    Odate = date.toLocaleDateString()
    
    time.innerText = Odate + ' on ' + Time    
}, 1000);

console.log(time);