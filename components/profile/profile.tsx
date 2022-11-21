import Image from 'next/image'
import Socials from './socials'

const Profile = () => {
    return (
        <div className='flex flex-col pt-10 items-center space-y-10 md:flex-row md:space-x-[50px] md:space-y-0 md:pt-28'>
            <div className='rounded-full w-[250px] border-[14px] border-background dark:border-darkLightBackground drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)] md:w-[500px] flex-auto'>
                <Image src="/profile.jpg" layout='responsive' width={900} height={900} alt="Profile picture" className='rounded-full' priority/>
            </div>

            <div className="flex flex-col justify-self-center flex-auto md:w-[1200px]">
                <h3 className='font-serif text-sm text-darkAccent pb-1 md:text-base'>Hi, my name is</h3>
                <h1 className='font-sans font-extrabold text-4xl pb-4 md:text-6xl'>Ryan Jin</h1>
                <p className='font-serif text-base md:text-xl'>
                    I&apos;m a <span className='text-darkAccent'>Computer Science Student</span> based in Gothenburg, Sweden. 
                </p>

                <Socials />
            </div>
        </div>
    )
}

export default Profile