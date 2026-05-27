let count=0;
    let co=document.getElementById('value');

    function increase(){
        count++;
        co.innerText=count;
        co.style.color="green";
    }

    function reset(){
        count=0;
        co.innerText=count;
        co.style.color="blue";
    }

    function decrease(){
        count--;
        co.innerText=count;
        co.style.color="red";
    }