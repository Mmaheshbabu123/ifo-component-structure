// hooks/useCustomerFormHandler.js
import { useEffect, useState } from "react";
import {
  getCustomerData,
  getStates,
  getCities,
  saveCustomerData,
} from "../services/customerFormService";

export const useCustomerFormHandler = (customerId = null) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "",
    state: "",
    city: "",
  });

  const [statesOptions, setStatesOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Load existing customer
  useEffect(() => {
    if (!customerId) return;
    const fetchCustomer = async () => {
      setLoading(true);
      const data = await getCustomerData(customerId);
      setFormData(data);
      if (data.country) {
        const states = await getStates(data.country);
        setStatesOptions(states);
      }
      if (data.state) {
        const cities = await getCities(data.state);
        setCitiesOptions(cities);
      }
      setLoading(false);
    };
    fetchCustomer();
  }, [customerId]);

  // Country change → fetch states
  useEffect(() => {
    if (!formData.country) return;
    const loadStates = async () => {
      const states = await getStates(formData.country);
      setStatesOptions(states);
      setFormData((prev) => ({ ...prev, state: "", city: "" }));
      setCitiesOptions([]);
    };
    loadStates();
  }, [formData.country]);

  // State change → fetch cities
  useEffect(() => {
    if (!formData.state) return;
    const loadCities = async () => {
      const cities = await getCities(formData.state);
      setCitiesOptions(cities);
      setFormData((prev) => ({ ...prev, city: "" }));
    };
    loadCities();
  }, [formData.state]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await saveCustomerData(formData);
      setSuccess(true);
    } catch (e) {
      console.error("Failed to submit form", e);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    errors,
    loading,
    success,
    statesOptions,
    citiesOptions,
  };
};
