import { TContacts } from "../shared/services/Types/data";

const BASE_URL: string = "https://api.green-api.com";

const fakeContacts: TContacts[] = [
  { id: 0, name: "Твой злейший враг" },
  { id: 1, name: "Президент" },
  { id: 2, name: "Тестовый тест" },
  { id: 3, name: "Бабушка"},
];

export { BASE_URL, fakeContacts };
