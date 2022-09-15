const data=[
    {
        name: 'Abhishek Tripathi',
        age:18,
        city:'kolkata',
        language:'pyhton',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Ayush',
        age:48,
        city:'PAnki',
        language:'yahoo',
        framework:'flutter',
        image:'https://randomuser.me/api/portraits/men/21.jpg'
    },
    {
        name: 'Subham Sharma',
        age:29,
        city:'Banglore',
        language:'java',
        framework:'angular',
        image:'https://randomuser.me/api/portraits/men/34.jpg'
    },
    {
        name: 'ashiuariya ray',
        age: 45,
        city:'mumbai',
        language:'c',
        framework:'flask',
        image:'https://randomuser.me/api/portraits/men/42.jpg'
    }
]

function cviterator(profile){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profile.length ? 
            {value: profile[nextIndex++], done: false}:
            {done: true} 
        }
    };
}
const candidates = cviterator(data);
nextcv();
// button listener for next button 
const next = document.getElementById('next');
next.addEventListener('click',nextcv);



function nextcv(){
    const Currentcandidate = candidates.next().value;
    if(Currentcandidate != undefined){
    let image = document.getElementById('image');
    let profile=document.getElementById('profile'); 
    image.innerHTML = `<img src='${Currentcandidate.image}'>`;

    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">${Currentcandidate.name}</li>
    <li class="list-group-item">${Currentcandidate.age }years old</li>
    <li class="list-group-item">Lives in${Currentcandidate.city}</li>
    <li class="list-group-item"> primarily works on ${Currentcandidate.language}</li>
    <li class="list-group-item">${Currentcandidate.framework}</li>
  </ul>`
    }
    else{
        alert('End of candidate Applications');
        window.location.reload();
    } 
}
