"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  ArrowLeftIcon,
  HistoryIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import { useAuth } from "@app/context/AuthContext";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

interface Reserva {
  id: number;
  fecha: string;
  origen: string;
  destino: string;
  hora: string;
}

interface UserProfile {
  name: string;
  lastName: string;
  email: string;
  phone?: number; // en la DB es number
  reservas?: Reserva[];
}

const UserProfilePage: React.FC = () => {
  const { token } = useAuth();
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "", // string porque viene del input
    password: "",
  });

  useEffect(() => {
    if (!token) {
      router.push("/login?redirect=/profile");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) throw new Error("Error al obtener perfil");
        const data = await res.json();
        setUser(data);
        setFormData({
          name: data.name || "",
          lastName: data.lastName || "",
          email: data.email || "",
          phone: data.phone != null ? String(data.phone) : "", // convertimos a string para el input
          password: "",
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // payload tipado explícitamente
    const payload: {
      name?: string;
      lastName?: string;
      email?: string;
      password?: string;
      phone?: number;
    } = {};

    if (formData.name.trim() !== "") payload.name = formData.name.trim();
    if (formData.lastName.trim() !== "") payload.lastName = formData.lastName.trim();
    if (formData.email.trim() !== "") payload.email = formData.email.trim();
    if (formData.password.trim() !== "") payload.password = formData.password.trim();

    const phoneStr = formData.phone.trim();
    if (phoneStr !== "" && !isNaN(Number(phoneStr))) {
      payload.phone = Number(phoneStr); // se manda como number al backend
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Error al actualizar perfil");
      const updated = await res.json();
      setUser(updated);
      setEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <p className="p-6">Cargando perfil...</p>;
  }

  if (!user) {
    return <p className="p-6">No se pudo cargar el perfil</p>;
  }
  return (
    <>
      <div className="min-h-screen p-4 sm:p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-10">
          {/* Botón de Volver */}
          <button
            onClick={() => router.push("/reservations")}
            className="flex items-center text-[#ED7A1C] hover:bg-[#d96c17]  mb-6 font-semibold cursor-pointer">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Volver
          </button>

          {/* Encabezado */}
          <div className="flex items-center border-b pb-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#ED7A1C] flex items-center justify-center">
              <FaUser className="w-5 h-5 text-white mr-2" />
            </div>
            <h1 className="Rubik text-2xl font-bold text-[#1E1E1E]">
              ¡Hola, {user.name}!
            </h1>
          </div>

          {/* Datos personales */}
          <h2 className="Rubik text-xl font-semibold text-[#1E1E1E] mb-4 border-l-4 border-[#ED7A1C] pl-3">Datos Personales:</h2>

          {!editing ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-sm">
                  <UserIcon className="w-5 h-5 text-[#ED7A1C] mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Nombre</p>
                    <p className="Noto font-medium text-[#1E1E1E]">{user.name}</p>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-sm">
                  <UserIcon className="w-5 h-5 text-[#ED7A1C] mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Apellido</p>
                    <p className="Noto font-medium text-[#1E1E1E]">{user.lastName}</p>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-sm">
                  <MailIcon className="w-5 h-5 text-[#ED7A1C] mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="Noto font-medium text-[#1E1E1E]">{user.email}</p>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-sm">
                  <PhoneIcon className="w-5 h-5 text-[#ED7A1C] mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <p className="Noto font-medium text-[#1E1E1E]">
                      {user.phone || "No registrado"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-right mb-8">
                <button
                  onClick={() => setEditing(true)}
                  className="bg-[#ED7A1C] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#d96c17] transition duration-150 shadow-md cursor-pointer">
                  Editar Información
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <input
                className="border p-2 w-full"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Nombre"
              />
              <input
                className="border p-2 w-full"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                placeholder="Apellido"
              />
              <input
                className="border p-2 w-full"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email"
              />
              <input
                className="border p-2 w-full"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="Teléfono"
              />
              <input
                className="border p-2 w-full"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Nueva contraseña (opcional)"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 rounded bg-gray-300"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-orange-500 text-white"
                >
                  Guardar
                </button>
              </div>
            </form>
          )}

          {/* Historial de reservas 

          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-l-4 border-orange-500 pl-3"><HistoryIcon className="w-5 h-5 inline mr-2" />Historial de Reservas</h2>
          <p className="text-gray-500">
            ...
          </p>*/}
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
