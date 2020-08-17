import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios
//   .get(`https://api.github.com/users/HeathDanni`)
//   .then(res => {
//     console.log(res);

//       card.append(cardMaker(url));
// })
//   .catch(err => {
//     console.log(err);
//   });


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['HeathDanni', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
 function cardMaker(obj) {
   const cardDiv = document.createElement('div');
   const cardImage = document.createElement('img');
   const cardInfo = document.createElement('div');
   const cardName = document.createElement('h3');
   const userName = document.createElement('p')
   const userLocation = document.createElement('p');
   const userProfile = document.createElement('p');
   const cardLink = document.createElement('a');
   const followers = document.createElement('p');
   const following = document.createElement('p');
   const userBio = document.createElement('p');

   cardDiv.classList.add('card');
   cardInfo.classList.add('card-info');
   cardName.classList.add('name');
   userName.classList.add('username');

   cardImage.src = obj.data.avatar_url;
   cardName.textContent = obj.data.name;
   userName.textContent = obj.data.login;
   userLocation.textContent = obj.data.location;
   userProfile.textContent = `Profile: `;
   cardLink.textContent = obj.config;
   followers.textContent = `Followers : ${obj.data.followers}`;
   following.textContent = `Following: ${obj.data.following}`;
   userBio.textContent = `Bio: ${obj.data.bio}`;

   cardDiv.appendChild(cardImage);
   cardDiv.appendChild(cardInfo);
   cardInfo.appendChild(cardName);
   cardInfo.appendChild(cardName);
   cardInfo.appendChild(userName);
   cardInfo.appendChild(userLocation);
   cardInfo.appendChild(userProfile);
   userProfile.appendChild(cardLink);
   cardInfo.appendChild(followers);
   cardInfo.appendChild(following);
   cardInfo.appendChild(userBio);

   console.log(cardDiv);

   return cardDiv;
 }

const cardItem = document.querySelector('.cards');

for (let i = 0; i < followersArray.length; i++) {
axios
  .get(`https://api.github.com/users/${followersArray[i]}`)
  .then(res => {
    console.log(res);
    let resCard = cardMaker(res);
    console.log(resCard);
    cardItem.append(resCard);
})
  .catch(err => {
    console.log(err);
  });
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
