import { Product, Order } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Citizen Promaster Aqualand',
    description: 'Edição Limitada, Profissional de Mergulho',
    price: 2490.00,
    category: 'Mergulho',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1KCEeTRErxRJnCYXSaQT_IDzH4bxwoDI2V8VI7ECps0G8hpnkM7r2MMiqyiECiH-tnemfiYRq0uwOIt6_pCDlhm_NfADi3AAOzYxag1n7UmsrPo7jlflwL6T6ORe6rvwDOwzWM7jW4P-K72gLiSPpQbCD7VYAytvha0tBHSODCxHRIxcDopoWda7LO36deUcVz1ThoSlWtTqmT6pzvYDg3yZrOa4zbCata5blFxqDJLR4CMcJlkzJzTk1o3nasKOwQqFqATiGUb7F',
    sku: 'JP2000-08E',
    status: 'Em Estoque',
    tags: ['Mais Vendido', 'Eco-Drive'],
    sales: 24
  },
  {
    id: '2',
    name: 'Eco-Drive Skyhawk A-T',
    description: 'Tecnologia e Precisão, Titânio',
    price: 3100.00,
    category: 'Relógio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_GQMVrzN3Y-3YvP0TWPO6ludgmnfWEua03cb89FBJ7RTI_A9MUbd5DvO-8TiFh_6OxRC4vEULAw9UDGdA_ramaEFuZ6oBgOvqDkeBmt8GYDjLX68qlIUCaNCZChXGVpqjYL2pvBOxy9PR_m8vSX0DQgLltVUKYsdvsnmW61lO2_aeU7snOv_1PGh4XbZ5ZM-D2LLqBO_c9IdLU6Qp5Sw10KBVzWcJ3BGoOquG4xkvLECR-fBhHdveEpB2iMBMifz-pS2dVulKgfK6',
    sku: 'AT8020-03L',
    status: 'Baixo Estoque',
    tags: ['Titânio'],
    sales: 12
  },
  {
    id: '3',
    name: 'Corrente Cartier 60cm',
    description: 'Peso aprox. 12g • Elo maciço',
    price: 4100.00,
    category: 'Joia',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxewOLE-0BjW6ceqUDLkrGQxMAC5TYfvsKDLdl13QejgpSE5-0UJVSjOu0Y9Rs5XHhCiVvIL_EXotA3C2Q0MKTVG2VOCNCj8qLh5q4E5R4LpQ2j6AokMZjYww-zSUTkyV1qqV8JnXTPay_UIb2AZPxNOk79lc2-orva9D1ZmKHfCJsBAHfptmgDz5FVbeNHIMBhQn-0EdnkucK37Xn4pIlVYra4-pwfKVaw-HL9LPpBsTJlWjPKRcV4aDvrQJZ-QIXS55e_tp4Btmk',
    sku: 'JO-CART-60',
    status: 'Em Estoque',
    tags: ['Ouro 18k'],
    sales: 18
  },
  {
    id: '4',
    name: 'Quartz Gold Edition',
    description: 'Elegância Suprema',
    price: 4500.00,
    category: 'Luxo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVKiPm2GgjS8AJ9OMfWAd6tB-8_04_DB9U8XraRfvyTwMRs4D2xfFjm_zlCMnLRqW3-W1duhPyOnWHvYQoh61PFtE4JZI5uRXFSpqlSJ_urtjC39TV3tBBa6BiIk4GWk2yThCbuXu8BD66R_ErXjRyjSuZBRNXx_69q7ZIZ7gmJ9OMkpLHdty4SOdKWO42QFJFYqcVvmMkCaquh5k5NVZ8gBqWXu-wpzfK6EkQHaFYwGQUzhphfgSHTpHdc4OEEarAjCA3c22dkFoo',
    sku: 'BZ1000-54E',
    status: 'Em Estoque',
    tags: ['Ouro 18k', 'Exclusivo'],
    sales: 5
  },
  {
    id: '5',
    name: 'Anel Solitário Clássico',
    description: 'Pedra zircônia alto brilho',
    price: 2450.00,
    category: 'Joia',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR-g2Vd2DR3q0PeArGxePhx6gcAimbbFv17-A2QyXv9nROsi-4bw0WqMi_pb3CvaiUrhMvjgmUJ65beLuYsBl22c-HLUNSbfEdVmS_hEFEc9bjm_h0qPjYioIb_sf9MuTQait4iAKb5JDMit7u8glFEmX7CWRrLLOrtM7Y5dIKRg-G-iasnyUDRQkFV2rviPAHSHnerN1OKKnAgLnAPzny4WqyHipCnIqvgwRQxMym-cYjIfAcAVSC9txqYNCcmrAmTualCIy5TVBs',
    sku: 'AN-18K-00',
    status: 'Em Estoque',
    tags: ['Ouro 18k'],
    sales: 8
  },
  {
    id: '6',
    name: 'Citizen Automático Classic',
    description: 'Pulseira de Couro',
    price: 1200.00,
    category: 'Social',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFr12I8FXusKyzPFy0n_MhsRKFGJk0lqHhXZgrJ9QlZ4G1B8jHQjeXUfrv7LdaqNJF0C4RpemHti1ZHWDcXuH5587Dk8IClgYjvL_WAfm-h2Qt50JV8ClIVMHStM5q_moymLcJQM2GIqXzbCJO_PELL5YMstWViEtX2Oi0vcAhiDAqSBpq6ZMQ9BLh5gPG3XuWVRrDsK1vQLLwvxt1qfwZPFW5Lb7PIC1SVhCvhZgn489j8RLisH5itE1T2Hws6LYlBXM6jqAJeCI_',
    sku: 'NH8350-83L',
    status: 'Esgotado',
    tags: ['Clássico'],
    sales: 30
  }
];

