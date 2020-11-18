export function getUser(name, opt) {
    if ((opt === null || opt === void 0 ? void 0 : opt.id) === "1") {
        return { name: "Joe", age: 0 };
    }
    return { name: name, age: 0 };
}
