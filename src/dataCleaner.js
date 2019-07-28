export const dataCleanup = (products) => {
  return products.map(product => {
    return {
      id: product.id,
      brand: product.brand,
      name: product.name,
      price: product.price,
      image_link: product.image_link,
      product_link: product.product_link,
      description: product.description,
      rating: product.rating,
      product_type: product.product_type,
      tag_list: product.tag_list,
      created_at: product.created_at,
      product_colors: product.product_colors
    }
  })
}