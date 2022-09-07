export default function bgImage() {
  return (
    
    <>
        <div className="hidden md:inline-block fixed top-0 left-0 w-full h-screen z-[-1]">
            <img src='/topImage2.png' layout="fill" objectFit="cover" alt=""/>
        </div>
    
        <div className="">
            <img src='/topImage2.png' className="mx-auto md:hidden fixed top-0 left-0 w-full h-screen z-[-1]" layout="fill" objectFit="cover" alt=""/>
        </div>
    </>
  )
}