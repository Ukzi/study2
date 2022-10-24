const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submitButton = document.querySelector('#submit_button');

submitButton.addEventListener('click', function(){
    
    //아이디: 공백여부 / 중복여부
    //비밀번호: 공백여부 / 특수문자, 문자, 숫자 포함 형태의 8~15자리를 입력하세요.
    //비밀번호 확인: 공백여부 / 비밀번호와 같은지 안같은지 확인
    //이름: 공백여부
    //메일주소: 공백여부 / 메일 형식이 맞는지
    //연락처(필수X): 연락처 형식에 맞는지 (010-1111-2222)
    
})

function idConfirm() {
    if (!userid.value) {}
}   
function pwd1Confirm() {}   
function fullnameConfirm() {}   
function emailConfirm() {}   
function telConfirm() {}   
