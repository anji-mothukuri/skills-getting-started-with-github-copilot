"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const validation_1 = require("../utils/validation");
const constants_1 = require("../constants");
const LoginForm = () => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [errors, setErrors] = (0, react_1.useState)({});
    const validate = () => {
        const newErrors = {};
        if (!(0, validation_1.isRequired)(email)) {
            newErrors.email = constants_1.ERROR_MESSAGES.required;
        }
        else if (!(0, validation_1.isEmail)(email)) {
            newErrors.email = constants_1.ERROR_MESSAGES.invalidEmail;
        }
        if (!(0, validation_1.isRequired)(password)) {
            newErrors.password = constants_1.ERROR_MESSAGES.required;
        }
        else if (!(0, validation_1.isMinLength)(password, 6)) {
            newErrors.password = constants_1.ERROR_MESSAGES.shortPassword;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Submit logic here
            alert('Login successful!');
        }
    };
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Email:" }), (0, jsx_runtime_1.jsx)("input", { type: "email", value: email, onChange: e => setEmail(e.target.value) }), errors.email && (0, jsx_runtime_1.jsx)("span", { className: "error", children: errors.email })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Password:" }), (0, jsx_runtime_1.jsx)("input", { type: "password", value: password, onChange: e => setPassword(e.target.value) }), errors.password && (0, jsx_runtime_1.jsx)("span", { className: "error", children: errors.password })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Login" })] }));
};
exports.default = LoginForm;
