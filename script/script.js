// 주문영역 상품 이미지 view (작은 이미지 클릭 시 이미지로 변경)
const big = document.querySelector('.order .big img')
const thum = document.querySelectorAll('.order .thum a')
console.log(big, thum)

thum.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault() //새로고핌 기능 막기
        console.log(target)
        console.log(index)
        big.src = `./images/product_0${index+1}.jpg`
    })
})

// 주문영역 상품 옵션 선택
const brands = document.querySelector('.order #brands')
const galaxy = document.querySelector('.order #galaxy')
const iphone = document.querySelector('.order #iphone')
console.log(brands,galaxy,iphone)
iphone.style.display = 'none' //아이폰 숨기기(초기값)
galaxy.disabled = true //비활성화

brands.addEventListener('change',()=>{
    if(brands.options[2].selected == true){ //아이폰
        brands_dis(iphone,false)
        iphone.style.display = 'block'
    }else if(brands.options[1].selected == true){ //갤럭시
        brands_dis(galaxy,false)
    }else {//필수옵션안내(위 조건 아이폰,갤럭시가 모두 아닌 경우)
        galaxy.options[0].selected = true
    }
    
})

function brands_dis(target,boolean){
    galaxy.style.display = 'none'
    iphone.style.display = 'none'
    target.style.display = 'block'
    target.disabled = boolean
}

// 기종 선택 시 주문영역에 기종명 출력하기
const order_model = document.querySelector('.order_product .model')
const galaxy_op = document.querySelectorAll('#galaxy option')
const iphone_op = document.querySelectorAll('#iphone option')
console.log(order_model,galaxy_op,iphone_op)

// 갤럭시 기종 출력
galaxy.addEventListener('change',()=>{
    let galaxy_index = galaxy.selectedIndex
    console.log(galaxy_index)
    console.log(galaxy_op[galaxy_index])
    order_model.appendChild(galaxy_op[galaxy_index])
})

// 아이폰 기종 출력

//갯수에 따른 가격 출력
const order_num = document.querySelector('.order_list #order_num')
const total_num = document.querySelector('.order_list em span')
let price =17000
let total
console.log(order_num,total_num)

order_num.addEventListener('change',()=>{
    if(order_num.value>0){
        total = price*order_num.value 
        console.log(total)
        total_num.innerHTML = total.toLocaleString('ko-kr')
    }else {
        window.alert('최소 주문 수량입니다.')
        order_num.value = 1
    }
})

const cancel = document.querySelector('.order_list #cancel')
console.log(cancel)

cancel.addEventListener('click',()=>{
    order_num.value = 1
    total_num.innerHTML = price.toLocaleString('ko-kr')
})