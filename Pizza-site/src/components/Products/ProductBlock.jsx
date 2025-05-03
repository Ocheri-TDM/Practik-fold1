import ProductCard from "./ProductCard";

function CategoryBlock({ category, products, onAddToCart }) {
  if (!products.length) return null;

  return (
    <div key={category.id}>
      <h2 className="category-title">{category.name}</h2>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryBlock;
