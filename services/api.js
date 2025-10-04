const API_URL = `${ import.meta.env.VITE_SERVER_API }`;

export const getClients = async () => {
  try {
    const response = await fetch(`${API_URL}/clients`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};


export const getClientById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/clients/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching client ${id}:`, error);
    throw error;
  }
};


export const createClient = async (clientData) => {
  try {
    const response = await fetch(`${API_URL}/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating client:', error);
    throw error;
  }
};


export const updateClient = async (id, clientData) => {
  try {
    const response = await fetch(`${API_URL}/clients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating client ${id}:`, error);
    throw error;
  }
};


export const deleteClient = async (id) => {
  try {
    const response = await fetch(`${API_URL}/clients/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return { success: true, id };
  } catch (error) {
    console.error(`Error deleting client ${id}:`, error);
    throw error;
  }
};