export const getFilteredByCancellableHotels = (hotels, Cancellable)=>{

    return hotels.filter(({isCancelable})=> isCancelable === Cancellable);
}