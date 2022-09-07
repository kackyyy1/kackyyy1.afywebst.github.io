import Link from 'next/link';
import Head from  'next/head';
import React, { useState } from 'react';

export default function Header() {

  const data = [
    { name: 'Home', link: '' },
    { name: 'Biography', link: 'biography' },
    { name: 'Live Schedule', link: 'schedule'},
    { name: 'Discography', link:'discography'},
    { name: 'Ticket', link:'ticket'},
    { name: 'Contact', link:'contact'}
  ];

  const [openMenu, setOpenMenu] = useState(false);

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>aifuyou | Official Web Site</title>
      <meta name="description" content="東京出身の5人組、女性ボーカルバンド。 
          アンビエント・シューゲイザー・ポストロックを織り交ぜた、独自の音楽性を展開する。" />
      <link rel="icon" href="favicon.ico" />
      </Head>

      <header className='sticky top-0 text-gray-200 border-b　z-20 bg-black'>

      {openMenu ? (
        <div className='flex flex-row absolute z-20 top-0 right-0  min-h-fit min-w-full'>
          <div className='basis-1/2'></div>

          <div className='basis-1/2 bg-gray-600'>
            <ul className=' text-center border-l-2 '>
              <li className='p-2 border-b-2'>
                <button onClick={menuFunction} className='font-bold'>
                  close
                </button>
              </li>
              {data.map((value, index) => (
                <li key={index} className='p-2 border-b-2'>
                  <Link href={`/${value.link}`}>
                    <a onClick={menuFunction}>
                      {value.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : undefined}
        <nav ckassName="z-20">
          <div> 
            <ul className='md:flex max-w-4xl mx-auto hidden justify-between items-center h-20'>
              {data.map((value, index) => (
                <li key={index} className='p-2'>
                    <Link href={`/${value.link}`}>
                      <a className="flex p-1 transition ease-in-out delay-150 bg-white-500 rounded-md hover:-translate-y-1 hover:scale-100 hover:bg-gray-500 duration-300 ...">
                        {value.name}
                      </a>
                    </Link>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={menuFunction} className='flex-initial fixed top-2 right-2 md:hidden'>
            <img src='menuicon.png' alt='menu' width={35} height={35} />
          </button>
        </nav>
      </header>
    </div>
   );
};
