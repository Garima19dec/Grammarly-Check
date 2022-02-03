// // if(window.File){
//     function showfile(){
//       // let view = document.getElementById('filebtn');
//       let file = fileInput.files[0];
  
//       let reader = new FileReader();
  
//       reader.readAsText(file);
//       reader.onload=function(){
//         document.getElementById("text").textContent=reader.result;
//       }
//     }
//   // }

// // JQwyQANcjLHu90Av


// //   fetch(api).then(function(response){
// //     let data=response.json();
// //     return data;
    
// // }).then(function(data){
// //     for(let i of data.response.errors){
// //         badwords.push(i.bad);
// //         improvement[i.bad]=i.better;
// //         improvement[i.bad].push(i.bad);
// //         description[i.bad]=i.description.en;
// //         errorType[i.bad]=i.type;                        
// //     }
// //     document.getElementById("errorNum").textContent=badwords.length;
// //     return badwords;

// // })





if(window.File){
  function showfile(){
    // let view = document.getElementById('filebtn');
    let file = fileinput.files[0];

    let reader = new FileReader();

    reader.readAsText(file);
    reader.onload=function(){
      document.getElementById("text").textContent=reader.result;
    }
  }
}

  function checkfile(){
    lines=document.getElementById("text").textContent;
    let api = `https://api.textgears.com/grammar?key=JQwyQANcjLHu90Av&text=${lines}&language=en-GB`;

     fetch(api).then(function(response){
      let data=response.json();
      return data;
    
    })
  //   .then(function(data){
  //     for(let i of data.response.errors){
  //       badwords.push(i.bad);
  //       improvement[i.bad]=i.better;
  //       improvement[i.bad].push(i.bad);
  //       description[i.bad]=i.description.en;
  //       errorType[i.bad]=i.type;                        
  //     }
  //     document.getElementById("errorNum").textContent=badwords.length;
  //     return badwords;

  //  })

  }




