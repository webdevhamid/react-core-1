export default function Professionals({
  name = "Name Unavailable",
  age = "Age Unavailable",
  profession = "Profession Unavailable",
}) {
  return (
    <li>
      Name: {name}, age: {age}, profession: {profession}
    </li>
  );
}
