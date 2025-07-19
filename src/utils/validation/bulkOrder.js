import { z } from "zod";
export const bulkOrderSchema = z.object({
  // Personal Information
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number is too long"),

  // Event Information
  dateOfEvent: z.string().min(1, "Event date is required"),
  occasion: z.string().min(2, "Occasion is required"),
  fullAddress: z.string().min(10, "Please provide a complete address"),
  noOfPeople: z.string().min(1, "Number of people is required"),
  preferedDeliveryTime: z
    .string()
    .min(1, "Preferred delivery time is required"),
  requiredItems: z
    .string()
    .min(10, "Please provide details about required items"),
});
