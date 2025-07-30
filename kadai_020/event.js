// HTML要素の取得
const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンにクリックイベントを追加
buttonElement.addEventListener('click', () => {
    textElement.textContent = 'ボタンをクリックしました';
});