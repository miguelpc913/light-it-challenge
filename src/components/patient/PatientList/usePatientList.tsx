import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { usePatients } from "../../../store/patients";
import type { Patient } from "../../../types/Patient";

export default function usePatientList() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const query = useQuery<Patient[]>({
    queryKey: ["users"],
    queryFn: async function () {
      const response = await fetch(
        "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users?page=1&limit=12",
      );
      const data = await response.json();
      return data;
    },
  });
  const setPatients = usePatients((state) => state.setPatients);
  const allPatients = usePatients((state) => state.patients);
  
  useEffect(() => {
    if (!query.isPending && query.data) {
      setPatients(query.data);
    }
  }, [query.isPending]);
  
  const filteredPatients = useMemo(() => {
    if (!searchQuery.trim()) {
      return allPatients;
    }
    
    const query = searchQuery.toLowerCase().trim();
    return allPatients.filter((patient) => {
      return (
        patient.name.toLowerCase().includes(query) ||
        patient.website.toLowerCase().includes(query) ||
        patient.description.toLowerCase().includes(query)
      );
    });
  }, [allPatients, searchQuery]);
  
  const handleCreateModalToggle = () => {
    setIsCreateModalOpen((prevState) => !prevState);
  };
  
  return {
    patients: filteredPatients,
    handleCreateModalToggle,
    isCreateModalOpen,
    query,
    searchQuery,
    setSearchQuery,
  };
}
