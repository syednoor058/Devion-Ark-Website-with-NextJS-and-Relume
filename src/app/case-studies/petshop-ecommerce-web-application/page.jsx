import { TestimonialCard } from "@/components/cards/cards";
import { DownImageHeader } from "@/components/headers/DownImageHeader";
import { ZoomOnScrollHeader } from "@/components/headers/ZoomOnScrollHeader";
import { ImageBox } from "@/components/layouts/ImageBox";
import { FaRegCreditCard } from "react-icons/fa6";
import { FiBox, FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiDog } from "react-icons/pi";
import productSS2 from "../../../../public/images/case-studies/petshop-ecommerce/pet-ecommerce-sbrnshot-2.jpg";
import productSSMob from "../../../../public/images/case-studies/petshop-ecommerce/pet-ecommerce-screnshot-1-mob.png";
import productSSTab from "../../../../public/images/case-studies/petshop-ecommerce/pet-ecommerce-screnshot-1-tab.png";
import productSS from "../../../../public/images/case-studies/petshop-ecommerce/pet-ecommerce-screnshot-1.png";
import productSS3 from "../../../../public/images/case-studies/petshop-ecommerce/pet-ecommerce-scrnshot-3.png";
import productSS4 from "../../../../public/images/case-studies/petshop-ecommerce/pet-ecommerce-scrnshot-4.jpg";
import mazhar from "../../../../public/images/testimonials/mazhar.jpg";

export default function PetShopEcommerce() {
  return (
    <>
      <ZoomOnScrollHeader
        image={productSS}
        imageMob={productSSMob}
        imageTab={productSSTab}
        alt="Propsuit Application Screenshot"
        title={
          <>
            Complete eCommerce
            <br />
            for Pet Owners
          </>
        }
        desc="This project was built to help a growing pet supply store expand its business online. The client wanted a reliable and modern eCommerce solution that would let customers shop for food, medicine, and accessories for their pets from the comfort of home. The app was designed with speed, convenience, and scalability in mind, ensuring a smooth shopping experience for both customers and the store’s management team."
        primaryButton="View Demo"
        secondaryButton="Github"
      />
      <div className="w-full px-[5%] py-10 md:py-16 lg:py-20 bg-neutral-950 text-neutral-300">
        <p className="text-white md:font-semibold text-md md:text-xl lg:text-4xl indent-20 lg:indent-32 leading-[1.2]">
          The Petshop eCommerce application was developed to create a
          digital-first business model for a traditional pet store. Customers
          can browse a wide product catalog, add items to their cart or
          wishlist, complete secure purchases, and track their orders in real
          time. At the same time, the admin panel provides full control over
          products, orders, inventory, and customer relationships.
        </p>
      </div>
      <ImageBox
        tagline="Pet Owners"
        title={
          <>
            Smooth & Customized <br />
            Shopping Experience
          </>
        }
        desc="Customers can enjoy a modern and intuitive interface that makes shopping easy and enjoyable. With advanced search and filtering, they can quickly find food, medicine, or accessories tailored to their pet’s needs. The system ensures that browsing is fast, responsive, and visually engaging, giving users confidence that they are buying from a professional and trustworthy platform."
        iconbox={[
          {
            title: "Product Catalog",
            desc: "A wide range of categories including food, toys, grooming items, and medicine. Customers can explore curated collections that are always kept up to date.",
            icon: <PiDog />,
          },
          {
            title: "Smart Search & Filters",
            desc: "Users can filter products by type, brand, or price range. This ensures they spend less time searching and more time finding what’s right for their pets.",
            icon: <IoIosSearch />,
          },
        ]}
        image={productSS2}
        alt="Propsuit Application Mockup"
        buttons={false}
      />
      <DownImageHeader
        title="Secure and Convenient Purchases"
        desc="The checkout system was designed to be fast, reliable, and secure. Customers can easily manage their carts, store favorite items for later with wishlists, and pay using trusted local and international gateways. Order history and tracking provide transparency, while mobile-first design ensures that the process is seamless across all devices."
        image={productSS3}
        alt="Propsuit app screenshot"
        iconbox={[
          {
            title: "Cart & Wishlist",
            desc: "Shoppers can quickly add items to their cart or save them to a wishlist. This helps customers return later and complete purchases at their convenience.",
            icon: <FiShoppingCart />,
          },
          {
            title: "Secure Checkout",
            desc: "Integrated with Stripe and local payment gateways, ensuring customers feel safe and confident when paying online.",
            icon: <FaRegCreditCard />,
          },
        ]}
      />
      <ImageBox
        tagline="Store Management"
        title={
          <>
            Powerful Tools
            <br />
            for Business Growth
          </>
        }
        desc="The admin panel gives the pet shop owner complete control of their business operations. From adding and updating products to tracking inventory and fulfilling orders, everything is designed to be efficient and easy to manage. The system also provides insights into customer behavior and sales performance, helping the business grow strategically."
        iconbox={[
          {
            title: "Inventory Management",
            desc: "Automatic stock tracking keeps the catalog accurate. Store owners are alerted when items are low, ensuring they never miss a sale due to stockouts.",
            icon: <FiBox />,
          },
          {
            title: "Admin Dashboard",
            desc: "Detailed analytics and reporting tools provide insights into best-selling products, revenue streams, and customer trends, supporting smarter business decisions.",
            icon: <MdOutlineSpaceDashboard />,
          },
        ]}
        image={productSS4}
        alt="Propsuit Application Mockup"
        buttons={false}
        align="left"
      />

      <div className="w-full px-[5%] py-10 md:py-16 lg:py-20  text-neutral-600">
        <p className="md:font-semibold text-md md:text-xl lg:text-4xl text-center leading-[1.2]">
          The Petshop eCommerce web application successfully transformed the
          client’s local store into a scalable online business. Within the first
          quarter after launch, the platform recorded 200% growth in online
          sales and a steady increase in repeat customers. The intuitive
          shopping experience, combined with strong admin controls, made it a
          perfect balance of usability and business management.
        </p>
      </div>
      <div className="w-full px-[5%] pb-10 md:pb-16 lg:pb-20 flex flex-row justify-center ">
        <div className="max-w-3xl">
          <TestimonialCard
            name="Md Jubayeer Rahman"
            feedback="This platform gave our pet shop a new life. Customers can now order everything they need for their pets without leaving home, and managing the shop has become effortless. The team truly delivered beyond expectations."
            designation="Owner, TreatosBD"
            img={mazhar}
            align="center"
          />
        </div>
      </div>
    </>
  );
}
