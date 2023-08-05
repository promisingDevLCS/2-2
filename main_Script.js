/* MyShop.html에서 사용될 Script 정의 */

function open_game() {
    window.open('game.html', '게임',
        'width=600px, height=400px,top=50px, left=50px');
}

/* game.html에서 사용될 Script 정의 */

/* 드래그 & 드롭 */
function dragStart(e) {
    // setData를 통해 어떤 형식의 어떤 데이터가 이동되는지를 설정
    // 아래에선 Text 형식의 id 데이터(Drag 되는 요소)가 이동
    e.dataTransfer.setData("Text", e.target.id);
}
function allowDrop(e) {
    e.preventDefault();
}
function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(data));
}

/* 카드 옮기기 게임을 통한 할인 금액 정하기 */
// 시도 횟수 tries 를 기준, 사용자가 한번만 할인 쿠폰을 받을 수 있게 함
localStorage.setItem("tries", '0');     // 웹 스토리지 사용
var discount = 0; var tries = parseInt(localStorage.getItem("tries"));
function check_card() {
    tries = parseInt(localStorage.getItem("tries"));
    if (tries == 0) {
        discount = Math.floor((Math.random() * 10) + 1);    // 1~10
        discount *= 1000;   // 할인 범위는 1,000 ~ 10,000 까지
        alert(discount + "원 할인 쿠폰에 당첨되었습니다!");
        localStorage.setItem("tries", '1');
        alert(document.getElementById('Show_discount').textContent);
        document.getElementById('Show_discount').textContent = discount;
    }
    else {
        alert('이미 ' + discount + '원 할인 쿠폰에 당첨되었습니다!');
    }
}

/* 카드 게임 결과를 MyShop.html에 저장 */
function set_Show_discount(e) {
    alert(document.getElementById('Show_discount').innerHTML);
    document.getElementById('Show_discount').textContent = e;
}