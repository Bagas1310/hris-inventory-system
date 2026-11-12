import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_EMPLOYEES, INITIAL_INVENTORY, INITIAL_ACTIVITIES } from '../data/initialData';

const AppDataContext = createContext();

export function AppDataProvider({ children }) {
  const [employees, setEmployees] = useState(() => {
    try {
      const stored = localStorage.getItem('hris_employees');
      return stored ? JSON.parse(stored) : INITIAL_EMPLOYEES;
    } catch {
      return INITIAL_EMPLOYEES;
    }
  });

  const [inventory, setInventory] = useState(() => {
    try {
      const stored = localStorage.getItem('hris_inventory');
      return stored ? JSON.parse(stored) : INITIAL_INVENTORY;
    } catch {
      return INITIAL_INVENTORY;
    }
  });

  const [activities, setActivities] = useState(() => {
    try {
      const stored = localStorage.getItem('hris_activities');
      return stored ? JSON.parse(stored) : INITIAL_ACTIVITIES;
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

  const addActivity = (deskripsi, tipe = 'info') => {
    const newActivity = {
      id: 'act-' + Date.now(),
      tipe,
      deskripsi,
      waktu: 'Baru saja'
    };
    setActivities(prev => [newActivity, ...prev.slice(0, 19)]);
  };

  // Employees CRUD
  const addEmployee = (empData) => {
    const newEmp = {
      ...empData,
      id: 'emp-' + Date.now(),
      avatar: empData.avatar || `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80`
    };
    setEmployees(prev => [newEmp, ...prev]);
    addActivity(`Menambahkan karyawan baru: ${newEmp.nama} (${newEmp.posisi})`, 'employee');
    return newEmp;
  };

  const updateEmployee = (id, updatedData) => {
    setEmployees(prev => prev.map(emp => (emp.id === id ? { ...emp, ...updatedData } : emp)));
    addActivity(`Memperbarui data karyawan: ${updatedData.nama || 'ID ' + id}`, 'employee');
  };

  const deleteEmployee = (id) => {
    const emp = employees.find(e => e.id === id);
    setEmployees(prev => prev.filter(e => e.id !== id));
    addActivity(`Menghapus data karyawan: ${emp ? emp.nama : id}`, 'employee');
  };

  // Inventory CRUD
  const getInventoryStatus = (stok) => {
    const num = Number(stok);
    if (num <= 0) return 'Habis';
    if (num <= 5) return 'Menipis';
    return 'Tersedia';
  };

  const addInventory = (itemData) => {
    const stok = Number(itemData.stok) || 0;
    const newItem = {
      ...itemData,
      id: 'inv-' + Date.now(),
      stok,
      harga: Number(itemData.harga) || 0,
      status: itemData.status || getInventoryStatus(stok)
    };
    setInventory(prev => [newItem, ...prev]);
    addActivity(`Menambahkan barang baru: ${newItem.namaBarang} (${newItem.sku})`, 'inventory');
    return newItem;
  };

  const updateInventory = (id, updatedData) => {
    const stok = Number(updatedData.stok) || 0;
    const resolvedStatus = updatedData.status || getInventoryStatus(stok);
    setInventory(prev => prev.map(item => (
      item.id === id
        ? {
            ...item,
            ...updatedData,
            stok,
            harga: Number(updatedData.harga) || 0,
            status: resolvedStatus
          }
        : item
    )));
    addActivity(`Memperbarui data barang: ${updatedData.namaBarang || 'SKU ' + id}`, 'inventory');
  };

  const deleteInventory = (id) => {
    const item = inventory.find(i => i.id === id);
    setInventory(prev => prev.filter(i => i.id !== id));
    addActivity(`Menghapus data barang: ${item ? item.namaBarang : id}`, 'inventory');
  };

  // Derived Stats
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(e => e.status === 'Aktif').length;
  const totalBarang = inventory.reduce((acc, item) => acc + (Number(item.stok) || 0), 0);
  const totalSkus = inventory.length;
  const stokMenipisCount = inventory.filter(i => i.status === 'Menipis' || (i.stok > 0 && i.stok <= 5)).length;
  const stokHabisCount = inventory.filter(i => i.status === 'Habis' || i.stok === 0).length;
  const totalNilaiAset = inventory.reduce((acc, item) => acc + (Number(item.stok) * Number(item.harga)), 0);

  return (
    <AppDataContext.Provider
      value={{
        employees,
        inventory,
        activities,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        addInventory,
        updateInventory,
        deleteInventory,
        stats: {
          totalEmployees,
          activeEmployees,
          totalBarang,
          totalSkus,
          stokMenipisCount,
          stokHabisCount,
          totalNilaiAset
        }
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  return useContext(AppDataContext);
}
