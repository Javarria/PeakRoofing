"use client";
import Header from "../components/Header";
import Footer from "../components/Footer"
export default function FAQ() {


    return(
        <div>
           <Header/>
           <div style={{ height: "28vh", width: "100vw", background: "linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)" }}>
                <div style={{ height: "28vh", width: "100vw", position: "relative" }}>
                    <div className="text-[4.5rem] font-[900] lg:text-center" style={{ position: "absolute", bottom: "1.5rem", left: "3rem" }}>FAQS
                    </div>
                </div>
            </div>
    
            <div className="container flex flex-col">
                <div className="bg-white h-auto w-full  flex justify-center items-center px-4 py-12 xl:px-64 lg:px-64 md:px-4 sm:px-4 xs:px-4">
                    <div className="h-full w-full  mb-20">
                        <h1 className="w-full text-center text-3xl font-semibold text-black mt-8 mb-2">Frequently Asked Questions</h1>
                        <div className="h-1 bg-gradient-to-r from-[#b76e79] via-[#bb9a97] to-[#e4c1c1] mb-8"></div>
                        <ul className="h-full w-full grid grid-cols-1">
                            
                            <li className="h-auto ">
                                <h2 className="text-2xl text-black font-thin font-sans mt-8" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>Why Do Other Homeowners Choose Peak?</h2>
                                <p className="text-black text-thin font-sans mt-4" style={{ fontWeight: 300 }}>Because we fight for our customers when others won’t. Peak has one of the best records for getting insurance claims approved — even after they’ve been denied. While most roofers stop at the first “no,” we do everything insurers ask to get your full replacement approved. We don’t give up, and that’s why homeowners choose us. </p>
e                            </li>

                            <li className="h-auto">
                                <h2 className="text-2xl text-black font-thin font-sans mt-8" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>Is Peak Locally Owned And Operated?</h2>
                                <p className="text-black font-thin font-sans mt-4" style={{ fontWeight: 300}}>YES! - Peak is proudly locally owned and operated. While many insurance-focused roofing companies are national chains chasing volume, we’re rooted in the community and focused on building real relationships. There may be more money in doing it their way, but we care more about delivering high-quality work and personal service to every customer we serve.</p>
                            </li>

                            <li className="h-auto ">
                                <h2 className="text-2xl text-black font-thin font-sans mt-8" style={{fontWeight: 500, letterSpacing: "0.1em" }}>How Does Peak have such a high sucess rate when it comes to insurance claim?</h2>
                                <p className="text-black font-thin font-sans mt-4" style={{fontWeight: 300}}>The owner of Peak has spent the last decade learning the inner workings of insurance companies directly from industry insiders. Using that knowledge, he developed a proven method that helps us turn full denials into full approvals. That’s why our success rate is one of the highest in the industry — we know how to work the process better than anyone else.</p>
                            </li>

                            <li className="h-auto">
                                <h2 className="text-2xl text-black font-thin font-sans mt-8" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>Can I Speak To Previous Customers?</h2>
                                <p className="text-black text-thin font-sans mt-4" style={{ fontWeight: 300 }}>
                                    <strong>Absolutely</strong> — and we encourage it. At Peak, we have no sleezy salesmen. Our business grows through homeowners sharing their positive experiences with others. That’s why we’re more than happy to connect you with past customers so you can hear firsthand what it’s like to work with us.
                                </p>
                            </li>

                            <li className="h-auto">
                                <h2 className="text-2xl text-black font-thin font-sans mt-8" style={{  fontWeight: 500, letterSpacing: "0.1em" }}>What Can I Expect From The Roofing Process?</h2>
                                <p className="text-black font-thin font-sans mt-4" style={{ fontWeight: 300 }}>We start by assessing your roof and identifying the damage. Then we help file your insurance claim and attend the inspection to ensure everything is properly documented. Once approved, we take the time to understand the look you want for your home and present you with different options to choose from. We then schedule your project and make sure you’re fully satisfied with the result. Our goal is to keep the relationship strong so you always feel comfortable reaching out.</p>
                            </li>

                            <li className="h-auto ">
                                <h2 className="text-2xl text-black font-thin font-sans mt-8" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>Can you work with my insurance provider?</h2>
                                <p className="text-black font-thin font-sans mt-4" style={{  fontWeight: 300 }}>Yes, we work with all insurance companies. While some are harder to work with than others, we never shy away. If your provider has a reputation for being difficult, we take every necessary step to make sure your claim is handled properly and you get a full replacement whenever possible.</p>
                            </li>

                            <li className="h-auto ">
                                <h2 className="text-2xl text-black font-thin font-sans mt-8" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>How Much Does a Roof Replacement Cost When Working With Peak?</h2>
                                <p className="text-black font-thin font-sans mt-4" style={{ fontWeight: 300 }}>On average, our customers spend between $500 and $2,000 out of pocket for a new roof. While this might sound too good to be true, we assure you it’s the reality for all of our clients — and we have the references to prove it. This opportunity is available with many companies, but most don’t take advantage of it because it requires a lot of legwork on the roofing company’s part. At Peak, we’re committed to doing whatever it takes to get you the best possible outcome. </p>
                            </li>

                            <li className="h-auto ">
                                <h2 className="text-2xl text-black font-thin font-sans mt-8" style={{fontWeight: 500, letterSpacing: "0.1em" }}>What’s the return on investment (ROI) for a new roof?</h2>
                                <p className="text-black font-thin font-sans mt-4" style={{ fontWeight: 300 }}>On average, a new roof can add 70% to 80% of its total cost to your home’s value. So if we install a $40,000 roof, it could add over $30,000 in market value. That’s not including the money you might save on energy bills or the peace of mind and smoother negotiations if you ever decide to sell your home.</p>
                            </li>

                            <li style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "80px 0"}}>
                            <a href="/" className="bg-gradient-to-r from-[#b36e77] via-[#a7838a] to-[#d2947d] h-16 w-48 rounded-full flex items-center justify-center font-bold hover:border-2 hover:border-[#c66e6e] hover:bg-clip-text hover:bg-gradient-to-r hover:text-transparent hover:from-[#b36e77] hover:via-[#a7838a] hover:to-[#d2947d]" style={{fontWeight: 900, alignItems: "center", justifyContent: "center"}}>
                                Ask YOUR Question
                            </a>
                            {/* <p className="text-white text-sm font-bold border-black border-2" style={{fontWeight: 900, textAlign: "center"}}>Ask Us Your Question</p> */}
                            
                            

                            </li>





                        </ul>
                </div>
       
            </div>

        </div>
        <Footer/>
        </div>
    )
}