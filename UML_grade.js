window.onload = function () {
    var submit = document.getElementById("submit");
    submit.onclick = function () {
        buildGrade();
    }
}

function buildGrade() {
    checkTestInformation();
    var grade1 = buildCompletionGrade();
    var grade2 = buildSingleChoiceGrade();
    var grade3 = buildMultipleChoiceGrade();
    var grade4 = buildJudgmentGrade();
    var grade5 = buildShortAnswersGrade();
    buildTotalGrade(grade1, grade2, grade3, grade4, grade5);
}

function getInformation(information) {

    return document.getElementById(information).value;
}

function checkTestInformation() {
    var info１ = getInformation("class");

    if (info１ === '') {
        alert("请填写班级信息!!");
    }
    var info2 = getInformation("sno");

    if (info2 === '') {
        alert("请填写学号信息!!");
    }
    var info3 = getInformation("name");

    if (info3 === '') {
        alert("请填写姓名信息!!");
    }
}

function buildCompletionGrade() {
    var grade = 0;

    var answer1 = getInformation("11");
    if (answer1 === '统一建模语言')
        grade += 1;

    var answer2 = getInformation("12");
    if (answer2 === '封装')
        grade += 1;

    var answer3 = getInformation("13");
    if (answer3 === '继承')
        grade += 1;

    var answer4 = getInformation("14");
    if (answer4 === '多态')
        grade += 1;

    return grade;
}

function buildSingleAnswer(information) {
    for (var i = 0; i < information.length; i++) {
        if (information[i].checked)

            return information[i].value;
    }
}
function buildSingleChoiceGrade() {
    var grade = 0;
    var information = document.form2;

    if (buildSingleAnswer(information.answer1) === 'B') {
        grade += 2;
    }
    if (buildSingleAnswer(information.answer2) === 'A') {
        grade += 2;
    }

    return grade;
}

function buildMultipleAnswers(answers) {
    var values = '';
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked == true) {
            values += answers[i].value;
        }
    }

    return values;
}

function buildMultipleChoiceGrade() {
    var grade = 0;
    var answer3 = document.getElementsByName("answer3");
    var answer4 = document.getElementsByName("answer4");

    if (buildMultipleAnswers(answer3) === 'ABD') {
        grade += 2;
    }
    if (buildMultipleAnswers(answer4) === "ABC") {
        grade += 2;
    }

    return grade;
}

function buildJudgmentGrade() {
    var grade = 0;
    var radio1 = document.getElementsByName("panswer1");
    var radio2 = document.getElementsByName("panswer2");

    for (var i = 0; i < radio1.length; i++) {
        if (radio1[i].checked && radio1[i].value === 'wrong') {
            grade += 2;
        }
    }
    for (var i = 0; i < radio2.length; i++) {
        if (radio2[i].checked && radio2[i].value === 'correct') {
            grade += 2;
        }
    }

    return grade;
}

function buildShortAnswersGrade() {
    var grade = 0;
    var answers = "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式." +
        "可以是物理实体;可以是某种图形;或者是一种数学表达式.";

    if (answers === getInformation(51)) {
        grade += 5;
    }

    return grade;
}

function buildTotalGrade(grade1, grade2, grade3, grade4, grade5) {
    var grade = grade1 + grade2 + grade3 + grade4 + grade5;

    alert("亲,您的总成绩是：" + grade + "分！");
    document.getElementById("总分").innerHTML = grade;
    document.getElementById("总分").style.color = "red";
}