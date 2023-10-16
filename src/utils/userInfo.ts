
export const getUserInfoLocal = ()=>{
    const data = localStorage.getItem('USER')
    return JSON.parse(data)
}

