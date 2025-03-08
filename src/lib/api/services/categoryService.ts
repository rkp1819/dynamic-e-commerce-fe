import { axiosClient } from "../client";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
  attributeDefinitions: AttributeDefinition[];
  createdAt: string;
  updatedAt: string;
}

export interface AttributeDefinition {
  id: string;
  name: string;
  type: 'string' | 'number' | 'boolean' | 'select';
  required: boolean;
  options?: string[]; // For select type
}

export interface CategoriesResponse {
  categories: Category[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface CategoryQueryParams {
  page?: number;
  limit?: number;
  parentId?: string; 
}

const categoryService = {
  // Get all categories with pagination
  getCategories: async (params: CategoryQueryParams = {}): Promise<CategoriesResponse> => {
    const response = await axiosClient.get('/categories', { params });
    return response.data;
  },

  // Get a single category by ID
  getCategoryById: async (id: string): Promise<Category> => {
    const response = await axiosClient.get(`/categories/${id}`);
    return response.data;
  },

  // Get a single category by slug
  getCategoryBySlug: async (slug: string): Promise<Category> => {
    const response = await axiosClient.get(`/categories/slug/${slug}`);
    return response.data;
  },

  // Get featured categories
  getFeaturedCategories: async (): Promise<Category[]> => {
    const response = await axiosClient.get('/categories/featured');
    return response.data;
  },

  // Get root categories (categories without a parent)
  getRootCategories: async (): Promise<Category[]> => {
    const response = await axiosClient.get('/categories/root');
    return response.data;
  },

  // Get subcategories of a specific category
  getSubcategories: async (parentId: string): Promise<Category[]> => {
    const response = await axiosClient.get(`/categories/${parentId}/subcategories`);
    return response.data;
  }
};

export default categoryService; 