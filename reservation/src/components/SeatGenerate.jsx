import Seat from "./Seat";
import { Box } from "@material-ui/core";


const len = 88;
export const generate_seats = (seat_available) => {
    
    let x1 = []
    var cnt =0;
    for (var i = 0; i < len; i++) {
        if (i % 11 === 7) {
            x1.push(<Box></Box>)
            continue;
        }
        x1.push(<Seat seatno={cnt+1} free={seat_available[cnt]} />);
        cnt++;
    }
    return x1;
}

export const generate_random_seats =  () => {
    let seat_available = new Array(80).fill(true);
    var arr = [];
    
    while (arr.length < 8) {
        var r = Math.floor(Math.random() * 80) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    
    for (var idx in arr) {
        seat_available[arr[idx]] = false;
    }
    const random_seats = generate_seats(seat_available)
    return [random_seats, seat_available]
}
