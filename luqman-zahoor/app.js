
let btn = document.querySelector(".btn-quote");
let para = document.querySelector(".para-quote");
let para2 = document.querySelector(".author");

btn.addEventListener("click", async () => {
    let quote = await getQuote();
    para.innerText = `"${quote.content}"`;
    para2.innerText = quote.author;
    btnTextChange();
});

const url = "https://api.quotable.io/random";
async function getQuote() {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (err) {
        return err;
    }
}
function btnTextChange(){
    btn.innerText = "Get Another";
}
