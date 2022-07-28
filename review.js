const reviews = [
    {
        id: 1,
        name: "Melinda Maddinson",
        job: "Product Marketer",
       img: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600",
       text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated"
    },

    {
        id: 2,
        name: "Jared Benson",
        job: "Software Developer",
        img: "https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=600",
        text: " Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary"
    },

     {
        id: 3,
        name: "Alabel Derek",
        job: "UI Designer",
        img: "https://images.pexels.com/photos/7821514/pexels-photo-7821514.jpeg?auto=compress&cs=tinysrgb&w=600",
        text: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts"
    },

    {
        id: 4,
        name: "Shane Maxwell",
        job: "Director",
        img: "https://images.pexels.com/photos/1181649/pexels-photo-1181649.jpeg?auto=compress&cs=tinysrgb&w=600",
        text: " life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox"
    }
];

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", ()=> {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent =item.job;
    info.textContent = item.text;
} 

nextBtn.addEventListener("click", ()=> {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", ()=> {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});