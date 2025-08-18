"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Call, ChevronRight, LocationOn, Mail } from "relume-icons";

export function Contact12() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 max-w-lg md:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Connect</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Get in Touch</h2>
          <p className="text-medium">
            We’re here to answer your questions and assist you.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[1fr_1fr] md:gap-y-16 lg:gap-x-20">
          <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="grid w-full items-center">
                <Label htmlFor="firstName" className="mb-2">
                  First Name
                </Label>
                <Input type="text" id="firstName" />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="lastName" className="mb-2">
                  Last Name
                </Label>
                <Input type="text" id="lastName" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2">
                  Your Email
                </Label>
                <Input type="email" id="email" />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="phone" className="mb-2">
                  Phone Number
                </Label>
                <Input type="text" id="phone" />
              </div>
            </div>
            <div className="grid w-full items-center">
              <Label className="mb-2">Select a Topic</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose one..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first-choice">First Choice</SelectItem>
                  <SelectItem value="second-choice">Second Choice</SelectItem>
                  <SelectItem value="third-choice">Third Choice</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full items-center py-3 md:py-4">
              <Label className="mb-3 md:mb-4">
                How would you describe yourself?
              </Label>
              <RadioGroup className="grid grid-cols-2 gap-x-6 gap-y-3.5">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="first-choice" id="first-choice" />
                  <Label htmlFor="first-choice">Business Owner</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="second-choice" id="second-choice" />
                  <Label htmlFor="second-choice">Marketing Manager</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="third-choice" id="third-choice" />
                  <Label htmlFor="third-choice">IT Specialist</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fourth-choice" id="fourth-choice" />
                  <Label htmlFor="fourth-choice">Consultant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fifth-choice" id="fifth-choice" />
                  <Label htmlFor="fifth-choice">Other Inquiry</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                Your Message
              </Label>
              <Textarea
                id="message"
                placeholder="Write your message..."
                className="min-h-[12.25rem] overflow-auto"
              />
            </div>
            <div className="text-small mb-3 flex items-center space-x-2 md:mb-4">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer">
                I agree to the Terms
              </Label>
            </div>
            <div>
              <Button title="Send">Send</Button>
            </div>
          </form>
          <div className="mb-auto grid gap-x-4 gap-y-10 py-2 sm:grid-cols-2">
            <div>
              <div className="mb-3 md:mb-4">
                <Mail className="size-8 text-scheme-text" />
              </div>
              <h3 className="heading-h6 mb-2 font-bold">Email</h3>
              <p className="mb-2">contact@yourcompany.com</p>
              <a className="underline" href="#">
                hello@relume.io
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <Call className="size-8 text-scheme-text" />
              </div>
              <h3 className="heading-h6 mb-2 font-bold">Phone</h3>
              <p className="mb-2">+1 (555) 987-6543</p>
              <a className="underline" href="#">
                +1 (555) 123-4567
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <LocationOn className="size-8 text-scheme-text" />
              </div>
              <h3 className="heading-h6 mb-2 font-bold">Office</h3>
              <p className="mb-2">456 Example Ave, New York NY 10001 US</p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Get Directions"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
