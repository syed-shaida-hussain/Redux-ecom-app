import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

const Review = () => {
  const { cartItems, totalCartPrice } = useSelector((store) => store.products);
  const { address } = useSelector((store) => store.auth);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem key={product._id} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.quantity + ' ' + product.name}
              secondary={product.brand}
            />
            <Typography variant="body2">
              Rs. {product.quantity * product.discountedPrice}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Price" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Rs. {totalCartPrice}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Delivery Charges" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            + 99
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Rs. {totalCartPrice + 99}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {address.firstName} {address.lastName}
          </Typography>
          <Typography gutterBottom>
            {address.address} {address.postalCode}
          </Typography>
          <Typography gutterBottom>
            {address.city} {address.state} {address.country}
          </Typography>

          <Typography gutterBottom></Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { Review };
