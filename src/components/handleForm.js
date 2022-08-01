const myForm = document.getElementById('commentsForm');

const handleSubmit = (e) => {
  e.preventDefault();
  let data = [];
  const formData = new FormData(myForm);
  for (const [, value] of formData) {
    data.push(value);
  }
  const [username, email, comment] = data;
  const id = Math.floor(Math.random() * 10000);
  console.log(username, email, comment);
  const commentObj = {
    id,
    username,
    email,
    comment,
  };
  window.localStorage.setItem(`user${id}`, JSON.stringify(commentObj));
  // console.log(JSON.parse(localStorage.getItem(`user${id}`)));

  // 2883
  // Obtención de todos los storage:
  const archive = [],
    keys = Object.keys(localStorage);
  let i = keys.length;

  while (i--) {
    // archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
    archive.push(JSON.parse(localStorage.getItem(keys[i])));
  }

  console.log(archive);
};

myForm.addEventListener('submit', handleSubmit);
