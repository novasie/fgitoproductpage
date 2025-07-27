"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  ChefHat,
  MessageCircle,
} from "lucide-react";
import { headingData } from "@/data/orderNowData";
import { bulkOrderSchema } from "@/utils/validation/bulkOrder";
import { emailSender } from "@/utils/customFunction/emailSender";
import { EMAIL_TYPE } from "@/utils/constant";

const OrderNow = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(bulkOrderSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const fullAddress = `${data.address}, ${data.city}, ${data.district}, ${data.state}, ${data.zipCode}, ${data.country}`;
    data.fullAddress = fullAddress;
    emailSender(EMAIL_TYPE.BULK_ORDER, data);
    console.log("Form Data Submitted:", data);
    setTimeout(() => {
      setSubmittedData(data);
      setShowAlert(true);
      setIsSubmitting(false);
      reset()
    }, 1000);
  };

  const closeAlert = () => {
    setShowAlert(false);
    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-gray to-theme-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="text-5xl md:text-6xl font-bold text-theme-black mb-6 leading-tight">
            {headingData.heading}
            <span className="block text-theme-red">Request</span>
          </h1>
          <p className="text-xl text-theme-gray-500 max-w-3xl mx-auto mb-8 leading-relaxed">
            {headingData.subHeading}
          </p>

          {/* Feature Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <div className="flex items-center gap-2 bg-theme-green-50 text-theme-green px-4 py-2 rounded-full border border-theme-green-100">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Best Quality</span>
            </div>
            <div className="flex items-center gap-2 bg-theme-yellow-50 text-theme-green px-4 py-2 rounded-full border border-theme-yellow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">100% Hygienic</span>
            </div>
            <div className="flex items-center gap-2 bg-theme-red-100 text-theme-white px-4 py-2 rounded-full border border-theme-red-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Homemade</span>
            </div>
            <div className="flex items-center gap-2 bg-theme-green-50 text-theme-green px-4 py-2 rounded-full border border-theme-green-100">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Fresh Ingredients</span>
            </div>
            <div className="flex items-center gap-2 bg-theme-yellow-50 text-theme-green px-4 py-2 rounded-full border border-theme-yellow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">On-Time Delivery</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Information Card */}
            <Card className="border-l-4 border-l-theme-red shadow-lg bg-theme-white">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-theme-black">
                  <div className="w-10 h-10 bg-theme-red rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-theme-white" />
                  </div>
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-theme-black font-medium"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="h-12 focus:ring-theme-red focus:border-theme-red"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-theme-red">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-theme-black font-medium"
                  >
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-theme-gray-500 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="h-12 pl-10 focus:ring-theme-red focus:border-theme-red"
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-theme-red">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="mobile"
                    className="text-theme-black font-medium"
                  >
                    Mobile Number *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-theme-gray-500 w-4 h-4" />
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="h-12 pl-10 focus:ring-theme-red focus:border-theme-red"
                      {...register("mobile")}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="text-sm text-theme-red">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Event Information Card */}
            <Card className="border-l-4 border-l-theme-green shadow-lg bg-theme-white">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-theme-black">
                  <div className="w-10 h-10 bg-theme-green rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-theme-white" />
                  </div>
                  Event Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid grid-cols-2  gap-1">
                    <div className="space-y-2">
                      <Label
                        htmlFor="dateOfEvent"
                        className="text-theme-black font-medium"
                      >
                        Event Date *
                      </Label>
                      <Input
                        id="dateOfEvent"
                        type="date"
                        className="h-12 focus:ring-theme-green focus:border-theme-green"
                        {...register("dateOfEvent")}
                      />
                      {errors.dateOfEvent && (
                        <p className="text-sm text-theme-red">
                          {errors.dateOfEvent.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="preferedDeliveryTime"
                        className="text-theme-black font-medium"
                      >
                        Delivery Time *
                      </Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-theme-gray-500 w-4 h-4" />
                        <Input
                          id="preferedDeliveryTime"
                          type="time"
                          className="h-12 pl-10 focus:ring-theme-green focus:border-theme-green"
                          {...register("preferedDeliveryTime")}
                        />
                      </div>
                      {errors.preferedDeliveryTime && (
                        <p className="text-sm text-theme-red">
                          {errors.preferedDeliveryTime.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="occasion"
                    className="text-theme-black font-medium"
                  >
                    Occasion *
                  </Label>
                  <Select
                    onValueChange={(value) => setValue("occasion", value)}
                  >
                    <SelectTrigger className="h-12 focus:ring-theme-green focus:border-theme-green">
                      <SelectValue placeholder="Select occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Birthday Party">
                        Birthday Party
                      </SelectItem>
                      <SelectItem value="Wedding">Wedding</SelectItem>
                      <SelectItem value="Corporate Event">
                        Corporate Event
                      </SelectItem>
                      <SelectItem value="Anniversary">Anniversary</SelectItem>
                      <SelectItem value="Festival Celebration">
                        Festival Celebration
                      </SelectItem>
                      <SelectItem value="Family Gathering">
                        Family Gathering
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.occasion && (
                    <p className="text-sm text-theme-red">
                      {errors.occasion.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="noOfPeople"
                    className="text-theme-black font-medium"
                  >
                    Number of People *
                  </Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-theme-gray-500 w-4 h-4" />
                    <Input
                      id="noOfPeople"
                      type="number"
                      placeholder="Expected number of guests"
                      min="1"
                      className="h-12 pl-10 focus:ring-theme-green focus:border-theme-green"
                      {...register("noOfPeople")}
                    />
                  </div>
                  {errors.noOfPeople && (
                    <p className="text-sm text-theme-red">
                      {errors.noOfPeople.message}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Address Information Card */}
          <Card className="shadow-lg border-l-4 border-l-theme-yellow bg-theme-white">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-theme-black">
                <div className="w-10 h-10 bg-theme-yellow rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-theme-white" />
                </div>
                Delivery Address Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="address"
                  className="text-theme-black font-medium"
                >
                  Street Address *
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-theme-gray-500 w-4 h-4" />
                  <Textarea
                    id="address"
                    placeholder="Enter street address including landmarks"
                    className="min-h-[80px] pl-10 focus:ring-theme-yellow focus:border-theme-yellow resize-none"
                    {...register("address")}
                  />
                </div>
                {errors.address && (
                  <p className="text-sm text-theme-red">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="city"
                    className="text-theme-black font-medium"
                  >
                    City *
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Enter city"
                    className="h-12 focus:ring-theme-yellow focus:border-theme-yellow"
                    {...register("city")}
                  />
                  {errors.city && (
                    <p className="text-sm text-theme-red">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="district"
                    className="text-theme-black font-medium"
                  >
                    District *
                  </Label>
                  <Input
                    id="district"
                    type="text"
                    placeholder="Enter district"
                    className="h-12 focus:ring-theme-yellow focus:border-theme-yellow"
                    {...register("district")}
                  />
                  {errors.district && (
                    <p className="text-sm text-theme-red">
                      {errors.district.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="state"
                    className="text-theme-black font-medium"
                  >
                    State *
                  </Label>
                  <Input
                    id="state"
                    type="text"
                    placeholder="Enter state"
                    className="h-12 focus:ring-theme-yellow focus:border-theme-yellow"
                    {...register("state")}
                  />
                  {errors.state && (
                    <p className="text-sm text-theme-red">
                      {errors.state.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="zipCode"
                    className="text-theme-black font-medium"
                  >
                    Zip Code *
                  </Label>
                  <Input
                    id="zipCode"
                    type="text"
                    placeholder="6-digit zip code"
                    maxLength="6"
                    className="h-12 focus:ring-theme-yellow focus:border-theme-yellow"
                    {...register("zipCode")}
                    onInput={(e) => {
                      // Only allow digits
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                  />
                  {errors.zipCode && (
                    <p className="text-sm text-theme-red">
                      {errors.zipCode.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="country"
                    className="text-theme-black font-medium"
                  >
                    Country *
                  </Label>
                  <Input
                    id="country"
                    type="text"
                    placeholder="Enter country"
                    className="h-12 focus:ring-theme-yellow focus:border-theme-yellow"
                    {...register("country")}
                  />
                  {errors.country && (
                    <p className="text-sm text-theme-red">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Required Items Card */}
          <Card className="shadow-lg border-l-4 border-l-theme-green bg-theme-white">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-theme-black">
                <div className="w-10 h-10 bg-theme-green rounded-full flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-theme-white" />
                </div>
                Food Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="requiredItems"
                  className="text-theme-black font-medium"
                >
                  Required Items & Special Requests *
                </Label>
                <div className="relative">
                  <ChefHat className="absolute left-3 top-3 text-theme-gray-500 w-4 h-4" />
                  <Textarea
                    id="requiredItems"
                    placeholder="Please describe the food items you need, dietary preferences, quantity requirements, and any special requests..."
                    className="min-h-[120px] pl-10 focus:ring-theme-red focus:border-theme-red resize-none"
                    {...register("requiredItems")}
                  />
                </div>
                {errors.requiredItems && (
                  <p className="text-sm text-theme-red">
                    {errors.requiredItems.message}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="bg-theme-red hover:bg-theme-red-200 text-theme-white font-semibold py-6 px-12 h-auto text-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting...
                </div>
              ) : (
                "Submit Order Request"
              )}
            </Button>
          </div>
        </form>

        {/* What's Next Section */}
        <Card className="mt-16 bg-theme-yellow-50 border-theme-yellow shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-theme-black mb-6 text-center">
              What Happens Next?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-theme-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-theme-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-theme-black mb-2 text-lg">
                  Review & Contact
                </h4>
                <p className="text-theme-gray-500">
                  We'll review your request and contact you within 12 hours
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-theme-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-theme-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-theme-black mb-2 text-lg">
                  Custom Quote
                </h4>
                <p className="text-theme-gray-500">
                  Receive a detailed quote tailored to your event needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-theme-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-theme-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-theme-black mb-2 text-lg">
                  Confirmation
                </h4>
                <p className="text-theme-gray-500">
                  Confirm your order and we'll handle the rest
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card className="mt-8 bg-theme-white shadow-lg">
          <CardContent className="p-6 text-center">
            <p className="text-theme-gray-500 mb-4 text-lg">
              Need help or have questions?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8">
              <Button
                variant="outline"
                asChild
                className="border-theme-red text-theme-red hover:bg-theme-red hover:text-theme-white w-48"
              >
                <a href="tel:+918081221164" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 80812 21164
                </a>
              </Button>
              <Button
                variant="destructive"
                asChild
                className="border-theme-red text-theme-white hover:bg-theme-red hover:text-theme-white w-48"
              >
                <a
                  href="https://wa.me/918081221164?text=Hi%21%20I%E2%80%99m%20interested%20in%20placing%20an%20order%20for%20an%20event%20or%20party.%20Could%20you%20please%20help%20me%20with%20the%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Success Alert Dialog */}
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <AlertDialogHeader>
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-theme-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-theme-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <AlertDialogTitle className="text-2xl font-semibold text-theme-black text-center">
              Order Request Submitted!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-theme-gray-500">
              Thank you for choosing FGITO. Here's a summary of
              your request:
            </AlertDialogDescription>
          </AlertDialogHeader>

          {submittedData && (
            <div className="bg-theme-gray rounded-lg p-6 my-6">
              <h4 className="font-semibold text-theme-black mb-4">
                Order Summary:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Name:</strong> {submittedData.name}
                </div>
                <div>
                  <strong>Email:</strong> {submittedData.email}
                </div>
                <div>
                  <strong>Mobile:</strong> {submittedData.mobile}
                </div>
                <div>
                  <strong>Event Date:</strong> {submittedData.dateOfEvent}
                </div>
                <div>
                  <strong>Occasion:</strong> {submittedData.occasion}
                </div>
                <div>
                  <strong>Guests:</strong> {submittedData.noOfPeople}
                </div>
                <div className="md:col-span-2">
                  <strong>Delivery Time:</strong>{" "}
                  {submittedData.preferedDeliveryTime}
                </div>
                <div className="md:col-span-2">
                  <strong>Address:</strong> {submittedData.address}
                </div>
                <div>
                  <strong>City:</strong> {submittedData.city}
                </div>
                <div>
                  <strong>District:</strong> {submittedData.district}
                </div>
                <div>
                  <strong>State:</strong> {submittedData.state}
                </div>
                <div>
                  <strong>Zip Code:</strong> {submittedData.zipCode}
                </div>
                <div>
                  <strong>Country:</strong> {submittedData.country}
                </div>
                <div className="md:col-span-2">
                  <strong>Requirements:</strong> {submittedData.requiredItems}
                </div>
              </div>
            </div>
          )}

          <AlertDialogFooter>
            <AlertDialogAction
              onClick={closeAlert}
              className="bg-theme-red hover:bg-theme-red-200 text-theme-white"
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default OrderNow;
