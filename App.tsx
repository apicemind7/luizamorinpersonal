
import React, { useState } from 'react';
import { 
  HERO_IMAGES, 
  AUTHORITY_IMAGES, 
  SOCIAL_PROOF_IMAGES, 
  TRUST_CARDS, 
  STEPS,
  EXPERT_DATA
} from './constants';
import { CheckCircle, Instagram, MapPin, MessageCircle, X } from 'lucide-react';

// --- Subcomponents ---

const WhatsAppButton: React.FC<{ label: string; sublabel?: string; className?: string }> = ({ label, sublabel, className }) => (
  <div className={`flex flex-col items-center w-full max-w-sm mx-auto ${className}`}>
    <a 
      href={EXPERT_DATA.whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-green-600 hover:bg-green-700 text-white font-extrabold py-5 px-8 rounded-2xl w-full text-center shadow-xl shadow-green-200/50 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg md:text-xl"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      {label}
    </a>
    {sublabel && (
      <p className="mt-3 text-sm text-neutral-500 font-medium">
        {sublabel}
      </p>
    )}
  </div>
);

const Lightbox: React.FC<{ image: string | null; onClose: () => void }> = ({ image, onClose }) => {
  if (!image) return null;
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>
      <img 
        src={image} 
        alt="Resultado" 
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
      />
    </div>
  );
};

// --- Main Page Sections ---

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-12 pb-24 px-6 bg-white overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-50 -z-10 skew-x-[-15deg] translate-x-1/4"></div>
        
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col text-center md:text-left">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Especialista MTOR</span>
            <h1 className="text-4xl md:text-6xl font-black text-neutral-900 leading-[1.1] mb-6">
              Eu sou <span className="text-orange-600 uppercase">Luiz Amorim</span>,<br /> seu Personal Trainer em Araraquara.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed font-light">
              Especializado em <strong>reabilitação de lesões</strong> e alta performance. Recupere sua força e mobilidade com segurança absoluta.
            </p>
            <WhatsAppButton 
              label="Agendar consulta gratuita" 
              sublabel="Resposta rápida • Sem compromisso"
              className="md:mx-0"
            />
          </div>
          
          <div className="order-1 md:order-2 flex justify-center items-end relative h-[350px] md:h-[600px]">
            <img 
              src={HERO_IMAGES[0]} 
              alt="Luiz Amorim Hero" 
              className="h-full w-auto object-contain z-10 drop-shadow-2xl rounded-3xl"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-4/5 bg-neutral-100 rounded-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* QUEM SOU EU */}
      <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
             <img 
              src={AUTHORITY_IMAGES[0]} 
              alt="Sobre Luiz Amorim" 
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500">Autoridade & Experiência</h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Mais do que um treino, eu entrego a solução para suas dores. Com foco na metodologia MTOR, trabalho o corpo de forma inteligente, corrigindo desequilíbrios e fortalecendo o que realmente importa.
            </p>
            <ul className="space-y-4">
              {[
                "Especialista em Reabilitação de Lesões",
                "Certificado em Metodologia MTOR",
                "Foco total em Biomecânica aplicada",
                "Atendimento exclusivo e humanizado"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-neutral-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTADOS REAIS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Resultados que Falam</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">Transformações reais de alunos que confiaram no método e recuperaram sua qualidade de vida.</p>
        </div>
        
        <div className="max-w-6xl mx-auto columns-2 md:columns-4 gap-4 space-y-4">
          {SOCIAL_PROOF_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-sm border border-neutral-100"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Resultado ${idx}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
        
        <p className="text-center mt-8 text-xs text-neutral-400">
          Resultados podem variar de pessoa para pessoa. Fotos autorizadas.
        </p>
      </section>

      {/* POR QUE CONFIAR */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Diferenciais do meu Método</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRUST_CARDS.map((card, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 bg-orange-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-6 italic">O momento de parar de sentir dor é hoje.</h2>
          <p className="text-lg mb-10 text-orange-100">Não deixe para amanhã a saúde que você pode recuperar agora.</p>
          <div className="bg-white p-2 rounded-2xl inline-block w-full max-w-sm">
            <a 
              href={EXPERT_DATA.whatsappUrl} 
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">O Caminho da sua Evolução</h2>
            <p className="text-neutral-500">Simples, prático e 100% focado em você.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-neutral-100 -translate-y-1/2 -z-10"></div>
            
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-orange-600 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-neutral-500 px-4">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <p className="text-lg font-semibold text-neutral-800 mb-2">Primeira consulta 100% gratuita.</p>
             <p className="text-sm text-neutral-500">Sem pegadinhas, sem taxas ocultas.</p>
          </div>
        </div>
      </section>

      {/* MAIS PROVAS (Bastidores/Expert) */}
      <section className="py-24 px-6 bg-neutral-900">
         <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Bastidores</h2>
                <p className="text-neutral-400">Atendimento humanizado e focado em excelência técnica.</p>
              </div>
              <a 
                href={EXPERT_DATA.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-500 hover:text-orange-400 font-bold transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Siga no Instagram
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10">
                  <img src={HERO_IMAGES[0]} alt="Bastidores 1" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10">
                  <img src={AUTHORITY_IMAGES[0]} alt="Bastidores 2" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10 relative">
                  <img src={SOCIAL_PROOF_IMAGES[0]} alt="Bastidores 3" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <span className="text-white font-medium text-sm">Consultoria Personalizada</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
            Pronto para treinar sem dor e <span className="text-orange-600 uppercase underline decoration-4 underline-offset-8">vencer</span> suas limitações?
          </h2>
          <p className="text-xl text-neutral-600 mb-12">Garanta seu horário na primeira consulta gratuita e mude sua vida.</p>
          <WhatsAppButton 
            label="QUERO MINHA AVALIAÇÃO AGORA" 
            sublabel="Respostas rápidas via WhatsApp"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-50 py-16 px-6 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black text-neutral-900 mb-2 uppercase tracking-widest">{EXPERT_DATA.name}</h4>
            <p className="text-neutral-500 max-w-sm mb-4 leading-snug">{EXPERT_DATA.profession}</p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-neutral-400 text-sm">
              <MapPin className="w-4 h-4" />
              <a href={EXPERT_DATA.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-orange-600 transition-colors">
                {EXPERT_DATA.location} (Ver no Mapa)
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a href={EXPERT_DATA.instagramUrl} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border hover:border-orange-500 text-neutral-400 hover:text-orange-600 transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={EXPERT_DATA.whatsappUrl} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border hover:border-green-500 text-neutral-400 hover:text-green-600 transition-all">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            <p className="text-xs text-neutral-400">© {new Date().getFullYear()} {EXPERT_DATA.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default App;
