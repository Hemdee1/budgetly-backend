"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = require("@react-email/button");
const tailwind_1 = require("@react-email/tailwind");
const tailwind_config_1 = __importDefault(require("../tailwind.config"));
const Email = () => {
    return ((0, jsx_runtime_1.jsx)(tailwind_1.Tailwind, { config: tailwind_config_1.default, children: (0, jsx_runtime_1.jsx)(button_1.Button, { href: "https://example.com", className: "text-primary bg-white mx-auto", children: "Click me" }) }));
};
exports.default = Email;
