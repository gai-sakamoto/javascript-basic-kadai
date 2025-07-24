// 変数の定義
const weight = 68; // 体重(kg)
const height = 1.7; // 身長(m)

// BMIの計算: 体重(kg) ÷ (身長(m) × 身長(m))
const bmi = weight / (height * height);

// 結果の表示
console.log("BMI：" + bmi);