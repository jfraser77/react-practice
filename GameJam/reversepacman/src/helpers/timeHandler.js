const currentTime = new Date().toDateString();

function handleClick() {
  console.log(currentTime);
  alert("Button was clicked!");
}

export default handleClick;
