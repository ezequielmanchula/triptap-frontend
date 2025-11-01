"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  ArrowLeftIcon,
  UserCircleIcon,
  HistoryIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import { useAuth } from "@app/context/AuthContext";
import { useRouter } from "next/navigation";

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
  phone?: string;
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
    phone: "",
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
          phone: data.phone || "",
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

  const payload: Partial<typeof formData> = {};

Object.entries(formData).forEach(([key, value]) => {
  if (key === "phone") {
    const str = String(value ?? "").trim();
    if (str !== "" && !isNaN(Number(str))) {
      payload.phone = Number(str);
    }
  } else if (typeof value === "string" && value.trim() !== "") {
    // key es "name" | "lastName" | "email" | "password"
    payload[key as Exclude<keyof typeof formData, "phone">] = value;
  }
});



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
      <Head>
        <title>Mi Perfil | Triptap</title>
      </Head>

      <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-10">
          {/* Botón de Volver */}
          <button
            onClick={() => router.push("/reservations")}
            className="flex items-center text-orange-500 hover:text-orange-700 mb-6 font-semibold"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Volver a Reservas
          </button>

          {/* Encabezado */}
          <div className="flex items-center border-b pb-4 mb-6">
            <UserCircleIcon className="w-12 h-12 text-gray-700 mr-4" />
            <h1 className="text-3xl font-bold text-gray-800">
              Hola, {user.name}
            </h1>
          </div>

          {/* Datos personales */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-l-4 border-orange-500 pl-3">
            Datos Personales y Contacto
          </h2>

          {!editing ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-sm">
                  <UserIcon className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Nombre</p>
                    <p className="font-medium text-gray-900">{user.name}</p>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-sm">
                  <UserIcon className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Apellido</p>
                    <p className="font-medium text-gray-900">{user.lastName}</p>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-sm">
                  <MailIcon className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">{user.email}</p>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-sm">
                  <PhoneIcon className="w-5 h-5 text-orange-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <p className="font-medium text-gray-900">
                      {user.phone || "No registrado"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-right mb-8">
                <button
                  onClick={() => setEditing(true)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-150 shadow-md"
                >
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

          {/* Historial de reservas */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-l-4 border-orange-500 pl-3">
            <HistoryIcon className="w-5 h-5 inline mr-2" />
            Historial de Reservas
          </h2>
          <p className="text-gray-500">
            Próximamente se integrará con el backend de reservas.
          </p>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
