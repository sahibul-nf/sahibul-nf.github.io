const linkin = document.getElementById("link");

const data = [
    ''
];

    const b = linkin.innerHTML = `<a id="link"
href="${link}"
target="_blank"
rel="noopener noreferrer">
<i class="bx bxl-${icon}-alt bx-border bx-${animation}-hover"></i>
<span>
  ${name}
</span></a>`;

console.log(b);