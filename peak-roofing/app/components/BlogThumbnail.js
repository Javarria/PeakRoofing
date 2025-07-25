import Link from "next/link";
import Image from "next/image";

export default function BlogThumbnail({ llink, iimage, ttitle, ddate, ddescription}) {
  //Variables == Link, image

  return (
    <Link href={llink}>
      <div
        className="item ml-3 mr-3 mb-3 rounded-lg hover:border hover:border-[#c66e6e]"
        style={{
          width: "420px",
          height: "529px",
          minWidth: "420px",
          minHeight: "529px",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 3px 2px 0px, rgba(0, 0, 0, 0.03) 0px 6px 5px 0px, rgba(0, 0, 0, 0.04) 0px 12px 10px 0px, rgba(0, 0, 0, 0.04) 0px 22px 18px 0px, rgba(0, 0, 0, 0.05) 0px 42px 33px 0px, rgba(0, 0, 0, 0.07) 0px 100px 80px 0px",
          overflow: "hidden",
        }}
        height="200"
        width="200"
      >

        <div
          style={{
            width: "100%",
            height: "275px",
            overflow: "hidden",
          }}
        >
          <Image
            src={iimage}
            alt="CalmAfterTheStorm"
            style={{
              objectFit: "cover",
              overflow: "hidden",
            }}
            height="1500"
            width="829"
          />
        </div>

        <div
          className="postInfo"
          style={{
            WebkitBoxFlex: "1",
            msFlex: "1",
            flex: "1",
            gap: "10px",
            padding: "16px 25px",
            display: "flex",
            WebkitBoxOrient: "vertical",
            WebkitBoxDirection: "normal",
            msFlexDirection: "column",
            flexDirection: "column",
            WebkitBoxPack: "justify",
            msFlexPack: "justify",
            justifyContent: "space-between",
            background: "#fff",
            textTransform: "capitalize",
            color: "#434343",
            height: "calc(100% - 288px)",
          }}
        >
          <div
            style={{
              fontSize: "1.1rem",
              fontWeight: "700",
            }}
          >
            {ddate}
          </div>

          <h5
            style={{
              borderRadius: "10px",
              fontSize: "1.3rem",

              fontWeight: 900,
              margin: 0,
            }}
          >
            {ttitle}
          </h5>
          <p style={{}}>
            {ddescription}
          </p>
          <h5
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              color: "transparent",
              background: "linear-gradient(90deg, #b36e77 0%, #a7838a 50%, #d2947d 100%)",
              backgroundClip: "text",
            }}
          >
            READ MORE
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#grad)"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#b36e77" />
                  <stop offset="50%" stopColor="#a7838a" />
                  <stop offset="100%" stopColor="#d2947d" />
                </linearGradient>
              </defs>
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              stroke="url(#grad)"
              style={{background: "linear-gradient(90deg, #b36e77 0%, #a7838a 50%, #d2947d 100%)"}}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg> */}
          </h5>
        </div>
      </div>
    </Link>
  );
}

