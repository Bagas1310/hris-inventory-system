import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_EMPLOYEES, INITIAL_INVENTORY, INITIAL_ACTIVITIES } from '../data/initialData';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [employees, setEmployees] = useState(() => {
    try {
      const saved = localStorage.getItem('hris_employees');
      return saved ? JSON.parse(saved) : INITIAL_EMPLOYEES;
    } catch {
      return INITIAL_EMPLOYEES;
    }
  });

  const [inventory, setInventory] = useState(() => {
    try {
      const saved = localStorage.getItem('hris_inventory');
      return saved ? JSON.parse(saved) : INITIAL_INVENTORY;
    } catch {
      return INITIAL_INVENTORY;
    }
  });

  const [activities, setActivities] = useState(() => {
    try {
      const saved = localStorage.getItem('hris_activities');
      return saved ? JSON.parse(saved) : INITIAL_ACTIVITIES;
    } catch {
      return INITIAL_ACTIVITIES;
    }
  });

  useEffect(() => {
    localStorage.setItem('hris_employees', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('hris_inventory', JSON.stringify(inventory));
  }, [inventory]);

  useEffect(() => {
    localStorage.setItem('hris_activities', JSON.stringify(activities));
  }, [activities]);

  const recordActivity = (title, description, type = 'info') => {
    const newActivity = {
      id: `ACT-${Date.now()}`,
      title,
      description,
      timestamp: 'Baru saja',
      type,
    };
    setActivities(prev => [newActivity, ...prev.slice(0, 19)]);
  };

  // Employee CRUD
  const addEmployee = (empData) => {
    const newId = `EMP-${String(employees.length + 1).padStart(3, '0')}`;
    const newEmp = {
      ...empData,
      id: newId,
      joinDate: empData.joinDate || new Date().toISOString().split('T')[0],
      avatar: empData.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(empData.name)}&background=6366f1&color=fff`,
    };
    setEmployees(prev => [newEmp, ...prev]);
    recordActivity('Karyawan Ditambahkan', `${newEmp.name} ditambahkan ke departemen ${newEmp.department}.`, 'employee');
    return newEmp;
  };

  const updateEmployee = (id, updatedData) => {
    setEmployees(prev => prev.map(emp => (emp.id === id ? { ...emp, ...updatedData } : emp)));
    recordActivity('Data Karyawan Diperbarui', `Informasi untuk ${updatedData.name || id} telah diperbarui.`, 'employee');
  };

  const deleteEmployee = (id) => {
    const target = employees.find(e => e.id === id);
    setEmployees(prev => prev.filter(emp => emp.id !== id));
    if (target) {
      recordActivity('Karyawan Dihapus', `${target.name} (${target.position}) telah dihapus dari sistem.`, 'danger');
    }
  };

  // Inventory CRUD
  const addInventory = (invData) => {
    const newId = `INV-${String(inventory.length + 1).padStart(3, '0')}`;
    const stockNum = Number(invData.stock) || 0;
    const computedStatus = stockNum === 0 ? 'Habis' : stockNum < 10 ? 'Menipis' : 'Tersedia';

    const newItem = {
      ...invData,
      id: newId,
      stock: stockNum,
      price: Number(invData.price) || 0,
      status: invData.status || computedStatus,
    };
    setInventory(prev => [newItem, ...prev]);
    recordActivity('Inventaris Ditambahkan', `${newItem.name} (${newItem.sku}) telah ditambahkan.`, 'inventory');
    return newItem;
  };

  const updateInventory = (id, updatedData) => {
    const stockNum = Number(updatedData.stock) || 0;
    const computedStatus = stockNum === 0 ? 'Habis' : stockNum < 10 ? 'Menipis' : 'Tersedia';

    setInventory(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          ...updatedData,
          stock: stockNum,
          price: Number(updatedData.price) || 0,
          status: updatedData.status || computedStatus,
        };
      }
      return item;
    }));
    recordActivity('Inventaris Diperbarui', `Stok/data untuk ${updatedData.name || id} telah diubah.`, 'inventory');
  };

  const deleteInventory = (id) => {
    const target = inventory.find(i => i.id === id);
    setInventory(prev => prev.filter(item => item.id !== id));
    if (target) {
      recordActivity('Inventaris Dihapus', `Barang ${target.name} (${target.sku}) dihapus dari sistem.`, 'danger');
    }
  };

  // Calculations for dashboard
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(e => e.status === 'Aktif').length;
  const totalInventory = inventory.reduce((acc, curr) => acc + Number(curr.stock), 0);
  const totalInventoryItems = inventory.length;
  const lowStockCount = inventory.filter(i => i.stock > 0 && i.stock < 10).length;
  const outOfStockCount = inventory.filter(i => Number(i.stock) === 0).length;
  const totalAssetValue = inventory.reduce((acc, curr) => acc + (Number(curr.stock) * Number(curr.price)), 0);

  return (
    <DataContext.Provider
      value={{
        employees,
        inventory,
        activities,
        totalEmployees,
        activeEmployees,
        totalInventory,
        totalInventoryItems,
        lowStockCount,
        outOfStockCount,
        totalAssetValue,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        addInventory,
        updateInventory,
        deleteInventory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
