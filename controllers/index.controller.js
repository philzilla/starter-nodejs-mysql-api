// GET('/')
exports.getIndexPage = async (req, res) => {
  const user = {
    name: "Pithivier",
    age: 45
  }
  /*
  const products  = await query( 'SELECT * FROM product')
  const categories = await query( 'SELECT * FROM category');
  */

  try {
    res.json(user
    //  products,
    // categories
    );
  } catch (e) {
    res.send(e)
  }
};