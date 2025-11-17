// src/data/projectDetailsData.js

const projectDetailsData = [
  {
    id: "alfredos-kitchen",
    title: "Alfredo's Kitchen",
    year: "2024",
    technologies: "Unity; C#",
    description:
      "For this assignment, my group and I created a serious game designed to help people working in, or aspiring to work in, a kitchen learn about food safety and kitchen hygiene in a fun and engaging way. For this game, I created the 3D models, produced simple animations, and worked on the rendering by implementing toon shading and point filtering to achieve a pixel-like 3D art style inspired by A Short Hike. I also developed the user interface functionality and created 2D assets for the UI components. In terms of gameplay features, I worked on elements such as the logic for the dialogue system using scriptable objects, player input, sound implementation, and other core interactions.",
    videos: ["alfredo.mov"],
    images: [
      "Screenshot 2025-11-17 at 13.17.01.png",
      "Screenshot 2025-11-17 at 13.17.48.png",
      "Screenshot 2025-11-17 at 13.18.18.png",
      "Screenshot 2025-11-17 at 13.19.24.png",
      "Screenshot 2025-11-17 at 13.20.43.png",
      "Screenshot 2025-11-17 at 15.15.33.png",
      "Screenshot 2025-11-17 at 15.16.56.png",
      "Screenshot 2025-11-17 at 15.15.10.png"
    ]
  },
  {
    id: "advanced-graphics",
    title: "Wavefront Path Tracer",
    year: "2024",
    technologies: "C++; OpenCL",
    description:
      "For this assignment we implemented a path tracer to render a 3D scene, using a Wavefront formulation proposed by Laine et al. in the paper Megakernels Considered Harmful: Wavefront Path Tracing on GPUs.",
    images: [
      "scene1.png",
      "depth_graph.png",
      "Kernel-sequence.png"
    ]
  },
  {
    id: "game-physics",
    title: "Game Physics",
    year: "2024",
    technologies: "Unity; C#",
    description:
      "For this assignment I implemented real-time cloth physics using a mass-spring system, and ray-ellipsoid intersection for collision.",
    videos: ["gamephysics2.gif"],
    images: [
      "Screenshot 2025-11-17 at 11.27.59.png",
      "Screenshot 2025-11-17 at 12.11.12.png",
      "Screenshot 2025-11-17 at 11.25.57.png",
      "Screenshot 2025-11-17 at 11.26.47.png",
      "Screenshot 2025-11-17 at 11.27.10.png",
      "Screenshot 2025-11-17 at 12.07.19.png"

    ]
  },
  {
    id: "space-neon-emotions",
    title: "Space Neon Emotions",
    year: "2020",
    technologies: "Unity; C#",
    description:
      "For this assignment, we developed an immersive VR application designed to support individuals dealing with anger-management challenges. My primary contributions included implementing pseudo-random generation of a 3D wire-loop game model using Bézier curves, with three progressively increasing difficulty levels. I also created several 3D assets using Maya.",
    videos: ["vr1.gif","vr2.gif"],
    images: [
      "vr1.png",
      "vr2.png",
      "vr3.png",
      "vr4.png",
      "vr5.png",
      "vr6.png",
      "vr7.jpg"
    ]
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    year: "2023",
    technologies: "OpenCV; Python",
    description:
      "This assignment was done together with one classmate. It consists of 3 steps. The first step is to do camera callibration to be able to project points in 3D space. This was done with camera intrinsic and extrinsic matrices. The second step was to create a 3D voxel representation, based on four images, taken from different angles. This is done by applying background subtraction to the images and 'carving' out the shape from a block of voxels. The third step was to create voxel models of moving targets (a video) and to trace the path taken by the people walking in the video. This was done using Gaussian Mixture Models and k-means clustering.",
    videos: [
      "https://www.youtube.com/embed/NRsRUhXpPS4?si=DqG2MyM_kuQg9mXX",
      "https://www.youtube.com/embed/RdLjnp3Jwfs?si=ogGfotdcTGB7wdoJ",
      "https://www.youtube.com/embed/AmRPcpt-CCg?si=sQUVI67pWaosZ9kw"
    ],
    images: [
      "Photo on 13-02-2023 at 17.56.jpg",
      "ComputerVision.jpeg",
      "FD12F8BB-3B73-41C5-91E5-D1C74E79B80C_4_5005_c.jpeg"
    ]
  },
  {
    id: "graphics-programming",
    title: "Graphics Programming",
    year: "2019",
    technologies: "Unity; C#, Cg",
    description:
      "For this class the main objective was to learn the basic techniques to create nice graphics in a game while still maintaining a high framerate to make games both look nice and run smoothly. I generated kind of a voxel/minecraft world as a single mesh. Only the triangles that are actually visible for the camera are being rendered. I did not make the world interactable, but it can easily be implemented to make removable blocks. The shape of the chunk is created by using Unity's perlin noise. For the water I wrote a shader which uses an algorithm to create Gerstner waves, which makes the water appear to move realistically. I also made a post processing effect using the zbuffer and Gaussian kernel to make objects in the distance blurry. To improve the performance I also applied things such as mipmaps, texture atlas and I concidered the filtering methods of the textures.",
    videos: ["GraphicsProgrammingGIF.gif"],
    images: ["GraphicsProgramming0.1.png", "GraphicsProgramming0.2.png"]
  },
  {
    id: "penguin-glide",
    title: "Penguin Glide",
    year: "2019",
    technologies: "Unreal Engine; C++",
    description:
      "In this game the player is a penguin stuck in a snowball, that is rolling over a bobsleigh-like track. He has to dodge all kinds of objects to stay alive and get as much points as possible. We made this game with a team of 3 people for a school project. The main objective of this project was for us to learn how to use C++ to make games. We chose to use Unreal Engine, because this is a popular game engine. In Unreal Engine you can create blueprint classes to be able to make a game without having to write code, however we barely used them and mostly wrote our own C++ classes since this was required of us by school. The track is procedurally generated using Unreal Engine's Procedural Mesh Component and for the shape we implemented an algorithm for a Cubic bezier curve repeatedly. This way we could create an infinite, randomized track.",
    videos: ["PenguinGlideGif.gif"],
    images: ["PenguinGlide7.png", "PenguinGlide6.png", "PenguinGlide2.png", "PenguinGlide3.png", "PenguinGlide4.png", "PenguinGlide5.png"]
  },
  {
    id: "automated-game-design",
    title: "Automated Game Design",
    year: "2019",
    technologies: "Unity; C#",
    description:
      "An app to randomize the position of room content, using John Conway's game of life algorithm. The goal of this course was to use algorithms in order to automate the design of the game.",
    videos: ["AGDGif.gif"],
    images: ["AGD1.jpg", "AGD2.jpg", "AGD3.jpg"]
  },
  {
    id: "de-schipper",
    title: "De Schipper",
    year: "2018",
    technologies: "Angular; HTML, CSS, TypeScript",
    description:
      "An app that people driving a boat can use to register to bridges and sluices. I created the user interface design and programmed the front end of the app using Angular.",
    images: ["DeSchipper9.png", "DeSchipper10.png", "DeSchipper12.png", "DeSchipper13.png", ]
  },
  {
    id: "chasing-colors",
    title: "Chasing Colors",
    year: "2018",
    technologies: "Arduino; C",
    description:
      "I worked in a team consisting of two illustrators and two developers. We created a prototipe of an interactive bracelet for children who suffer from asthma, to try to motivate them to do daily exercise. The bracelet has an integrated accelerometer, and the children can unlock different colors by doing regular exercise which will be shown through rgb lights on the bracelet. ",
    images: ["ChasingColors2.jpg", "ChasingColors3.jpg", "ChasingColors1.png", "ChasingColors4.jpg", "ChasingColors5.jpg"]
  },
  {
    id: "trustfall",
    title: "Trustfall",
    year: "2017",
    technologies: "Unity; C#; Unity Multiplayer",
    description:
      "A two player collaboration multiplayer game where the players can solve puzzles and complete levels by working together. The game can be played online, which was implemented using Unity Multiplayer.",
    videos: ["TrustfallGif.gif"],
    images: ["Trustfall4.png", "Trustfall1.jpg", "Trustfall5.png", "Trustfall2.jpg"]
  },
  {
    id: "cool-racing-game",
    title: "Cool Racing Game",
    year: "2017",
    technologies: "Blender (Blender Game Engine, Python)",
    description:
      "A local multiplayer very cool racing game! All models were made in Blender, and Blender Game Engine was used to program the game using Python.",
    videos: ["CRGGif.gif"],
    images: ["CRG2.png", "CRG1.png", "CRG3.png"]
  },
  {
    id: "hackerman",
    title: "Hackerman",
    year: "2016",
    technologies: "Processing (Java)",
    description:
      "You play as a chip, trying to reconnect to the motherboard while avoiding viruses.",
    videos: ["HackermanGif.gif"],
    images: ["Hackerman3.png", "Hackerman1.png", "Hackerman4.png", "Hackerman7.png", "Hackerman6.png", "Hackerman2.png"]
  },
  {
    id: "black-space",
    title: "Black Space",
    year: "2016",
    technologies: "Game Maker (GML)",
    description:
      "A fast-paced bullet-hell space shooter inspired by Enter the Gungeon. Play as a lone astronaut battling through waves of enemies across increasingly difficult levels, until you finally face the colossal black hole itself. This is the first game I've created all by myself (Yes, I am a little proud)!",
    videos: ["BlackSpaceGif.gif"],
    images: ["BlackSpace2.png", "BlackSpace3.png", "BlackSpace4.png", "BlackSpace5.png", "BlackSpace6.png", "BlackSpace7.png", "BlackSpace10.png", "BlackSpace11.png", "BlackSpace1.png"]
  },
  {
    id: "broccolife",
    title: "Broccolife",
    year: "2019",
    technologies: "Game Maker (GML)",
    description:
      "Created in just 48 hours for a game jam, this game challenges players to demolish factories while avoiding trees, aiming to restore the planet to a greener, factory-free state. Along the way, players can collect batteries to power their vehicle’s electric mode, reducing emissions and promoting a cleaner environment.",
    videos: ["BroccolifeGif.gif"],
    images: ["Broccolife5.png", "Broccolife4.png", "Broccolife8.png", "Broccolife1.png", "Broccolife6.png", "Broccolife7.png", "Broccolife2.png"]
  },
  {
    id: "stillness-speaks",
    title: "Stillness Speaks",
    year: "2022",
    technologies: "Unity; C#",
    description:
      "This project was created for a game jam held in Okutama, Japan. In the game, players solve increasingly difficult puzzles by sliding pieces of a distorted video into their correct positions. Once all pieces are aligned, the full undistorted video is revealed, showcasing a scene filmed in Okutama.",
    videos: [
      "ss2.gif",
      "ssrec.mov"
    ],
    images: [
      "ss8.png",
      "ss5.png",
      "ss7.png",
      "ss6.png",
      "ss3.JPG"
    ]
  },
  {
    id: "fix-the-computer",
    title: "Fix the Computer",
    year: "2020",
    technologies: "Unity; C#",
    description:
      "This project was developed for a game jam by a team of four. Our game draws inspiration from the Nintendo DS title WarioWare, challenging players to complete fast-paced mini-games within just a few seconds to maximize their score. Everything from the interface to the mini-games is styled after classic Windows XP.",
    images: [
      "ggj2020_home.png",
      "ggj2020.png",
      "ggj2020_2.png",
      "ggj2020_3.png",
      "ggj2020_4.png",
      "ggj2020_5.png",
      "ggj2020_6.png",
      "ggj2020_8.png",
    ]
  }

];

export default projectDetailsData;
