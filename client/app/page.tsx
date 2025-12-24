import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <div className=" flex flex-row items-center justify-center gap-5 h-screen">
      <Button variant="outline">Click me</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>

    </div>
  );
}
