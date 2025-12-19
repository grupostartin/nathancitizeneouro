export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Relógio' | 'Joia' | 'Mergulho' | 'Social' | 'Luxo';
  image: string;
  sku: string;
  status: 'Em Estoque' | 'Baixo Estoque' | 'Esgotado';
  tags?: string[];
  sales?: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerAvatar: string;
  productName: string;
  date: string;
  amount: number;
  status: 'Pago' | 'Processando' | 'Enviado' | 'Pendente';
}

export interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  trendType?: 'up' | 'down' | 'neutral';
  icon: string;
  colorClass: string;
}
