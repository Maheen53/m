import Link from "next/link"
export default function About() {
    return (
        <main className='bg-cover bg-center h-screen' style={{backgroundImage: "url('/images/bg.jpg')"}} >
        <div className="bg-black text-center" >
        <img 
                src="https://www.usatoday.com/gcdn/-mm-/68e8b71abbc8efef5b45bf1c5911e8d646995f16/c=287-0-4712-2500/local/-/media/2016/08/05/USATODAY/USATODAY/636060156765079848-DSC-1135.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
                alt="MAHEEN IMTIAZ"
                width={500}
                height={10}
                className="rounded-lg shadow-lg w-full"
              />
            
            <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl lg:text-7xl text-center py-4 hover:scale-105 transition-transform duration-300">ABOUT</h1>
            
            <div className="text-white">
            <h1>mahi</h1>
            <h2>Name : MAHEEN IMTIAZ</h2>
            <h2>Fathername : IMTIAZ AHMED</h2>
            <h2>Age : 21 </h2>
            <h2>Martial status : Engaged</h2>
            <h2>Education : Graduation</h2>
            <h2>Work Experience : no</h2>
        
       
                <h1>EDUCATION</h1>
                <h2>SSC : JEB SCHOOL </h2>
                <h2>HSC : COMMERCE AND ECNOMIC COLLAGE </h2>
                <h2>BCOM : KARACHI UNIVERSITY</h2>


            </div>
            {/* bg-gradient-to-r from-purple-500 to-blue-500 text-center? */}
        
        </div>
        
        </main>
    )
}
