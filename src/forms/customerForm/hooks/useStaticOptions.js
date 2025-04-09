// hooks/useStaticOptions.js
export const useStaticOptions = () => {
    const countries = [
      { code: "IN", name: "India" },
      { code: "US", name: "USA" },
      { code: "CA", name: "Canada" },
    ];
  
    const genders = [
      { value: "M", label: "Male" },
      { value: "F", label: "Female" },
    ];
  
    return {
      countries,
      genders,
    };
  };
  