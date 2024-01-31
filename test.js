const countDown  = async ()=>{
    console.log('1')
    await setTimeout(()=>{
        console.log('2')
        
    }, 5000)
    console.log('3')

    await setTimeout(()=>{
        console.log('4')
        
    }, 3000)
    console.log('5')
}
countDown()