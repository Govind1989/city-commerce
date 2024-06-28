import HomeCarousel from "@/components/Common/HomeCarousel";
import NavBar from "@/components/Common/NavBar";
import Categories from "@/components/Common/Categories";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="mb-2">
        <HomeCarousel />
      </div>
      {/* Satisfaction banner */}
      <div className="bg-white py-2 sm:px-8 px-4 overflow-hidden flex sm:flex-row flex-col  gap-4">
        <div className="w-full sm:w-1/4 min-w-[100%] sm:min-w-[20%] px-4 py-2 md:px-6 xl:px-7 3xl:px-9 flex items-center justify-between bg-[#F4F2EB]">
          <div className="pr-4 md:pr-5 lg:pr-4 3xl:pr-10">
            <h2 className="text-brand-dark text-base xl:text-md whitespace-nowrap xl:leading-7 font-semibold font-manrope mb-1.5 -mt-0.5">
              Satisfaction Guarantee
            </h2>
            <p className="text-brand-muted text-xs  lg:text-15px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex shrink-0 items-center justify-center bg-brand-light rounded-full w-[80px] xl:w-24 3xl:w-[110px] h-[80px] xl:h-24 3xl:h-[110px]">
            <svg
              width="55px"
              height="55px"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform scale-75 xl:scale-90 3xl:scale-100"
            >
              <path
                d="M20.0298 12.321L20.0298 12.321C20.1661 13.0493 20.8898 13.6264 21.747 13.4669C22.5787 13.2924 23.0495 12.496 22.8948 11.7498C22.7118 10.8775 21.8526 10.3929 21.0369 10.6361L20.0298 12.321ZM20.0298 12.321L20.0291 12.3179M20.0298 12.321L20.0291 12.3179M20.0291 12.3179C19.8797 11.605 20.3102 10.853 21.0369 10.6361L20.0291 12.3179Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M54.4541 34.9033L54.4538 34.9034L54.4575 34.9123C55.5255 37.4705 54.3405 40.4284 51.7944 41.5306C51.7942 41.5306 51.7941 41.5307 51.7939 41.5307L42.7757 45.3903L42.6847 45.4292V45.5282V47.9102C42.6847 50.7323 40.4009 53.0272 37.5958 53.0272H5.23889C2.43373 53.0272 0.15 50.7323 0.15 47.9102V23.2659C0.15 20.9897 1.10775 18.8035 2.77707 17.2681L2.77709 17.2681L17.9013 3.35133C17.9013 3.35132 17.9013 3.35131 17.9013 3.3513C19.3846 1.98708 21.4994 1.69308 23.0137 2.21753L23.0628 2.07579L23.0137 2.21754C23.0862 2.24262 23.4283 2.32881 23.9545 2.4574C24.4869 2.58749 25.2196 2.76373 26.0853 2.97052C27.8166 3.38411 30.0804 3.92011 32.3377 4.45391C32.9028 4.58752 33.4674 4.721 34.0233 4.85239C35.688 5.24592 37.2734 5.62069 38.5526 5.92424C39.4057 6.12669 40.1225 6.29742 40.6356 6.42088C40.8922 6.48262 41.0977 6.53248 41.2437 6.56856C41.3168 6.58661 41.3747 6.60112 41.4165 6.6119C41.4374 6.6173 41.4539 6.62166 41.4661 6.62499C41.4775 6.6281 41.4826 6.62965 41.4837 6.63L41.484 6.63006C43.6207 7.36734 45.3601 8.97958 46.2561 11.0532C46.2579 11.0573 46.2575 11.0553 46.257 11.0528L46.2579 11.0524C46.2711 11.0856 46.3759 11.3883 47.0791 13.4345C47.557 14.8251 48.3112 17.0206 49.5009 20.4842C50.6759 23.9049 52.2758 28.5625 54.4541 34.9033ZM46.2579 11.0523L46.257 11.0527C46.2569 11.0524 46.2569 11.0522 46.2568 11.0519C46.2562 11.0491 46.2556 11.0465 46.2579 11.0523ZM19.9316 5.50128L19.9315 5.50131C14.9647 10.0817 14.2994 10.6834 13.4449 11.456L13.3685 11.5251C12.4722 12.3357 11.2347 13.4576 4.75586 19.419C3.6859 20.4032 3.07274 21.8052 3.07274 23.2659V47.9102C3.07274 49.1183 4.04236 50.1045 5.23889 50.1045H37.5958C38.7922 50.1045 39.7618 49.1183 39.7619 47.9102V23.2659C39.7619 21.8052 39.1488 20.4033 38.079 19.4193C34.2335 15.8808 31.35 13.221 29.1808 11.2199C26.7128 8.94329 25.1692 7.51942 24.1849 6.62453C23.2625 5.78592 22.8249 5.40583 22.5762 5.22418C22.4497 5.13177 22.3638 5.08438 22.282 5.05512C22.2422 5.04091 22.2063 5.03205 22.1743 5.02438L22.1641 5.02195C22.1355 5.01511 22.1086 5.0087 22.0765 4.9991C21.2925 4.7628 20.5017 4.97582 19.9316 5.50128ZM50.6386 38.846L50.6391 38.8457C51.7224 38.377 52.2217 37.1042 51.7492 36.012L51.7491 36.0117C51.747 36.007 51.7475 36.0097 51.748 36.0122C51.748 36.0123 51.748 36.0124 51.7481 36.0125C51.7485 36.0146 51.7488 36.0163 51.7473 36.0128C51.7473 36.0127 51.7472 36.0126 51.7472 36.0126C51.7365 35.987 51.6407 35.7104 50.921 33.6163C50.4862 32.3508 49.8237 30.4221 48.8144 27.4838C47.6161 23.9954 45.9291 19.0841 43.5541 12.1704L43.5546 12.1702L43.5492 12.1581C42.9817 10.8858 41.9136 9.89299 40.6029 9.41861L40.5949 9.41569L40.5865 9.4137L28.9306 6.64794L28.3717 6.51533L28.7944 6.90427L40.0577 17.2683L40.0577 17.2683C41.7268 18.8035 42.6846 20.9897 42.6846 23.2659V42.0227V42.25L42.8936 42.1606L50.6386 38.846Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M25.9345 21.8703L25.9345 21.8703C26.6787 22.1826 27.0289 23.039 26.7166 23.7834L18.8721 42.4796C18.6374 43.0389 18.0951 43.3759 17.5238 43.3759C16.4879 43.3759 15.7713 42.3156 16.177 41.3487L24.0214 22.6525C24.3338 21.9083 25.1905 21.558 25.9345 21.8703Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M15.3678 26.3757V26.3757C15.3678 25.6891 15.1456 25.0523 14.7865 24.5843C14.4278 24.1169 13.9238 23.8083 13.363 23.8083C12.8022 23.8083 12.2982 24.1169 11.9395 24.5843C11.5805 25.0523 11.3582 25.6891 11.3582 26.3757C11.3582 27.0623 11.5805 27.6991 11.9396 28.1671C12.2983 28.6346 12.8023 28.9431 13.363 28.9431C13.9237 28.9431 14.4277 28.6346 14.7864 28.1671C15.1455 27.6991 15.3677 27.0623 15.3678 26.3757ZM13.3629 20.8856C16.0654 20.8856 18.2904 23.3334 18.2904 26.3757C18.2904 29.418 16.0655 31.8658 13.363 31.8658C10.6605 31.8658 8.43546 29.418 8.43546 26.3757C8.43546 23.3334 10.6604 20.8856 13.3629 20.8856Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M24.695 39.1578C24.695 36.1155 26.92 33.6677 29.6225 33.6677C32.3249 33.6677 34.5501 36.1155 34.5501 39.1578C34.5501 42.2001 32.3251 44.6479 29.6225 44.6479C26.92 44.6479 24.695 42.2001 24.695 39.1578ZM27.6177 39.1578C27.6177 39.8444 27.84 40.4812 28.1991 40.9492C28.5578 41.4167 29.0618 41.7252 29.6225 41.7252C30.1832 41.7252 30.6873 41.4167 31.0459 40.9492C31.405 40.4812 31.6273 39.8444 31.6273 39.1578C31.6273 38.4713 31.4051 37.8344 31.046 37.3664C30.6873 36.899 30.1833 36.5904 29.6225 36.5904C29.0618 36.5904 28.5577 36.899 28.1991 37.3664C27.84 37.8344 27.6177 38.4713 27.6177 39.1578Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
            </svg>
          </div>
        </div>
        <div className="w-full sm:w-1/4 min-w-[100%] sm:min-w-[20%] px-4 py-2 md:px-6 xl:px-7 3xl:px-9 flex items-center justify-between bg-[#F4F2EB]">
          <div className="pr-4 md:pr-5 lg:pr-4 3xl:pr-10">
            <h2 className="text-brand-dark text-base xl:text-md whitespace-nowrap xl:leading-7 font-semibold font-manrope mb-1.5 -mt-0.5">
              Huge Sales & Discounts
            </h2>
            <p className="text-brand-muted text-xs  lg:text-15px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex shrink-0 items-center justify-center bg-brand-light rounded-full w-[80px] xl:w-24 3xl:w-[110px] h-[80px] xl:h-24 3xl:h-[110px]">
            <svg
              width="55px"
              height="55px"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform scale-75 xl:scale-90 3xl:scale-100"
            >
              <path
                d="M20.0298 12.321L20.0298 12.321C20.1661 13.0493 20.8898 13.6264 21.747 13.4669C22.5787 13.2924 23.0495 12.496 22.8948 11.7498C22.7118 10.8775 21.8526 10.3929 21.0369 10.6361L20.0298 12.321ZM20.0298 12.321L20.0291 12.3179M20.0298 12.321L20.0291 12.3179M20.0291 12.3179C19.8797 11.605 20.3102 10.853 21.0369 10.6361L20.0291 12.3179Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M54.4541 34.9033L54.4538 34.9034L54.4575 34.9123C55.5255 37.4705 54.3405 40.4284 51.7944 41.5306C51.7942 41.5306 51.7941 41.5307 51.7939 41.5307L42.7757 45.3903L42.6847 45.4292V45.5282V47.9102C42.6847 50.7323 40.4009 53.0272 37.5958 53.0272H5.23889C2.43373 53.0272 0.15 50.7323 0.15 47.9102V23.2659C0.15 20.9897 1.10775 18.8035 2.77707 17.2681L2.77709 17.2681L17.9013 3.35133C17.9013 3.35132 17.9013 3.35131 17.9013 3.3513C19.3846 1.98708 21.4994 1.69308 23.0137 2.21753L23.0628 2.07579L23.0137 2.21754C23.0862 2.24262 23.4283 2.32881 23.9545 2.4574C24.4869 2.58749 25.2196 2.76373 26.0853 2.97052C27.8166 3.38411 30.0804 3.92011 32.3377 4.45391C32.9028 4.58752 33.4674 4.721 34.0233 4.85239C35.688 5.24592 37.2734 5.62069 38.5526 5.92424C39.4057 6.12669 40.1225 6.29742 40.6356 6.42088C40.8922 6.48262 41.0977 6.53248 41.2437 6.56856C41.3168 6.58661 41.3747 6.60112 41.4165 6.6119C41.4374 6.6173 41.4539 6.62166 41.4661 6.62499C41.4775 6.6281 41.4826 6.62965 41.4837 6.63L41.484 6.63006C43.6207 7.36734 45.3601 8.97958 46.2561 11.0532C46.2579 11.0573 46.2575 11.0553 46.257 11.0528L46.2579 11.0524C46.2711 11.0856 46.3759 11.3883 47.0791 13.4345C47.557 14.8251 48.3112 17.0206 49.5009 20.4842C50.6759 23.9049 52.2758 28.5625 54.4541 34.9033ZM46.2579 11.0523L46.257 11.0527C46.2569 11.0524 46.2569 11.0522 46.2568 11.0519C46.2562 11.0491 46.2556 11.0465 46.2579 11.0523ZM19.9316 5.50128L19.9315 5.50131C14.9647 10.0817 14.2994 10.6834 13.4449 11.456L13.3685 11.5251C12.4722 12.3357 11.2347 13.4576 4.75586 19.419C3.6859 20.4032 3.07274 21.8052 3.07274 23.2659V47.9102C3.07274 49.1183 4.04236 50.1045 5.23889 50.1045H37.5958C38.7922 50.1045 39.7618 49.1183 39.7619 47.9102V23.2659C39.7619 21.8052 39.1488 20.4033 38.079 19.4193C34.2335 15.8808 31.35 13.221 29.1808 11.2199C26.7128 8.94329 25.1692 7.51942 24.1849 6.62453C23.2625 5.78592 22.8249 5.40583 22.5762 5.22418C22.4497 5.13177 22.3638 5.08438 22.282 5.05512C22.2422 5.04091 22.2063 5.03205 22.1743 5.02438L22.1641 5.02195C22.1355 5.01511 22.1086 5.0087 22.0765 4.9991C21.2925 4.7628 20.5017 4.97582 19.9316 5.50128ZM50.6386 38.846L50.6391 38.8457C51.7224 38.377 52.2217 37.1042 51.7492 36.012L51.7491 36.0117C51.747 36.007 51.7475 36.0097 51.748 36.0122C51.748 36.0123 51.748 36.0124 51.7481 36.0125C51.7485 36.0146 51.7488 36.0163 51.7473 36.0128C51.7473 36.0127 51.7472 36.0126 51.7472 36.0126C51.7365 35.987 51.6407 35.7104 50.921 33.6163C50.4862 32.3508 49.8237 30.4221 48.8144 27.4838C47.6161 23.9954 45.9291 19.0841 43.5541 12.1704L43.5546 12.1702L43.5492 12.1581C42.9817 10.8858 41.9136 9.89299 40.6029 9.41861L40.5949 9.41569L40.5865 9.4137L28.9306 6.64794L28.3717 6.51533L28.7944 6.90427L40.0577 17.2683L40.0577 17.2683C41.7268 18.8035 42.6846 20.9897 42.6846 23.2659V42.0227V42.25L42.8936 42.1606L50.6386 38.846Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M25.9345 21.8703L25.9345 21.8703C26.6787 22.1826 27.0289 23.039 26.7166 23.7834L18.8721 42.4796C18.6374 43.0389 18.0951 43.3759 17.5238 43.3759C16.4879 43.3759 15.7713 42.3156 16.177 41.3487L24.0214 22.6525C24.3338 21.9083 25.1905 21.558 25.9345 21.8703Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M15.3678 26.3757V26.3757C15.3678 25.6891 15.1456 25.0523 14.7865 24.5843C14.4278 24.1169 13.9238 23.8083 13.363 23.8083C12.8022 23.8083 12.2982 24.1169 11.9395 24.5843C11.5805 25.0523 11.3582 25.6891 11.3582 26.3757C11.3582 27.0623 11.5805 27.6991 11.9396 28.1671C12.2983 28.6346 12.8023 28.9431 13.363 28.9431C13.9237 28.9431 14.4277 28.6346 14.7864 28.1671C15.1455 27.6991 15.3677 27.0623 15.3678 26.3757ZM13.3629 20.8856C16.0654 20.8856 18.2904 23.3334 18.2904 26.3757C18.2904 29.418 16.0655 31.8658 13.363 31.8658C10.6605 31.8658 8.43546 29.418 8.43546 26.3757C8.43546 23.3334 10.6604 20.8856 13.3629 20.8856Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M24.695 39.1578C24.695 36.1155 26.92 33.6677 29.6225 33.6677C32.3249 33.6677 34.5501 36.1155 34.5501 39.1578C34.5501 42.2001 32.3251 44.6479 29.6225 44.6479C26.92 44.6479 24.695 42.2001 24.695 39.1578ZM27.6177 39.1578C27.6177 39.8444 27.84 40.4812 28.1991 40.9492C28.5578 41.4167 29.0618 41.7252 29.6225 41.7252C30.1832 41.7252 30.6873 41.4167 31.0459 40.9492C31.405 40.4812 31.6273 39.8444 31.6273 39.1578C31.6273 38.4713 31.4051 37.8344 31.046 37.3664C30.6873 36.899 30.1833 36.5904 29.6225 36.5904C29.0618 36.5904 28.5577 36.899 28.1991 37.3664C27.84 37.8344 27.6177 38.4713 27.6177 39.1578Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
            </svg>
          </div>
        </div>
        <div className="w-full sm:w-1/4 min-w-[100%] sm:min-w-[20%] px-4 py-2 md:px-6 xl:px-7 3xl:px-9 flex items-center justify-between bg-[#F4F2EB]">
          <div className="pr-4 md:pr-5 lg:pr-4 3xl:pr-10">
            <h2 className="text-brand-dark text-base xl:text-md whitespace-nowrap xl:leading-7 font-semibold font-manrope mb-1.5 -mt-0.5">
              24 x 7 Cutomer Support
            </h2>
            <p className="text-brand-muted text-xs  lg:text-15px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex shrink-0 items-center justify-center bg-brand-light rounded-full w-[80px] xl:w-24 3xl:w-[110px] h-[80px] xl:h-24 3xl:h-[110px]">
            <svg
              width="55px"
              height="55px"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform scale-75 xl:scale-90 3xl:scale-100"
            >
              <path
                d="M20.0298 12.321L20.0298 12.321C20.1661 13.0493 20.8898 13.6264 21.747 13.4669C22.5787 13.2924 23.0495 12.496 22.8948 11.7498C22.7118 10.8775 21.8526 10.3929 21.0369 10.6361L20.0298 12.321ZM20.0298 12.321L20.0291 12.3179M20.0298 12.321L20.0291 12.3179M20.0291 12.3179C19.8797 11.605 20.3102 10.853 21.0369 10.6361L20.0291 12.3179Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M54.4541 34.9033L54.4538 34.9034L54.4575 34.9123C55.5255 37.4705 54.3405 40.4284 51.7944 41.5306C51.7942 41.5306 51.7941 41.5307 51.7939 41.5307L42.7757 45.3903L42.6847 45.4292V45.5282V47.9102C42.6847 50.7323 40.4009 53.0272 37.5958 53.0272H5.23889C2.43373 53.0272 0.15 50.7323 0.15 47.9102V23.2659C0.15 20.9897 1.10775 18.8035 2.77707 17.2681L2.77709 17.2681L17.9013 3.35133C17.9013 3.35132 17.9013 3.35131 17.9013 3.3513C19.3846 1.98708 21.4994 1.69308 23.0137 2.21753L23.0628 2.07579L23.0137 2.21754C23.0862 2.24262 23.4283 2.32881 23.9545 2.4574C24.4869 2.58749 25.2196 2.76373 26.0853 2.97052C27.8166 3.38411 30.0804 3.92011 32.3377 4.45391C32.9028 4.58752 33.4674 4.721 34.0233 4.85239C35.688 5.24592 37.2734 5.62069 38.5526 5.92424C39.4057 6.12669 40.1225 6.29742 40.6356 6.42088C40.8922 6.48262 41.0977 6.53248 41.2437 6.56856C41.3168 6.58661 41.3747 6.60112 41.4165 6.6119C41.4374 6.6173 41.4539 6.62166 41.4661 6.62499C41.4775 6.6281 41.4826 6.62965 41.4837 6.63L41.484 6.63006C43.6207 7.36734 45.3601 8.97958 46.2561 11.0532C46.2579 11.0573 46.2575 11.0553 46.257 11.0528L46.2579 11.0524C46.2711 11.0856 46.3759 11.3883 47.0791 13.4345C47.557 14.8251 48.3112 17.0206 49.5009 20.4842C50.6759 23.9049 52.2758 28.5625 54.4541 34.9033ZM46.2579 11.0523L46.257 11.0527C46.2569 11.0524 46.2569 11.0522 46.2568 11.0519C46.2562 11.0491 46.2556 11.0465 46.2579 11.0523ZM19.9316 5.50128L19.9315 5.50131C14.9647 10.0817 14.2994 10.6834 13.4449 11.456L13.3685 11.5251C12.4722 12.3357 11.2347 13.4576 4.75586 19.419C3.6859 20.4032 3.07274 21.8052 3.07274 23.2659V47.9102C3.07274 49.1183 4.04236 50.1045 5.23889 50.1045H37.5958C38.7922 50.1045 39.7618 49.1183 39.7619 47.9102V23.2659C39.7619 21.8052 39.1488 20.4033 38.079 19.4193C34.2335 15.8808 31.35 13.221 29.1808 11.2199C26.7128 8.94329 25.1692 7.51942 24.1849 6.62453C23.2625 5.78592 22.8249 5.40583 22.5762 5.22418C22.4497 5.13177 22.3638 5.08438 22.282 5.05512C22.2422 5.04091 22.2063 5.03205 22.1743 5.02438L22.1641 5.02195C22.1355 5.01511 22.1086 5.0087 22.0765 4.9991C21.2925 4.7628 20.5017 4.97582 19.9316 5.50128ZM50.6386 38.846L50.6391 38.8457C51.7224 38.377 52.2217 37.1042 51.7492 36.012L51.7491 36.0117C51.747 36.007 51.7475 36.0097 51.748 36.0122C51.748 36.0123 51.748 36.0124 51.7481 36.0125C51.7485 36.0146 51.7488 36.0163 51.7473 36.0128C51.7473 36.0127 51.7472 36.0126 51.7472 36.0126C51.7365 35.987 51.6407 35.7104 50.921 33.6163C50.4862 32.3508 49.8237 30.4221 48.8144 27.4838C47.6161 23.9954 45.9291 19.0841 43.5541 12.1704L43.5546 12.1702L43.5492 12.1581C42.9817 10.8858 41.9136 9.89299 40.6029 9.41861L40.5949 9.41569L40.5865 9.4137L28.9306 6.64794L28.3717 6.51533L28.7944 6.90427L40.0577 17.2683L40.0577 17.2683C41.7268 18.8035 42.6846 20.9897 42.6846 23.2659V42.0227V42.25L42.8936 42.1606L50.6386 38.846Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M25.9345 21.8703L25.9345 21.8703C26.6787 22.1826 27.0289 23.039 26.7166 23.7834L18.8721 42.4796C18.6374 43.0389 18.0951 43.3759 17.5238 43.3759C16.4879 43.3759 15.7713 42.3156 16.177 41.3487L24.0214 22.6525C24.3338 21.9083 25.1905 21.558 25.9345 21.8703Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M15.3678 26.3757V26.3757C15.3678 25.6891 15.1456 25.0523 14.7865 24.5843C14.4278 24.1169 13.9238 23.8083 13.363 23.8083C12.8022 23.8083 12.2982 24.1169 11.9395 24.5843C11.5805 25.0523 11.3582 25.6891 11.3582 26.3757C11.3582 27.0623 11.5805 27.6991 11.9396 28.1671C12.2983 28.6346 12.8023 28.9431 13.363 28.9431C13.9237 28.9431 14.4277 28.6346 14.7864 28.1671C15.1455 27.6991 15.3677 27.0623 15.3678 26.3757ZM13.3629 20.8856C16.0654 20.8856 18.2904 23.3334 18.2904 26.3757C18.2904 29.418 16.0655 31.8658 13.363 31.8658C10.6605 31.8658 8.43546 29.418 8.43546 26.3757C8.43546 23.3334 10.6604 20.8856 13.3629 20.8856Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M24.695 39.1578C24.695 36.1155 26.92 33.6677 29.6225 33.6677C32.3249 33.6677 34.5501 36.1155 34.5501 39.1578C34.5501 42.2001 32.3251 44.6479 29.6225 44.6479C26.92 44.6479 24.695 42.2001 24.695 39.1578ZM27.6177 39.1578C27.6177 39.8444 27.84 40.4812 28.1991 40.9492C28.5578 41.4167 29.0618 41.7252 29.6225 41.7252C30.1832 41.7252 30.6873 41.4167 31.0459 40.9492C31.405 40.4812 31.6273 39.8444 31.6273 39.1578C31.6273 38.4713 31.4051 37.8344 31.046 37.3664C30.6873 36.899 30.1833 36.5904 29.6225 36.5904C29.0618 36.5904 28.5577 36.899 28.1991 37.3664C27.84 37.8344 27.6177 38.4713 27.6177 39.1578Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
            </svg>
          </div>
        </div>
        <div className="w-full sm:w-1/4 min-w-[100%] sm:min-w-[20%] px-4 py-2 md:px-6 xl:px-7 3xl:px-9 flex items-center justify-between bg-[#F4F2EB]">
          <div className="pr-4 md:pr-5 lg:pr-4 3xl:pr-10">
            <h2 className="text-brand-dark text-base text-md whitespace-nowrap xl:leading-7 font-semibold font-manrope mb-1.5 -mt-0.5">
              Easy Return & Refund
            </h2>
            <p className="text-brand-muted text-xs  lg:text-15px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex shrink-0 items-center justify-center bg-brand-light rounded-full w-[80px] xl:w-24 3xl:w-[110px] h-[80px] xl:h-24 3xl:h-[110px]">
            <svg
              width="55px"
              height="55px"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform scale-75 xl:scale-90 3xl:scale-100"
            >
              <path
                d="M20.0298 12.321L20.0298 12.321C20.1661 13.0493 20.8898 13.6264 21.747 13.4669C22.5787 13.2924 23.0495 12.496 22.8948 11.7498C22.7118 10.8775 21.8526 10.3929 21.0369 10.6361L20.0298 12.321ZM20.0298 12.321L20.0291 12.3179M20.0298 12.321L20.0291 12.3179M20.0291 12.3179C19.8797 11.605 20.3102 10.853 21.0369 10.6361L20.0291 12.3179Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M54.4541 34.9033L54.4538 34.9034L54.4575 34.9123C55.5255 37.4705 54.3405 40.4284 51.7944 41.5306C51.7942 41.5306 51.7941 41.5307 51.7939 41.5307L42.7757 45.3903L42.6847 45.4292V45.5282V47.9102C42.6847 50.7323 40.4009 53.0272 37.5958 53.0272H5.23889C2.43373 53.0272 0.15 50.7323 0.15 47.9102V23.2659C0.15 20.9897 1.10775 18.8035 2.77707 17.2681L2.77709 17.2681L17.9013 3.35133C17.9013 3.35132 17.9013 3.35131 17.9013 3.3513C19.3846 1.98708 21.4994 1.69308 23.0137 2.21753L23.0628 2.07579L23.0137 2.21754C23.0862 2.24262 23.4283 2.32881 23.9545 2.4574C24.4869 2.58749 25.2196 2.76373 26.0853 2.97052C27.8166 3.38411 30.0804 3.92011 32.3377 4.45391C32.9028 4.58752 33.4674 4.721 34.0233 4.85239C35.688 5.24592 37.2734 5.62069 38.5526 5.92424C39.4057 6.12669 40.1225 6.29742 40.6356 6.42088C40.8922 6.48262 41.0977 6.53248 41.2437 6.56856C41.3168 6.58661 41.3747 6.60112 41.4165 6.6119C41.4374 6.6173 41.4539 6.62166 41.4661 6.62499C41.4775 6.6281 41.4826 6.62965 41.4837 6.63L41.484 6.63006C43.6207 7.36734 45.3601 8.97958 46.2561 11.0532C46.2579 11.0573 46.2575 11.0553 46.257 11.0528L46.2579 11.0524C46.2711 11.0856 46.3759 11.3883 47.0791 13.4345C47.557 14.8251 48.3112 17.0206 49.5009 20.4842C50.6759 23.9049 52.2758 28.5625 54.4541 34.9033ZM46.2579 11.0523L46.257 11.0527C46.2569 11.0524 46.2569 11.0522 46.2568 11.0519C46.2562 11.0491 46.2556 11.0465 46.2579 11.0523ZM19.9316 5.50128L19.9315 5.50131C14.9647 10.0817 14.2994 10.6834 13.4449 11.456L13.3685 11.5251C12.4722 12.3357 11.2347 13.4576 4.75586 19.419C3.6859 20.4032 3.07274 21.8052 3.07274 23.2659V47.9102C3.07274 49.1183 4.04236 50.1045 5.23889 50.1045H37.5958C38.7922 50.1045 39.7618 49.1183 39.7619 47.9102V23.2659C39.7619 21.8052 39.1488 20.4033 38.079 19.4193C34.2335 15.8808 31.35 13.221 29.1808 11.2199C26.7128 8.94329 25.1692 7.51942 24.1849 6.62453C23.2625 5.78592 22.8249 5.40583 22.5762 5.22418C22.4497 5.13177 22.3638 5.08438 22.282 5.05512C22.2422 5.04091 22.2063 5.03205 22.1743 5.02438L22.1641 5.02195C22.1355 5.01511 22.1086 5.0087 22.0765 4.9991C21.2925 4.7628 20.5017 4.97582 19.9316 5.50128ZM50.6386 38.846L50.6391 38.8457C51.7224 38.377 52.2217 37.1042 51.7492 36.012L51.7491 36.0117C51.747 36.007 51.7475 36.0097 51.748 36.0122C51.748 36.0123 51.748 36.0124 51.7481 36.0125C51.7485 36.0146 51.7488 36.0163 51.7473 36.0128C51.7473 36.0127 51.7472 36.0126 51.7472 36.0126C51.7365 35.987 51.6407 35.7104 50.921 33.6163C50.4862 32.3508 49.8237 30.4221 48.8144 27.4838C47.6161 23.9954 45.9291 19.0841 43.5541 12.1704L43.5546 12.1702L43.5492 12.1581C42.9817 10.8858 41.9136 9.89299 40.6029 9.41861L40.5949 9.41569L40.5865 9.4137L28.9306 6.64794L28.3717 6.51533L28.7944 6.90427L40.0577 17.2683L40.0577 17.2683C41.7268 18.8035 42.6846 20.9897 42.6846 23.2659V42.0227V42.25L42.8936 42.1606L50.6386 38.846Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M25.9345 21.8703L25.9345 21.8703C26.6787 22.1826 27.0289 23.039 26.7166 23.7834L18.8721 42.4796C18.6374 43.0389 18.0951 43.3759 17.5238 43.3759C16.4879 43.3759 15.7713 42.3156 16.177 41.3487L24.0214 22.6525C24.3338 21.9083 25.1905 21.558 25.9345 21.8703Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M15.3678 26.3757V26.3757C15.3678 25.6891 15.1456 25.0523 14.7865 24.5843C14.4278 24.1169 13.9238 23.8083 13.363 23.8083C12.8022 23.8083 12.2982 24.1169 11.9395 24.5843C11.5805 25.0523 11.3582 25.6891 11.3582 26.3757C11.3582 27.0623 11.5805 27.6991 11.9396 28.1671C12.2983 28.6346 12.8023 28.9431 13.363 28.9431C13.9237 28.9431 14.4277 28.6346 14.7864 28.1671C15.1455 27.6991 15.3677 27.0623 15.3678 26.3757ZM13.3629 20.8856C16.0654 20.8856 18.2904 23.3334 18.2904 26.3757C18.2904 29.418 16.0655 31.8658 13.363 31.8658C10.6605 31.8658 8.43546 29.418 8.43546 26.3757C8.43546 23.3334 10.6604 20.8856 13.3629 20.8856Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
              <path
                d="M24.695 39.1578C24.695 36.1155 26.92 33.6677 29.6225 33.6677C32.3249 33.6677 34.5501 36.1155 34.5501 39.1578C34.5501 42.2001 32.3251 44.6479 29.6225 44.6479C26.92 44.6479 24.695 42.2001 24.695 39.1578ZM27.6177 39.1578C27.6177 39.8444 27.84 40.4812 28.1991 40.9492C28.5578 41.4167 29.0618 41.7252 29.6225 41.7252C30.1832 41.7252 30.6873 41.4167 31.0459 40.9492C31.405 40.4812 31.6273 39.8444 31.6273 39.1578C31.6273 38.4713 31.4051 37.8344 31.046 37.3664C30.6873 36.899 30.1833 36.5904 29.6225 36.5904C29.0618 36.5904 28.5577 36.899 28.1991 37.3664C27.84 37.8344 27.6177 38.4713 27.6177 39.1578Z"
                fill="#E9AD26"
                stroke="white"
                strokeWidth="0.3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* categories */}
      <div className="py-2 px-8">
        <Categories />
      </div>
      {/* Advance Search */}
      <div className="py-2 px-8 ">
        <div className="flex flex-col px-6 sm:py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-lg uppercase tracking-wide gradient-text dark:text-white lg:text-lg ">
                A new approach to your
                <br />
                <span className="uppercase text-lg font-bold tracking-wide gradient-text dark:text-white lg:text-3xl">
                  online shopping experience
                </span>
              </h1>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2">
                      Product Search With Advanced Search & Filtering
                    </span>
                  </p>
                  <p className="mx-10 text-sm text-gray-400">
                    Use &apos;#&apos; and &apos;@&apos; to search products and
                    vendors.
                  </p>
                </div>

                <div>
                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2">
                      Yes, you can book various services and appointments
                    </span>
                  </p>
                  <p className="mx-10 text-sm text-gray-400">
                    Along with products delivered to you get all your bookings
                    and appointments done.
                  </p>
                </div>

                <div>
                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2">
                      Enjoy diverse campaigns from our vendors
                    </span>
                  </p>
                  <p className="mx-10 text-sm text-gray-400">
                    Enroll in our diverse campaigns for diverse gains.
                  </p>
                </div>
              </div>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-4 md:mt-8 inline-flex rounded-md shadow">
                  <button
                    type="button"
                    className="py-2 px-4  bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src="https://redq.io/landing/_next/static/images/search-209bf1b5a595a219eb9419c45ec8ef82.png"
              alt="glasses photo"
            />
          </div>
        </div>
      </div>

      {/* Vendor Advantages */}
      <div className="py-2 px-8 ">
        <div className="flex flex-col  px-6 sm:py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:gap-12 lg:items-center">
          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src="https://redq.io/landing/_next/static/images/search-209bf1b5a595a219eb9419c45ec8ef82.png"
              alt="glasses photo"
            />
          </div>

          <div className="w-full lg:w-1/2 ">
            <div className="w-full justify-end">
              <h1 className="text-lg uppercase tracking-wide gradient-text dark:text-white lg:text-lg ">
                Selling has never been this easy
                <br />
                <span className="uppercase text-lg font-bold tracking-wide gradient-text dark:text-white lg:text-3xl">
                  Earn Revenue with constant growth
                </span>
              </h1>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2">
                      Bigger customer base to sell your products/services.
                    </span>
                  </p>
                  <p className="mx-10 text-sm text-gray-400">
                    Gain loyalty from customers for regular sales.
                  </p>
                </div>

                <div>
                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2">
                      Marketing cost can be overwhelming.
                    </span>
                  </p>
                  <p className="mx-10 text-sm text-gray-400">
                    Grow your business with organic social media marketing.
                  </p>
                </div>

                <div>
                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2">
                      Engage with customers with our sales reels.
                    </span>
                  </p>
                  <p className="mx-10 text-sm text-gray-400">
                    Connect with customers on social media'&apos;s with easy
                    post creation.
                  </p>
                </div>
              </div>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-4 md:mt-8 inline-flex rounded-md shadow">
                  <button
                    type="button"
                    className="py-2 px-4  bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="bg-white py-2 px-8">
        <div className="w-full mx-auto px-4 sm:px-5 md:px-8  md:flex justify-between items-center">
          <div className="shrink-0 mx-auto md:ml-0 lg:flex lg:items-center pb-5 pt-1.5 md:pt-4 max-w-[350px] md:max-w-[340px] lg:max-w-[485px] xl:max-w-[540px] 2xl:max-w-[680px] 3xl:pl-10">
            <div className="py-8 text-center xl:py-10 2xl:py-14 md:text-left">
              <h2 className="text-[22px] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[42px] leading-9 lg:leading-[1.4em] xl:leading-[1.45em] text-brand-dark font-bold font-manrope -tracking-[0.2px] mb-3 lg:mb-4">
                Get more sales and revenue with our online marketplace.
              </h2>
              <p className="text-15px xl:text-base 2xl:text-[17px] leading-7 xl:leading-9 text-brand-dark text-opacity-70 pb-5 lg:pb-7 pr-0 xl:pr-8 2xl:pr-20">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <div className="flex justify-center md:justify-start -mx-1 md:-mx-1.5 pt-0.5 px-7 sm:px-0">
                <Link
                  className="inline-flex transition duration-200 ease-in hover:shadow hover:opacity-80 mx-1 md:mx-1.5"
                  href="#"
                >
                  <img
                    alt="App Store"
                    fetchpriority="high"
                    width="170"
                    height="56"
                    decoding="async"
                    data-nimg="1"
                    className="rounded-md w-36 lg:w-44"
                    style={{ color: "transparent" }}
                    src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-store.png&w=256&q=75"
                  />
                </Link>
                <Link
                  className="inline-flex transition duration-200 ease-in hover:shadow hover:opacity-80 mx-1 md:mx-1.5"
                  href="#"
                >
                  <img
                    alt="Play Store"
                    fetchpriority="high"
                    width="170"
                    height="56"
                    decoding="async"
                    data-nimg="1"
                    className="rounded-md w-36 lg:w-44"
                    style={{ color: "transparent" }}
                    src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fplay-store.png&w=256&q=75"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-end pl-4 2xl:pl-0 md:max-w-[480px] lg:max-w-[540px] xl:max-w-auto -mr-16 lg:-mr-8 3xl:mr-24">
            <img
              className="w-full h-full"
              alt="App Thumbnail"
              style={{ color: "transparent" }}
              src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail-2.png&w=750&q=100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
