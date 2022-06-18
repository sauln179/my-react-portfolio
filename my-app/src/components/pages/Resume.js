import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">Resume</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.

                <p class="mt-5">
                </p>
                <p>
                Download test <a href="https://github.com/sauln179/my-react-portfolio/blob/main/my-app/assets/Fake%20Resume.pdf" class="link">resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2>Front end experience</h2>
                <p>HTML, CSS (Bootstrap, Tailwind), JavaScript, jQuery, React.js, IndexedDB</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>Back end experience</h2>
                <p>
                Node.js, Express.js, mySql, Sequelize, NoSQL (MongoDB, Mongoose),  API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;