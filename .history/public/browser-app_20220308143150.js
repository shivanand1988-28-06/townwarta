
// const formDOM = document.querySelector('.form');
// const usernameInputDOM = document.querySelector('.username-input');
// const passwordInputDOM = document.querySelector('.password-input');
// const btnDOM = document.querySelector('#data');
// const resultDOM = document.querySelector('.result');

// formDOM.addEventListener('submit',async(e)=>{
//    e.preventDefault();
//     const username = usernameInputDOM.value
//     const password = passwordInputDOM.valuey

//     const newsheading = textDOM.value;

// try{  

// const {data} = await axios.post('/api/v1/news/users',{username,password})
  
// }catch(error){
//         console.log(error);
// }
  

//      }
// );

// btnDOM.addEventListener('click',async(e)=>{
//         const {data} = await axios.get('/api/v1/news/users',(e)=>{console.log({data})}
      
//         );
//         resultDOM.innerHTML = `<h1>${data.username}</h1>`;
// }

// )

const React = require('react');


const formDOM = document.querySelector('.form');
const usernameInputDOM = document.querySelector('.username-input');
const passwordInputDOM = document.querySelector('.password-input');
const formAlertDOM = document.querySelector('.form-alert');
const resultDOM = document.querySelector('.result');
const btnDOM = document.querySelector('#data');
const tokenDOM = document.querySelector('.token');

formDOM.addEventListener('submit', async (e) => {
  formAlertDOM.classList.remove('text-success')
  tokenDOM.classList.remove('text-success')

  e.preventDefault()
  const username = usernameInputDOM.value
  const password = passwordInputDOM.value

  try {
    const { data } = await axios.post('/api/v1/users', { username, password })

    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = data.msg

    formAlertDOM.classList.add('text-success')
    usernameInputDOM.value = ''
    passwordInputDOM.value = ''

    localStorage.setItem('token', data.token)
    resultDOM.innerHTML = ''
    tokenDOM.textContent = 'token present'
    tokenDOM.classList.add('text-success')
  } catch (error) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = error.response.data.msg
    localStorage.removeItem('token')
    resultDOM.innerHTML = ''
    tokenDOM.textContent = 'no token present'
    tokenDOM.classList.remove('text-success')
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
  }, 2000)
})

btnDOM.addEventListener('click', async () => {
  const token = localStorage.getItem('token')
  try {
    const { data } = await axios.get('/api/v1/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    resultDOM.innerHTML = `<h5>${data.msg}</h5><p>${data.allusers[data.allusers.length-1].password}</p>`
    console.log(data.allusers.length);
    data.secret
  } catch (error) {
    localStorage.removeItem('token')
    resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`
  }
})

const checkToken = () => {
  tokenDOM.classList.remove('text-success')

  const token = localStorage.getItem('token')
  if (token) {
    tokenDOM.textContent = 'token present'
    tokenDOM.classList.add('text-success')
  }
}
checkToken();

function Newform (){
 const name = "radhe";
    return( 
    <>
       <h1> hiiiii {name}</h1>
    </>
    );
  
  };
 const element = <Newform/> 

  ReactDOM.render(Newform,document.getElementById("root"));


