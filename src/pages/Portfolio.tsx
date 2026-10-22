import { useState } from 'react'
import ProjectLightbox from '../components/ui/ProjectLightbox'

import PortfolioCRT from '../components/ui/PortfolioCRT'

const projectPathFullVideo = (filename: string) =>
  `${import.meta.env.BASE_URL}media/videos/full/${encodeURIComponent(filename)}`
const projectPathPreviewVideo = (filename: string) =>
  `${import.meta.env.BASE_URL}media/videos/preview/${encodeURIComponent(filename)}`
const projectPathImage = (filename: string) =>
  `${import.meta.env.BASE_URL}media/images/${encodeURIComponent(filename)}`

type ProjectMedia = {
  media: string
  type: 'image' | 'video'
  alt: string
  thumbnail?: string
}

type Project = {
  title: string
  description: string
  media: string
  preview?: string
  type: 'image' | 'video'
  alt: string
  thumbnail?: string
  blurBackground?: boolean
  additionalMedia?: ProjectMedia[]
}

const motionProjects: Project[] = [
  {
    title: 'Pinesbarrow Stopmotion Countdown',
    description: 'A countdown animation that focused on leveraging scanned graphics, textures, and effects to create a stop-motion aesthetic. Accepted into the the Houghton University 36th Annual Juried Student Exhibition.',
    media: projectPathFullVideo('Pinesbarrow Countdown_Full.mp4'),
    preview: projectPathPreviewVideo('Pinesbarrow Countdown_Preview.mp4'),
    type: 'video',
    alt: 'Pinesbarrow Stopmotion Countdown',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Pinesbarrow Countdown.jpg`
  },
  {
    title: 'Bloodbarrow Trailer',
    description: 'A mock trailer for a hypothetical horror show titled Bloodbarrow inspired by experimental analog horror projects and seeking to mimic CRT-TV and VHS style distortions and texture.',
    media: projectPathFullVideo('Bloodbarrow Trailer_Full.mp4'),
    preview: projectPathPreviewVideo('Bloodbarrow Trailer_Preview.mp4'),
    type: 'video',
    alt: 'Bloodbarrow Trailer',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Bloodbarrow Trailer.jpg`,
  },
  {
    title: 'Ainulindale',
    description: 'A brief animated recounting of the creation of the world from J.R.R. Tolkien\'s The Silmarillion. Winner of the Ben Frank and Jean Moss Award for artistic excellence in the Houghton University 36th Annual Juried Student Exhibition.',
    media: projectPathFullVideo('Ainulindale Explainer Video_Full.mp4'),
    preview: projectPathPreviewVideo('Ainulindale Explainer Video_Preview.mp4'),
    type: 'video',
    alt: 'Ainulindale',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Ainulindale Explainer Video.jpg`,
  },
  {
    title: 'NES Controller Advertisement',
    description: 'A short 3D animated advertisement for an NES controller making use of LCD screen texture and glitch effects.',
    media: projectPathFullVideo('NES Controller Advertisement_Full.mp4'),
    preview: projectPathPreviewVideo('NES Controller Advertisement_Preview.mp4'),
    type: 'video',
    alt: 'NES Controller Advertisement',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/NES Controller Advertisement.jpg`,
    blurBackground: true,
  },
  // {
  //   title: 'Spotify Logo Animation',
  //   description: 'A 3D animation of the Spotify Logo that could be used for promotional advertisements.',
  //   media: projectPathFullVideo('Spotify Logo Animation_Full.mp4'),
  //   preview: projectPathPreviewVideo('Spotify Logo Animation_Preview.mp4'),
  //   type: 'video',
  //   alt: 'Spotify Logo Animation',
  //   thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Spotify Logo Animation.jpg`,
  // },
  {
    title: 'Windows 95 Styled Animated Joke',
    description: 'An animated question-response joke inspired by retro Windows 95 computer boot up sequences and OS interfaces.',
    media: projectPathFullVideo('Windows95 Joke_Full.mp4'),
    preview: projectPathPreviewVideo('Windows95 Joke_Preview.mp4'),
    type: 'video',
    alt: 'Windows 95 Styled Animated Joke',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Windows95 Joke.jpg`,
    blurBackground: true,
  },
  {
    title: 'Exposure Balance Explainer',
    description: 'An animated illustration of the balance of aperture, shutter speed, and ISO that affect the exposure of an image, created as part of a larger explainer video on camera exposure as a whole.',
    media: projectPathFullVideo('Exposure Balance_Full.mp4'),
    preview: projectPathPreviewVideo('Exposure Balance_Preview.mp4'),
    type: 'video',
    alt: 'Exposure Balance Explainer',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Exposure Balance.jpg`,
  },
  // {
  //   title: 'Hevel Explainer Animation',
  //   description: 'A research-based animated explainer exploring the Hebrew word "Hevel" and its meaning in the book of Ecclesiastes.',
  //   media: projectPathFullVideo('Hevel_Full.mp4'),
  //   preview: projectPathPreviewVideo('Hevel_Preview.mp4'),
  //   type: 'video',
  //   alt: 'Hevel Explainer Animation',
  //   thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Hevel.jpg`,
  // },
    {
    title: 'Exposure Triangle Title Card',
    description: 'An introductory title card created for a video project focused on explaining the exposure triangle in photography.',
    media: projectPathFullVideo('Exposure Triangle_Full.mp4'),
    preview: projectPathPreviewVideo('Exposure Triangle_Preview.mp4'),
    type: 'video',
    alt: 'Exposure Triangle Title Card',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Exposure Triangle.jpg`,
  },
  {
    title: 'Camera Setup Title Card',
    description: 'An introductory title card created for a video project focused on explaining how to set up a Sony A660 camera for video shooting. This graphic was designed with an alpha chanel to transition between video footage.',
    media: projectPathFullVideo('Camera Explainer Transition_Full.mp4'),
    preview: projectPathPreviewVideo('Camera Explainer Transition_Preview.mp4'),
    type: 'video',
    alt: 'Camera Setup Title Card',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Camera Explainer Transition.jpg`,
  },
  {
    title: 'Luthen\'s Monologue',
    description: 'A kinetic typography project set to a portion of Luthen\'s monologue from season 1, episode 10 of Andor focused on creating interesting motion with primarily typographic elements.',
    media: projectPathFullVideo('Kinetic Typography_Full.mp4'),
    preview: projectPathPreviewVideo('Kinetic Typography_Preview.mp4'),
    type: 'video',
    alt: 'Luthen\'s Monologue',
    thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Kinetic Typography.jpg`,
  },
  // {
  //   title: 'Lower Thirds Dragon',
  //   description: 'A vector based lower thirds animation featuring basic character rigging and animation to creating a dragon and fantasy aesthetic.',
  //   media: projectPathFullVideo('Lower Thirds_Full.mp4'),
  //   preview: projectPathPreviewVideo('Lower Thirds_Preview.mp4'),
  //   type: 'video',
  //   alt: 'Lower Thirds Dragon',
  //   thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Lower Thirds.jpg`,
  // },
  // {
  //   title: 'Skinamarink Review',
  //   description: 'A short video review of the experimental indie horror film Skinamarink that focused on creating a VHS and CRt aesthetic to match the film\'s style and tone.',
  //   media: projectPathFullVideo('Skinamarink Review_Full.mp4'),
  //   preview: projectPathPreviewVideo('Skinamarink Review_Preview.mp4'),
  //   type: 'video',
  //   alt: 'Motion graphics project',
  //   thumbnail: `${import.meta.env.BASE_URL}media/thumbnails/Skinamarink Review.jpg`,
  // },
]

const designProjects: Project[] = [
    {
    title: 'Stained Glass Warlock',
    description: 'A geometric stained glass style illustration of a warlock character designed using Adobe Photoshop.',
    media: projectPathImage('Stained Glass Warlock.jpg'),
    type: 'image',
    alt: 'Stained Glass Warlock',
  },
  {
    title: 'Polaroid Illustration',
    description: 'A vector based illustration of a polaroid camera designed using Adobe Illustrator.',
    media: projectPathImage('Polaroid Illustration.png'),
    type: 'image',
    alt: 'Polaroid Illustration',
  },
  // {
  //   title: 'AEE Warning Poster 1',
  //   description: 'A poster graphic designed as a set featuring an NES controller modeled from reference and styled with toon shaders as an analog horror inspired warning poster that mixed 3D and 2D elements.',
  //   media: projectPathImage('AAE Warning 1.jpg'),
  //   type: 'image',
  //   alt: 'AEE Warning Poster 1',
  // },
  // {
  //   title: 'AEE Warning Poster 2',
  //   description: 'A poster graphic designed as a set featuring a kitchen pan modeled from reference and styled with toon shaders as an analog horror inspired warning poster that mixed 3D and 2D elements.',
  //   media: projectPathImage('AAE Warning 2.jpg'),
  //   type: 'image',
  //   alt: 'AEE Warning Poster 2',
  // },
  // {
  //   title: 'AEE Warning Poster 3',
  //   description: 'A poster graphic designed as a set featuring an office desk modeled from reference and styled with toon shaders as an analog horror inspired warning poster that mixed 3D and 2D elements.',
  //   media: projectPathImage('AAE Warning 3.jpg'),
  //   type: 'image',
  //   alt: 'AEE Warning Poster 3',
  // },
  {
    title: 'AEE Warning Posters',
    description:
      'A set of three analog horror inspired warning posters featuring an NES controller, a kitchen pan, and an office desk. Each poster combines 3D models styled with toon shaders and 2D graphic elements to create a cohesive visual series.',
    media: projectPathImage('AAE Warning 1.jpg'),
    type: 'image',
    alt: 'AEE Warning Poster 1 featuring an NES controller',
    additionalMedia: [
      {
        media: projectPathImage('AAE Warning 2.jpg'),
        type: 'image',
        alt: 'AEE Warning Poster 2 featuring a kitchen pan',
      },
      {
        media: projectPathImage('AAE Warning 3.jpg'),
        type: 'image',
        alt: 'AEE Warning Poster 3 featuring an office desk',
      },
    ],
  },
  {
    title: 'Chess Club Poster',
    description: 'A poster graphic designed using Affinity Designer and Affinity Publisher to gather interest to start a new chess club at Houghton University.',
    media: projectPathImage('Chess Club Poster.png'),
    type: 'image',
    alt: 'Chess Club Poster',
  },
]

const sketchbookProjects: Project[] = [
  {
    title: 'Cemetery Statue',
    description: 'A pencil sketch of a gravestone statue found at Saint Bonaventure Cemetery in Savannah Georgia.',
    media: projectPathImage('Cemetery Statue.jpeg'),
    type: 'image',
    alt: 'Cemetery Statue Sketch',
  },
  {
    title: 'Oppenheimer',
    description: 'A portrait sketch of Cillian Murphy as J. Robert Oppenheimer from the movie Oppenheimer by Christopher Nolan.',
    media: projectPathImage('Oppenheimer.jpeg'),
    type: 'image',
    alt: 'Oppenheimer Sketch',
  },
  {
    title: 'The Grabber',
    description: 'A portrait sketch of Ethan Hawke wearing a mask as The Grabber from the movie The Black Phone.',
    media: projectPathImage('The Grabber.jpeg'),
    type: 'image',
    alt: 'The Grabber Sketch',
  },
  {
    title: 'Man in Suit',
    description: 'A sketch drawing of a man posing in a suit and fedora.',
    media: projectPathImage('Man in Suit.jpeg'),
    type: 'image',
    alt: 'Man in Suit Sketch',
  },
  {
    title: 'Woman in Dress',
    description: 'A sketch drawing of a woman posing in a flowing dress.',
    media: projectPathImage('Woman in Dress.jpeg'),
    type: 'image',
    alt: 'Woman in Dress Sketch',
  },
  {
    title: 'Chef Slowik',
    description: 'A portrait sketch of Ralph Fiennes as Chef Julian Slowik from the movie The Menu.',
    media: projectPathImage('Chef Slowik.jpeg'),
    type: 'image',
    alt: 'Chef Slowik Sketch',
  },
  {
    title: 'Portrait of a Woman',
    description: 'A portrait sketch of an old studio photograph of a young woman with dark, curled hair and a white dress.',
    media: projectPathImage('Woman Portrait.jpeg'),
    type: 'image',
    alt: 'Portrait of a Woman Sketch',
  },
    {
    title: 'Hands',
    description: 'Two sketches of hands drawn from life, one in a relaxed semi-open pose and the other in mid-snap.',
    media: projectPathImage('Hands.jpeg'),
    type: 'image',
    alt: 'Hands Sketch',
  },
  {
    title: 'Pinstripe Suit',
    description: 'A sketch of a man in a pinstripe suit.',
    media: projectPathImage('Pinstripe Suit.jpeg'),
    type: 'image',
    alt: 'Pinstripe Suit Sketch',
  }
]

const allProjects = [
  ...motionProjects,
  ...designProjects,
  ...sketchbookProjects,
]

function ProjectSection({
  id,
  title,
  projects,
  onOpen,
}: {
  id: string
  title: string
  projects: Project[]
  onOpen: (project: Project) => void
}) {
  return (
    <section id={id} className="mb-10">
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#777064]" />

        <h2 className="font-paroxysm text-[18px] tracking-[0.1em] text-[#332d27]">
          {title}
        </h2>

        <div className="h-px flex-1 bg-[#777064]" />
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <PortfolioCRT
            key={project.title}
            {...project}
            onOpen={() => onOpen(project)}
          />
        ))}
      </div>
    </section>
  )
}

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#dedcc4]">
      <div className="mx-auto w-full max-w-[1800px] px-0 pt-8 md:px-10 lg:px-16">
        <div className="min-w-0 px-6 py-0 sm:px-10 lg:px-14">

          {/* System Directory header */}
          <header className="mb-10 border-b-2 border-[#5c534b] pb-6 sm:mb-12 text-[#302b27]">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#756a5d] sm:text-sm">
              SYSTEM DIRECTORY / 02
            </p>

            <h1 className="font-paroxysm text-4xl leading-none tracking-tight sm:text-5xl lg:text-7xl">
              CREATIVE WORK
            </h1>

            <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-sm leading-7 sm:text-base">
                A collection of motion graphics, illustration, and
                graphic layout design exploring visual storytelling, movement, and
                experimental aesthetics.
              </p>

              <p className="font-mono text-xs leading-5 text-[#756a5d]">
                PROJECTS: {String(allProjects.length).padStart(2, '0')}
                <br />
                CATEGORIES: 03
              </p>
            </div>
          </header>

          
          {/* Category index */}
          <nav
            aria-label="Gallery category directory"
            className="mb-12"
          >

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <a
                href="#motion"
                className="
                  group flex min-w-0 items-center justify-between gap-3
                  border border-[#8c8174] bg-[#e3dfca]
                  px-3 py-3 font-mono text-xs
                  transition-colors
                  hover:bg-[#f0edda] hover:text-[#dedcc4]
                  focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-[#302b27]
                "
              >
                <span className="min-w-0">
                  <span className="mb-1 block text-[10px] text-[#756a5d] group-hover:text-[#c0b69f]">
                    DIRECTORY / 01
                  </span>
                  <span className="block">MOTION GRAPHICS</span>
                </span>
                <span aria-hidden="true">↘</span>
              </a>

              <a
                href="#design"
                className="
                  group flex min-w-0 items-center justify-between gap-3
                  border border-[#8c8174] bg-[#e3dfca]
                  px-3 py-3 font-mono text-xs
                  transition-colors
                  hover:bg-[#f0edda] hover:text-[#dedcc4]
                  focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-[#302b27]
                "
              >
                <span className="min-w-0">
                  <span className="mb-1 block text-[10px] text-[#756a5d] group-hover:text-[#c0b69f]">
                    DIRECTORY / 02
                  </span>
                  <span className="block">DESIGN</span>
                </span>
                <span aria-hidden="true">↘</span>
              </a>

              <a
                href="#sketchbook"
                className="
                  group flex min-w-0 items-center justify-between gap-3
                  border border-[#8c8174] bg-[#e3dfca]
                  px-3 py-3 font-mono text-xs
                  transition-colors
                  hover:bg-[#f0edda] hover:text-[#dedcc4]
                  focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-[#302b27]
                "
              >
                <span className="min-w-0">
                  <span className="mb-1 block text-[10px] text-[#756a5d] group-hover:text-[#c0b69f]">
                    DIRECTORY / 03
                  </span>
                  <span className="block">SKETCHBOOK</span>
                </span>
                <span aria-hidden="true">↘</span>
              </a>
            </div>
          </nav>

          {/* Project sections continue here */}
          <ProjectSection
            id="motion"
            title="MOTION GRAPHICS"
            projects={motionProjects}
            onOpen={setSelectedProject}
          />

          <ProjectSection
            id="design"
            title="DESIGN"
            projects={designProjects}
            onOpen={setSelectedProject}
          />

          <ProjectSection
            id="sketchbook"
            title="SKETCHBOOK"
            projects={sketchbookProjects}
            onOpen={setSelectedProject}
          />

          {/* Closing note */}
          <footer className="mt-10 border-t-2 border-[#5c534b] pt-5 sm:mt-14">
            <p className="font-mono text-[10px] tracking-[0.15em] text-[#756a5d] mb-10">
              END OF DIRECTORY // MORE PROJECTS TO COME
            </p>
          </footer>

        </div>
      </div>

      {selectedProject && (
        <ProjectLightbox
          project={selectedProject}
          projects={allProjects}
          onClose={() => setSelectedProject(null)}
          onNavigate={setSelectedProject}
        />
      )}
    </main>
  )
}

export default Portfolio