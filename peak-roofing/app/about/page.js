"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function about() {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <Header />
      <div
        style={{
          width: "100%",
          height: "auto",
          background: "linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)",
        }}
      >
        <div className="relative w-full h-[60vh] overflow-hidden border-8 border-[#b76e79]">
          <img
            src="/Wife&Kid.png"
            className="absolute w-full h-full object-cover object-[center_50%] filter blur-sm"
            alt="Wife and Kid"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-6xl font-bold uppercase w-[100%]"
            style={{}}
          >
            FOCUSED & INTENTIONAL <u>FAMILY</u>
          </div>
        </div>
      </div>
      {/* DIV CONTAINING THE IMAGE AND BIO OF PEAK  */}
      <div
        style={{ height: "auto" }}
        className="bg-white text-black flex flex-col sm:flex-row"
      >
        {/*1st DIV THAT CONTAINS IMAGE IN ABOUT*/}
        <div className="flex-1  flex flex-col">
          <div className="pt-10 flex items-center justify-center mb-10">
            <Image
              src="/Micheal-Signature.png"
              alt="Micheal's Signature"
              width={200}
              height={63}
              className="mr-2"
              style={{ marginBottom: "-120px" }}
            />
            <h3 className="font-bold px-2 ml-[-10px] text-gray-300">
              Micheal, Owner
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              paddingLeft: "40px",
              paddingRight: "40px",
              marginBottom: "40px",
            }}
          >
            "I’ve been in the roofing industry for over 10 years, and during
            that time I’ve gained extensive experience in adjuster meetings,
            navigating insurance claims (including those that can or should be
            overturned), and guiding homeowners through those complex processes.
            I know how to respectfully advocate for homeowners and represent
            them in both active and previously denied insurance claims. I’m not
            a fan of the typical sales pitch. I’ve built my business on
            transparency and educating homeowners about their insurance policies
            and procedures. People pay a lot of money to insurance companies,
            and they deserve (within reason) what they’ve paid for. My job is to
            help make that happen. While I can’t promise I’ll win every case, I
            can promise I’ll work hard and give it everything I’ve got."
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/">
              <button
                style={{
                  marginBottom: "26px",
                  width: "fit-content",
                  border: "2px solid #b76e79",
                }}
                className="bg-gradient-to-r from-[#b36e77] via-[#a7838a] to-[#d2947d] text-white py-4 px-8 rounded-full text-xl font-black"
              >
                Meet The Family
              </button>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/Family-Photo.png"
            className="w-full h-full object-cover"
            alt="Family Photo"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

