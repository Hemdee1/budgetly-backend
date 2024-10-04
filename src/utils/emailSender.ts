import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type UserData = {
  email: string;
  subject: string;
  html: string;
};

const from =
  process.env.NODE_ENV === "production"
    ? "Budgetly <email@hello.budgetly.me>"
    : "Acme <onboarding@resend.dev>";

// const from = "Budgetly <email@hello.budgetly.me>";

const sendMail = async ({ email, html, subject }: UserData) => {
  const { data, error } = await resend.emails.send({
    from,
    to: [email],
    subject,
    html,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};

export default sendMail;
