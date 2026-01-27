import Socials from "./Socials"

const Footer = () => {
  return (
    <footer className="bg-secondary pt-12">
      <div className='max-w-7xl mx-auto px-4'>
        <div className="flex flex-col items-center justify-between">
          {/* Socials */}
          <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' iconsStyles='text-primary dark:text-white/70 hover:text-white dark:hover:text-primary transition-all text-[20px]' />
          {/* Copy Rights */}
          <div className="text-muted-foreground">
            Copyright &copy; Ramees Raja. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer