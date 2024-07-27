import React, { forwardRef } from "react";
import Coffee4 from "../../assets/coffee4.png";
import Coffee5 from "../../assets/coffee5.png";
import Coffee6 from "../../assets/coffee6.png";

const ServicesData = [
  {
    id: 1,
    img: Coffee4,
    name: "Espresso",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Coffee5,
    name: "Americano",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Coffee6,
    name: "Cappuccino",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];

const Services = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="py-10">
      <div className="container">
        {/* Heading section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive2 text-gray-800">
            Best Coffee For You
          </h1>
        </div>

        {/* Services Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {ServicesData.map((service) => (
            <div
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              key={service.id}
              className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
            >
              <div className="h-[122px]">
                <img
                  src={service.img}
                  alt={service.name}
                  className="max-w-[200px] block mx-auto transform -translate-y-14
                    group-hover:scale-105 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{service.name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Services;
