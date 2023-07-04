

const car_infor = [
{"YEAR":"2020","CAR_NAME":"소나타","CAR_INFOR_ID":"CI001","COMPANY_ID":"C001"},
{"YEAR":"2021","CAR_NAME":"코나","CAR_INFOR_ID":"CI002","COMPANY_ID":"C002"},
{"YEAR":"2019","CAR_NAME":"SM6","CAR_INFOR_ID":"CI003","COMPANY_ID":"C003"},
{"YEAR":"2022","CAR_NAME":"3 시리즈","CAR_INFOR_ID":"CI004","COMPANY_ID":"C004"},
{"YEAR":"2020","CAR_NAME":"캠리","CAR_INFOR_ID":"CI005","COMPANY_ID":"C005"}
];

let outHtml = ``;
for (let carinfor_hashmap of car_infor){
    outHtml = `${outHtml}<tr><td> ${carinfor_hashmap[`YEAR`]}</td>  <td>${carinfor_hashmap[`CAR_NAME`]}</td>
    <td> ${carinfor_hashmap[`CAR_INFOR_ID`]}</td> <td> ${carinfor_hashmap[`COMPANY_ID`]}</td></tr>`;
}
console.log(outHtml);

let carinfor_source = document.querySelector(`#source`)
carinfor_source.innerHTML = outHtml

// for (let animal_hashmap of animals_obj) {
//     console.log(`name : ${animal_hashmap.name}, species : ${animal_hashmap[`species`]}`);
//     outHtml =  `${outHtml}<div>name : ${animal_hashmap.name}, species : ${animal_hashmap[`species`]}</div>`;
// }