import React, { useState } from "react";
import photo1 from "/images/branchphoto1.png";
import photo2 from "/images/branchphoto2.png";
import photo3 from "/images/branchphoto3.png";
import photo4 from "/images/branchphoto4.png";
import photo5 from "/images/branchphoto5.jpg";
import photo6 from "/images/branchphoto6.jpg";
import photo7 from "/images/branchphoto7.jpg";
import photo8 from "/images/branchphoto8.jpg";

const BranchPhotos = () => {
    const [photos] = useState([photo2, photo8, photo4, photo5, photo7, photo6]);

    return (
        <section className="branch-photo mt-[65px]">
            <h1 className="text-center text-[40px] font-bold">
                Branch <span className="text-blue-700">Photos</span>
            </h1>
            <div className="container mx-auto  grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                {photos.map((photo, index) => (
                    <div key={index} className="object-fit">
                        <img src={photo} alt={`branch-photo-${index + 1}`} className="h-[250px] max-h-[350px] w-[100%]" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BranchPhotos;
