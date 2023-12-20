const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapALL = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const filterAll = document.querySelector(".filter-all");

function formatCurrency(Value) {
  return newValue = Value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}


function showall(productsarray) {
  let myLi = "";

  productsarray.forEach((product) => {
    myLi += `
        <li >
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price"> ${formatCurrency(product.price)}</p>
        </li>
    `;
  });
  list.innerHTML = myLi;
}
function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showall(newPrices);
  console.log(newPrices);
}
function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  list.innerHTML = `<li >
            <p>O Valor Total dos Itens é ${formatCurrency(totalValue)}</p
        </li>

        `;
  console.log(totalValue);
}

function filterALLItems() {
  const filterJustVegan = menuOptions.filter((product) => product.vegan);

  showall(filterJustVegan);
}

buttonShowAll.addEventListener("click", () => showall(menuOptions));
buttonMapALL.addEventListener("click", mapAllItems);
sumAll.addEventListener("click", sumAllItems);
filterAll.addEventListener("click", filterALLItems);
