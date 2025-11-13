// src/data/projectDetailsData.js

const projectDetailsData = [
  {
    id: "computer-vision",
    title: "Computer Vision",
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
    description:
      "For this class the main objective was to learn the basic techniques to create nice graphics in a game while still maintaining a high framerate to make games both look nice and run smoothly. I generated kind of a voxel/minecraft world as a single mesh. Only the triangles that are actually visible for the camera are being rendered. I did not make the world interactable, but it can easily be implemented to make removable blocks. The shape of the chunk is created by using Unity's perlin noise. For the water I wrote a shader which uses an algorithm to create Gerstner waves, which makes the water appear to move realistically. I also made a post processing effect using the zbuffer and Gaussian kernel to make objects in the distance blurry. To improve the performance I also applied things such as mipmaps, texture atlas and I concidered the filtering methods of the textures.",
    videos: ["GraphicsProgrammingGIF.gif"],
    images: ["GraphicsProgramming0.1.png", "GraphicsProgramming0.2.png"]
  },
  {
    id: "graphics-programming2",
    title: "Graphics Programming",
    description:
      "For this class the main objective was to learn the basic techniques to create nice graphics in a game while still maintaining a high framerate to make games both look nice and run smoothly. I generated kind of a voxel/minecraft world as a single mesh. Only the triangles that are actually visible for the camera are being rendered. I did not make the world interactable, but it can easily be implemented to make removable blocks. The shape of the chunk is created by using Unity's perlin noise. For the water I wrote a shader which uses an algorithm to create Gerstner waves, which makes the water appear to move realistically. I also made a post processing effect using the zbuffer and Gaussian kernel to make objects in the distance blurry. To improve the performance I also applied things such as mipmaps, texture atlas and I concidered the filtering methods of the textures.",
    videos: ["GraphicsProgrammingGIF.gif"],
    images: ["GraphicsProgramming0.1.png", "GraphicsProgramming0.2.png"]
  },
  {
    id: "graphics-programming3",
    title: "Graphics Programming",
    description:
      "For this class the main objective was to learn the basic techniques to create nice graphics in a game while still maintaining a high framerate to make games both look nice and run smoothly. I generated kind of a voxel/minecraft world as a single mesh. Only the triangles that are actually visible for the camera are being rendered. I did not make the world interactable, but it can easily be implemented to make removable blocks. The shape of the chunk is created by using Unity's perlin noise. For the water I wrote a shader which uses an algorithm to create Gerstner waves, which makes the water appear to move realistically. I also made a post processing effect using the zbuffer and Gaussian kernel to make objects in the distance blurry. To improve the performance I also applied things such as mipmaps, texture atlas and I concidered the filtering methods of the textures.",
    videos: ["GraphicsProgrammingGIF.gif"],
    images: ["GraphicsProgramming0.1.png", "GraphicsProgramming0.2.png"]
  }
];

export default projectDetailsData;
