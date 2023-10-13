export const wait = (time = 1500) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}
