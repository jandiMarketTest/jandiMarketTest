// header.html 파일을 가져와서 header 요소에 삽입
fetch('public/components/header/')
  .then((response) => response.text())
  .then((html) => {
    const headerElement = document.querySelector('#header');
    headerElement.innerHTML = html;
    return import('public/components/header/header.js');
  })
  .catch((error) => {
    console.error(error);
  });

// footer.html 파일을 가져와서 footer 요소에 삽입
fetch('public/components/footer/')
  .then((response) => response.text())
  .then(async (html) => {
    const footerElement = document.querySelector('#footer');
    footerElement.innerHTML = html;
    return import('public/components/footer/footer.js');
  })
  .catch((error) => {
    console.error(error);
  });
