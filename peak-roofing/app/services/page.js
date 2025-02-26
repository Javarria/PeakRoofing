import Image from "next/image"
import Header from "../components/Header"
import UserInputForm from "../components/UserInputForm"
import Footer from "../components/Footer"




export default function services(){


    return(
    <div>
    <Header/>
    <section className="bg-black min-h-screen" style={{width: "100vw"}}>
        {/* DIV HOLDING TEXT AND USERINPUTFORM */}
        <div className="container">
            <div className="pt-14 border-8 border-orange-500" style={{width: "100vw", height: "fit-content"}}>
                <div className="border-2 border-white" style={{width: "100%"}}>
                    {/* HEADER */}
                    <header className="flex justify-center sm:justify-start" style={{width: "100%"}}>
                        <h1 className="font-bold text-4xl sm:text-5xl" style={{textAlign: "center", fontWeight: "700"}}>
                            ROOFING SOLUTIONS TO IMPROVE YOUR HOME AND LIFE 
                        </h1>
                    </header>
                    {/* BODY OF TEXT */}
                    <div className="" style={{width: "100%"}}>
                        <h3 className="font-bold text-sm sm:text-sm" style={{textAlign: "center", fontWeight: "1000"}}>
                        Leave your next roofing project to Peak Roofing so you can focus on what matters most, instead of worrying about your roof. At Peak Roofing, we are committed to providing top-quality roofing services to homeowners in North Carolina and Virginia, offering reliable roofing solutions and durable roofing products. <br />
                        <br/>Whether you're dealing with storm damage roof repairs or need a complete roof replacement, we’ll guide you through every step to ensure you make informed decisions that suit both your home and budget.
                        </h3>
                    </div>
                    {/* BENIFITS DIV */}
                    <div className= "pt-3" style={{width: "100%"}}>
                        
                    <div className="bg-white shadow-md rounded-full w-[55vh] h-[6vh] flex justify-center items-center font-bold text-gray-800 mx-auto mt-2">
                        A+ Rated by BBB
                    </div>
                    {/* 2 OF 3 DIVS SHOWING AWARDS */}
                    <div className="bg-white shadow-md rounded-full w-[55vh] h-[6vh] flex justify-center items-center font-bold text-gray-800 mx-auto mt-2">
                        GAF Product User
                    </div>
                    {/* 1 OF 3 DIVS SHOWING AWARDS */}
                    <div className="bg-white shadow-md rounded-full w-[55vh] h-[6vh] flex justify-center items-center font-bold text-gray-800 mx-auto mt-2">
                        Warranty On Shingles & Labor
                    </div>
                    </div>
                </div>
                {/* DIV CONTAINING USERINPUTFORM */}
                <div className="border-2 border-orange-500 flex justify-center items-center" style={{width: "100%", height: "auto"}}>
                    <UserInputForm/>
                </div>
            </div>
        </div>
    </section>
    {/* SECTION CONTAINING RESIDENTIAL ROOFING INFO WITHOUT INSURANCE */}
    <section className="bg-white px-4 py-9" style={{width: "100vw"}}>
        <div className="container w-full h-screen">
            <div style={{ width: "100%", border: "2px solid red" }}>
                <div className="" style={{width: "100%", height: "35%", padding: "0.25rem", border: "2px solid black"}}>
                        <img src="/RoseGoldBackground.jpeg" alt="Rose Gold Background Photo" className="bg-no-repeat bg-cover" style={{objectFit: "cover", height: "200px",width: "100%", borderRadius: "19px", border: "3px solid hotpink"}} />
                </div>
                <div style={{ width: "100%", height: "fit-content", border: "2px solid orange" }}>
                    <header style={{height: "50%", border: "2px solid blue", padding: "1rem"}}>
                        <h1 style={{fontSize: "2.8rem", lineHeight: "1.5",fontWeight:'900', textAlign: "center", color: "hotpink"}}>
                            RESIDENTIAL ROOFING 
                        </h1>
                        <div style={{ margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", width: "fit-content", borderRadius: "20px", padding: "0.5rem", backgroundColor: "white", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}>
                            <h3 style={{ fontWeight: "700", color: "hotpink", textAlign: "center" }}>
                                Through insurance
                            </h3>
                        </div>
                    </header>
                    <div className="border border-black p-4" style={{ height: "fit-content" }}>
                        <p style={{color: "hotpink", textAlign: "center"}}>
                            We pride ourselves in educating homeowners on there policy so that homeowners can make the most of every dollar they have invested into there insurance company. With over a decade handiling insurance claims. you can trust peakroofing to fight for you and get you a 95% discount on your roof
                        </p>

                        <p style={{color: "hotpink", textAlign: "center"}}>We have 5-star reputation for how we continually respectfully advocate and represent homeowners against insurance companies on existing claims and previously denied claims</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* RESIDENTIAL ROOFING WITHOUT INSURANCE */}
    <section className= "px-4 py-9 pb-24" style={{backgroundColor: "black", width: "100vw", height: "113vh"}}>
    <div className="container w-full h-screen">
            <div style={{ width: "100%", border: "2px solid red" }}>
                <div className="" style={{width: "100%", height: "35%", padding: "0.25rem", border: "2px solid black"}}>
                        <img src="/RoseGoldBackground.jpeg" alt="Rose Gold Background Photo" className="bg-no-repeat bg-cover" style={{objectFit: "cover", height: "200px",width: "100%", borderRadius: "19px", border: "3px solid hotpink"}} />
                </div>
                <div style={{ width: "100%", height: "fit-content", border: "2px solid orange" }}>
                    <header style={{height: "50%", border: "2px solid blue", padding: "1rem"}}>
                        <h1 style={{fontSize: "2.8rem", lineHeight: "1.5",fontWeight:'900', textAlign: "center", color: "hotpink"}}>
                            RESIDENTIAL ROOFING
                        </h1>
                        <div style={{ margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", width: "fit-content", borderRadius: "20px", padding: "0.5rem", backgroundColor: "hotpink", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}>
                            <h3 style={{ fontWeight: "700", color: "white", textAlign: "center" }}>
                            Out-of-Pocket Payments
                            </h3>
                        </div>
                    </header>
                    <div className="border border-black p-4" style={{ height: "fit-content" }}>
                        <p style={{color: "hotpink", textAlign: "center"}}>
                            At Peak Roofing, we take pride in our commitment to submitting only genuine storm damage claims to insurance companies. While we encourage homeowners to file claims for storm damage, we acknowledge that not every case will result in an insurance claim. Regardless of the situation, our dedication to top-notch customer service and communication remains unwavering. We understand each individual's circumstances and strive to offer the best possible experience for all our customers, whether they are filing an insurance claim or paying out of pocket for our services.
                        </p>
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
