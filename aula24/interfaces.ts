interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  stock_quantity: number;
  sku: string;
  category_id: number;
  supplier_id: number;
  is_active: boolean;
  image_url: string | null;
  pdf_url: string | null;
  sales_count: number;
  reviews_count: number;
  rating: number;
  created_at: string;
  categories: Category;
  suppliers: Supplier;
}

interface Category {
  name: string;
}

interface Supplier {
  company_name: string;
}