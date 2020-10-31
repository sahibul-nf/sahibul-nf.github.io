const user = document.querySelector(".con-user");
const menu = document.querySelector(".con-menu");

function handleClick(evt, name) {
    const items = document.querySelectorAll(".con-menu button");
    const el = evt.target;
    items.forEach((item) => {
        item.classList.remove("active");
    });
    el.classList.add("active");
    const elScroll = document.querySelector(`.${name}`);
    contents.scrollTo(elScroll.offsetLeft, 0);
}

