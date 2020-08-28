import React from "react";

function PlaceOrderScreen() {
    return (
        <div className="placeOrderBox">
            <div className="cartBox">
                <div className="cartDetails">
                    <div style={{ marginLeft: "1rem" }}>
                        <b>Shipping</b>
                    </div>
                    <div style={{ marginLeft: "1rem" }}>No 151 rue de bavailino, France</div>
                    <div style={{ marginLeft: "1rem" }}>
                        <b>Payment</b>
                    </div>
                    <div style={{ marginLeft: "1rem" }}>Payment method : paypal</div>
                    <div className="shoppingCartHeaderTop">
                        <div className="cartTitle">Shopping Cart</div>
                        <div>Price</div>
                    </div>
                    <div className="shoppingCartHeaderDetails">
                        <div className="cartItemBox">
                            <div>
                                <img src="/ProjectImages/2.jpg" alt="slim shirt" />
                            </div>
                            <div className="cartQuantity">
                                <div>Slim Shirts</div>
                                <div>
                                    Qty :{" "}
                                   1
                                </div>
                            </div>
                        </div>
                        <div><b>$100</b></div>
                    </div>
                </div>
                <div className="cartSubtotalBox">
                    <div>
                        <div>
                            <button>Place order</button>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between", fontSize:"small"}}>
                            <div>Items</div>
                            <div>$60</div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:"small"}}>
                            <div>Shipping</div>
                            <div>$60</div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:"small"}}>
                            <div>Tax</div>
                            <div>$60</div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:"medium",color:"red"}}>
                            <div >Order Total</div>
                            <div>$60</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceOrderScreen;
