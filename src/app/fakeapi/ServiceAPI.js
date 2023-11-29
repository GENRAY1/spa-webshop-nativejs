export default class ServiceAPI{
    static getCopy = (array) =>{
        let copy = array.map(a => ({...a}));
        return copy;
    }
}

