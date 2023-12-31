import React, { useState } from "react"
import Logo from '../assets/logo.png'
import { styled } from 'styled-components'
import "./css/Navbar.css"

export function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Inicio");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <>
      {/*<!-- Component: Basic Navbar --> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="#"
            >
              <Img src={Logo} />
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
                }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  onClick={() => handleItemClick('Inicio')}
                  className={` ${activeItem === 'Inicio' ? "actives" : ""} flex items-center gap-2 py-4 transition-colors duration-300 hover:text-red-600 focus:bg-red-50 focus:outline-none focus-visible:outline-none lg:px-8`}
                  href="/"
                >
                  <span className="text-lg" >Inicio</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  onClick={() => handleItemClick('Nosotros')}
                  className={` ${activeItem === 'Nosotros' ? "actives" : ""} flex items-center gap-2 py-4 transition-colors duration-300 hover:text-red-600 focus:bg-red-50 focus:outline-none focus-visible:outline-none lg:px-8`}
                  href="/#/nosotros"
                >
                  <span className="text-lg" >Nosotros</span>
                </a>
              </li>
              <li role="none" className="flex items-center" >
                <div className="">
                  <div className="group inline-block relative">
                    <a
                      className={` ${activeItem === 'Servicios' ? "actives" : ""} flex items-center gap-2 py-4 transition-colors duration-300 hover:text-red-600 focus:bg-red-50 focus:outline-none focus-visible:outline-none lg:px-8`}
                    >
                      <span className="text-lg">Servicios</span>
                      
                    </a>
                    <ul className="options absolute hidden w-44 text-gray-700 pt-1 group-hover:block">
                      <li className="">
                        <a
                         onClick={() => handleItemClick('Servicios')}
                          className="rounded-t bg-gray-200 hover:text-red-500  py-2 px-4 block "
                          href="/#/servicios/diseño"
                        >Diseño Estructural</a
                        >
                      </li>
                      <li className="">
                        <a
                          className="bg-gray-200 hover:text-red-500 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >Gestión</a
                        >
                      </li>
                      <li className="">
                        <a
                          className="rounded-b bg-gray-200 hover:text-red-500  py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >Supervición</a
                        >
                      </li>
                      <li className="">
                        <a
                          className="rounded-b bg-gray-200 hover:text-red-500  py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >Construcción</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  onClick={() => handleItemClick('Experiencia')}
                  className={`${activeItem === 'Experiencia' ? "actives" : ""} flex items-center gap-2 py-4 transition-colors duration-300 hover:text-red-600 focus:bg-red-50 focus:outline-none focus-visible:outline-none lg:px-8`}
                  href="/#/experiencia"
                >
                  <span className="text-lg" >Experiencia</span>
                </a  >
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  onClick={() => handleItemClick('Contacto')}
                  className="flex items-center gap-2 py-4 transition-colors duration-300  hover:text-red-600 focus:bg-red-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="/#/contacto"
                >
                  <span className="bg-red-600 p-3 text-white border-2 text-lg  rounded-xl hover:bg-blue-600 hover:text-white">Contacto</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Basic Navbar--> */}
    </>
  )
}


const Img = styled.img`
    width: 250px;
    border-radius: 10px;
    transition: 1.5s ease;
    @media screen and (max-width:570px){
        max-width: 150px;
    } 
`
