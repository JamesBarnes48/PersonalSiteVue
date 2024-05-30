<script>
import * as showcaseImages from '../utilities/showcase-images.js'

export default {
  data:() => ({
        showcaseImages: showcaseImages,
        projects: [
            {
                title: 'Virtual Garage Application',
                mainText: `My latest side project has been a fun little Node.js web app where you can run your own dream garage. Manage your five prestigious garages spanning
                    across the globe using this simple but fun tool. Really this has been a chance for
                    me to put to practice some of the new development skills I have learned recently including linking a database service to your application,
                    using some more advanced jQuery as well as generally building fuller and more scalable web applications. This project is also completely unguided 
                    so it's something I have full creative control over. I enjoyed putting some of my skills into action at last! I know it's my finest piece of web dev so far.
                    It's also worth mentioning that since this project uses databases this project pays close attention to following cyber security convention.
                    Extra effort has been made to mitigate cyber threats such as XSS and SQL Injection using strong input validation, sanitisation and operating on a zero-trust basis.`,
                repoLink: 'https://github.com/JamesBarnes48/Virtual-Garage',
                projectImages: [showcaseImages.garage1, showcaseImages.garage2, showcaseImages.garage3, showcaseImages.garage4],
            },
            {
                title: 'Tindog',
                mainText: `A webpage for a made-up company called Tindog, which runs a dating app for dogs. I made this page to get to grips
                    with the  Bootstrap 4  library and it's various tools for presentation which combine to make it look like a real company
                    site.
                    One of the key features of Bootstrap 4 is it's tools for making mobile-friendly sites so I developed this site
                    with mobile in mind. Take a look at it on mobile too and see what it looks like!`,
                repoLink: 'https://jamesbarnes48.github.io/Tindog/',
                projectImages: [showcaseImages.tindog1, showcaseImages.tindog2, showcaseImages.tindog3],
            },
            {
                title: 'TES V: Skyrim Alchemy Lab',
                mainText: `This website came from an idea I had where I could kill two birds with one stone: put some more advanced Javascript and
                    jQuery into action and make a handy little tool which would definitely make some people's lives easier as they craft potions in the game.
                    The site allows you to choose up to 3 effects from the game to combine together and then see what ingredients you can use
                    to gain those effects as well as showing which effects have ingredients in common with each other. I paid special attention to ensure
                    the site works just as well on mobile as on desktop, as it should!`,
                repoLink: 'https://jamesbarnes48.github.io/Alchemy-Lab/',
                projectImages: [showcaseImages.alc1, showcaseImages.alc2, showcaseImages.alc3],
            },
            {
                title: 'Simon',
                mainText: `A webpage where you can play a simple, in-browser implementation of the Simon memory game. See if you can remember the order
                    the buttons light up in and press them. The game uses client-side javascript to run the game on your computer. This was a simple
                    project where I could work on a single real programming challenge in Javascript which was getting the game to run on a loop and increment each time.`,
                repoLink: 'https://jamesbarnes48.github.io/Simon-Game/',
                projectImages: [showcaseImages.simon1, showcaseImages.simon2],
            },
            {
                title: 'Newsletter Sign-up',
                mainText: `Up until this point I had been making static web pages, but this was my first step into developing a dynamic web app, meaning the website is
                    hosted on a server instead of on the clients web browser, meaning the whole project is structured a lot differently to a static web site,
                    it uses Node.js and Express to create a file to handle requests to my server (which I am hosting for free on Heroku). Dynamic web apps like this can handle a lot more complex tasks than
                    any static webpage, and if you were developing a website for your company this is likely how you would do it! This is a simple site on the surface, but most of this site's utility is behind the scenes. The user enters their name and email address
                    to sign themselves up for a newsletter. When the user submits their info it uses the Mailchimp API to sign them up to my personal mailing list.
                    After a user has signed up successfully I will be able to see everyone who has signed up from my Mailchimp account.
                    While I don't have anything to send out at the moment, it's not difficult to see how this simple concept could be very useful from an advertising
                    perspective!`,
                repoLink: 'https://jamesbarnes48.github.io/Simon-Game/',
                projectImages: [showcaseImages.news1, showcaseImages.news2],
            },
            {
                title: 'Cheat Card Game Simulator',
                mainText: `The latest project I completed using Java is a simulation of the card game Cheat. Boasting 16 different classes and 3 different interfaces it is my most complex project to date.
                    The game is simple and as you would expect, simulates the card game Cheat. Depending on how you configure it you can set any number of potential players to be either a human player who
                    plays the game through console input or an AI with 3 different strategies. Basic strategy plays the game with a very basic strategy, thinker strategy plays the game more randomly
                    and takes more risks and my own strategy which plays the game even more randomly with varying levels of randomness similar to how a human might play. The game can manipulate cards and the deck
                    as it sees fit by making use of a range of methods for sorting cards and the like.`,
                repoLink: 'https://github.com/JamesBarnes48/Cheat-Simulator',
                projectImages: [showcaseImages.cheat1, showcaseImages.cheat2, showcaseImages.cheat3],
            },
            {
                title: 'University Study Planner',
                mainText: `This is another larger-scale project where I worked alongside a group of 3 of my peers to plan, design and develop a study planner for students of
                    our university in Java and JavaFX. Being a group project, this project had more of an emphasis on teamwork and required us to work efficiently together to
                    complete all the code, as there is a total of 17 controller classes and 11 model and view classes comprising the entire project. It has a wide range of
                    features including creating milestones, tracking progress through assignments, multiple profiles as well as quality of life features like a night mode.
                    To create a profile you will need an XML file of modules to tie to that profile, in the src/Content folder there is an example file to use.
                    You will need to configure your project to run the file. I used Java 11 JRE, Java 1.8 SDK and project language level of Java 8. Configure JavaFX by ensuring
                    VM options is set to ""--module-path ${PATH_TO_FX} --add-modules javafx.controls,javafx.fxml".`,
                repoLink: 'https://github.com/JamesBarnes48/University-Study-Planner',
                projectImages: [showcaseImages.study1, showcaseImages.study2, showcaseImages.study3, showcaseImages.study4],
            },
            {
                title: 'Word Auto-complete App',
                mainText: `This simple Java application reads in a text file containing a text file containing a chapter of Lord of The Rings and
                    creates a dictionary of words that appear in it as well as how frequently they appear. This dictionary is then stored
                    and can then be queried with any prefix to produce the top 3 words you may want to auto-complete to as well as the probability of that being the word you wanted.
                    This is done using my own implementation of a Trie data structure, and a large portion of this project was creating and manipulating this complex
                    data structure. Currently the text reads Lord of the Rings and queries a given set of queries from another text file, but you can
                    change those files around and see what happens with other text and queries!`,
                repoLink: 'https://github.com/JamesBarnes48/Word-Autocomplete-App',
                projectImages: [showcaseImages.autocomplete1, showcaseImages.autocomplete2],
            },
            {
                title: 'Toll Road Simulator',
                mainText: `One of my early Java projects involved creating a toll road system which would read in license plates from a text file and
                    simulate them passing through the toll road, charging their account different amounts based on their vehicle and other factors.
                    The system responds if they dont have enough money to make the trip as well as to various other factors.
                    A relatively simple project compared to the others, this was my first time using a few useful Java features such as exceptions
                    and abstract classes.`,
                repoLink: 'https://github.com/JamesBarnes48/Toll-Road-Simulator',
                projectImages: [showcaseImages.toll1, showcaseImages.toll2],
            },
            {
                title: 'Redline LA Pursuit',
                mainText: `A large personal project of mine and my first attempt at game development, Redline LA Pursuit is a 2D arcade-style
                    game developed using OpenGL for C++. Inspired by old-school 80's arcade games, the game is relatively simple in that you
                    must drive your car as far as you can while avoiding obstacles in your way. This was a lot of fun to make and introduced me
                    to the world of graphics rendering with OpenGL. Have a go and see how far you can get!`,
                repoLink: 'https://github.com/JamesBarnes48/Redline-LA-Pursuit',
                projectImages: [showcaseImages.redline1, showcaseImages.redline2, showcaseImages.redline3, showcaseImages.redline4],
            },
            {
                title: 'Offline Movie Database',
                mainText: `A C++ application that reads the text file "films.txt" and formats the information into a film database.
                    The database of films and information about them can then be queried using a wide range of different queries.
                    You can set the queries to whatever you want by changing the code slightly, retrieving films based on a wide range of criteria.
                    You want to see the 5th most recent PG-rated film? Query it!`,
                repoLink: 'https://github.com/JamesBarnes48/Offline-Movie-Database',
                projectImages: [showcaseImages.omdb1, showcaseImages.omdb2],
            },
            {
                title: 'Offline Movie Database',
                mainText: `A C++ application that reads the text file "films.txt" and formats the information into a film database.
                    The database of films and information about them can then be queried using a wide range of different queries.
                    You can set the queries to whatever you want by changing the code slightly, retrieving films based on a wide range of criteria.
                    You want to see the 5th most recent PG-rated film? Query it!`,
                repoLink: 'https://github.com/JamesBarnes48/Offline-Movie-Database',
                projectImages: [showcaseImages.omdb1, showcaseImages.omdb2],
            },
        ]
  }),
}
</script>

