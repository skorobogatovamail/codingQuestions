/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  if (value === null || value === undefined || typeof value !== "object") {
    if (Array.isArray(value)) {
      return [...value];
    } else {
      return value;
    }
  }

  const res = {};

  Object.entries(value).forEach(([key, val]) => {
    if (typeof val !== "object") {
      res[key] = val;
    } else {
      if (Array.isArray(val)) {
        res[key] = val.map((el) =>
          typeof el === "object" ? deepClone(el) : el
        );
      } else {
        res[key] = deepClone(val);
      }
    }
  });

  return res;
}

const obj1 = { user: { role: "admin" } };
const clonedObj1 = deepClone(obj1);

console.log("clonedObj1", clonedObj1);

// clonedObj1.user.role = "guest"; // Change the cloned user's role to 'guest'.
// clonedObj1.user.role; // 'guest'
// ; // Should still be 'admin'.
// console.log("obj1.user.role", obj1.user.role);

// const obj2 = { foo: [{ bar: "baz" }] };
// const clonedObj2 = deepClone(obj2);

// obj2.foo[0].bar = "bax"; // Modify the original object.
// obj2.foo[0].bar; // 'bax'
// clonedObj2.foo[0].bar; // Should still be 'baz'.
