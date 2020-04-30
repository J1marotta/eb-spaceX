#  Using SpaceX api

 This is a application to interact with [SpaceXApi](https://docs.spacexdata.com)


## Technologies 
 The front end was built with React and Redux using hooks, styling was done in CSS grid using Styled-Components.
 I tried to minimise redux verbosity by using simple functions where ever possible. 

 And I've used aspect ratio media queries to target desktop devies, which allows for much cleaner styling especially with modern devices having a broad range of pixel counts and dpis.

 ```css
   targets anything wider than it is tall (like a landscape tablet or a desktop);
 @media (min-asect-ratio: 4/3) {
  ... 
 }

 ```

### Functionality 
  
  This app allows you to: 
     - Get all capsules 
     - Get a particular landing pad using an ID in the input field
     - Leave the input blank and collect all landingPads.

 
  You can see the requirements inside [Requirements](./eb.md) 



####  Test: 
 To test the client: 

  ```bash
    cd client 
    npm i
    npm run test
  ```



### Running the application: 
  You will need docker install:
  If you do not, they offer easy to install binaries ([Mac](https://docs.docker.com/docker-for-mac/install/)) ([Windows](https://docs.docker.com/docker-for-windows/install/)).

  From the docker folder of the project, run `docker-compose up -d`

  This runs docker using a YAML file inside the docker directory  

  the `up` builds, starts and attaches containers for a service, 
  the `-d` (detach) runs them as a background process

  more information on docker-compose can be found [here](https://docs.docker.com/compose/reference/up/)
 
  * You should now have the UI running at http://localhost:3000 and the server running at http://localhost:4000
  * You should now have a MySQL database running at localhost:3306

 
