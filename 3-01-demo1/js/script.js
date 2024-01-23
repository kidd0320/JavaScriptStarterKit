const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// カラーピッカーを操作した時の一連の動作
const colorBg = () =>{
    document.body.style.backgroundColor = color.value;

    if(color.value === '#ffffff'){
        text.textContent = `カラーコード: ${color.value} (white)`;
    }else if(color.value === '#000000'){
        text.textContent = `カラーコード: ${color.value} (black)`;
    }else{
        text.textContent = `カラーコード: ${color.value}`;
    }
    
}

color.addEventListener('input', colorBg);