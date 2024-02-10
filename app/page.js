import Image from "next/image";
import next from "../public/nextjs.png";
import next2 from "../public/Rlogical-Blog-Images-thumbnail.webp";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        pariatur iure a nulla temporibus voluptatibus. Voluptatum atque deleniti
        maiores placeat dolore aliquid, voluptatibus eius aperiam, tempora sit
        assumenda, iure cum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cum
        dolor eveniet ad dignissimos non ipsam pariatur atque nobis temporibus
        at sit distinctio quis velit quia iure, ducimus rerum hic.
      </p>
      <div>
        <Image
          src={next}
          width={300}
          alt="dsf"
          // height={200}
          className="hidden md:block"
        />
        <Image
          src={next2}
          width={300}
          alt="ll"
          // height={200}
          className="md:hidden border"
        />
      </div>
      <Link
        href={"/dashboard"}
        className="bg-slate-800 text-white w-24 text-center rounded-lg p-3 ml-2 mt-2 inline-block"
      >
        Dashboard
      </Link>
   
    </>
  );
}
