import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <div className="bg-[#0D1014] flex flex-col py-11 items-end max-md:px-5">
        <Header />
        <div className="self-center flex w-full max-w-[1183px] flex-col mt-28 mb-4 items-start max-md:max-w-full max-md:mt-10">
          <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch mt-14 px-5 max-md:max-w-full max-md:mt-10">
                <div className="items-stretch flex flex-col max-md:max-w-full">
                  <div className="text-cyan-400 text-6xl font-bold max-md:max-w-full max-md:text-4xl">
                    <span className="font-bold">
                      <span className="font-bold">Hi! I’m Nitheesh.</span>
                      <br />
                      <span className="font-bold">A UX </span>
                    </span>
                    <span className="font-bold text-cyan-400">
                      <span className="font-bold text-cyan-400">/ </span>
                    </span>
                    <span className="font-bold">
                      <span className="font-bold">UI designer.</span>
                    </span>
                  </div>
                  <div className="text-green-300 text-2xl font-medium mt-6 max-md:max-w-full">
                    I thrive at the intersection of design and technology,
                    creating seamless, responsive, and accessible experiences
                    across all devices and platforms.
                  </div>
                </div>
                <div className="text-rose-300 text-2xl font-medium mt-2.5 max-md:max-w-full">
                  Currently working @Quindl Technologies
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/809b3d55b932e33f8c71344f632e6a8adc030c0a2de117b7f1fb00f4bfaf350a?apiKey=e6891e96b614444fb3d5a33814f13b14&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/809b3d55b932e33f8c71344f632e6a8adc030c0a2de117b7f1fb00f4bfaf350a?apiKey=e6891e96b614444fb3d5a33814f13b14&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/809b3d55b932e33f8c71344f632e6a8adc030c0a2de117b7f1fb00f4bfaf350a?apiKey=e6891e96b614444fb3d5a33814f13b14&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/809b3d55b932e33f8c71344f632e6a8adc030c0a2de117b7f1fb00f4bfaf350a?apiKey=e6891e96b614444fb3d5a33814f13b14&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/809b3d55b932e33f8c71344f632e6a8adc030c0a2de117b7f1fb00f4bfaf350a?apiKey=e6891e96b614444fb3d5a33814f13b14&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/809b3d55b932e33f8c71344f632e6a8adc030c0a2de117b7f1fb00f4bfaf350a?apiKey=e6891e96b614444fb3d5a33814f13b14&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/809b3d55b932e33f8c71344f632e6a8adc030c0a2de117b7f1fb00f4bfaf350a?apiKey=e6891e96b614444fb3d5a33814f13b14&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/809b3d55b932e33f8c71344f632e6a8adc030c0a2de117b7f1fb00f4bfaf350a?apiKey=e6891e96b614444fb3d5a33814f13b14&"
                className="aspect-[1.4] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                alt=""
              />
            </div>
          </div>
          <Link to={"/taxiwala"} className="bg-green-100 w-[1100px] max-w-full mt-60 px-16 pt-8 rounded-lg self-center max-md:mt-10 max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b0840b4899cf66969020db3be2d239f2234528fe3409731aa172eca289b54719?apiKey=523a329b359546f087e663be5f0c596a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0840b4899cf66969020db3be2d239f2234528fe3409731aa172eca289b54719?apiKey=523a329b359546f087e663be5f0c596a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0840b4899cf66969020db3be2d239f2234528fe3409731aa172eca289b54719?apiKey=523a329b359546f087e663be5f0c596a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0840b4899cf66969020db3be2d239f2234528fe3409731aa172eca289b54719?apiKey=523a329b359546f087e663be5f0c596a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0840b4899cf66969020db3be2d239f2234528fe3409731aa172eca289b54719?apiKey=523a329b359546f087e663be5f0c596a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0840b4899cf66969020db3be2d239f2234528fe3409731aa172eca289b54719?apiKey=523a329b359546f087e663be5f0c596a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0840b4899cf66969020db3be2d239f2234528fe3409731aa172eca289b54719?apiKey=523a329b359546f087e663be5f0c596a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0840b4899cf66969020db3be2d239f2234528fe3409731aa172eca289b54719?apiKey=523a329b359546f087e663be5f0c596a&"
                    className="aspect-[3.65] object-contain object-center w-[354px] overflow-hidden max-w-full self-end"
                    alt=""
                  />
                  <div className="text-black text-2xl font-semibold self-stretch mt-5 max-md:max-w-full">
                    About:
                  </div>
                  <div className="text-black text-base font-medium self-stretch mt-1 max-md:max-w-full">
                    A ride hailing app that provides ride booking and rental
                    vehicles
                  </div>
                  <div className="text-black text-2xl font-semibold whitespace-nowrap mt-6 self-start">
                    My Role:
                  </div>
                  <div className="text-black text-base font-medium mt-1">
                    UX Researcher
                    <br />
                    UX/UI designer
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/17f6f03d67d786d80d01e61e34fcf5c648d776698d4ebb5bfd47914ce4ebb65f?apiKey=523a329b359546f087e663be5f0c596a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/17f6f03d67d786d80d01e61e34fcf5c648d776698d4ebb5bfd47914ce4ebb65f?apiKey=523a329b359546f087e663be5f0c596a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/17f6f03d67d786d80d01e61e34fcf5c648d776698d4ebb5bfd47914ce4ebb65f?apiKey=523a329b359546f087e663be5f0c596a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/17f6f03d67d786d80d01e61e34fcf5c648d776698d4ebb5bfd47914ce4ebb65f?apiKey=523a329b359546f087e663be5f0c596a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/17f6f03d67d786d80d01e61e34fcf5c648d776698d4ebb5bfd47914ce4ebb65f?apiKey=523a329b359546f087e663be5f0c596a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/17f6f03d67d786d80d01e61e34fcf5c648d776698d4ebb5bfd47914ce4ebb65f?apiKey=523a329b359546f087e663be5f0c596a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/17f6f03d67d786d80d01e61e34fcf5c648d776698d4ebb5bfd47914ce4ebb65f?apiKey=523a329b359546f087e663be5f0c596a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/17f6f03d67d786d80d01e61e34fcf5c648d776698d4ebb5bfd47914ce4ebb65f?apiKey=523a329b359546f087e663be5f0c596a&"
                  className="aspect-[1.12] object-contain object-center w-full overflow-hidden grow mt-5 max-md:mt-10"
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link to={"/jersey-kulture"} className="bg-teal-100 w-[1100px] max-w-full px-16 mt-24 rounded-lg self-center max-md:mt-10 max-md:pl-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6661d5eee691800fd4bf146ef83c800e1d0b15a30c92a3525cdd50a4257b7119?apiKey=523a329b359546f087e663be5f0c596a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6661d5eee691800fd4bf146ef83c800e1d0b15a30c92a3525cdd50a4257b7119?apiKey=523a329b359546f087e663be5f0c596a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6661d5eee691800fd4bf146ef83c800e1d0b15a30c92a3525cdd50a4257b7119?apiKey=523a329b359546f087e663be5f0c596a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6661d5eee691800fd4bf146ef83c800e1d0b15a30c92a3525cdd50a4257b7119?apiKey=523a329b359546f087e663be5f0c596a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6661d5eee691800fd4bf146ef83c800e1d0b15a30c92a3525cdd50a4257b7119?apiKey=523a329b359546f087e663be5f0c596a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6661d5eee691800fd4bf146ef83c800e1d0b15a30c92a3525cdd50a4257b7119?apiKey=523a329b359546f087e663be5f0c596a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6661d5eee691800fd4bf146ef83c800e1d0b15a30c92a3525cdd50a4257b7119?apiKey=523a329b359546f087e663be5f0c596a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6661d5eee691800fd4bf146ef83c800e1d0b15a30c92a3525cdd50a4257b7119?apiKey=523a329b359546f087e663be5f0c596a&"
                    className="aspect-[1.01] object-contain object-center w-[100px] overflow-hidden max-w-full mr-20 self-end max-md:mr-2.5"
                    alt=""
                  />
                  <div className="text-black text-2xl font-semibold self-stretch mt-4 max-md:max-w-full">
                    About:
                  </div>
                  <div className="text-black text-base font-medium self-stretch mt-1 max-md:max-w-full">
                    An E-commerce website catered for official basketball team
                    merchandise.
                  </div>
                  <div className="text-black text-2xl font-semibold whitespace-nowrap mt-6 self-start">
                    My Role:
                  </div>
                  <div className="text-black text-base font-medium whitespace-nowrap mt-1 self-start">
                    UX designer
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5951b4574cd9df485a8e9182157bff5f6b71ed96487ff753986ebedb77f8c809?apiKey=523a329b359546f087e663be5f0c596a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5951b4574cd9df485a8e9182157bff5f6b71ed96487ff753986ebedb77f8c809?apiKey=523a329b359546f087e663be5f0c596a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5951b4574cd9df485a8e9182157bff5f6b71ed96487ff753986ebedb77f8c809?apiKey=523a329b359546f087e663be5f0c596a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5951b4574cd9df485a8e9182157bff5f6b71ed96487ff753986ebedb77f8c809?apiKey=523a329b359546f087e663be5f0c596a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5951b4574cd9df485a8e9182157bff5f6b71ed96487ff753986ebedb77f8c809?apiKey=523a329b359546f087e663be5f0c596a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5951b4574cd9df485a8e9182157bff5f6b71ed96487ff753986ebedb77f8c809?apiKey=523a329b359546f087e663be5f0c596a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5951b4574cd9df485a8e9182157bff5f6b71ed96487ff753986ebedb77f8c809?apiKey=523a329b359546f087e663be5f0c596a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5951b4574cd9df485a8e9182157bff5f6b71ed96487ff753986ebedb77f8c809?apiKey=523a329b359546f087e663be5f0c596a&"
                  className="aspect-[1.37] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link to={"/quindl"} className="bg-neutral-950 w-[1100px] max-w-full px-16 mt-24 rounded-lg self-center max-md:mt-10 max-md:pl-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cedccd7da32a843bf068a326998db9665b0f01e0ebfbc58caee255d12f9f408f?apiKey=523a329b359546f087e663be5f0c596a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cedccd7da32a843bf068a326998db9665b0f01e0ebfbc58caee255d12f9f408f?apiKey=523a329b359546f087e663be5f0c596a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cedccd7da32a843bf068a326998db9665b0f01e0ebfbc58caee255d12f9f408f?apiKey=523a329b359546f087e663be5f0c596a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cedccd7da32a843bf068a326998db9665b0f01e0ebfbc58caee255d12f9f408f?apiKey=523a329b359546f087e663be5f0c596a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cedccd7da32a843bf068a326998db9665b0f01e0ebfbc58caee255d12f9f408f?apiKey=523a329b359546f087e663be5f0c596a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cedccd7da32a843bf068a326998db9665b0f01e0ebfbc58caee255d12f9f408f?apiKey=523a329b359546f087e663be5f0c596a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cedccd7da32a843bf068a326998db9665b0f01e0ebfbc58caee255d12f9f408f?apiKey=523a329b359546f087e663be5f0c596a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cedccd7da32a843bf068a326998db9665b0f01e0ebfbc58caee255d12f9f408f?apiKey=523a329b359546f087e663be5f0c596a&"
                    className="aspect-[1.09] object-contain object-center w-[200px] overflow-hidden max-w-full mr-9 self-end max-md:mr-2.5"
                    alt=""
                  />
                  <div className="text-white text-2xl font-semibold self-stretch max-md:max-w-full">
                    About:
                  </div>
                  <div className="text-white text-base font-medium self-stretch mt-1 max-md:max-w-full">
                    Quindl Technologies is a company that provides services from
                    web building to data engineering processes.
                  </div>
                  <div className="text-white text-2xl font-semibold whitespace-nowrap mt-6 self-start">
                    My Role:
                  </div>
                  <div className="text-white text-base font-medium whitespace-nowrap mt-1 self-start">
                    UX/UI designer
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/41e71f8f1e11dcad54af8453d863fd188eee1e1b287722693800a4d925ccb201?apiKey=523a329b359546f087e663be5f0c596a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/41e71f8f1e11dcad54af8453d863fd188eee1e1b287722693800a4d925ccb201?apiKey=523a329b359546f087e663be5f0c596a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41e71f8f1e11dcad54af8453d863fd188eee1e1b287722693800a4d925ccb201?apiKey=523a329b359546f087e663be5f0c596a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/41e71f8f1e11dcad54af8453d863fd188eee1e1b287722693800a4d925ccb201?apiKey=523a329b359546f087e663be5f0c596a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/41e71f8f1e11dcad54af8453d863fd188eee1e1b287722693800a4d925ccb201?apiKey=523a329b359546f087e663be5f0c596a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41e71f8f1e11dcad54af8453d863fd188eee1e1b287722693800a4d925ccb201?apiKey=523a329b359546f087e663be5f0c596a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/41e71f8f1e11dcad54af8453d863fd188eee1e1b287722693800a4d925ccb201?apiKey=523a329b359546f087e663be5f0c596a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/41e71f8f1e11dcad54af8453d863fd188eee1e1b287722693800a4d925ccb201?apiKey=523a329b359546f087e663be5f0c596a&"
                  className="aspect-[1.33] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link to={"/marden-basketball"} className="bg-orange-300 w-[1100px] max-w-full px-16 mt-24 rounded-lg self-center max-md:mt-10 max-md:pl-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col mt-2 max-md:max-w-full max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/850d5d753baf3c60d1dea60762e6287af9cb4ce1bb927777dce99adbb386089b?apiKey=523a329b359546f087e663be5f0c596a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/850d5d753baf3c60d1dea60762e6287af9cb4ce1bb927777dce99adbb386089b?apiKey=523a329b359546f087e663be5f0c596a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/850d5d753baf3c60d1dea60762e6287af9cb4ce1bb927777dce99adbb386089b?apiKey=523a329b359546f087e663be5f0c596a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/850d5d753baf3c60d1dea60762e6287af9cb4ce1bb927777dce99adbb386089b?apiKey=523a329b359546f087e663be5f0c596a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/850d5d753baf3c60d1dea60762e6287af9cb4ce1bb927777dce99adbb386089b?apiKey=523a329b359546f087e663be5f0c596a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/850d5d753baf3c60d1dea60762e6287af9cb4ce1bb927777dce99adbb386089b?apiKey=523a329b359546f087e663be5f0c596a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/850d5d753baf3c60d1dea60762e6287af9cb4ce1bb927777dce99adbb386089b?apiKey=523a329b359546f087e663be5f0c596a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/850d5d753baf3c60d1dea60762e6287af9cb4ce1bb927777dce99adbb386089b?apiKey=523a329b359546f087e663be5f0c596a&"
                    className="aspect-[1.4] object-contain object-center w-[200px] overflow-hidden max-w-full mr-12 self-end max-md:mr-2.5"
                    alt=""
                  />
                  <div className="text-black text-2xl font-semibold self-stretch max-md:max-w-full">
                    About:
                  </div>
                  <div className="text-black text-base font-medium self-stretch mt-1 max-md:max-w-full">
                    Marden Basketball Centre is a centre that regularly hosts
                    basketball events and register through their own online
                    portal.
                  </div>
                  <div className="text-black text-2xl font-semibold mt-6">
                    My Role:
                  </div>
                  <div className="text-black text-base font-medium mt-1">
                    UX Researcher
                    <br />
                    Front end developer
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8752972519cbcda5678c955c7e40da55294c1e02e11a85c392de18fd08d1a74c?apiKey=523a329b359546f087e663be5f0c596a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8752972519cbcda5678c955c7e40da55294c1e02e11a85c392de18fd08d1a74c?apiKey=523a329b359546f087e663be5f0c596a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8752972519cbcda5678c955c7e40da55294c1e02e11a85c392de18fd08d1a74c?apiKey=523a329b359546f087e663be5f0c596a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8752972519cbcda5678c955c7e40da55294c1e02e11a85c392de18fd08d1a74c?apiKey=523a329b359546f087e663be5f0c596a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8752972519cbcda5678c955c7e40da55294c1e02e11a85c392de18fd08d1a74c?apiKey=523a329b359546f087e663be5f0c596a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8752972519cbcda5678c955c7e40da55294c1e02e11a85c392de18fd08d1a74c?apiKey=523a329b359546f087e663be5f0c596a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8752972519cbcda5678c955c7e40da55294c1e02e11a85c392de18fd08d1a74c?apiKey=523a329b359546f087e663be5f0c596a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8752972519cbcda5678c955c7e40da55294c1e02e11a85c392de18fd08d1a74c?apiKey=523a329b359546f087e663be5f0c596a&"
                  className="aspect-[1.33] object-contain object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-[#0D1014] flex flex-col pb-12">
        <Footer />
      </div>
    </>
  );
};

export default Home;
