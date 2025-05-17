const FAQ_ITEMS = [
  {
    question: "¿Duelen las prótesis acrílicas?",
    answer: "No. Puede haber un periodo corto de adaptación, pero no deben causar dolor. Si ocurre, es necesario ajustar la prótesis."
  },
  {
    question: "¿Cuánto tiempo duran?",
    answer: "Con buen cuidado y controles periódicos, pueden durar entre 5 y 10 años, dependiendo del uso y condiciones bucales del paciente."
  },
  {
    question: "¿Puedo comer normalmente?",
    answer: "Sí. Al principio, se recomienda una dieta blanda mientras te adaptas. Luego, podrás comer con normalidad, aunque es aconsejable evitar alimentos extremadamente duros o pegajosos."
  },
  {
    question: "¿Cómo afecta el habla?",
    answer: "Puede haber un breve periodo de adaptación (1-2 semanas) donde notes cambios en tu pronunciación. Con práctica y ajustes si son necesarios, recuperarás tu habla normal."
  }
];

const FAQSection = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Preguntas frecuentes sobre prótesis acrílicas</h2>
      
      <div className="space-y-6">
        {FAQ_ITEMS.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }) => (
  <div className="border border-gray-200 rounded-lg p-6">
    <h3 className="text-xl font-semibold text-blue-600 mb-3">{question}</h3>
    <p className="text-gray-700">{answer}</p>
  </div>
);

export default FAQSection;