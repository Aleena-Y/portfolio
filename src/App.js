
import Galaxy from './Galaxy';
import './App.css';
import PixelTransition from './PixelTransition';
import profile from './profile_ghost.png';
import BlobCursor from './BlobCursor';
import BlurText from "./BlurText";
import ScrollReveal from './ScrollReveal';
import DecayCard from './DecayCard';
import lms from './lms.jpg';
import vit from './vit.jpeg';
import sserd from './sserd.png';
import GooeyNav from './GooeyNav'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import InfiniteMenu from './InfiniteMenu'
import penguin from './penguin.jpg'
import mehendi from './mehendi.jpg'
import portrait from './portrait_shanya_real.jpg'
import bottle from './bottle.png'
import cards from './cardds.png'
import angel from './angel.png'
import spartificial from './spartificial.png'




const itemd = [
  {
    image: cards,
    description: 'This is pretty cool, right?'
  },
  {
    image: mehendi,
    link: 'https://google.com/',
    description: 'This is pretty cool, right?'
  },
  {
    image: angel,
    link: 'https://google.com/',
    description: 'This is pretty cool, right?'
  },
  {
    image: bottle,
    link: 'https://google.com/',
    description: 'This is pretty cool, right?'
  },
  {
    image: penguin,
    link: 'https://google.com/',
    description: 'This is pretty cool, right?'
  },
  {
    image: portrait,
    link: 'https://google.com/',
    description: 'This is pretty cool, right?'
  }

];
// update with your own items - use section anchor hrefs
const items = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Artwork", href: "#artwork" },
  { label: "Contact", href: "#contact" },

  { label: "Resume", href: "#resume" },
];


const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",  description: "Card 1" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",  description: "Card 2" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",  description: "Card 3" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",  description: "Card 4" }
];
  




function App() {
  return (
    <div className="App">
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 10000,
        background: 'rgba(0,0,0,0.2)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      <BlobCursor
  blobType="circle"
  fillColor="#000000ff"
  trailCount={3}
  sizes={[60, 125, 75]}
  innerSizes={[20, 35, 25]}
  innerColor="rgba(0, 0, 0, 0.8)"
  opacities={[0.6, 0.6, 0.6]}
  shadowColor="rgba(0, 0, 0, 0.75)"
  shadowBlur={5}
  shadowOffsetX={10}
  shadowOffsetY={10}
  filterStdDeviation={30}
  useFilter={true}
  fastDuration={0.1}
  slowDuration={0.5}
  zIndex={9}
/>

      {/* Galaxy Background — Stays Fixed Behind Everything */}
      <div style={{ 
        position: 'fixed', 
        top: 0, left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0.5
      }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>

  {/* Hero Section */}
  <div id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
        paddingTop: '3rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <PixelTransition
            firstContent={
              <img
                src={profile}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111"
                }}
              >
                <h2 style={{ color: 'white' }}>HI I'M</h2>
              </div>
            }
            gridSize={12}
            pixelColor='#ffffff'
            animationStepDuration={0.4}
            className="custom-pixel-card"
            style={{ width: 180, height: 160 }}
          />
          <h2 style={{ margin: 0, fontWeight: 900, fontSize: "2.5rem" }}>ALEENA YOGINDAR</h2>
        </div>
        <BlurText
        zIndex={-10}
  text="Engineering student student eager to contribute my skills and learn from real-world challenges"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-2xl mb-8"
/>
      </div>
      <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
  duration={2} // Increase this value for slower animation (try 2 or 3)
>
  The universes is precise
</ScrollReveal>
<ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
  duration={2} // Increase this value for slower animation (try 2 or 3)
>
  Every Single choice you made
</ScrollReveal>
<ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
  duration={2} // Increase this value for slower animation (try 2 or 3)
>
  Every single person you met
</ScrollReveal>
<ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
  duration={2} // Increase this value for slower animation (try 2 or 3)
>
  Every single step you took
</ScrollReveal>

{/* Add space between the two ScrollReveal components */}
<div  />

<ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
  duration={2} // Increase this value for slower animation (try 2 or 3)
>
  Has led you to this very moment
</ScrollReveal>
<ScrollReveal
  fontSize={5}
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
  duration={2} // Increase this value for slower animation (try 2 or 3)
>
  Now, allow me to show you my world
</ScrollReveal>

  {/* Portfolio Sections */}
  <Section id="education" title="Education" />
      <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
  margin: '2rem 0'
}}>
  <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem', // reduced gap for closer layout
  margin: '2rem 0'
}}>
  <div>
    <h4
      style={{
        color: 'white',
        fontSize: '1.5rem',
        textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #a0a0ff',
        fontWeight: 700,
        margin: 0,
        letterSpacing: '1px'
      }}
    >
      Lake Montfort School, Bengaluru <>2007- 2023</>
    </h4>
    <p
      className="school"
      style={{
        color: 'white',
        fontSize: '1.1rem',
        textShadow: '0 0 8px #fff, 0 0 16px #a0a0ff',
        marginTop: '1rem'
      }}
    >
      I spent most of my childhood in this school in bengaluru.
      It was a place where I learned<br/> the basics of education and <br/>made some of my best friends.<br/>
      passed out with a 94% in my 10th grade.<br/>
      and 91% in my 12th grade.
      
    </p>
  </div>
  <DecayCard width={500} height={400} image={lms} />
  </div> 
    </div>   
  
      <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
  margin: '2rem 0'
}}>
  <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem', // reduced gap for closer layout
  margin: '2rem 0'
}}>
  <div>
    <h4
      style={{
        color: 'white',
        fontSize: '1.5rem',
        textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #a0a0ff',
        fontWeight: 700,
        margin: 0,
        letterSpacing: '1px'
      }}
    >
      Vellore Institute of Technology, Chennai <br/><>2023-2027</>
    </h4>
    <p
      className="school"
      style={{
        color: 'white',
        fontSize: '1.1rem',
        textShadow: '0 0 8px #fff, 0 0 16px #a0a0ff',
        marginTop: '1rem'
      }}
    >
      Currently, I study here<br/> And I've learnt a lot of technical things here
      I am currently pursuing <br/> B.Tech in Computer Science and Engineering.<br/>
      CGPA: 8.66
      
    </p>
  </div>
  <DecayCard width={500} height={400} image={vit} />
  </div> 
    </div> 

