import Header from "../components/Header"
import UserInputForm from "../components/UserInputForm"
import Footer from "../components/Footer"
export default function blog(){

    return(
    <div>
        <Header/>
        {/* SECTION HOLDING ALL ARTICLES */}
        <section className="bg-white h-auto w-full py-20">
            <div className = "container">
                <UserInputForm/>
            </div>

        </section>
        
        <Footer/>

    </div>
    
    )
}

{/* <UserInputForm/> */}