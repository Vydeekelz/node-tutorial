const {readFile, writeFile} = require('fs');
readFile('../tutorial/survey.html','utf-8',
(err,result) => {
    if(err){
        console.log(err);
        return;
    }
    const surveyForm = result;
    readFile("../tutorial/index.html", 'utf-8',
    (err,result)=> {
        if(err){
            console.log(err);
            return;
        }
    const indexForm = result
    writeFile('../tutorial/files/result_async.txt', `The html content for the survey form is\n${surveyForm} The html content for index is\n${indexForm}`, (err,result)=>
    {
    if (err){
        console.log(err);
        return;
    }
    console.log(result)
    }
    )
    }
    )
}
)
