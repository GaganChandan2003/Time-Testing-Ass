function time(milliseconds)
{
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours   =   Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;

    let sec = "";
    let min = "";
    let hour = "";

    seconds == 1 ? (sec = seconds + " second") : (sec = seconds + " seconds");
    minutes == 1 ? (min = minutes + " minute") : (min = minutes + " minutes");
    hours == 1 ? (hour= hours + " hour") : (hour = hours + " hours");


    let res = [];
    hour[0] > 0 && res.push(hour);
    min[0] > 0 && res.push(min);
    sec[0] > 0 && res.push(sec);

    return res.join(" ");
}
module.exports=time