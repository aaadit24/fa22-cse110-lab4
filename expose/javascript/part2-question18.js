let d = new Date();
let time = d.toLocaleTimeString(); 
while (true){
    d = new Date();
    let time1 = d.toLocaleTimeString(); 
    if (time != time1){
        console.log(time);
        time = time1;
    }
}