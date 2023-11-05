import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useRef } from "react";
import { upQuantity, deleteAll, deleteOne } from "../action/cart";

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer);
    let ref = useRef();

    function handleUp(id, x) {
        if(parseInt(ref.current.value) < x){
            dispatch(upQuantity(id));
            ref.current.value = parseInt(ref.current.value) + 1;
        }
    }

    const delAll = () => {
        dispatch(deleteAll())
    }

    function delOne(id){
        dispatch(deleteOne(id))
    }

    function handleDown(id) {
        if(ref.current.value > 1){
            dispatch(upQuantity(id, -1));
            ref.current.value = parseInt(ref.current.value) - 1;
        }
    }

    let total = cart.reduce((sum, item) => {
        return sum + parseInt(item.info.price) * item.quantity;
    }, 0);

    return (
        <>
            {cart.length > 0 ? (
                <>
                    <div className="cart">
                        <div className="headcart">
                            <h2>Giỏ hàng</h2>
                            <div>
                                <button onClick={delAll}>Xóa tất cả</button>
                            </div>
                        </div>
                        {cart.map((item) => (
                            <div className="cartItem" key={item.id}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div>
                                        <img src={item.info.thumbnail} alt={item.info.title} />
                                    </div>
                                    <div style={{ marginLeft: "10px" }}>
                                        <h4>{item.info.title}</h4>
                                        <span style={{ color: "red", fontWeight: 600 }}>
                                            Giá: {item.info.price}đ
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => handleDown(item.id)}>-</button>
                                    <input ref={ref} style={{ width: "60px" }} defaultValue={item.quantity} />
                                    <button onClick={() => handleUp(item.id, item.info.stock)}>+</button>
                                    <button onClick={() => delOne(item.id)} style={{ marginLeft: "10px" }}>Xóa</button>
                                </div>
                            </div>
                        ))}
                        <div className="totalPrice" style={{ textAlign: "right" }}>
                            Tổng tiền:{" "}
                            <span style={{ fontWeight: "700", color: "red", fontSize: "22px" }}>
                                {total}đ
                            </span>
                        </div>
                    </div>
                </>
            ) : (
                <>Giỏ hàng trống</>
            )}
        </>
    );
}

export default Cart;
