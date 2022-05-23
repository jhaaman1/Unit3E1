let data = JSON.parse(localStorage.getItem('products')) || [];
// console.log(product);
function getProduct(){

    document.querySelector('#all_products').innerHTML = null;
    
    data.map((el,index,arr)=>{
        
        let div = document.createElement('div');

        let type = document.createElement('p');
        type.innerText = el.type;

        let desc = document.createElement('p');
        desc.innerText = el.description;

        let price = document.createElement('p') 
        price.innerText = el.price;

        let image = document.createElement('img');
        image.src = el.image;

        let remove = document.createElement('button');
        remove.innerText = 'Remove';
        remove.addEventListener('click', ()=> {
            myfunction(index)
        })
        div.append(image,type,desc,price,remove);
        let r = document.querySelector('#all_products').append(div)
        // console.log(r);
        
    })
}

getProduct();

function myfunction(index){
    data.splice(index,1);
    localStorage.setItem(('products'),JSON.stringify(data));
    getProduct();
}

