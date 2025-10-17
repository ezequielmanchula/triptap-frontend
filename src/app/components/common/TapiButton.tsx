// components/TapiButton.tsx
import Image from "next/image";
import Link from "next/link";


export default function TapiButton() {
  return (
    <Link
      href={""}
      className="fixed bottom-4 right-4 p-2 z-50"
    >
      <Image
        src="/images/TapiBtn.png"
        alt="WhatsApp"
        width={100} 
        height={100} 
        className="hover:scale-110 transition-transform duration-300"
      />
    </Link>
  );
}
