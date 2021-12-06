// Quiz Questions
const questions = [
    {
        question: "1. What does HTML stand for ?",
        a: "Hyper Text My Language",
        b: "Hyper Text Modern Language",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Make Language",
    },

    {
        question: "2. What does CSS stand for ?",
        a: "Cascading Style Sheets",
        b: "Common Style Sheets",
        c: "Criteria Style Sheets",
        d: "Commonwealth Style Sheets",
    },

    {
        question: "3. Who is the chairman of Microsoft ?",
        a: "Bill Gates",
        b: "Steve Jobs",
        c: "Jeff Bezos",
        d: "Mukesh Ambani",
    },

    {
        question: "4. Who is the creator of Linux Kernel ?",
        a: "Elon Musk",
        b: "Jack Ma",
        c: "Linus Torvalds",
        d: "Warren Buffet",
    },

    {
        question: "5. Who invented Bulb ?",
        a: "Mark Zuckerberg",
        b: "Thomas edison",
        c: "Ross Taylor",
        d: "AB de villiers",
    },

    {
        question: "6. Who is the founder of apple?",
        a: "Mark Zuckerberg",
        b: "Thomas edison",
        c: "Ross Taylor",
        d: "Steve Jobs",
    },

    {
        question: "7. Who is the prime minister of India ?",
        a: "Mr. dumbeldor",
        b: "Sh. Narendra Modi",
        c: "Rahul Gandhi",
        d: "Dr. Manmohan Singh",
    },

    {
        question: "8. Which tag in javascript is used for manipulating text inside HTML ?",
        a: "document.innerText",
        b: "document.getElementById",
        c: "document.innerHTML",
        d: "None of the Above",
    },

    {
        question: "9. Which batsman holds the record of fastest century in ODI cricket ?",
        a: "Sachin Tendulkar",
        b: "Virat Kohli",
        c: "Eoin Morgan",
        d: "AB de villiers",
    },

    {
        question: "10. Which is the fastest animal of world ?",
        a: "cheetah",
        b: "dog",
        c: "tiger",
        d: "green monkey",
    },
];


//Correct Answers of the Questions in the array of objects.
const correct = [questions[0].c, questions[1].a, questions[2].a, questions[3].c, questions[4].b
,questions[5].d,questions[6].b,questions[7].a,questions[8].d,questions[9].a];


// Targeting Elements.
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const child_container = document.querySelector('.child_container');
const btn = document.querySelector('.btn');
const question = document.querySelector('.article_h3');
const div = document.querySelector('.article')
const heading = document.querySelector('.header_h2');
const line = document.querySelector('.line');
const container = document.querySelector('.container');

const optionA = document.querySelector('.option_a');
const optionB = document.querySelector('.option_b');
const optionC = document.querySelector('.option_c');
const optionD = document.querySelector('.option_d');

const checkA = document.querySelector('.check_a');
const checkB = document.querySelector('.check_b');
const checkC = document.querySelector('.check_c');
const checkD = document.querySelector('.check_d');


// Checking if the answer is wrong.
check_wrong = (questions) => {
    if (optionA.innerHTML != correct[cnt_ques]) {
        var cross = document.createElement("p");
        cross.innerHTML = "✘";
        optionA.appendChild(cross);
    }
}

check_wrong1 = (questions) => {
    if (optionB.innerHTML != correct[cnt_ques]) {
        var cross = document.createElement("p");
        cross.innerHTML = "✘";
        optionB.appendChild(cross);
    }
}

check_wrong2 = (questions) => {
    if (optionC.innerHTML != correct[cnt_ques]) {
        var cross = document.createElement("p");
        cross.innerHTML = "✘";
        optionC.appendChild(cross);
    }
}

check_wrong3 = (questions) => {
    if (optionD.innerHTML != correct[cnt_ques]) {
        var cross = document.createElement("p");
        cross.innerHTML = "✘";
        optionD.appendChild(cross);
    }
}




// Checking if the answer is correct
check_corr = (questions) => {
    if (optionA.innerHTML == correct[cnt_ques]) {
        var tick = document.createElement("p");
        tick.innerHTML = "✔";
        optionA.appendChild(tick);
        return 1;
    }
}
check_corr1 = (questions) => {
    if (optionB.innerHTML == correct[cnt_ques]) {
        var tick = document.createElement("p");
        tick.innerHTML = "✔";
        optionB.appendChild(tick);
        return 1;
    }
}

check_corr2 = (questions) => {
    if (optionC.innerHTML == correct[cnt_ques]) {
        var tick = document.createElement("p");
        tick.innerHTML = "✔";
        optionC.appendChild(tick);
        return 1;
    }
}

check_corr3 = (questions) => {
    if (optionD.innerHTML == correct[cnt_ques]) {
        var tick = document.createElement("p");
        tick.innerHTML = "✔";
        optionD.appendChild(tick);
        return 1;
    }
}

var alert_cnt = 0;
var rules = "Rules of the quiz.\n⚫The following quiz consists of 10 questions.\n⚫Once submitted a response for a question it is recorded and can't be edited again.\n⚫Press OK to move forward with the quiz."
if(alert_cnt == 0){
    alert(rules);
    alert_cnt++;
}


