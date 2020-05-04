const data = [
  {
    name: 'Amrit Anand',
    age:22,
    gender: 'male',
    lookingfor: 'female',
    location: 'Bihar',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Divya',
    age:22,
    gender: 'Female',
    lookingfor: 'Male',
    location: 'Delhi',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lucknow',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Bengal',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  }
];

let profiles = profileIterator(data);

// Call first profile
// nextProfile();
let currentProfile = profiles.next().value;
document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;

// Next Event
document.getElementById('next').addEventListener('click',(e)=>{
  nextProfile(e)
});

// Next Profile Display
function nextProfile(e) {
  e.preventDefault();
  let currentProfile = profiles.next().value;

  if(currentProfile === undefined) {
    profiles = profileIterator(data);
    currentProfile = profiles.next().value;
  }
  
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}