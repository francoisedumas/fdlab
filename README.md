# FDlab
Simple personal website started with `vue create fdlab`

# Netlify & Github
The website is hosted with Netlify and is always up to date thanks to Continuous Deployment link to my Github repo

# Attention points
 - To be able to refresh a page and still be on the same page you need what is called *History pushstate and single-page apps* to do so a _redirects file has been added to the public folder
 - Thanks to Netlify a contact form is setup. To have it work a `form.html` file is added to the public directory and a function to handle the submit is coded directly in the `Contact.vue` file. Carefull not to name `contact.html` the file containing the form for Netlify to render, if not Netlify is confusing it with the route called `contact`.

 # Netlify & Zappier
 The message from the contact form go to your Netlify account. If you want to get it directly to your email you will need Zappier.

 # Carousel
User [Vue-agile](https://github.com/lukaszflorczak/vue-agile)
