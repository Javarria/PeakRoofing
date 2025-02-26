import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="relative">
        <Image
          src="/public/RoseGoldBackground.jpeg" // Path to the image inside the public folder
          alt="Rose Gold Background Photo"
          width={500} // Set the desired width
          height={300} // Set the desired height
          className="rounded-lg brightness-40" // Optional Tailwind CSS class, with 10% reduced brightness
        />
      </div>
      {/* This div pushes the content below the header and image, 
          so the header doesn't overlap with the content. */}
      <div className="mt-[-28rem] border-4 border-green-600 flex flex-col justify-center items-center h-full">
        {/* PARENT DIV FOR HEADERS  */}
        <div className="border-4 border-blue-600 p-4">
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "2px",
              lineHeight: "normal",
              textTransform: "uppercase",
              marginBottom: "8px",
              border: "2px solid white",
              textAlign: "center",
            }}
            className="text-white text-4xl font-bold h-full w-full"
          >
            5-Star Siding, Gutters, & Roofing Services In North Carolina and
          </div>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: "2px",
              lineHeight: "normal",
              textTransform: "uppercase",
              marginBottom: "0px", // Adjust margin to bring it closer
              border: "2px solid white",
              textAlign: "center",
            }}
            className="text-white text-4xl font-bold h-full w-full mt-1" // Adjust margin-top to bring it closer
          >
            YOUR LOCAL ROOFING COMPANY
          </div>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              letterSpacing: "1px",
              lineHeight: "normal",
              textAlign: "center",
              marginTop: "25px",
            }}
            className="text-white text-xl"
          >
            Need roofing support in Northern North Carolina or the Richmond,
            Virginia area? We’re glad you found Michael at Peak Roofing
            Solutions. We upgrade homes with top-tier roofing materials and
            reliable installations – all while providing clear communication,
            high-quality workmanship, and polished professionalism. And we have
            the 5-star reviews to prove it!
          </div>

          {/* 1 OF 3 DIVS SHOWING AWARDS */}
          <div
            style={{
              width: "400px",
              height: "50px",
              backgroundColor: "white",
              borderRadius: "50px", // Curves only the left and right sides
              boxShadow:
                "0px 3px 2px 0px rgba(0,0,0,.02), 0px 6px 5px 0px rgba(0,0,0,.03), 0px 12px 10px 0px rgba(0,0,0,.04), 0px 22px 18px 0px rgba(0,0,0,.04), 0px 42px 33px 0px rgba(0,0,0,.05), 0px 100px 80px 0px rgba(0,0,0,.07)",
              margin: "0 auto", // Center the div
              marginTop: "20px", // Space out the divs
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            A+ Rated by BBB
          </div>
          {/* 2 OF 3 DIVS SHOWING AWARDS */}
          <div
            style={{
              width: "400px",
              height: "50px",
              backgroundColor: "white",
              borderRadius: "50px", // Curves only the left and right sides
              boxShadow:
                "0px 3px 2px 0px rgba(0,0,0,.02), 0px 6px 5px 0px rgba(0,0,0,.03), 0px 12px 10px 0px rgba(0,0,0,.04), 0px 22px 18px 0px rgba(0,0,0,.04), 0px 42px 33px 0px rgba(0,0,0,.05), 0px 100px 80px 0px rgba(0,0,0,.07)",
              margin: "0 auto", // Center the div
              marginTop: "20px", // Space out the divs
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            10+ Years of Experience
          </div>
          {/* 1 OF 3 DIVS SHOWING AWARDS */}
          <div
            style={{
              width: "400px",
              height: "50px",
              backgroundColor: "white",
              borderRadius: "50px", // Curves only the left and right sides
              boxShadow:
                "0px 3px 2px 0px rgba(0,0,0,.02), 0px 6px 5px 0px rgba(0,0,0,.03), 0px 12px 10px 0px rgba(0,0,0,.04), 0px 22px 18px 0px rgba(0,0,0,.04), 0px 42px 33px 0px rgba(0,0,0,.05), 0px 100px 80px 0px rgba(0,0,0,.07)",
              margin: "0 auto", // Center the div
              marginTop: "20px", // Space out the divs
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Complimentary roof inspections
          </div>
        </div>

        {/* New Column Div LIGHT GREY AREA BELOW PHOTO */}
        <div
          style={{
            border: "2px solid green", // Set border color to light grey
            padding: "16px",
            marginTop: "220px", // Space out the divs
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "50vh",
            backgroundColor: "#f5f5f5", // Lighter grey background
            position: "relative",
          }}
        >
          {/* USERINPUTFORM */}
          {/* <div
            className="w-[460px] h-[460px] border-[8px] border-pink-500 bg-white absolute -top-[140px] left-1/2 transform -translate-x-1/2"
            style={{
              borderImage: "linear-gradient(to right, #ff0066, #ff6600) 1",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            }}
          >
            <h3 className="absolute top-[9%] transform -translate-y-[22%] text-[2rem] font-[990] text-[#333] w-full text-center">
              LET'S GET STARTED
            </h3>
          </div>*/}
        </div> 

        {/* New Column Div (WHITE AREA) *HOLDING REVIEWS* BELOW LIGHT GREY*/}
        <div
          className="w-screen h-screen bg-white flex flex-col justify-center items-center border-2 border-black"
          style={{ marginTop: "340px" }}
        >
          {/* DIV HOLDING "5STAR SERVICE" <h3> TAG */}
          <div
            className="h-1/6 w-full bg-white border-yellow-500 border-2 pt-12"
            style={{ position: "sticky", top: "0", marginTop: "-35rem" }}
          >
            <h3 className="text-center sm:text-left sm:pl-8 py-[0.25rem] text-3xl sm:text-5xl font-black text-gray-800">
              5-STAR SERVICE EVERY TIME
            </h3>
          </div>
          {/* DIV HOLDING REVIEWS */}
          <div className="h-[50rem] w-full bg-white border-blue-500 border-2 flex flex-wrap justify-around items-center py-8 sm:py-16 lg:flex-row lg:flex-nowrap">
            {/* BOX NUMBER ONE FOR REVIEWS */}
            <div className="w-[100%] md:w-[30%] h-[25%] sm:h-[20%] md:h-[35%] lg:h-[50%] sm:mt-[-10rem] md:mt-[-27rem] bg-gray-200 flex flex-col justify-center items-center text-center rounded shadow-lg px-4 md:px-15 py-2 md:py-4 mb-4 md:mb-0">
              <div className="h-[95%] w-full  border-pink-500 border-2">
                <header className="h-[35%] w-full border-green-500 border-2 rounded flex items-center">
                  <Image
                    src="/happyfamilycustomer.jpeg"
                    alt="Happy family customer photo"
                    width={70}
                    height={70}
                    className="rounded-lg"
                  />
                  <div className="ml-4">
                    <span className="font-black text-3xl text-black text-left ml-[-1.5rem]">
                      ANITA S.
                    </span>
                    <span className="block text-lg text-gray-600 text-left ml-[.1rem]">
                      (GOOGLE LOGO)
                    </span>
                  </div>
                </header>
                <div className="h-[60%] w-full border-blue-700 border-2 rounded mt-2 overflow-auto">
                  <p className="text-left text-black text-[15px] font-satoshi font-normal leading-[28.5px] overflow-auto">
                    Michael did a phenomenal job!!! From start to finish, it has
                    been an absolute pleasure working with this company. They
                    made the process seamless and detailed every step of the
                    stages for replacement.
                  </p>
                </div>
              </div>
            </div>

            {/* BOX NUMBER TWO FOR REVIEWS */}
            <div className="w-[100%] md:w-[30%] h-[25%] sm:h-[20%] md:h-[35%] lg:h-[50%] sm:mt-[-10rem] md:mt-[-27rem] bg-gray-200 flex justify-center items-center text-center rounded shadow-lg px-4 md:px-15 py-2 md:py-4 mb-4 md:mb-0">
              <div className="h-[100%] md:h-[95%] w-full  border-pink-500 border-2">
                <header className="h-[35%] w-full border-green-500 border-2 rounded flex items-center">
                  <Image
                    src="/happyfemalecustomer.jpeg"
                    alt="Happy female customer photo"
                    width={70}
                    height={70}
                    className="rounded-lg"
                  />
                  <div className="ml-4">
                    <span className="font-black text-3xl text-black ml-4">
                      VERONICA V.
                    </span>
                    <span className="block text-lg text-gray-600 text-left ml-[.1rem]">
                      (GOOGLE LOGO)
                    </span>
                  </div>
                </header>
                <div className="h-[60%] w-full border-blue-700 border-2 rounded mt-2 overflow-auto">
                  <p className="text-left text-black text-[15px] font-satoshi font-normal leading-[28.5px] overflow-auto">
                    Peak Roofing solutions did an excellent job. Great
                    communication. My roof looks beautiful and they even cleaned
                    out all the junk I had in my yard! Lol 10/10 recommend.
                  </p>
                </div>
              </div>
            </div>

            {/* BOX NUMBER THREE FOR REVIEWS */}
            <div className="w-[100%] md:w-[30%] h-[25%] sm:h-[20%] md:h-[35%] lg:h-[50%] sm:mt-[-10rem] md:mt-[-27rem] bg-gray-200 flex justify-center items-center text-center rounded shadow-lg px-4 md:px-15 py-2 md:py-4 mb-4 md:mb-0">
              <div className="h-[95%] w-full  border-pink-500 border-2">
                <header className="h-[35%] w-full border-green-500 border-2 rounded flex items-center">
                  <Image
                    src="/HappyCustomer.jpeg"
                    alt="Happy customer photo"
                    width={70}
                    height={70}
                    className="rounded-lg"
                  />
                  <div className="ml-4">
                    <span className="font-black text-3xl text-black text-left ml-[-1.5rem]">
                      ERIC H.
                    </span>
                    <span className="block text-lg text-gray-600 text-left ml-[.1rem]">
                      (GOOGLE LOGO)
                    </span>
                  </div>
                </header>
                <div className="h-[60%] w-full border-blue-700 border-2 rounded mt-2 overflow-auto">
                  <p className="text-left text-black text-[15px] font-satoshi font-normal leading-[28.5px] overflow-auto">
                    Communication was another strong point; the team kept me
                    informed throughout the project, addressing any questions or
                    concerns promptly. It was clear that they valued my input
                    and strived to ensure my complete satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className="w-full p-4 flex flex-col items-center justify-center"
          id="services"
          style={{
            background: "linear-gradient(to right, #ff0066, #ff6600)",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            border: "4px solid blue",
          }}
        >
          <header className="h-[30%] w-full border-black border-2 px-4 py-6">
            <div className="h-[2rem]"></div>
            <h2 className="our-detailed-services text-4xl md:text-6xl font-black text-center text-black">
              Our Detailed Services
            </h2>
            <div className="flex justify-center">
              {/* SERVICES BUTTON AND ARROW */}
              <a
                href="/services"
                className="mt-4 px-8 py-3 bg-black text-white rounded-md shadow-lg hover:bg-white hover:text-black text-lg md:text-2xl flex items-center"
              >
                See all services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </header>
          <div className="flex flex-col md:flex-row justify-center">
            {/* DIV CONTAINING RESIDENTIAL ROOFING */}
            <div
              className="h-[70%] w-full md:w-[45%] border-black border-2 md:mr-4 shadow-md mb-6"
              style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,1)" }}
            >
              <picture className="h-[325px] flex items-center justify-center">
                {/* Add your image sources here */}
                <source srcSet="image1.webp" type="image/webp" />
                <img
                  src="image1.jpg"
                  alt="Description"
                  className="w-full h-full object-cover"
                />
              </picture>
              <div
                className="h-[25%] flex items-center justify-center border-black border-2 bg-white"
                style={{ height: "auto" }}
              >
                <h1 className="text-2xl font-black">RESIDENTIAL ROOFING</h1>
              </div>
            </div>
            {/* DIV CONTAINING COMMERCIAL ROOFING */}
            <div
              className="h-[70%] w-full md:w-[45%] border-black border-2 md:mr-4 shadow-md mb-6"
              style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,1)" }}
            >
              <picture className="h-[325px] flex items-center justify-center">
                {/* Add your image sources here */}
                <source srcSet="image2.webp" type="image/webp" />
                <img
                  src="image2.jpg"
                  alt="Description"
                  className="w-full h-full object-cover"
                />
              </picture>
              <div
                className="h-[25%] flex items-center justify-center border-black border-2 bg-white"
                style={{ height: "auto" }}
              >
                <h1 className="text-2xl font-black">COMMERCIAL ROOFING</h1>
              </div>
            </div>
            {/* DIV CONTAINING "METAL ROOFS" */}
            <div
              className="h-[70%] w-full md:w-[45%] border-black border-2 md:mr-4 shadow-md mb-6"
              style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,1)" }}
            >
              <picture className="h-[325px] flex items-center justify-center">
                {/* Add your image sources here */}
                <source srcSet="image3.webp" type="image/webp" />
                <img
                  src="image3.jpg"
                  alt="Description"
                  className="w-full h-full object-cover"
                />
              </picture>
              <div
                className="h-[25%] flex items-center justify-center border-black border-2 bg-white"
                style={{ height: "auto" }}
              >
                <h1 className="text-2xl font-black"> METAL ROOFING </h1>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION CONTAINING FAMILY PHOTO AND MICHEAL'S COMMITMENT */}
        <section className="bg-white w-full h-screen">
          {/* IMAGE AND COMMITMENT TO CUSTOMER  */}
          <div className="w-screen border-black border-6 h-[100%] relative">
            <div className="h-[70%] w-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <p className="text-2xl font-black">IMAGE PLACEHOLDER</p>
            </div>
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[80%] h-auto bg-white border-t border-red-500 border-2 flex flex-col items-center justify-center mb-16">
              <div className="h-[70%] w-full bg-white border-t border-black border-2 flex flex-col items-center justify-center mb-[45px] py-[21px] px-[37px]">
                <h2 className="text-xl font-bold mb-4 mt-4 text-black">
                  COMMITED TO SATISFACTION
                </h2>
                <p className="text-base text-center text-black mt-2">
                  "At Peak Roofing, we believe in striving for greatness. Owner
                  Michael and our team focus on exceptional service, customized
                  solutions, and transparent communication to ensure our clients
                  never experience mediocrity."
                </p>
                <h2 className="font-bold mt-4 text-black">- MICHEAL, OWNER</h2>
              </div>
              <div className=" border-black border-2">SIGNATURE HERE</div>
            </div>
          </div>
        </section>
        {/* SECTION CONTAINING SERVICE AREAS AND MAP */}
        <div className="container">
          <section className="bg-white border-4 border-orange-500 w-full h-[120vh]">
            <div className="border-4 h-full w-full border-purple-500 px-4 py-4 ">
              {/* First Div */}
              <div className="w-full h-1/6 flex justify-center items-center">
                <header
                  className="font-bold text-black text-center"
                  style={{ fontWeight: 900, fontSize: "1.575rem" }}
                >
                  FROM THE TRIANGLE TO THE BEACHES: WE'RE PROUD TO SERVE YOU
                </header>
              </div>
              {/* Second Div */}
              <div className="w-full h-1/4 flex justify-center items-center overflow-hidden rounded-3xl shadow-[#00000052]  shadow-[0_32px_96px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19654.867600071513!2d-78.48073301618705!3d35.656222208386374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac68842aab9627%3A0x462a2985a25b93a2!2sW%20Main%20St%2C%20North%20Carolina%2027520!5e0!3m2!1sen!2sus!4v1738187167027!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen={true}
                ></iframe>
              </div>
              {/* Third Div */}
              <div className="w-full h-1/2 flex flex-col md:flex-row justify-center items-center">
                {/* NORTH CAROLINA SERVICE AREAS */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
                  <header
                    style={{
                      color: "black",
                      fontSize: "2.5rem",
                      fontWeight: 550,
                    }}
                  >
                    NORTH CAROLINA
                  </header>
                  <div className="w-full h-[60%] flex flex-wrap justify-center items-center mt-[35px]">
                    <ul className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 py-1 text-center">
                      <li className="text-black">Clayton, NC</li>
                      <li className="text-black">Durham, NC</li>
                      <li className="text-black">Garner, NC</li>
                      <li className="text-black">Knightdale, NC</li>
                      <li className="text-black">Raleigh, NC</li>
                      <li className="text-black">Wendell, NC</li>
                      <li className="text-black">Zebulon, NC</li>
                      <li className="text-black">Rolesville, NC</li>
                      <li className="text-black">Wake Forest, NC</li>
                      <li className="text-black">Chapel Hill, NC</li>
                      <li className="text-black">Cary, NC</li>
                      <li className="text-black">Morrisville, NC</li>
                      <li className="text-black">Holly Springs, NC</li>
                      <li className="text-black">Fuquay-Varina, NC</li>
                      <li className="text-black">Angier, NC</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer></Footer>
        
      </div>
    </div>
  );
}
