![This is a banner!](/src/assets/images/readme/banner.png)
# IRI Video ![This is a logo!](/src/assets/images/readme/logo-sm.png)

**[IRI Video](https://iri-video-roma.netlify.app/)** is a **React** based webpage for a video-maker. This project was developed as a business card for a video-maker from Italy to show her works. One can browse all projects here visiting gallery section of this project. This webpage can provide you the information about video-maker's background and skills. The project is developed by creating several React components, mainly functional, using React useState hooks for transfering info from a components to other components. For styling, I have chosen *SASS* technology using **styled components external** library to implement it in the code.

![This is my portfolio!](/src/assets/images/readme/project-img.png)

---

## External libraries

This project is based on several external libraries that have provided some additional functionality for user interface. Since the webpage is developed with React, it allows to use external sources to elaborate the technology of a project. Here is a list of libs that I was using creating my portfolio **[IRI Video](https://iri-video-roma.netlify.app/)** :

- React Router Dom
- React Icons
- React Player
- Uuid
- SwiperJS
- Styled Components

![My dependencies list](/src/assets/images/readme/dependencies.png)

---

### React Router Dom

As far as first position from the list is concerned, I have used **React Router Dom**. Thanks to this library, I've managed to create a webpage that doesn't require a repeated reloading of each page which means that the client-server request is reduced. 

![The example of using React Router in my project](/src/assets/images/readme/router.png)

--- 

### React Icons 

For all the icons I have used another React-based library - **React Icons**. There is a wide range of various icons that a developer can use in any React project. Coding socials section, I have used all icons from this library. When it comes to styling, one should refer to *svg* and also *path* elements of React icons to attach them and, for instance, apply hover effects.

---

### React Player

Developing Gallery Section, I encountered the following issue: not to overload the size of this project, I needed to omit uploading entire video files for creating a video gallery, so I decided to use external references to the video-maker's YouYube channel. I discovered **React Player** library that helped me to implement this plan and to style video controls, size of each video, etc. Also, I used it while creating VideoCarousel Component.

---


### Uuid

To store all video projects in a single place I needed a data file, so I decided to create a projects  file that contains all info about the video-maker's works. But to properly map this data, I needed to attach each item with a unique key, so that's why I used **Uuid** library. This tool allowed me to generate random ids, so I could use them mapping projects object into separated elements in *virtual DOM* generated by React environment. Here are some examples of using **Uuid** lib:

![The example of using Uuid in my project](/src/assets/images/readme/uuid.png)

--- 
 
### SwiperJS

Since there is a projects section on the Projects Page, I needed to style it in a user-friendly way, so every visitor could assess and glance the videos instantly, without jumping from one page to another page. So, I decided to develop a swiper from an external library **SwiperJS**. This tool allowed me to create a nice-looking and plain swiper for Video Carousel Components. 

![The example of using SwiperJS in my project](/src/assets/images/readme/swiper.png)

---

### Styled Components

For styles I used **Styled Components** library, so it helped me minimalize the code and embed styles, logic and the structure of all React components in one place. Also, this tool features all benefits of using SASS instead of a plain CSS with nesting, variables, etc. Here is an example from the code: 

![The example of using Styled Components in my project](/src/assets/images/readme/styled-components.png)

---

## Links

**Here are the links to my portfolio:**

You can check it out live - **<https://iri-video-roma.netlify.app/projects>**
or look into the code here on GitHub - **<https://github.com/romaniso/iri_production>**

