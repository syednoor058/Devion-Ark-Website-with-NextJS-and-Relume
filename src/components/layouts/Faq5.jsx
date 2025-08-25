"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Add } from "relume-icons";

export function Faq5() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="md:mb-18 mb-12 max-w-lg lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Find answers to common questions about our services and how we can
            help your business.
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <Card>
            <AccordionItem value="item-0" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What services do you offer?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                We provide a range of services including custom software
                solutions, professional website development, and digital
                marketing strategies. Our goal is to help businesses enhance
                their online presence and achieve their objectives. Whether you
                are a startup or an established corporation, we tailor our
                services to meet your unique needs.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-1" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                How can I get started?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Getting started is easy! Simply reach out to us through our
                contact form or give us a call. Our team will guide you through
                the process and discuss how we can assist your business.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-2" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Do you offer support?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes, we offer comprehensive support for all our services. Our
                dedicated team is available to assist you with any questions or
                issues that may arise. We believe in building long-term
                relationships with our clients through ongoing support.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-3" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What is your pricing?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Our pricing varies based on the specific services and solutions
                you require. We strive to provide competitive rates while
                delivering exceptional value. Contact us for a personalized
                quote tailored to your business needs.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-4" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Can I see examples?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Absolutely! We have a portfolio showcasing our previous projects
                and success stories. These examples highlight our capabilities
                and the results we've achieved for our clients. Check out our
                website to explore our work.
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="md:mt-18 mt-12 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Still have questions?
          </h4>
          <p className="text-medium">We're here to help you!</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
