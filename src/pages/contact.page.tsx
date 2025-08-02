// styled components
import {
  Section,
  Heading,
  SubHeading,
  Label,
  Input,
  Textarea,
  Button,
} from "@/styles/pages/contact.style";

export default function Contact() {
  return (
    <Section>
      <div className="py-12 lg:py-16 px-4 mx-auto max-w-screen-md">
        <Heading>Get in Touch with TechStore</Heading>
        <SubHeading className="mb-8 lg:mb-16">
          Whether you have a question about our products, need help with an
          order, or want to share feedback — our team is here to help. Reach out
          and we’ll get back to you as soon as possible.
        </SubHeading>

        <form className="space-y-8">
          <div>
            <Label htmlFor="email">Your Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              placeholder="e.g., Inquiry about a product"
              required
            />
          </div>

          <div>
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              rows={6}
              placeholder="Tell us more about how we can assist you..."
              required
            />
          </div>

          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </Section>
  );
}
