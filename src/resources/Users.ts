export interface User {
    id: number,
    name: string,
    role: string,
    address: string,
    salary: number,
};

export const users : User[] = [
    {
        id: 1,
        name: 'Abelardo',
        role: 'Developer',
        address: 'abc123',
        salary: 1000,
    },
    {
        id: 2,
        name: 'Rodrigo',
        role: 'Support',
        address: 'abc123',
        salary: 2000,
    },
    {
        id: 3,
        name: 'Alberto',
        role: 'Developer',
        address: 'abc123',
        salary: 3000,
    },
    {
        id: 4,
        name: 'Pedro',
        role: 'Marketing',
        address: 'abc123',
        salary: 4000,
    },
    {
        id: 5,
        name: 'Maria',
        role: 'QA',
        address: 'abc123',
        salary: 5000,
    },
];