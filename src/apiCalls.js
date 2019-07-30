export const fetchMakeup = async key => {
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${key}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error uploading makeup, response not ok");
    }
    const makeup = await response.json();
    return makeup;
  } catch (error) {
    throw new Error(error.message);
  }
};
