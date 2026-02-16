"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/ProfileCard.css");
const ProfileCard = ({ user }) => ((0, jsx_runtime_1.jsxs)("div", { className: "profile-card", children: [(0, jsx_runtime_1.jsx)("img", { className: "profile-avatar", src: user.avatarUrl || '/static/default-avatar.png', alt: user.name }), (0, jsx_runtime_1.jsx)("h2", { className: "profile-name", children: user.name }), (0, jsx_runtime_1.jsx)("p", { className: "profile-email", children: user.email }), user.bio && (0, jsx_runtime_1.jsx)("p", { className: "profile-bio", children: user.bio })] }));
exports.default = ProfileCard;
