// services/customerFormService.js
export const getStates = async (countryCode) => {
    const res = await fetch(`/api/states?country=${countryCode}`);
    return res.json();
  };
  
  export const getCities = async (stateCode) => {
    const res = await fetch(`/api/cities?state=${stateCode}`);
    return res.json();
  };
  
  export const getCustomerData = async (customerId) => {
    const res = await fetch(`/api/customers/${customerId}`);
    return res.json();
  };
  
  export const saveCustomerData = async (payload) => {
    const res = await fetch(`/api/customers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.json();
  };
  