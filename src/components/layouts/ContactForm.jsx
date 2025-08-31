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
import { MdOutlineCall, MdOutlineMail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { PrimaryButton } from "../buttons/Buttons";

export function ContactForm() {
  return (
    <section className="px-[5%] py-10 md:py-16 lg:py-20 text-neutral-600">
      <div className="container">
        <div className="mb-8 max-w-3xl md:mb-12">
          <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg bg-gradient-to-tr from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
            Connect
          </p>
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-neutral-800">
            Get in Touch
          </h2>
          <p className="md:text-md text-neutral-300 pl-6 border-l-4 border-accentColor2">
            We&apos;re here to answer your questions and assist you.
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
                <Label htmlFor="eFaFacebook" className="mb-2">
                  Your EFaFacebook
                </Label>
                <Input type="eFaFacebook" id="eFaFacebook" />
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
              <PrimaryButton text="Send Message" />
            </div>
          </form>
          <div className="mb-auto grid gap-x-4 gap-y-10 py-2 sm:grid-cols-2">
            <div>
              <div className="mb-3 md:mb-4">
                <MdOutlineMail className="size-8 text-scheme-text" />
              </div>
              <h3 className="heading-h6 mb-2 font-bold">E-mail</h3>
              <p className="mb-2">info@devionark.com</p>
              <p className="mb-2">support@devionark.com</p>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <MdOutlineCall className="size-8 text-scheme-text" />
              </div>
              <h3 className="heading-h6 mb-2 font-bold">Phone</h3>
              <p className="mb-2">(+88) 01782-734573</p>
              <p className="">(+88) 01893-204778</p>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <TfiLocationPin className="size-8 text-scheme-text" />
              </div>
              <h3 className="heading-h6 mb-2 font-bold">Head Office</h3>
              <p className="mb-2">
                08 Tootpara Central Rd, Khulna 9100 Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
