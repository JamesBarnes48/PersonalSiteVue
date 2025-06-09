<script>
import CardShowcaseSection from '../components/CardShowcaseSection.vue';
import * as showcase from '../utilities/showcase-images.js'

export default {
    name: 'CardShowcase',
    components: {CardShowcaseSection},
    setup(props){
        const showcaseImages = showcase;
        const projects = {
            webdev: [
                {
                    title: 'Virtual Garage Application',
                    mainText: `This is a fun little Node.js web app where you can manage your five prestigious (made up) garages spanning
                        across the globe using this simple but fun tool. Really this has been a chance for
                        me to put to practice linking an SQL database service to an application, using some more advanced jQuery as well as generally 
                        building fuller and more scalable web applications on an unguided, independent project. I enjoyed putting some of my skills into action at last!
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
                        hosted on a server instead of on the clients web browser. This means the whole project is structured a lot differently to a static web site,
                        it uses Node.js and Express to create a file to handle requests to my server. Dynamic web apps like this can handle a lot more complex tasks than
                        any static webpage, and if you were developing a website for your company this is likely how you would do it! This is a simple site on the surface, but most of this site's utility is behind the scenes. The user enters their name and email address
                        to sign themselves up for a newsletter. When the user submits their info it uses the Mailchimp API to sign them up to my personal mailing list.
                        After a user has signed up successfully I will be able to see everyone who has signed up from my Mailchimp account.
                        While I don't have anything to send out at the moment, it's not difficult to see how this simple concept could be very useful from an advertising
                        perspective!`,
                    projectImages: [showcaseImages.news1, showcaseImages.news2],
                }
            ],
            java: [
                {
                    title: 'Cheat Card Game Simulator',
                    mainText: `In 2019 I used Java to create a simulation of the card game Cheat. Boasting 16 different classes and 3 different interfaces it is my most complex Java project to date.
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
                        VM options is set to ""--module-path <PATH_TO_JAVAFX> --add-modules javafx.controls,javafx.fxml".`,
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
            ],
            c: [
                {
                    title: 'Redline LA Pursuit',
                    mainText: `My first attempt at game development, Redline LA Pursuit is a 2D arcade-style
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
                }
            ]
        };

        return {
            showcaseImages,
            projects
        };
    }
}
</script>

<template>
    <h1 class="page-title">Project Showcase</h1>

    <section id="webdev">
        <CardShowcaseSection
            sectionTitle="Web Development"
            :projectsInfo="projects.webdev"
        ></CardShowcaseSection>
    </section>

    <section id="java">
        <CardShowcaseSection
            sectionTitle="Java"
            :projectsInfo="projects.java"
            sectionStyle="java"
        ></CardShowcaseSection>
    </section>

    <section id="c">
        <CardShowcaseSection
            sectionTitle="C++"
            :projectsInfo="projects.c"
            sectionStyle="c"
        ></CardShowcaseSection>
    </section>
</template>

<style scoped>

section {
    border-top: 4px solid var(--main-hex);
    border-bottom: 4px solid var(--main-hex);
}

</style>