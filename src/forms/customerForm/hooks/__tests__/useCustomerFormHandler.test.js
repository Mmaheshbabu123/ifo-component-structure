// hooks/__tests__/useCustomerFormHandler.test.js
import { renderHook, act } from '@testing-library/react';
import { useCustomerFormHandler } from '../useCustomerFormHandler';

// Mock API services
jest.mock('../../services/customerFormService', () => ({
  getCustomerData: jest.fn().mockResolvedValue({
    name: 'John',
    gender: 'M',
    country: 'IN',
    state: 'KA',
    city: 'BLR',
  }),
  getStates: jest.fn().mockResolvedValue([{ code: 'KA', name: 'Karnataka' }]),
  getCities: jest.fn().mockResolvedValue([{ code: 'BLR', name: 'Bangalore' }]),
  saveCustomerData: jest.fn().mockResolvedValue({ success: true }),
}));

describe('useCustomerFormHandler', () => {
  it('loads customer data on mount if customerId exists', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useCustomerFormHandler(1)
    );

    await waitForNextUpdate();

    expect(result.current.formData.name).toBe('John');
    expect(result.current.formData.country).toBe('IN');
  });

  it('validates required fields on submit', async () => {
    const { result } = renderHook(() => useCustomerFormHandler());

    act(() => {
      result.current.handleSubmit();
    });

    expect(result.current.errors.name).toBe('Name is required');
  });
});
