
import { FaCheckSquare } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { TbLogout } from "react-icons/tb";
import Button from "@/app/components/common/Button";

export default function Confirmation() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-12">
      <div className="flex flex-col justify-center items-center text-[#171717] px-6 mb-8 md:mb-12 lg:mb-16">
        <div className="flex flex-row items-center justify-center mb-4 gap-2">
          <FaCheckSquare size={26} color="#46a758" />
          <h1 className="Rubik text-2xl font-semibold">¡Reserva confirmada con éxito!</h1>
        </div>
        <p className="Rubik text-base font-normal text-center max-w-2xl mb-4 md:mb-6 lg:mb-8">Tu viaje ya está listo. En unos segundos recibirás tu pasaje digital en tu correo electrónico.</p>
      </div>

      {/* Contenedor principal */}
      <div className="container px-4 mx-auto flex flex-col-reverse justify-center lg:flex-row lg:gap-8 xl:gap-12">
        {/* Primera sección - Reserva confirmada */}
        <div className="w-full lg:w-7/12 xl:w-8/12 p-4 md:p-6 lg:p-8">
          {/* Fecha y ruta */}
          <div className="border-b border-[#DBDBDB] pb-4 md:pb-6 lg:pb-8 mb-4 md:mb-6 lg:mb-8">
            <div className="mb-4 md:mb-6 lg:mb-8 text-[#1E1E1E]">
              <h2 className="Rubik text-base font-normal mb-2 md:mb-3 lg:mb-4">Lunes 13 de octubre de 2025</h2>
              <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                <span className="Rubik text-2xl font-bold">Cañuelas</span>
                <span><IoIosArrowRoundForward size={24} color="#1E1E1E" /></span>
                <span className="Rubik text-2xl font-bold">Capital Federal</span>
              </div>
            </div>

            {/* Horarios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <div>
                <p className="Rubik text-xl font-light text-[#757575]">
                  Salida: <span className="text-[#1E1E1E]">7:30am</span>
                </p>
              </div>
              <div>
                <p className="Rubik text-xl font-light text-[#757575]">
                  Llegada: <span className="text-[#1E1E1E]">9:00am</span>
                </p>
              </div>
            </div>
          </div>

          {/* Resumen del viaje */}
          <div className="mb-6 md:mb-8 lg:mb-10">
            <h3 className="Rubik font-medium text-base mb-3 md:mb-4 lg:mb-5">Resumen del viaje</h3>

            <div className="flex flex-col sm:flex-row justify-start gap-3 md:gap-4 lg:gap-5">
              <div className="bg-[#ED7A1C1A] rounded-2xl p-3 md:p-4 flex-1 max-w-[150px] sm:min-w-[160px] md:min-w-[180px]">
                <p className="Noto text-base font-normal text-center text-[#ED7A1C]">Asiento 02</p>
              </div>
            </div>
          </div>

          {/* Datos de contacto */}
          <div className="mb-6 md:mb-8 lg:mb-10">
            <h3 className="Rubik font-medium text-base mb-3 md:mb-4 lg:mb-5">Datos de contacto</h3>

            <div className="space-y-3 md:space-y-4 lg:space-y-5">
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <p className="Noto text-sm font-medium text-[#333333] sm:w-2/5">Nombre:</p>
                <p className="Noto text-sm font-medium text-[#757575] sm:w-3/5">Lucia Fernandez</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <p className="Noto text-sm font-medium text-[#333333] sm:w-2/5">Email:</p>
                <p className="Noto  text-sm font-medium text-[#757575] sm:w-3/5">luciafernandez@gmail.com</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <p className="Noto text-sm font-medium text-[#333333] sm:w-2/5">Teléfono:</p>
                <p className="Noto text-sm font-medium text-[#757575] sm:w-3/5">+54 9 01 2345-6789</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <p className="Rubik font-medium text-base sm:w-2/5">Método de pago:</p>
                <p className="Noto text-sm font-medium text-[#757575] sm:w-3/5">Pago en terminal (efectivo)</p>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="flex flex-row justify-between mb-6 md:mb-8 lg:mb-10 border-t border-[#DBDBDB] pt-6 md:pt-8 lg:pt-10">
            <h3 className="Rubik font-normal text-2xl text-[#171717]">Total:</h3>
            <p className="Rubik text-2xl font-semibold text-[#ED7A1C]">$15000</p>
          </div>
        </div>

        {/* Segunda sección - Triptap */}
        <div className="w-full lg:w-5/12 xl:w-4/12 border border-gray-300 shadow-2xl rounded-2xl p-4 md:p-6 lg:p-8 mb-8 lg:mb-0 h-fit">
          <div className="flex flex-col items-start gap-3 mb-6 md:mb-8 lg:mb-10">
            <Image 
              src="/images/Logo.png" 
              alt="Logo"
              width={120}
              height={40}
              className="h-auto w-auto mb-3"
              priority
            /> 
            <Image 
              src="/images/qr.png" 
              alt="QR Code"
              width={150}
              height={150}
              className="h-auto w-auto"
              priority
            /> 
          </div>

          {/* Fecha y ruta */}
          <div className="mb-6 md:mb-8 lg:mb-10">
            <div className="border-b border-[#DBDBDB] pb-4 md:pb-6 lg:pb-8">
              <div className="mb-4 md:mb-6 lg:mb-8 text-[#1E1E1E]">
                <h2 className="Rubik text-base font-normal mb-2 md:mb-3 lg:mb-4">Lunes 13 de octubre de 2025</h2>
                <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                  <span className="Rubik text-2xl font-bold">Cañuelas</span>
                  <span><IoIosArrowRoundForward size={24} color="#1E1E1E" /></span>
                  <span className="Rubik text-2xl font-bold">Capital Federal</span>
                </div>
              </div>

              {/* Horarios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                <div>
                  <p className="Rubik text-xl font-light text-[#757575]">
                    Salida: <span className="text-[#1E1E1E]">7:30am</span>
                  </p>
                </div>
                <div>
                  <p className="Rubik text-xl font-light text-[#757575]">
                    Llegada: <span className="text-[#1E1E1E]">9:00am</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen del viaje */}
          <div className="mb-6 md:mb-8 lg:mb-10">
            <h3 className="Rubik font-medium text-base mb-3 md:mb-4 lg:mb-5">Resumen del viaje</h3>

            <div className="flex flex-col sm:flex-row justify-start gap-3 md:gap-4 lg:gap-5">
              <div className="bg-[#ED7A1C1A] rounded-2xl p-3 md:p-4 flex-1 min-w-[140px] sm:min-w-[160px] md:min-w-[180px]">
                <p className=" Noto text-base font-normal text-center text-[#ED7A1C]">Asiento 02</p>
              </div>
            </div>
          </div>

          {/* Datos de contacto */}
          <div className="mb-6 md:mb-8 lg:mb-10">
            <h3 className="Rubik font-medium text-base mb-3 md:mb-4 lg:mb-5">Datos de contacto</h3>

            <div className="space-y-3 md:space-y-4 lg:space-y-5">
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <p className="Noto text-sm font-medium text-[#333333] sm:w-2/5">Nombre:</p>
                <p className="Noto text-sm font-medium text-[#757575] sm:w-3/5">Lucia Fernandez</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <p className="Noto text-sm font-medium text-[#333333] sm:w-2/5">Teléfono:</p>
                <p className="Noto text-sm font-medium text-[#757575] sm:w-3/5">+54 9 01 2345-6789</p>
              </div>
            </div>
          </div>

          {/* Botón descargar */}
          <div>
            <Button
              type="button"
              label="Cerrar sesión"
              icon={<TbLogout />}
            />
          </div>
          
          {/* Footer */}
          <div className="text-start pt-4 md:pt-6 lg:pt-8 border-t border-[#DBDBDB]">
            <p className="Noto text-sm text-[#171717]">Mostrá este código al abordar el micro. No es necesario imprimirlo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}