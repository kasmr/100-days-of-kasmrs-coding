var count = 0;
function cc(cards) {
    if(cc == (2 || 3 || 4 || 5 || 6)) {
        count += 1;
    }
    if(cc == (7 || 8 || 9)) {
        count += 0;
    }
    if(cc == (10 || "J" || "Q" || "K" || "A")) {
        count -= 1;
    }
    if (count > 0) {
    return count + " Bet";}
    else {
    return count + " Hold";}
    
}
cc(2); cc(3); cc(8); cc("A"); cc(2);






