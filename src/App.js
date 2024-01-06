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
        {/* Background Spline scene */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/MgRf0nMlcAlYxmzm/scene.splinecode" />
        </div>

        {/* Adjusted the styles for the div containing h1 */}
        <div className='absolute inset-x-20 top-8 flex justify-between z-10 text-black' style={{ pointerEvents: 'none' }}>
          <h1 className="text-8xl font-extrabold font-league-spartan">JAY KLOS</h1>
        </div>

        {/* Adjusted the styles for the div containing h3 */}
        <div className='bg-white bg-opacity-100 rounded-lg absolute inset-y-64 right-8 flex flex-col z-10 p-8' style={{ pointerEvents: 'none' }}>
          <div className='inline text-black text-5xl font-extrabold font-league-spartan'>
            <h1>I am an <br/> innovative developer</h1>
            <h1 className='text-3xl font-bold pt-4'>This means I am able to create ideas <br/> for complex IT-related issues</h1>
            <h1 className='text-3xl font-bold pt-4'>I specialize in solving these problems <br/> through UI/UX design</h1>
          </div>
        </div>
        <div className='absolute bottom-[18rem] right-[29rem] flex items-center justify-center space-x-4 z-10'>
          <a href="https://www.instagram.com/Jayrk13/" target="_blank" rel="noopener noreferrer" className="text-black">
           <FontAwesomeIcon icon={faInstagram} size="4x" />
          </a>
           <a href="https://www.linkedin.com/in/jay-klos-a3b86a196/" target="_blank" rel="noopener noreferrer" className="text-black">
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </a>
        </div>

        {/* Button with absolute positioning */}
        <button className='absolute top-12 right-20 z-10 bg-black text-2xl font-bold text-white py-2 px-4 font-spartan rounded-lg'>
          <a href="mailto:jayklos0908@gmail.com" className="text-white">CONTACT ME</a>
        </button>

        {/* Arrow SVG in the "See my projects" div */}
        <div
          className='absolute inset-y-96 left-48 flex flex-col items-center justify-center z-10 p-8 bg-white bg-opacity-100 rounded-full'
          onClick={handleScrollToProjects}
        >
          <h1 className='font-spartan text-3xl font-bold mb-2 cursor-pointer'>See my projects below</h1>
          <svg className="text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="50" height="50">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m-7-7l7 7 7-7"></path>
            <line x1="12" y1="3" x2="12" y2="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
          </svg>
        </div>
      </div>

      <div className='pt-6 pl-20 pb-20 bg-white bg-opacity-100'>
        <h1 className='p-12 text-5xl font-extrabold'>PROJECTS</h1>
      </div>

      <div ref={projectsRef} className='font-spartan p-8' style={{ paddingTop: 'calc(50vh - 40rem)' }}>
        <div className="flex px-12">
          {/* Square 1 */}
          <div className="flex-1 z-1 m-2 p-8 relative">
            <a href="https://www.diseum-gallery.com/" target="_blank" rel="noopener noreferrer">
              {/* Background Image */}
              <div className="group w-full h-full overflow-hidden rounded-lg mb-4 relative">
                <img src="./Images/Diseum.png" alt="Project 1" className="w-full h-full object-cover" />

                {/* Content for Project 1 */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-0 p-4  group-hover:bg-opacity-100">
                  <h2 className="text-white text-xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Diseum Galleries</h2>
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">An innovative way to exhibit digital art</p>
                </div>
              </div>
            </a>
          </div>

          {/* Square 2 */}
          <div className="flex-1 z-10 m-2 p-8 relative">
            {/* Clickable Project 2 */}
            <a href="https://www.zzpj.nl" target="_blank" rel="noopener noreferrer">
              {/* Background Image */}
              <div className="group w-full h-full overflow-hidden rounded-lg mb-4 border-2 relative">
                <img src="./Images/ZZPJ.png" alt="Project 2" className="w-full h-full object-cover" />

                {/* Content for Project 2 */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-0 p-4 group-hover:bg-opacity-100">
                  <h2 className="text-white text-xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">ZZPJ.nl</h2>
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Landing page for a company</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div 
      className='pt-32 pl-20 pb-5 font-spartan font-extrabold text-5xl'><h1>TOOLS & SKILLS</h1>
      </div>
      <div>
        <SkillsList/>
      </div>

    </div>
  );
}
