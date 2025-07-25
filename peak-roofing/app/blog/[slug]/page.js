
import BlogThumbnail from "@/app/components/BlogThumbnail";
import Image from "next/image";
import Header from "@/app/components/Header";
import { posts } from "../posts";
import ReactMarkdown from 'react-markdown';
import "@/app/globals.css";


// The dynamic routing system in Next.js will automatically pass the URL parameter as the params prop to your page component, allowing you to access the slug value.
export default function BlogPost({ params }) {
    // The params object will contain the slug from the URL
    // For example, if the user visits /blog/understanding-roofing-warranties, 
    // the params object will contain { slug: "understanding-roofing-warranties" }
    let { slug } = params;

    //slug (URL) with "/blog" added to the slug. 
    slug = `blog/${slug}`;


    const post = posts.find((post) => post.slug === slug)

     console.log(post)


    console.log("slug: " + slug)
    
    // For other slugs, you could display a different message or fetch data based on the slug
    return (
    <div>
        <Header/>
        <div className="container mx-auto py-20 px-4 border-4 border-red-500">
            <h1 className="text-4xl md:text-6xl font-bold font-weight-900 text-center mb-8">{post.title}</h1>
            <div className="flex justify-center items-center">
                <div className="rounded-full border-2 border-white overflow-hidden w-[13rem] flex justify-center">
                    <p className="text-center px-4">{post.date}</p>
                </div>
            </div>
        </div>
        <section className="bg-white min-h-screen min-w-screen px-4 md:px-10 lg:px-32 py-8 border-4 border-orange-500">
            <div className="container mx-auto py-8 px-4 sm:px-4">
                <h2 className="text-2xl font-bold text-left text-black border-black border-4">Posted by Michael from Peak Roofing</h2>
                <br/>
                <div className="text-black" dangerouslySetInnerHTML={{ __html: post.article }} />
            </div>
        </section>
    </div>
    );
  }