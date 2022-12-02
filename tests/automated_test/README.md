# QA challange automated UI tests
 
## Pre Requisites
1. [Install Node js](https://nodejs.org/en/download/) (support: Node.js 8 and above)
2. Install npm 
3. Download the qa-challange.
4. Go to the project directory, and run:
    >`docker-compose up`

The front-end will be available at <http://localhost:3000/>

## UI Test execution

1. Git Clone the Repo with the master branch for the the specified location
    >git clone https://github.com/shaminrasoja/kryha-qa-challenge.git
    
2. cd  <PROJECT_HOME> /tests/automated_test

3. Install all the dependencies specified in the package.json file via npm by executing below command by being in the folder location specified in below
    > npm install
    
4. Install Cypress via npm

    * cd /your/project/path

    * npm install cypress --save-dev
    
   This will install Cypress locally as a dev dependency for your project.

5. Execute the Cypress Automation Test Suite by executing the below command below
    * Headless
        > npx cypress run
    * Headed
        > npx cypress open
