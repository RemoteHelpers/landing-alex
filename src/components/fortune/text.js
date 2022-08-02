
const prizes = [
    {
        text: "Part-time worker discount ( 10% )",
        color: "#1C1C1E",
    },
    {
        text: "Free web design consultation",
        color: "#3A3A3C",
    },
    {
        text: "Full-time worker discount ( 10 % )",
        color: "#2C2C2E",
    },
    {
        text: "Free SMM consultation",
        color: "#1C1C1E",
    },
    {
        text: "5% discount on any service",
        color: "#2C2C2E",
    },
    {
        text: "SMM services discount (  10 % )",
        color: "#1C1C1E",
    },
    {
        text: "Free developer consultation",
        color: "#3A3A3C",
    },
    {
        text: "Website promotion plan",
        color: "#2C2C2E",
    }
];

const wheel = document.querySelector(".deal-wheel");
const spinner = wheel.querySelector(".spinner");
const trigger = wheel.querySelector(".btn-spin");
const ticker = wheel.querySelector(".ticker");

const prizeSlice = 360 / prizes.length;
const prizeOffset = Math.floor(180 / prizes.length);
const spinClass = "is-spinning";
const selectedClass = "selected";
const spinnerStyles = window.getComputedStyle(spinner);


let tickerAnim;
let rotation = 0;
let currentSlice = 0;
let prizeNodes;

const createPrizeNodes = () => {
    prizes.forEach(({ text, color, reaction }, i) => {
        const rotation = ((prizeSlice * i) * -1) - prizeOffset;
        spinner.insertAdjacentHTML(
            "beforeend",
            `<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
        <span class="text">${text}</span>
      </li>`
        );
    });
};


const createConicGradient = () => {
    spinner.setAttribute(
        "style",
        `background: conic-gradient(
      from -90deg,
      ${prizes
            .map(({ color }, i) => `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
            .reverse()
        }
    );`
    );
};

const setupWheel = () => {
    createConicGradient();
    createPrizeNodes();
    prizeNodes = wheel.querySelectorAll(".prize");
};


const spinertia = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const runTickerAnimation = () => {
    const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
    const a = values[0];
    const b = values[1];
    let rad = Math.atan2(b, a);

    if (rad < 0) rad += (2 * Math.PI);

    const angle = Math.round(rad * (180 / Math.PI));
    const slice = Math.floor(angle / prizeSlice);


    if (currentSlice !== slice) {
        ticker.style.animation = "none";
        setTimeout(() => ticker.style.animation = null, 10);
        currentSlice = slice;
    }

    tickerAnim = requestAnimationFrame(runTickerAnimation);
};


const selectPrize = () => {
    const selected = Math.floor(rotation / prizeSlice);
    prizeNodes[selected].classList.add(selectedClass);
};


trigger.addEventListener("click", () => {
    trigger.disabled = true;
    rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
    prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
    wheel.classList.add(spinClass);
    spinner.style.setProperty("--rotate", rotation);
    ticker.style.animation = "none";
    runTickerAnimation();
});

spinner.addEventListener("transitionend", () => {
    cancelAnimationFrame(tickerAnim);
    rotation %= 360;
    selectPrize();
    wheel.classList.remove(spinClass);
    spinner.style.setProperty("--rotate", rotation);
    trigger.disabled = false;
});


setupWheel();