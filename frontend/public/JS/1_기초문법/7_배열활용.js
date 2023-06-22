/*
	 변수
	 	지역변수 : 지역{}에 태어났으면 지역 밖으로 못나감
	 		안산 태어났으면 안산 밖으로 못나감 / 대신 안으로 단원구 상록구는 이동 가능
	 		-{} 안에서 선언된 변수는 {} 밖에서 사용 불가능 / 안으로는 가능
	 	전역변수 : 지역{}밖에서 태어났으면 자유롭게 이동 가능
	 		대한민국 태어났으면 안산{} 성남{} 이동 가능
	 		-{} 밖에서 선언된 변수는 {} 안으로 이동 가능
	 		
	 문자열내 변수 포함하는 방법 [JS안에서 HTML 작성 시 문자처리]
	 	1. 작은따옴표(연결연산자) = '<td>'+변수명/배열명+'</td>'
		2. 백틱( `${}` )		= `<TD>${변수명/배열명}</td>`
*/


console.log('js실행')


// 4. 방문록 배열
	let 방문록배열 = []; // 1. 여럿 함수{ }에서 사용하기 때문에 함수 밖에서 선언
	let 방문록배열2 = []; // 작성자 배열

// 1. 이벤트 함수 만들기 
function 등록( ){ // s end 
	// let 방문록배열 = []; // 2. 
	// 1. 함수가 잘 작동하는지 체크~
	console.log(' 등록함수 실행 ');	
	// 2. <input> 태그 호출 
	let contentInput = document.querySelector('.content')
	console.log( contentInput ); // 호출 잘 되었는지 체크~~
	
	// 3. 입력받은 값 호출 
	let value = contentInput.value;
	console.log( value );		// 입력값 들어왔는지 체크~~

	// 4. 배열 등록
	방문록배열.push( value );
	console.log( 방문록배열 );		

	방문록배열2.push( document.querySelector('.writer').value )


	// 5. HTML에 배열 출력
		// 1. <table> 호출 
	let contentTable = document.querySelector('.contentTable')
	console.log( contentTable )

	// 1. 반복문 이용한 출력 
	let tableHTML = `<tr><th>내용</th><th>작성자</th></tr>`
	for( let i = 0 ; i < 방문록배열.length ; i++ ){ // for s
		tableHTML += 	`<tr>
							<td>${방문록배열[i]}</td>
							<td>${방문록배열2[i]}</td>
						</tr>`
	} // for end 

	// 2. 마지막인덱스[최근 등록된 요소] = 배열.length-1 
	/*let tableHTML = contentTable.innerHTML
	tableHTML += 	`<tr><td>${방문록배열[ 방문록배열.length-1 ]}</td><td></td></tr>`*/

	console.log( tableHTML )	
		// 4. 추가된 HTML 내용 ( = ) 대입 
	contentTable.innerHTML = tableHTML

} // f end 