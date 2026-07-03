let content = document.createElement("p");
content.textContent = "Hey I'm red!";
content.style.color = "red";
document.body.appendChild(content);

content = document.createElement("h3");
content.textContent = "I'm a blue h3!";
content.style.color = "blue";
document.body.appendChild(content);

content = document.body.appendChild(document.createElement("div"));
content.setAttribute("style", "border: 2px solid black; background-color: pink");

let child_content = document.createElement("h1");
child_content.textContent = "I'm in a div";
content.appendChild(child_content);


child_content = document.createElement("p");
child_content.textContent = "ME TOO!";
content.appendChild(child_content);


async function loop(delay = 1000){
    const cookie = document.getElementById("bigCookie");
    const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
    });

    return setInterval(() => {
        cookie.dispatchEvent(clickEvent);
    }, delay);
}

const id = loop(10);