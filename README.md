#### 1. A PWA is usually faster and more reliable than regular web applications as it focuses on an offline/cache-first approach 

### 2. Create React app
        npx create-react-app react-pwa-101
                 OR
        npm init react-app react-pwa-101
        
### 3. Start App 
       npm start

-------
### 4. Enable the application as PWA by changing the last line of index.js
        - serviceWorker.unregister();
        + serviceWorker.register();
        
### 5. Run the application
        1. Minified bundle of our application will use the offline/cache first approach
        2. Under the hood, react-scripts uses a package called workbox-webpack-plugin which works together with webpack 4 to serve our application as a PWA
        3. It doesn't only cache local assets placed in public directory
        4. It also caches navigation requests so that our application acts more reliably on unstable mobile networks
        5. Other file that plays a part in setting up the PWA using Create React App is manifest.json
        6. Most of the configuration for our PWA is placed here, which we can see if we open the public/manifest.json file
        7. In this configuration JSON file, we will find the most important pieces for OS and browsers

 
### 6. First build the app and run
        npm run build
        serve -s build
        
### 7. In the browser look at the Application tab and then on left hand side on ServiceWorker
### 8. Further look at the Cache Storage section

### 9. Now stop the serve process and still you can see the application 

### 10. Refactor the app code and divide into two components Header and Link

### 11. We are going to display the public information from github profile
        curl 'https://api.github.com/users/username'
        For username we can use octocat
        
### 12. To display the profile information, let us create the Profile container in src/containers/profile folder
        1. Add implementation of Profile container
        2. Add lifecycle method to fetch the github profile information
        3. Write basic logic to display the profile information
        4. Refactor the code to push the logic of display in List component

### 13. Styling the react component with styled-components
        npm i styled-components
        1. Styled components uses the CSS-in-JS feature which allows us to write CSS in JavaScript to create components
        
### 14. Let us refactor our Link component and try to get rid of Link.css and replace it with styled components
           - import './Link.css';
           + import styled from 'styled-components';
            
           + const InnerLink = styled.a`
           +   color: #61dafb;
           + `;

            
            <InnerLink
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkTitle}
            </InnerLink>

### 15. Now we can delete the Link.css file

### 16. Similarly we can refactor other component and replace the css class with styled-components
