const quotes = [
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author : "로망로랑"
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author : "L.론허바드"
    },
    {
        quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
        author : "제임스 오펜하임"
    },
    {
        quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더많이 실험할수록 더나아진다.",
        author : "랄프 왈도 에머슨"
    },
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
        author : "단테"
    },
    {
        quote: "일하는 시간과 노는 시간을 뚜렷이 구분하라 . 시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라. 그러면 젋은 날은 유쾌함으로 가득찰것이고 늙어서도 후회할 일이 적어질것이며 비록 가난할 때라도 인생을 아름답게 살아갈수있다.",
        author : "루이사 메이올콧"
    },
    {
        quote: "삶은 소유물이 아니라 순간 순간의 있음이다 영원한 것이 어디 있는가 모두가 한때일뿐 그러나 그 한때를 최선을 다해 최대한으로 살수 있어야 한다 삶은 놀라운 신비요 아름다움이다.",
        author : "법정스님"
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");


const quotes_items = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = quotes_items.quote;
author.innerText = quotes_items.author;


