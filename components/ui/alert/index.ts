import { cva, type VariantProps } from "class-variance-authority";

export { default as Alert } from "./Alert.vue";
export { default as AlertDescription } from "./AlertDescription.vue";
export { default as AlertTitle } from "./AlertTitle.vue";

export const alertVariants = cva(
  "relative w-full rounded-base shadow-light dark:shadow-dark font-heading border-2 border-border dark:border-darkBorder p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-text",
  {
    variants: {
      variant: {
        default: "bg-main text-text",
        destructive: "bg-black text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;
