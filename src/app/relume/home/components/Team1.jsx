"use client";

import { Button } from "@/components/ui/button";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export function Team1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Team</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Our Team</h2>
          <p className="text-medium">
            Meet the talented professionals behind our success.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Alice Johnson</h5>
              <h6 className="text-medium">Project Manager</h6>
            </div>
            <p>
              Alice ensures projects run smoothly and meet client expectations
              every time.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <FaLinkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <FaGithubSquare className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <FaFacebookSquare className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Bob Smith</h5>
              <h6 className="text-medium">Lead Developer</h6>
            </div>
            <p>
              Bob crafts innovative software solutions that drive business
              growth and efficiency.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <FaLinkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <FaGithubSquare className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <FaFacebookSquare className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Cathy Lee</h5>
              <h6 className="text-medium">Marketing Specialist</h6>
            </div>
            <p>
              Cathy develops strategies that elevate our clients' brands in the
              digital landscape.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <FaLinkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <FaGithubSquare className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <FaFacebookSquare className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">David Kim</h5>
              <h6 className="text-medium">SEO Expert</h6>
            </div>
            <p>
              David optimizes content to enhance visibility and drive organic
              traffic to client websites.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <FaLinkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <FaGithubSquare className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <FaFacebookSquare className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Emma Brown</h5>
              <h6 className="text-medium">Business Analyst</h6>
            </div>
            <p>
              Emma analyzes market trends to provide insights that inform
              strategic decisions.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <FaLinkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <FaGithubSquare className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <FaFacebookSquare className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Frank White</h5>
              <h6 className="text-medium">Creative Director</h6>
            </div>
            <p>
              Frank leads our design team to create visually stunning and
              effective digital experiences.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <FaLinkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <FaGithubSquare className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <FaFacebookSquare className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Grace Green</h5>
              <h6 className="text-medium">Content Writer</h6>
            </div>
            <p>
              Grace crafts compelling narratives that resonate with audiences
              and drive engagement.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <FaLinkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <FaGithubSquare className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <FaFacebookSquare className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">We're hiring!</h5>
              <h6 className="text-medium">Join us</h6>
            </div>
            <p>
              Explore exciting opportunities to be part of our dynamic team and
              grow your career.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <FaLinkedin className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <FaGithubSquare className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <FaFacebookSquare className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">We're hiring!</h4>
          <p className="text-medium">
            Discover your next career opportunity with us.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 text-center md:mt-8">
            <Button title="Open positions" variant="secondary">
              Open positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
