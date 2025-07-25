import Image from "next/image"
import Header from "../components/Header"
import UserInputForm from "../components/UserInputForm"
import Footer from "../components/Footer"




export default function services(){


    return(
    <div>
    <Header/>
    <section className="bg-white min-h-screen" style={{width: "100vw"}}>
        {/* DIV HOLDING TEXT AND USERINPUTFORM */}
        <div className="container">
            <div className="pt-14 " style={{width: "100vw", height: "fit-content"}}>
                <div className="border-2 border-white" style={{width: "100%"}}>
                    {/* HEADER */}
                    <header className="flex justify-center sm:justify-start" style={{width: "100%"}}>
                        <h1 className="font-bold text-4xl sm:text-5xl" style={{textAlign: "center", fontWeight: "800", background: "linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
                            ROOFING SOLUTIONS TO IMPROVE YOUR HOME AND LIFE 
                        </h1>
                    </header>
                    {/* BODY OF TEXT */}
                    <div className="" style={{width: "100%"}}>
                        <h3 className="font-bold text-sm sm:text-sm text-black" style={{textAlign: "center", fontWeight: "1000"}}>
                        <br />Whether you're dealing with storm damage roof repairs or need a complete roof replacement, we'll guide you through every step to ensure you make informed decisions that suit both your home and budget.
                        </h3>
                    </div>
                    {/* BENIFITS DIV */}



                {/* DIV HOLDING THREE STATS OF PEAK ROOFING */}
                <div className="flex flex-col justify-center items-center lg:items-center mb-10">
                <div className="w-[400px] h-[55px] bg-white rounded-full shadow-lg flex justify-start items-center font-bold text-gray-800 px-1 my-3 gap-2 border border-[#c66e6e] md:w-[458px] lg:w-[458px]">
                  <div className="bg-white rounded-full w-[42px] h-[42px] flex justify-center items-center shadow-sm shadow-black/50">
                    <Image
                      src="/BBB-Rose-gold-logo.png"
                      alt="BBB Rose Gold Logo"
                      width={35}
                      height={35}
                      />
                  </div>
                  <span className="flex-[.90] items-center justify-center text-center text-transparent bg-clip-text bg-gradient-to-r from-[#a05f68] via-[#a17a82] to-[#be7e66]" style={{ fontSize: '20px', fontWeight: 700 }}>A+ Rated by BBB</span>
                </div>
                {/* 2 OF 3 DIVS SHOWING AWARDS */}
                <div className="w-[400px] h-[55px] bg-white rounded-full shadow-lg flex justify-start items-center font-bold text-gray-800 px-1 my-3 gap-2 border border-[#c66e6e] md:w-[458px] lg:w-[458px]">
                  <div className="bg-white rounded-full w-[42px] h-[42px] flex justify-center items-center shadow-lg shadow-black/50">
                    <Image
                      src="/Thumbs-up-Rose-Gold.png"
                      alt="Thumbs-up Rose Gold Logo"
                      width={30} // specify the width
                      height={30} // specify the height
                      />
                  </div>
                  <span className="flex-[.90] items-center justify-center text-center text-transparent bg-clip-text bg-gradient-to-r from-[#a05f68] via-[#a17a82] to-[#be7e66]" style={{ fontSize: '20px', fontWeight: 700 }}>10+ Years of Industry Experience</span>

                </div>
                {/* 3 OF 3 DIVS SHOWING AWARDS */}
                <div className="w-[400px] h-[55px] bg-white rounded-full shadow-lg flex justify-start items-center font-bold text-gray-800 my-3 px-1 gap-2 border border-[#c66e6e] md:w-[458px] lg:w-[458px]">
                  <div className="bg-white rounded-full w-[42px] h-[42px] flex justify-center items-center shadow-lg shadow-black/50">
                    <Image
                      src="/Home-Inspection-Rose-Gold.png"
                      alt="Home Inspection Rose Gold Logo"
                      width={28} // specify the width
                      height={28} // specify the height
                      />
                  </div>
                  <span className="flex-[.90] items-center justify-center text-center text-transparent bg-clip-text bg-gradient-to-r from-[#a05f68] via-[#a17a82] to-[#be7e66]" style={{ fontSize: '20px', fontWeight: 700 }}>Complimentary roof inspections</span>
                </div>
               </div>
            </div> 


                {/* DIV CONTAINING USERINPUTFORM */}
                <div className="flex justify-center items-center" style={{width: "100%", height: "auto"}}>
                    <UserInputForm/>
                </div>
            </div>
        </div>
    </section>


    {/* SECTION CONTAINING RESIDENTIAL ROOFING INFO WITHOUT & WITH INSURANCE */}
    <section className="bg-white px-4 py-9" style={{width: "100vw", height: "auto"}}>
        <div className="container w-full h-auto">
            <div style={{ width: "100%"}}>
            
                <div className="" style={{width: "100%", height: "20%", padding: "1rem 0"}}>



                    <img src="/Services-Roofing-Picture.png" alt="Services Roofing Picture Photo" className="bg-no-repeat bg-cover w-[95vh] h-auto rounded-lg border-4  border-[#c66e6e] mx-auto" />

                </div>
                <div style={{ width: "100%", height: "fit-content"}}>
                    <header style={{height: "50%", padding: "1rem"}}>
                        <h1 style={{ fontSize: "2.8rem", lineHeight: "1.5", fontWeight: '900', textAlign: "center", background: "linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            ROOFING 
                        </h1>
                        <div style={{ height: "1px", background: "linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)" }}></div>
                    </header>
                    <div className=" p-4 px-0 flex flex-col md:flex-row" style={{ height: "fit-content" }}>
                        {/* CONTAINING "THROUGH INSURANCE" PLAN */}
                        <div className="flex-1 w-full md:w-1/2 p-6 md:border-r-2 sm:border-b-2 md:border-b-0">


                            <div style={{ margin: "0 auto 2rem auto", display: "flex", justifyContent: "center", alignItems: "center", width: "fit-content", borderRadius: "30px", padding: "1rem", background: "linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)", fontSize: "1.5rem",border: "2px solid #c66e6e" }}>
                                <h3 style={{ fontWeight: "900", color: "white", background: "linear-gradient(to right, #b76e79, #bb9a97, #e4c1c1)", WebkitBackgroundClip: "text", backgroundClip: "text", textAlign: "center"  }}>
                                    Through insurance
                                </h3>
                            </div>
                            <p style={{color: "black", textAlign: "center"}}>
                                We pride ourselves in educating homeowners & business owners on there policy so that homeowners can make the most of every dollar they have invested into there insurance company. With over a decade handiling insurance claims. you can trust peak roofing to fight for you and get you a 95% discount on your roof</p>
                            <p style={{color: "black", textAlign: "center"}}>We have 5-star reputation for how we continually respectfully advocate and represent homeowners against insurance companies on existing claims and previously denied claims</p>
                        </div>
                
                         {/* CONTAINING "OUT OF POCKET" PLAN */}
                        <div className="md:w-1/2  p-6">
                            <div style={{ margin: "0 auto 2rem auto", display: "flex", justifyContent: "center", alignItems: "center", width: "fit-content", borderRadius: "30px", padding: "1rem", background: "white", border: "2px solid #c66e6e", fontSize: "1.5rem" }}>
                                <h3 style={{ fontWeight: "900", color: "transparent", background: "linear-gradient(to right, #b76e79, #bb9a97, #e4c1c1)", WebkitBackgroundClip: "text", backgroundClip: "text", textAlign: "center" }}>
                                    Out-of-Pocket Payments
                                </h3>
                            </div>
                            <p style={{textAlign: "center"}} className="text-black">At Peak Roofing, we take pride in our commitment to submitting only genuine storm damage claims to insurance companies. While we encourage homeowners to file claims for storm damage, we acknowledge that not every case will result in an insurance claim. Regardless of the situation, our dedication to top-notch customer service and communication remains unwavering. We understand each individual's circumstances and strive to offer the best possible experience for all our customers, whether they are filing an insurance claim or paying out of pocket for our services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
{/* LINE SEPERATING ROOFING AND GUTTERS */}
    <div style={{ height: "4px", background: "linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)" }}></div>
{/* SECTION CONTAINING GUTTERS INFORMATION */}
    <section className="bg-white px-4 py-9" style={{width: "100vw", height: "auto"}}>
        <div className="container w-full h-auto">
            <div style={{ width: "100%"}}>
                <div className="" style={{width: "100%", height: "35%", padding: "0.25rem"}}>
                        <img src="/Services-Gutter-Photo.png" alt="Services Gutter Photo" className="bg-no-repeat bg-cover w-[95vh] h-auto rounded-lg border-4 border-[#c66e6e] mx-auto" />
                </div>
                <div style={{ width: "100%", height: "fit-content"}}>
                    <header style={{height: "50%", padding: "1rem"}}>
                        <h1 style={{ fontSize: "2.8rem", lineHeight: "1.5", fontWeight: '900', textAlign: "center", background: "linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            GUTTERS 
                        </h1>
                        <div style={{ height: "1px", background: "linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)" }}></div>
                    </header>
                    <div className=" p-4 px-0 flex flex-col md:flex-row" style={{ height: "fit-content" }}>
                        {/* CONTAINING "THROUGH INSURANCE" PLAN */}
                        <div className="flex-1 w-full md:w-1/2 p-4 py-0">
                            <p style={{textAlign: "center", fontWeight: 300, fontSize: "1rem"}} className="text-black">
                                At Peak Roofing, we specialize in gutter installation and gutter repair services that protect your home or commercial property from water damage. A properly installed gutter system is essential for maintaining your roof, foundation, and overall structural integrity. Our experienced team provides custom gutter solutions built to withstand harsh weather and heavy rainfall.
                                We also work closely with homeowners to review their insurance policies and determine if gutter damage qualifies for an insurance claim. With over a decade of experience handling roofing and gutter claims, Peak Roofing has built a trusted reputation for helping property owners get the coverage they deserve — even on denied or previously overlooked claims.
                                Whether you're replacing old gutters or repairing storm damage, Peak Roofing delivers reliable, long-lasting results. Contact us today for expert gutter installation in Clayton, NC and find out how we can help protect your home from the top down.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


{/* LINE SEPERATING GUTTERS AND SIDING */}
<div style={{ height: "4px", background: "linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)" }}></div>

{/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!SIDING SECTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
    <section className="bg-white px-4 py-9" style={{width: "100vw", height: "auto"}}>
        <div className="container w-full h-auto">
            <div style={{ width: "100%"}}>
                <div className="" style={{width: "100%", height: "35%", padding: "0.25rem"}}>
                        <img src="/Services-Siding-Installation-Picture.png" alt="Siding Installation Picture" className="block w-[95vh] h-auto rounded-lg mx-auto border-4 border-[#c66e6e]" />
                </div>
                <div style={{ width: "100%", height: "fit-content"}}>
                    <header style={{height: "50%", padding: "1rem"}}>
                        <h1 style={{ fontSize: "2.8rem", lineHeight: "1.5", fontWeight: '900', textAlign: "center", background: "linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            SIDING 
                        </h1>
                        <div style={{ height: "1px", background: "linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)" }}></div>
                    </header>
                    <div className=" p-4 px-0 flex flex-col md:flex-row" style={{ height: "fit-content" }}>
                        {/* CONTAINING "THROUGH INSURANCE" PLAN */}
                        <div className="p-4 px-0 py-0 flex flex-col md:flex-row" style={{ height: "fit-content" }}>
                        {/* CONTAINING "THROUGH INSURANCE" PLAN */}
                        <div className="flex-1 w-full md:w-1/2 p-4 py-0">
                            <p style={{textAlign: "center", fontWeight: 300, fontSize: "1rem"}} className="text-black">
                                At Peak Roofing, we specialize in gutter installation and gutter repair services that protect your home or commercial property from water damage. A properly installed gutter system is essential for maintaining your roof, foundation, and overall structural integrity. Our experienced team provides custom gutter solutions built to withstand harsh weather and heavy rainfall. We also work closely with homeowners to review their insurance policies and determine if gutter damage qualifies for an insurance claim. With over a decade of experience handling roofing and gutter claims, Peak Roofing has built a trusted reputation for helping property owners get the coverage they deserve — even on denied or previously overlooked claims. Whether you're replacing old gutters or repairing storm damage, Peak Roofing delivers reliable, long-lasting results. Contact us today for expert gutter installation in Clayton, NC and find out how we can help protect your home from the top down.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


{/* {SECTION WITH "ENJOY A NO-SUPRISES PROJECT"} */}
    <section className='rose-gold-section pl-3 pr-15 py-14 pb-12' style={{ height: "auto" }}>
        <div className="container w-full" style={{ height: "auto" }}>
            <div style={{height: "8%", width: "100%", margin: "0 auto"}}>
                <header style={{ fontWeight: "900", fontSize: "5vw", textAlign: "left" }}>
                    ENJOY A NO-SUPRISES PROJECT.
                </header>
            </div>
            <div style={{height: "40%", width: "100%", margin: "0 auto", paddingTop: "1rem", paddingBottom: "1rem"}}>
                <p style={{color: "white", textAlign: "left", fontSize: "clamp(1rem, 1vw, 1rem)", fontWeight: "700"}}>
                The average homeowner doesn’t know the ins and outs of what it takes to replace a roof. That’s why we take the time to walk you through what to expect — from available shingle and metal roof colors to timelines and everything in between. It’s our goal to set clear expectations and ensure there’s no room for error.
                </p>
            </div>
            <div style={{ height: "50%", paddingTop: "1.5rem", paddingBottom: "1.5rem", textAlign: "left" }}>
                <button className="inline-flex items-center px-6 py-3 rounded-full font-semibold border-2  text-white transition duration-300 hover:border-4 hover:shadow-md">
                    <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                        Get Started Today &rarr;
                    </a>
                </button>
            </div>
        </div>
    </section>

    <div className="container">
          <section className="bg-white w-full h-[120vh]">
            <div className=" h-full w-full  px-4 py-4 ">
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
    )
}
