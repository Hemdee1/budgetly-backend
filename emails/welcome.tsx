import { Button } from "@react-email/button";
import { Tailwind } from "@react-email/tailwind";
import config from "../tailwind.config";

const Email = () => {
  return (
    <Tailwind config={config}>
      <Button
        href="https://example.com"
        className="text-primary bg-white mx-auto"
      >
        Click me
      </Button>
    </Tailwind>
  );
};

export default Email;
