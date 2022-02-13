function displayMsg(type: "success" | "error", resMsg: string) {
  let msg: HTMLParagraphElement;
  msg = document.createElement("p");
  msg.className = "msg";
  document.body.insertBefore(msg, document.body.firstElementChild);
  if (type.toLowerCase() === "success") {
    msg.innerHTML = `&check; &nbsp; ${resMsg}`;
  } else {
    msg.innerHTML = `&#9888; &nbsp;${resMsg}`;
    msg.style.background = "rgb(248, 20, 3)";
  }
  setTimeout(() => {
    document.body.removeChild(msg);
  }, 4000);
}

export default displayMsg;
