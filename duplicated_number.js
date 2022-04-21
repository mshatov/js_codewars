function findDup( arr ){
    let obj={};
    for(let i=0; i<arr.length; ++i) {
      obj[arr[i]] = obj[arr[i]] ? 2 : 1;
    }
    for(const [key, value] of Object.entries(obj)){
        if(value === 2) return key;
    }
  }

  console.log(findDup([1,3,2,5,4,5,7,6]))