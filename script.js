const render = (data) => {
  const div = document.querySelector(".munkak");
  data.forEach((item) => {
    div.innerHTML += `
      <div class="munka">
          <img src="${item.photo_url}" alt="preview">
          <div class="adat">
              <h1>${item.title}</h1>
              <hr>
              <p>Témakörök</p>
              <ul id="a${item.id}">
              </ul>
              <a href="${item["repo-link"]}">Github link</a>
              <a href="${item["site-link"]}">Weboldal link</a>
          </div>
      </div>
    `;
    const ul = document.querySelector(`#a${item.id}`);
    item.topics.forEach((topic) => {
      ul.innerHTML += `<li>${topic}</li>`;
    });
  });
};
let data = get_data(
  "https://raw.githubusercontent.com/Flerzy/PortfolioJSON/refs/heads/main/data.json",
  render,
);
