const btnel = document.getElementById("btn");
const emojinameel = document.getElementById("emoji-name");

const emoji = [];
async function getemoji() {
let response = await fetch ("https://emoji-api.com/emojis?access_key=7219ceeeaba663aaa3cc5815f63c5dc73cca6020")
data= await response.json();

for (i=0; i<1500; i++){
    emoji.push({
        emojiName: data[i].character,
        emojiCode: data[i].unicodeName,
    }

    )
}

}

getemoji();

btnel.addEventListener("click", () => {
const randomNum = Math.floor(Math.random()*emoji.length);
btnel.innerText=emoji[randomNum].emojiName;
emojinameel.innerText=emoji[randomNum].emojiCode;
})