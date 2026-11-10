const mongoose = require("mongoose");
  const {Schema} = mongoose;

   main()
   .then(()=>{console.log("Connection Successfull")})
   .catch((err)=>{console.log(err);});
        
  async function main(){
     await  mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
  }      

   const OrderSchema = new Schema({
    item: String,
    price: Number,
   });


      const Order = mongoose.model("Order",OrderSchema);

   const addOrders = async() =>{
        let res = await Order.insertMany([
            {item:"Choclate",price:10},
            {item:"Lado",price:15},
            {item:"Samosa",price:20}
         ]);
          console.log(res);
   };


   addOrders();