<template>
    <h1>Project Showcase</h1>

    <!-- Contents Navbar -->
    <v-app-bar class="appbar" title="Contents" scroll-behaviour="elevate" >
        <a href="#webdev">Web Development</a>
        <a href="#java">Java</a>
        <a href="#c">C/C++</a>
    </v-app-bar>

    <section id="webdev">

    </section>

    <!-- Java -->
    <section id="java">

    </section>
    <section id="c">

    </section>

    <div class="bottom-container">
    <a class="footer-link" href="https://www.linkedin.com/in/james-barnes-6406821b1/"><i class="fab fa-linkedin"></i></a>
    <a class="footer-link" href="https://twitter.com/"><i class="fab fa-twitter-square"></i></a>
    <a class="footer-link" href="index.html"><i class="fas fa-globe"></i></a>
    <a class="footer-link" href="https://github.com/JamesBarnes48"><i class="fab fa-github"></i></a>
    <p>Icon made by <a class="footer-embedded-link" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a class="footer-embedded-link" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
    <p>© 2020 James Barnes</p>
    </div>
</template>

<style>

/* Section Styles */

.project-section {
  background-color: var(--off-background-hex);
  color: white;
  padding: 40px 35px;
}

.project-section:nth-child(odd){
  background-color: var(--background-hex);
  color: black;
  padding: 40px 35px;
}

/* Headings */

.section-heading {
  color: var(--main-hex);
  font-family: 'Montserrat', serif;
  font-size: 2rem;
  margin: 35px 0;
  font-weight: bold;
}

/* Navigation Bars */
.appbar a{
    font-family: 'Montserrat', serif;
    color: var(--main-hex);
    text-decoration: none;
    margin: 0 60px;
}

.new-annotation{
  color: crimson;
  font-weight: bold;
  margin: 0 10px;
}

.carousel-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.carousel {
  margin-top: 30px;
}

.dark-prev-icon {
 background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.dark-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

.portfolio-block {
  margin: 10px 10px;
}

.portfolio-block.big-block {
  font-size: 0.9rem;
}

.round-border {
  border: 2px solid black;
  border-radius: 5px;
}

.small-margin-bottom {
  margin-bottom: 25px;
}

/* Mobile & Tablet Compatability - CSS Breakpoint */

@media (max-width: 1250px) {
    .stats-child{
      width: 45%;
    }

    .stat-name{
      font-size: 1.4rem;
    }

    .stat-metric.small{
      font-size: 1.9rem;
    }
    }

</style>