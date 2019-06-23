document.getElementById("output").style.visibility="hidden";
document.getElementById("kgInput").addEventListener("input", function(e){
    document.getElementById("output").style.visibility="visible";
    let kilos = e.target.value;
    console.log(kilos);
    document.getElementById("poundsOutput").innerHTML = kilos*2.2046;
    document.getElementById("gOutput").innerHTML = kilos*1000;
    document.getElementById("ozOutput").innerHTML = kilos*35,27;
})