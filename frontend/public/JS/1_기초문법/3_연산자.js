/**
 * 
 */

 //1. 산술연산자
 console.log('더하기 : '+ 10+3) // 103
 console.log('더하기 : ' + (10+3)) // 13
 console.log('빼기 : ' + (10-3)) //7
 console.log('곱하기 : ' + (10*3)) // 30
 console.log('나누기 : ' + (10/3)) // 3.3333333~
 console.log('나머지 : ' + (10%3)) // 30
 
 
//  -문제1 : prompt 함수 로 국어, 영어, 수학 점수를 입력받아 각 변수에 저장하고 총점 출력, 평균 출력
//  -문제2 : prompt 함수 로 반지름 입력받아서 원넓이[ 반지름*반지름*3.14 ] 출력
//  -문제3 : prompt 함수 로 두 실수를 입력받아서 앞실수의 값이 뒤실수의 값의 몇%인지 출력


// 문제1
	// 1. 세 과목 입력 받기
let 국어 = Number(prompt('국어 점수:')) // 입력후에 변수에 저장 안하면 사라지니까 변수에 저장/대입
let 영어 = Number(prompt('국어 점수:')) // Number('300') => 300
let 수학 = Number(prompt('수학 점수:')) // Number('숫자') => 숫자
	// 2. 세 과목 총점 연산
let 총점 = 국어+영어+수학
let 평균 = 총점 / 3
	// 3. 연산 결과 출력
console.log('총점 :' + 총점)
console.log('총점 :' + 평균)

// 문제2
	// 1. 반지름 입력받기
let 반지름 = prompt('반지름 : ')

	// 2. 연산
let 원넓이 = 반지름 * 반지름 * 3.14 // '10'

	// 3. 연산 결과 출력
console.log('원넓이 : ' + 원넓이)

//문자 연산 예시
console.log(10*3)
console.log('10'*3)// ????