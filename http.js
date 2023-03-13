const http = require('http');
const  {readFileSync, writeFileSync } = require('fs');

const surveyForm = readFileSync('../tutorial/survey.html', 'utf-8');
//writeFileSync(
//'../tutorial/sampleHtml.txt', 
//`${surveyForm}`, 
//{flag : 'a'});
const server = http.createServer((req,res)=> {
    //console.log(res)
    if (req.url === '/') {
        res.write('Welcome to my server');
    }
    else if (req.url === '/form') {
    res.write(surveyForm)
    }
    else {
    res.write('oops! what are you looking for?')
    }
    res.end();
})

server.listen(5000);
