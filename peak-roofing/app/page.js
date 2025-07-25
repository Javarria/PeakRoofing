import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserInputForm from "./components/UserInputForm";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <div className="container ">
        {/* This div pushes the content below the header and image, 
          so the header doesn't overlap with the content.  */}
        <div className=" border-green-600 flex flex-col justify-center items-center h-full">
          {/* PARENT DIV FOR HEADERS  */}
          {/* PARENT DIV FOR HEADERS  */}
          {/* PARENT DIV FOR HEADERS  */}
          <div className="bg-white pt-12 p-4 pl-8 pb-24">
            <div className="flex flex-col lg:flex-row justify-between">
              {/* DIV CONTAINING NAME, BIO AND AWARDS */}
              <div className="p-4 rounded-md flex-1">
                <div className="text-transparent bg-clip-text bg-gradient-to-l from-[#a05e68] via-[#dab3bc] to-[#ad7b69] text-lg font-semibold uppercase border-b-2 border-[#FFC400] mb-8 text-center" style={{ letterSpacing: "2px" }}>
                5-Star Siding, Gutters, & Roofing Services In North Carolina
                </div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#ae6772] via-[#FFD1DC] to-[#cc917c] text-6xl lg:text-9xl font-bold uppercase border-b-2 border-[#FFC400] lg:text-left md:text-center sm:text-center">
                  Peak Roofing
                </div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#ae6772] via-[#d4abb5] to-[#cc917c] text-md font-thin text-left mt-6 mb-6 leading-relaxed leading-8">
                Need roofing support in Northern North Carolina but dreading dealing with unresponsive or disorganized contractors? We’re glad you Michael. At Peak Roofing, we upgrade homes with top-tier materials and expert installations—all while providing clear communication, quality workmanship, and professional service. And our 5-star reviews speak for themselves!
                </div>

                {/* DIV HOLDING THE THREE REWARDS  */}
                <div className="flex flex-col justify-center items-center lg:items-start">
                {/* 1 OF 3 DIVS SHOWING AWARDS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="w-[458px] h-[55px] bg-white rounded-full shadow-lg flex justify-start items-center font-bold text-gray-800 my-3 px-1 gap-2 border border-[#c66e6e] border-black/10">
                  <div className="bg-white rounded-full w-[42px] h-[42px] flex justify-center items-center shadow-sm shadow-black/50 border-[#c66e6e] border">
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
                <div className="w-[458px] h-[55px] bg-white rounded-full shadow-lg flex justify-start items-center font-bold text-gray-800 px-1 my-3 gap-2 border border-[#c66e6e] border-black/10">
                  <div className="bg-white rounded-full w-[42px] h-[42px] flex justify-center items-center shadow-lg shadow-black/50 border-[#c66e6e] border">
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
                <div className="w-[458px] h-[55px] bg-white rounded-full shadow-lg flex justify-start items-center font-bold text-gray-800 my-3 px-1 gap-2 border border-[#c66e6e] border-black/10">
                  <div className="bg-white rounded-full w-[42px] h-[42px] flex justify-center items-center shadow-lg shadow-black/50 border-[#c66e6e] border">
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
              <div className=" p-4 mt-4 lg:mt-0 flex-1 lg:ml-2">
                <UserInputForm />
              </div>
            </div>
          </div>
        </div>

        {/* New Column Div LIGHT GREY AREA BELOW PHOTO */}
        {/* <div className="border-2 border-green-500  flex justify-center items-center w-screen h-[50vh] bg-gray-100 relative">
        </div> */}

        {/* New Column Div (WHITE AREA) *HOLDING REVIEWS* BELOW LIGHT GREY*/}
        <div
          className="w-screen h-10vh bg-gradient-to-r from-[#ae6772] via-[#FFD1DC] to-[#cc917c] flex flex-col justify-center items-center "
        > 
          {/* DIV HOLDING "5STAR SERVICE" <h3> TAG */}
          <div
            className="h-60 w-full bg-gradient-to-r from-[#ae6772] via-[#FFD1DC] to-[#cc917c] text-white font-[900] text-2xl lg:text-6xl md:text-5xl flex justify-center items-center lg:justify-start lg:pl-16 "
          >
            5-STAR SERVICE EVERYTIME
          </div>
          {/* DIV HOLDING REVIEWS */}
          
          <div className="min-h-[20rem] w-full bg-white flex flex-wrap justify-around items-center py-8 pb-4 lg:flex-row lg:flex-nowrap px-4 sm:px-8 lg:px-12">
            {/* BOX NUMBER ONE FOR REVIEWS */}
            <div className="border-[#e4949f] border-2 bg-white rounded-xl p-4 h-auto w-[100%] shadow-md shadow-black/40 mt-4 mb-4 lg:mr-6">
            <header className="h-auto w-full rounded-lg flex items-center">
              <Image
                src="/HappyCustomer.jpeg"
                alt="Happy customer photo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="ml-2 rounded">
                <span className="font-black text-2xl text-black text-left">
                  ERIC H.
                </span>
                <div className="flex items-center  block text-lg text-gray-600 text-left ml-[.1rem]">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAABK0lEQVQYV22RsUvDUBDGfW8REV2EbKK46CBi97oUUVz0b+hikpfdbiVbQToVkhgEERxc1EkcdHAUuruJBTs4ObhIh76kvwst1NAHl+/ed3ffu7uoufFJ03Qry7JTrvvYZp7nWil1jX/p+35X0pR84jg+Au4JLkyKp9BqrTdc1/1SURStcnknuIQNULwAn8Fl+DMEWp7n3RXKqHbkachF2qgGQdCfoV5QKkmSHriONejtXEi4CnBSKvoT5QGq86jWUH0dz1CHuyolW0n+hFzDAmOM9FtW3pVXmOFH2mjj1FBaYaAdpv6dKIZhqB3HeSQm23r6tw2KPgjcgm8UDmnN4B/ja/zDYs+s74CkB9nIjE18k3jDPI0iWY78QWutwd3DtjGNdRFtsucXyRkBPlt7NVoK5VAAAAAASUVORK5CYII="
                    alt="5 star rating"
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAALCAYAAADMQYVZAAAD3UlEQVRIS42WaUhUURTHG0fLghZHs9KCEiIK26gosi9t9qGColzKvliYo6NWBBURNWiSRY0bo45LEEXRYBlWH7OFEtooWgwhEQycBps2S2J0nH5HZuT5fIPvweO9d87/f/73nHvPfdcwTuOqrq7emZOT06TlC4FfPjAw4M7Pz+/Wy6mqqtqRm5t7Ry/ebrev8/v9n/Ly8jx6OaHyMKgD2Gy2iVyd0dHR8ampqT49AiRQZDAYeihUhR58Q0PDZK/X2w4+Tg9eMGiUovEezmU9HIo0E3wrhU1Q40clTXV2AWrk3ohAix4BBtSGQDf4TTrx+8BfBbsazgudHBec5+B36MHX1NTksjLsPp8vkdXxUcnRSvoGgHTucgQOjyVARReGhYW1gfP19/ebCgoKfo/FoUhNJCCDL0bj1Fh4NFahIcXpYwVGsQK9Y3HQaEFjPYmfZLbPjUga50GcVRiNqkC/ILwN2hBtMpvN5ZWVlXFGo7EZzgoN4Tdwgkn/4L3AYrF8oeqHeC8Fry7yd+zvg3GIeYMiOFhtc7E1cy/W0HgF56/YwX8bHBzMQ+MreZzku1iNB9uDTSYleNUPDQLCGh73IEVriPzDfpSEpTBDV0VFxYTw8PAr2NO0Ko7QUwqTmp2d7Qr6SWQD9ltwpmlw+rDlK/s1sLc4sW8LofEwIiJiT1ZWlluhsQUNJxpTNJL/g/0AGs7hytfV1c1mB5Yenq8gyKCTAX7QEqZYpwhUpPJdcrvdx6xW66Cag8Y8WuAxnDkKXxcDTWYJtofQKAF/XOkDX8iYrNj9ag5jWoDtEb6ZCl8Hk7SZAnWKbcRyYzak4RcFwQT3EHy6VnDBgM/gcU01oGwSqNVKIMCR39oshUY3+PhQ+ED7OVQaGXCuh1gBBsbVo1y15PERfGIQP5w0wRMAdgQcTQC38x1OzyTRM60hZkGWUgrYTp7y/1zJ+30ENJckG9Iy9oY3gViydOVPYYSzFM67EBrSdlvBfMbfx/sS3m+Cl8121IXGWjSegZGVJu20WyaXmU4YNdNU5yjOY4D20r8P2HyWSg9yNyJwQh3d6XSO93g8P7A7EbG4XC5vbGzseb4t9LOJfpY+HXGhcYZ4ZvBpaDyh0LIZyiGoFo2zarzD4ZhE0WVDvMzZ4Uhvb6+fPrbxvS8mJsakdY4gZglx0sGkMFkv5VCDnpPvC2iUicbwTDMgK/+0SuWJR0SxHQd8RiOBJAY0g8C3lT5EkhHx0haPNDiFkZGRtszMzJ9BHxpTZQcGP2rnlQFTwCgKdFcZS05aJNHFuF6rNUj6NHtTmfLXWV9fb8K2nzgXBf8fa8YBSNaB/TMAAAAASUVORK5CYII="
                    alt="5 star rating"
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </header>
            <div
              className="p-2 rounded-lg"
              style={{
                lineHeight: "1.7",
                color: "black",
                height: "auto",
                overflow: "hidden",
              }}
            >
              Communication was another strong point; the team kept me informed
              throughout the project, addressing any questions or concerns
              promptly. It was clear that they valued my input and strived to
              ensure my complete satisfaction.
            </div>
          </div>

            {/* BOX NUMBER TWO FOR REVIEWS */}
            <div className="border-2 border-[#e4949f] rounded-xl p-4 h-11rem w-[100%] shadow-md shadow-black/40 mt-4 mb-4 lg:mr-6 ">
            <header className="h-auto w-full rounded-lg flex items-center">
              <Image
                src="/HappyFemaleCustomer.jpeg"
                alt="Happy female customer photo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="ml-2 rounded">
                <span className="font-black text-2xl text-black text-left">
                  VERONICA V.
                </span>
                <div className="flex items-center block text-lg text-gray-600 text-left ml-[.1rem]">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAABK0lEQVQYV22RsUvDUBDGfW8REV2EbKK46CBi97oUUVz0b+hikpfdbiVbQToVkhgEERxc1EkcdHAUuruJBTs4ObhIh76kvwst1NAHl+/ed3ffu7uoufFJ03Qry7JTrvvYZp7nWil1jX/p+35X0pR84jg+Au4JLkyKp9BqrTdc1/1SURStcnknuIQNULwAn8Fl+DMEWp7n3RXKqHbkachF2qgGQdCfoV5QKkmSHriONejtXEi4CnBSKvoT5QGq86jWUH0dz1CHuyolW0n+hFzDAmOM9FtW3pVXmOFH2mjj1FBaYaAdpv6dKIZhqB3HeSQm23r6tw2KPgjcgm8UDmnN4B/ja/zDYs+s74CkB9nIjE18k3jDPI0iWY78QWutwd3DtjGNdRFtsucXyRkBPlt7NVoK5VAAAAAASUVORK5CYII="
                    alt="5 star rating"
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAALCAYAAADMQYVZAAAD3UlEQVRIS42WaUhUURTHG0fLghZHs9KCEiIK26gosi9t9qGColzKvliYo6NWBBURNWiSRY0bo45LEEXRYBlWH7OFEtooWgwhEQycBps2S2J0nH5HZuT5fIPvweO9d87/f/73nHvPfdcwTuOqrq7emZOT06TlC4FfPjAw4M7Pz+/Wy6mqqtqRm5t7Ry/ebrev8/v9n/Ly8jx6OaHyMKgD2Gy2iVyd0dHR8ampqT49AiRQZDAYeihUhR58Q0PDZK/X2w4+Tg9eMGiUovEezmU9HIo0E3wrhU1Q40clTXV2AWrk3ohAix4BBtSGQDf4TTrx+8BfBbsazgudHBec5+B36MHX1NTksjLsPp8vkdXxUcnRSvoGgHTucgQOjyVARReGhYW1gfP19/ebCgoKfo/FoUhNJCCDL0bj1Fh4NFahIcXpYwVGsQK9Y3HQaEFjPYmfZLbPjUga50GcVRiNqkC/ILwN2hBtMpvN5ZWVlXFGo7EZzgoN4Tdwgkn/4L3AYrF8oeqHeC8Fry7yd+zvg3GIeYMiOFhtc7E1cy/W0HgF56/YwX8bHBzMQ+MreZzku1iNB9uDTSYleNUPDQLCGh73IEVriPzDfpSEpTBDV0VFxYTw8PAr2NO0Ko7QUwqTmp2d7Qr6SWQD9ltwpmlw+rDlK/s1sLc4sW8LofEwIiJiT1ZWlluhsQUNJxpTNJL/g/0AGs7hytfV1c1mB5Yenq8gyKCTAX7QEqZYpwhUpPJdcrvdx6xW66Cag8Y8WuAxnDkKXxcDTWYJtofQKAF/XOkDX8iYrNj9ag5jWoDtEb6ZCl8Hk7SZAnWKbcRyYzak4RcFwQT3EHy6VnDBgM/gcU01oGwSqNVKIMCR39oshUY3+PhQ+ED7OVQaGXCuh1gBBsbVo1y15PERfGIQP5w0wRMAdgQcTQC38x1OzyTRM60hZkGWUgrYTp7y/1zJ+30ENJckG9Iy9oY3gViydOVPYYSzFM67EBrSdlvBfMbfx/sS3m+Cl8121IXGWjSegZGVJu20WyaXmU4YNdNU5yjOY4D20r8P2HyWSg9yNyJwQh3d6XSO93g8P7A7EbG4XC5vbGzseb4t9LOJfpY+HXGhcYZ4ZvBpaDyh0LIZyiGoFo2zarzD4ZhE0WVDvMzZ4Uhvb6+fPrbxvS8mJsakdY4gZglx0sGkMFkv5VCDnpPvC2iUicbwTDMgK/+0SuWJR0SxHQd8RiOBJAY0g8C3lT5EkhHx0haPNDiFkZGRtszMzJ9BHxpTZQcGP2rnlQFTwCgKdFcZS05aJNHFuF6rNUj6NHtTmfLXWV9fb8K2nzgXBf8fa8YBSNaB/TMAAAAASUVORK5CYII="
                    alt="5 star rating"
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </header>
            <div
              className="p-2 rounded-lg"
              style={{ lineHeight: "1.7", color: "black", overflow: "auto" }}
            >
              Peak Roofing solutions did an excellent job. Great communication.
              My roof looks beautiful and they even cleaned out all the junk I
              had in my yard! Lol 10/10 recommend. I had no issues and they were
              able to work with my insurance..
            </div>
          </div>

            {/* BOX NUMBER THREE FOR REVIEWS */}
            <div
              className="border-2 border-[#e4949f] rounded-xl p-4 h-11rem w-[100%] shadow-md shadow-black/40 mt-4 mb-4">
            <header className="h-auto w-full rounded-lg flex items-center">
              <Image
                src="/HappyCustomerSherlon.png"
                alt="Happy customer photo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="ml-2 rounded">
                <span className="font-black text-2xl text-black text-left">
                  SHERLON A.
                </span>
                <div className="flex items-center border-black block text-lg text-gray-600 text-left ml-[.1rem]">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAABK0lEQVQYV22RsUvDUBDGfW8REV2EbKK46CBi97oUUVz0b+hikpfdbiVbQToVkhgEERxc1EkcdHAUuruJBTs4ObhIh76kvwst1NAHl+/ed3ffu7uoufFJ03Qry7JTrvvYZp7nWil1jX/p+35X0pR84jg+Au4JLkyKp9BqrTdc1/1SURStcnknuIQNULwAn8Fl+DMEWp7n3RXKqHbkachF2qgGQdCfoV5QKkmSHriONejtXEi4CnBSKvoT5QGq86jWUH0dz1CHuyolW0n+hFzDAmOM9FtW3pVXmOFH2mjj1FBaYaAdpv6dKIZhqB3HeSQm23r6tw2KPgjcgm8UDmnN4B/ja/zDYs+s74CkB9nIjE18k3jDPI0iWY78QWutwd3DtjGNdRFtsucXyRkBPlt7NVoK5VAAAAAASUVORK5CYII="
                    alt="5 star rating"
                  />
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAALCAYAAADMQYVZAAAD3UlEQVRIS42WaUhUURTHG0fLghZHs9KCEiIK26gosi9t9qGColzKvliYo6NWBBURNWiSRY0bo45LEEXRYBlWH7OFEtooWgwhEQycBps2S2J0nH5HZuT5fIPvweO9d87/f/73nHvPfdcwTuOqrq7emZOT06TlC4FfPjAw4M7Pz+/Wy6mqqtqRm5t7Ry/ebrev8/v9n/Ly8jx6OaHyMKgD2Gy2iVyd0dHR8ampqT49AiRQZDAYeihUhR58Q0PDZK/X2w4+Tg9eMGiUovEezmU9HIo0E3wrhU1Q40clTXV2AWrk3ohAix4BBtSGQDf4TTrx+8BfBbsazgudHBec5+B36MHX1NTksjLsPp8vkdXxUcnRSvoGgHTucgQOjyVARReGhYW1gfP19/ebCgoKfo/FoUhNJCCDL0bj1Fh4NFahIcXpYwVGsQK9Y3HQaEFjPYmfZLbPjUga50GcVRiNqkC/ILwN2hBtMpvN5ZWVlXFGo7EZzgoN4Tdwgkn/4L3AYrF8oeqHeC8Fry7yd+zvg3GIeYMiOFhtc7E1cy/W0HgF56/YwX8bHBzMQ+MreZzku1iNB9uDTSYleNUPDQLCGh73IEVriPzDfpSEpTBDV0VFxYTw8PAr2NO0Ko7QUwqTmp2d7Qr6SWQD9ltwpmlw+rDlK/s1sLc4sW8LofEwIiJiT1ZWlluhsQUNJxpTNJL/g/0AGs7hytfV1c1mB5Yenq8gyKCTAX7QEqZYpwhUpPJdcrvdx6xW66Cag8Y8WuAxnDkKXxcDTWYJtofQKAF/XOkDX8iYrNj9ag5jWoDtEb6ZCl8Hk7SZAnWKbcRyYzak4RcFwQT3EHy6VnDBgM/gcU01oGwSqNVKIMCR39oshUY3+PhQ+ED7OVQaGXCuh1gBBsbVo1y15PERfGIQP5w0wRMAdgQcTQC38x1OzyTRM60hZkGWUgrYTp7y/1zJ+30ENJckG9Iy9oY3gViydOVPYYSzFM67EBrSdlvBfMbfx/sS3m+Cl8121IXGWjSegZGVJu20WyaXmU4YNdNU5yjOY4D20r8P2HyWSg9yNyJwQh3d6XSO93g8P7A7EbG4XC5vbGzseb4t9LOJfpY+HXGhcYZ4ZvBpaDyh0LIZyiGoFo2zarzD4ZhE0WVDvMzZ4Uhvb6+fPrbxvS8mJsakdY4gZglx0sGkMFkv5VCDnpPvC2iUicbwTDMgK/+0SuWJR0SxHQd8RiOBJAY0g8C3lT5EkhHx0haPNDiFkZGRtszMzJ9BHxpTZQcGP2rnlQFTwCgKdFcZS05aJNHFuF6rNUj6NHtTmfLXWV9fb8K2nzgXBf8fa8YBSNaB/TMAAAAASUVORK5CYII="
                    alt="5 star rating"
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </header>
            <div
              className="p-2 rounded-lg"
              style={{ lineHeight: "1.7", color: "black" }}
            >
              This company is amazing, I found out about Peak Roofing through a
              few of my neighbors. My neighbors had there roof done by them and
              some other projects done. They did an excellent job. The best part
              is they didn’t ruin any of my property!
            </div>
          </div>
        {/* CLOSING </div> TAG FOR THE THIRD REVIEW */}
          </div>
        </div>


        <section
          className="w-full p-4 flex flex-col items-center justify-center shadow-md "
          id="services"
          style={{
            backgroundColor: "#ffffff",
          }}
        >
          <header className="h-[30%] w-full px-4 py-6 mb-6">
            <div className="h-[2rem]"></div>
            <h2 className="our-detailed-services text-4xl md:text-5xl font-black text-center text-black">
              OUR DETAILED-ORIENTED SERVICES
            </h2>
            <div className="flex justify-center">
              {/* SERVICES BUTTON AND ARROW */}
              <a
                href="/services"
                className="mt-4 px-8 py-3 bg-gradient-to-r from-[#b36e77] via-[#a7838a] to-[#d2947d] bg-opacity-100 text-white rounded-md shadow-lg hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-black hover:border-2 hover:border-[#e4949f] transition-colors duration-300 text-lg md:text-2xl flex items-center"
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




          {/* DIV HOLDING (RESIDENTIAL/COMMERCIAL/METAL ROOFING) */}
          <div className=" w-auto flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center ">
            
            {/* DIV CONTAINING RESIDENTIAL ROOFING */}
            <div
              className="h-[70%] lg:w-[33%] md:w-[350px] mb-6 md:mr-4 shadow-md rounded-[11px] overflow-hidden"
              style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,1)" }}
            >
              <picture className="h-[220px] flex items-center justify-center">
                {/* Add your image sources here */}
                {/* CHANGING THE WIDTH AND HEIGHT OF THE PHOTO IMPROVES PHOTO QUALITY */}
                <Image
                  src="/Gen-Residential-Peak-Roofing.png"
                  alt="Peak Roofing Residential Roofing Services"
                     width={500}
                     height={500}
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </picture>
              <div
                className="h-[6rem] flex items-center justify-end bg-white pr-4"
                style={{ }}
              >
                <h1 className="mt-3 mb-3 pl-2 text-2xl font-[900] tracking-tighter bg-gradient-to-l from-[#ae6772] via-[#FFD1DC] to-[#cc917c] text-transparent bg-clip-text text-left">RESIDENTIAL ROOFING</h1>
                <div className="flex items-center justify-center ml-auto">
                  <div
                    className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center pl-1 pt-0.5"
                    style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", display: "flex", alignItems: "", justifyContent: "center" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#b76e79]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586L8.293 4.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* DIV CONTAINING COMMERCIAL ROOFING */}
            <div
              className="h-[70%] lg:w-[33%] md:w-[350px] mb-6  md:mr-4 shadow-md rounded-[11px] overflow-hidden"
              style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,1)" }}
            >
              <picture className="h-[220px] flex items-center justify-center">
                {/* Add your image sources here */}
                <Image
                  src="/Church-Roof.png"
                  alt="Peak Roofing Residential Roofing Services"
                     width={300}
                     height={300}
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </picture>
              <div
                className="h-[6rem] flex items-center justify-end bg-white pr-4"
                style={{ }}
              >
                <h1 className="mt-3 mb-3 pl-2 text-2xl font-[900] tracking-tighter bg-gradient-to-l from-[#ae6772] via-[#FFD1DC] to-[#cc917c] text-transparent bg-clip-text text-left ">COMMERCIAL ROOFING</h1>
                <div className="flex items-center justify-center  ml-auto">
                  <div
                    className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center pl-1 pt-0.5"
                    style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", display: "flex", alignItems: "", justifyContent: "center" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#b76e79]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586L8.293 4.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* DIV CONTAINING "METAL ROOFS" */}
            <div
              className="h-[70%] lg:w-[33%] md:w-[350px] mb-6 shadow-md rounded-[11px] overflow-hidden"
              style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,1)" }}
            >
              <picture className="h-[220px] flex items-center justify-center">
                {/* Add your image sources here */}
                <Image
                  src="/Metal-Roof-2.webp"
                  alt="Peak Roofing Metal Roofing Services"
                     width={500}
                     height={500}
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </picture>
              <div
                className="h-[6rem] flex items-center justify-end bg-white pr-4"
                style={{ }}
              >
                <h1 className="mt-3 mb-3 pl-2 text-2xl font-[900] tracking-tighter bg-gradient-to-l from-[#ae6772] via-[#FFD1DC] to-[#cc917c] text-transparent bg-clip-text text-left ">METAL ROOFING</h1>
                <div className="flex items-center justify-center ml-auto">
                  <div
                    className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center pl-1 pt-0.5"
                    style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", display: "flex", alignItems: "", justifyContent: "center" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#b76e79]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586L8.293 4.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION CONTAINING FAMILY PHOTO AND MICHEAL'S COMMITMENT */}
        <section className="bg-white w-full h-screen">
          {/* IMAGE AND COMMITMENT TO CUSTOMER  */}
          <div className="w-screen h-[100%] relative">
            <div className="h-[70%] w-full bg-center bg-no-repeat bg-cover px-4 border-t-2 border-b-2 border-[#b76e79]" style={{ backgroundImage: "url(/Family-Photo.png)" }}>
            </div>
            {/* DIV HOLDING HEADER, STATEMENT AND SIGNATURE */}
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[80%] h-auto bg-white border-t border-[#b76e79] border-2 flex flex-col items-center justify-center mb-16 pt-6 pb-4 px-4 rounded-[1.25rem] shadow-[0_5px_10px_0_rgba(0,0,0,0.2)]">
                <h2 className="text-xl mb-4 mt-4 text-black  text-center font-bold underline" style={{fontWeight: 900}}>
                  COMITTED TO SATISFACTION
                </h2>
                <p className="text-base text-center text-black mt-2 mb-3">
                  "At Peak Roofing, we believe in striving for greatness. Owner
                  Michael and our team focus on exceptional service, customized
                  solutions, and transparent communication to ensure our clients
                  never experience mediocrity."
                </p>
                <div className="flex items-center justify-center">
                  <Image 
                    src="/Micheal-Signature.png" 
                    alt="Micheal's Signature" 
                    width={200} 
                    height={63} 
                    className="mx-auto"
                    style={{marginBottom: "-120px"}}
                  />
                  <h3 className="font-bold ml-2">Micheal, Owner</h3>
                </div>
              </div>

            </div>
          {/* </div> */}
        </section>
        {/* SECTION CONTAINING SERVICE AREAS AND MAP */}
        <div className="container">
          <section className="bg-white w-full h-[120vh]">
            <div className="h-full w-full px-4 pt-4 pb-0">
              {/* First Div */}
              <div className="w-full h-auto flex justify-center items-center mb-6">
                <header
                  className="font-bold text-black text-center"
                  style={{ fontWeight: 900, fontSize: "1.575rem" }}
                >
                  FROM THE TRIANGLE TO THE BEACHES: WE'RE PROUD TO SERVE YOU
                </header>
              </div>
              {/* Div Holding Google Map */}
              <div className="w-full h-1/4 flex justify-center items-center overflow-hidden rounded-3xl shadow-[#00000052]  shadow-[0_32px_96px] mb-4 lg:mb-0">
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
                <div className="w-full h-auto flex flex-col justify-center items-center mb-6">
                  <header
                    className=" text-black text-3xl font-bold text-center"
                  >
                    NORTH CAROLINA
                  </header>
                  <div
                    className="w-full h-auto flex flex-wrap justify-center items-center sm: mt-8"
                  >
                    <ul className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5  text-center">
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
