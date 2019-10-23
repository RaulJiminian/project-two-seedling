# **Canvas**

![Paying attention GIF](https://media.giphy.com/media/H83UUEWleFCJa/giphy.gif)

**Canvas** is a web app that focuses on providing information on a vast array of artwork within The Rijksmuseum. The Rijksmuseam offers a representative overview of Dutch art and history from the Middle Ages onwards, and of major aspects of European and Asian art. Using the [Rijksmuseum API](https://www.rijksmuseum.nl/en/api), we are able to grab a whole host of information valuable to understanding various pieces of artwork. It is this information that we will use to populate the web app and complete the MVP.

# MVP
* Create a working, interactive, React application
* Find and use external api (Rijksmuseum API)
* Render data on page (eg, image, title, description, artist, etc.)
* Have at least 6 separate components
  * Include both class and functional components
* Style with CSS using Grid for layout
* Use React Router

# Post-MVP
* Advanced CSS Styling, including animations and responsiveness
* Include seperate profile pages for selected artwork with a modal button for additional documentation

# Risks and Mitigants
* **Risk**: 
  * From initial review, the Rijksmuseum API is using various endpoints which make it difficult to pass information around
* **Mitigant**:
  * I will need to figure out how to feed information from one API call into another 

* **Risk**: 
  * Information for various art pieces is incomplete
* **Mitigant**:
  * Conditional rendering as a short circuit boolean; this will allow us to display information only if it is available

# Visual of Component Hierarchy
* src
  * components
    * Header
    * PaintingsList
      * Button
    * Profile
      * Modal
    * Footer
  * services
    * api-helper
  * App.js
  * App.css

```javascript
<>
<Header />
<PaintingsList />
  <Button />
<Profile />
  <Modal />
<Footer />
</>
```

<br>

[Main Page Wireframe](https://wireframe.cc/byvTss)

![Main Page Wireframe](https://i.imgur.com/fu4RCNU.png)

<br>

[Profile Page Wireframe](https://wireframe.cc/xdJP03)

![Profile Page Wireframe](https://i.imgur.com/llifm2k.png)