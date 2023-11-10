// 정부 데이터 포털 : 대구 의료기 판매소
function fetchDatagokr() {
    let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=Dp3nS2VmtNew9BizVd1Yf%2FRI4uyvvAEt04h1ku18LJ6wnggTFwzSezL%2FeoBWRBgar5SvbdDeq89S5QEncSGk0w%3D%3D&currentPage=1&perPage=10&SN=1';
    let request = fetch(url)
        .then((result) => {
            result.json();
        })
        .then((data) => {
            console.log(data);
        })   // 파라메터 => {
        // 문법}
        .catch((errorMeg) => {
            console.log(errorMeg);
        });
}

// 자동차 정보 상세
function fetchCarInforDetail() {
    let url = 'http://127.0.0.1:8080/selectDetail/CI002';
    let request = fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
        })   // 파라메터 => {
        // 문법}
        .catch((errorMeg) => {
            console.log(errorMeg);
        });
}

// fetchCarInforDetail()
// undefined
// fetchs.js:25 {YEAR: '2021', CAR_NAME: '코나', CAR_INFOR_ID: 'CI002', COMPANY_ID: 'C002'}

// 자동차 정보 수정
function fetchCarInforUpdate() {
    // 192.168.0.51:8080/update
    // body - 
    // {
    //     "CAR_NAME": "코나",
    //     "CAR_INFOR_ID": "CAR-02"
    // }
    // headers - 
    // Content-Type : application/json
    let url = 'http://127.0.0.1:8080/update';
    let option = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "CAR_NAME": "요주랩",
            "CAR_INFOR_ID": "CI002"
        })
    }
    let request = fetch(url, option)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
        })   // 파라메터 => {
        // 문법}
        .catch((errorMeg) => {
            console.log(errorMeg);
        });
}

// >fetchCarInforUpdate()
// undefined
// fetchs.js:61 1
// 워크벤치에서 업데이트 되었는지 확인


// selectAll 이용하기

function fetchCarInforselectAll() {
    let keydownObject = document.querySelector("#keydownEnter");

    keydownObject.addEventListener('keydown', (event) => {
        if (event.code == 'Enter') {
            console.log(`key down : ${event.code}`);
            getSelectAllFromREST();
        }
    });
    // 192.168.0.51:8080/selectAll/CI002
    let url = 'http://127.0.0.1:8080/selectAll/CI002';

    let request = fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            let outHtml = ``;
            for (let car_hashmap of data) {
                outHtml += `<tr><td>${car_hashmap.YEAR}</td><td>${car_hashmap.CAR_NAME}</td><td>${car_hashmap.CAR_INFOR_ID}</td><td>${car_hashmap.COMPANY_ID}</td></tr>`;
            }
            outHtml += ``;
            let carTableBody = document.querySelector('#example3');
            carTableBody.innerHTML = outHtml;
        })

        .catch((errorMeg) => {
            console.log(errorMeg);
        });
}

