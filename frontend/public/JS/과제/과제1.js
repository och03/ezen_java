/**
   [ JS 연산자 과제1 ]
   문제11 : 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9]
   문제12 : [ 가위바위보 게임 ] 
   - 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
   - 승리자 판단과 무승부 경우의수를 출력하시오.
   [입력]
      플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
      플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
   [경우의수 판단]
      플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
      플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
      비겼을경우 '무승부' 출력
 */



 
 //문제11 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9]
let 정수1 = Number(prompt('정수1 :'));
let 정수2 = Number(prompt('정수2 :'));
let 정수3 = Number(prompt('정수3 :'));

let 최대값 = 정수1
최대값 = 최대값 < 정수2 ? 정수2 : 최대값
최대값 = 최대값 < 정수3 ? 정수3 : 최대값

let 최소값 = 정수1
최소값 = 최소값 < 정수2 ? 최소값 : 정수2
최소값 = 최소값 < 정수3 ? 최소값 : 정수3

let 중간값 = (정수1 + 정수2 + 정수3)-(최대값 + 최소값)

console.log('오름차순 정렬' + 최대값, 중간값, 최소값)
 
 
 //문제12 가위바위보 게임
 
 
let 플레이어1 = Number(prompt('플레이어1 가위0 바위1 보2'));
let 플레이어2 = Number(prompt('플레이어2 가위0 바위1 보2'));


let 승리조건
승리조건 = 플레이어1 == 플레이어2 ? '무승부' :
		플레이어1 == 0 && 플레이어2 == 1 ? '플레이어2 승리' :
		플레이어1 == 1 && 플레이어2 == 2 ? '플레이어2 승리' :
		플레이어1 == 2 && 플레이어2 == 0 ? '플레이어2 승리' : '플레이어1 승리'
		
console.log('누가 이겼을까? : ' + 승리조건);