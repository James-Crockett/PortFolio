import * as React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const JerseyKulture = () => {
  return (
    <div className="bg-white flex flex-col items-stretch pb-12">
      <div className="bg-[#BAFAF8] flex w-full flex-col pl-20 pt-11 items-end max-md:max-w-full max-md:pl-5">
        <Header />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3fd022ef07d12e846afb64f2b586fcfbe83bde398615e58eaa111812d2bf7591?apiKey=523a329b359546f087e663be5f0c596a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fd022ef07d12e846afb64f2b586fcfbe83bde398615e58eaa111812d2bf7591?apiKey=523a329b359546f087e663be5f0c596a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fd022ef07d12e846afb64f2b586fcfbe83bde398615e58eaa111812d2bf7591?apiKey=523a329b359546f087e663be5f0c596a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fd022ef07d12e846afb64f2b586fcfbe83bde398615e58eaa111812d2bf7591?apiKey=523a329b359546f087e663be5f0c596a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fd022ef07d12e846afb64f2b586fcfbe83bde398615e58eaa111812d2bf7591?apiKey=523a329b359546f087e663be5f0c596a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fd022ef07d12e846afb64f2b586fcfbe83bde398615e58eaa111812d2bf7591?apiKey=523a329b359546f087e663be5f0c596a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fd022ef07d12e846afb64f2b586fcfbe83bde398615e58eaa111812d2bf7591?apiKey=523a329b359546f087e663be5f0c596a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fd022ef07d12e846afb64f2b586fcfbe83bde398615e58eaa111812d2bf7591?apiKey=523a329b359546f087e663be5f0c596a&"
          className="aspect-[1.69] object-contain object-center w-full overflow-hidden self-center max-w-[1140px] mt-6 max-md:max-w-full"
          alt=""
        />
      </div>
      <div className="flex w-full flex-col mt-16 mb-9 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="self-center flex w-full max-w-[1087px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="flex flex-col items-stretch pt-2.5 w-full md:w-1/2">
            <div className="text-black text-4xl font-bold whitespace-nowrap ml-2.5 mt-2.5 self-start">
              Jersey Kulture
            </div>
            <div className="items-stretch flex flex-col mt-4 p-2.5 max-md:max-w-full">
              <div className="text-black text-2xl font-bold max-md:max-w-full">
                INTRODUCTION
              </div>
              <div className="text-black text-base font-medium mt-5 max-md:max-w-full">
                A dedicated e-commerce site official licensed jerseys, shorts
                and accessories for school basketball teams. It also provides
                the option to order customizable jerseys with detailed
                description.
              </div>
            </div>
            <div className="items-stretch flex w-[290px] max-w-full flex-col mt-7 p-2.5 self-start">
              <div className="text-black text-2xl font-bold">COLLABORATORS</div>
              <div className="text-black text-base font-medium mt-5">
                Dhanush (UX/UI Designer)
                <br />
                Srivasthan (Researcher)
                <br />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch self-end py-1 max-md:mt-10">
            <div className="items-stretch flex flex-col px-3 py-2.5">
              <div className="text-black text-2xl font-bold">MY ROLE</div>
              <div className="text-black text-base font-medium mt-5">
                UX Designer
                <br />
                Team Lead
              </div>
            </div>
            <div className="items-stretch flex flex-col mt-14 p-2.5">
              <div className="text-black text-2xl font-bold">Time</div>
              <div className="text-black text-base font-medium mt-5">
                Apr 2023 - June 2023
                <br />
                (Designing stage)
              </div>
            </div>
          </div>
        </div>
        <div className="items-stretch self-center flex w-full max-w-[1087px] flex-col mt-12 pt-5 pb-3 px-2.5 max-md:max-w-full max-md:mt-10">
          <div className="text-black text-4xl font-bold max-md:max-w-full">
            Basic Requirements
          </div>
          <div className="text-black text-justify text-base font-medium mt-7 max-md:max-w-full">
            The client needed a website to sell athletic merch of local
            basketball teams. The user population was comprised of locals that
            support their team and schools that wanted to order customiza ble
            merchandize in bulk. So, we added a separate page that was
            especially designed for customized ordering. and an easy check out
            method for ease of use.
          </div>
        </div>
        <div className="items-stretch self-center flex w-full max-w-[1087px] flex-col mt-12 pt-5 pb-3 px-2.5 max-md:max-w-full max-md:mt-10">
          <div className="text-black text-4xl font-bold whitespace-nowrap max-md:ml-2.5 max-md:mt-10">
            User flow
          </div>
          <img
            loading="lazy"
            srcSet="images/JerseyKulture/flow.png"
            className="aspect-[1.27] object-contain object-center w-[595px] overflow-hidden self-center max-w-full mt-12 max-md:mt-10"
            alt=""
          />
        </div>
        <div className="items-stretch self-center flex w-full max-w-[1087px] flex-col mt-12 pt-5 pb-3 px-2.5 max-md:max-w-full max-md:mt-10">
          <div className="text-black text-4xl font-bold max-md:max-w-full">
            Typography
          </div>
          <div className="text-black text-justify text-base font-medium mt-7 max-md:max-w-full">
            Inconsolata's monospaced design ensures consistent letter spacing,
            improving readability for product descriptions, prices, and
            navigation elements. This is particularly helpful for users scanning
            information quickly or relying on screen readers. Inconsolata can
            contributes to a bold, minimalist feel which reflects the company’s
            characters.
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="images/JerseyKulture/typo.png"
          className="aspect-square object-contain object-center w-[600px] overflow-hidden self-center max-w-full mt-8"
          alt=""
        />
        <div className="items-stretch self-center flex w-full max-w-[1087px] flex-col mt-12 pt-5 pb-3 px-2.5 max-md:max-w-full max-md:mt-10">
          <div className="text-black text-4xl font-bold max-md:max-w-full">
            Colour Palette
          </div>
          <div className="text-black text-justify text-base font-medium mt-7 max-md:max-w-full">
            To maintain a minimalistic look we just chose a handful of colours.
            We decided on a background that looks like paper to introduce eco -
            friendlyness into the design. Teal for the buttons as it goes
            flawlessly with light backgounds and black or white text depending
            on the background.
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="images/JerseyKulture/colour.png"
          className="aspect-[1.97] object-contain object-center w-[600px] overflow-hidden self-center max-w-full mt-8"
          alt=""
        />
        <div className="items-stretch self-center flex w-full max-w-[1087px] flex-col mt-12 pt-5 pb-8 px-2.5 max-md:max-w-full max-md:mt-10">
          <div className="text-black text-4xl font-bold max-md:max-w-full">
            Prototype and Design
          </div>
          <div className="text-black text-justify text-base font-medium mt-12 max-md:max-w-full max-md:mt-10">
            I planned to create a minimalistic design which will be familiar to
            the user. I sketched some ideas and ended up with a prototype.
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="images/JerseyKulture/fst.png"
          className="aspect-[2.15] object-contain object-center w-full overflow-hidden self-stretch ml-4 mr-4 mt-8 max-md:max-w-full max-md:mr-2.5"
          alt=""
        />
        <img
          loading="lazy"
          srcSet="images/JerseyKulture/snd.png"
          className="aspect-[2.16] object-contain object-center w-full overflow-hidden self-stretch ml-4 mr-4 mt-8 max-md:max-w-full max-md:mr-2.5"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default JerseyKulture;
