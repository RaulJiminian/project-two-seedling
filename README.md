# **Seedling**

![Paying attention GIF](https://media1.tenor.com/images/c1cfb8847fad1f939b9f9e42b4bf81e8/tenor.gif?itemid=5750963)

**Seedling** is a web app that focuses on providing information on a vast variety of Flora throughout the world. Using an API powered by [Trefle](http://www.traversymedia.com), we are able to grab whole host of information valuable to understanding and identifying plants. It is this information that we will use to populate the web app and complete the MVP.

# MVP
* Create a working, interactive, React application
* Find and use external api (Trefle)
* Render data on page (eg, image, heading, statistics, etc.)
* Have at least 6 separate components
  * Include both class and functional components
* Style with CSS using Grid for layout
* Use React Router

# Post-MVP
* Advanced CSS Styling, including animations and responsiveness
* Include seperate profile pages for selected plant with a button for additional information
* Modal with link to wiki page if available

# Risks and Mitigants
* **Risk**: 
  * From initial review, the Trefle API is using various endpoints which might it difficult to pass information around
* **Mitigant**: 
  * I will need to figure out how to feed information from one API call into another 

* **Risk**: 
  * Information for plants is not complete
* **Mitigant**:
  * Conditional rendering as a short circuit boolean to only display information available

# Visual of Component Hierarchy
* src
  * components
    * Header
    * PlantList
    * PlantProfile
    * Footer
  * services
    * api-helper
  * App.js
  * App.css

```javascript
<Header />
<PlantList />
<PlantProfile />
<Footer />
```

<br>

![Wireframe](https://i.imgur.com/ILpMOZ1.png)