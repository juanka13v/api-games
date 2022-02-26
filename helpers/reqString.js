const reqString = (message, subObj) => {
    let obj = {
      type: String,
      required: [true, `Please provide a ${message}`],
    };
  
    if (subObj) {
      obj = { ...obj, ...subObj };
    }
  
    return obj;
};

module.exports = {
    reqString
}