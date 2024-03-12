var endDate= "March 15, 2024 04:44 AM";
endDate= new Date(endDate).getTime();
var now = new Date().getTime();

// console.log(endDate)

var myInterval = setInterval(function() {
    //Calculate the remaining time in milliseconds
    var t = endDate - now;

   // Calculate the remaining days, hours, minutes, and seconds
   var secondsRemaining = Math.floor((t / 1000) % 60);
   var minutesRemaining = Math.floor((t / (1000 * 60)) % 60);
   var hoursRemaining = Math.floor((t / (1000 * 60 * 60)) % 24);
   var daysRemaining = Math.floor(t / (1000 * 60 * 60 * 24)); 

    // Show the output time
   document.querySelector("#day").value = daysRemaining;
   document.getElementById("hour").value = hoursRemaining;
   document.getElementById("minute").value = minutesRemaining;
   document.getElementById("second").value = secondsRemaining;

    // Show overtime output
   if (t < 0) {
        clearInterval(myInterval);

        document.querySelector(".title h1").innerHTML = "&#127880; We are here! &#127880;";
        document.querySelector(".title h2").innerHTML = "&#127881; &#127881;";
        document.getElementById("day").value = "0";
        document.getElementById("hour").value = "0";
        document.getElementById("minute").value = "0";
        document.getElementById("second").value = "0";

        
    }
    now = new Date().getTime();
}, 1000);
