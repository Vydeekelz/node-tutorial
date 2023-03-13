const  {readFileSync, writeFileSync } = require('fs');

const surveyForm = readFileSync('../tutorial/survey.html', 'utf-8');
writeFileSync(
'../tutorial/sampleHtml.txt', 
`This is the html content of the survey form: ${surveyForm}`, 
{flag : 'a'});
//writeFileSync('../tutorial/sampleHtml.txt','')
    
//console.log(surveyForm`);