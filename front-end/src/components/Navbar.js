import { Container } from "./Container";
import { Button } from "./ui/button";

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
          <Button className="flex gap-x-2 bg-[#0166FF] h-8 rounded-3xl">
            <img src="/pictures/Leading icon.png" className="" />
            <h6 className="text-white">Records</h6>
          </Button>
          <img src="/pictures/Placeholder.png" className="w-[28px] h-[28px]" />
        </div>
      </div>
    </Container>
  );
};
