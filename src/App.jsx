
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import Footer from "./components/Footer.jsx";
import useCart from "../hooks/useCart.js";

function App() {
  const { data, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal } = useCart()



  return (
    <>
      <Header cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} clearCart={clearCart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => {
            return (
              <Guitar
                key={guitar.id}
                guitar={guitar}
                cart={cart}
                addToCart={addToCart}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
              />
            );
          })}
        </div>
      </main>

      <Footer text={"Devchi, todos los derechos reservados"} />
    </>
  );
}

export default App;
