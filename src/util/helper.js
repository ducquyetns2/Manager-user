const convertObject=(obj) => {
   if(obj) {
      return (Array.isArray(obj)) ? obj.map(tmp => tmp.toObject()) : obj.toObject()
   }
   else return obj
}
export {
    convertObject
}