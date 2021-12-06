//Targeting Elements
const bill_amt = document.querySelector('#Bill_Amt');
const tip =  document.querySelector('#Tip');
const no_of_people = document.querySelector('#no_of_people');
const calculate = document.querySelector('#calculate');
const clear = document.querySelector('#clear');
const box = document.querySelector('.box');


// Creating elements for displaying bill
const div_line = document.createElement('div');
const div = document.createElement('div');


//Bill Display with calculate button

calculate.addEventListener('click',()=>{
    if(bill_amt.value == ""){
        alert("You need to write bill amount!")
    }else if(tip.value == ""){
        alert("You need to write tip amount!")
    }else if(no_of_people.value == ""){
        alert("You need to write no of people!")
    }else{
        var tip_amt = (tip.value*bill_amt.value)/100;
        var tip_amt_p = tip_amt.toPrecision(2);

        var tot_amt = parseInt(bill_amt.value) + tip_amt;
        var tot_amt_p = tot_amt.toPrecision(2);

        var tip_per_person = tip_amt/no_of_people.value;
        var tip_per_person_p = tip_per_person.toPrecision(2);
        
        var tot_amt_per_person = tot_amt/no_of_people.value;
        var tot_amt_per_person_p = tot_amt_per_person.toPrecision(2);

        div_line.classList.add('div_line');
        box.appendChild(div_line);

        div.classList.add('result');
        const p = document.createElement('p');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p.innerHTML = "Tip Amount: " + tip_amt_p;
        p1.innerHTML = "Total Amount: " + tot_amt_p;
        p2.innerHTML = "Tip Per Person: " + tip_per_person_p;
        p3.innerHTML = "Total Amount Per Person: " + tot_amt_per_person_p;

        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        box.appendChild(div);
        box.style.height= "530px";
    }
});

//Clear Button for clearing
const clear_all = () => {
    if(bill_amt != "" && tip != "" && no_of_people != ""){
        bill_amt.value = "";
        tip.value = "";
        no_of_people.value = "";
    }
    div_line.remove();
    div.remove();
    box.style.height = "400px";
}

clear.addEventListener('click',clear_all);