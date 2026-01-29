import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri';

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";



const Hero = () => {
  return <section className="py-10 xl:py-24 h-[84vh] xl:pt-6 hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between gap-x-8">
        {/* TEXT */}
        <div className="flex max-w-150 flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
          <div className="text-sm xl:text-xl uppercase font-semibold mb-4 text-primary tracking-[4px]">MERN Web Developer & Freelancer</div>
          <h1 className="h1">Hello, I'm <span className="text-primary">Ramees</span> Raja</h1>
          <h1 className="text-3xl xl:text-5xl pb-6 font-semibold">I build <span className="text-primary">fast</span>, modern websites that <span className="text-primary">help businesses</span> <span className="text-primary">grow</span> online.</h1>
          <p className="subtitle max-w-122.5 mx-auto xl:mx-0"> My work helps <span className="font-semibold">Startups</span> , <span className="font-semibold">Local Businesses</span>  and <span className="font-semibold">Organizations</span>  attract more  Customers, Streamline Operations, and grow their Online presence with Fast, Professional, and  <span className="font-semibold">Scalable</span> solutions.
          </p>
          {/* Buttons */}
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
            <Link href='/contact' target="_blank">
              <Button className="gap-x-2">Contact Me <Send size={18} /></Button>
            </Link>
            <Link href='https://drive.google.com/file/d/1s_h6_iRylpxelh3RMnbqrN3ENhhxXLzR/view?usp=drive_link' target="_blank">
            <Button variant="secondary" className="gap-x-2">Downoad CV <Download size={18} /></Button>
            </Link>
            
          </div>
          {/* Socials */}
          <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
        </div>
        {/* IMAGE */}
        <div className="hidden xl:flex relative">
          {/* Badge 1 */}
          <Badge containerStyles='absolute top-[20%] -left-[5rem]' icon={<RiBriefcase4Fill />} endCountNum={1} badgeText='Years of Experience' />
          {/* Badge 2 */}
          <Badge containerStyles='absolute top-[63%] -left-[1rem]' icon={<RiTodoFill />} endCountNum={10} endCounText='+' badgeText='Finished Projects' />
          {/* Badge 3 */}
          <Badge containerStyles='absolute top-[45%] -right-8' icon={<RiTeamFill />} endCountNum={10} endCounText='+' badgeText='Happy Clients' />
          <div className="bg-hero-shape2-light dark:bg-hero-shape2-dark w-125 h-125 bg-no-repeat absolute -top-1 -right-2"></div>
          <DevImg containerStyles='bg-hero-shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom ' imgSrc='/hero/developer2.png' />
        </div>
      </div>
      {/* ICON */}
      <div className="hidden md:flex absolute left-2/4 bottom-24 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </div>
  </section>
}


export default Hero
