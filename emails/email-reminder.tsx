import {
  Body,
  Button,
  Column,
  Container,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Head,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import config from "../tailwind.config";

const images = {
  logo: "https://res.cloudinary.com/dgdf3kemb/image/upload/v1728012931/budgetease/email/Budgetly_w1vtvx.png",
  timeIcon:
    "https://res.cloudinary.com/dgdf3kemb/image/upload/v1728012931/budgetease/email/Frame_1000007444_z6dhbx.png",
  whiteFlameIcon:
    "https://res.cloudinary.com/dgdf3kemb/image/upload/v1728014354/budgetease/email/mdi_fire_gsup4d.png",
  markIcon:
    "https://res.cloudinary.com/dgdf3kemb/image/upload/v1728014354/budgetease/email/Group_37_wghgmc.png",
  closeIcon:
    "https://res.cloudinary.com/dgdf3kemb/image/upload/v1728014354/budgetease/email/Group_37_1_cdwvrj.png",
  roundedBorderIcon:
    "https://res.cloudinary.com/dgdf3kemb/image/upload/v1728014354/budgetease/email/Ellipse_16_1_uh1gnv.png",
  blankIcon:
    "https://res.cloudinary.com/dgdf3kemb/image/upload/v1728014354/budgetease/email/Ellipse_16_2_ltm4we.png",
  twitterIcon:
    "https://res.cloudinary.com/dgdf3kemb/image/upload/v1728014354/budgetease/email/carbon_logo-x_opcuwp.png",
  instagramIcon:
    "https://res.cloudinary.com/dgdf3kemb/image/upload/v1728014354/budgetease/email/Group_36_xhddrd.png",
};

type daysType = {
  day: string;
  status: "active" | "inactive" | "present" | "blank";
}[];

const days = [
  { day: "M", status: "blank" },
  { day: "T", status: "blank" },
  { day: "W", status: "blank" },
  { day: "Th", status: "blank" },
  { day: "F", status: "blank" },
  { day: "S", status: "blank" },
  { day: "Su", status: "blank" },
] as daysType;

function setDayStatus(days: daysType) {
  // Map day names to indices, with "Su" as the last day of the week
  const dayIndexMap = { M: 0, T: 1, W: 2, Th: 3, F: 4, S: 5, Su: 6 };

  // Get today's index in the modified week format (Sunday is the last day)
  const today = new Date();
  const todayIndex = (today.getDay() + 6) % 7; // Adjusting Sunday (0) to be 6

  return days.map((day) => {
    // @ts-ignore
    const dayIndex = dayIndexMap[day.day];
    let status = "blank"; // Default status

    if (dayIndex < todayIndex) {
      status = "inactive"; // Day has passed
    } else if (dayIndex === todayIndex) {
      status = "active"; // Current day
    }

    return { ...day, status };
  });
}

// Example usage
const updatedDays = setDayStatus(days);

function getDaysInCurrentMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Adding 1 because months are zero-based
  return new Date(year, month, 0).getDate();
}

const EmailReminder = () => {
  return (
    <Tailwind config={config}>
      <Html>
        <Preview>Income Record</Preview>

        <Body className="font-sans bg-white">
          <Container className="px-5 py-10">
            <Img src={images.logo} className="block mx-auto" />

            <Img src={images.timeIcon} className="mx-auto mt-16" />

            <Section className="text-[#353B41] text-center mt-10 max-w-[420px] mx-auto">
              <Heading className="text-2xl font-bold">
                Record your expenses now!
              </Heading>
              <Text className="">
                A budget is telling your money where to go instead of wondering
                where it went - Dave Ramsey
              </Text>
            </Section>

            <Section className="mt-10 w-[500px] max-w-full">
              <Container className="w-full bg-[#101928] text-white p-6 rounded-t-2xl">
                <Row>
                  <Column className="w-[60px] pr-4">
                    <Img src={images.whiteFlameIcon} className="" />
                  </Column>
                  <Column>
                    <Heading className="my-0 text-base font-semibold">
                      Your monthly streaks
                    </Heading>
                    <Heading className="my-0 text-xl font-semibold">
                      <Heading className="text-[32px] inline">1 </Heading>/{" "}
                      {getDaysInCurrentMonth()}
                    </Heading>
                  </Column>
                </Row>
              </Container>
              <Container className="w-full h-[120px] rounded-b-2xl border-b border-[#F0F2F5] bg-[#F0F2F5] py-6 px-12">
                <Row>
                  {updatedDays.map((data, index) => (
                    <Column key={index} className="w-8">
                      <Heading className="text-base font-semibold text-center">
                        {data.day}
                      </Heading>
                      {data.status === "active" ? (
                        <Img src={images.markIcon} className="block mx-auto" />
                      ) : data.status === "inactive" ? (
                        <Img src={images.closeIcon} className="block mx-auto" />
                      ) : data.status === "present" ? (
                        <Img
                          src={images.roundedBorderIcon}
                          className="block mx-auto"
                        />
                      ) : (
                        <Img src={images.blankIcon} className="block mx-auto" />
                      )}
                    </Column>
                  ))}
                </Row>
              </Container>
            </Section>

            {/* <Link
              href="hello"
              className="w-[250px] h-[60px] mx-auto mt-16 bg-[#0257EF] text-white rounded-lg font-bold text-base flex justify-center items-center"
            >
              Record My Money
            </Link> */}

            <Link
              href="https://www.budgetly.me/dashboard"
              className="w-[250px] h-[60px] mx-auto mt-16 bg-[#0257EF] text-white rounded-lg font-bold text-base text-center leading-[60px] block"
            >
              Record My Money
            </Link>

            <Section className="py-4 mt-16">
              <Hr className="bg-[#F0F2F5] border-0 h-[1px]" />

              {/* Social Icons Section  */}
              <Container className="mt-4 text-end">
                <Link
                  href="https://x.com/trybudgetly?t=RelQT0f8CMLfz_hvbK3kyA&s=08"
                  className="inline-block"
                >
                  <Img
                    src={images.twitterIcon}
                    alt="Twitter"
                    className="inline-block align-middle"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/trybudgetly?igsh=ZGJiYjJwcHNxYW5i"
                  className="inline-block ml-7"
                >
                  <Img
                    src={images.instagramIcon}
                    alt="Instagram"
                    className="inline-block align-middle"
                  />
                </Link>
              </Container>

              {/* Text Section  */}
              <Text className="text-sm text-[#344054] text-center mt-4">
                You are receiving these emails because you toggled your
                reminders for Budgetly.
              </Text>

              {/* Unsubscribe Link Section  */}
              <Container className="mt-2 text-center">
                <Link
                  // href=""
                  className="text-[#344054] text-sm font-semibold underline"
                >
                  Unsubscribe
                </Link>
              </Container>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default EmailReminder;
