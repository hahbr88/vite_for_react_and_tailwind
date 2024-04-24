export default {};

/** *****************************
 * 데이터를 trim()한 뒤, 빈 값인지 확인
 * 
 * @param {string} input string
 * @return {boolean}
 -------------------------------
 사용예시.
 isEmpty("") -> true
 ******************************* */ 
function isEmpty(input) {
   const data = input.trim();
   let check = (data == "" || data == null || data == undefined)? true : false;

   return check;
}

/** *****************************
 * 데이터의 왼쪽에 len만큼 str 채우기
 * 
 * @param {string} data 데이터
 * @param {number} len 길이
 * @param {string} str 채울 문자
 * @return {string} string
 -------------------------------
 사용예시.
 addStringLeft("123", 5, "*") -> **123
 addStringLeft("123", 1, "*") -> 123
 ******************************* */ 
function addStringLeft(data, len, str) {
   let result = "";

   let gap = len - data.length;
   if(gap > 0) {
      result += str.repeat(gap);
   }
   result += `${data}`

   return result;
}

/** *****************************
 * 데이터의 오른쪽에 len만큼 str 채우기
 * 
 * @param {string} data 데이터
 * @param {number} len 길이
 * @param {string} str 채울 문자
 * @return {string} string
 -------------------------------
 사용예시.
 addStringRight("123", 5, "*") -> 123**
 addStringRight("123", 1, "*") -> 123
 ******************************* */ 
function addStringRight(data, len, str) {
   let result = `${data}`;

   let gap = len - data.length;
   if(gap > 0) {
      result += str.repeat(gap);
   }

   return result;
}