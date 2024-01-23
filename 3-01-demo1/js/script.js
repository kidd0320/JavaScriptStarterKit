const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// カラーピッカーを操作した時の一連の動作
const colorBg = () =>{
    document.body.style.backgroundColor = color.value;

    if(color.value === '#FFFFFF'){
        text.textcontent='カラーコード: ${color.value} (white)';
    }else if(color.value === '#000000'){
        text.textcontent='カラーコード: ${color.value} (black)';
    }else{
        text.textcontent='カラーコード: ${color.value}';
    }
}

color.addEventListener('input', colorBg);