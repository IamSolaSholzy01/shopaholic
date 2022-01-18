import React from 'react';
import { useImage } from 'react-image';
import logo from '../Images/logo.webp';
import './social.css';

const MyLogoComponent = () => {
    const { src } = useImage({
        srcList: logo,
    })
    const classList = 'w-1/3 md:w-32 lg:w-48'

    return <img src={src} alt="logo" className={classList} />
}


const Register = () => {

    const focusInput = (label: HTMLElement) => {
        console.log(label);
        label.classList.remove("translate-x-[16px]", "scale-100");
        label.classList.add("translate-x-[-9px]", "scale-75")
    }

  return (
        <div>
            <header className='w-100 flex content-center top-0 absolute p-[24px]'>
                <a href={'/'}><MyLogoComponent /></a>
            </header>
            <div className='w-full mx-auto block px-[16px]'>
                <div className="py-[96px]">
                    <div className="mb-[40px]">
                        <h4 className="mb-[8px] font-bold text-xl font-['Public_Sans']">Get started absolutely free.</h4>
                        <p className="font-['Public_Sans'] font-normal text-gray-500">Free forever. No credit card needed.</p>
                    </div>
                    <div className="flex flex-row">
                        <button className="m-0 social-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className='text-red-600'><path fill="currentColor" d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93a6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44a.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29A10.12 10.12 0 0 0 11.57 22A10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"></path></svg>
                        </button>
                        <button className="mx-[16px] social-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className='text-blue-600'><path fill="currentColor" d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"></path></svg>
                        </button>
                        <button className="m-0 social-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className='text-sky-500'><path fill="currentColor" d="M8.08 20A11.07 11.07 0 0 0 19.52 9A8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51a1.88 1.88 0 0 1-2.16-.38a3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24a9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"></path></svg>
                        </button>
                    </div>
                    <div className="my-[24px] mx-0 text-center border-none emphasize">
                        <span className="inline-block px-[9.6px]">
                            <p className="m-0 text-sm font-['Public_Sans'] font-normal text-gray-500">OR</p>
                        </span>
                    </div>
                    <form action="#" noValidate>
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <div className="inline-flex flex-col p-0 m-0 border-none min-w-[0px] relative w-full align-top">
                                    <label htmlFor="firstName" className="text-base font-normal p-0 block origin-top-left translate-y-[14px] translate-x-[16px] scale-100 text-gray-500 pointer-events-none z-[1] top-0 left-0 absolute" id="firstLabel">First name</label>
                                    <div className="font-['Public_Sans'] text-gray-800 font-normal text-base cursor-text inline-flex align-center w-full relative rounded-md box-border">
                                        <input onFocus={() => focusInput(document.getElementById('firstLabel')!)} type="text" name="firstName" className="input w-full m-0 h-6 py-[25.5px] px-[14px] border-none bg-none" id="firstName" />
                                        <fieldset className="border text-left absolute m-0 px-[8px] rounded-[inherit] pointer-events-none" style={{inset: '-5px 0 0'}}>
                                            <legend className="h-[11px] text-xs invisible focus:visible p-0 w-auto block max-w-[0.01px] transition-[max-width] duration-[50ms] ease-out">
                                                <span className="px-[5px] inline-block">First Name</span>
                                            </legend>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default Register;