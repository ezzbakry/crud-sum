// function hello(){
//     alert("the employee is added");
// }


let arr=[{
    
    name:"Ahmed",
    email:"ahmed22@gmail.com",
    firstphone:"018637563829",
    secondphone:"08826743718",
    imgsrc:"pic-1.png"
},{
    
    name:"Mohamed",
    email:"mo22@gmail.com",
    firstphone:"0157288362",
    secondphone:"01736837683",
    imgsrc:"pic-3.png"
},{
    
    name:"Tarek",
    email:"tarek22826@gmail.com",
    firstphone:"010077393863",
    secondphone:"2359976301",
    imgsrc:"pic-3.png"
},{
    
    name:"Zyad",
    email:"Zyad6299363@gmail.com",
    firstphone:"0100992866287",
    secondphone:"6389203672",
    imgsrc:"pic-1.png"
}]
// localStorage.clear()

// localStorage.setItem("employees",JSON.stringify(arr));
if (localStorage.getItem("employees")!=null&&arr.length!=0){// ليه داتا زبون قديم
    arr=JSON.parse(localStorage.getItem("employees"));
    display();
}

// if(arr.length!=0){
//     display();
// }

function display(){
    var container=``;
    for (var i=0;i<arr.length;i++){
        container+=` <tr>
        <td>${i}</td>
        <td>`+arr[i].name+`</td>
        <td>${arr[i].email}</td>
        <td>${arr[i].firstphone}</td>
        <td>${arr[i].secondphone}</td>
        <td><img src="${arr[i].imgsrc}" border=2 height=80 width=80></img></td>
        <td><button class="btn btn-primary" onclick="updateemployee(${i})" >update</button></td>
        <td><button class="btn btn-primary" onclick="deleteemployee(${i})">delete</button></td>
      </tr>`
    }
    document.getElementById("body").innerHTML=container;

}



var serachBtn=document.getElementById("searchbtn");


// serachBtn.addEventListener("click",(searchInput)=>{
//     var container=``;
//     // var searchInput=document.getElementById("searchh").value;
//     // var serachBtn=document.getElementById("search-btn");
//     for (var i=0;i<arr.length;i++){
//         if(arr[i].name.toLowerCase().includes(searchInput.toLowerCase())==true){

//             container+=` <tr>
//             <td>${i}</td>
//             <td>`+arr[i].name+`</td>
//             <td>${arr[i].email}</td>
//             <td>${arr[i].firstphone}</td>
//             <td>${arr[i].secondphone}</td>
//             <td><img src=${arr[i].imgsrc} border=2 height=80 width=80></img></td>
//             <td><button onclick="updateproduct(${i})" >update</button></td>
//             <td><button  onclick="deleteproduct(${i})">delete</button></td>
//             </tr>`
        

//         }
//     }
//     document.getElementById("body").innerHTML=container;

// })


function deleteemployee(index){
    arr.splice(index,1)
    localStorage.setItem("employees",JSON.stringify(arr));
    display();

}
var id=document.getElementById("id")
var Name=document.getElementById("name")
var email=document.getElementById("email")
var first=document.getElementById("first-phone")
var second=document.getElementById("second-phone")
var IMG1=document.getElementById("image")

function updateemployee(index){

    id.value=index;
    Name.value=arr[index].name;
    email.value=arr[index].email;
    first.value=arr[index].firstphone;
    second.value=arr[index].secondphone;
    // IMG1.files[0].name=arr[index].imgsrc;
    deleteemployee(index);
}


function search(term){
    var container=``;
    // var searchInput=document.getElementById("searchh").value;
    // var serachBtn=document.getElementById("search-btn");
    for (var i=0;i<arr.length;i++){
        if(arr[i].name.toLowerCase().includes(term.toLowerCase())==true){

            container+=` <tr>
            <td>${i}</td>
            <td>`+arr[i].name+`</td>
            <td>${arr[i].email}</td>
            <td>${arr[i].firstphone}</td>
            <td>${arr[i].secondphone}</td>
            <td><img src="${arr[i].imgsrc}" border=2 height=80 width=80></img></td>
            <td><button class="btn btn-primary" onclick="updateemployee(${i})" >update</button></td>
            <td><button class="btn btn-primary" onclick="deleteemployee(${i})">delete</button></td>
            </tr>`
        

        }
    }
    document.getElementById("body").innerHTML=container;
}

serachBtn.addEventListener("click",function(){
    var searchInput=document.querySelector("#searchhtxt");
    var txt=searchInput.value;
    search(txt)
    // if(txt==""){
    //     display();
    // }
    
    
    // console.log(e.target)
});

var searchInput=document.querySelector("#searchhtxt");
searchInput.addEventListener("mouseleave",()=>{
    
    var txt=searchInput.value;
    if(txt===""){
        display();
    }
})

function addemployee(){
    var newemp={
        name:Name.value,
        email:email.value,
        firstphone:first.value,
        secondphone:second.value,
        imgsrc:IMG1.files[0].name
    }
    arr.push(newemp);
    localStorage.setItem("employees",JSON.stringify(arr));
    display();

}
var add=document.getElementById("add")
add.addEventListener("click",()=>{
    if(Name.value!=""&&email.value!=""&&first.value!=""&&second.value!=""){
        addemployee();
    }
    else{
        alert("some fields are required")
    }
    
})
// console.log(txt);