// Event listeners for different options.
var attempted = 0;
var correct_ans = 0;
var wrong_ans = 0;
var cnt_ques = 0;

checkA.addEventListener("click", () => {
    if(questions[cnt_ques].question.includes('submitted') == true){
        return;
    }else{
        questions[cnt_ques].question = questions[cnt_ques].question + " (submitted) ";
        if (check_corr(questions[cnt_ques])) {
            correct_ans++;
        }else{
            check_wrong(questions[cnt_ques]);
            wrong_ans++;
            
        }
        attempted++;
    }
    
})

checkB.addEventListener("click", () => {
    if(questions[cnt_ques].question.includes('submitted') == true){
        return;
    }else{
        questions[cnt_ques].question = questions[cnt_ques].question + " (submitted) ";
        if (check_corr1(questions[cnt_ques]) == 1) {
            correct_ans++;
        }else{
            check_wrong1(questions[cnt_ques]);
            wrong_ans++;
        }
        attempted++;
    }
})

checkC.addEventListener("click", () => {
    if(questions[cnt_ques].question.includes('submitted') == true){
        return;
    }else{
        questions[cnt_ques].question = questions[cnt_ques].question + " (submitted) ";
        if (check_corr2(questions[cnt_ques]) == 1) {
            correct_ans++;
        }else{
            check_wrong2(questions[cnt_ques]);
            wrong_ans++;
        }
        attempted++;
    }
})

checkD.addEventListener("click", () => {
    if(questions[cnt_ques].question.includes('submitted') == true){
        return;
    }else{
        questions[cnt_ques].question = questions[cnt_ques].question + " (submitted) ";
        if (check_corr3(questions[cnt_ques]) == 1) {
            correct_ans++;
        }else{
            check_wrong3(questions[cnt_ques]);
            wrong_ans++;
        }
        attempted++;
    }
})


// For loading a question.
load_ques = (questions) => {
    question.innerHTML = questions.question;
    optionA.innerHTML = questions.a;
    optionB.innerHTML = questions.b;
    optionC.innerHTML = questions.c;
    optionD.innerHTML = questions.d;
};


// For loading next question on clicking of Next Question button.

next_ques = () => {
    cnt_ques += 1;

    if (cnt_ques == questions.length) {
        next.innerHTML = "";
        prev.innerHTML = "";
        div.innerHTML = "";
        my_node = document.createElement('h3');
        my_node.innerHTML = "Wrong Answers: " + wrong_ans;
        my_node1 = document.createElement('h3');
        my_node1.innerHTML = "Correct Answers: " + correct_ans;
        my_node2 = document.createElement('h3');
        my_node2.innerHTML = "Total Questions: " + questions.length;
        my_node3 = document.createElement('h3');
        my_node3.innerHTML = "Attempted Questions: " + attempted;
        
        div.appendChild(my_node);
        div.appendChild(my_node1);
        div.appendChild(my_node2);
        div.appendChild(my_node3);

        my_node.style.top = '81px';
        my_node1.style.top = '81px';
        my_node2.style.top = '81px';
        my_node3.style.top = '81px';

        my_node.style.left = '65px';
        my_node1.style.left = '65px';
        my_node2.style.left = '65px';
        my_node3.style.left = '65px';

        my_node.style.padding = "4px";
        my_node1.style.padding = "4px";
        my_node2.style.padding = "4px";
        my_node3.style.padding = "4px";
        
        
        my_node.style.color = "white";
        my_node1.style.color = "white";
        my_node2.style.color = "white";
        my_node3.style.color = "white";
        heading.innerHTML = "";

        line.style.display = "none";

        my_node.style.fontFamily = "cursive";
        my_node1.style.fontFamily = "cursive";
        my_node2.style.fontFamily = "cursive";
        my_node3.style.fontFamily = "cursive";
        

        child_container.style.backgroundImage = "url('quiz_img.jpg')";
        child_container.style.backgroundRepeat = "no-repeat";
        child_container.style.backgroundSize = "cover";
        child_container.style.border = "5px solid white";

        btn.remove();
    }

    load_ques(questions[cnt_ques]);
}


// For loading previous question on clicking of prev Question button.
prev_ques = () => {
    if(cnt_ques == 0){
        cnt_ques = questions.length - 1;
    }else{
        cnt_ques-=1;
    }
    load_ques(questions[cnt_ques]);
}



// Event listener for clicking next.
next.addEventListener('click',next_ques);

// Event listener for hovering inside the button.
next.addEventListener('mouseover',function(){
    next.style.color = "black";
})

// Event Listener for hovering out of the button.
next.addEventListener('mouseout',function(){
    next.style.color = "white";
})



// Event listener for clicking previous.
prev.addEventListener('click',prev_ques);

// Event listener for hovering inside the button.
prev.addEventListener('mouseover',function(){
    prev.style.color = "black";
})

// Event Listener for hovering out of the button.
prev.addEventListener('mouseout',function(){
    prev.style.color = "white";
})




