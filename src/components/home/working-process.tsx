import { ThemeIcon, Text, Title } from "@mantine/core";

const steps = [
  {
    label: "Discussion",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-3-3h-2M9 20H4v-2a3 3 0 013-3h2m2-4a4 4 0 110-8 4 4 0 010 8zm6 0a4 4 0 100-8 4 4 0 000 8z"
        />
      </svg>
    ),
  },
  {
    label: "Installation",
    highlighted: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 3v2.25m0 13.5V21m4.5-18v2.25m0 13.5V21M4.5 9.75H3m18 0h-1.5M4.5 14.25H3m18 0h-1.5M7.5 6.75h9a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75z"
        />
      </svg>
    ),
  },
  {
    label: "Maintenance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2m-6 0h6M5.121 5.121a3 3 0 014.242 0L12 7.757l2.637-2.636a3 3 0 114.242 4.242L12 18.364l-6.879-6.88a3 3 0 010-4.242z"
        />
      </svg>
    ),
  },
];

export default function WorkingProcess() {
  return (
    <div className="flex flex-col items-center py-16 bg-white px-4 ">
      <Title
        order={2}
        className="text-3xl font-bold text-center text-[#04364A] mb-12"
      >
        Our Working Process
      </Title>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-y-10 sm:gap-x-6 sm:gap-y-0 mt-2 md:mt-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Step Card */}
            <div
              className={`bg-white shadow-lg rounded-2xl p-6 w-64 flex flex-col items-center transition-all ${
                step.highlighted ? "bg-[#6B728E]" : ""
              }`}
            >
              <ThemeIcon
                variant="light"
                radius="xl"
                size="xl"
                color="green"
                className="mb-4 bg-white"
              >
                {step.icon}
              </ThemeIcon>
              <Text
                className={`font-semibold text-lg ${
                  step.highlighted ? "text-white" : "text-[#04364A]"
                }`}
              >
                {step.label}
              </Text>
            </div>

            {/* Arrow (only if not last item) */}
            {index < steps.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#04364A] rotate-90 sm:rotate-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
