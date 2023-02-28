import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { addNewAddress } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

const AddressForm = () => {
  const initialAddress = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  };
  const [address, setAddress] = React.useState(initialAddress);
  const dispatch = useDispatch();

  const handleAddressChange = (e) => {
    if (e.target.name === 'firstName') {
      setAddress({ ...address, firstName: e.target.value });
    }
    if (e.target.name === 'lastName') {
      setAddress({ ...address, lastName: e.target.value });
    }
    if (e.target.name === 'address') {
      setAddress({ ...address, address: e.target.value });
    }
    if (e.target.name === 'city') {
      setAddress({ ...address, city: e.target.value });
    }
    if (e.target.name === 'state') {
      setAddress({ ...address, state: e.target.value });
    }
    if (e.target.name === 'zip') {
      setAddress({ ...address, postalCode: e.target.value });
    }
    if (e.target.name === 'country') {
      setAddress({ ...address, country: e.target.value });
    }
  };

  const addNewAddressHandler = (e) => {
    e.preventDefault();
    dispatch(addNewAddress(address));
    setAddress(initialAddress);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form onSubmit={addNewAddressHandler}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={address.firstName}
              onChange={handleAddressChange}
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={address.lastName}
              onChange={handleAddressChange}
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              value={address.address}
              onChange={handleAddressChange}
              id="address"
              name="address"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={address.city}
              onChange={handleAddressChange}
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={address.state}
              onChange={handleAddressChange}
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={address.postalCode}
              onChange={handleAddressChange}
              id="zip"
              name="zip"
              label="Zip / Postal code"
              type="number"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={address.country}
              onChange={handleAddressChange}
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
            />
          </Grid>
          <Button type="submit" variant="contained" sx={{ margin: '1rem auto' }}>
            Add Address
          </Button>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export { AddressForm };
