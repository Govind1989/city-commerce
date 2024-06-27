// components/CampaignsModal.js

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CampaignCard from "@/components/VendorCommon/CampaignCard";
import { CampaignCardsContent, responsive } from "@/data.js";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineClose } from "react-icons/md";
const CampaignModal = ({ campaigns }) => {
  const [item, setItem] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    if (query["qr-input"]) {
      setShowModal(true);
    }
  }, [router]);

  const closeModal = () => {
    setShowModal(false);
    // Remove the query parameter to prevent the modal from showing again
    const { pathname, query } = router;
    delete query["qr-input"]; // Remove the "qr-input" query parameter
    router.replace({ pathname, query }, undefined, { shallow: true });
  };

  const handleClick = (e, index) => {
    e.preventDefault();
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  if (!showModal) return null;

  return (
    <div className="bg-white py-8 px-2">
      <div className="container mx-auto flex items-center flex-wrap pt-4 ">
        <div id="store" className="w-full top-0  sm:py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <div
              className="uppercase  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >
              Campaigns
            </div>
            <div className="flex items-center" id="store-nav-content">
              <Link
                className="pl-3 inline-block no-underline hover:text-black"
                href="#"
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
              </Link>
              <Link
                className="pl-3 inline-block no-underline hover:text-black"
                href="#"
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                </svg>
              </Link>
              <button
                className="pl-3 inline-block no-underline hover:text-black"
                onClick={closeModal}
              >
                <MdOutlineClose className="w-6 h-auto" />
              </button>
            </div>
          </div>
        </div>

        <div className="container flex items-center justify-center flex-wrap pb-0">
          <nav className="w-full">
            <div className="">
              <ul className="px-2 sm:px-8 w-full flex gap-8 overflow-x-scroll custom-scrollbar items-center whitespace-nowrap">
                {campaigns.map((item, index) => {
                  return (
                    <li
                      onClick={(e) => {
                        handleClick(e, index);
                      }}
                      className={`cursor-pointer shadow-xs capitalize px-3 py-1 text-gray-400 rounded-md ${
                        active === index ? " shadow-md bg-gray-200" : ""
                      }`}
                      key={index}
                    >
                      <span
                        className={`${active === index ? "text-gray-800" : ""}`}
                      >
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>

        <div className="container mx-auto mt-0  ">
          <div className="px-4">
            <Carousel
              responsive={responsive}
              containerclassName="-mx-[4px]"
              itemclassName="px-[4px]"
            >
              {CampaignCardsContent.map((card, index) => (
                <CampaignCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  earning={card.earning}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignModal;
