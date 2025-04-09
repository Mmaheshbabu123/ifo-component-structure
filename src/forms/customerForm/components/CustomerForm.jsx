// components/CustomerForm1.jsx
import React from "react";
import { useCustomerFormHandler } from "../hooks/useCustomerFormHandler";
import { useStaticOptions } from "../hooks/useStaticOptions";

const CustomerForm = ({ customerId = null }) => {
  const {
    formData,
    handleChange,
    handleSubmit,
    errors,
    loading,
    success,
    statesOptions,
    citiesOptions,
  } = useCustomerFormHandler(customerId);

  const { countries, genders } = useStaticOptions();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h2>{customerId ? "Edit" : "Create"} Customer</h2>

      {success && <p style={{ color: "green" }}>Saved successfully!</p>}

      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}

      <select
        value={formData.gender}
        onChange={(e) => handleChange("gender", e.target.value)}
      >
        <option value="">Select Gender</option>
        {genders.map((g) => (
          <option key={g.value} value={g.value}>
            {g.label}
          </option>
        ))}
      </select>
      {errors.gender && <div style={{ color: "red" }}>{errors.gender}</div>}

      <select
        value={formData.country}
        onChange={(e) => handleChange("country", e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>
      {errors.country && <div style={{ color: "red" }}>{errors.country}</div>}

      <select
        value={formData.state}
        onChange={(e) => handleChange("state", e.target.value)}
        disabled={!formData.country}
      >
        <option value="">Select State</option>
        {statesOptions.map((s) => (
          <option key={s.code} value={s.code}>
            {s.name}
          </option>
        ))}
      </select>
      {errors.state && <div style={{ color: "red" }}>{errors.state}</div>}

      <select
        value={formData.city}
        onChange={(e) => handleChange("city", e.target.value)}
        disabled={!formData.state}
      >
        <option value="">Select City</option>
        {citiesOptions.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>
      {errors.city && <div style={{ color: "red" }}>{errors.city}</div>}

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Submit"}
      </button>
    </form>
  );
};

export default CustomerForm;
