"use client"

import { User } from "@/types/user";
//import { getSingleUser } from "../actions"; <- docelowa funkcja api do pobierania usera

//tutaj zrób komponent kliencki, który będzie się renderować, będzie oczekiwać na dane z serwera i je wyświetli
// jeśli nie bedzie miał jeszcze danych to wyświetli "Loading..."
// tutaj dobrze byłoby użyć biblioteki takiej jak react-query - dodaj ją do projektu i wykonaj zapytanie
// więcej na: https://react-query.tanstack.com/
// przejrzyj dokumentacje i zaimplementuj to tak aby działało z tanstack
// w razie pytań - śmiało pisz do Aleksander Marek :)



export default function PageClient({ userId }: { userId: User["user_id"] }) {
    //logika useQuery()


    //logika czy zwróciło usera?
    //tzn jeśli tanstack ma error to zwróć go


    //jeśli tanstack ładuje się to zwróć "Loading..."

    //jeśli tanstack zwrócił usera to wyświetl go zamiast samego id
    return (
        <div>{userId}</div>
    )
}