function add(a,b) {
    return a+b
}
const mul=(a,b) => {
    return a*b
}   
console.log(add(2,3))
console.log(mul(2,3))
const obj={
    name:'shandeep',
    age:40,
    message:function(){
        let name=obj.name
        return `Hello I am ${name}`
    }
}
console.log(obj.name);
console.log(obj.message());

//map-return new array after executing function on every element
const numbers=[1,3,4,88,21,-35,-26]
const mappednum=numbers.map((num)=>num*3)
console.log(mappednum);

//filter-return new array with element satisfying the condition
const postNum=numbers.filter((n)=>n>0)
console.log(postNum);

//filter-return new array with odd element 
const oddNum=numbers.filter((n)=>n%2!=0)
console.log(oddNum);

//reduce-reduce to single element
const total=numbers.reduce((sum,n)=>sum+n,0)
console.log(total);

const products=[
    {name:'tv',price:2000},
    {name:'phone',price:15000},
    {name:'laptop',price:55000},
    {name:'game',price:2500},
    {name:'remote',price:2000},
    {name:'AC',price:15000}
]

//reduce-reduce to single product
const totalPrice=products.reduce((sum,n)=>sum+n.price,0)
console.log(totalPrice);

//filter-filter the product more than 5000
const num=products.filter((n)=>n.price>5000)
console.log(num);
//Destructuring
// const user={name:'CR7',password:'123456789'}
// const {name,password}=user
// console.log(password);
const number=[1,2,3,4,5,6]
const [first,second,third]=number
console.log(third);
    const user={name:'CR7',password:'123456789'}
    const {name,password}=user
    console.log(password);

    //spread
    const arr1=[1,2,3]
    const arr2=[4,5,6]
    const copy=[...arr1,...arr2,7,8,9]
    const copy2=[...arr2,...arr1]
    console.log(copy);
    console.log(copy2);

    //rest
    function add2(...arguments) {
        return arguments;   
    }
    console.log(add2(1,2,3,4,5))

    function add3(...arguments){
        return arguments.reduce((sum,n)=>sum+n,0);
    }
    console.log(add3(1,2,3,4,5));

    //callback
    function function1(){
        console.log(`from inside callback`)
    }
    function fun(name,callback){
        callback()
        return `${name} from outside callback`
    }
    console.log(fun(`function`, ()=>{console.log(`from inside callback`) }));

    async function fetchUsers() {
        try {
            const response=await fetch(
                'https://jsonplaceholder.typicode.com/users'
            )
            const data = await response.json()
            //console.log(data);
            data.map((a)=>console.log(a.name))
            
        } catch(error) {
            console.log(error);
        }
    }
    fetchUsers()
