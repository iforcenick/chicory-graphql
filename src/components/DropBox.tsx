import { useCallback, useEffect, useState } from 'react';
import { FormControl, Select, InputLabel, MenuItem, Box, SelectChangeEvent } from '@mui/material';
import { component_style } from './assets/style';
import { useRetailersQuery } from '../generated/graphql';
import useLocalStorage from '../hooks/useLocalStorage'

const DropBox = () => {
  const [companyName, setCompanyName] = useLocalStorage('companyName', '')
  const { data, error, loading } = useRetailersQuery({variables: {"zipCode": "11342", "black": [], "white": []}});

  const handleChange = useCallback((event: SelectChangeEvent) => {
    setCompanyName(event.target.value as string);
  }, [localStorage, companyName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  console.log(data?.retailers)

  return (
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", margin: 20}}>
      <FormControl sx={component_style}>
        <InputLabel id="simple-select-label">Name</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={companyName as string}
          label="Name"
          onChange={handleChange}
          autoWidth
        >
          {
            data?.retailers?.map((retailer, index) => (
              <MenuItem key={index} value={retailer?.name as string}>{retailer?.name}</MenuItem>     
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropBox;