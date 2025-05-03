function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-item">
      <img
        src={product.image || "./images/placeholder.svg"}
        alt={product.name}
        className="product-item__img"
      />
      <h3 className="product-item__title">{product.name}</h3>
      <p className="product-item__description">{product.description}</p>
      <p className="product-item__description">{product.categoryName}</p>
      <div className="product-item__action">
        <strong className="product-item__title">{product.price} ₸</strong>
        <button className="add-button" onClick={() => onAddToCart(product)}>
          В корзину
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
