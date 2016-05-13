$("#submit").click(function (event) {
    buildGrade();
});

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

    return $(information).val();
}

function checkTestInformation() {
    var info１ = getInformation("#class");

    if (info１ === '') {
        alert("请填写班级信息!!");
    }
    var info2 = getInformation("#sno");

    if (info2 === '') {
        alert("请填写学号信息!!");
    }
    var info3 = getInformation("#name");

    if (info3 === '') {
        alert("请填写姓名信息!!");
    }
}

function buildCompletionGrade() {
    var grade = 0;

    var answer1 = getInformation("#11");
    if (answer1 === '统一建模语言')
        grade += 1;

    var answer2 = getInformation("#12");
    if (answer2 === '封装')
        grade += 1;

    var answer3 = getInformation("#13");
    if (answer3 === '继承')
        grade += 1;

    var answer4 = getInformation("#14");
    if (answer4 === '多态')
        grade += 1;

    return grade;
}

function buildSingleChoiceGrade() {
    var grade = 0;
    var list1 = $('input:radio[name="singleChoice1"]:checked').val();
    var list2 = $('input:radio[name="singleChoice2"]:checked').val();

    if (list1 === "B") {
        grade += 2;
    }
    if (list2 === "A") {
        grade += 2;
    }

    return grade;
}

function buildMultipleAnswers(answers) {
    var values = '';

    for (var i = 0; i < answers.length; i++) {
        values += answers[i].value;
    }

    return values;
}

function buildMultipleChoiceGrade() {
    var grade = 0;
    var list1 = $('input:checkbox[name="multipleChoice1"]:checked');
    var list2 = $('input:checkbox[name="multipleChoice2"]:checked');

    if (buildMultipleAnswers(list1) === "ABD") {
        grade += 2;
    }
    if (buildMultipleAnswers(list2) === "ABC") {
        grade += 2;
    }

    return grade;
}

function buildJudgmentGrade() {
    var grade = 0;
    var answer1 = $('input:radio[name="judge1"]:checked').val();
    var answer2 = $('input:radio[name="judge2"]:checked').val();

    if (answer1 === "wrong") {
        grade += 2;
    }
    if (answer2 === "correct") {
        grade += 2;
    }

    return grade;
}

function buildShortAnswersGrade() {
    var grade = 0;
    var answers = "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式." +
        "可以是物理实体;可以是某种图形;或者是一种数学表达式.";

    if (answers === getInformation("#51")) {
        grade += 5;
    }

    return grade;
}

function buildTotalGrade(grade1, grade2, grade3, grade4, grade5) {
    var grade = grade1 + grade2 + grade3 + grade4 + grade5;

    alert("亲,您的总成绩是：" + grade + "分！");
    $("#总分").val(grade);
    $("#总分").css("color","red");
}