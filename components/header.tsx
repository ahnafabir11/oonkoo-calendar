import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <section className="container">
      <header className="flex items-center justify-between pt-5">
        <Image width={105} height={50} alt="OonkoO Logo" src="/logo.png" />
        <Avatar className="size-[54px]">
          <AvatarImage src="/user-avatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>
    </section>
  );
}
