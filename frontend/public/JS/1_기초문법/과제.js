


let 국어 = Number(prompt('국어점수 : '))
let 영어 = Number(prompt('국어점수 : '))
let 수학 = Number(prompt('국어점수 : '))
let 총점 = 국어+영어+수학
let 평균 = 총점/3
console.log("총점 : " + 총점)
console.log("평균 : " + 평균)

let 반지름 = prompt('반지름 : ')
let 원넓이 = 반지름 * 반지름 * 3.14
console.log('원넓이 ' + 원넓이)

let 실수1 = prompt('실수1 :')
let 실수2 = prompt('실수2 :')
let 백분율 = (실수1/실수2)*100
console.log('두 실수의 백분율 :' + 백분율 + '%')

let 정수1 = prompt('정수1 :')
console.log('홀수 여부 :' + (정수1%2 == 1 ))

let 정수2 = prompt('정수2 : ')
console.log('7의 배수 여부 : ' + (정수2%7 == 0 ))

let 금액 = prompt('받은 금액 :')
let 십만원권 = parseInt(금액/1000000)
console.log('십만원권 : ' + 십만원권 + '장' )
let 만원권 = parseInt((금액-(십만원*100000)/10000))
console.log('만원권 : ' + 만원권 + '장')

let 아이디 =prompt('아이디 :')
let 비밀번호 = prompt('비밀번호 : ')
console.log('로그인상태 : ' + (아이디 == 'admin' && 비밀번호 =='1234') )

let 정수3 = prompt('정수3 :')
console.log('결과 : ' + (정수3%2 == 1 && 정수3%7 == 0))

let value1 = prompt('정수1 : ')
let value2 = prompt('정수2 : ')
console.log('더 큰 수 +' (value1>value2 ? value1 : value2))

let value3 = prompt('정수3: ')
let value4 = prompt('정수4: ')
let value5 = prompt('정수5: ')
let max = value3
max = max < value4 ? value5 : max
max = max < value5 ? value4 : max
console.log('가장 큰 수 : ' + max)

