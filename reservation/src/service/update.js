import { update_seats } from "./api";
export const update = async (seats_available) => {
    await update_seats({name:'seat_status_array',availability: seats_available});

}