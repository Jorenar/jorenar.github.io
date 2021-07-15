let svgIcons = [
  "C", "C++", "CMake", "COBOL",
  "CSS", "HTML", "Less", "JS", "PHP",
  "Python", "Shell", "SQLite", "Vim"
];

let imgIcons = {
  "Jekyll": "https://jekyllrb.com/img/logo-2x.png",
};

let main = document.querySelector("main");

Object.keys(projects).forEach((type) => {
  let h1 = document.createElement("h1");
  h1.innerText = type;
  main.appendChild(h1);

  Object.keys(projects[type]).forEach((n) => {
    let proj = projects[type][n];

    let details = document.createElement("details");
    if (proj.hasOwnProperty("long")) {
      details.innerHTML = proj.long;
    }


    let name = document.createElement("a");
    let desc = document.createElement("div");
    let tech = document.createElement("div");

    name.className = "name";
    desc.className = "desc";
    tech.className = "tech";

    name.innerText = n;
    if (proj.hasOwnProperty("desc")) {
      desc.innerHTML = proj.desc;
    }

    name.href = proj.url;

    if (proj.hasOwnProperty("tech")) {
      proj.tech.forEach((t) => {
        if (svgIcons.indexOf(t) !== -1) {
          tech.innerHTML += `<svg><use href="projects/icons.svg#${t}" /></svg>`;
        } else if (imgIcons.hasOwnProperty(t)) {
          let img = document.createElement("img");
          img.src = imgIcons[t];
          img.title = t;
          tech.appendChild(img);
        } else {
          let span = document.createElement("span");
          span.innerText = t;
          tech.appendChild(span);
        }
      });
    }

    let summary = document.createElement("summary");
    summary.append(name, desc, tech);

    details.appendChild(summary);
    main.appendChild(details);

  });

});
