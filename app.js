const correctAnswer = ['B','A','B','A','A','A','B','B','A','A'];
const form =document.querySelector('.quiz-form');
const result = document.querySelector('.result');
let emoji = result.querySelector('h1');
form.addEventListener('submit', e=>
{
  e.preventDefault();

  let score =0;
  const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];

  // check answer
  userAnswer.forEach((answer, index) => {
    if(answer === correctAnswer[index])
    score += 10;
  });

  // show result on page
  scrollTo(0,0);

  result.classList.remove('d-none');
  emoji.textContent =``;
  let output = 0;

  setTimeout(() => {
    const timer = setInterval(() => {
      result.querySelector('span').textContent = `${output}%`;
      if(output === score)
      {
        if(score >= 50)
          {
          emoji.classList.remove('text-danger');
          emoji.classList.add('text-primary');
          emoji.textContent =`:)`;
          }
        else
          {
          emoji.textContent =`:( Sharam karo bhagwan se daro salo`;
          emoji.classList.remove('text-primary');
          emoji.classList.add('text-danger');

          }

        clearInterval(timer);
      }
      else
      {
        output++;
      }
    },10);
  },1000);


});

// let i =0;
// const timer = setInterval(() => {
//   i++;
//   if(i === 5)
//   {
//     clearInterval(timer);
//   }
// },1000);

// window object (global object)

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// window.console.log(document.querySelector('form'));

// alert('hello');
// window.alert('hello');

// setTimeout(() => {
//   alert('hello');
// },3000);