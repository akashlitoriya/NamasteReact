import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import store from "../util/store";
import { clearCart, removeItem } from "../util/cartSlice";

const Cart = () =>{
    const cartItem = useSelector(store => store.cart.items);
    const price = useSelector(store => store.cart.total);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    const handleRemoveFromCart = (item) => {
        dispatch(removeItem(item));
    }
    console.log(cartItem)
    return (
        <div className="w-screen flex flex-col items-center">
            <div className="w-2/3 flex justify-between items-center mt-7 pb-5 border-b-2">
                <div>
                    <h1 className="font-semibold text-lg text-gray-800">Cart Items - {cartItem.length}</h1>
                    <h1 className="font-semibold text-lg text-gray-800">Price - {(price > 0)
                            ? new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR",
                              }).format(price)
                            : " "}</h1>
                </div>
                <button className = " text-white font-semibold p-4 m-2 bg-gray-500 rounded-lg transition-all hover:scale-110 duration-300" onClick={() => handleClearCart()}>Clear Cart</button>
            </div>
            
            {cartItem.map((item) => 
            <div className="flex w-2/3 bg-slate-100 m-3 shadow-md rounded-md transition-all ease-in duration-200 hover:bg-slate-200">
                <FoodItems key={item.id} {...item} />
                <button className="p-4 " onClick={()=> handleRemoveFromCart(item)}> <i class="fa-solid fa-xmark"></i></button>
            </div>)}
        </div>
    )
}

export default Cart;