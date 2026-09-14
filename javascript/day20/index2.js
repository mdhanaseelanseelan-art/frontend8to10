fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        console.log(data);

        let products = data.products;

        let table = document.getElementById("productTable");

        products.forEach(product => {

            let row = `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>$${product.price}</td>
                    <td>${product.category}</td>
                </tr>
            `;

            table.innerHTML += row;
        });
    })
    .catch(error => {
        console.log("Error:", error);
    });