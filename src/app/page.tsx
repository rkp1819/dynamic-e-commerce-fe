import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-10 ">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Hero Image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Shop the Latest Trends
          </h1>
          <p className="mb-6 max-w-md text-lg">
            Discover our curated collection of products for every style and
            occasion
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-white hover:bg-white hover:text-black"
            >
              <Link href="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container">
        <h2 className="mb-8 text-3xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="relative h-40 w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-medium">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link
            href="/products"
            className="text-sm font-medium hover:underline"
          >
            View All Products
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden">
                <Link href={`/products/${product.id}`}>
                  <div className="h-full w-full relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
              <CardContent className="p-4">
                <div className="mb-1 text-sm text-gray-500">
                  {product.category}
                </div>
                <Link href={`/products/${product.id}`} className="block">
                  <h3 className="line-clamp-2 font-medium hover:underline">
                    {product.name}
                  </h3>
                </Link>
                <div className="mt-2 flex items-center">
                  <div className="font-medium">${product.price.toFixed(2)}</div>
                  {product.originalPrice && (
                    <div className="ml-2 text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Promotions */}
      <section className="container">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative h-60 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1611403570720-162d8829689a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Special Offer"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 p-6 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-2">Special Offer</h3>
              <p className="mb-4">Up to 50% off on selected items</p>
              <Button className="w-fit" asChild>
                <Link href="/deals">Shop Now</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-60 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080"
              alt="New Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 p-6 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-2">New Arrivals</h3>
              <p className="mb-4">Check out our latest collection</p>
              <Button className="w-fit" asChild>
                <Link href="/new-arrivals">Discover</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container bg-gray-100 py-12 px-4 rounded-lg">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">
            Subscribe to our newsletter
          </h2>
          <p className="mb-6 text-gray-600">
            Stay updated with our latest offers and promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md flex-grow max-w-md"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Temporary data - would be fetched from API in a real application
const categories = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=500&fit=crop",
  },
  {
    id: "2",
    name: "Clothing",
    slug: "clothing",
    image:
      "https://images.unsplash.com/photo-1542060748-10c28b62716f?w=500&h=500&fit=crop",
  },
  {
    id: "3",
    name: "Home & Garden",
    slug: "home-garden",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=500&fit=crop",
  },
  {
    id: "4",
    name: "Sports",
    slug: "sports",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500&h=500&fit=crop",
  },
];

const featuredProducts = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 59.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Cotton Casual T-Shirt",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Clothing",
  },
  {
    id: "3",
    name: "Decorative Throw Pillow Set",
    price: 34.99,
    originalPrice: 44.99,
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=500&fit=crop",
    category: "Home & Garden",
  },
  {
    id: "4",
    name: "Yoga Mat with Carry Strap",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1593810450967-f9c6a9380048?w=500&h=500&fit=crop",
    category: "Sports",
  },
];
