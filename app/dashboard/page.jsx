import React from "react";
import Image from "next/image";
import next from '../../public/nextjs.png'
import next2 from '../../public/Rlogical-Blog-Images-thumbnail.webp'
const Dashboard = () => {
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
      <Image
        src={next}
        width={300}
        // height={200}
        alt="sd"
        className="hidden md:block"
      />
      <Image
        src={next2}
        width={300}
        // height={200}
        alt="sadf"
        className="md:hidden"
      />
    </>
  );
};

export default Dashboard;
