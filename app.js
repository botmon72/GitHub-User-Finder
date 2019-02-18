const inputUser = document.querySelector('#searchUser');

const github = new Github;
const ui = new UI;

inputUser.addEventListener('keyup', (e)=> {
  const text = e.target.value;

  //validate if form is empty
  if(text !== ''){
    github.getUserProfile(text)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          ui.showAlert(`User not found!`, 'alert-danger');
        }else{
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  }else{
    ui.clearProfile();
  }
})