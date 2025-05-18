
// function classNames(...args) {
//   const res = [];
//   args.forEach((arg) => {
//     if (!arg) {
//       return;
//     }
//     if (typeof arg === "string" || typeof arg === "number") {
//       res.push(arg);
//     } else if (Array.isArray(arg) && arg.length) {
//       const inner = classNames(...arg);
//       if (inner) {
//         res.push(inner);
//       }
//     } else if (typeof arg === "object") {
//       const keys = Object.keys(arg);
//       keys.forEach((key) => {
//         if (arg[key]) {
//           res.push(key);
//         }
//       });
//     }
//   });

//   return res.join(" ");
// }

// // console.log(classNames("a", "b", "c"));
// console.log(classNames([]));



// function flatten(value) {
//   const res = [];

//   debugger;
//   value.forEach((el) => {
//     if (Array.isArray(el)) {
//       const flattened = flatten(el);
//       res.push(...flattened);
//     } else {
//       res.push(el)
//     }
//   });

//   return res
// }
// console.log(flatten([1, [2]]))



