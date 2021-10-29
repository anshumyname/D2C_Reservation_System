

export const seat_allotment = (seats, n) => {
    var free_seats = seats.filter(Boolean).length;
    if(free_seats<n) return [-1,-1]
    var pos = []
    for(var i=0;i+10<seats.length;i+=10){
        var copy = seats;
        var r = rowfinder(copy.slice(i,i+10),n)
        if(r[0]!==-1)
            pos.push([r[1],i,r[0]])
    }


    pos.sort(comp);
    var booked_seats= []
    if(pos.length>0){
        var row = pos[0][1] + pos[0][2]
        var i =n;
        while(i>0 ){
            if(seats[row]===false){
                row++; continue;
            }
            seats[row] = false;
            booked_seats.push(row+1)
            row++;
            i--;
        }
        
        return [seats, booked_seats]
    }

    var cnt = n;
    for(var i=0;i<seats.length;i++){
        if(seats[i]===true){
            seats[i] = false;
            booked_seats.push(i+1);
            cnt--;
        }
        if(cnt===0) break;
    }

    return [seats, booked_seats];
}

function rowfinder(seats, n) {
    var low = -1;
    var maxdist = 100;
    var dist = [];
    var d = 0;
    for(var i=0;i<seats.length; i++){
        if(seats[i]===true){
            if(dist.length>=1)
                d+=(i-dist[dist.length-1]-1);
            dist.push(i);
        }
        else{
          continue;
        }
        if((dist.length)===n){
            
            if(maxdist>=d){
                maxdist = d;
                low = dist[0];
                dist = dist.slice(1);
                d-=(dist[0]-low-1)
            }
        }
    }
  
    
    return [low , maxdist];
}

function comp(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
