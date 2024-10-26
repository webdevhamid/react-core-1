// export default function Todo({ task, isDone}) {
//   // task = "JS";
//   //   props.task = "JS";
//   return (
//     <>
//       <ul>
//         <li>{task}</li>
//       </ul>
//     </>
//   );
// }
// export default function Todo({ task, isDone }) {
//   // Conditional Rendering option 1
//   if (isDone) return <li>Finished Task: {task}</li>;
//   else return <li>Pending Task: {task}</li>;
// }
// export default function Todo({ task, isDone }) {
//   // Conditional Rendering option 2
//   if (isDone) return <li>Finished Task: {task}</li>;
//   return <li>Pending Task: {task}</li>;
// }
// export default function Todo({ task, isDone }) {
//   // Conditional Rendering option 3: ternary operator
//   return (
//     <li>
//       {isDone ? "Finished" : "Pending"}: {task}
//     </li>
//   );
// }
// export default function Todo({ task, isDone }) {
//   // Conditional Rendering option 4: &&
//   return (
//     <li>
//       {isDone && "Finished"}: {task}
//     </li>
//   );
// }
// export default function Todo({ task, isDone }) {
//   // Conditional Rendering option 5: ||
//   return (
//     <li>
//       {isDone || "Pending"}: {task}
//     </li>
//   );
// }

export default function Todo({ task, isDone }) {
  // Conditional Rendering option 6
  let listItem = task;
  if (isDone) return <li>{"Finished: " + listItem}</li>;
  return <li>{"Pending: " + listItem}</li>;
}
