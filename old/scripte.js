function computer() {
    alert(" Syllabus :- \n Chapter - MS Powerpoint. ");
}

function english() {
    alert("Syllabus :- \n Beehive :- Ch 8 & 9 All Q&A from Eng+ and Beehive \n Poem :- On Killing A Tree,The Snake Trying . \n Moments :- Ch :- 8 & 9 Q&A from Eng+ and Moment. \n Writing :- Complete the story,Diary Entry,Articles, Formal Letter. \n Grammar :- Error,Jumbled word..");
}

function maths() {
    alert(" Syllabus :- \n Chapter 10:- Quadrilateral\n Chapter 11 :- Area Of Paralellogram\n Chapter 15 :- Volume and Surface Area.");
}

function science() {
    alert(" Syllabus :- \n Physics :- \n Chapter 4- Work and Energy \n Chapter 5- Sound \n Chemistry :- \n Chapter 3 - Atoms and Molecules \n Biology :- \n Chapter Last- Natural Resource. ");
}

function sanskrit() {
    alert(" Syllabus :- \n. Sanskrit :- Don't Know\n Hindi :- Don't know 🙅‍♂️ ");
}

function sst() {
    alert(" Syllabus :- \n Geography :- \n Chapter- Climate\n History :- \n Nhi pata kisi ko pata hai toh bata do \n Civics :- \n Nhi pata kisi ko pata hai toh bata do \n Economics:- \n Chapter- Poverty");
}
var myArray = ['Joy', 'Happiness', 'Peace', 'Hope', 'Javascript', 'Html', 'Css'];
var rand = Math.floor(Math.random() * myArray.length);
var concat = myArray[rand];

function random() {
    document.getElementById("love").innerHTML = (concat);
}
