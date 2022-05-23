//store the products array in localstorage as "products"

function Prod(t,d,p,i){
    this.type = t;
    this.description = d;
    this.price = p;
    this.image = i
}

let arr = JSON.parse(localStorage.getItem('products')) || [];

function getData(){
    event.preventDefault();
    // document.querySelector('#products').value = '';
    let form = document.querySelector('#products')
    let type = form.type.value;
    form.type.value = '';
    let desc = form.desc.value;
    form.desc.value = '';
    let price = form.price.value;
    form.price.value = '';
    let image = form.image.value;
    form.image.value = '';
    let p = new Prod(type,desc,price,image);
    
    arr.push(p);
    // console.log(arr);
    localStorage.setItem(('products'),JSON.stringify(arr));

}