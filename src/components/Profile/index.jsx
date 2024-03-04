import Shiny from '../Shiny'
import girl from '../../assets/girl-bro.png'

const Profile = () => {
    return (
        <>
            <div className=' max-w-[1440px] mx-auto pt-10' id='profile'>
                <Shiny className="text-2xl my-0 pt-10 px-10 text-center">Profile</Shiny>

                <div className='flex justify-around items-center px-12'>


                    <img src={girl} className='w-full max-w-[700px]' />



                    <p className='text-md my-0 max-w-[50%]'>Passionate about the intersection of art and technology, I have gained valuable experience as a front-end developer,
dedicated to crafting and maintaining websites for prominent clients in the news industry, with an impressive daily
traffic of approximately 1 million unique users. I am driven by a desire for professional growth, aspiring to continually
enhance my IT skills. My goal is to contribute to technological accessibility, striving to simplify the lives of others
through innovative solutions</p>

                </div>
            </div>
        </>
    )

}

export default Profile