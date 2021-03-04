
function generateCard(data){ 
`<div class="col-4" id="cardcols">
     <div class="card" style="width: 18rem;">
         <div class="card-body">
             <h5 class="card-title">${data.name}</h5>
             <h4 class="card-subtitle mb-2">${data.job}</h4>
             <div class="card-body">ID:${data.ID}</div>
             <div class="card-body">Email:${data.email}</div>
             <div class="card-body">Github:${data.github}</div>
         </div>
     </div>
 </div>`;
}

module.exports = generateCard;
// function test(){
//     console.log("i work")
// }