import './App.css'

const products = [
  {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      image: "./src/image 5.jpeg",
      price: "12 999 руб."
  },
  {
      title: "Мужские Кроссовки Nike Air Max 270",
      image: "./src/image 5.jpeg",
      price: "12 999 руб."
  },
  {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      image: "./src/image 5.jpeg",
      price: "8 499 руб."
  },
  {
      title: "Кроссовки Puma X Aka Boku Future Rider",
      image: "./src/image 5.jpeg",
      price: "8 999 руб.git"
  },
  {
      title: "Мужские Кроссовки Under Armour Curry 8",
      image: "./src/image 5.jpeg",
      price: "15 199 руб."
  },
  {
      title: "Мужские Кроссовки Nike Kyrie 7",
      image: "./src/image 5.jpeg",
      price: "11 299 руб."
  },
  {
      title: "Мужские Кроссовки Jordan Air Jordan 11",
      image: "./src/image 5.jpeg",
      price: "10 799 руб."
  },
  {
      title: "Мужские Кроссовки Nike LeBron XVIII",
      image: "./src/image 5.jpeg",
      price: "16 499 руб."
  },
];


function App() {
    return (
        <div>
            <h1>Все кроссовки</h1>
            <div className='cont'>
                {products.map((product) => (
                    <div className='cart'>
                        <img src={product.image} />
                        <h3>{product.title}</h3>
                        <p className='price_name'>ЦЕНА</p>
                        <p className='price'>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
