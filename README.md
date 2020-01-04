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
