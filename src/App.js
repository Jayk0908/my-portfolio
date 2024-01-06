import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SkillsList from './components/Skillslist';

export default function App() {
  const projectsRef = useRef(null);

  const handleScrollToProjects = () => {
    const scrollOffset = 225;
    window.scrollTo({ top: projectsRef.current?.offsetTop - scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute h-full w-full bg-opacity bg-[radial-gradient(#000080_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="relative min-h-screen">
        <div className="max-lg:invisible visible absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/MgRf0nMlcAlYxmzm/scene.splinecode" />
        </div>

        {/* Header */}
        <div className='max-lg:text-center text-black text-8xl font-extrabold font-league-spartan absolute top-8 inset-x-20 max-lg:pt-10 max-sm:text-7xl max-sm:inset-x-0' style={{ pointerEvents: 'none' }}>
          <h1>JAY KLOS</h1>
        </div>

        {/* About Section */}
        <div>
          <div className='max-lg:inset-x-0 rounded-lg absolute inset-y-64 right-8 flex flex-col items-center z-10 max:lg:p-8' style={{ pointerEvents: 'none' }}>
            <div className='max-lg:text-center pb-8 pl-8 max-lg:pr-8 bg-white bg-opacity-100 inline text-black max-3xl:text-5xl max-2xl:text-4xl max-xl:text-3xl font-extrabold font-league-spartan'>
              <h1>I am an <br /> innovative developer</h1>
              <h1 className='font-bold pt-4 max-3xl:text-3xl max-2xl:text-2xl max-xl:text-lg'>This means I am able to create ideas <br /> for complex IT-related issues</h1>
              <h1 className='font-bold pt-4 max-3xl:text-3xl max-2xl:text-2xl max-xl:text-lg'>I specialize in solving these problems <br /> through UI/UX design</h1>
            </div>
          </div>

        </div>

        {/* Contact Button */}
        <button className='absolute max-lg:inset-x-0 max-lg:inset-y-128 lg:top-12 lg:right-20 z-10 text-2xl font-bold text-white'>
          <a href="mailto:jayklos0908@gmail.com" className="text-white bg-black py-2 px-4 font-spartan rounded-lg">CONTACT ME</a>
        </button>

        {/* Arrow SVG */}
        <div
          className=' max-lg:inset-x-0 absolute max-lg:inset-y-136 lg:inset-y-96 max-3xl:left-48 max-2xl:left-20 max-xl:left-10 z-10 p-8'
          onClick={handleScrollToProjects}
        >
        <div className='lg:bg-white bg-opacity-100 rounded-full flex flex-col items-center p-2 '>
          <h1 className='font-spartan text-3xl max-xl:text-2xl font-bold mb-2 cursor-pointer'>See my projects below</h1>
          <svg className="text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="50" height="50">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m-7-7l7 7 7-7"></path>
            <line x1="12" y1="3" x2="12" y2="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
          </svg>
        </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className='pt-6 Lg:pl-20 lg:pb-20 bg-white bg-opacity-100'>
        <h1 className='p-12 text-5xl max-lg:text-center font-extrabold'>PROJECTS</h1>
      </div>
      <div ref={projectsRef} className='font-spartan p-8' style={{ paddingTop: 'calc(50vh - 40rem)' }}>
        <div className="flex max-lg:flex-col px-12">
          {/* Square 1 */}
          <div className="lg:flex-1 z-1 max-lg:pb-8 lg:m-2 relative">
            <a href="https://www.diseum-gallery.com/" target="_blank" rel="noopener noreferrer">
              <div className="group w-full h-full overflow-hidden rounded-lg relative">
                <img src="./Images/Diseum.png" alt="Project 1" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-0 p-4  group-hover:bg-opacity-100">
                  <h2 className="text-white text-xl max-lg:text-base font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Diseum Galleries</h2>
                  <p className="max-lg:text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">An innovative way to exhibit digital art</p>
                </div>
              </div>
            </a>
          </div>

          {/* Square 2 */}
          <div className="flex-1 z-10 max-lg:pt-8 lg:m-2 relative">
            <a href="https://www.zzpj.nl" target="_blank" rel="noopener noreferrer">
              <div className="group w-full h-full overflow-hidden rounded-lg border-2 relative">
                <img src="./Images/ZZPJ.png" alt="Project 2" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-0 p-4 group-hover:bg-opacity-100">
                  <h2 className="max-lg:text-base text-white text-xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">ZZPJ.nl</h2>
                  <p className="max-lg:text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Landing page for a company</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Tools & Skills Section */}
      <div className='pt-32 max-lg:pt-20 lg:pl-20 pb-5 font-spartan font-extrabold text-5xl max-lg:text-4xl max-lg:text-center'><h1>TOOLS & SKILLS</h1></div>
      <div>
        <SkillsList />
      </div>
    </div>
  );
}
