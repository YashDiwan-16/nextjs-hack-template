import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AboutAccordion() {
  const accordionItems = [
    {
      value: "mission",
      title: "Our Mission",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
      content: "We strive to democratize blockchain technology by creating accessible, user-friendly solutions that bridge the gap between traditional systems and the decentralized future. Our goal is to empower individuals and organizations to harness the full potential of Web3."
    },
    {
      value: "vision",
      title: "Our Vision",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7"></path>
        </svg>
      ),
      content: "We envision a world where blockchain technology is seamlessly integrated into everyday life, creating more transparent, secure, and equitable systems across all sectors. We're building towards a future where decentralized solutions are the standard, not the exception."
    },
    {
      value: "values",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
        </svg>
      ),
      title: "Our Values",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Innovation:</span> We constantly push boundaries and explore new possibilities.</li>
          <li><span className="font-medium">Transparency:</span> We believe in open communication and honest practices.</li>
          <li><span className="font-medium">Accessibility:</span> We design with all users in mind, regardless of technical expertise.</li>
          <li><span className="font-medium">Community:</span> We value collaboration and believe in the power of collective intelligence.</li>
        </ul>
      )
    },
    {
      value: "story",
      title: "Our Story",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v-4h2a2 2 0 0 0 0-4h-2Z"></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      ),
      content: "Founded in 2021, our journey began with a simple idea: to make blockchain technology more accessible. What started as a small team of enthusiasts has grown into a diverse group of experts united by a shared passion for decentralized innovation. Through challenges and triumphs, we've remained committed to our core mission of building solutions that matter."
    }
  ];

  return (
    <section className="w-full  mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="relative">
        {/* Decorative Background Elements */}
        <div className="absolute -top-6 -left-8 w-20 h-20 rounded-full opacity-10 bg-current blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-10 bg-current blur-3xl"></div>
        
        {/* Card Container with subtle shadow */}
        <div className="relative backdrop-blur-sm rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg p-6 sm:p-8">
          
         
          
          {/* Shadcn Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {accordionItems.map((item, index) => (
              <AccordionItem 
                key={item.value} 
                value={item.value}
                className={`overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 data-[state=open]:bg-zinc-50 dark:data-[state=open]:bg-zinc-900/30 ${index !== accordionItems.length - 1 ? 'mb-4' : ''}`}
              >
                <AccordionTrigger className="px-6 py-4 text-lg sm:text-xl font-semibold hover:no-underline group cursor-pointer ">
                  <div className="flex items-center space-x-3">
                    {/* Section Icon */}
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                      {item.icon}
                    </div>
                    {/* Title */}
                    <span>{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2 text-gray-600 dark:text-gray-300 text-base sm:text-lg data-[state=open]:animate-fadeIn">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
        </div>
      </div>
    </section>
  );
}

