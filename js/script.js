fetch('users.json').then(response => {
    return response.json();
 })
 .then(data => loadPersone(data));
 
 function loadPersone(users) {
     let card = document.querySelector('#person');
     users.forEach(element => {
        let userCard = document.createElement('div');
        card.appendChild(userCard);
        let nickname = document.createElement('p');
        nickname.innerHTML = `${element.username}`;
        let name = document.createElement('h3');
        name.innerHTML = `${element.firstName} ${element.lastName}`;
        let gender = document.createElement('p');
        gender.innerHTML = `${element.gender}`;
        let portrait = document.createElement('img');
        portrait.src = `${element.profileURL}`;
        let email = document.createElement('p');
        email.innerHTML = `${element.email}`;
        let role = document.createElement('h3');
        role.innerHTML = `${element.role}`;

        userCard.appendChild(name);
        userCard.appendChild(nickname);
        userCard.appendChild(gender);
        userCard.appendChild(portrait);
        userCard.appendChild(role);
        userCard.appendChild(email);
     });
 };

