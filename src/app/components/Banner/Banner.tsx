import Image from "next/image";

export default function Banner() {
  return (
    <div className="max-w-[1440px] mx-auto mt-[135px] lg:mt-[145px] overflow-hidden relative">
      {/* Banner Image */}
   
   <div className="px-[26px] lg:px-[37px]">
      <div className="relative mx-auto grid grid-cols-1 md:grid-cols-12 h-[296px] sm:h-[296px] lg:h-[605px] w-full">
        <Image
          src="/images/Mask Group 16.png"
          alt="banner image"
          layout="fill"
          className="object-cover object-left object-contain"
        />
      </div>

      {/* Transparent Overlay with Content */}
      <div className="lg:absolute right-0 bottom-0 h-auto bg-white/50 p-0 sm:p-6 sm:relative mt-[120px] lg:mt-[100px]">
        <div className="flex flex-row justify-between top-[30px]">
          <div className="">
            <Image
              src="/images/volume-sharp-solid.png"
              alt="volume button"
              width={17}
              height={14}
              className="absolute"
            />
          </div>
          <div className="space-x-4 pr-6 text-gray-900 text-[16px] sm:text-base sm:pt-2">
            <span>English</span>
            <span>中文</span>
            <span>日本語</span>
          </div>
        </div>

        <div className="mt-[76px] lg:mt-0 max-sm:mt-[40px]">
          <p className="text-[24px] lg:text-[42px] font-medium">
            Kathleen Matsoukas
          </p>
          <p className="mt-2 sm:mt-4 text-[16px] sm:text-[18px]">
            Partner and Co-Chair, White Collar, Compliance and Investigations.
          </p>
          <div className=" mt-[12px] sm:mt-6 text-[16px] sm:text-[18px] pt-0">
            <span className="mr-4">Indianapolis</span>
            <span>New York</span>
          </div>

          <div className=" mt-8 lg:pt-12">
            <button className="bg-black text-white text-xs sm:text-base font-medium rounded-full px-4 py-2 sm:px-6 sm:py-2">
              CONTACT KATIE
            </button>
          </div>

          {/* <div className="flex flex-col sm:flex-row space-x-4  mt-4 sm:mt-6 text-[14px] sm:text-[18px]">
            <span>P 317 231 7332</span>
            <span>M 317 231 7332</span>
          </div> */}

          <div className="flex flex-col sm:flex-row mt-4 sm:mt-6 text-[14px] sm:text-[18px]">
            <div className="mt-2">
              <span className="mr-6">P 317 231 7332</span>
            </div>
            <div className="mt-2 ">
              <span>M 317 231 7332</span>
            </div>
          </div>

          <div className="mt-2 text-[14px] sm:text-[16px]">She/her/hers</div>

          <div className="mt-4 flex space-x-4 text-[14px] sm:text-[16px]">
            <span>vCard</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