<Section id="experience" title="Experience" />
      <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
  margin: '2rem 0'
}}>
  <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem', // reduced gap for closer layout
  margin: '2rem 0'
}}>
  <div>
    <h4
      style={{
        color: 'white',
        fontSize: '1.5rem',
        textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #a0a0ff',
        fontWeight: 700,
        margin: 0,
        letterSpacing: '1px'
      }}
    >
      International Asteroid Search campaign, SSERD <>March 2023 (summer)</>
    </h4>
    <p
      className="school"
      style={{
        color: 'white',
        fontSize: '1.1rem',
        textShadow: '0 0 8px #fff, 0 0 16px #a0a0ff',
        marginTop: '1rem'
      }}
    >
      I worked as a citizen scientist in the International Asteroid Search Campaign, <br/>
      where I used data from the Pan-STARRS telescope to search for asteroids. <br/>
      I was able to discover 1 asteroids and was awarded a certificate of achievement for my contributions.<br/>
  
      
    </p>
    <a href="https://drive.google.com/file/d/1NmNjvaUE82WBP42nnvzdQW8FWanv4Sj4/view?usp=sharing" target="_blank">
  <button class="glow-button">See Certificate</button>
</a>

  </div>
  <DecayCard width={500} height={300} image={sserd} zIndex={5}/>
  </div> 
    </div> 

      <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
  margin: '2rem 0'
}}>
  <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem', // reduced gap for closer layout
  margin: '2rem 0'
}}>
  <div>
    <h4
      style={{
        color: 'white',
        fontSize: '1.5rem',
        textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #a0a0ff',
        fontWeight: 700,
        margin: 0,
        letterSpacing: '1px'
      }}
    >
      ML Research Intern <>October - December 2023 (Winter)</>
    </h4>
    <p
      className="school"
      style={{
        color: 'white',
        fontSize: '1.1rem',
        textShadow: '0 0 8px #fff, 0 0 16px #a0a0ff',
        marginTop: '1rem'
      }}
    >
      I created a machine learning model based on ANN<br/>
      in order to classify hazardous and non hazardous asteroids from NASA JPL dataset.<br/>
      It had an accuracy of 91%.<br/>
    </p>
    <a href="https://drive.google.com/file/d/1NmNjvaUE82WBP42nnvzdQW8FWanv4Sj4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <button className="glow-button">See Certificate</button>
    </a>
  </div>
  <DecayCard width={500} height={400} image={spartificial} zIndex={5}/>
</div>
</div>

<Section id="projects" title="Projects" />

<Section id="artwork" title="Art Collection" />
<div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
  margin: '2rem 0'
}}>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem', // reduced gap for closer layout
  margin: '2rem 0'
}}>
  <div>
    <h4
      style={{
        color: 'white',
        fontSize: '1.5rem',
        textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #a0a0ff',
        fontWeight: 700,
        margin: 0,
        letterSpacing: '1px'
      }}
    >
      <>Drag around to view</>
    </h4>

  <InfiniteMenu items={itemd} height={500} width={1000}/>

  </div>
  </div> 
    </div> 
      {/* Render anchor placeholder sections so nav anchors have targets */}
      <AnchorPlaceholders />

    </div>
  );
}

// Section Component
function Section({ title, id }) {
  return (
    <div id={id}>
      <h2 style={{ fontSize: '2rem',  paddingBottom: '0.5rem' }}>
        {title}
      </h2>
    </div>
  );
}

export default App;

// Placeholder sections for anchor targets
// These could be replaced with richer content later.
export function AnchorPlaceholders() {
  return (
    <div>
      <section id="contact" style={{ padding: '6rem 1rem', color: 'white' }}>
        <h2>Contact</h2>
        <p>Contact details go here.</p>
      </section>

      

      <section id="resume" style={{ padding: '6rem 1rem', color: 'white' }}>
        <h2>Resume</h2>
        <p>Resume and downloadable CV can be linked here.</p>
      </section>
    </div>
  );
}