"use client"

import { User } from "@/types/user";
import { getSingleUser } from "../actions"; // <- docelowa funkcja api do pobierania usera
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";

//tutaj zrób komponent kliencki, który będzie się renderować, będzie oczekiwać na dane z serwera i je wyświetli
// jeśli nie bedzie miał jeszcze danych to wyświetli "Loading..."
// tutaj dobrze byłoby użyć biblioteki takiej jak react-query - dodaj ją do projektu i wykonaj zapytanie
// więcej na: https://react-query.tanstack.com/
// przejrzyj dokumentacje i zaimplementuj to tak aby działało z tanstack
// w razie pytań - śmiało pisz do Aleksander Marek :)



export default function PageClient({ userId }: { userId: User["user_id"] }) {
    const queryClient =  new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <UserDetails userId={userId} />
        </QueryClientProvider>
    );
}

    
function UserDetails({ userId }: { userId: User["user_id"] }) {
    //logika useQuery()
    //pobierz usera z getSingleUser(userId)
    const { data, error, isLoading } = useQuery({
        queryKey: ["user", userId],
        queryFn: () => getSingleUser(userId),
        retry: 1,
        refetchOnWindowFocus: false,
    });

    //jeśli tanstack ładuje się to zwróć "Loading..."
    if (isLoading) {
        return <p>Loading...</p>;
    }

    //logika czy zwróciło usera?
    //tzn jeśli tanstack ma error to zwróć go
    if (error instanceof Error) {
        return <p>Error: {error.message}</p>;
    }

    if (!data) {
        return <p>Nie znaleziono użytkownika.</p>;
    }


    //jeśli tanstack zwrócił usera to wyświetl go zamiast samego id
    return (
        <div>
            <h3>Szczegóły użytkownika</h3>
            <p>User ID: {data.user_id}</p>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
        </div>
    );
}