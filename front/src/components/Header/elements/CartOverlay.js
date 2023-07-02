import { IoIosClose } from "react-icons/io";
import CustomScroll from "react-custom-scroll";
import clsx from "clsx";
import Anchor from "../../anchor";
import { getDiscountPrice } from "../../../lib/product";
import { deleteFromCart } from "../../store/slices/cart-slice";

const CartOverlay = ({ activeStatus, getActiveStatus }) => {
  //const dispatch = useDispatch();
  // const { cartItems } = useSelector((state) => state.cart);
  let cartTotalPrice = 0;

  return (
    <div className={clsx("cart-overlay", activeStatus && "active")}>
      <div
        className="cart-overlay__close"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      />
      <div className="cart-overlay__content">
        {/*=======  close icon  =======*/}
        <button
          className="cart-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        {/*=======  offcanvas cart content container  =======*/}
        <div className="cart-overlay__content-container">
          <h3 className="cart-title">Cart</h3>

          <div className="cart-product-wrapper">
            <div className="cart-product-container">
              <CustomScroll allowOuterScroll={true}></CustomScroll>
            </div>
            {/*=======  subtotal calculation  =======*/}
            <p className="cart-subtotal">
              <span className="subtotal-title">Subtotal:</span>
              <span className="subtotal-amount"></span>
            </p>
            {/*=======  cart buttons  =======*/}
            <div className="cart-buttons">
              <Anchor path="/other/cart">view cart</Anchor>
              <Anchor path="/other/checkout">checkout</Anchor>
            </div>
            {/*=======  free shipping text  =======*/}
            <p className="free-shipping-text">
              Free Shipping on All Orders Over $100!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cartData
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteFromCart: (item, addToast) => {
//       dispatch(deleteFromCart(item, addToast));
//     }
//   };
// };

export default CartOverlay;
