
let questions = [
    {
        id: 1,
        question: "Which one of the following statements about a password is TRUE?",
        answer:"It should be changed regularly.",
        options: [
            "It must be changed only if it is compromised.",
            "It cannot contain special character symbols.",
            "It must be registered with the system administrator.",
            "It should be changed regularly."
        ]
    },
    {
        id: 2,
        question: "Which one of the following could lead to the spread of a malicious program?",
        answer: "Using a USB Flash Drive from an unknown source to exchange data.",
        options: [
          "Using only software that has been checked for viruses.",
          "Maintaining regularly updated anti-virus software.",
          "Opening only virus-checked file attachments from known sources.",
          "Using a USB Flash Drive from an unknown source to exchange data."
        ]
      },
      {
        id: 3,
        question: "Which one of the following would result in the loss of contact details if it were stolen?",
        answer: "Mobile Phone.",
        options: [
          "Printer.",
          "Mobile Phone.",
          "Modem.",
          "MP3"
        ]
      },
      {
        id: 4,
        question: "Which one of the following should you do to ensure that your USB the storage device is kept safe and secure?",
        answer: "Never leave it unattended.",
        options: [
          "Only use it in private surroundings.",
          "Do not access it using a Bluetooth device.",
          "Use firewall software.",
          "Never leave it unattended."
        ]
      },
      {
        id: 5,
        question: "Which one of the following should be used to change your password?",
        answer: "Control Panel.",
        options: [
          "Control Panel.",
          "Anti-virus software.",
          "Windows Firewall.",
          "Internet Explorer."
        ]
      },
      {
        id: 6,
        question: "Which one of the following describes how a breach in IT security should be reported?",
        answer: "Using the method listed in the organisation’s security policy.",
        options: [
          "Using the telephone.",
          "By emailing to the IT Manager.",
          "Using the method listed in the organisation’s security policy.",
          "Using any means of communication."
        ]
      },
      {
        id: 7,
        question: "Which one of the following describes why it is important to update antivirus software regularly?",
        answer: "To protect your computer from all known viruses.",
        options: [
          "To protect your computer from all known viruses.",
          "To ensure the software identifies old viruses.",
          "To protect your computer from unwanted bulk messages.",
          "To prevent the spread of malicious programs on the Internet."
        ]
      },
      {
        id: 8,
        question: "Which one of the following can protect a computer from the risk of unwanted emails?",
        answer: "Anti-virus software.",
        options: [
          "Anti-spam software.",
          "Anti-virus software.",
          "Anti-spyware software.",
          "PC diagnostic software"
        ]
      },
      {
        id: 9,
        question: "Which one of the following is the recommended action to prevent the risk of access to a network by other users?",
        answer: "Change the default WEP or WPA access key to one that only you know.",
        options: [
          "Disconnect the computer from the network.",
          "Complain to the System Administrator.",
          "Change the default WEP or WPA access key to one that only you know.",
          "Adjust the Internet security settings."
        ]
      },
      {
        id: 10,
        question: "Which one of the following is the reason that users should log on with a username and password?",
        answer: "To protect computers against unauthorised use.",
        options: [
          "To be aware of who is in the building.",
          "To check up on the time-keeping of users.",
          "To protect computers against unauthorised use.",
          "To enable a personalised greeting for each user."

        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}
