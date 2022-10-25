import { motion } from 'framer-motion'
import Image from 'next/image'
import Socials from './socials'

const Profile = () => {
    return (
        <div className='flex flex-col py-10 items-center space-y-10 md:flex-row md:space-x-[50px] md:space-y-0 md:py-28'>
            <div className='rounded-full w-[250px] border-[14px] dark:border-darkLightBackground shadow-lg md:w-[500px]'>
                <Image src="/profile.jpg" layout='responsive' width={900} height={900} alt="Profile picture" className='rounded-full' priority/>
            </div>

            <div className="flex flex-col justify-self-center">
                <h3 className='font-serif text-xs dark:text-darkAccent pb-1 md:text-sm'>Hi, my name is</h3>
                <h1 className='font-sans font-extrabold text-4xl pb-4 md:text-5xl'>Ryan Jin</h1>
                <p className='font-serif text-sm md:text-base'>
                    I'm a <span className='dark:text-darkAccent'>Computer Science Student</span> based in Gothenburg, Sweden. 
                    Currently, I'm focused on <span className='dark:text-darkAccent'>simulation models</span>, 
                    <span className='dark:text-darkAccent'> web development</span> and topics related 
                    to <span className='dark:text-darkAccent'>Linux</span>.
                </p>

                <Socials />
            </div>
        </div>
    )
}

export default Profile