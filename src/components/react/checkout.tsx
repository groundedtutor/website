import { useStore } from "@nanostores/preact";
import { $stripeInstance } from "@store/stripe";
import { PaymentElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import type { FunctionalComponent } from "preact";

interface CheckoutProps {
  clientSecret: string;
}

// https://stripe.com/docs/payments/quickstart
const Checkout: FunctionalComponent<CheckoutProps> = ({clientSecret}) => {
  const stripe = useStore($stripeInstance);

  return (
    <form className="p-4">
      <Elements stripe={stripe} options={{clientSecret}}>
        <PaymentElement />
      </Elements>
      <button className="btn btn-primary outline-none">Submit</button>
    </form>
  );
};

export default Checkout;
