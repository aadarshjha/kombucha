# Kombucha 📖 🍎

### Dev Instructions (Running Locally On Your Computer)

In order to use Kombucha, you must have [Node](https://nodejs.org/en/) installed locally on your computer. After doing so, please follow the next steps to get Kombucha running on your device:

1. Open up your terminal, and execute `git clone https://github.com/aadarshjha/kombucha.git`
2. `cd kombucha`
3. `npm run install-deep`
4. `npm run start`
5. Navigate to http://localhost:3000/ for the local frontend deployment.
6. Navivate to http://localhost:5000/ for the local backend deployment (note that you will get a "cannot GET /" error initially as we do not have our root as a route).

### Deployment Instructions

1. Navigate to https://kombucha.vercel.app/ for the integrated frontend and backend deployed version.
2. Navigate to https://enigmatic-beach-56036.herokuapp.com/ for the deployed backend system. Of course, you must used the routes defined in our project to fetch the correct data, such as https://enigmatic-beach-56036.herokuapp.com/learn/articles

### Testing Instructions

Please follow the below instructions to run all tests

1. From the root directory: `npm test`

Please follow the below instructions to run the front-end (client-side) tests.

1. From root directory: `cd client`
2. `npm test`

Please follow the below instructions to run the back-end (server-side) tests.

1. From root directory: `cd server`
2. `npm test`

### Important Note!

1. Please note that it may take up to a minute for the data to appear on the screen, this is because we use a free-tier service of heroku. Thanks!

### What Is Kombucha?

Kombucha is a fully integrated, end-to-end educational platform for the Vanderbilt Undergraduate Microbiome Society (VUMS).

### Technical Requirements

Kombucha is a full-stack application build from the MERN (MongoDB, Express, React, and Node) Stack.

### Additional Information

Our project is a web-based educational platform wherein administrators can upload and modify content and users can view said content, specifically tailor-made for the Vanderbilt University Microbiome Society (VUMS). This content may include videos, articles, interactive pages, graphics, comics and other such mediums. Additional functionalities include creating a game interface for administrators to be able to present content and articles in an easy-to-understand and enjoyable fashion for the end user. This game will be closely tied with the educational content to ensure a seamless user experience. Consequently, our intention is to immerse the user with the material that the administrators plan to upload and create. We intend to facilitate this process by creating an easy-to-navigate user interface for both administrators and users, and allow VUMS to share, update, disseminate and delete their educational material while advertising their impactful volunteering activities in the local community, similar to Vanderbilt’s current AnchorLink service.

### Sprint Presentations

1. [Sprint One](https://www.notion.so/Sprint-1-Presentation-befc3a8327414836be72a3cff70c3e9e)
