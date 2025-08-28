import { DownImageHeader } from "@/components/headers/DownImageHeader";
import { ZoomOnScrollHeader } from "@/components/headers/ZoomOnScrollHeader";
import { ImageBox } from "@/components/layouts/ImageBox";
import { GoProjectSymlink } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import productSS from "../../../../public/images/case-studies/real-estate-system/propsuit-screenshot-1.jpg";
import productSS2 from "../../../../public/images/case-studies/real-estate-system/propsuit-screenshot-2.jpg";

export default function Page() {
  return (
    <div>
      <ZoomOnScrollHeader
        image={productSS}
        alt="Propsuit Application Screenshot"
        title={<>Comprehensive Real Estate Management System</>}
        desc="A leading real estate company approached us with a critical challenge: modernizing their traditional paper-based processes into a fully cloud-based software solution. The goal was to centralize all operations—ranging from stock management to customer relations—into one secure, scalable, and easy-to-use platform."
        primaryButton="View Demo"
        secondaryButton="Github"
      />
      <div className="w-full px-[5%] py-10 md:py-16 lg:py-20 bg-neutral-950 text-neutral-300">
        <p className="text-white md:font-semibold text-md md:text-xl lg:text-4xl indent-20 lg:indent-32 leading-[1.2]">
          Our client needed a powerful, end-to-end system that could handle
          every aspect of their real estate business operations. We built a{" "}
          <span className="bg-gradient-to-r from-accentColor1 to-accentColor2">
            comprehensive platform
          </span>{" "}
          with dedicated modules for material stock tracking, vendor management,
          transactions, budgeting, profit analysis, project management, expense
          records, employee and payroll management, and customer data. We
          delivered a{" "}
          <span className="bg-gradient-to-r from-accentColor1 to-accentColor2">
            robust and scalable{" "}
          </span>{" "}
          that ensures high performance, security, and future growth.
        </p>
      </div>
      <ImageBox
        tagline="Efficiency in Every Transaction"
        title={
          <>
            Simplified Project and <br />
            Financial Oversight
          </>
        }
        desc="One of the key focuses was ensuring financial and project transparency. The system provides real-time data on transactions, project budgets, and profitability, giving stakeholders the tools to make informed business decisions quickly."
        iconbox={[
          {
            title: "Profit & Cost Tracking",
            desc: "The system automatically calculates project budgets, expenses, and net profits, helping management stay on top of financial performance.",
            icon: <LuBadgeDollarSign />,
          },
          {
            title: "Project Management",
            desc: "From planning to completion, each project is tracked with detailed records of materials, vendors, and financial progress.",
            icon: <GoProjectSymlink />,
          },
        ]}
        image={productSS2}
        alt="Propsuit Application Mockup"
        buttons={false}
      />
      <DownImageHeader
        title="Building Trust Through Transparency"
        desc="Real estate relies heavily on customer trust. The system provides complete history of customer interactions, agreements, and payments, ensuring every detail is securely stored and easily accessible."
        image={productSS}
        alt="Propsuit app screenshot"
        iconbox={[
          {
            title: "Customer Records",
            desc: "Maintain accurate, centralized customer data including contracts, communication, and transaction logs.",
            icon: <GrUserWorker />,
          },
          {
            title: "Transaction History",
            desc: "Track every financial transaction with transparency, accuracy, and real-time reporting.",
            icon: <MdOutlineShoppingCart />,
          },
        ]}
      />
      <ImageBox
        tagline="Empowering Teams and Partnerships"
        title={
          <>
            Expanded Workforce
            <br />
            and Oversight
          </>
        }
        desc="The platform streamlines both employee and vendor-related operations. Whether managing salaries, attendance, or vendor contracts, everything is handled in a single centralized system."
        iconbox={[
          {
            title: "Employee Management",
            desc: "Keep records of employee data, salary history, and performance with automated payroll processing.",
            icon: <GrUserWorker />,
          },
          {
            title: "Vendor Integration",
            desc: "Manage supplier details, contracts, and transactions seamlessly to ensure uninterrupted material supply chains.",
            icon: <MdOutlineShoppingCart />,
          },
        ]}
        image={productSS2}
        alt="Propsuit Application Mockup"
        buttons={false}
        align="left"
      />
    </div>
  );
}
