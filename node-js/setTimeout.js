const timeOut  = 6000; 

const finished = () => console.log('done');

let timer = setTimeout(finished, timeOut); 

clearTimeout(timer);



