import { Container } from "./Container";

import { OverlayCard } from "./OverlayCard";
import Link from "next/link";

export const Navbar = ({ background, children }) => {
  return (
    <Container background="bg-white">
      <div className="w-full h-fit py-4 flex flex-row justify-between items-center">
        <div className="w-fit h-fit flex flex-row justify-center items-center gap-x-6">
          <img src="/pictures/Vector.png" className="w-[28px] h-[28px]" />
          <h6>Dashboard</h6>
          <h5>Records</h5>
        </div>
        <div className="w-fit h-fit flex flex-row justify-center items-center gap-x-6">
          <OverlayCard open="records" />

          <Link href="/Log-in">
            <img
              src="/pictures/Placeholder.png"
              className="w-[28px] h-[28px]"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};
