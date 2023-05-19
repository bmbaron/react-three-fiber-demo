export const checkMovement = (getKeysFunction, ref, isFloating?, speed?) => {
    const { moveForward, moveBackward, moveLeft, moveRight, jump, stop } = getKeysFunction();

    if (jump && ref.current) return([0,speed || 5,0])
    if (moveForward && ref.current) return([0,0,-speed || -5])
    if (moveBackward && ref.current) return([0,0,speed || 5])
    if (moveLeft && ref.current) return([-speed || -5,0,0])
    if (moveRight && ref.current) return([speed || 5,0,0])
    if (!isFloating && stop && ref.current) return ([0,0,0])

    else return null
}