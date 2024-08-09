import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container background="bg-[#F3F4F6]" height="h-screen">
        <div className="bg-white w-full h-full"></div>
      </Container>
    </>
  );
}
