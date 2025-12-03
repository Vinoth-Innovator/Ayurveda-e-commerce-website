export const orders = [
  {
    id: 'ORD-123',
    date: '2024-10-25',
    customer: 'John Doe',
    total: 45.98,
    status: 'Shipped',
    items: [
      {
        id: 1,
        name: 'Ashwagandha Churna',
        quantity: 2,
        price: 12.99,
      },
      {
        id: 2,
        name: 'Triphala Churna',
        quantity: 2,
        price: 10.00,
      },
    ],
  },
  {
    id: 'ORD-124',
    date: '2024-10-26',
    customer: 'Jane Smith',
    total: 15.50,
    status: 'Pending',
     items: [
      {
        id: 3,
        name: 'Brahmi Oil',
        quantity: 1,
        price: 15.50,
      },
    ],
  },
];
