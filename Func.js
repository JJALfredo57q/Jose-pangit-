function appendtodisplay(value){
    document.getElementById('Display').value += value;

}

function cleardisplay(){
    document.getElementById('Display'). value = '';

}

function calculate(){
    var adtodisplay = document.getElementById('Display').value;


    if  (adtodisplay == "1+1") {
        document.getElementById('Display').value = "I Miss You"
    }

}











