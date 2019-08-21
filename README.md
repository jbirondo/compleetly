# Compleetly

Interest based news feed - live updating with top trending articles
Users can select articles to read later and they can search for articles as well as have follows

https://compleetly.herokuapp.com/#/

![Home Page](./pic1.png)

# Features
    * New account creation, login, and guest login
    * Ability to follow news source
    * Ability to browse a discover popular sources and articles
    * Can select articles to read later
    * Today - top trending articles from today can be browsed and marked to read later
    * Search - articles can be searched and you can select articles to read later

# Project Design

Compleetly was designed and built in 1 week and 2 days. 

A proposal was drafter with a schema, sample state, and backend/frontend routes to guide/outline the process

# Implementation

Passwords are secured using BCrypt to generate a passord_digest. A user session_token is stored in the database to keep track of each user session. When a user successfully logs in, a session token is generated, stored in the database, and stored on the client-side as a browser cookie.

### Follows/Add Content

![Home Page](./pic2.png)

Users has the ability follow news sources that are live updated with the top trending news. A user(once signed in) can follow sources and then later choose articles from just that source the users follows will appear in their user nav bar once logged in to the left of the screen.

### Read Later

![Home Page](./pic3.png)

Users can add articles to their read later section. A user can add articles from a search, from Today's top trending articles or from any of the articles in one of the followed sources categories

### Today Page

![Home Page](./pic4.png)

Today page is a list of all of the top trending news articles right now. The user can select the articles to view the entire articles in a new tab on their browser, or the user can select read later to put it in their read later section to view the article/articles at a later dater 

### Search

![Home Page](./pic5.png)

A user can search for the articles that they want to read. They can select articles from the search results to read later, or just open them up in a new tab to view later

### Coming Features

There were a couple of features we wanted to implement that we didn't get the chance to, they are as follows.

    * Favorites
    * ReadLater/Remove from all pages and colored button