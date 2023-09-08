import { useStore } from "@nanostores/preact";
import { Toggle } from "../../../components/react";
import { $isAnnualPricing, toggleAnnualPricing } from "@store/stripe";

/**
 * Component that displays a toggle for monthly and yearly pricing
 */
const PricingToggle = () => {
  const isAnnualPricing = useStore($isAnnualPricing); // retrieve the current pricing option from the store

  return (
    // container for the toggle
    <div class="flex justify-center my-4 space-x-2">
      {/* text for monthly pricing */}
      <span className={$isAnnualPricing ? "font-normal" : "font-bold"}>
        Monthly
      </span>
      {/* toggle component */}
      <div>
        <Toggle
          description="Monthly or Yearly"
          isEnabled={isAnnualPricing}
          onChange={toggleAnnualPricing}
        />
      </div>
      {/* text for yearly pricing */}
      <span className={$isAnnualPricing ? "font-bold" : "font-normal"}>
        Yearly
      </span>
    </div>
  );
};

export default PricingToggle;
