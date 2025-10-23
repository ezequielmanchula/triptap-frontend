
import { Step }  from "@/utils/types";


export const StepCard = ({ icon, title, description }: Step) => (
  <div className="flex flex-col max-w-[357px] min-h-[213px] p-8 px-5 bg-white rounded-xl items-start justify-center opacity-100 border border-[#75757532] shadow-2xl">
    <div className="bg-orange-100 text-orange-500 rounded-full p-3 mb-4 flex items-start justify-center">{icon}</div>
    <h3 className="Rubik text-2xl font-medium text-[#171717] mb-2">{title}</h3>
    <p className="Noto text-base font-normal text-[#757575] text-start">{description}</p>
  </div>
);