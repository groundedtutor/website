import { atom, computed } from "nanostores";
import type { Stripe } from "@stripe/stripe-js";
export const $isAnnualPricing = atom(true);
export const $selectedPricingId = computed(
  $isAnnualPricing,
  (isAnnualPricing) =>
    isAnnualPricing
      ? import.meta.env.PUBLIC_STRIPE_YEARLY_PRICE
      : import.meta.env.PUBLIC_STRIPE_MONTHLY_PRICE
);
export const toggleAnnualPricing = (value?: boolean) => {
  $isAnnualPricing.set(value ?? !$isAnnualPricing.get());
};
export const $stripeInstance = atom<Stripe | null>(null);
