const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
  //listagem
  async index(req, res){
      const {page=1} = req.query;
      const products = await Product.paginate({},{page, limit: 3});

      return res.json(products);
  },
    
  //criação
      async store(req,res){
        const product = await Product.create(req.body);
        return res.json(product);
      },

      async show(req,res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
      },

      async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
      },

      async delete(req,res){
        await Product.findByIdAndDelete(req.params.id);
        return res.send();
      },
};