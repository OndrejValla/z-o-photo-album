# Zuzana and Ondrej photos

![IMAGE](assets/images/readme-files/responsive.png)

## Welcome to our photos website

### Please [click this link](https://ondrejvalla.github.io/z-o-photo-album/index.html) if you like to see the live website.


#### This website was created as my Second Milestone project with Code Institute. 
As mentioned in the intro of the landing page, my wife Zuzana and I enjoy going on holiday. However as there are restrictions for traveling at the moment (year 2021) our way to get to the holiday mood again is by looking at our holiday pictures and then enjoy the sunshine in the garden. We always go through folders on our computer. Zuzana was suggesting many times, that it would be great to have one gallery page. That is why I decided to create this website as my MS2 project. 


## Table of Contents
> - [Overview](#overview)
> - [User Experience](#user-experience)
> - [Features](#features)
> - [Technologies Used](#technologies-used)
> - [Testing](#testing)
> - [Deployment](#deployment)
> - [Credits](#credits)


## Overview

Even though it is very likely, that the main two users of this website will be Zuzana and myself, other users can still find some features and interactivity like changing color buttons, gallery buttons, show/hide buttons, social links and contact page to get in touch or to send us some destinations suggestion. 


## User Experience

- [User Stories](#user-stories)
- [The Scope Plane](#the-scope-plane)
- [The Structure Plane](#the-structure-plane)
- [Wireframes](#wireframes)
- [The Surface Plane](#the-surface-plane)


### User Stories

- User story 1: I like to browse through these galleries easily whether on my PC or mobile.
- User story 2: I like to see each destination separately if possible.
- User story 3: I like when websites are changing colors etc.
- User story 4: Would be great if I could contact Zuzana and Ondrej.
- User story 5: I would like to see Zuzana and Ondrej's social media.


### The Scope Plane

To enjoy a website like this, where the main focus is the Gallery of holidays, the layout must be simple and straightforward. Selected photographs must be loading quickly, must be of good quality and engaging to the user. 


### The Structure Plane

####This website consist of four pages: index.html, gallery.html, contact.html and random.html.

- Home page / Landing page (index.html) contains: 
1. Top Navbar changing to burger nav on smaller devices. 
2. Two buttons: Zuzana-pink Ondrej-blue which changes the color theme of the current page. 
3. Intro text.
4. A carousel of pictures of one of each of the destinations covered on this website. 
5. Google maps API of six destinations A B C D E F.
6. Six flipping cards with A B C D E F destinations. Each card has a front picture and after flipped three slide pictures + gallery link button.
7. The footer - Home Gallery Contact Us and Social links buttons.

- Gallery page (gallery.html) contains:
1. Top Navbar with a dropdown of all six destinations, changing to burger nav on smaller devices. 
2. Two buttons: Zuzana-pink Ondrej-blue which changes the color theme of the current page.
3. Six horizontally laid buttons for each destination.
4. A carousel: on load, all destinations slide show, after clicking the individual destination button, the destination slide show start.
5. The footer - Home Gallery Contact Us and Social links buttons.

- Contact Us page (contact.html) contains:
1. Top Navbar changing to burger nav on smaller devices.
2. Introduction "We will be happy to receive a message from you" changing to "Thank you for your message, Have a great day/evening (based on the time of the day)" 
3. Contact form: Full name, Email, and Textarea. All required. Send button and Reset form button.
4. Two smiling faces and heart from https://fontawesome.com. Little feature changing color while typing the message, by using keydown, keypress and keyup functions.
5. The footer - Home Gallery Contact Us and Social links buttons.

- Moments to remember... page (random.html) contains:
1. Top Navbar changing to burger nav on smaller devices.
2. Heading: Click *star* for the random image
3. Blue window with a yellow star. After the yellow star is clicked, a random picture display. 
4. The footer - Home Gallery Contact Us and Social links buttons.

### Wireframes:
 
- <a href="assets/wireframes/landing-page.png" target="_blank">Landing Page PC</a>
- <a href="assets/wireframes/landing-page-tablet.png" target="_blank">Landing Page Tablet</a>
- <a href="assets/wireframes/landing-page-mobile.png" target="_blank">Landing Page Mobile</a>

- <a href="assets/wireframes/gallery-page.png" target="_blank">Gallery Page PC</a>
- <a href="assets/wireframes/gallery-page-tablet.png" target="_blank">Gallery Page Tablet</a>
- <a href="assets/wireframes/gallery-page-mobile.png" target="_blank">Gallery Page Mobile</a>

- <a href="assets/wireframes/contact-page.png" target="_blank">Contact Page PC</a>
- <a href="assets/wireframes/contact-page-tablet.png" target="_blank">Contact Page Tablet</a>
- <a href="assets/wireframes/contact-page-mobile.png" target="_blank">Contact Page Mobile</a>


### The Surface Plane

I was aiming to create simple gallery website with some of our holiday pictures. 

- #### Images 
    - All images used on this website were taken by my wife Zuzana Valla or myself Ondrej Valla.

- #### Colours
    - To choose colours for this website was quite easy. My wife's favourite colour is pink and mine is blue.
    - I was aiming to use a colour theme to match   
    - The main body background colour after page loads is a basic, darker shade of white rgba(234, 237, 238, 0.952).
    - Fonts colour is dark color: #3b3b3bb3.
    - Zuzana's style button change the background to light pink rgb(252, 230, 230). The second pink colour is a bit darker rgb(228, 161, 161).
    - Ondrej's style button change the background to light blue  rgb(130, 162, 209). The second blue colour is a bit darker rgb(23, 75, 126). 
    - The fonts colour changes after clicking the styles buttons to Whitesmoke for better readability.
    - The heart in the Header is changing from colour Black to colour Red with mouseover function.
    - The clickable star in random.html has primary colour Goldenrod, changing to Gold colour with onmouseenter function, and White colour after clicked.

- #### Icons
    - I used site Font Awesome to implement great icons. 
---

## Features

- #### Navigation bar
    - Navbar on the top of the page is probably the most traditional and the most user friendly one.
    - On a mobile or tablet, the navbar is collapsed to the hamburger icon which expands when clicked
    - Users can click on the navbar brand to take them back to the home-page.
    - In Gallery page the navbar features the dropdown menu with six links to individual destination galleries.

- #### Home page
    - Style buttons, Zuzana (pink) Ondrej (blue) which change the color theme of the home page.
    - Intro text, which changes from general intro to Zuzana's intro and Ondrej's intro, based on the style button clicked.
    - Carousel slideshow with six pictures of six main destinations of this website.
    - Google Maps API, currently just a basic version, with six A B C D E F map drop points, including two clusters.
    - Six flippable cards of six A B C D E F destinations. Each card has the map drop point, name of the destination/gallery, picture of Zuzana and Ondrej from the destination and description of the holiday. 
    - When card clicked, flip function does activate and card flips.
    - Each flipped card has the button to the gallery page and a carousel with three pictures slideshow.
 
- #### Gallery page
    - Style buttons, Zuzana (pink) Ondrej (blue) which change the color theme of the home page.
    - Six individual destination buttons for each gallery.
    - Bordered window with the carousel slideshow of clicked destination. 
    - User can change between pink and blue colour background while watching images. 

- #### Contact Us page
    - Introduction text: We will be happy to receive a message from you. If you like to get in touch please write your message below. Thanks
    - When the message is successfully sent, the introduction text change to: Thank You for your message. Have a great day! / Have a great afternoon! / Have a lovely evening! (based on the time of the day) Kind regards Zuzana and Ondrej.
    - If the message is not sent, the introduction text change to: There was a problem. Your message was not sent. Please try again, or contact us directly at ondrej.valla@gmail.com Thank you.
    - Send button changing to Sending... when sending a message.
    - Alerts pop up boxes when the message is successful and when is unsuccessful.
    - Fontawesome icons: Two smile icons and one heart icon changing color when a message is being typed.
    - The message does not send as long as all the input fields are filled up.

- #### Moments to remember page
    - This page features random image function. After the star is clicked, the star changes the color and a random image appears. If clicked again, another random image appears. 

---

## Technologies Used

- #### Languages:
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

- #### Libraries:
- [Balsamiq](https://balsamiq.com/) for the wireframes.
- [Bootstrap 4.2.1](https://getbootstrap.com/) to use the grid system, carousels, pre-formatted features like buttons, collapsible navbar etc.
- [FontAwesome](https://fontawesome.com/) for icons.
- [Google Fonts](https://fonts.google.com/) for fonts "Merriweather".
- [Favicon](https://favicon.io/) for the awesome icon on the browser tab.
- [jQuery](https://jquery.com/) for JavaScript features

#### Version Control:
- [Github](https://github.com/) - Used to store the code and use of Github Pages to deploy the website. 
- [Gitpod](https://gitpod.io/) - Used as the primary software for development and to push and commit code to Gihub.

#### Other:
- [Code Institute Course Content](https://courses.codeinstitute.net/) - Primary source of learning knowledge.
- [ChromeDevTools](https://developers.google.com/web/tools/chrome-devtools) - Used frequently to detect any bugs or layout differences.
- [W3Schools](https://www.w3schools.com/) - used as a general resource for HTML, CSS , JavaScript coding tips.
- [AmIResponsive](http://ami.responsivedesign.is/) - Used to check how the layout of the website looks across different devices. 
- [Google Mobile Friendly Test](https://search.google.com/test/mobile-friendly) - Used to test all pages on a mobile device
- [Google Maps](https://developers.google.com/maps) - Used for Google Maps APIs 
- [Google](https://www.google.co.uk/) and [Youtube](https://www.youtube.com/) - Used for lots of general research.



















