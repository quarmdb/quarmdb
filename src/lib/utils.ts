export function sort_obj_keys(obj:{[key: string]: any}):Object {
  let allKeys = Object.keys(obj);
  allKeys.sort();
  let temp_obj:{[key: string]: any} = {};
  for (let i = 0; i < allKeys.length; i++) { 
     temp_obj[allKeys[i]] = obj[allKeys[i]]
  }
  return temp_obj;
}

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};