function splitText() {
  const h2 = document.getElementById('animated-subtitle');
  const text = h2.textContent;
  h2.innerHTML = '';
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = 0;
    h2.appendChild(span);
  });
}

function showText() {
  splitText();
  const spans = document.querySelectorAll('#animated-subtitle span');
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.style.opacity = '1';
    }, 1300 + index * 10);
  });
}

document.addEventListener('DOMContentLoaded', showText);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.project, .resume-block, .showcase-item').forEach(section => {
  observer.observe(section);
});
