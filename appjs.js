const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const generatePage = require('./src/page-template');

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    const pageHTML = generatePage();

    fs.writeFile('./index.html', pageHTML, err => {
      if (err) throw new Error(err);
    
      console.log('Portfolio complete! Check out index.html to see the output!');
    });
  });


