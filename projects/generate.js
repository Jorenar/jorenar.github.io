let svgIcons = [
  "C", "C++", "CMake", "COBOL",
  "CSS", "HTML", "Less", "JS", "PHP",
  "Python", "Shell", "SQLite", "Vim",
];

let imgIcons = {
  "Jekyll": "https://jekyllrb.com/img/logo-2x.png",
};

let main = document.querySelector("main");

Object.keys(projects).forEach((type) => {
  main.appendChild(document.createElement("h1")).innerText = type;

  const { [type]: proj } = projects;

  Object.keys(proj).forEach((n) => {

    const { [n]: { url, desc, tech, long } } = proj;
    let summary = document.createElement("summary");

    let name = document.createElement(url ? "a" : "span");
    name.className = "name";
    name.innerText = n;
    name.href = url;
    summary.appendChild(name);

    if (tech) {
      let techDiv = document.createElement("div");
      techDiv.className = "tech";

      tech.forEach((t) => {
        if (svgIcons.includes(t)) {
          techDiv.innerHTML += `<svg><use href="projects/icons.svg#${t}" /></svg>`;
        } else if (imgIcons.hasOwnProperty(t)) {
          let img = document.createElement("img");
          ({ [t]: img.src } = imgIcons);
          img.title = t;
          techDiv.appendChild(img);
        } else {
          let span = document.createElement("span");
          span.innerText = t;
          techDiv.appendChild(span);
        }
      });
      summary.appendChild(techDiv);
    }

    if (desc) {
      let descDiv = document.createElement("div");
      descDiv.className = "desc";
      descDiv.innerHTML = desc;
      summary.appendChild(descDiv);
    }

    let details = document.createElement("details");
    if (long) {
      details.innerHTML = long;
    }

    main.appendChild(details).appendChild(summary);

  });

});
