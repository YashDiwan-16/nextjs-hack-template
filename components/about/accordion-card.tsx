import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AboutAccordion() {
  const accordionItems = [
    {
      value: "mission",
      title: "Our Mission",
      content: "We strive to democratize blockchain technology by creating accessible, user-friendly solutions that bridge the gap between traditional systems and the decentralized future. Our goal is to empower individuals and organizations to harness the full potential of Web3."
    },
    {
      value: "vision",
      title: "Our Vision",
      content: "We envision a world where blockchain technology is seamlessly integrated into everyday life, creating more transparent, secure, and equitable systems across all sectors. We're building towards a future where decentralized solutions are the standard, not the exception."
    },
    {
      value: "values",
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
      content: "Founded in 2021, our journey began with a simple idea: to make blockchain technology more accessible. What started as a small team of enthusiasts has grown into a diverse group of experts united by a shared passion for decentralized innovation. Through challenges and triumphs, we've remained committed to our core mission of building solutions that matter."
    }
  ];

  return (
    <section className="w-full max-w-4xl mb-20">
      <Accordion type="single" collapsible className="w-full">
        {accordionItems.map(item => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="text-xl font-semibold">{item.title}</AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-300 text-lg">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
