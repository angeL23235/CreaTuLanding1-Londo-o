import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CardWidget.css";

function CardWidget() {
  const { getAmount, cart } = useContext(CartContext);
  const amount = getAmount();
  const navigate = useNavigate();

  return (
    <div className="CardWidgetSection relative flex items-center space-x-2">
      <div onClick={() => navigate("/cart")} className="cursor-pointer">
        <ShoppingCartIcon />
        <span>{amount}</span>
      </div>

      {cart.length > 0 && (
        <button
          onClick={() => navigate("/checkout")}
          className="ml-4 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-lg transition"
        >
          Ir al Checkout
        </button>
      )}
    </div>
  );
}

export default CardWidget;
