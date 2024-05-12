var text;
var questions;

function getValue(){
text = document.getElementById("firstbox").value;


var textarea = document.getElementById("firstbox");
textarea.style.height = "5vh";
// console.log(text);
questions = text.split('\n\n');
console.log(questions);

var questionlines = [];
// var onlyquestions = [];
// var onlyanswers = [[[]]];

for (let i=0;i<questions.length;i++)
{
    questionlines = questions[i].split('\n');
    console.log("lines",questionlines);
    console.log("lineslength",questionlines.length);
    // onlyanswers[i] = [];
    if (questionlines.length!=2) //closed answers question
    {

    
        var existingDiv = document.getElementById("questions");
        var newDiv = document.createElement("div");
        newDiv.id = "Q"+(i+1);
        newDiv.className = "Question";

        var answerDiv = document.createElement("div");
        
        
        
        existingDiv.appendChild(newDiv);
        

    for (let j=0; j<questionlines.length; j++) 
    {
        if(j==0)
        {
            var textNode = document.createTextNode(questionlines[j]);
            newDiv.appendChild(textNode);
        }
        else
        {
                var button = document.createElement("button");

                var isCorrect = questionlines[j].startsWith('*');
                var buttonText = isCorrect ? questionlines[j].substring(1) : questionlines[j];

                if (isCorrect) button.id = 'correct';

                button.className = 'qbuttons';
                button.onclick = function() 
                {
                    this.style.backgroundColor = this.id === 'correct' ? 'green' : 'red';
                };

                answerDiv.className = "answerrow";
                button.innerHTML = buttonText;
                newDiv.appendChild(answerDiv);
                answerDiv.appendChild(button);
                
        }

        }
    }
    else if (questionlines.length==2) //open answer question
    {
        var existingDiv = document.getElementById("questions");
        var newDiv = document.createElement("div");
        newDiv.id = "Q"+(i+1);
        newDiv.className = "Question";

        var answerDiv = document.createElement("div");
        
        
        
        existingDiv.appendChild(newDiv);

        for (let j=0; j<questionlines.length; j++) 
    {
        if(j==0)
        {
            var textNode = document.createTextNode(questionlines[j]);
            newDiv.appendChild(textNode);
        }
        else
        {
                var answerDiv = document.createElement("div");
                var button = document.createElement("button");

                
                var buttonText = "Show answer";

                var answerSpan = document.createElement("span");
                answerSpan.style.display = "none";
                var answerTextNode = document.createTextNode(questionlines[j]);
                answerSpan.appendChild(answerTextNode);
                

                button.className = 'qobuttons';
                

                button.onclick = function() {
                var parentDiv = this.parentNode;
                var nextSpan = parentDiv.querySelector("span");
                if (nextSpan.style.display == "none") nextSpan.style.display = "block";
                else nextSpan.style.display = "none";
                };

                answerDiv.className = "answerrowopen";
                button.innerHTML = buttonText;
                newDiv.appendChild(answerDiv);
                answerDiv.appendChild(button);
                answerDiv.appendChild(answerSpan);

                
                
        }

        }
    }
        
    }
    // console.log("answ",onlyanswers);
    // console.log("quest",onlyquestions);
    textarea.value='';
}

function shuffleQuestions()
{
    const divs = Array.from(document.querySelectorAll('.Question')); 
    const parent = document.querySelector('#questions'); 



    divs.sort(() => Math.random() - 0.5); 


    divs.forEach(div => { 
        if (div!==parent)
     parent.appendChild(div); 
    }); 
}

function shuffleAnswers()
{
    const answerRows = document.querySelectorAll('#questions .Question .answerrow');

    answerRows.forEach(answerRow => {
        const buttons = Array.from(answerRow.querySelectorAll('.qbuttons'));
        
        buttons.sort(() => Math.random() - 0.5);

        buttons.forEach(button => {
            answerRow.appendChild(button);
        });
    })
}