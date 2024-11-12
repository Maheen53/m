import Link from "next/link";

export default function Hero(){
  return(
    <main className="bg-black">
    <><div className="bg-black min-h-screen flex-col mb-3 items-center justify-wrap">
      <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl lg:text-7xl text-center py-4 hover:scale-105 transition-transform duration-300">
        Welcome to My Portfolio
      </h1>

      <img 
                src="https://png.pngtree.com/background/20230525/original/pngtree-female-programmer-in-front-of-computer-screens-picture-image_2734159.jpg"
                alt="MAHEEN IMTIAZ"
                width={1000}
                height={10}
                className="w-full"
              />

      

      </div>

      <div className="mt-4 justify-center ">
      <ul className="flex gap-x-4">
    <li className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"> <Link href ="https://web.whatsapp.com/">WATSAPP"</Link></li>
    
    <li className="inline-flex items-center bg-sky-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href = "https://www.linkedin.com/in/maheen-imtiaz-635a792b5/">LINKDIN</Link></li>
    
    <li className="inline-flex items-center bg-pink-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href="https://www.instagram.com/stories/dayswith_mi/">INSTAGRAM</Link></li>
    
    <li className="inline-flex items-center bg-sky-950 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href ="https://www.facebook.com/profile.php?id=100005773187338">FACEBOOK</Link></li>
    
    <li className="inline-flex items-center bg-purple-950 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href ="https://discord.com/channels/790484092772548613/1210170964550352956">DISCORD</Link></li>
    </ul>
      </div>


      <div className='bg-black'>
                                      <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl lg:text-7xl text-center py-4 hover:scale-105 transition-transform duration-300">MY Skills</h1>
                                      <div className="flex flex-wrap justify-center mt-4">

<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://img.freepik.com/free-photo/html-system-websites-concept_23-2150323534.jpg" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>HTML</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>HTML is easy to learn and use, but it’s the backbone of all web pages.The great thing about HTML is that it gives you the power to create anything you can imagine on the web
HTML gives meaning to web pages, making them accessible to both humans and machines
</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>




<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Box_Sizing.jpg" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>CSS</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>CSS is like a beautiful painting; it brings the structure of HTML to life with colors, layouts, and typography."

"With CSS, every web developer has the power to create an engaging experience; it's where design meets functionality."

"CSS allows us to transform the ordinary into the extraordinary; it's the art of designing for the web."

"In the world of web development, CSS is the magic wand that turns bland code into stunning visuals."
</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>



<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://blog.talent500.co/wp-content/uploads/2023/01/Skills-you-need-to-get-a-job-as-a-JavaScript-developer-1.png" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>Javasript</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>JavaScript is the language of the web; it transforms static pages into dynamic experiences and allows developers to create interactive applications."

"With JavaScript, every line of code can bring a website to life, allowing developers to build everything from simple scripts to complex web applications."

"JavaScript empowers developers to think creatively; it's not just a programming language but a tool for innovation and exploration."</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>



<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://media.licdn.com/dms/image/D5612AQFxk7UI27NUdw/article-cover_image-shrink_600_2000/0/1674823807338?e=2147483647&v=beta&t=4KI9luZRVMn5vAUmHHWPpb9hbZ8woK572VEWOt1m2F4" 
alt="Typescript"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>Typescript</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>TypeScript brings strong typing to JavaScript, allowing developers to catch errors at compile time rather than runtime, enhancing code reliability."

"With TypeScript, you get the best of both worlds: the flexibility of JavaScript and the structure of a strongly typed language."

"TypeScript empowers developers to write cleaner, more maintainable code, making it easier to manage large codebases."











</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>




<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://tailwindcss.nuxtjs.org/social-card.png" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>Tailwind css</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>"Tailwind CSS empowers developers to design directly in their markup, enabling a faster and more efficient workflow by using utility-first classes."

"With Tailwind CSS, you can create custom designs without leaving your HTML, making styling intuitive and seamless."

"The utility-first approach of Tailwind CSS allows for rapid prototyping, letting developers focus on functionality while maintaining a beautiful design."</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>




<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://dropinblog.net/34256781/files/featured/nextjs-server-actions-why-and-how.png" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>Next.js</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>Next.js is a powerful React framework that enables developers to build fast, scalable, and SEO-friendly web applications effortlessly."

"With Next.js, server-side rendering becomes a breeze, enhancing performance and providing users with lightning-fast load times."

"Next.js simplifies the development experience by offering features like static site generation, routing, and API routes out of the box.</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>































</div>
    </div>























      <div className="flex-shrink-0 mb-8 md:mb-0 md:ml-8">
              
              <div className="bg-black min-h-screen flex items-center justify-center">
                  <div className="text-white text-center">
                    {/*Profile Image */}
                    
                    <header></header>
                    
                      <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl lg:text-7xl text-center py-4 hover:scale-105 transition-transform duration-300">hi i'm MAHEEN IMTIAZ</h1>
                      Hi, it's me Maheen Imtiaz, a 21-year-old passionate web developer and creative enthusiast eager to bring innovative digital solutions to life.
                      Currently, I am a student at the Governor Sindh IT Initiative (GIAIC), where I am honing my skills and expanding my knowledge in technology and development.
                      I’m committed to advancing my skills in web development, having built a strong foundation in HTML, CSS, Tailwind CSS, TypeScript, and JavaScript.
                      I’m also diving into Next.js and exploring cloud technologies to further enhance my expertise.
        
        
                    </div>
                    <img
                        src="https://img.etimg.com/thumb/msid-59235543,width-640,resizemode-4/wealth/earn/9-online-jobs-that-offer-up-to-rs-4000-per-hour/good-earning-potential.jpg"
                        alt="MAHEEN IMTIAZ"
                        width={10000}
                        height={10}
                        className="rounded-lg shadow-lg " />
        

                        </div>
        
                  </div>







                  <div>
        <div className="bg-black min-h-screen flex-col mb-3 items-center justify-wrap">
      <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl lg:text-7xl text-center py-4 hover:scale-105 transition-transform duration-300">
        My Achivements
      </h1>
     
<div className="flex flex-wrap justify-center mt-4">
      <div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://media.licdn.com/dms/image/v2/D4E22AQH-NoMXIAdg8w/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1722549231858?e=1730937600&v=beta&t=IY6S1lGvTWc0AeEbbtC2euZTXPc7JlqZQch-P1NMl_0" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>Achivements Artificial Intelligence In Achion</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>Artificial Intelligence in Action
Successfully completed a hands-on AI project showcasing advanced techniques in machine learning and deep learning.</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>





<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://media.licdn.com/dms/image/v2/D4E22AQEl97BI-JndPw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1722548378975?e=1730937600&v=beta&t=LBY7Gf5NPzbQZDvAGSvUaWWYyrVMe6w3lmH9LfNNjEU" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>Perform basic string formating#c

</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>
"Success is the sum of small efforts, repeated day in and day out."

"The future belongs to those who believe in the beauty of their dreams." 

"Your accomplishments are the building blocks of your future.
</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>


















<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://media.licdn.com/dms/image/v2/D4E22AQHF-uoOyswApA/feedshare-shrink_800/feedshare-shrink_800/0/1722546799459?e=1730937600&v=beta&t=9aaiGX59sulIZ2J1zw_478n88ngIP5-wYUFQCt9GgyE" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>General Computer Programing Quiz

</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>Code is like humor. When you have to explain it, it’s bad." – Cory House

"Programming isn't about what you know; it's about what you can figure out." – Chris Pine

"The best way to predict the future is to invent it
</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>




<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://media.licdn.com/dms/image/v2/D4E22AQFJdP8ZMGmVzw/feedshare-shrink_1280/feedshare-shrink_1280/0/1721948772263?e=1730937600&v=beta&t=Rlel7y93iR7fjw-r5TC-DAnJZ_CMlxcmttdiImn4-HE" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>Digital Ada Certificate
</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>The future belongs to those who believe in the beauty of their dreams." – Eleanor Roosevelt

"Digital literacy is the key to success in the modern world." – Unknown

"In a world where you can be anything, be digital." – Unknown

"Technology is best when it brings people together." – Matt Mullenweg

"The only limit to our realization of tomorrow will be our doubts of today." – Franklin D. Roosevelt
</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>





<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://media.licdn.com/dms/image/v2/D4E22AQGmCDBFk20hTA/feedshare-shrink_1280/feedshare-shrink_1280/0/1721948742809?e=1730937600&v=beta&t=RWDULDOEdx-2HvEE30omWw2AFleBK9BZx166t_mTu1Y" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>HTML CSS And Javascript Certificate
</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>The best way to predict the future is to invent it." – Alan Kay

"Code is like humor. When you have to explain it, it’s bad." – Cory House

"Web development is not just about building websites; it's about creating experiences." – Unknown

"Every accomplishment starts with the decision to trySimplicity is the soul of efficiency." – Austin Freeman

"Learning to code is not just about getting a job; it’s about learning how to think
</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>





<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://media.licdn.com/dms/image/v2/D4E22AQERmjIUfWtYiw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1721261203159?e=1730937600&v=beta&t=BSEhSsEOAiO4Gpb9AiNqWYqcqcrEPX_VTdJZR91tglI" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>ChatGPT  Certificate
</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>The best way to predict the future is to invent it." – Alan Kay

"Code is like humor. When you have to explain it, it’s bad." – Cory House

"Web development is not just about building websites; it's about creating experiences." – Unknown

"Every accomplishment starts with the decision to trySimplicity is the soul of efficiency." – Austin Freeman

"Learning to code is not just about getting a job; it’s about learning how to think
</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>






<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://media.licdn.com/dms/image/v2/D4E22AQFdWinv6b8dVA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1720126298908?e=1730937600&v=beta&t=LcNdnEXqAyViJnTeCcmWy55uUa-3t5231tGKrinNgy4" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>Quiz  Certificate
</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>The best way to predict the future is to invent it." – Alan Kay

"Code is like humor. When you have to explain it, it’s bad." – Cory House

"Web development is not just about building websites; it's about creating experiences." – Unknown

"Every accomplishment starts with the decision to trySimplicity is the soul of efficiency." – Austin Freeman

"Learning to code is not just about getting a job; it’s about learning how to think
</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>



























<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://media.licdn.com/dms/image/v2/D4E22AQFd1lq4gAr8YA/feedshare-shrink_1280/feedshare-shrink_1280/0/1721260826352?e=1730937600&v=beta&t=NCQ1xmINMZeW8JweOyVJI-IQxmZewQTER_Ju-_-U9eU" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>Courseea Certificte
</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>Passionate about leveraging technology to solve real-world problems."

"Committed to continuous learning and professional growth."

"Driven by curiosity and a desire to innovate."

"Believing in the power of collaboration to achieve great results."

"Turning challenges into opportunities through creative problem-solving
</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>








<div className='bg-white shadow-[0_4px -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4'>
<div className='min-h-[245px]'>
<img src="https://media.licdn.com/dms/image/v2/D4E22AQEgqxcSdt-60Q/feedshare-shrink_1280/feedshare-shrink_1280/0/1721856634069?e=1730937600&v=beta&t=aCVWaA4yyhDu1Mr5jdukCOJq02SPsaVpImvz8U-NHQk" 
alt="html"
className='w-full rounded-lg'
 />
 <div className='p-b text-center'>
<h2 className='text-xl font-black'>Canva Courseera Certificte
</h2>
<p className='mt-3 text-sm text-grey-500 leading-relaxed'>Passionate about leveraging technology to solve real-world problems."

"Committed to continuous learning and professional growth."

"Driven by curiosity and a desire to innovate."

"Believing in the power of collaboration to achieve great results."

"Turning challenges into opportunities through creative problem-solving
</p>
<button className="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">read more</button>
</div>
</div>
</div>




















</div>
</div>









    </div>










































                  

    <div className='bg-black p-10 min-h-screen flex items-center justify-center'>
        <h1 className="bg-gradient-to-r from -bg-gradient-to-b from-red-400 to-yellow-400  text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl  text-center py-4 hover:scale-105 transition-transform ">
         
      </h1>
      <Link className='bg-gradient-to-r from -bg-gradient-to-b from-red-400 to-yellow-400  text-transparent bg-clip-text font-bold text-4xl md:text-6xl  lg:text-7xl   text-center py-4 hover:scale-105 transition-transform duration-300' href={"/node"}> My Node Projects</Link>
      
    </div>

    <div className='bg-black'>
                              <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl lg:text-7xl text-center py-4 hover:scale-105 transition-transform duration-300">Projects</h1>

        <img 
                src="https://miro.medium.com/v2/resize:fit:1400/1*1O0RTWlZGD1VxKwmD81Ulw.jpeg"
                alt="MAHEEN IMTIAZ"
                width={600}
                height={10}
                className="w-full"
              />
            
      <ul className="flex flex-col justify-center items-center space-y-4">
      <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl lg:text-7xl text-center py-4 hover:scale-105 transition-transform duration-300">check out</h1>
      <div className="flex flex-wrap justify-center mt-4">
        </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-400

 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500  rounded text-base">
                <Link href="https://github.com/Maheen53/contdown_timer">Countdown Timer</Link>
                </button>
                </div>
                <img 
                src="https://crowdcontrolgames.com/cdn/shop/products/CountDown_6_grande.gif?v=1530644704"
                alt="MAHEEN IMTIAZ"
                width={400}
                height={10}
              />




<div className="flex space-x-4 mt-4 md:mt-0">
                <button className="inline-flex items-center bg-gradient-to-r from-green-400 via-yellow-500 to-red-500

 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base">
                <Link href="https://github.com/Maheen53/word_counter_withchalk">WORD COUNTER</Link>
                </button>
                </div>
                
                <img 
                src="https://www.shutterstock.com/image-photo/count-word-on-white-blocks-260nw-303885041.jpg"
                alt="MAHEEN IMTIAZ"
                width={400}
                height={10}
                className=""
              />




                <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-pink-500

 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base">
                <Link href="Number Guessing Game">Number Guessing Game</Link>
                </button>
                </div>
                <img 
                src="https://i.ytimg.com/vi/jcKe13D6bao/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJldBIp0DgnzUjF0-aRD7W7i6kOA"
                alt="MAHEEN IMTIAZ"
                width={400}
                height={10}
                className=""
              />






                <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="inline-flex items-center bg-gradient-to-l from-blue-500 to-teal-400

 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500  rounded text-base">
                <Link href="https://github.com/Maheen53/MI-atm-machine">ATM Machine</Link>
                </button>
                </div>
                <img 
                src="https://cdn6.aptoide.com/imgs/d/b/5/db5261190bac91ccc0aa343299489713_screen.jpg"
                alt="MAHEEN IMTIAZ"
                width={400}
                height={10}
                className=""
              />






                <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400

 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500  rounded text-base">
                <Link href="https://github.com/Maheen53/adventure-game">Adventure Game</Link>
                </button>
                </div>
                <img 
                src="https://miro.medium.com/v2/resize:fit:1400/1*45zV5FsRb6fDNNbb6EoXsw.jpeg"
                alt="MAHEEN IMTIAZ"
                width={400}
                height={10}
                className="https://miro.medium.com/v2/resize:fit:1400/1*45zV5FsRb6fDNNbb6EoXsw.jpeg"
              />


                <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="inline-flex items-center bg-gradient-to-b from-red-400 to-yellow-400

 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500  rounded text-base">
                <Link href="https://github.com/Maheen53/oop-my-bank">OOP My Bank</Link>
                </button>
                </div>
                <img 
                src="https://play-lh.googleusercontent.com/A4vL5Dl0DDk0buHmyKwQYVFpk-d2fB1SGdmTcz4zNgJk4JaUjzKWw7dyA4oVtTYk"
                alt="MAHEEN IMTIAZ"
                width={400}
                height={10}
              />



                <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="inline-flex items-center bg-radial from-yellow-300 to-red-500

 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500  rounded text-base">
                <Link href="https://github.com/Maheen53/oop_console">OOP Console</Link>
                </button>
                </div>
                <img 
                src="https://retrovgames.com/wp-content/uploads/2024/03/Nintendo-Switch-Games.webp"
                alt="MAHEEN IMTIAZ"
                width={400}
                height={10}
              />






                


<div className="flex space-x-4 mt-4 md:mt-0">
                <button className="inline-flex items-center bg-gradient-to-r from-green-400 via-yellow-500 to-red-500

 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base">
                <Link href="https://github.com/Maheen53/stu_managment">STUDENT MANAGMENT GAME</Link>
                </button>


                
                </div>
                <img 
                src="https://assets-prd.ignimgs.com/2022/11/29/music-club-1669753371986.jpg"
                alt="MAHEEN IMTIAZ"
                width={600}
                height={200}
                className=""
              />


                <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="inline-flex items-center bg-gradient-to-br from-pink-500 to-yellow-400

 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500  rounded text-base">
                <Link href="https://github.com/Maheen53?tab=repositories">HACKHATHON</Link>
                </button>
                </div>




      </ul>


    </div>





    <div className="bg-black bg-cover bg-center h-screen">
   
    <h1 className="text-xl mb-6 w-screen">
      <div className="w-screen">
      <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl lg:text-7xl text-center py-4 hover:scale-105 transition-transform duration-300">Contact us</h1>

    <img 
                src="https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg"
                alt="MAHEEN IMTIAZ"
                width={100}
                height={2}
                className="w-full"
              />
              </div>
              </h1>

    
    <br />
    <ul className="flex gap-x-4">
    <li className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"> <Link href ="https://web.whatsapp.com/">WATSAPP"</Link></li>
    
    <li className="inline-flex items-center bg-sky-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href = "https://www.linkedin.com/in/maheen-imtiaz-635a792b5/">LINKDIN</Link></li>
    
    <li className="inline-flex items-center bg-pink-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href="https://www.instagram.com/stories/dayswith_mi/">INSTAGRAM</Link></li>
    
    <li className="inline-flex items-center bg-sky-950 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href ="https://www.facebook.com/profile.php?id=100005773187338">FACEBOOK</Link></li>
    
    <li className="inline-flex items-center bg-purple-950 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base"><Link href ="https://discord.com/channels/790484092772548613/1210170964550352956">DISCORD</Link></li>
    </ul>
    </div>



    <div className='bg-cover bg-center h-screen' style={{backgroundImage: "url('/images/bg.jpg')"}} >
        <div className="bg-black text-center" >
        
            
            <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-extrabold text-4xl md:text-6xl lg:text-7xl text-center py-4 hover:scale-105 transition-transform duration-300">ABOUT</h1>
            
            <div className="text-white">
            
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



                <img 
                src="https://www.usatoday.com/gcdn/-mm-/68e8b71abbc8efef5b45bf1c5911e8d646995f16/c=287-0-4712-2500/local/-/media/2016/08/05/USATODAY/USATODAY/636060156765079848-DSC-1135.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
                alt="MAHEEN IMTIAZ"
                width={200}
                height={100}
                className="w-1/2"
              />



            </div>
            {/* bg-gradient-to-r from-purple-500 to-blue-500 text-center? */}
        
        </div>
        
        </div>
        























         
      </>
      </main>

  )
}