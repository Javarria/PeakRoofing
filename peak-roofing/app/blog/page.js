import Header from "../components/Header";
import UserInputForm from "../components/UserInputForm";
import Image from "next/image";
import Footer from "../components/Footer";
import BlogThumbnail from "../components/BlogThumbnail";
import Link from "next/link";
import { posts } from './posts'; 




export default function blog() {

  console.log(posts)

  return (
    <div>
      <Header />
      {/* SECTION HOLDING ALL ARTICLES */}
      <section className="bg-gradient-to-r from-[#b36e77] via-[#a7838a] to-[#d2947d] h-60 flex items-center justify-center">
          <div className="rounded-full p-10 border-white border-2">
            <h1 className="text-white font-bold text-4xl">Peak Roofing Blog</h1>
          </div>
        </section>
      
      <section className="bg-white h-auto w-auto py-10">
        {/* <div className="container">
          <UserInputForm />
        </div> */}
        {/* DIV SURRONDING ALL ARTICLES THUMBNAILS */}
        <div className="flex flex-wrap justify-center px-10 h-auto rounded-lg">
          {/* Loading every element in posts and attaching its props for every renderd component  */}
          {posts.map((post) => {
            return (
              <BlogThumbnail
              key={post.slug}
              llink={post.slug}
              iimage={post.image}
              ttitle={post.title}
              ddate={post.date}
              ddescription={post.description}
              />
              );
            })}
        </div>
      </section>

      <Footer />
    </div>
  );
}











