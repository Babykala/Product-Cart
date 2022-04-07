import React, { useState } from 'react';
import './product.css'
import { makeStyles } from '@mui/styles';
import img from './image.png';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box, Typography, Grid, Stack, Rating, InputLabel, FormControl } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from 'react-bootstrap';
import { Route,Routes,useNavigate } from 'react-router-dom';
import data from './data';


export default function Product() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const {productItems}=data;
  const [cartItems,setCartItems]=useState([]);   
                                                 
  const handleAdd = async (e) => {
    e.preventDefault();
    var id = e.target.id;
    //console.log(productItems)
    if (e.target.textContent === 'Add to cart') {
      setCount(count + 1);
      e.target.textContent = 'Remove from cart'
      const c= await productItems.filter(item=>id === item.id)
      await setCartItems([...cartItems,c])
      console.log(cartItems)
    }
    
    else if (e.target.textContent === 'Remove from cart') {
      setCount(count - 1);
      e.target.textContent = 'Add to cart';
      
    }
    
    //console.log(cartItems)
    
  }
  
  return (

    <div style={{ padding: '2px', width: '100%' }}>
<header><Routes><Route productItems={productItems} cartItems={cartItems}/></Routes></header>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ padding: '50px', minWidth: 100 }}>Start Bootstrap</Typography>
        <Typography sx={{ minWidth: 100 }}>Home</Typography>
        <Typography sx={{ minWidth: 100 }}>About</Typography>
        <MenuItem sx={{ minWidth: 120 }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-label">Shop</InputLabel>
            <Select label="Shop">
              <MenuItem>All Products</MenuItem>
              <MenuItem>Popular Items</MenuItem>
              <MenuItem>New Arrivals</MenuItem>
            </Select>
          </FormControl>
        </MenuItem>

        <div className="cart">
          <button type="button" class="btn btn-outline-dark" onClick={() => navigate('/checkout',{state:{cartItems}})}>
            <ShoppingCartIcon />Cart &nbsp; <Badge pill bg="dark">{count}</Badge></button></div>
        <br />
      </Box>

      <div className="main">
        <span style={{ color: 'white', fontSize: '60px', fontWeight: 'bold' }}>Shop in style</span> <br />
        <span style={{ color: 'Grey', fontSize: '20px' }}>With this shop hompeage template</span> <br />
      </div>

      {/* Grid */}
      <Grid container spacing={2} className="grid-container">
        <Grid item xs={3}>
          <div className="grid">
            <img src={img} className="image"></img>
            <Grid>
              <span className="item">Fancy Product</span> <br /> $40.00 - $80.00 <br /><br />
              <button type="button" class="btn btn-outline-dark">View Options</button>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className="grid" style={{ position: 'relative' }}>
            <div className="badge"><Badge bg="dark">Sale</Badge></div>
            <img src={img} className="image"></img>
            <Grid>
              <span className="item">Special Item</span> <br />
              <Stack style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="full-rating" defaultValue={5} />
              </Stack>
              <strike>$20.00</strike> $18.00 <br /><br />
              <button type="button" class="btn btn-outline-dark" id="1" onClick={handleAdd}>Add to cart</button>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className="grid" style={{ position: 'relative' }}>
            <div className="badge"><Badge bg="dark">Sale</Badge></div>
            <img src={img} className="image"></img>
            <Grid>
              <span className="item">Sale Item</span> <br />
              <strike>$50.00 </strike><span id="rate2">$25.00</span> <br /><br /><br />
              <button type="button" class="btn btn-outline-dark" id="2" onClick={handleAdd}>Add to cart</button>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className="grid">
            <img src={img} className="image"></img>
            <Grid>
              <span className="item">Popular Item</span> <br />
              <Stack style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="full-rating" defaultValue={5} />
              </Stack>
              <span id="rate3">$40.00</span> <br /><br />
              <button type="button" class="btn btn-outline-dark" id="3" onClick={handleAdd}>Add to cart</button>
            </Grid>
          </div>
        </Grid>

        <br />
        <Grid item xs={3}>
          <div className="grid" style={{ position: 'relative' }}>
            <div className="badge"><Badge bg="dark">Sale</Badge></div>
            <img src={img} className="image"></img>
            <Grid>
              <span className="item">Sale Item</span> <br />
              <strike>$50.00</strike> <span id="rate4">$25.00</span><br /><br /><br />
              <button type="button" class="btn btn-outline-dark" id="4" onClick={handleAdd}>Add to cart</button>
            </Grid>
          </div>
        </Grid>


        <Grid item xs={3}>
          <div className="grid">
            <img src={img} className="image"></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px', margin: '20px' }}>Fancy Product</span> <br /> $40.00 - $80.00 <br /><br /><br />
              <button type="button" class="btn btn-outline-dark">View Options</button>
            </Grid>
          </div>

        </Grid>


        <Grid item xs={3}>
          <div className="grid" style={{ position: 'relative' }}>
            <div className="badge"><Badge bg="dark">Sale</Badge></div>
            <img src={img} className="image"></img>
            <Grid>
              <span className="item">Special Item</span> <br />
              <Stack style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="full-rating" defaultValue={5} />
              </Stack>
              <strike>$20.00</strike><span id="rate5">$18.00</span> <br /><br />
              <button type="button" class="btn btn-outline-dark" id="5" onClick={handleAdd}>Add to cart</button>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className="grid">
            <img src={img} className="image"></img>
            <Grid>
              <span className="item">Popular Item</span> <br />
              <Stack style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="full-rating" defaultValue={5} />
              </Stack>
              <span id="rate6">$40.00</span> <br /><br />
              <button type="button" class="btn btn-outline-dark" id="6" onClick={handleAdd}>Add to cart</button>
            </Grid>

          </div>
        </Grid>
      </Grid><br /><br />
    </div>
  );
}





