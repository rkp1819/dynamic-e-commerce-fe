import { axiosClient } from "../client";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: {
    id: string;
    name: string;
    slug: string;
  };
  attributes: Record<string, string | number | boolean>;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ProductQueryParams {
  page?: number;
  limit?: number;
  categoryId?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

const productService = {
  // Get all products with pagination and filters
  getProducts: async (params: ProductQueryParams = {}): Promise<ProductsResponse> => {
    const response = await axiosClient.get('/products', { params });
    return response.data;
  },

  // Get a single product by ID
  getProductById: async (id: string): Promise<Product> => {
    const response = await axiosClient.get(`/products/${id}`);
    return response.data;
  },

  // Get featured products
  getFeaturedProducts: async (): Promise<Product[]> => {
    const response = await axiosClient.get('/products/featured');
    return response.data;
  },

  // Get products by category
  getProductsByCategory: async (categoryId: string, params: ProductQueryParams = {}): Promise<ProductsResponse> => {
    const response = await axiosClient.get(`/categories/${categoryId}/products`, { params });
    return response.data;
  },

  // Search products
  searchProducts: async (query: string, params: ProductQueryParams = {}): Promise<ProductsResponse> => {
    const response = await axiosClient.get('/products/search', { 
      params: { 
        ...params,
        query 
      } 
    });
    return response.data;
  }
};

export default productService; 