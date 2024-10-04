"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const tailwind_1 = require("@react-email/tailwind");
const tailwind_config_1 = __importDefault(require("../tailwind.config"));
const images = {
    logo: "https://res.cloudinary.com/dgdf3kemb/image/upload/v1727874631/budgetease/email/logo_b5bltd.svg",
    timeIcon: "https://res.cloudinary.com/dgdf3kemb/image/upload/v1727874631/budgetease/email/time_wujrtf.svg",
    whiteFlameIcon: "https://res.cloudinary.com/dgdf3kemb/image/upload/v1727875389/budgetease/email/mdi_fire_spsjf3.svg",
    markIcon: "https://res.cloudinary.com/dgdf3kemb/image/upload/v1727875388/budgetease/email/Group_37_jbclmr.svg",
    closeIcon: "https://res.cloudinary.com/dgdf3kemb/image/upload/v1727875388/budgetease/email/Group_37_1_l1xwv9.svg",
    roundedBorderIcon: "https://res.cloudinary.com/dgdf3kemb/image/upload/v1727876230/budgetease/email/Ellipse_16_tsiigt.svg",
    twitterIcon: "https://res.cloudinary.com/dgdf3kemb/image/upload/v1727875388/budgetease/email/carbon_logo-x_rvgxyb.svg",
    instagramIcon: "https://res.cloudinary.com/dgdf3kemb/image/upload/v1727875388/budgetease/email/Group_36_gyhehj.svg",
};
const days = [
    {
        day: "M",
        status: "active",
    },
    {
        day: "T",
        status: "inactive",
    },
    {
        day: "W",
        status: "active",
    },
    {
        day: "Th",
        status: "present",
    },
    {
        day: "F",
        status: "blank",
    },
    {
        day: "S",
        status: "blank",
    },
    {
        day: "Su",
        status: "blank",
    },
];
const Email = () => {
    return ((0, jsx_runtime_1.jsx)(tailwind_1.Tailwind, { config: tailwind_config_1.default, children: (0, jsx_runtime_1.jsxs)(components_1.Html, { children: [(0, jsx_runtime_1.jsx)(components_1.Head, { children: (0, jsx_runtime_1.jsx)("title", { children: "Printato Order Received" }) }), (0, jsx_runtime_1.jsx)(components_1.Preview, { children: "This is a preview" }), (0, jsx_runtime_1.jsx)(components_1.Body, { className: "bg-white font-sans", children: (0, jsx_runtime_1.jsxs)(components_1.Container, { className: "px-5 py-10", children: [(0, jsx_runtime_1.jsx)(components_1.Img, { src: images.logo, className: "block mx-auto" }), (0, jsx_runtime_1.jsx)(components_1.Img, { src: images.timeIcon, className: "mt-16 mx-auto" }), (0, jsx_runtime_1.jsxs)(components_1.Section, { className: "text-[#353B41] text-center mt-10 max-w-[420px] mx-auto", children: [(0, jsx_runtime_1.jsx)(components_1.Heading, { className: "text-2xl font-bold", children: "Record your expenses now!" }), (0, jsx_runtime_1.jsx)(components_1.Text, { className: "", children: "A budget is telling your money where to go instead of wondering where it went - Dave Ramsey" })] }), (0, jsx_runtime_1.jsxs)(components_1.Section, { className: "mt-10 w-[500px] max-w-full", children: [(0, jsx_runtime_1.jsx)(components_1.Container, { className: "w-full bg-[#101928] text-white p-6 rounded-t-2xl", children: (0, jsx_runtime_1.jsxs)(components_1.Row, { children: [(0, jsx_runtime_1.jsx)(components_1.Column, { className: "w-[60px] pr-4", children: (0, jsx_runtime_1.jsx)(components_1.Img, { src: images.whiteFlameIcon, className: "" }) }), (0, jsx_runtime_1.jsxs)(components_1.Column, { children: [(0, jsx_runtime_1.jsx)(components_1.Heading, { className: "font-semibold text-base my-0", children: "Your monthly streaks" }), (0, jsx_runtime_1.jsxs)(components_1.Heading, { className: "font-semibold text-xl my-0", children: [(0, jsx_runtime_1.jsx)(components_1.Heading, { className: "text-[32px] inline", children: "20 " }), "/ 31"] })] })] }) }), (0, jsx_runtime_1.jsx)(components_1.Container, { className: "w-full h-[120px] rounded-b-2xl border-b border-[#F0F2F5] bg-[#F0F2F5] py-6 px-12", children: (0, jsx_runtime_1.jsx)(components_1.Row, { children: days.map((data, index) => ((0, jsx_runtime_1.jsxs)(components_1.Column, { className: "w-8", children: [(0, jsx_runtime_1.jsx)(components_1.Heading, { className: "font-semibold text-base text-center", children: data.day }), data.status === "active" ? ((0, jsx_runtime_1.jsx)(components_1.Img, { src: images.markIcon, className: "block mx-auto" })) : data.status === "inactive" ? ((0, jsx_runtime_1.jsx)(components_1.Img, { src: images.closeIcon, className: "block mx-auto" })) : data.status === "present" ? ((0, jsx_runtime_1.jsx)(components_1.Img, { src: images.roundedBorderIcon, className: "block mx-auto" })) : ((0, jsx_runtime_1.jsx)(components_1.Container, { className: "w-8 h-8 rounded-full bg-[#E4E7EC]" }))] }, index))) }) })] }), (0, jsx_runtime_1.jsx)(components_1.Link, { href: "hello", className: "w-[250px] h-[60px] mx-auto mt-16 bg-[#0257EF] text-white rounded-lg font-bold text-base grid place-content-center", children: "Record My Money" }), (0, jsx_runtime_1.jsxs)(components_1.Section, { className: "py-4 mt-16", children: [(0, jsx_runtime_1.jsx)(components_1.Hr, { className: "bg-[#F0F2F5]" }), (0, jsx_runtime_1.jsxs)(components_1.Container, { className: "w-full grid place-content-end", children: [(0, jsx_runtime_1.jsx)(components_1.Link, { href: "hello", children: (0, jsx_runtime_1.jsx)(components_1.Img, { src: images.twitterIcon, className: "inline" }) }), (0, jsx_runtime_1.jsx)(components_1.Link, { href: "hello", className: "ml-7", children: (0, jsx_runtime_1.jsx)(components_1.Img, { src: images.instagramIcon, className: "inline" }) })] }), (0, jsx_runtime_1.jsx)(components_1.Text, { className: "text-sm text-[#344054] text-center", children: "You are receiving these emails because you toggle your reminders for budgetly." }), (0, jsx_runtime_1.jsx)(components_1.Container, { className: "grid place-content-center mt-2", children: (0, jsx_runtime_1.jsx)(components_1.Link, { href: "hello", className: "text-[#344054] text-sm font-semibold underline", children: "Unsubscribe" }) })] })] }) })] }) }));
};
exports.default = Email;
