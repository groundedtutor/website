import { useStore } from "@nanostores/preact";
import { $isAnnualPricing } from "@store/stripe";
import type { FunctionalComponent } from "preact";
import { forwardRef } from "preact/compat";
import { useMemo } from "preact/hooks";

interface PriceDisplayProps {
  price?:
    | number
    | string
    | {
        monthly?: string;
        annual?: string;
        discount?: string;
        original?: string;
      };
}

const formatPrice = (price?: string | number) => {
  return `${price ?? "--"}`;
};

const PriceDisplay: FunctionalComponent<PriceDisplayProps> = forwardRef<
  HTMLParagraphElement,
  PriceDisplayProps
>(({ price }, ref) => {
  const isAnnualPricing = useStore($isAnnualPricing);
  const priceValue = useMemo(() => {
    if (typeof price === "object") {
      return formatPrice(isAnnualPricing ? price.annual : price.monthly);
    }
    return formatPrice(price);
  }, [price, isAnnualPricing]);

  return (
    <p ref={ref} className="mt-3 text-4xl font-bold text-black md:text-4xl">
      {priceValue}
      {priceValue.startsWith("$") ? <sub className="text-xl">/month</sub> : null}
    </p>
  );
});

export default PriceDisplay;
