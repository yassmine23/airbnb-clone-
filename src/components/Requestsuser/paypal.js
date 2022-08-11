import React,{ useEffect ,useState} from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// This values are the props in the UI
const amount = "100";
const currency = "USD";
const style = {"color":"white"};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    );
}

export default function PayPalC() {
    const [checkout, setCheckOut] = useState(false);

	return <>
        {checkout ? (
            <div style={{ maxWidth: "615px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={true}
                />
			</PayPalScriptProvider>
		</div>          ) : (
            <button
              onClick={() => {
                setCheckOut(true);
              }}
            >
              Checkout
            </button>
          )}
		</>

}

// test
// import React, { useEffect ,useRef,useState} from "react";

//  function Paypalcheckout (){
//     const paypal = useRef();

//     useEffect(() => {
//       window.paypal
//         .Buttons({
//           createOrder: (data, actions, err) => {
//             return actions.order.create({
//               intent: "CAPTURE",
//               purchase_units: [
//                 {
//                   description: "Cool looking table",
//                   amount: {
//                     currency_code: "USD",
//                     value: 6500,
//                   },
//                 },
//               ],
//             });
//           },
//           onApprove: async (data, actions) => {
//             const order = await actions.order.capture();
//             console.log(order);
//           },
//           onError: (err) => {
//             console.log(err);
//           },
//         })
//         .render(paypal.current);
//     }, []);
  
//     return (
//       <div>
//         <div ref={paypal}></div>
//       </div>
//     );
// }

// export default function PayPalC () {
//     const [checkout, setCheckOut] = useState(false);
//     return <>
//       {checkout ? (
//         <Paypalcheckout />
//       ) : (
//         <button
//           onClick={() => {
//             setCheckOut(true);
//           }}
//         >
//           Checkout
//         </button>
//       )}
//     </>
// }
