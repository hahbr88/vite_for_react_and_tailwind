import stringUtil from './stringUtil'
export default {};

/** *****************************
 * 오늘 날짜를 객체로 받음
 * 
 * @return {object} string object : {year, month, date, day}
 -------------------------------
 사용예시.
 getSysdate().year -> 2024
 getSysdate().month -> 04
 getSysdate().date -> 23
 getSysdate().day -> 2 (1:월요일)
 ******************************* */ 
function getSysdateObject() {
   let today = new Date();
   let year  = String(today.getFullYear());
   let month = stringUtil.addStringLeft(String(today.getMonth() + 1), 2, "0");
   let date  = stringUtil.addStringLeft(String(today.getDate()     ), 2, "0");
   let day   = String(today.getDay());

   return ({year, month, date, day});
}

/** *****************************
 * 입력한 날짜를 객체로 받음
 * 
 * @param {string} input 날짜(YYYYMMDD)
 * @return {object} Number object : {year, month, date}
 -------------------------------
 사용예시.
 getDate("19991231").year -> 1999
 ******************************* */ 
 function getDateObject(input) {
   const cDate = input;
   let year  = cDate.slice(0, 4);
   let month = cDate.slice(4, 6);
   let date  = cDate.slice(6, 8);

   return ({year, month, date});
}

/** *****************************
 * 입력한 날짜를 구분자에 맞는 형식으로 받음
 * 
 * @param {string} iDate 날짜
 * @param {string} delimiter 구분자
 * @return {string}
  -------------------------------
 사용예시.
 getFormattedDate("19991231", "/") -> 1999-12-31
 ******************************* */ 
function getFormattedDate(iDate, delimiter) {
   let {year, month, date} = getDateObject(iDate);
   let result = `${year}${delimiter}${month}${delimiter}${date}`;
   
   return (result);
}

/** *****************************
 * 연도 기준 나이를 구함
 * 
 * @param {string} birthDate 생년월일
 * @param {string} stdDate 기준날짜
 * @return {string}
  -------------------------------
 사용예시.
 calcAgeYear("20001231", "20240423") -> 25
 ******************************* */ 
function calcAgeYear(birthDate, stdDate) {
   let {year: bYear} = getDateObject(birthDate);
   let {year: sYear} = getDateObject(stdDate);

   return Number(sYear) - Number(bYear) + 1;
}

/** *****************************
 * 만 나이를 구함
 * 
 * @param {string} birthDate 생년월일
 * @param {string} stdDate 기준날짜
 * @return {string} string
  -------------------------------
 사용예시.
 calcAgeYear("20001231", "20240423") -> 23
 ******************************* */ 
 function calcAgeBirth(birthDate, stdDate) {
   let {year: bYear, month: bMonth, date: bDate} = getDateObject(birthDate);
   let {year: sYear, month: sMonth, date: sDate} = getDateObject(stdDate);

   let bYearNum = Number(bYear);
   let sYearNum = Number(sYear);

   let age = 0;
   if(`${bMonth}${bDate}` > `${sMonth}${sDate}`) {  // 생일 전
      age = sYearNum - bYearNum - 1;
   }
   else if(`${bMonth}${bDate}` == `${sMonth}${sDate}`) {   // 생일 당일
      age = sYearNum - bYearNum;
   }
   else if(`${bMonth}${bDate}` < `${sMonth}${sDate}`) { // 생일 후
      age = sYearNum - bYearNum;
   }

   return age;
 }