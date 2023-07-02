import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import store from "../util/store";
import { clearCart } from "../util/cartSlice";

const Cart = () =>{
    const cartItem = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    console.log(cartItem)
    return (
        <div>
            <h1 className="font-extrabold">Cart Items - {cartItem.length}</h1>
            <div>
                <button className = "bg-blue-500 text-white p-4 m-2" onClick={() => handleClearCart()}>Clear Cart</button>
            </div>
            {cartItem.map((item) => <FoodItems key={item.id} {...item} />)}
        </div>
    )
}

export default Cart;