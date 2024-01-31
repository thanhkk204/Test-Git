import axios from "axios"
console.log('-0')
const countDown  = async ()=>{
    console.log('1')

        const data = await axios.get('http://localhost:3000/users')
    
        console.log(data.data)

    console.log('3')

   const data2 = await axios.get('http://localhost:3000/users')
    
        console.log(data2.data)
    console.log('5')
}
countDown()
console.log('6')