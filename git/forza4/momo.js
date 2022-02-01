var myTab = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [3, 3, 3, 3, 3, 3, 3]
];
var i = 5 ;
var turno = 1;
var j = 1;
var vincitore = 0;
//===============================================================================
function input(col){
    console.clear();
    if (!vittoria()){
        if (myTab[i][col] == 3){
            if (turno == 1){
                document.getElementById(i  + "." + col).style.backgroundColor="red";
                document.getElementById("messaggio").innerHTML="è il turno del giocatore giallo";
                myTab[i][col] = 1;
                myTab[i-1][col] = 3;               
                turno ++;
                vittoria();
            }else if (turno == 2){
                document.getElementById(i + "." + col).style.backgroundColor="yellow";
                document.getElementById("messaggio").innerHTML="è il turno del giocatore rosso";
                myTab[i][col] = 2;
                myTab[i-1][col] = 3;               
                turno --;
                vittoria();
            }
        }else{
            for(var o = 5 ; o >= 0 ; o--){
                if (myTab[o][col] == 3){
                    if (turno == 1){
                        document.getElementById(o  + "." + col).style.backgroundColor="red";
                        document.getElementById("messaggio").innerHTML="è il turno del giocatore giallo";
                        myTab[o][col] = 1;
                        if (o!=0){
                            myTab[o-1][col] = 3;
                        }                                   
                        turno ++;
                        vittoria();
                        break;
                    }else if (turno == 2){
                        document.getElementById(o + "." + col).style.backgroundColor="yellow";
                        document.getElementById("messaggio").innerHTML="è il turno del giocatore rosso";
                        myTab[o][col] = 2; 
                        if (o!=0){
                            myTab[o-1][col] = 3;
                        }            
                        turno --;
                        vittoria();
                        break;
                    }
                }
            }
        }
    }
    console.log(myTab[0]);
    console.log(myTab[1]);          
    console.log(myTab[2]);
    console.log(myTab[3]);
    console.log(myTab[4]);
    console.log(myTab[5]);
    console.log("------------------------");
    
    
}
//===============================================================================
function vittoria(){
    if (colonna() || righe() || diagoinali_dx() || diagoinali_sx()){
        if (vincitore == 1){
            document.getElementById("messaggio").innerHTML="Ha vinto il giocatore rosso";
            document.getElementById("messaggio").style.backgroundColor="pink";
        }else if(vincitore == 2){
            document.getElementById("messaggio").innerHTML="Ha vinto il giocatore giallo ";
            document.getElementById("messaggio").style.backgroundColor="pink";
        }
        return true;
    }else {
        return false;
    } 
    //colonna() || 
}
//===============================================================================
function colonna(){
    for (var c = 0; c<7; c++){
        for (var r = 0; r<3; r++){
            if (myTab[r][c] == 1 || myTab[r][c] == 2){
                if (myTab[r][c] == myTab[r+1][c] && myTab[r+1][c] == myTab[r+2][c]
                    && myTab[r+2][c] == myTab[r+3][c]){
                    vincitore = myTab[r][c];
                    return true;
                }   
            }
        }
    }
    return false;
}
//===============================================================================
function righe(){
    for (var r = 0; r<6; r++){
        for (var c = 0; c<4; c++){
            if (myTab[r][c] == 1 || myTab[r][c] == 2){
                if (myTab[r][c] == myTab[r][c+1] && myTab[r][c+1] == myTab[r][c+2]
                    && myTab[r][c+2] == myTab[r][c+3]){
                    console.log("controllati " + myTab[r][c] + " " + myTab[r][c+1] + " " + myTab[r][c+2] + " " + myTab[r][c+3]);
                    vincitore = myTab[r][c];
                    return true;
                }   
            }
        }
    }
    return false;
}
//===============================================================================
function diagoinali_dx(){
    for (var r = 0; r<3; r++){
        for (var c = 0 ; c<4; c++){
            if (myTab[r][c] == 1 || myTab[r][c] == 2){                
                if (myTab[r][c] == myTab[r+1][c+1] && myTab[r+1][c+1] == myTab[r+2][c+2]
                    && myTab[r+2][c+2] == myTab[r+3][c+3]){
                    console.log("controllati " + myTab[r][c] + " " + myTab[r][c+1] + " " + myTab[r][c+2] + " " + myTab[r][c+3]);
                    vincitore = myTab[r][c];
                    return true;
                }   
            }
        }
    }
}
//===============================================================================
function diagoinali_sx(){
    for (var r = 0; r<3; r++){
        for (var c = 6 ; c>2; c--){
            if (myTab[r][c] == 1 || myTab[r][c] == 2){                
                if (myTab[r][c] == myTab[r+1][c-1] && myTab[r+1][c-1] == myTab[r+2][c-2]
                    && myTab[r+2][c-2] == myTab[r+3][c-3]){
                    console.log("controllati " + myTab[r][c] + " " + myTab[r][c+1] + " " + myTab[r][c+2] + " " + myTab[r][c+3]);
                    vincitore = myTab[r][c];
                    return true;
                }   
            }
        }
    }
}