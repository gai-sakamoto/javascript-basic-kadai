// 現在の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();  // 年を取得
const month = today.getMonth() + 1; // 月を取得 (0から始まるため+1)
const day = today.getDate();       // 日を取得

// 文字列として出力
console.log(year + "年" + month + "月" + day + "日");