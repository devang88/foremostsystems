import {
  Button,
  Container,
  TextInput,
  Textarea,
  Title,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import contactus from "../../assets/contact-us.png";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactUsSection = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: (value) => (value.length < 2 ? "Name is too short" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) => (value.length < 10 ? "Please write a message" : null),
    },
  });

  const handleSubmit = (values: ContactFormValues) => {
    console.log("Contact form submitted:", values);
    // You can replace this with API logic (email or database)
  };

  return (
    <section className="bg-white py-16">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side Illustration */}
          <div className="text-center md:text-left">
            <img
              src={contactus}
              alt="Contact Illustration"
              className="w-72 md:w-96 mx-auto md:mx-0"
            />
            <Title order={2} className="text-green-600 mt-6">
              Let’s talk about your needs
            </Title>
            <p className="text-gray-600 mt-2 text-sm">
              Fill the form and our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Right Side Form */}
          <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-6">
            <TextInput
              label="Your Name"
              placeholder="John Doe"
              radius="md"
              size="md"
              withAsterisk
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email Address"
              placeholder="you@example.com"
              radius="md"
              size="md"
              withAsterisk
              {...form.getInputProps("email")}
            />
            <Textarea
              label="Your Message"
              placeholder="Tell us what you’re looking for..."
              minRows={4}
              radius="md"
              size="md"
              withAsterisk
              {...form.getInputProps("message")}
            />
            <Group mt="md" className="items-right">
              <Button type="submit" color="green" size="md" radius="md">
                Send Message
              </Button>
            </Group>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsSection;
