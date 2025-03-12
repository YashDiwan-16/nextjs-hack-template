import ContactText from "@/components/contact/text";
import ContactForm from "@/components/contact/form";
import EthereumAnimation from "@/components/contact/svg-animation";

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-64px-80px)] relative flex flex-col md:flex-row">
      {/* Contact Text positioned at top on mobile and top left on desktop */}
      {/* <div className="w-full md:w-1/2 p-4 order-1 md:flex md:justify-end">
        <div className="md:w-5/6 lg:w-4/5 xl:w-3/4">
          <ContactText className="p-6" />
        </div>
      </div> */}
      {/* Contact Text positioned at top on mobile and top right on desktop */}

{/* Contact Text positioned at top on mobile and shifted more right on desktop */}
<div className="w-full md:w-1/2 p-4 order-1 md:flex md:justify-end md:ml-60">
  <div className="md:w-5/6 lg:w-4/5 xl:w-3/4">
    <ContactText className="p-6" />
  </div>
</div>




      {/* Ethereum Animation for desktop */}
      <div className="hidden md:block absolute left-40 top-1/2 -translate-y-1/2 p-4 z-10">
        <EthereumAnimation />
      </div>

      {/* Ethereum Animation for mobile (displayed below Contact Text) */}
      <div className="block md:hidden p-4 order-2">
        <EthereumAnimation />
      </div>

      {/* Contact Form positioned on the bottom on mobile and on the right on desktop */}
      <div className="w-full md:w-1/2 p-4 order-3 md:mt-12 flex items-center justify-center">
        <ContactForm />
      </div>
    </main>
  );
}


