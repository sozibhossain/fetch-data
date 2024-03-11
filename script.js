function loadusers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}
loadusers();

const displayUsers = (users) => {
  const colUser = document.getElementById("users");
  users.forEach((user) => {
    const div = document.createElement("div");

    div.innerHTML = `
        <h3>${user.name}</h3>
    `;
    colUser.appendChild(div);
  });
};
