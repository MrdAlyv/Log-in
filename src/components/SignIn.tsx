import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../redux/slices/userSlice'
import '/src/index.css'
import leftSide from '/src/assets/pattern-c.png'

export interface ISignIn {
    SignIn: void
}



export interface IUserData {
    password: string,
    email: string,

}

export interface Ifunc {
    setPassword: string | ((value: string) => void),
    setEmail: string | ((value: string) => void)







}
const SignIn = () => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const signin: any = (e: any) => {
        e.preventDefault()
        dispatch(signIn({ password, email }))
    }




    return (
        <div>
            <div className="flex flex-wrap w-full" >

                <div className="flex flex-col w-full md:w-1/2">

                    <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                        <a href="#" className="p-4 text-xl font-bold text-white bg-black">Logo</a>
                    </div>

                    <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                        <p className="text-3xl text-center">Welcome.</p>
                        <form onSubmit={signin} className="flex flex-col pt-3 md:pt-8" >
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg">Email</label>
                                <input onChange={e => setEmail(e.target.value)} type="email" value={email} id="email" placeholder="your@email.com" className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                            </div>

                            <div className="flex flex-col pt-4">
                                <label htmlFor="password" className="text-lg">Password</label>
                                <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                            </div>

                            <button className="p-10 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700" >Log-in</button>
                        </form>
                        <div className="pt-12 pb-12 text-center">
                            <p>Don't have an account? <a href="#" className="font-semibold underline">Register here.</a></p>
                        </div>
                    </div>

                </div>

                <div className="w-1/2 shadow-2xl">
                    <img className="hidden object-cover w-full h-screen md:block " src={leftSide} />
                </div>
            </div>
        </div>
    )
};
export default SignIn; 
