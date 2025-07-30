// HTML要素の取得
const text = document.getElementById('text');
const btn = document.getElementById('btn');

// ボタンにクリックイベントを追加
btn.addEventListener('click', () => {
    // 2秒後に実行
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});