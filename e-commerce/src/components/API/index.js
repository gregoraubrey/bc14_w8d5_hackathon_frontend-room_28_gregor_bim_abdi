const url = "https://fakestoreapi.com/products";

async function fetchProductsFromAPI() {
  const response = await fetch(`${url}`);
  const data = await response.json();
  console.log("JSON has been parsed. See data below:");
  console.log(data);
  return data;
}

export default fetchProductsFromAPI;
