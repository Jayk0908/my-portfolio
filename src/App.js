import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import Spline from '@splinetool/react-spline';
import SkillsList from './components/Skillslist';
import ColorTest from './components/ColorTest';

export default function App() {
const projectsRef = useRef(null);

  const handleScrollToProjects = () => {
    const scrollOffset = 225;
    window.scrollTo({ top: projectsRef.current?.offsetTop - scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute h-full w-full bg-opacity bg-[radial-gradient(#000080_1px,transparent_1px)] [background-size:24px_24px]"></div>

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
      <div className='pt-6 Lg:pl-20 bg-white bg-opacity-100'>
        <h1 className='p-12 text-5xl max-lg:text-center font-extrabold font-spartan'>PROJECTS</h1>
      </div>
      <div className='z-10'>
        <p className='font-spartan pb-10 lg:text-2xl px-20'>During my bachelor to become an innovative developer i've learnt to use my creativity
        to solve complex it-related problems. Here are two im very proud of:
          </p>
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
      <div className='pt-32 max-lg:pt-20 lg:pl-20 pb-10 font-spartan font-extrabold text-5xl max-lg:text-4xl max-lg:text-center'>
        <h1>TOOLS & SKILLS</h1>
      </div>
      <div className='z-10'>
        <p className='font-spartan pb-10 lg:text-2xl px-20'>Along my journey of becoming a innovative developer i've learnt several skills and tools to solve 
        the complex problems handed to me. Here are some listed with my proficiency for each of them.
          </p>
      </div>
      <div>
        <SkillsList />
      </div>

      {/* Personality Section */}
      <div className="pt-16 max-lg:pt-10 lg:pl-20 pb-5 font-spartan font-extrabold text-5xl max-lg:text-4xl max-lg:text-center">
        <h1>PERSONALITY</h1>
      </div>
      <div className="flex max-lg:flex-col pt-10 pb-20 px-10 lg:pl-20">

        {/* Big 5 Results */}
        <div className="lg:w-1/2 lg:pr-4 max-lg:pb-10">
          <h2 className="text-3xl font-bold mb-4 max-lg:text-center">Big 5 Results</h2>
          {/* Explanation of the Big 5 Personality Test */}
          <div className="my-2 text-sm">
            <p>
              Each of these dimension provides insights into different aspects of my behavior, preferences, and tendencies.
              The percentages represent my scores in each dimension, reflecting the degree to which I exhibit certain personality traits.
            </p>
          </div>
          {/* Openness to Experiences */}
          <div className="mb-4 relative">
            <p className="text-lg font-bold">Openness to Experiences</p>
            <div className="flex items-center">
              <div className="flex-grow h-6 bg-gray-200 rounded-full">
                <div
                  className="h-6 bg-green-500 rounded-full relative"
                  style={{ width: '45%' }}
                >
                  <div className="absolute top-0 right-0 transform translate-x-full p-1">
                    <p className="text-xs">{45}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conscientiousness */}
          <div className="mb-4 relative">
            <p className="text-lg font-bold">Conscientiousness</p>
            <div className="flex items-center">
              <div className="flex-grow h-6 bg-gray-200 rounded-full">
                <div
                  className="h-6 bg-green-300 rounded-full relative"
                  style={{ width: '2%' }}
                >
                  <div className="absolute top-0 right-0 transform translate-x-full p-1">
                    <p className="text-xs">{2}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Extroversion */}
          <div className="mb-4 relative">
            <p className="text-lg font-bold">Extroversion</p>
            <div className="flex items-center">
              <div className="flex-grow h-6 bg-gray-200 rounded-full">
                <div
                  className="h-6 bg-green-500 rounded-full relative"
                  style={{ width: '72%' }}
                >
                  <div className="absolute top-0 right-0 transform translate-x-full p-1">
                    <p className="text-xs">{72}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div className="mb-4 relative">
            <p className="text-lg font-bold">Compliance</p>
            <div className="flex items-center">
              <div className="flex-grow h-6 bg-gray-200 rounded-full">
                <div
                  className="h-6 bg-green-300 rounded-full relative"
                  style={{ width: '19%' }}
                >
                  <div className="absolute top-0 right-0 transform translate-x-full p-1">
                    <p className="text-xs">{19}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Natural Reactions */}
          <div className="relative">
            <p className="text-lg font-bold">Natural Reactions</p>
            <div className="flex items-center">
              <div className="flex-grow h-6 bg-gray-200 rounded-full">
                <div
                  className="h-6 bg-green-500 rounded-full relative"
                  style={{ width: '16%' }}
                >
                  <div className="absolute top-0 right-0 bottom-0 transform translate-x-full p-1">
                    <p className="text-xs">{16}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Color Test */}
        <div className="z-10 lg:w-1/2 lg:pl-4 lg:pb-10">
          <h2 className="text-3xl font-bold mb-4">Color Test</h2>
          <div className='z-10'>
            <p className='text-sm bg-white'>Leon de Caluwé's color test is a psychological tool designed to assess an individual's cognitive preferences 
              and styles of thinking by associating them with five distinct colors. Each color represents a specific approach 
              to problem-solving, communication, and collaboration, offering insights into one's professional and personal interactions.</p>
          </div>
          <ColorTest />
        </div>
      </div>
      
      <div className="pt-16 max-lg:pt-10 lg:pl-20 pb-5 font-spartan font-extrabold text-5xl max-lg:text-4xl max-lg:text-center">
        <h1>WHAT DO I WANT </h1>
      </div>
      <div className='z-10 pb-20'>
        <p className='relative bg-white text-2xl font-spartan mx-20 py-5'> 
        I want to work for a company that respects me as a professional. I respect everyone's views and beliefs and what they bring to the table as a professional
        and I expect nothing less from my colleagues and managers. Although there needs to be structure inside of a company I don't like to be bossed around, I think
        a respectful relationship between the managers and colleagues creates a better working culture. Other than that all I need is a computer, some colleagues who
        I can joke around with and I think thats the perfect recipe for an ideal workplace.
        </p>
      </div>

    </div>
  );
}
