import "./page.css";
import Image from "next/image";

export default function founders() {
  return (
    <div className="wrapper">
      <h1>Team Rocket's Founders Page</h1>
      <Image
        src="/images/founders.png"
        alt="Team Rocket Founders"
        width={187}
        height={333}
      />
      <h2>(Ling) Eva</h2>
      <h2>Hamsa</h2>
      <h2>Pieter</h2>
    </div>
  );
}
