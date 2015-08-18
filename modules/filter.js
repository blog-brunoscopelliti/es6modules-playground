
import isEven from "modules/isEven";

export default function _filter(arr){
    return arr.filter(x => isEven(x));
}