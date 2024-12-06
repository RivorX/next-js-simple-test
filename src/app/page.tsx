//"use client"
// Aktualnie jesteśmy w serwerowym komponencie,
// Jeżeli dodamy na początku pliku "use client" to komponent będzie renderowany po stronie klienta
// W przypadku braku "use client" komponent będzie renderowany po stronie serwera

import { User } from '@/types/user';
import mockData from '../mock-data.json';

export default async function Home() {

  async function getUsers() {
    return new Promise<User[]>((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 300);
    });
  }

  const data: User[] = await getUsers();

  //Zamiast tego podstawowego returna, zwróć listę użytkowników (frontend nie ma znaczenia)
  // Oraz link do pojedynczego uzytkownika wyglądający tak: /[userId]

  return (
    <div>
      <h1>Lista Użytkowników</h1>
      <ul>
        {data.map(user => (
          <li key={user.user_id}>
            {user.name} - <a href={`/${user.user_id}`}>Profil</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
