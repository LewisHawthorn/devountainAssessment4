const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const postBtn = document.getElementById("post")
const postMessage = () => {
    console.log("testing1")
    axios.post("http://localhost:4000/api/post/")
        .then(res => {
            alert("Your message has been posted.");
    });
};

postBtn.addEventListener("submit", function(event) {event.preventDefault();});






const clearBtn = document.getElementById("clear")

const clearMessages = () => {
    axios.delete("http://localhost:4000/api/messages/")
        .then(res => {
            const data = res.data;
            alert("Messages have been deleted.");
    });
};
clearBtn.addEventListener("click", clearMessages)

const countBtn = document.getElementById("countMessages")

const countMessages = () => {
    axios.get("http://localhost:4000/api/messages/")
        .then(res => {
            const data = res.data;
            alert(`There are ${data} messages.`);
    });
    complimentBtn.addEventListener('click', getCompliment)
};