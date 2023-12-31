
import Divider from './Divider'

const Contact = () => {

    return (
        <div id="contact" className="z-[30] h-screen bg-gradient-to-tl  from-red-700 via-black/60 to-blue-900  md:h-[110vh] bg-blue-900 md:max-w-screen-xl mx-auto md:w-full">
            <h2 className="text-primary-900 font-bold py-4 text-center text-3xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate-reverse animate-fill-backwards">Connect With Me</h2>
            <Divider />
            <div className='md:w-[70%] w-full flex justify-center h-[99vh] p-4 bg-transparent mx-auto'>
                <form className='flex flex-col justify-center gap-4 md:gap-6 items-start md:w-[50%] mx-auto' action="https://getform.io/f/38778926-87ed-4562-9b03-a2309121f440" method='POST'>
                    <p className='text-gray-500'>Nice To Meet You!</p>

                    <input type="text" name='fname' id='fname' className='py-2 border-1 border-gray-800 bg-transparent focus:border-none placeholder:text-gray-500 placeholder:px-2 placeholder:font-thin placeholder:text-sm rounded-xl w-full' placeholder='Enter Your First name' required />
                    <input type="text" name='lname' id='lname' placeholder='Enter Your Last name' className='py-2 border-1 border-gray-800 bg-transparent focus:border-none placeholder:text-gray-500 placeholder:px-2 placeholder:font-thin placeholder:text-sm rounded-xl w-full' required />


                    <input className='py-2 border-1 border-gray-800 bg-transparent focus:border-none placeholder:text-gray-500 placeholder:px-2 placeholder:font-thin placeholder:text-sm rounded-xl w-full' type="email" name='email' id='email' placeholder='Enter You email' required />
                    <input className='py-2 border-1 border-gray-800 bg-transparent focus:border-none placeholder:text-gray-500 placeholder:px-2 placeholder:font-thin placeholder:text-sm rounded-xl w-full' type="tel" name='phone' id='phone' placeholder='Enter Your Phone No' required />


                    <input className='py-2 border-1 border-gray-800 bg-transparent focus:border-none placeholder:text-gray-500 placeholder:px-2 placeholder:font-thin placeholder:text-sm rounded-xl w-full' type="text" name='msg' id='msg' placeholder='Enter type your Message' required />
                    <button type='submit' className='py-2 px-16  rounded-2xl bg-gradient-to-tr from-black/60 via-blue-700 to-red-700 hover:scale-105 transition-all duration-250 delay-100 ease-in-out w-full'>Submit</button>

                </form>
            </div>

        </div>
    )
}
export default Contact