# Next.js - Pokemon App

This is a web application developed with Next.js, React, and TypeScript that allows you to explore information about 151 Pokémon. Pokémon data is stored during the build process to improve speed and the user experience.


## Demo

You can check out the live demo of my portfolio website at [next-pokemon-stefano](https://next-pokemon-stefano.vercel.app/).


## Screenshots

![image](https://github.com/StefanoCutri/next-static-pokemon/assets/69378136/cd1ac359-5016-49f5-b05d-04ddb5d8d452)
![image](https://github.com/StefanoCutri/next-static-pokemon/assets/69378136/d73b561c-0570-4389-9597-f60d118804af)
![image](https://github.com/StefanoCutri/next-static-pokemon/assets/69378136/b237f6b2-7afd-4f66-9a03-c2fe7d037421)
![image](https://github.com/StefanoCutri/next-static-pokemon/assets/69378136/8a3df027-aaa6-4574-b935-2c4fb9429386)


## Features

- List of 151 Pokémon fetched from the [PokeAPI](https://pokeapi.co/).
- Details of each Pokémon, including their image, type, abilities, and more.
- Ability to add Pokémon to your favorites.
- Ability to remove Pokémon from your favorites.
- Real-time search for Pokémon by name or Pokédex number.
- Local storage of your favorite Pokémon using `localStorage`.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/pokedex-app.git![Uploading image.png…]()
   
2. Navigate to the project directory:

   ```bash
   cd your-app 

3. Install the dependencies:

   ```bash
   npm install


## Usage

1. Start the application in development mode:

   ```bash
   npm run dev

Open your browser and visit http://localhost:3000 to see the application.

Explore the list of Pokémon, click on a Pokémon to see its details, add it to your favorites, or remove it.


## Build and Optimization

The application uses Next.js's getStaticPaths and getStaticProps functions to generate static pages for Pokémon during the build process. This significantly improves loading speed and fluidity by ensuring data is immediately available.

Additionally, if you search for a Pokémon that hasn't been loaded previously, the application will make a real-time API request and save the information to the file system for future queries.


   
