"use client";
import { robo } from "@/app/assets";
import { portfolio, AppText } from "@/constants/Constants";
import Image from "next/image";
import { useState, useEffect } from "react";

type Pertfolio = {
  id: number;
  title: string;
  type: string;
  desc: string;
  link: string;
  imageUrl: string;
};

const Portfolio = () => {
  const [portfolioList, setPortfolioList] = useState<Pertfolio[]>([]);
  const [portfolioListOrg, setPortfolioListOrg] = useState<Pertfolio[]>([]);

  useEffect(() => {
    setPortfolioList(portfolio);
    setPortfolioListOrg(portfolio);
  }, []);

  const filterPortfolio = (type: string) => {
    if (type === "All") {
      setPortfolioList(portfolioListOrg);
    } else {
      const result = portfolioListOrg.filter((item) => item.type === type);
      setPortfolioList(result);
      console.log(result);
    }
  };

  return (
    <div id="portfolio" className="mt-5 flex flex-col items-center">
      <div className="flex items-center justify-center px-6 md:px-0">
        <div>
          <h1 className="text-[40px] font-bold">
            {AppText.Creative}
            <span className="text-purple-600">{AppText.Portfolio}</span>
          </h1>
        </div>

        <Image
          src={robo}
          className="w-[70px] ml-5 animate-bounce"
          alt=""
          width={70}
          height={70}
        />
      </div>

      <div className="flex justify-center gap-4 px-4 md:px-72 mb-4">
        {["All", "ui/ux", "website", "mobile"].map((type) => (
          <button
            key={type}
            onClick={() => filterPortfolio(type)}
            className="border-purple-600 border-2 text-purple-600 focus:text-white active:bg-purple-500 p-1 px-4 rounded-md focus:ring-violet-300 focus:bg-purple-600 focus:ring"
          >
            {type === "All" ? "All" : type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-12 lg:px-24">
        {portfolioList.map((item, index) => (
          <a href={item.link}>
            <div
              key={index}
              className="p-4 flex flex-col rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={item.imageUrl}
                className="h-[180px] object-cover rounded-lg"
                alt={item.title}
              />
              <h1 className="text-[14px] mt-2 text-center font-bold">
                {item.title}
              </h1>
              <p className="text-[12px] text-center text-gray-500 px-6 pb-3">
                {item.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
