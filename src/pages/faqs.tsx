import { useState } from "react";
import Footer from "../components/footer";

export default function FAQS() {
  "use client";

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services does Foremost Systems offer?",
      answer:
        "We specialize in security products like CCTV cameras, wireless camera kits, biometric attendance systems, smart door locks, and access control systems, along with expert installation, maintenance, and 24/7 support.",
    },
    {
      question: "How long has Foremost Systems been in the security industry?",
      answer:
        "Foremost Systems has over 17 years of experience since 2007, completing more than 300 projects across India.",
    },
    {
      question:
        "Can I monitor my workplace remotely with Foremost Systems’ products?",
      answer:
        "Yes! Our systems allow you to monitor your workplace directly from your phone, ensuring easy and secure access anywhere, anytime.",
    },
    {
      question: "What brands do Foremost Systems work with?",
      answer:
        "We deal with over 30 trusted brands, ensuring superior quality and reliability across all our security products.",
    },
    {
      question: "Is Foremost Systems certified?",
      answer:
        "Absolutely! We hold certifications including ISO:9001, BIS, ROHS, CE, and FCC, ensuring our products meet global quality and safety standards.",
    },
    {
      question:
        "How does Foremost Systems support customers after installation?",
      answer:
        "We offer 24/7 support through our strong after-sales service network across our distribution channels.",
    },
    {
      question:
        "What is the working process for installing a security system with Foremost Systems?",
      answer:
        "Our process includes discussion to understand your needs, professional installation, and continuous maintenance to ensure peak performance.",
    },
    {
      question: "Why should I choose Foremost Systems over others?",
      answer:
        "With industry certifications, trusted brands, a proven track record, and round-the-clock support, Foremost Systems ensures quality, reliability, and customer satisfaction.",
    },
    {
      question:
        "Can Foremost Systems customize security solutions for my specific needs?",
      answer:
        "Yes, we tailor security systems based on your unique requirements, whether it's for a small office, large enterprise, or home security.",
    },
    {
      question: "How can I get started with Foremost Systems?",
      answer:
        "Simply fill out the contact form on our website, and our team will reach out to you within 24 hours to discuss your security needs.",
    },
  ];

  return (
    <div className="bg-[#F2F2F2]">
      <section className="relative bg-[rgba(0,0,0,0.78)] py-20">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Everything you need to know about our services and how we can help
            you secure your space.
          </p>

          <div className="bg-black/70 rounded-2xl shadow-2xl p-8 md:p-12 backdrop-blur-md">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-700 last:border-none"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                    className="flex w-full justify-between items-center py-4 text-left"
                  >
                    <span className="text-lg md:text-xl font-medium text-gray-200">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        openIndex === idx
                          ? "rotate-180 text-green-500"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 text-gray-400 text-left ${
                      openIndex === idx ? "max-h-40 py-2" : "max-h-0"
                    }`}
                  >
                    <p className="text-base">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
