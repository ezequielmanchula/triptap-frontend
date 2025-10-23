
import Image from "next/image";
import { Review as ReviewType } from "@/utils/types";

const reviews: ReviewType[] = [
  {
    title: "¡Fácil y rápido!",
    paragraph: '"Reservé en menos de dos minutos. Todo muy intuitivo y sin complicaciones"',
    name: "Lucas R",
    img: "https://ui-avatars.com/api/?name=Lucas+R&background=random"
  },
  {
    title: "Atención impecable",
    paragraph: '"El diseño es claro y no tuve errores al pagar. Todo impecable."',
    name: "Laura G.",
    img: "https://ui-avatars.com/api/?name=Laura+G&background=random"
  },
  {
    title: "Rápido y confiable",
    paragraph: '"Los precios estaban claros y recibí el comprobante al instante."',
    name: "Franco P.",
    img: "https://ui-avatars.com/api/?name=Franco+P&background=random"
  }
  
];
export const ReviewSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="Rubik font-semibold text-[#1E1E1E] text-3xl xl:text-4xl mb-12">Lo que dicen nuestros pasajeros</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <Review
            key={index}
            title={review.title}
            paragraph={review.paragraph}
            name={review.name}
            img={review.img}
          />
        ))}
      </div>
    </div>
  </section>
);


const Review = ({ title, paragraph, name, img }: ReviewType) => (
  <div className="p-6 border border-gray-200 rounded-xl shadow-sm">
    <div className="text-yellow-500 text-xl mb-3">★★★★★</div>
    <h4 className="Rubik font-semibold text-xl text-[#1E1E1E] mb-2">{title}</h4>
    <p className="text-[#1E1E1E] text-base italic">{paragraph}</p>
    <div className="mt-4 flex items-center text-sm">
      <div className="w-8 h-8 rounded-full bg-gray-300 mr-2">
        <Image
          src={img}
          alt={name}
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <span className="text-base text-[#757575] font-semibold">{name}</span>
    </div>
  </div>
);

