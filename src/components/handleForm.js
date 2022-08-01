const myForm = document.getElementById('commentsForm');

const handleSubmit = (e) => {
  e.preventDefault();
  let data = [];
  const formData = new FormData(myForm);
  for (const [, value] of formData) {
    data.push(value);
  }
  const [username, email, comment] = data;
  console.log(username, email, comment);
};

myForm.addEventListener('submit', handleSubmit);
