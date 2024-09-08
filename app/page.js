"use client"
import NavBar from '../Components/NavBar/page';
import Image from 'next/image';
import Meta from "@/Image/smiling.jpg"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Footer from '@/Components/Footer/page'
import Logo from "@/Image/Logo.png"
import photo from "@/Image/smiling.jpg"
import Slideshow from '@/Components/Sildeshow/page';
export default function Home() {
  return (
    <div className='absolute'>
      <NavBar />
      <section
        id="about"
        className="text-white h-screen  text-center  flex bg-gradient-to-r from-violet-500 to-fuchsia-50 "
      >
        {/* <div class=" bg-cover bg-center h-64 text-center flex items-center justify-center">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold   ">
          Hearing Testing
        </h1>
</div> */}
<article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
<Image src={photo} alt='image'/>

    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Speech Therapy</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">specialist</div>
</article>
<p>we care for you</p>
      </section>
      <section id="blog" className=" text-white h-screen bg-purple-900 flex flex-col" style={{ backgroundImage: `url(${photo})`}}>
        <h1 className="m-auto font-waterfall text-4xl text-white font-bold">
          OAE(new born screening)
        </h1>
        <span className="m-auto font-waterfall text-4xl text-white font-bold">
        Early detection of potential hearing issues<br/>
        Quick, painless, and non-invasive test<br/>
        </span>
      </section>
      <section
        id="contact"
        className="text-white h-screen bg-black  text-center flex bg-gradient-to-r from-violet-500 to-fuchsia-50"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          AVT(Auditory verbal Therapy) speech Therapy
        </h1>
        <span className="m-auto font-waterfall text-7xl text-white font-bold">

        </span>
      </section>
      <section
        id="projects"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Hearing Aids
        </h1>
        <span className="m-auto font-waterfall text-7xl text-white font-bold">

</span>
      </section>
      <section><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.785545699967!2d76.47821527315914!3d10.116632571020768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e2f70f4697d9%3A0xd2dadd242a2f51d5!2sHearwell%20speech!5e0!3m2!1sen!2sin!4v1725134664944!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></section>
     <section><Footer/></section>
      <span className='relative'>
      <FloatingWhatsApp phoneNumber='9207562728' accountName='HearWell' darkMode chatMessage='Hi there ' statusMessage='Online' allowEsc placeholder='please connect as' avatar={"Image/Logo.png"}/>
      </span>
    </div>
  );
}
