import React from 'react';
import { useImage } from 'react-image';
import logo from '../Images/logo.webp'

const MyLogoComponent = () => {
    const { src } = useImage({
        srcList: logo,
    })
    const classList = 'w-1/3 md:w-32 lg:w-48'

    return <img src={src} alt="logo" className={classList} />
}


const Register = () => {

  return (
      <div>
          <header className='w-100 flex content-center top-0 absolute p-4'>
              <a href={'/'}><MyLogoComponent /></a>
          </header>
      </div>
  );
}

export default Register;