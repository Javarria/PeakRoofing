"use client";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Image from "next/image";
export default function reviews() {
  return (
    <div>
      <Header />
      <section
        className="rose-gold-section pl-3 pr-15 py-14 pb-6"
        style={{ height: "auto" }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <p
            className=" p-2 text-[6vh] lg:text-[10vh] lg:text-left font-[900]"
            style={{ lineHeight: "1.2" }}
          >
            SHARE YOUR PEAK ROOFING EXPERIENCE
          </p>
        </div>
      </section>
      {/* SECTION HOLDING GIVEN REVIEWS */}
      <section className="bg-white py-10" style={{ height: "auto" }}>
        {/* DIV HOLDING SIX REVIEWS */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center h-full py-4 pl-4 pr-4">
          {/* FIRST REVIEW  */}
          <div className="border-2 border-[#c66e6e] rounded-xl p-4 h-10rem w-[100%] shadow-md shadow-black/40">
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
          {/* SECOND REVIEW */}
          <div className="border-2 border-[#c66e6e] rounded-xl p-4 h-10rem w-[100%] shadow-md shadow-black/40">
            <header className="h-auto w-full rounded-lg flex items-center">
              <Image
                src="/HappyFamilyCustomer.jpeg"
                alt="Happy family customer photo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="ml-2 rounded">
                <span className="font-black text-2xl text-black text-left">
                  ANITA S.
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
              className="p-2 rounded-lg overflow-y-auto"
              style={{ lineHeight: "1.7", color: "black" }}
            >
              Peak Roofing, owner Michael did a phenomenal job!!! From start to
              finish, it has been an absolute pleasure working with this
              company. They made the process seamless and detailed every step of
              the stages for replacement...
            </div>
          </div>
          {/* THIRD REVIEW border-[#c66e6e]  */}
          <div className="border-2 border-[#c66e6e]  rounded-xl p-4 h-11rem w-[100%] shadow-md shadow-black/40">
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
              style={{ lineHeight: "1.7", color: "black", overflow: "auto" }}
            >
              Peak Roofing solutions did an excellent job. Great communication.
              My roof looks beautiful and they even cleaned out all the junk I
              had in my yard! Lol 10/10 recommend. I had no issues and they were
              able to work with my insurance..
            </div>
          </div>
          {/* FOURTH REVIEW */}
          <div className="border-2 border-[#c66e6e] rounded-xl p-4 h-11rem w-[100%] shadow-md shadow-black/40">
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
                <div className="flex items-center border-black text-lg text-gray-600 text-left ml-[.1rem]">
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
          {/* FIFTH REVIEW */}
          <div className="border-2 border-[#c66e6e] rounded-xl p-4 h-11rem w-[100%] shadow-md shadow-black/40">
            <header className="h-auto w-full rounded-lg flex items-center">
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background:
                    "linear-gradient(to bottom right, #3b82f6, #60a5fa)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                S
              </div>
              <div className="ml-2 rounded">
                <span className="font-black text-2xl text-black text-left">
                  SIERRA P.
                </span>
                <div className="flex items-center  text-lg text-gray-600 text-left ml-[.1rem]">
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
              I found out about Peak Roofing Solution from a co-worker. I had my
              roof replaced last week & the information that the owner (Micheal)
              gave me regarding how the insurance claim process goes,made me
              feel comfortable. Especially when...
            </div>
          </div>
          {/* SIXTH REVIEW */}
          <div className="border-2 border-[#c66e6e] rounded-xl p-4 h-auto w-[100%] shadow-md shadow-black/40">
            <header className="h-auto w-full rounded-lg flex items-center">
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background:
                    "linear-gradient(to bottom right, #ff69b4, #ffa500)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                L
              </div>
              <div className="ml-2 rounded">
                <span className="font-black text-2xl text-black text-left">
                  LIZ B.
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
              className="p-2  rounded-lg"
              style={{ lineHeight: "1.7", color: "black", overflow: "auto" }}
            >
              Michael and Liz were a joy to work with on my recent roof
              replacement! Michael went to work immediately with handling my
              insurance company and managed to get them to pay way more than
              they originally planned. He worked really hard to get us approved.
            </div>
          </div>
        </div>
      </section>
      {/* SECTION HEADER "TELL US ABOUT YOUR EXPERIENCE" */}
      <section
        className="rose-gold-section"
        style={{ height: "auto", padding: "40px" }}
      >
        <header
          className="flex justify-center items-center"
          style={{ height: "auto", color: "white" }}
        >
          <h1 className="font-[900] text-5xl">
            NOW TELL US ABOUT YOUR PEAK ROOFING SOLUTION EXPERIENCE
          </h1>
        </header>
      </section>

      {/* SECTION CONTAINING LINKS TO LEAVE REVIEWS */}
      <section
        style={{ backgroundColor: "white", height: "auto", padding: "40px 0" }}
      >
        {/* GOOGLE REVIEW BUTTON */}
        <div className="flex flex-wrap justify-evenly sm:flex-row">
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow:
                "0px 3px 2px 0px rgba(0,0,0,.02),0px 6px 5px 0px rgba(0,0,0,.03),0px 12px 10px 0px rgba(0,0,0,.04),0px 22px 18px 0px rgba(0,0,0,.04),0px 42px 33px 0px rgba(0,0,0,.05),0px 100px 80px 0px rgba(0,0,0,.07)",
              margin: "15px",
            }}
          >
            <Image
              src="/GoogleLogo.webp"
              alt="Google Logo"
              width={220}
              height={220}
              style={{ cursor: "pointer" }} // Make the image appear clickable
              onClick={() =>
                window.open(
                  "https://www.google.com/search?client=firefox-b-1-d&q=peakRoofingSolution#lrd=0xa47bc55fc6c254b7:0xcf9244692d76bbbe,3,,,,r",
                  "_blank"
                )
              }
            />
          </div>
          {/* FACEBOOK REVIEW BUTTON */}
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow:
                "0px 3px 2px 0px rgba(0,0,0,.02),0px 6px 5px 0px rgba(0,0,0,.03),0px 12px 10px 0px rgba(0,0,0,.04),0px 22px 18px 0px rgba(0,0,0,.04),0px 42px 33px 0px rgba(0,0,0,.05),0px 100px 80px 0px rgba(0,0,0,.07)",
              margin: "15px",
            }}
          >
            <Image
              src="/facebookLogo.png"
              alt="Facebook Logo"
              width={220}
              height={220}
              style={{ cursor: "pointer" }} // Make the image appear clickable
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=61556095694789&sk=reviews",
                  "_blank"
                )
              }
            />
          </div>
          {/* BBB REVIEW BUTTON */}
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow:
                "0px 3px 2px 0px rgba(0,0,0,.02),0px 6px 5px 0px rgba(0,0,0,.03),0px 12px 10px 0px rgba(0,0,0,.04),0px 22px 18px 0px rgba(0,0,0,.04),0px 42px 33px 0px rgba(0,0,0,.05),0px 100px 80px 0px rgba(0,0,0,.07)",
              margin: "15px",
            }}
          >
            <Image
              src="/Better-Business-Bureau-Emblem.png"
              alt="Better Business Logo"
              width={220}
              height={220}
              onClick={() =>
                window.open(
                  "https://www.bbb.org/us/nc/raleigh/profile/roofing-contractors/peak-roofing-solution-llc-0593-90359111/customer-reviews",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