export const RECENT_ORDERS: Order[] = [
  {
    id: '#ORD-0012',
    customerName: 'Carlos Mendes',
    customerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfc52ksMg2UNnDgjhfs4QKWgdYaZ7227bjC0U6rbk7wnCMgUlFqp__LLD6I-rCmf57DGfrn2JqmpS5crKo2aeJypmSmXrJCVWOGL0LbHdC-bVOXcYvA2MSYc4fK_7Jwp_5MVOqTTgSeIRMNIxJSzz_OODLtKQM3_nYL1yN1msEOrXik56BsyaDj2-SCg7WeBdBwyazzVCQ1MpsqOpAl7r9fHi2wgi5aBBXJwNkYECjKXx7oG1keb5fhRrW9Lv9OKR7wja6gZTiSx7B',
    productName: 'Citizen Promaster Aqualand',
    date: '29 Set, 2023',
    amount: 2490.00,
    status: 'Pago'
  },
  {
    id: '#ORD-0011',
    customerName: 'Ana Souza',
    customerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPn74-_jP8Y8qoY9zRilxC4UChES9TRD_8M-69r2ElK2U_-nlyya83nNopKo4fyOqLddK-WizKSjr6Ey6t5HXzp8RDoJn8pc287sTtaB2TpANUiCLB76SVf5Gf-4KAPxMqxTxmh7x9XUVLo_3bTsQEp1BC02cBItRr_bjbLbrknq2uT5TVNZzgja0jewdf7rnkGhsCXseZXuvkdZViQiaqOd9g88N0GJ9ZbpSaqbD9E4bcCW3KoOdbzVUMk33KdfDngDY7M-pS397t',
    productName: 'Anel Solitário Clássico',
    date: '29 Set, 2023',
    amount: 2450.00,
    status: 'Processando'
  },
  {
    id: '#ORD-0010',
    customerName: 'Marcos Oliveira',
    customerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDv9fPsYAS-STj4rutHLu2N8-Ko0IOt7t_Hwcte4EblMvUH0WK4ZNVAuKyrASpXhXsrdtzhni2yqkd_l0weBITcHD8QKTcZBK0YbFmdjTw5WADpOfRm1QAADp4gOjVWyF-fdQnJND9w3xsujvMA0hvae9hKSimrikpTMksjhGV5ejx0DM6I1KyVWfa5U9Mv5iePUoiKGCdXoNhvXDgEHvCSaIClq9SYwiYBcSy71KvpIE_3Fkd9LZtjxoEuo_0QHViG8LepKBYtkRy',
    productName: 'Eco-Drive Skyhawk',
    date: '28 Set, 2023',
    amount: 3100.00,
    status: 'Enviado'
  },
  {
    id: '#ORD-0009',
    customerName: 'Lucas Pereiras',
    customerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt1ZtR8F58Sel1Mm-DRuh58r3bViGpT-L0F6LD3vTHkKCZKvNw9JyYWOEYPKNctzlihYVnSj_AUeDQoqqVj2VDLnojBKqkgDCIWTpE7kzas9lfHwaltiRt0k9Ak0OziPjk0ujf3Vq0CGO4gVyLq7xOYFnCoF6K_BplWy9FqJ4QFJ6qBxIcSl-Bp9va-Dk9KIlpdYEOW-Ad8rxAYl6Y_sK19khB1jCrR1iIVaX6XNfaDcO5PGXBjBbXMF6BDZRi0tbnB-Ko2dqybKvx',
    productName: 'Corrente Cartier 60cm',
    date: '28 Set, 2023',
    amount: 4100.00,
    status: 'Pago'
  }
];

export const SALES_DATA = [
  { name: '01 Set', value: 2400 },
  { name: '05 Set', value: 3500 },
  { name: '10 Set', value: 4800 },
  { name: '15 Set', value: 3900 },
  { name: '20 Set', value: 5400 },
  { name: '25 Set', value: 6800 },
  { name: '30 Set', value: 7200 },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ricardo Almeida',
    role: 'Colecionador',
    content: 'O atendimento da Nathan Citizen & Ouro é impecável. O Aqualand chegou em perfeito estado, com toda documentação.',
    image: 'https://i.pravatar.cc/150?u=1'
  },
  {
    id: 2,
    name: 'Fernanda Costa',
    role: 'Cliente VIP',
    content: 'As joias são ainda mais bonitas pessoalmente. O acabamento do ouro 18k é surpreendente. Recomendo muito!',
    image: 'https://i.pravatar.cc/150?u=5'
  },
  {
    id: 3,
    name: 'Eduardo Santos',
    role: 'Empresário',
    content: 'Comprei um presente para minha esposa e a entrega foi super rápida. A embalagem de luxo fez toda diferença.',
    image: 'https://i.pravatar.cc/150?u=3'
  }
];

export const FAQS = [
  {
    question: "Os relógios possuem garantia?",
    answer: "Sim, todos os nossos relógios Citizen são originais e acompanham garantia de fábrica de 1 a 2 anos, válida em todo território nacional."
  },
  {
    question: "As joias são de ouro maciço?",
    answer: "Sim, trabalhamos exclusivamente com Ouro 18k (750) maciço, com certificado de garantia eterna do teor do ouro."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "O prazo varia conforme a região, mas geralmente enviamos em até 24h úteis após a confirmação do pagamento via Sedex com seguro."
  }
];